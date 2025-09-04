n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(772848),
    o = n(780384),
    s = n(481060),
    l = n(37234),
    c = n(410030),
    u = n(626135),
    d = n(617136),
    f = n(497505),
    _ = n(937797),
    p = n(110560),
    h = n(46140),
    m = n(981631),
    g = n(388032),
    E = n(154115),
    b = n(66094);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
let v = "https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png";
function I() {
    let e = (0, o.wj)((0, c.ZP)()),
        t = i.useMemo(() => ({ backgroundImage: "url(".concat(v, ")") }), []),
        n = i.useCallback(() => {
            (0, l.xf)(),
                (0, p.navigateToQuestHome)({ fromContent: f.jn.QUEST_HOME_MOVE_CALLOUT }),
                u.default.track(
                    m.rMx.QUEST_CONTENT_CLICKED,
                    O(
                        {
                            cta_name: d.jZ.VIEW_QUESTS,
                            click_id: (0, a.Z)(),
                            is_targeted: !1,
                        },
                        (0, d.mH)(f.jn.QUEST_HOME_MOVE_CALLOUT),
                    ),
                );
        }, []),
        { enabled: y } = _.m8.useConfig({ location: h.dr.QUEST_HOME_MOVED_CALLOUT });
    return (0, r.jsx)("div", {
        className: E.container,
        style: t,
        children: (0, r.jsxs)(s.Kqy, {
            className: E.textContainer,
            justify: "space-between",
            children: [
                (0, r.jsxs)(s.Kqy, {
                    gap: 4,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.headerContainer,
                            children: [
                                (0, r.jsx)("img", {
                                    alt: "",
                                    src: b,
                                    className: E.icon,
                                }),
                                (0, r.jsx)(s.X6q, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: g.intl.string(g.t.z8YP2N),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-secondary",
                            children: g.intl.string(y ? g.t["HdKh6+"] : g.t.IqmRZ2),
                        }),
                    ],
                }),
                (0, r.jsx)(s.zxk, {
                    variant: e ? "primary" : "overlay-primary",
                    text: g.intl.string(g.t.GURBQk),
                    onClick: n,
                }),
            ],
        }),
    });
}
