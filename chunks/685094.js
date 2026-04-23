s.d(t, { Y: () => h });
var i = s(627968),
    a = s(64700),
    r = s(503698),
    n = s.n(r),
    o = s(615300),
    l = s(844222),
    p = s(73939),
    c = s(188625);
class d extends a.PureComponent {
    static contextType = l.C;
    static defaultProps = { duration: 300 };
    state = { animationProgress: new o.A.Value(0), targetHeight: 0, baseHeight: 0, animationState: null };
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
            { animationProgress: s } = this.state;
        this.setState({ animationState: 0 }),
            this.props.setHeight(this.state.targetHeight),
            o.A.timing(s, { toValue: 2, duration: t, delay: t / 2 }).start(e);
    }
    componentDidEnter() {
        this.setState({ animationState: 3 });
    }
    componentWillLeave(e) {
        let { animationProgress: t } = this.state,
            { duration: s, getDirection: i } = this.props;
        (this.direction = i()),
            this.setState({ animationState: 1 }),
            o.A.timing(t, { toValue: 0, duration: s }).start(e);
    }
    componentDidLeave() {
        this.setState({ animationState: 3 });
    }
    getMotionAnimation() {
        let { reducedMotion: e } = this.context;
        if (e.enabled) return null;
        let { animationMotionType: t } = this.props,
            { animationProgress: s, animationState: i } = this.state,
            a = (1 === i ? -1 : 1) * this.direction;
        switch (t) {
            case "slide":
                return {
                    transform: [
                        {
                            translateX: s.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${150 * a}%`, "0%"],
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
                            translateY: s.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${10 * a}%`, "0%"],
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
            { animationProgress: t, animationState: s, baseHeight: i, targetHeight: a } = this.state,
            r = this.props.sideMargin ?? 0,
            n = this.props.verticalMargin ?? 0,
            l = 1 === s,
            p = 0 === s;
        return {
            ...{
                overflow: p || l ? "hidden" : "visible",
                position: l ? "absolute" : void 0,
                top: l ? n : void 0,
                left: l ? r : void 0,
                right: l ? r : void 0,
                bottom: l ? n : void 0,
            },
            ...this.getMotionAnimation(),
            opacity: t.interpolate({
                inputRange: [0, 2],
                outputRange: [0, 1],
                extrapolate: "clamp",
                easing: o.A.Easing.inOut(o.A.Easing.ease),
            }),
            height: p
                ? t.interpolate({
                      inputRange: [0, 1],
                      outputRange: [i, a],
                      extrapolate: "clamp",
                      easing: o.A.Easing.inOut(o.A.Easing.ease),
                  })
                : e
                  ? "100%"
                  : "auto",
        };
    }
    render() {
        let { fillParent: e, className: t, animatedNodeClassName: s, staticClassName: a } = this.props,
            { animationState: r } = this.state;
        return e
            ? (0, i.jsx)("div", {
                  ref: this._measureRef,
                  className: n()(c.OD, t, { [n()(c.Mh, a)]: 3 === r }),
                  children: (0, i.jsx)(o.A.div, {
                      className: n()(c.sP, s),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              })
            : (0, i.jsx)("div", {
                  ref: this._measureRef,
                  className: n()(c.PG, t),
                  children: (0, i.jsx)(o.A.div, {
                      className: n()(c.sP, s),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              });
    }
}
class h extends a.Component {
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
            s = null != this.prevStep ? e.indexOf(this.prevStep) : -1,
            i = -1 === s && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
        return Math.max(s, i) > e.indexOf(t) ? -1 : 1;
    };
    setHeight = (e) => {
        let { step: t } = this.props;
        this.stepHeights[t] = e;
    };
    render() {
        let {
            overrideKey: e,
            step: t,
            className: s,
            innerClassName: a,
            animatedNodeClassName: r,
            staticClassName: o,
            sideMargin: l,
            verticalMargin: h,
            children: u,
            fillParent: m,
            animationMotionType: _,
        } = this.props;
        return (0, i.jsx)(p.F, {
            component: "div",
            className: n()(c.NK, s),
            children: (0, i.jsx)(
                d,
                {
                    fillParent: m,
                    sideMargin: l,
                    animationMotionType: _ ?? "slide",
                    verticalMargin: h,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: a,
                    animatedNodeClassName: r,
                    staticClassName: o,
                    setHeight: this.setHeight,
                    children: u,
                },
                e ?? `${t}`,
            ),
        });
    }
}
