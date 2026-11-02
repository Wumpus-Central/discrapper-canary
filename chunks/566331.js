n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(17928),
    a = n(43990),
    o = n(534514),
    u = n(821609),
    c = n(401843),
    d = n(964486),
    m = n(652896),
    h = n(734057),
    g = n(818348),
    f = n(105292),
    p = n(2753);
function A(e) {
    let { stream: t, width: n } = e,
        r = (0, s.bG)([h.A], () => h.A.getChannel(t.channelId));
    (0, d.Ay)(() => {
        r?.isGuildStageVoice() && (0, c.Xi)((0, m._z)(t), !1);
    });
    let A = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(a.N, {
        disableAdaptiveTheme: !0,
        theme: g.NJ.ONYX,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(p.container, e),
                children: (0, i.jsxs)("div", {
                    className: p.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(p.artContainer, p[A]),
                            children: (0, i.jsx)("div", { className: l()(p.art, p[A]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: p.cta,
                            children: [
                                (0, i.jsx)(o.D, {
                                    color: "none",
                                    variant: "small" === A ? "heading-md/medium" : "heading-lg/medium",
                                    className: p.header,
                                    children: f.intl.formatToMarkdownString(f.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(u.$, {
                                    variant: "secondary",
                                    size: "small" === A ? "sm" : "md",
                                    onClick: (e) => {
                                        (e.stopPropagation(), (0, c.Xi)((0, m._z)(t)));
                                    },
                                    text: f.intl.string(f.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
