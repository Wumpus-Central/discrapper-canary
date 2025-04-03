n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(954955),
    a = n.n(o),
    l = n(748780),
    s = n(873546),
    c = n(477690),
    u = n(481060),
    d = n(624138),
    p = n(749047);
function g(e, t, n) {
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
function h(e) {
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
                g(e, t, n[t]);
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
    b = function (e) {
        return class extends i.Component {
            componentDidMount() {
                s.tq || (window.addEventListener('resize', this.handleResizeDebounced), this.handleResize());
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
                l.Z.spring(this.anim, h({ toValue: e }, _)).start(t);
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
                    className: p.wrapper,
                    children: (0, r.jsx)(u.Sfi.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, r.jsx)(l.Z.div, {
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, r.jsx)(e, h({}, this.props))
                            });
                        }
                    })
                });
            }
            constructor(...e) {
                super(...e),
                    g(this, 'timeout', void 0),
                    g(this, 'anim', new l.Z.Value(m.START)),
                    g(this, 'state', { shouldAnimate: !s.tq }),
                    g(this, 'handleResize', () => {
                        let e = window.innerWidth > f;
                        !this.state.shouldAnimate && e && this.anim.setValue(m.END), this.setState({ shouldAnimate: e });
                    }),
                    g(this, 'handleResizeDebounced', a()(this.handleResize, 60));
            }
        };
    };
