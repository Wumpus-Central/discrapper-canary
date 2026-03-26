s.d(t, { default: () => I });
var l = s(627968),
    n = s(64700),
    r = s(311907),
    i = s(732955),
    a = s(397927),
    c = s(743674),
    o = s(855057),
    u = s(45837),
    d = s(888697),
    x = s(94113),
    m = s(493819),
    g = s(425897),
    h = s(131955),
    f = s(148690),
    _ = s(985018),
    p = s(233807);
let b = [
    { gif: s(203736), png: s(775788) },
    { gif: s(640237), png: s(689006) },
    { gif: s(964805), png: s(533798) },
    { gif: s(322821), png: s(891814) },
];
function j(e) {
    let { shouldAnimate: t } = e;
    return (0, l.jsx)("div", {
        className: p.p8,
        children: b.map((e) =>
            (0, l.jsx)("div", { className: p.Nw, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function C(e) {
    let { onOpenGIFPicker: t, onOpenRecentUploads: s } = e,
        { shouldAnimate: n, onMouseEnter: r, onMouseLeave: i } = (0, u.A)();
    return (0, l.jsxs)("ul", {
        className: p.f9,
        children: [
            (0, l.jsx)("li", {
                children: (0, l.jsx)(a.DUT, {
                    className: p.uK,
                    onClick: s,
                    children: (0, l.jsxs)("div", {
                        className: p.Mn,
                        children: [
                            (0, l.jsx)(a.XGR, { size: "md", color: "currentColor" }),
                            (0, l.jsx)(a.Text, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: _.intl.string(f.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)("li", {
                children: (0, l.jsxs)(a.DUT, {
                    className: p.uK,
                    onClick: t,
                    onMouseEnter: r,
                    onMouseLeave: i,
                    children: [
                        (0, l.jsx)(j, { shouldAnimate: n }),
                        (0, l.jsxs)("div", {
                            className: p.Mn,
                            children: [
                                (0, l.jsx)(a.Osp, { size: "md", color: "currentColor" }),
                                (0, l.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: _.intl.string(f.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function N(e) {
    let { onSelect: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(a.Text, { variant: "text-sm/semibold", children: _.intl.string(f.default.SQb1dl) }),
            (0, l.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: p.u2,
                children: _.intl.string(f.default["2THN2i"]),
            }),
            (0, l.jsx)("div", {
                className: p.si,
                children: h.Kg.map((e, s) => {
                    let { gif: n, png: r } = e;
                    return (0, l.jsx)(
                        a.DUT,
                        {
                            onClick: () => t(n),
                            children: (0, l.jsx)(m.A, { src: n, staticSrc: r, autoPlayOnMount: !0, className: p.yh }),
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
function y(e) {
    let { url: t, onSelect: s } = e,
        r = (0, c.S)(t),
        i = n.useCallback(() => s(t), [t, s]);
    return (0, l.jsx)(a.DUT, {
        className: p.yh,
        style: { backgroundColor: r },
        onClick: i,
        children: (0, l.jsx)(m.A, { src: t, className: p.vA }),
    });
}
function S(e) {
    let { recentUrls: t, onSelect: s } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(a.Text, { variant: "text-sm/semibold", children: _.intl.string(f.default.dDID2M) }),
            (0, l.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: p.u2,
                children: _.intl.string(f.default["9Xxm0y"]),
            }),
            (0, l.jsx)("div", { className: p.si, children: t.map((e) => (0, l.jsx)(y, { url: e, onSelect: s }, e)) }),
        ],
    });
}
function I(e) {
    let { transitionState: t, onClose: s, channel: a } = e,
        [c, u] = n.useState("HOME"),
        m = (0, r.bG)([x.A], () => x.A.getRecentImageUrls()),
        h = n.useCallback(
            async (e) => {
                await (0, d._)(a.id, e), s();
            },
            [a.id, s],
        ),
        b = n.useCallback(
            (e) => {
                let t = e.src ?? e.url;
                null != t && h(t);
            },
            [h],
        );
    return "RECENT_UPLOADS" === c
        ? (0, l.jsxs)(i.dWK, {
              transitionState: t,
              onClose: s,
              size: "md",
              children: [
                  (0, l.jsx)(i.rQ0, {
                      title: _.intl.string(f.default.aBnIyR),
                      subtitle: _.intl.string(f.default["5VL9Ju"]),
                  }),
                  (0, l.jsx)(g.A, { guildId: a.guild_id, onSelect: h }),
              ],
          })
        : "GIF_PICKER" === c
          ? (0, l.jsxs)(i.dWK, {
                transitionState: t,
                onClose: s,
                size: "md",
                children: [
                    (0, l.jsx)(i.rQ0, { title: _.intl.string(f.default.HkszWk) }),
                    (0, l.jsx)("div", {
                        className: p.SD,
                        children: (0, l.jsx)(o.A, { className: p.XC, onSelectGIF: b, headingColor: "text-subtle" }),
                    }),
                ],
            })
          : (0, l.jsx)(i.aFV, {
                transitionState: t,
                onClose: s,
                size: "md",
                title: _.intl.string(f.default.yyPbqI),
                subtitle: _.intl.string(f.default["+y6KsI"]),
                actions: [],
                children: (0, l.jsxs)("div", {
                    className: p.jE,
                    children: [
                        (0, l.jsx)(C, {
                            onOpenGIFPicker: () => u("GIF_PICKER"),
                            onOpenRecentUploads: () => u("RECENT_UPLOADS"),
                        }),
                        m.length > 0 ? (0, l.jsx)(S, { recentUrls: m, onSelect: h }) : (0, l.jsx)(N, { onSelect: h }),
                    ],
                }),
            });
}
