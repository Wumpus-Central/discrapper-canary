n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(401843),
    c = n(964486),
    u = n(652896),
    d = n(734057),
    f = n(818348),
    p = n(985018),
    _ = n(814651);

function h(e) {
    var t;
    let { stream: n, width: i } = e,
        h = (0, s.bG)([d.A], () => d.A.getChannel(n.channelId));
    (0, c.Ay)(() => {
        (null == h ? void 0 : h.isGuildStageVoice()) && (0, l.Xi)((0, u._z)(n), !1);
    });
    let m = () => (0, l.Xi)((0, u._z)(n)),
        g = (t = i) < 550 ? "small" : t < 1e3 ? "medium" : "large";
    return (0, r.jsx)(o.NPJ, {
        disableAdaptiveTheme: !0,
        theme: f.NJ.MIDNIGHT,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(_.container, e),
                children: (0, r.jsxs)("div", {
                    className: _.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(_.artContainer, _[g]),
                            children: (0, r.jsx)("div", {
                                className: a()(_.art, _[g]),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.cta,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    color: "none",
                                    variant: "small" === g ? "heading-md/normal" : "heading-lg/normal",
                                    className: _.header,
                                    children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {}),
                                }),
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "small" === g ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), m();
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
