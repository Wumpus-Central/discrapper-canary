"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(43990),
    o = n(297264),
    d = n(821609),
    c = n(401843),
    u = n(964486),
    _ = n(652896),
    E = n(734057),
    A = n(818348),
    h = n(375708),
    I = n(454642);
function f(e) {
    let { stream: t, width: n } = e,
        r = (0, s.bG)([E.A], () => E.A.getChannel(t.channelId));
    (0, u.Ay)(() => {
        r?.isGuildStageVoice() && (0, c.Xi)((0, _._z)(t), !1);
    });
    let f = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(l.N, {
        disableAdaptiveTheme: !0,
        theme: A.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)("div", {
                className: a()(I.container, e),
                children: (0, i.jsxs)("div", {
                    className: I.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: a()(I.artContainer, I[f]),
                            children: (0, i.jsx)("div", { className: a()(I.art, I[f]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: I.cta,
                            children: [
                                (0, i.jsx)(o.D, {
                                    color: "none",
                                    variant: "small" === f ? "heading-md/normal" : "heading-lg/normal",
                                    className: I.header,
                                    children: h.intl.formatToMarkdownString(h.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(d.$, {
                                    variant: "secondary",
                                    size: "small" === f ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, c.Xi)((0, _._z)(t));
                                    },
                                    text: h.intl.string(h.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
