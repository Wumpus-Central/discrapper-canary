n.d(t, { q: () => h }), n(47120);
var i,
    r,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(748780),
    c = n(215569),
    d = n(186325),
    f = n(68699);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class p extends (i = s.PureComponent) {
    componentDidMount() {
        if (null != this._measureRef.current) {
            let { height: e } = this._measureRef.current.getBoundingClientRect();
            this.setState({
                targetHeight: e,
                baseHeight: this.props.getBaseHeight()
            });
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
        e.setValue(2),
            this.setState({
                animationState: 3,
                baseHeight: t
            });
    }
    componentWillEnter(e) {
        let { duration: t } = this.props,
            { animationProgress: n } = this.state;
        this.setState({ animationState: 0 }),
            this.props.setHeight(this.state.targetHeight),
            u.Z.timing(n, {
                toValue: 2,
                duration: t,
                delay: t / 2
            }).start(e);
    }
    componentDidEnter() {
        this.setState({ animationState: 3 });
    }
    componentWillLeave(e) {
        let { animationProgress: t } = this.state,
            { duration: n, getDirection: i } = this.props;
        (this.direction = i()),
            this.setState({ animationState: 1 }),
            u.Z.timing(t, {
                toValue: 0,
                duration: n
            }).start(e);
    }
    componentDidLeave() {
        this.setState({ animationState: 3 });
    }
    getMotionAnimation() {
        let { reducedMotion: e } = this.context;
        if (e.enabled) return null;
        let { animationMotionType: t } = this.props,
            { animationProgress: n, animationState: i } = this.state,
            r = (1 === i ? -1 : 1) * this.direction;
        switch (t) {
            case 'slide':
                return {
                    transform: [
                        {
                            translateX: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: [''.concat(150 * r, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: u.Z.Easing.inOut(u.Z.Easing.ease)
                            })
                        }
                    ]
                };
            case 'lift':
                return {
                    transform: [
                        {
                            translateY: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: [''.concat(10 * r, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: u.Z.Easing.inOut(u.Z.Easing.ease)
                            })
                        }
                    ]
                };
            default:
                return null;
        }
    }
    getAnimatedStyle() {
        var e, t;
        let { fillParent: n } = this.props,
            { animationProgress: i, animationState: r, baseHeight: a, targetHeight: s } = this.state,
            o = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0,
            l = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0,
            c = 1 === r,
            d = 0 === r;
        return {
            overflow: d || c ? 'hidden' : 'visible',
            position: c ? 'absolute' : void 0,
            top: c ? l : void 0,
            left: c ? o : void 0,
            right: c ? o : void 0,
            bottom: c ? l : void 0,
            ...this.getMotionAnimation(),
            opacity: i.interpolate({
                inputRange: [0, 2],
                outputRange: [0, 1],
                extrapolate: 'clamp',
                easing: u.Z.Easing.inOut(u.Z.Easing.ease)
            }),
            height: d
                ? i.interpolate({
                      inputRange: [0, 1],
                      outputRange: [a, s],
                      extrapolate: 'clamp',
                      easing: u.Z.Easing.inOut(u.Z.Easing.ease)
                  })
                : n
                  ? '100%'
                  : 'auto'
        };
    }
    render() {
        let { fillParent: e, className: t, animatedNodeClassName: n, staticClassName: i } = this.props,
            { animationState: r } = this.state;
        return e
            ? (0, a.jsx)('div', {
                  ref: this._measureRef,
                  className: l()(f.measurementFill, t, { [l()(f.measurementFillStatic, i)]: 3 === r }),
                  children: (0, a.jsx)(u.Z.div, {
                      className: l()(f.animatedNode, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              })
            : (0, a.jsx)('div', {
                  ref: this._measureRef,
                  className: l()(f.measurement, t),
                  children: (0, a.jsx)(u.Z.div, {
                      className: l()(f.animatedNode, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                animationProgress: new u.Z.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }),
            _(this, 'direction', this.props.getDirection()),
            _(this, '_measureRef', s.createRef());
    }
}
_(p, 'contextType', d.S), _(p, 'defaultProps', { duration: 300 });
class h extends (r = s.Component) {
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
    render() {
        let { step: e, className: t, innerClassName: n, animatedNodeClassName: i, staticClassName: r, sideMargin: s, verticalMargin: o, children: u, fillParent: d, animationMotionType: _ } = this.props;
        return (0, a.jsx)(c.W, {
            component: 'div',
            className: l()(f.transitionGroup, t),
            children: (0, a.jsx)(
                p,
                {
                    fillParent: d,
                    sideMargin: s,
                    animationMotionType: null != _ ? _ : 'slide',
                    verticalMargin: o,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: n,
                    animatedNodeClassName: i,
                    staticClassName: r,
                    setHeight: this.setHeight,
                    children: u
                },
                ''.concat(e)
            )
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'stepHeights', {}),
            _(this, 'prevStep', null),
            _(this, 'prevSteps', []),
            _(this, 'getBaseHeight', () => (null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0)),
            _(this, 'getDirection', () => {
                let { steps: e, step: t } = this.props,
                    n = null != this.prevStep ? e.indexOf(this.prevStep) : -1,
                    i = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
                return Math.max(n, i) > e.indexOf(t) ? -1 : 1;
            }),
            _(this, 'setHeight', (e) => {
                let { step: t } = this.props;
                this.stepHeights[t] = e;
            });
    }
}
_(h, 'defaultProps', {
    fillParent: !1,
    animationMotionType: 'slide'
});
