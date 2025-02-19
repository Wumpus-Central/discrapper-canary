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
    h = n(140631);
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
function _(e) {
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
let g = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    f = {
        START: 0,
        END: 1
    },
    m = {
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
                this.state.shouldAnimate ? this.animateTo(f.END, e) : e();
            }
            componentWillEnter(e) {
                this.state.shouldAnimate ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(f.END, e), 40))) : e();
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(f.START, e) : e();
            }
            animateTo(e, t) {
                l.Z.spring(this.anim, _({ toValue: e }, m)).start(t);
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
                            return (0, r.jsx)(l.Z.div, {
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, r.jsx)(e, _({}, this.props))
                            });
                        }
                    })
                });
            }
            constructor(...e) {
                super(...e),
                    p(this, 'timeout', void 0),
                    p(this, 'anim', new l.Z.Value(f.START)),
                    p(this, 'state', { shouldAnimate: !s.tq }),
                    p(this, 'handleResize', () => {
                        let e = window.innerWidth > g;
                        !this.state.shouldAnimate && e && this.anim.setValue(f.END), this.setState({ shouldAnimate: e });
                    }),
                    p(this, 'handleResizeDebounced', a()(this.handleResize, 60));
            }
        };
    };
