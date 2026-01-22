n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(111956),
    l = n.n(s),
    a = n(615300),
    o = n(607399),
    c = n(319060),
    u = n(397927),
    d = n(240248),
    h = n(299198);
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
function p(e) {
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
let g = (0, d.xI)(c.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    m = {
        friction: 10,
        tension: 130,
    },
    A = function (e) {
        return class extends i.Component {
            componentDidMount() {
                o.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
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
                a.A.spring(this.anim, p({ toValue: e }, m)).start(t);
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
                    className: h.i,
                    children: (0, r.jsx)(u.CZY.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, r.jsx)(a.A.div, {
                                className: h.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, r.jsx)(e, p({}, this.props)),
                            });
                        },
                    }),
                });
            }
            constructor(...e) {
                super(...e),
                    f(this, "timeout", void 0),
                    f(this, "anim", new a.A.Value(0)),
                    f(this, "state", { shouldAnimate: !o.Fr }),
                    f(this, "handleResize", () => {
                        let e = window.innerWidth > g;
                        !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
                    }),
                    f(this, "handleResizeDebounced", l()(this.handleResize, 60));
            }
        };
    };
