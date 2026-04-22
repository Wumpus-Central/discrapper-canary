"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(43990),
    l = n(534514),
    u = n(821609),
    d = n(401843),
    c = n(964486),
    _ = n(652896),
    f = n(734057),
    E = n(818348),
    h = n(985018),
    p = n(454642);
function m(e) {
    let { stream: t, width: n } = e,
        i = (0, a.bG)([f.A], () => f.A.getChannel(t.channelId));
    (0, c.Ay)(() => {
        i?.isGuildStageVoice() && (0, d.Xi)((0, _._z)(t), !1);
    });
    let m = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, r.jsx)(o.N, {
        disableAdaptiveTheme: !0,
        theme: E.NJ.MIDNIGHT,
        children: (e) =>
            (0, r.jsx)("div", {
                className: s()(p.container, e),
                children: (0, r.jsxs)("div", {
                    className: p.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(p.artContainer, p[m]),
                            children: (0, r.jsx)("div", { className: s()(p.art, p[m]) }),
                        }),
                        (0, r.jsxs)("div", {
                            className: p.cta,
                            children: [
                                (0, r.jsx)(l.D, {
                                    color: "none",
                                    variant: "small" === m ? "heading-md/normal" : "heading-lg/normal",
                                    className: p.header,
                                    children: h.intl.formatToMarkdownString(h.t.Kb4Ukp, {}),
                                }),
                                (0, r.jsx)(u.$, {
                                    variant: "secondary",
                                    size: "small" === m ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, d.Xi)((0, _._z)(t));
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
