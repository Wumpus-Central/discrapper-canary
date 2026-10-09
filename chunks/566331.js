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
    h = n(652896),
    m = n(734057),
    A = n(818348),
    E = n(660183),
    g = n(2753);
function f(e) {
    let { stream: t, width: n } = e,
        r = (0, s.bG)([m.A], () => m.A.getChannel(t.channelId));
    (0, d.Ay)(() => {
        r?.isGuildStageVoice() && (0, c.Xi)((0, h._z)(t), !1);
    });
    let f = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(a.N, {
        disableAdaptiveTheme: !0,
        theme: A.NJ.ONYX,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(g.container, e),
                children: (0, i.jsxs)("div", {
                    className: g.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(g.artContainer, g[f]),
                            children: (0, i.jsx)("div", { className: l()(g.art, g[f]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: g.cta,
                            children: [
                                (0, i.jsx)(o.D, {
                                    color: "none",
                                    variant: "small" === f ? "heading-md/normal" : "heading-lg/normal",
                                    className: g.header,
                                    children: E.intl.formatToMarkdownString(E.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(u.$, {
                                    variant: "secondary",
                                    size: "small" === f ? "sm" : "md",
                                    onClick: (e) => {
                                        (e.stopPropagation(), (0, c.Xi)((0, h._z)(t)));
                                    },
                                    text: E.intl.string(E.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
