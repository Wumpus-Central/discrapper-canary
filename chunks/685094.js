"use strict";
n.d(t, { Y: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    l = n(158954),
    u = n(73939),
    c = n(539020);
class d extends i.PureComponent {
    static contextType = l.CZY;
    static defaultProps = { duration: 300 };
    state = { animationProgress: new o.A.Value(0), targetHeight: 0, baseHeight: 0, animationState: null };
    direction = this.props.getDirection();
    _measureRef = i.createRef();
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
            { animationProgress: n } = this.state;
        this.setState({ animationState: 0 }),
            this.props.setHeight(this.state.targetHeight),
            o.A.timing(n, { toValue: 2, duration: t, delay: t / 2 }).start(e);
    }
    componentDidEnter() {
        this.setState({ animationState: 3 });
    }
    componentWillLeave(e) {
        let { animationProgress: t } = this.state,
            { duration: n, getDirection: r } = this.props;
        (this.direction = r()),
            this.setState({ animationState: 1 }),
            o.A.timing(t, { toValue: 0, duration: n }).start(e);
    }
    componentDidLeave() {
        this.setState({ animationState: 3 });
    }
    getMotionAnimation() {
        let { reducedMotion: e } = this.context;
        if (e.enabled) return null;
        let { animationMotionType: t } = this.props,
            { animationProgress: n, animationState: r } = this.state,
            i = (1 === r ? -1 : 1) * this.direction;
        switch (t) {
            case "slide":
                return {
                    transform: [
                        {
                            translateX: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${150 * i}%`, "0%"],
                                extrapolate: "clamp",
                                easing: o.A.Easing.inOut(o.A.Easing.ease),
                            }),
                        },
                    ],
                };
            case "lift":
                return {
                    transform: [
                        {
                            translateY: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${10 * i}%`, "0%"],
                                extrapolate: "clamp",
                                easing: o.A.Easing.inOut(o.A.Easing.ease),
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
            { animationProgress: t, animationState: n, baseHeight: r, targetHeight: i } = this.state,
            a = this.props.sideMargin ?? 0,
            s = this.props.verticalMargin ?? 0,
            l = 1 === n,
            u = 0 === n;
        return {
            ...{
                overflow: u || l ? "hidden" : "visible",
                position: l ? "absolute" : void 0,
                top: l ? s : void 0,
                left: l ? a : void 0,
                right: l ? a : void 0,
                bottom: l ? s : void 0,
            },
            ...this.getMotionAnimation(),
            opacity: t.interpolate({
                inputRange: [0, 2],
                outputRange: [0, 1],
                extrapolate: "clamp",
                easing: o.A.Easing.inOut(o.A.Easing.ease),
            }),
            height: u
                ? t.interpolate({
                      inputRange: [0, 1],
                      outputRange: [r, i],
                      extrapolate: "clamp",
                      easing: o.A.Easing.inOut(o.A.Easing.ease),
                  })
                : e
                  ? "100%"
                  : "auto",
        };
    }
    render() {
        let { fillParent: e, className: t, animatedNodeClassName: n, staticClassName: i } = this.props,
            { animationState: a } = this.state;
        return e
            ? (0, r.jsx)("div", {
                  ref: this._measureRef,
                  className: s()(c.OD, t, { [s()(c.Mh, i)]: 3 === a }),
                  children: (0, r.jsx)(o.A.div, {
                      className: s()(c.sP, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              })
            : (0, r.jsx)("div", {
                  ref: this._measureRef,
                  className: s()(c.PG, t),
                  children: (0, r.jsx)(o.A.div, {
                      className: s()(c.sP, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              });
    }
}
class _ extends i.Component {
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
            n = null != this.prevStep ? e.indexOf(this.prevStep) : -1,
            r = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
        return Math.max(n, r) > e.indexOf(t) ? -1 : 1;
    };
    setHeight = (e) => {
        let { step: t } = this.props;
        this.stepHeights[t] = e;
    };
    render() {
        let {
            overrideKey: e,
            step: t,
            className: n,
            innerClassName: i,
            animatedNodeClassName: a,
            staticClassName: o,
            sideMargin: l,
            verticalMargin: _,
            children: f,
            fillParent: p,
            animationMotionType: h,
        } = this.props;
        return (0, r.jsx)(u.F, {
            component: "div",
            className: s()(c.NK, n),
            children: (0, r.jsx)(
                d,
                {
                    fillParent: p,
                    sideMargin: l,
                    animationMotionType: h ?? "slide",
                    verticalMargin: _,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: i,
                    animatedNodeClassName: a,
                    staticClassName: o,
                    setHeight: this.setHeight,
                    children: f,
                },
                e ?? `${t}`,
            ),
        });
    }
}
