l.d(t, { default: () => A });
var s = l(627968),
    n = l(64700),
    i = l(732955),
    r = l(397927),
    a = l(743674),
    c = l(855057),
    d = l(45837),
    o = l(888697),
    u = l(203443),
    g = l(522435),
    h = l(493819),
    m = l(425897),
    f = l(415278),
    x = l(131955),
    b = l(148690),
    _ = l(985018),
    j = l(233807);
let p = [
    { gif: l(203736), png: l(775788) },
    { gif: l(640237), png: l(689006) },
    { gif: l(964805), png: l(533798) },
    { gif: l(322821), png: l(891814) },
];
function C(e) {
    let { shouldAnimate: t } = e;
    return (0, s.jsx)("div", {
        className: j.p8,
        children: p.map((e) =>
            (0, s.jsx)("div", { className: j.Nw, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function y(e) {
    let { onOpenGIFPicker: t, onOpenRecentUploads: l } = e,
        { shouldAnimate: n, onMouseEnter: i, onMouseLeave: a } = (0, d.A)();
    return (0, s.jsxs)("ul", {
        className: j.f9,
        children: [
            (0, s.jsx)("li", {
                children: (0, s.jsx)(r.DUT, {
                    className: j.uK,
                    onClick: l,
                    children: (0, s.jsxs)("div", {
                        className: j.Mn,
                        children: [
                            (0, s.jsx)(r.XGR, { size: "md", color: "currentColor" }),
                            (0, s.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: _.intl.string(b.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, s.jsx)("li", {
                children: (0, s.jsxs)(r.DUT, {
                    className: j.uK,
                    onClick: t,
                    onMouseEnter: i,
                    onMouseLeave: a,
                    children: [
                        (0, s.jsx)(C, { shouldAnimate: n }),
                        (0, s.jsxs)("div", {
                            className: j.MF,
                            children: [
                                (0, s.jsx)(r.Osp, { size: "md", color: "currentColor" }),
                                (0, s.jsx)(r.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: _.intl.string(b.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function v(e) {
    let { onSelect: t } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(r.Text, { variant: "text-sm/semibold", children: _.intl.string(b.default.SQb1dl) }),
            (0, s.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: j.u2,
                children: _.intl.string(b.default["2THN2i"]),
            }),
            (0, s.jsx)("div", {
                className: j.si,
                children: x.Kg.map((e, l) => {
                    let { gif: n, png: i } = e;
                    return (0, s.jsx)(
                        r.DUT,
                        {
                            onClick: () => t(n),
                            children: (0, s.jsx)(h.A, {
                                imageUrl: i,
                                animatedUrl: n,
                                autoPlayOnMount: !0,
                                className: j.yh,
                            }),
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
function N(e) {
    let { guildId: t, hash: l, onSelect: i } = e,
        c = n.useMemo(() => (0, g.Sq)({ guildId: t, bannerHash: l }), [t, l]),
        d = (0, a.S)(c?.imageUrl ?? ""),
        o = n.useCallback(() => i(l), [l, i]);
    return null == c
        ? null
        : (0, s.jsx)(r.DUT, {
              className: j.yh,
              style: { backgroundColor: d },
              onClick: o,
              children: (0, s.jsx)(h.A, { imageUrl: c.imageUrl, animatedUrl: c.animatedUrl, className: j.vA }),
          });
}
function I(e) {
    let { guildId: t, hashes: l, onSelect: n } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(r.Text, { variant: "text-sm/semibold", children: _.intl.string(b.default.dDID2M) }),
            (0, s.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: j.u2,
                children: _.intl.string(b.default["9Xxm0y"]),
            }),
            (0, s.jsx)("div", {
                className: j.si,
                children: l.slice(0, 9).map((e) => (0, s.jsx)(N, { guildId: t, hash: e, onSelect: n }, e)),
            }),
        ],
    });
}
function A(e) {
    let { transitionState: t, onClose: l, channel: a } = e,
        [d, g] = n.useState("HOME"),
        [h, x] = n.useState(null),
        { recentImageHashes: p, isLoading: C } = (0, f.A)(a.guild_id),
        N = n.useCallback(
            async (e) => {
                x(null);
                try {
                    await (0, o.Hd)(a.id, e), l();
                } catch (e) {
                    x((0, u.w)(e));
                }
            },
            [a.id, l],
        ),
        A = n.useCallback(
            async (e) => {
                x(null);
                try {
                    await (0, o.B$)(a.id, e), l();
                } catch (e) {
                    x((0, u.w)(e));
                }
            },
            [a.id, l],
        ),
        k = n.useCallback(
            (e) => {
                let t = e.gifSrc ?? e.src ?? e.url;
                null != t && N(t);
            },
            [N],
        ),
        S = null != h ? (0, s.jsx)(r.wx6, { type: "critical", children: h }) : null;
    return "RECENT_UPLOADS" === d
        ? (0, s.jsxs)(i.dWK, {
              transitionState: t,
              onClose: l,
              size: "md",
              children: [
                  (0, s.jsx)(i.rQ0, {
                      title: _.intl.string(b.default.aBnIyR),
                      subtitle: _.intl.string(b.default["5VL9Ju"]),
                  }),
                  (0, s.jsxs)("div", {
                      className: j.n3,
                      children: [S, (0, s.jsx)(m.A, { guildId: a.guild_id, onSelect: N })],
                  }),
              ],
          })
        : "GIF_PICKER" === d
          ? (0, s.jsxs)(i.dWK, {
                transitionState: t,
                onClose: l,
                size: "md",
                children: [
                    (0, s.jsx)(i.rQ0, { title: _.intl.string(b.default.HkszWk) }),
                    (0, s.jsxs)("div", {
                        className: j.n3,
                        children: [
                            S,
                            (0, s.jsx)("div", {
                                className: j.SD,
                                children: (0, s.jsx)(c.A, {
                                    className: j.XC,
                                    onSelectGIF: k,
                                    headingColor: "text-subtle",
                                    hideFavorites: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            })
          : (0, s.jsx)(i.aFV, {
                transitionState: t,
                onClose: l,
                size: "md",
                title: _.intl.string(b.default.yyPbqI),
                subtitle: _.intl.string(b.default["+y6KsI"]),
                notice: null != h ? { message: h, type: "critical" } : void 0,
                actions: [],
                children: (0, s.jsxs)("div", {
                    className: j.jE,
                    children: [
                        (0, s.jsx)(y, {
                            onOpenGIFPicker: () => {
                                x(null), g("GIF_PICKER");
                            },
                            onOpenRecentUploads: () => {
                                x(null), g("RECENT_UPLOADS");
                            },
                        }),
                        C
                            ? (0, s.jsx)("div", { className: j.g4, children: (0, s.jsx)(r.y$y, {}) })
                            : p.length > 0
                              ? (0, s.jsx)(I, { guildId: a.guild_id, hashes: p, onSelect: A })
                              : (0, s.jsx)(v, { onSelect: N }),
                    ],
                }),
            });
}
