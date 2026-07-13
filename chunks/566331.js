n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(17928),
    a = n(43990),
    o = n(297264),
    c = n(821609),
    u = n(401843),
    d = n(964486),
    A = n(652896),
    h = n(734057),
    m = n(818348),
    g = n(375708),
    p = n(454642);
function f(e) {
    let { stream: t, width: n } = e,
        r = (0, s.bG)([h.A], () => h.A.getChannel(t.channelId));
    (0, d.Ay)(() => {
        r?.isGuildStageVoice() && (0, u.Xi)((0, A._z)(t), !1);
    });
    let f = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(a.N, {
        disableAdaptiveTheme: !0,
        theme: m.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(p.container, e),
                children: (0, i.jsxs)("div", {
                    className: p.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(p.artContainer, p[f]),
                            children: (0, i.jsx)("div", { className: l()(p.art, p[f]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: p.cta,
                            children: [
                                (0, i.jsx)(o.D, {
                                    color: "none",
                                    variant: "small" === f ? "heading-md/normal" : "heading-lg/normal",
                                    className: p.header,
                                    children: g.intl.formatToMarkdownString(g.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(c.$, {
                                    variant: "secondary",
                                    size: "small" === f ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, u.Xi)((0, A._z)(t));
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
