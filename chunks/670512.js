n.d(t, { Z: () => _ }), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(748780),
    c = n(846519),
    u = n(481060),
    d = n(585483),
    p = n(981631),
    h = n(388032),
    f = n(418956);
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
let m = {
    friction: 15,
    tension: 100,
};
class b extends (r = l.PureComponent) {
    componentDidMount() {
        this.setState({ shown: !0 }), d.S.subscribe(p.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d.S.unsubscribe(p.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        e || this.springTo(0);
    }
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled &&
            s.Z.spring(
                this.state.translateY,
                (function (e) {
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
                })({ toValue: Math.min(e, 250) }, m),
            ).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: a()(f.arrowGroup, e),
            children: [
                (0, i.jsx)(s.Z.div, {
                    className: a()(f.arrowContainer, f.horizontal),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", {
                        alt: "",
                        src: n(403756),
                        className: f.arrowIcon,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: a()(f.arrowContainer, f.diag1),
                    children: (0, i.jsx)("img", {
                        alt: "",
                        src: n(536404),
                        className: f.arrowIcon,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: a()(f.arrowContainer, f.diag2),
                    children: (0, i.jsx)("img", {
                        alt: "",
                        src: n(569347),
                        className: f.arrowIcon,
                    }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: f.tutorialMessages,
            children: [
                (0, i.jsx)("div", {
                    className: f.searchMessage,
                    children: h.intl.string(h.t.Mp0IGK),
                }),
                (0, i.jsx)("div", {
                    className: f.selectMessage,
                    children: h.intl.string(h.t["3CbpwH"]),
                }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: a()(f.tutorial, {
                [f.shown]: t,
                [f.hasQuery]: e,
            }),
            children: [this.renderContent(), this.renderArrowGroup(f.__invalid_left), this.renderArrowGroup(f.right)],
        });
    }
    getStyle() {
        let { reducedMotion: e } = this.context;
        return !0 === e.enabled
            ? {}
            : {
                  opacity: 1,
                  transform: [
                      {
                          translateY: this.state.translateY.interpolate({
                              inputRange: [0, 250],
                              outputRange: ["0px", "".concat(250, "px")],
                          }),
                      },
                      { translateZ: 0 },
                  ],
              };
    }
    constructor(...e) {
        super(...e),
            g(this, "state", {
                shown: !1,
                translateY: new s.Z.Value(0),
            }),
            g(this, "rootRef", l.createRef()),
            g(this, "focusTimeout", new c.V7()),
            g(this, "handleResultFocus", (e) => {
                let { node: t } = e;
                this.focusTimeout.start(1, () => {
                    if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                        let { top: e } = this.rootRef.current.getBoundingClientRect(),
                            { top: n } = t.getBoundingClientRect(),
                            r = Math.abs(e - n);
                        this.springTo(r - 118 + 9);
                    } else this.springTo(0);
                });
            });
    }
}
g(b, "contextType", u.Sfi);
let _ = b;
