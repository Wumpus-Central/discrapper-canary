n.d(t, { q: () => E }), n(47120);
var r,
    i,
    o = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    c = n(748780),
    u = n(215569),
    d = n(186325),
    f = n(576525);
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class g extends (r = a.PureComponent) {
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
            c.Z.timing(n, {
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
            { duration: n, getDirection: r } = this.props;
        (this.direction = r()),
            this.setState({ animationState: 1 }),
            c.Z.timing(t, {
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
            { animationProgress: n, animationState: r } = this.state,
            i = (1 === r ? -1 : 1) * this.direction;
        switch (t) {
            case 'slide':
                return {
                    transform: [
                        {
                            translateX: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: [''.concat(150 * i, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: c.Z.Easing.inOut(c.Z.Easing.ease)
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
                                outputRange: [''.concat(10 * i, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: c.Z.Easing.inOut(c.Z.Easing.ease)
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
            { animationProgress: r, animationState: i, baseHeight: o, targetHeight: a } = this.state,
            s = null != (e = this.props.sideMargin) ? e : 0,
            l = null != (t = this.props.verticalMargin) ? t : 0,
            u = 1 === i,
            d = 0 === i;
        return m(
            p(
                {},
                {
                    overflow: d || u ? 'hidden' : 'visible',
                    position: u ? 'absolute' : void 0,
                    top: u ? l : void 0,
                    left: u ? s : void 0,
                    right: u ? s : void 0,
                    bottom: u ? l : void 0
                },
                this.getMotionAnimation()
            ),
            {
                opacity: r.interpolate({
                    inputRange: [0, 2],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                    easing: c.Z.Easing.inOut(c.Z.Easing.ease)
                }),
                height: d
                    ? r.interpolate({
                          inputRange: [0, 1],
                          outputRange: [o, a],
                          extrapolate: 'clamp',
                          easing: c.Z.Easing.inOut(c.Z.Easing.ease)
                      })
                    : n
                      ? '100%'
                      : 'auto'
            }
        );
    }
    render() {
        let { fillParent: e, className: t, animatedNodeClassName: n, staticClassName: r } = this.props,
            { animationState: i } = this.state;
        return e
            ? (0, o.jsx)('div', {
                  ref: this._measureRef,
                  className: l()(f.measurementFill, t, { [l()(f.measurementFillStatic, r)]: 3 === i }),
                  children: (0, o.jsx)(c.Z.div, {
                      className: l()(f.animatedNode, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              })
            : (0, o.jsx)('div', {
                  ref: this._measureRef,
                  className: l()(f.measurement, t),
                  children: (0, o.jsx)(c.Z.div, {
                      className: l()(f.animatedNode, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                animationProgress: new c.Z.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }),
            _(this, 'direction', this.props.getDirection()),
            _(this, '_measureRef', a.createRef());
    }
}
_(g, 'contextType', d.S), _(g, 'defaultProps', { duration: 300 });
class E extends (i = a.Component) {
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
        let { step: e, className: t, innerClassName: n, animatedNodeClassName: r, staticClassName: i, sideMargin: a, verticalMargin: s, children: c, fillParent: d, animationMotionType: _ } = this.props;
        return (0, o.jsx)(u.W, {
            component: 'div',
            className: l()(f.transitionGroup, t),
            children: (0, o.jsx)(
                g,
                {
                    fillParent: d,
                    sideMargin: a,
                    animationMotionType: null != _ ? _ : 'slide',
                    verticalMargin: s,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: n,
                    animatedNodeClassName: r,
                    staticClassName: i,
                    setHeight: this.setHeight,
                    children: c
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
                    r = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
                return Math.max(n, r) > e.indexOf(t) ? -1 : 1;
            }),
            _(this, 'setHeight', (e) => {
                let { step: t } = this.props;
                this.stepHeights[t] = e;
            });
    }
}
_(E, 'defaultProps', {
    fillParent: !1,
    animationMotionType: 'slide'
});
