"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(401843),
    u = n(964486),
    c = n(652896),
    d = n(734057),
    _ = n(818348),
    f = n(985018),
    h = n(814651);
function p(e) {
    var t;
    let { stream: n, width: i } = e,
        p = (0, s.bG)([d.A], () => d.A.getChannel(n.channelId));
    (0, u.Ay)(() => {
        p?.isGuildStageVoice() && (0, l.Xi)((0, c._z)(n), !1);
    });
    let g = () => (0, l.Xi)((0, c._z)(n)),
        E = (t = i) < 550 ? "small" : t < 1e3 ? "medium" : "large";
    return (0, r.jsx)(o.NPJ, {
        disableAdaptiveTheme: !0,
        theme: _.NJ.MIDNIGHT,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(h.container, e),
                children: (0, r.jsxs)("div", {
                    className: h.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(h.artContainer, h[E]),
                            children: (0, r.jsx)("div", { className: a()(h.art, h[E]) }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h.cta,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    color: "none",
                                    variant: "small" === E ? "heading-md/normal" : "heading-lg/normal",
                                    className: h.header,
                                    children: f.intl.formatToMarkdownString(f.t.Kb4Ukp, {}),
                                }),
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "small" === E ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), g();
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
