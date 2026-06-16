"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(43990),
    l = n(534514),
    u = n(821609),
    c = n(401843),
    d = n(964486),
    _ = n(652896),
    h = n(734057),
    f = n(818348),
    p = n(375708),
    E = n(454642);
function m(e) {
    let { stream: t, width: n } = e,
        r = (0, a.bG)([h.A], () => h.A.getChannel(t.channelId));
    (0, d.Ay)(() => {
        r?.isGuildStageVoice() && (0, c.Xi)((0, _._z)(t), !1);
    });
    let m = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(o.N, {
        disableAdaptiveTheme: !0,
        theme: f.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)("div", {
                className: s()(E.container, e),
                children: (0, i.jsxs)("div", {
                    className: E.content,
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(E.artContainer, E[m]),
                            children: (0, i.jsx)("div", { className: s()(E.art, E[m]) }),
                        }),
                        (0, i.jsxs)("div", {
                            className: E.cta,
                            children: [
                                (0, i.jsx)(l.D, {
                                    color: "none",
                                    variant: "small" === m ? "heading-md/normal" : "heading-lg/normal",
                                    className: E.header,
                                    children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {}),
                                }),
                                (0, i.jsx)(u.$, {
                                    variant: "secondary",
                                    size: "small" === m ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, c.Xi)((0, _._z)(t));
                                    },
                                    text: p.intl.string(p.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
