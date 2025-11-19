n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(954955),
    l = n.n(s),
    a = n(748780),
    o = n(873546),
    c = n(477690),
    u = n(481060),
    d = n(624138),
    h = n(401449);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let p = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    f = {
        friction: 10,
        tension: 130,
    },
    _ = function (e) {
        return class extends i.Component {
            componentDidMount() {
                o.tq || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            componentWillUnmount() {
                clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced);
            }
            componentWillAppear(e) {
                this.state.shouldAnimate ? this.animateTo(1, e) : e();
            }
            componentWillEnter(e) {
                this.state.shouldAnimate
                    ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(1, e), 40)))
                    : e();
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(0, e) : e();
            }
            animateTo(e, t) {
                a.Z.spring(this.anim, m({ toValue: e }, f)).start(t);
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
                                            outputRange: [1.05, 1],
                                        }),
                                    },
                                    {
                                        translateY: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["-70px", "0px"],
                                        }),
                                    },
                                    { translateZ: 0 },
                                ],
                      }
                    : null;
            }
            render() {
                return (0, r.jsx)("div", {
                    className: h.wrapper,
                    children: (0, r.jsx)(u.Sfi.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, r.jsx)(a.Z.div, {
                                className: h.animatedDiv,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, r.jsx)(e, m({}, this.props)),
                            });
                        },
                    }),
                });
            }
            constructor(...e) {
                super(...e),
                    g(this, "timeout", void 0),
                    g(this, "anim", new a.Z.Value(0)),
                    g(this, "state", { shouldAnimate: !o.tq }),
                    g(this, "handleResize", () => {
                        let e = window.innerWidth > p;
                        !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
                    }),
                    g(this, "handleResizeDebounced", l()(this.handleResize, 60));
            }
        };
    };
