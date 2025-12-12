n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(342386),
    f = n(626135),
    p = n(617136),
    _ = n(49436),
    m = n(110560),
    h = n(981631),
    g = n(388032),
    E = n(861526),
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
function S(e) {
    let { inOldSettings: t = !1 } = e,
        n = (0, l.wj)((0, u.ZP)()),
        a = i.useMemo(() => ({ backgroundImage: "url(".concat(v, ")") }), []),
        y = i.useCallback(() => {
            (0, d.default)(),
                (0, m.navigateToQuestHome)({ fromContent: _.jn.QUEST_HOME_MOVE_CALLOUT }),
                f.default.track(
                    h.rMx.QUEST_CONTENT_CLICKED,
                    O(
                        {
                            cta_name: p.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1,
                        },
                        (0, p.mH)(_.jn.QUEST_HOME_MOVE_CALLOUT),
                    ),
                );
        }, []);
    return (0, r.jsx)("div", {
        className: o()(E.container, { [E.withMargin]: t }),
        style: a,
        children: (0, r.jsxs)(c.Kqy, {
            className: E.textContainer,
            justify: "space-between",
            children: [
                (0, r.jsxs)(c.Kqy, {
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
                                (0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: g.intl.string(g.t.z8YP2A),
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: g.intl.string(g.t.HdKh65),
                        }),
                    ],
                }),
                (0, r.jsx)(c.Button, {
                    variant: n ? "primary" : "overlay-primary",
                    text: g.intl.string(g.t.GURBQl),
                    onClick: y,
                }),
            ],
        }),
    });
}
