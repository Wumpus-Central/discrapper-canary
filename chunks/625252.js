n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(342386),
    u = n(626135),
    d = n(617136),
    f = n(49436),
    p = n(110560),
    _ = n(981631),
    m = n(388032),
    h = n(154115),
    g = n(66094);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = "https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png";
function O() {
    let e = (0, o.wj)((0, l.ZP)()),
        t = i.useMemo(() => ({ backgroundImage: "url(".concat(y, ")") }), []),
        n = i.useCallback(() => {
            (0, c.default)(),
                (0, p.navigateToQuestHome)({ fromContent: f.jn.QUEST_HOME_MOVE_CALLOUT }),
                u.default.track(
                    _.rMx.QUEST_CONTENT_CLICKED,
                    b(
                        {
                            cta_name: d.jZ.VIEW_QUESTS,
                            click_id: (0, a.Z)(),
                            is_targeted: !1,
                        },
                        (0, d.mH)(f.jn.QUEST_HOME_MOVE_CALLOUT),
                    ),
                );
        }, []);
    return (0, r.jsx)("div", {
        className: h.container,
        style: t,
        children: (0, r.jsxs)(s.Kqy, {
            className: h.textContainer,
            justify: "space-between",
            children: [
                (0, r.jsxs)(s.Kqy, {
                    gap: 4,
                    children: [
                        (0, r.jsxs)("div", {
                            className: h.headerContainer,
                            children: [
                                (0, r.jsx)("img", {
                                    alt: "",
                                    src: g,
                                    className: h.icon,
                                }),
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: m.intl.string(m.t.z8YP2A),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: m.intl.string(m.t.HdKh65),
                        }),
                    ],
                }),
                (0, r.jsx)(s.Button, {
                    variant: e ? "primary" : "overlay-primary",
                    text: m.intl.string(m.t.GURBQl),
                    onClick: n,
                }),
            ],
        }),
    });
}
