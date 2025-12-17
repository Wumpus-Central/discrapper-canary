n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(954955),
    a = n.n(s),
    l = n(748780),
    o = n(873546),
    c = n(477690),
    u = n(481060),
    d = n(624138),
    h = n(161843);
function f(e, t, n) {
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
function g(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let m = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    p = {
        friction: 10,
        tension: 130,
    },
    x = function (e) {
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
                l.Z.spring(this.anim, g({ toValue: e }, p)).start(t);
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
                            return (0, r.jsx)(l.Z.div, {
                                className: h.animatedDiv,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, r.jsx)(e, g({}, this.props)),
                            });
                        },
                    }),
                });
            }
            constructor(...e) {
                super(...e),
                    f(this, "timeout", void 0),
                    f(this, "anim", new l.Z.Value(0)),
                    f(this, "state", { shouldAnimate: !o.tq }),
                    f(this, "handleResize", () => {
                        let e = window.innerWidth > m;
                        !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
                    }),
                    f(this, "handleResizeDebounced", a()(this.handleResize, 60));
            }
        };
    };
