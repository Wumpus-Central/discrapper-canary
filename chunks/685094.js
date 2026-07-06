i.d(e, { Y: () => d });
var s = i(627968),
    a = i(64700),
    n = i(503698),
    r = i.n(n),
    p = i(615300),
    o = i(844222),
    h = i(868285),
    l = i(890321);
class g extends a.PureComponent {
    static contextType = o.C;
    static defaultProps = { duration: 300 };
    state = { animationProgress: new p.A.Value(0), targetHeight: 0, baseHeight: 0, animationState: null };
    direction = this.props.getDirection();
    _measureRef = a.createRef();
    componentDidMount() {
        if (null != this._measureRef.current) {
            let { height: t } = this._measureRef.current.getBoundingClientRect();
            this.setState({ targetHeight: t, baseHeight: this.props.getBaseHeight() });
        }
    }
    componentDidUpdate(t, e) {
        e.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight);
    }
    componentWillAppear(t) {
        this.setState({ animationState: 2 }), t();
    }
    componentDidAppear() {
        let { animationProgress: t, targetHeight: e } = this.state;
        t.setValue(2), this.setState({ animationState: 3, baseHeight: e });
    }
    componentWillEnter(t) {
        let { duration: e } = this.props,
            { animationProgress: i } = this.state;
        this.setState({ animationState: 0 }),
            this.props.setHeight(this.state.targetHeight),
            p.A.timing(i, { toValue: 2, duration: e, delay: e / 2 }).start(t);
    }
    componentDidEnter() {
        this.setState({ animationState: 3 });
    }
    componentWillLeave(t) {
        let { animationProgress: e } = this.state,
            { duration: i, getDirection: s } = this.props;
        (this.direction = s()),
            this.setState({ animationState: 1 }),
            p.A.timing(e, { toValue: 0, duration: i }).start(t);
    }
    componentDidLeave() {
        this.setState({ animationState: 3 });
    }
    getMotionAnimation() {
        let { reducedMotion: t } = this.context;
        if (t.enabled) return null;
        let { animationMotionType: e } = this.props,
            { animationProgress: i, animationState: s } = this.state,
            a = (1 === s ? -1 : 1) * this.direction;
        switch (e) {
            case "slide":
                return {
                    transform: [
                        {
                            translateX: i.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${150 * a}%`, "0%"],
                                extrapolate: "clamp",
                                easing: p.A.Easing.inOut(p.A.Easing.ease),
                            }),
                        },
                    ],
                };
            case "lift":
                return {
                    transform: [
                        {
                            translateY: i.interpolate({
                                inputRange: [0, 2],
                                outputRange: [`${10 * a}%`, "0%"],
                                extrapolate: "clamp",
                                easing: p.A.Easing.inOut(p.A.Easing.ease),
                            }),
                        },
                    ],
                };
            default:
                return null;
        }
    }
    getAnimatedStyle() {
        let { fillParent: t } = this.props,
            { animationProgress: e, animationState: i, baseHeight: s, targetHeight: a } = this.state,
            n = this.props.sideMargin ?? 0,
            r = this.props.verticalMargin ?? 0,
            o = 1 === i,
            h = 0 === i;
        return {
            ...{
                overflow: h || o ? "hidden" : "visible",
                position: o ? "absolute" : void 0,
                top: o ? r : void 0,
                left: o ? n : void 0,
                right: o ? n : void 0,
                bottom: o ? r : void 0,
            },
            ...this.getMotionAnimation(),
            opacity: e.interpolate({
                inputRange: [0, 2],
                outputRange: [0, 1],
                extrapolate: "clamp",
                easing: p.A.Easing.inOut(p.A.Easing.ease),
            }),
            height: h
                ? e.interpolate({
                      inputRange: [0, 1],
                      outputRange: [s, a],
                      extrapolate: "clamp",
                      easing: p.A.Easing.inOut(p.A.Easing.ease),
                  })
                : t
                  ? "100%"
                  : "auto",
        };
    }
    render() {
        let { fillParent: t, className: e, animatedNodeClassName: i, staticClassName: a } = this.props,
            { animationState: n } = this.state;
        return t
            ? (0, s.jsx)("div", {
                  ref: this._measureRef,
                  className: r()(l.OD, e, { [r()(l.Mh, a)]: 3 === n }),
                  children: (0, s.jsx)(p.A.div, {
                      className: r()(l.sP, i),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              })
            : (0, s.jsx)("div", {
                  ref: this._measureRef,
                  className: r()(l.PG, e),
                  children: (0, s.jsx)(p.A.div, {
                      className: r()(l.sP, i),
                      style: this.getAnimatedStyle(),
                      children: this.props.children,
                  }),
              });
    }
}
class d extends a.Component {
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
        let { step: t, steps: e } = this.props;
        (this.prevStep = t), (this.prevSteps = e);
    }
    getBaseHeight = () =>
        null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0;
    getDirection = () => {
        let { steps: t, step: e } = this.props,
            i = null != this.prevStep ? t.indexOf(this.prevStep) : -1,
            s = -1 === i && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
        return Math.max(i, s) > t.indexOf(e) ? -1 : 1;
    };
    setHeight = (t) => {
        let { step: e } = this.props;
        this.stepHeights[e] = t;
    };
    render() {
        let {
            overrideKey: t,
            step: e,
            className: i,
            innerClassName: a,
            animatedNodeClassName: n,
            staticClassName: p,
            sideMargin: o,
            verticalMargin: d,
            children: c,
            fillParent: u,
            animationMotionType: m,
        } = this.props;
        return (0, s.jsx)(h.F, {
            component: "div",
            className: r()(l.NK, i),
            children: (0, s.jsx)(
                g,
                {
                    fillParent: u,
                    sideMargin: o,
                    animationMotionType: m ?? "slide",
                    verticalMargin: d,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: a,
                    animatedNodeClassName: n,
                    staticClassName: p,
                    setHeight: this.setHeight,
                    children: c,
                },
                t ?? `${e}`,
            ),
        });
    }
}
