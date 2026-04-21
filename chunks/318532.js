t.d(l, { default: () => I });
var s = t(627968),
    n = t(64700),
    r = t(732955),
    a = t(397927),
    i = t(743674),
    c = t(45837),
    u = t(888697),
    o = t(203443),
    d = t(522435),
    g = t(493819),
    m = t(233901),
    h = t(425897),
    f = t(415278),
    x = t(131955),
    b = t(844045),
    C = t(985018),
    _ = t(462367);
let j = [
    { gif: t(203736), png: t(775788) },
    { gif: t(640237), png: t(689006) },
    { gif: t(964805), png: t(533798) },
    { gif: t(322821), png: t(891814) },
];
function p(e) {
    let { shouldAnimate: l } = e;
    return (0, s.jsx)("div", {
        className: _.p8,
        children: j.map((e) =>
            (0, s.jsx)("div", { className: _.Nw, style: { backgroundImage: `url(${l ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function y(e) {
    let { onOpenGIFPicker: l, onOpenRecentUploads: t } = e,
        { shouldAnimate: n, onMouseEnter: r, onMouseLeave: i } = (0, c.A)();
    return (0, s.jsxs)("ul", {
        className: _.f9,
        children: [
            (0, s.jsx)("li", {
                children: (0, s.jsx)(a.DUT, {
                    className: _.uK,
                    onClick: t,
                    children: (0, s.jsxs)("div", {
                        className: _.Mn,
                        children: [
                            (0, s.jsx)(a.XGR, { size: "md", color: "currentColor" }),
                            (0, s.jsx)(a.Text, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: C.intl.string(b.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, s.jsx)("li", {
                children: (0, s.jsxs)(a.DUT, {
                    className: _.uK,
                    onClick: l,
                    onMouseEnter: r,
                    onMouseLeave: i,
                    children: [
                        (0, s.jsx)(p, { shouldAnimate: n }),
                        (0, s.jsxs)("div", {
                            className: _.MF,
                            children: [
                                (0, s.jsx)(a.Osp, { size: "md", color: "currentColor" }),
                                (0, s.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: C.intl.string(b.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function k(e) {
    let { onSelect: l } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(a.Text, { variant: "text-sm/semibold", children: C.intl.string(b.default.SQb1dl) }),
            (0, s.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: _.u2,
                children: C.intl.string(b.default["2THN2i"]),
            }),
            (0, s.jsx)("div", {
                className: _.si,
                children: x.Kg.map((e, t) => {
                    let { gif: n, png: r } = e;
                    return (0, s.jsx)(
                        a.DUT,
                        {
                            onClick: () => l(n),
                            children: (0, s.jsx)(g.A, {
                                imageUrl: r,
                                animatedUrl: n,
                                autoPlayOnMount: !0,
                                className: _.yh,
                            }),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function A(e) {
    let { guildId: l, hash: t, onSelect: r } = e,
        c = n.useMemo(() => (0, d.Sq)({ guildId: l, bannerHash: t }), [l, t]),
        u = (0, i.S)(c?.imageUrl ?? ""),
        o = n.useCallback(() => r(t), [t, r]);
    return null == c
        ? null
        : (0, s.jsx)(a.DUT, {
              className: _.yh,
              style: { backgroundColor: u },
              onClick: o,
              children: (0, s.jsx)(g.A, { imageUrl: c.imageUrl, animatedUrl: c.animatedUrl, className: _.vA }),
          });
}
function v(e) {
    let { guildId: l, hashes: t, onSelect: n } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(a.Text, { variant: "text-sm/semibold", children: C.intl.string(b.default.dDID2M) }),
            (0, s.jsx)("div", {
                className: _.si,
                children: t.slice(0, 9).map((e) => (0, s.jsx)(A, { guildId: l, hash: e, onSelect: n }, e)),
            }),
        ],
    });
}
function I(e) {
    let { transitionState: l, onClose: t, channel: i } = e,
        [c, d] = n.useState("HOME"),
        [g, x] = n.useState(null),
        { recentImageHashes: j, isLoading: p } = (0, f.A)(i.guild_id),
        A = n.useCallback(
            async (e) => {
                x(null);
                try {
                    await (0, u.Hd)(i.id, e), t();
                } catch (e) {
                    x((0, o.w)(e));
                }
            },
            [i.id, t],
        ),
        I = n.useCallback(
            async (e) => {
                x(null);
                try {
                    await (0, u.B$)(i.id, e), t();
                } catch (e) {
                    x((0, o.w)(e));
                }
            },
            [i.id, t],
        ),
        N = n.useCallback(
            (e) => {
                let l = e.gifSrc ?? e.src ?? e.url;
                null != l && A(l);
            },
            [A],
        ),
        S = n.useCallback(() => (x(null), d("HOME"), Promise.resolve()), []),
        E = null != g ? (0, s.jsx)(a.wx6, { type: "critical", children: g }) : null;
    return "RECENT_UPLOADS" === c
        ? (0, s.jsxs)(r.dWK, {
              transitionState: l,
              onClose: S,
              size: "md",
              children: [
                  (0, s.jsx)(r.rQ0, {
                      title: C.intl.string(b.default.aBnIyR),
                      subtitle: C.intl.string(b.default["5VL9Ju"]),
                  }),
                  (0, s.jsxs)("div", {
                      className: _.n3,
                      children: [E, (0, s.jsx)(h.A, { guildId: i.guild_id, onSelect: A })],
                  }),
              ],
          })
        : "GIF_PICKER" === c
          ? (0, s.jsxs)(r.dWK, {
                transitionState: l,
                onClose: S,
                size: "md",
                children: [
                    (0, s.jsx)(r.rQ0, { title: C.intl.string(b.default.HkszWk) }),
                    (0, s.jsxs)("div", {
                        className: _.n3,
                        children: [
                            E,
                            (0, s.jsx)("div", {
                                className: _.SD,
                                children: (0, s.jsx)(m.A, { className: _.XC, onSelectGIF: N }),
                            }),
                        ],
                    }),
                ],
            })
          : (0, s.jsx)(r.aFV, {
                transitionState: l,
                onClose: t,
                size: "md",
                title: C.intl.string(b.default.yyPbqI),
                subtitle: C.intl.string(b.default["+y6KsI"]),
                notice: null != g ? { message: g, type: "critical" } : void 0,
                actions: [],
                children: (0, s.jsxs)("div", {
                    className: _.jE,
                    children: [
                        (0, s.jsx)(y, {
                            onOpenGIFPicker: () => {
                                x(null), d("GIF_PICKER");
                            },
                            onOpenRecentUploads: () => {
                                x(null), d("RECENT_UPLOADS");
                            },
                        }),
                        p
                            ? (0, s.jsx)("div", { className: _.g4, children: (0, s.jsx)(a.y$y, {}) })
                            : j.length > 0
                              ? (0, s.jsx)(v, { guildId: i.guild_id, hashes: j, onSelect: I })
                              : (0, s.jsx)(k, { onSelect: A }),
                    ],
                }),
            });
}
