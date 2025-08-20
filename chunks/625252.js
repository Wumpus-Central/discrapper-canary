n.d(t, { Z: () => O });
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
    _ = n(110560),
    p = n(981631),
    h = n(388032),
    m = n(154115),
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
    let e = (0, o.wj)((0, c.ZP)()),
        t = i.useMemo(() => ({ backgroundImage: "url(".concat(y, ")") }), []),
        n = i.useCallback(() => {
            (0, l.xf)(),
                (0, _.navigateToQuestHome)({ fromContent: f.jn.QUEST_HOME_MOVE_CALLOUT }),
                u.default.track(
                    p.rMx.QUEST_CONTENT_CLICKED,
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
        className: m.container,
        style: t,
        children: (0, r.jsxs)(s.Kqy, {
            className: m.textContainer,
            justify: "space-between",
            children: [
                (0, r.jsxs)(s.Kqy, {
                    gap: 4,
                    children: [
                        (0, r.jsxs)("div", {
                            className: m.headerContainer,
                            children: [
                                (0, r.jsx)("img", {
                                    alt: "",
                                    src: g,
                                    className: m.icon,
                                }),
                                (0, r.jsx)(s.X6q, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: h.intl.string(h.t.z8YP2N),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-secondary",
                            children: h.intl.string(h.t.IqmRZ2),
                        }),
                    ],
                }),
                (0, r.jsx)(s.zxk, {
                    variant: e ? "primary" : "overlay-primary",
                    text: h.intl.string(h.t.GURBQk),
                    onClick: n,
                }),
            ],
        }),
    });
}
