"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(43990),
    l = n(534514),
    d = n(821609),
    _ = n(401843),
    u = n(964486),
    c = n(652896),
    E = n(734057),
    h = n(818348),
    m = n(985018),
    f = n(454642);
function g(e) {
    let { stream: t, width: n } = e,
        r = (0, a.bG)([E.A], () => E.A.getChannel(t.channelId));
    (0, u.Ay)(() => {
        r?.isGuildStageVoice() && (0, _.Xi)((0, c._z)(t), !1);
    });
    let g = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(o.N, {
        disableAdaptiveTheme: !0,
        theme: h.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)("div", {
                className: s()(f.container, e),
                children: (0, i.jsxs)("div", {
                    className: f.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(f.artContainer, f[g]),
                            children: (0, i.jsx)("div", { className: s()(f.art, f[g]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: f.cta,
                            children: [
                                (0, i.jsx)(l.D, {
                                    color: "none",
                                    variant: "small" === g ? "heading-md/normal" : "heading-lg/normal",
                                    className: f.header,
                                    children: m.intl.formatToMarkdownString(m.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(d.$, {
                                    variant: "secondary",
                                    size: "small" === g ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, _.Xi)((0, c._z)(t));
                                    },
                                    text: m.intl.string(m.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
