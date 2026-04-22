"use strict";
r.d(t, { Y: () => u });
var i = r(627968),
    a = r(64700),
    n = r(503698),
    s = r.n(n),
    l = r(615300),
    o = r(844222),
    c = r(73939),
    d = r(890321);
class _ extends a.PureComponent {
    static contextType = o.C;
    static defaultProps = { duration: 300 };
    state = { animationProgress: new l.A.Value(0), targetHeight: 0, baseHeight: 0, animationState: null };
    direction = this.props.getDirection();
    _measureRef = a.createRef();
    componentDidMount() {
        if (null != this._measureRef.current) {
            let { height: e } = this._measureRef.current.getBoundingClientRect();
            this.setState({ targetHeight: e, baseHeight: this.props.getBaseHeight() });
        }
    }
    componentDidUpdate(e, t) {
        t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight);
    }
    componentWillAppear(e) {
        this.setState({ animationState: 2 }), e();
    }
    componentDidAppear() {
        let { animationProgress: e, targetHeight: t } = this.state;
        e.setValue(2), this.setState({ animationState: 3, baseHeight: t });
    }
    componentWillEnter(e) {
        let { duration: t } = this.props,
            { animationProgress: r } = this.state;
        this.setState({ animationState: 0 }),
            this.props.setHeight(this.state.targetHeight),
            l.A.timing(r, { toValue: 2, duration: t, delay: t / 2 }).start(e);
    }
    componentDidEnter() {
        this.setState({ animationState: 3 });
    }
    componentWillLeave(e) {
        let { animationProgress: t } = this.state,
            { duration: r, getDirection: i } = this.props;
        (this.direction = i()),
            this.setState({ animationState: 1 }),
            l.A.timing(t, { toValue: 0, duration: r }).start(e);
    }
    componentDidLeave() {
        this.setState({ animationState: 3 });
    }
    getMotionAnimation() {
        let { reducedMotion: e } = this.context;
        if (e.enabled) return null;
        let { animationMotionType: t } = this.props,
            { animationProgress: r, animationState: i } = this.state,
            a = (1 === i ? -1 : 1) * this.direction;
        switch (t) {
            case "slide":
                return {
                    transform: [
                        {
                            translateX: r.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${150 * a}%`, "0%"],
                                extrapolate: "clamp",
                                easing: l.A.Easing.inOut(l.A.Easing.ease),
                            }),
                        },
                    ],
                };
            case "lift":
                return {
                    transform: [
                        {
                            translateY: r.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${10 * a}%`, "0%"],
                                extrapolate: "clamp",
                                easing: l.A.Easing.inOut(l.A.Easing.ease),
                            }),
                        },
                    ],
                };
            default:
                return null;
        }
    }
    getAnimatedStyle() {
        let { fillParent: e } = this.props,
            { animationProgress: t, animationState: r, baseHeight: i, targetHeight: a } = this.state,
            n = this.props.sideMargin ?? 0,
            s = this.props.verticalMargin ?? 0,
            o = 1 === r,
            c = 0 === r;
        return {
            ...{
                overflow: c || o ? "hidden" : "visible",
                position: o ? "absolute" : void 0,
                top: o ? s : void 0,
                left: o ? n : void 0,
                right: o ? n : void 0,
                bottom: o ? s : void 0,
            },
            ...this.getMotionAnimation(),
            opacity: t.interpolate({
                inputRange: [0, 2],
                outputRange: [0, 1],
                extrapolate: "clamp",
                easing: l.A.Easing.inOut(l.A.Easing.ease),
            }),
            height: c
                ? t.interpolate({
                      inputRange: [0, 1],
                      outputRange: [i, a],
                      extrapolate: "clamp",
                      easing: l.A.Easing.inOut(l.A.Easing.ease),
                  })
                : e
                  ? "100%"
                  : "auto",
        };
    }
    render() {
        let { fillParent: e, className: t, animatedNodeClassName: r, staticClassName: a } = this.props,
            { animationState: n } = this.state;
        return e
            ? (0, i.jsx)("div", {
                  ref: this._measureRef,
                  className: s()(d.OD, t, { [s()(d.Mh, a)]: 3 === n }),
                  children: (0, i.jsx)(l.A.div, {
                      className: s()(d.sP, r),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              })
            : (0, i.jsx)("div", {
                  ref: this._measureRef,
                  className: s()(d.PG, t),
                  children: (0, i.jsx)(l.A.div, {
                      className: s()(d.sP, r),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              });
    }
}
class u extends a.Component {
    stepHeights = {};
    prevStep = null;
    prevSteps = [];
    static defaultProps = { fillParent: !1, animationMotionType: "slide" };
    componentDidMount() {
        this.setPrevSteps();
    }
    componentDidUpdate() {
        this.setPrevSteps();
    }
    setPrevSteps() {
        let { step: e, steps: t } = this.props;
        (this.prevStep = e), (this.prevSteps = t);
    }
    getBaseHeight = () =>
        null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0;
    getDirection = () => {
        let { steps: e, step: t } = this.props,
            r = null != this.prevStep ? e.indexOf(this.prevStep) : -1,
            i = -1 === r && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
        return Math.max(r, i) > e.indexOf(t) ? -1 : 1;
    };
    setHeight = (e) => {
        let { step: t } = this.props;
        this.stepHeights[t] = e;
    };
    render() {
        let {
            overrideKey: e,
            step: t,
            className: r,
            innerClassName: a,
            animatedNodeClassName: n,
            staticClassName: l,
            sideMargin: o,
            verticalMargin: u,
            children: p,
            fillParent: m,
            animationMotionType: h,
        } = this.props;
        return (0, i.jsx)(c.F, {
            component: "div",
            className: s()(d.NK, r),
            children: (0, i.jsx)(
                _,
                {
                    fillParent: m,
                    sideMargin: o,
                    animationMotionType: h ?? "slide",
                    verticalMargin: u,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: a,
                    animatedNodeClassName: n,
                    staticClassName: l,
                    setHeight: this.setHeight,
                    children: p,
                },
                e ?? `${t}`,
            ),
        });
    }
}
