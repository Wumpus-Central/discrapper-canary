n.d(t, {
    A: () => b,
    a: () => h,
}),
    n(65821),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    a = n(615300),
    s = n(311907),
    o = n(397927),
    c = n(544028),
    u = n(652215),
    d = n(985018),
    p = n(149460);
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
var h = (((r = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), r);
let A = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(445451),
            darkSrc: n(642269),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(o.SGT, { note: d.intl.string(d.t.Y4vMY8) }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.x6,
                            children: (0, i.jsx)(o.Button, {
                                variant: "primary",
                                text: d.intl.string(d.t.w5uwoI),
                                onClick: e,
                            }),
                        }),
                    ],
                }),
        },
        SECTION_ONLINE: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(o.SGT, { note: d.intl.string(d.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(751906),
            darkSrc: n(689818),
            width: 433,
            height: 232,
            renderContent: () => (0, i.jsx)(o.SGT, { note: d.intl.string(d.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, i.jsxs)("div", {
                    className: p.y7,
                    children: [
                        (0, i.jsx)(o.SGT, { note: d.intl.string(d.t["aCYQ+P"]) }),
                        null != e &&
                            (0, i.jsx)(o.Button, {
                                variant: "secondary",
                                text: t ? d.intl.string(d.t.R40bU2) : d.intl.string(d.t.rXl8fj),
                                onClick: e,
                                size: "sm",
                            }),
                    ],
                }),
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: () => (0, i.jsx)(o.SGT, { note: d.intl.string(d.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(o.SGT, { note: d.intl.string(d.t["7sW4h1"]) }),
        },
    }),
    g = (e) => {
        let { theme: t } = e,
            n = d.intl.string(d.t["oi+B4p"]);
        return (0, i.jsx)(o.ppr, {
            theme: t,
            children: (0, i.jsx)(o.SGT, { note: n }),
        });
    };
class m extends l.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            r = { opacity: this.state.opacity },
            l = (function (e) {
                switch (e) {
                    case u.m3P.ADD_FRIEND:
                    case u.m3P.ALL:
                        return A.SECTION_ALL;
                    case u.m3P.ONLINE:
                        return A.SECTION_ONLINE;
                    case u.m3P.PENDING:
                        return A.SECTION_PENDING;
                    case u.m3P.SUGGESTIONS:
                        return A.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return A.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === u.m3P.ADD_FRIEND
            ? (0, i.jsx)(a.A.div, {
                  className: p.VD,
                  style: r,
                  children: (0, i.jsx)(g, { theme: n }),
              })
            : (0, i.jsx)(a.A.div, {
                  className: p.VD,
                  style: r,
                  children: (0, i.jsx)(o.ppr, {
                      theme: n,
                      children: l.renderContent(t),
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            f(this, "state", { opacity: new a.A.Value(1) }),
            f(this, "componentWillEnter", (e) => {
                this.state.opacity.setValue(0),
                    a.A.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250,
                    }).start(e);
            }),
            f(this, "componentWillLeave", (e) => {
                a.A.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250,
                }).start(e);
            });
    }
}
let b = s.Ay.connectStores([c.A], () => ({ theme: c.A.theme }), { forwardRef: !0 })(m);
