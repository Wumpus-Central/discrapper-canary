n.d(t, {
    X: () => j,
    o: () => f,
});
var s,
    o = n(951288);
n(647438);
var r = n(120356),
    i = n.n(r),
    a = n(755721),
    l = n(481060),
    u = n(617136),
    c = n(497505),
    d = n(110560),
    m = n(266843),
    p = n(46140),
    h = n(388032),
    g = n(107508),
    x = n(87181);
function C() {
    return (0, o.jsx)("div", {
        className: g.buttonContainer,
        children: (0, o.jsx)(a.zx, {
            className: g.button,
            color: a.Tt.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: c.jn.QUESTS_EMBED });
            },
            children: h.intl.string(h.t.GURBQk),
        }),
    });
}
var j = (((s = {}).NOT_FOUND = "not_found"), (s.MOBILE_ONLY = "mobile_only"), s);
function f(e) {
    let { questId: t, reason: n = "not_found" } = e,
        { containerRef: s, size: r } = (0, m.h)();
    return (
        (0, u.Zk)(p.V_.UNKNOWN_QUEST, t),
        (0, o.jsxs)("div", {
            ref: (e) => {
                s.current = e;
            },
            className: i()(g.container, {
                [g.wide]: "lg" === r,
                [g.tall]: "lg" !== r,
            }),
            children: [
                (0, o.jsxs)("div", {
                    className: g.contentContainer,
                    children: [
                        (0, o.jsx)(l.X6q, {
                            variant: "lg" === r ? "heading-xl/bold" : "heading-lg/bold",
                            color: "header-primary",
                            children: h.intl.string(h.t.vnP31d),
                        }),
                        (0, o.jsx)(l.Text, {
                            variant: "lg" === r ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: g.__invalid_mobileWebCopy,
                            children: h.intl.string("mobile_only" === n ? h.t.Pag1gY : h.t.CTn0yc),
                        }),
                        (0, o.jsx)(C, {}),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: g.imgContainer,
                    children: (0, o.jsx)("img", {
                        src: x,
                        alt: "",
                        className: g.missingQuestImage,
                    }),
                }),
            ],
        })
    );
}
