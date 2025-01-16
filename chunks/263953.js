r.d(n, {
    q: function () {
        return v;
    }
});
var i,
    a,
    s,
    o,
    l = r(47120);
var u = r(200651),
    c = r(192379),
    d = r(120356),
    f = r.n(d),
    _ = r(748780),
    h = r(215569),
    p = r(186325),
    m = r(68699);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.ENTERING = 0)] = 'ENTERING'), (e[(e.LEAVING = 1)] = 'LEAVING'), (e[(e.APPEARING = 2)] = 'APPEARING'), (e[(e.STATIC = 3)] = 'STATIC');
})(i || (i = {})),
    !(function (e) {
        (e.SLIDE = 'slide'), (e.LIFT = 'lift');
    })(a || (a = {}));
class E extends (s = c.PureComponent) {
    componentDidMount() {
        if (null != this._measureRef.current) {
            let { height: e } = this._measureRef.current.getBoundingClientRect();
            this.setState({
                targetHeight: e,
                baseHeight: this.props.getBaseHeight()
            });
        }
    }
    componentDidUpdate(e, n) {
        n.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight);
    }
    componentWillAppear(e) {
        this.setState({ animationState: 2 }), e();
    }
    componentDidAppear() {
        let { animationProgress: e, targetHeight: n } = this.state;
        e.setValue(2),
            this.setState({
                animationState: 3,
                baseHeight: n
            });
    }
    componentWillEnter(e) {
        let { duration: n } = this.props,
            { animationProgress: r } = this.state;
        this.setState({ animationState: 0 }),
            this.props.setHeight(this.state.targetHeight),
            _.Z.timing(r, {
                toValue: 2,
                duration: n,
                delay: n / 2
            }).start(e);
    }
    componentDidEnter() {
        this.setState({ animationState: 3 });
    }
    componentWillLeave(e) {
        let { animationProgress: n } = this.state,
            { duration: r, getDirection: i } = this.props;
        (this.direction = i()),
            this.setState({ animationState: 1 }),
            _.Z.timing(n, {
                toValue: 0,
                duration: r
            }).start(e);
    }
    componentDidLeave() {
        this.setState({ animationState: 3 });
    }
    getMotionAnimation() {
        let { reducedMotion: e } = this.context;
        if (e.enabled) return null;
        let { animationMotionType: n } = this.props,
            { animationProgress: r, animationState: i } = this.state,
            a = (1 === i ? -1 : 1) * this.direction;
        switch (n) {
            case 'slide':
                return {
                    transform: [
                        {
                            translateX: r.interpolate({
                                inputRange: [0, 2],
                                outputRange: [''.concat(150 * a, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: _.Z.Easing.inOut(_.Z.Easing.ease)
                            })
                        }
                    ]
                };
            case 'lift':
                return {
                    transform: [
                        {
                            translateY: r.interpolate({
                                inputRange: [0, 2],
                                outputRange: [''.concat(10 * a, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: _.Z.Easing.inOut(_.Z.Easing.ease)
                            })
                        }
                    ]
                };
            default:
                return null;
        }
    }
    getAnimatedStyle() {
        var e, n;
        let { fillParent: r } = this.props,
            { animationProgress: i, animationState: a, baseHeight: s, targetHeight: o } = this.state,
            l = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0,
            u = null !== (n = this.props.verticalMargin) && void 0 !== n ? n : 0,
            c = 1 === a,
            d = 0 === a;
        return {
            overflow: d || c ? 'hidden' : 'visible',
            position: c ? 'absolute' : void 0,
            top: c ? u : void 0,
            left: c ? l : void 0,
            right: c ? l : void 0,
            bottom: c ? u : void 0,
            ...this.getMotionAnimation(),
            opacity: i.interpolate({
                inputRange: [0, 2],
                outputRange: [0, 1],
                extrapolate: 'clamp',
                easing: _.Z.Easing.inOut(_.Z.Easing.ease)
            }),
            height: d
                ? i.interpolate({
                      inputRange: [0, 1],
                      outputRange: [s, o],
                      extrapolate: 'clamp',
                      easing: _.Z.Easing.inOut(_.Z.Easing.ease)
                  })
                : r
                  ? '100%'
                  : 'auto'
        };
    }
    render() {
        let { fillParent: e, className: n, animatedNodeClassName: r, staticClassName: i } = this.props,
            { animationState: a } = this.state;
        return e
            ? (0, u.jsx)('div', {
                  ref: this._measureRef,
                  className: f()(m.measurementFill, n, { [f()(m.measurementFillStatic, i)]: 3 === a }),
                  children: (0, u.jsx)(_.Z.div, {
                      className: f()(m.animatedNode, r),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              })
            : (0, u.jsx)('div', {
                  ref: this._measureRef,
                  className: f()(m.measurement, n),
                  children: (0, u.jsx)(_.Z.div, {
                      className: f()(m.animatedNode, r),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                animationProgress: new _.Z.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }),
            g(this, 'direction', this.props.getDirection()),
            g(this, '_measureRef', c.createRef());
    }
}
g(E, 'contextType', p.S), g(E, 'defaultProps', { duration: 300 });
class v extends (o = c.Component) {
    componentDidMount() {
        this.setPrevSteps();
    }
    componentDidUpdate() {
        this.setPrevSteps();
    }
    setPrevSteps() {
        let { step: e, steps: n } = this.props;
        (this.prevStep = e), (this.prevSteps = n);
    }
    render() {
        let { step: e, className: n, innerClassName: r, animatedNodeClassName: i, staticClassName: a, sideMargin: s, verticalMargin: o, children: l, fillParent: c, animationMotionType: d } = this.props;
        return (0, u.jsx)(h.W, {
            component: 'div',
            className: f()(m.transitionGroup, n),
            children: (0, u.jsx)(
                E,
                {
                    fillParent: c,
                    sideMargin: s,
                    animationMotionType: null != d ? d : 'slide',
                    verticalMargin: o,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: r,
                    animatedNodeClassName: i,
                    staticClassName: a,
                    setHeight: this.setHeight,
                    children: l
                },
                ''.concat(e)
            )
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'stepHeights', {}),
            g(this, 'prevStep', null),
            g(this, 'prevSteps', []),
            g(this, 'getBaseHeight', () => (null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0)),
            g(this, 'getDirection', () => {
                let { steps: e, step: n } = this.props,
                    r = null != this.prevStep ? e.indexOf(this.prevStep) : -1,
                    i = -1 === r && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
                return Math.max(r, i) > e.indexOf(n) ? -1 : 1;
            }),
            g(this, 'setHeight', (e) => {
                let { step: n } = this.props;
                this.stepHeights[n] = e;
            });
    }
}
g(v, 'defaultProps', {
    fillParent: !1,
    animationMotionType: 'slide'
});
