n.d(t, {
    Z: () => b,
    j: () => m,
}),
    n(415506),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(748780),
    s = n(442837),
    o = n(481060),
    c = n(210887),
    u = n(981631),
    d = n(388032),
    p = n(755429);
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
var m = (((r = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), r);
let h = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(900933),
            darkSrc: n(67764),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(o.OZU, { note: d.intl.string(d.t.Y4vMY8) }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.button,
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
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(o.OZU, { note: d.intl.string(d.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(459505),
            darkSrc: n(356634),
            width: 433,
            height: 232,
            renderContent: () => (0, i.jsx)(o.OZU, { note: d.intl.string(d.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, i.jsxs)("div", {
                    className: p.emptyStateContainer,
                    children: [
                        (0, i.jsx)(o.OZU, { note: d.intl.string(d.t["aCYQ+P"]) }),
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
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: () => (0, i.jsx)(o.OZU, { note: d.intl.string(d.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(o.OZU, { note: d.intl.string(d.t["7sW4h1"]) }),
        },
    }),
    g = (e) => {
        let { theme: t } = e,
            n = d.intl.string(d.t["oi+B4p"]);
        return (0, i.jsx)(o.ubH, {
            theme: t,
            children: (0, i.jsx)(o.OZU, { note: n }),
        });
    };
class _ extends l.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            r = { opacity: this.state.opacity },
            l = (function (e) {
                switch (e) {
                    case u.pJs.ADD_FRIEND:
                    case u.pJs.ALL:
                        return h.SECTION_ALL;
                    case u.pJs.ONLINE:
                        return h.SECTION_ONLINE;
                    case u.pJs.PENDING:
                        return h.SECTION_PENDING;
                    case u.pJs.SUGGESTIONS:
                        return h.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return h.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === u.pJs.ADD_FRIEND
            ? (0, i.jsx)(a.Z.div, {
                  className: p.friendsEmpty,
                  style: r,
                  children: (0, i.jsx)(g, { theme: n }),
              })
            : (0, i.jsx)(a.Z.div, {
                  className: p.friendsEmpty,
                  style: r,
                  children: (0, i.jsx)(o.ubH, {
                      theme: n,
                      children: l.renderContent(t),
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            f(this, "state", { opacity: new a.Z.Value(1) }),
            f(this, "componentWillEnter", (e) => {
                this.state.opacity.setValue(0),
                    a.Z.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250,
                    }).start(e);
            }),
            f(this, "componentWillLeave", (e) => {
                a.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250,
                }).start(e);
            });
    }
}
let b = s.ZP.connectStores([c.Z], () => ({ theme: c.Z.theme }), { forwardRef: !0 })(_);
