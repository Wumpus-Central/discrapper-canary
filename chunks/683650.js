n.d(t, {
    X: () => C,
    o: () => j,
});
var s,
    o = n(951288);
n(647438);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    l = n(617136),
    u = n(497505),
    c = n(110560),
    d = n(266843),
    m = n(46140),
    p = n(388032),
    h = n(107508),
    g = n(87181);
function x(e) {
    let { fullWidth: t } = e;
    return (0, o.jsx)("div", {
        className: h.buttonContainer,
        children: (0, o.jsx)(a.zxk, {
            fullWidth: t,
            variant: "primary",
            onClick: () => {
                (0, c.navigateToQuestHome)({ fromContent: u.jn.QUESTS_EMBED });
            },
            text: p.intl.string(p.t.GURBQk),
        }),
    });
}
var C = (((s = {}).NOT_FOUND = "not_found"), (s.MOBILE_ONLY = "mobile_only"), s);
function j(e) {
    let { questId: t, reason: n = "not_found" } = e,
        { containerRef: s, size: r } = (0, d.h)();
    return (
        (0, l.Zk)(m.V_.UNKNOWN_QUEST, t),
        (0, o.jsxs)("div", {
            ref: (e) => {
                s.current = e;
            },
            className: i()(h.container, {
                [h.wide]: "lg" === r,
                [h.tall]: "lg" !== r,
            }),
            children: [
                (0, o.jsxs)("div", {
                    className: h.contentContainer,
                    children: [
                        (0, o.jsx)(a.X6q, {
                            variant: "lg" === r ? "heading-xl/bold" : "heading-lg/bold",
                            color: "header-primary",
                            children: p.intl.string(p.t.vnP31d),
                        }),
                        (0, o.jsx)(a.Text, {
                            variant: "lg" === r ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: h.__invalid_mobileWebCopy,
                            children: p.intl.string("mobile_only" === n ? p.t.Pag1gY : p.t.CTn0yc),
                        }),
                        (0, o.jsx)(x, { fullWidth: "lg" !== r }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: h.imgContainer,
                    children: (0, o.jsx)("img", {
                        src: g,
                        alt: "",
                        className: h.missingQuestImage,
                    }),
                }),
            ],
        })
    );
}
