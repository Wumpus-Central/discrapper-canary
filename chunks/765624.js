"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(111956),
    l = n.n(r),
    a = n(615300),
    o = n(607399),
    d = n(319060),
    c = n(397927),
    u = n(240248),
    h = n(51468);
let _ = (0, u.xI)(d.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    p = { friction: 10, tension: 130 },
    g = function (e) {
        return class extends s.Component {
            timeout;
            anim = new a.A.Value(0);
            state = { shouldAnimate: !o.Fr };
            componentDidMount() {
                o.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > _;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = l()(this.handleResize, 60);
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
                a.A.spring(this.anim, { toValue: e, ...p }).start(t);
            }
            getAnimatedStyle(e) {
                return this.state.shouldAnimate
                    ? {
                          opacity: this.anim,
                          transform: e
                              ? void 0
                              : [
                                    { scale: this.anim.interpolate({ inputRange: [0, 1], outputRange: [1.05, 1] }) },
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
                return (0, i.jsx)("div", {
                    className: h.i,
                    children: (0, i.jsx)(c.CZY.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, i.jsx)(a.A.div, {
                                className: h.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, i.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
