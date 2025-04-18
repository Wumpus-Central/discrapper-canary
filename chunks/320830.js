n.d(t, { Z: () => N }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(954955),
    l = n.n(s),
    o = n(748780),
    a = n(873546),
    c = n(477690),
    u = n(481060),
    d = n(624138),
    h = n(114701);
function p(e, t, n) {
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
function g(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let f = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    m = {
        START: 0,
        END: 1
    },
    _ = {
        friction: 10,
        tension: 130
    },
    N = function (e) {
        return class extends i.Component {
            componentDidMount() {
                a.tq || (window.addEventListener('resize', this.handleResizeDebounced), this.handleResize());
            }
            componentWillUnmount() {
                clearTimeout(this.timeout), window.removeEventListener('resize', this.handleResizeDebounced);
            }
            componentWillAppear(e) {
                this.state.shouldAnimate ? this.animateTo(m.END, e) : e();
            }
            componentWillEnter(e) {
                this.state.shouldAnimate ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(m.END, e), 40))) : e();
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(m.START, e) : e();
            }
            animateTo(e, t) {
                o.Z.spring(this.anim, g({ toValue: e }, _)).start(t);
            }
            getAnimatedStyle(e) {
                return this.state.shouldAnimate
                    ? {
                          opacity: this.anim,
                          transform: e
                              ? void 0
                              : [
                                    {
                                        scale: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1.05, 1]
                                        })
                                    },
                                    {
                                        translateY: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['-70px', '0px']
                                        })
                                    },
                                    { translateZ: 0 }
                                ]
                      }
                    : null;
            }
            render() {
                return (0, r.jsx)('div', {
                    className: h.wrapper,
                    children: (0, r.jsx)(u.Sfi.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, r.jsx)(o.Z.div, {
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, r.jsx)(e, g({}, this.props))
                            });
                        }
                    })
                });
            }
            constructor(...e) {
                super(...e),
                    p(this, 'timeout', void 0),
                    p(this, 'anim', new o.Z.Value(m.START)),
                    p(this, 'state', { shouldAnimate: !a.tq }),
                    p(this, 'handleResize', () => {
                        let e = window.innerWidth > f;
                        !this.state.shouldAnimate && e && this.anim.setValue(m.END), this.setState({ shouldAnimate: e });
                    }),
                    p(this, 'handleResizeDebounced', l()(this.handleResize, 60));
            }
        };
    };
