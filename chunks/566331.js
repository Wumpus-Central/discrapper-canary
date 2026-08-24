n.d(t, { A: () => f });
var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(17928),
    a = n(43990),
    o = n(297264),
    u = n(821609),
    c = n(401843),
    d = n(964486),
    A = n(652896),
    h = n(734057),
    m = n(818348),
    g = n(375708),
    E = n(2753);
function f(e) {
    let { stream: t, width: n } = e,
        r = (0, s.bG)([h.A], () => h.A.getChannel(t.channelId));
    (0, d.Ay)(() => {
        r?.isGuildStageVoice() && (0, c.Xi)((0, A._z)(t), !1);
    });
    let f = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(a.N, {
        disableAdaptiveTheme: !0,
        theme: m.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(E.container, e),
                children: (0, i.jsxs)("div", {
                    className: E.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(E.artContainer, E[f]),
                            children: (0, i.jsx)("div", { className: l()(E.art, E[f]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: E.cta,
                            children: [
                                (0, i.jsx)(o.D, {
                                    color: "none",
                                    variant: "small" === f ? "heading-md/normal" : "heading-lg/normal",
                                    className: E.header,
                                    children: g.intl.formatToMarkdownString(g.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(u.$, {
                                    variant: "secondary",
                                    size: "small" === f ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, c.Xi)((0, A._z)(t));
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
