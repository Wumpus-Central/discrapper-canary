n.d(t, { A: () => E });
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
    A = n(734057),
    m = n(818348),
    g = n(375708),
    f = n(2753);
function E(e) {
    let { stream: t, width: n } = e,
        r = (0, s.bG)([A.A], () => A.A.getChannel(t.channelId));
    (0, d.Ay)(() => {
        r?.isGuildStageVoice() && (0, u.Xi)((0, h._z)(t), !1);
    });
    let E = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(a.N, {
        disableAdaptiveTheme: !0,
        theme: m.NJ.ONYX,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(f.container, e),
                children: (0, i.jsxs)("div", {
                    className: f.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(f.artContainer, f[E]),
                            children: (0, i.jsx)("div", { className: l()(f.art, f[E]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: f.cta,
                            children: [
                                (0, i.jsx)(o.D, {
                                    color: "none",
                                    variant: "small" === E ? "heading-md/normal" : "heading-lg/normal",
                                    className: f.header,
                                    children: g.intl.formatToMarkdownString(g.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(c.$, {
                                    variant: "secondary",
                                    size: "small" === E ? "sm" : "md",
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
