var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(855986),
    a = n(43990),
    o = n(534514),
    u = n(821609),
    c = n(401843),
    d = n(964486),
    h = n(652896),
    m = n(734057),
    f = n(818348),
    p = n(792996),
    g = n(2753);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { stream: t, width: n } = e,
                r = (0, s.bG)([m.A], () => m.A.getChannel(t.channelId));
            (0, d.Ay)(() => {
                r?.isGuildStageVoice() && (0, c.Xi)((0, h._z)(t), !1);
            });
            let A = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
            return (0, i.jsx)(a.N, {
                disableAdaptiveTheme: !0,
                theme: f.NJ.ONYX,
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: l()(g.container, e),
                        children: (0, i.jsxs)("div", {
                            className: g.content,
                            children: [
                                (0, i.jsx)("div", {
                                    className: l()(g.artContainer, g[A]),
                                    children: (0, i.jsx)("div", { className: l()(g.art, g[A]) }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: g.cta,
                                    children: [
                                        (0, i.jsx)(o.D, {
                                            color: "none",
                                            variant: "small" === A ? "heading-sm/medium" : "heading-lg/medium",
                                            className: g.header,
                                            children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {}),
                                        }),
                                        (0, i.jsx)(u.$, {
                                            variant: "secondary",
                                            size: "small" === A ? "sm" : "md",
                                            onClick: (e) => {
                                                (e.stopPropagation(), (0, c.Xi)((0, h._z)(t)));
                                            },
                                            text: p.intl.string(p.t["4EGMWL"]),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            });
        },
    },
);
