n.d(t, {
    X: () => C,
    o: () => f,
});
var r,
    s = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    a = n(755721),
    l = n(481060),
    c = n(617136),
    u = n(497505),
    d = n(110560),
    m = n(266843),
    p = n(46140),
    g = n(388032),
    h = n(107508),
    x = n(87181);
function j() {
    return (0, s.jsx)("div", {
        className: h.buttonContainer,
        children: (0, s.jsx)(a.zx, {
            className: h.button,
            color: a.Tt.BRAND,
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: u.jn.QUESTS_EMBED });
            },
            children: g.intl.string(g.t.GURBQk),
        }),
    });
}
var C = (((r = {}).NOT_FOUND = "not_found"), (r.MOBILE_ONLY = "mobile_only"), r);
function f(e) {
    let { questId: t, reason: n = "not_found" } = e,
        { containerRef: r, size: o } = (0, m.h)();
    return (
        (0, c.Zk)(p.V_.UNKNOWN_QUEST, t),
        (0, s.jsxs)("div", {
            ref: (e) => {
                r.current = e;
            },
            className: i()(h.container, {
                [h.wide]: "lg" === o,
                [h.tall]: "lg" !== o,
            }),
            children: [
                (0, s.jsxs)("div", {
                    className: h.contentContainer,
                    children: [
                        (0, s.jsx)(l.X6q, {
                            variant: "lg" === o ? "heading-xl/bold" : "heading-lg/bold",
                            color: "header-primary",
                            children: g.intl.string(g.t.vnP31d),
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: "lg" === o ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: h.__invalid_mobileWebCopy,
                            children: g.intl.string("mobile_only" === n ? g.t.Pag1gY : g.t.CTn0yc),
                        }),
                        (0, s.jsx)(j, {}),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: h.imgContainer,
                    children: (0, s.jsx)("img", {
                        src: x,
                        alt: "",
                        className: h.missingQuestImage,
                    }),
                }),
            ],
        })
    );
}
