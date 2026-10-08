n.d(t, { A: () => b });
var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(17928),
    a = n(43990),
    o = n(297264),
    c = n(821609),
    u = n(401843),
    d = n(964486),
    h = n(652896),
    m = n(734057),
    A = n(818348),
    g = n(660183),
    f = n(2753);
function b(e) {
    let { stream: t, width: n } = e,
        r = (0, s.bG)([m.A], () => m.A.getChannel(t.channelId));
    (0, d.Ay)(() => {
        r?.isGuildStageVoice() && (0, u.Xi)((0, h._z)(t), !1);
    });
    let b = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(a.N, {
        disableAdaptiveTheme: !0,
        theme: A.NJ.ONYX,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(f.container, e),
                children: (0, i.jsxs)("div", {
                    className: f.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(f.artContainer, f[b]),
                            children: (0, i.jsx)("div", { className: l()(f.art, f[b]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: f.cta,
                            children: [
                                (0, i.jsx)(o.D, {
                                    color: "none",
                                    variant: "small" === b ? "heading-md/normal" : "heading-lg/normal",
                                    className: f.header,
                                    children: g.intl.formatToMarkdownString(g.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(c.$, {
                                    variant: "secondary",
                                    size: "small" === b ? "sm" : "md",
                                    onClick: (e) => {
                                        (e.stopPropagation(), (0, u.Xi)((0, h._z)(t)));
                                    },
                                    text: g.intl.string(g.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
