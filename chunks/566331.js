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
    m = n(652896),
    h = n(734057),
    f = n(818348),
    g = n(792996),
    A = n(2753);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { stream: t, width: n } = e,
                r = (0, s.bG)([h.A], () => h.A.getChannel(t.channelId));
            (0, d.Ay)(() => {
                r?.isGuildStageVoice() && (0, c.Xi)((0, m._z)(t), !1);
            });
            let p = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
            return (0, i.jsx)(a.N, {
                disableAdaptiveTheme: !0,
                theme: f.NJ.ONYX,
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: l()(A.container, e),
                        children: (0, i.jsxs)("div", {
                            className: A.content,
                            children: [
                                (0, i.jsx)("div", {
                                    className: l()(A.artContainer, A[p]),
                                    children: (0, i.jsx)("div", { className: l()(A.art, A[p]) }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: A.cta,
                                    children: [
                                        (0, i.jsx)(o.D, {
                                            color: "none",
                                            variant: "small" === p ? "heading-sm/medium" : "heading-lg/medium",
                                            className: A.header,
                                            children: g.intl.formatToMarkdownString(g.t.Kb4Ukp, {}),
                                        }),
                                        (0, i.jsx)(u.$, {
                                            variant: "secondary",
                                            size: "small" === p ? "sm" : "md",
                                            onClick: (e) => {
                                                (e.stopPropagation(), (0, c.Xi)((0, m._z)(t)));
                                            },
                                            text: g.intl.string(g.t["4EGMWL"]),
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
