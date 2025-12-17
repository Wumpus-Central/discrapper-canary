n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    c = n(846519),
    u = n(481060),
    d = n(585483),
    f = n(981631),
    h = n(388032),
    p = n(139834);
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
let b = {
    friction: 15,
    tension: 100,
};
class m extends (r = l.PureComponent) {
    componentDidMount() {
        this.setState({ shown: !0 }), d.S.subscribe(f.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d.S.unsubscribe(f.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
                })({ toValue: Math.min(e, 250) }, b),
            ).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: o()(p.arrowGroup, e),
            children: [
                (0, i.jsx)(s.Z.div, {
                    className: o()(p.arrowContainer, p.horizontal),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", {
                        alt: "",
                        src: n(403756),
                        className: p.arrowIcon,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: o()(p.arrowContainer, p.diag1),
                    children: (0, i.jsx)("img", {
                        alt: "",
                        src: n(536404),
                        className: p.arrowIcon,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: o()(p.arrowContainer, p.diag2),
                    children: (0, i.jsx)("img", {
                        alt: "",
                        src: n(569347),
                        className: p.arrowIcon,
                    }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: p.tutorialMessages,
            children: [
                (0, i.jsx)("div", {
                    className: p.searchMessage,
                    children: h.intl.string(h.t.Mp0IGK),
                }),
                (0, i.jsx)("div", {
                    className: p.selectMessage,
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
            className: o()(p.tutorial, {
                [p.shown]: t,
                [p.hasQuery]: e,
            }),
            children: [this.renderContent(), this.renderArrowGroup(p.__invalid_left), this.renderArrowGroup(p.right)],
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
g(m, "contextType", u.Sfi);
let y = m;
