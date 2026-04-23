t.d(l, { default: () => H });
var s = t(627968),
    n = t(64700),
    r = t(224640),
    a = t(20742),
    i = t(189213),
    c = t(939249),
    u = t(750943),
    o = t(834730),
    d = t(391242),
    g = t(683071),
    m = t(289873),
    h = t(743674),
    f = t(45837),
    x = t(888697),
    b = t(203443),
    C = t(522435),
    _ = t(493819),
    j = t(233901),
    p = t(425897),
    y = t(415278),
    k = t(131955),
    A = t(844045),
    v = t(985018),
    I = t(462367);
let N = [
    { gif: t(203736), png: t(775788) },
    { gif: t(640237), png: t(689006) },
    { gif: t(964805), png: t(533798) },
    { gif: t(322821), png: t(891814) },
];
function E(e) {
    let { shouldAnimate: l } = e;
    return (0, s.jsx)("div", {
        className: I.p8,
        children: N.map((e) =>
            (0, s.jsx)("div", { className: I.Nw, style: { backgroundImage: `url(${l ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function S(e) {
    let { onOpenGIFPicker: l, onOpenRecentUploads: t } = e,
        { shouldAnimate: n, onMouseEnter: r, onMouseLeave: a } = (0, f.A)();
    return (0, s.jsxs)("ul", {
        className: I.f9,
        children: [
            (0, s.jsx)("li", {
                children: (0, s.jsx)(c.D, {
                    className: I.uK,
                    onClick: t,
                    children: (0, s.jsxs)("div", {
                        className: I.Mn,
                        children: [
                            (0, s.jsx)(u.X, { size: "md", color: "currentColor" }),
                            (0, s.jsx)(o.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: v.intl.string(A.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, s.jsx)("li", {
                children: (0, s.jsxs)(c.D, {
                    className: I.uK,
                    onClick: l,
                    onMouseEnter: r,
                    onMouseLeave: a,
                    children: [
                        (0, s.jsx)(E, { shouldAnimate: n }),
                        (0, s.jsxs)("div", {
                            className: I.MF,
                            children: [
                                (0, s.jsx)(d.O, { size: "md", color: "currentColor" }),
                                (0, s.jsx)(o.E, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: v.intl.string(A.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function G(e) {
    let { onSelect: l } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(o.E, { variant: "text-sm/semibold", children: v.intl.string(A.default.SQb1dl) }),
            (0, s.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: I.u2,
                children: v.intl.string(A.default["2THN2i"]),
            }),
            (0, s.jsx)("div", {
                className: I.si,
                children: k.Kg.map((e, t) => {
                    let { gif: n, png: r } = e;
                    return (0, s.jsx)(
                        c.D,
                        {
                            onClick: () => l(n),
                            children: (0, s.jsx)(_.A, {
                                imageUrl: r,
                                animatedUrl: n,
                                autoPlayOnMount: !0,
                                className: I.yh,
                            }),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function R(e) {
    let { guildId: l, hash: t, onSelect: r } = e,
        a = n.useMemo(() => (0, C.Sq)({ guildId: l, bannerHash: t }), [l, t]),
        i = (0, h.S)(a?.imageUrl ?? ""),
        u = n.useCallback(() => r(t), [t, r]);
    return null == a
        ? null
        : (0, s.jsx)(c.D, {
              className: I.yh,
              style: { backgroundColor: i },
              onClick: u,
              children: (0, s.jsx)(_.A, { imageUrl: a.imageUrl, animatedUrl: a.animatedUrl, className: I.vA }),
          });
}
function w(e) {
    let { guildId: l, hashes: t, onSelect: n } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(o.E, { variant: "text-sm/semibold", children: v.intl.string(A.default.dDID2M) }),
            (0, s.jsx)("div", {
                className: I.si,
                children: t.slice(0, 9).map((e) => (0, s.jsx)(R, { guildId: l, hash: e, onSelect: n }, e)),
            }),
        ],
    });
}
function H(e) {
    let { transitionState: l, onClose: t, channel: c } = e,
        [u, o] = n.useState("HOME"),
        [d, h] = n.useState(null),
        { recentImageHashes: f, isLoading: C } = (0, y.A)(c.guild_id),
        _ = n.useCallback(
            async (e) => {
                h(null);
                try {
                    await (0, x.Hd)(c.id, e), t();
                } catch (e) {
                    h((0, b.w)(e));
                }
            },
            [c.id, t],
        ),
        k = n.useCallback(
            async (e) => {
                h(null);
                try {
                    await (0, x.B$)(c.id, e), t();
                } catch (e) {
                    h((0, b.w)(e));
                }
            },
            [c.id, t],
        ),
        N = n.useCallback(
            (e) => {
                let l = e.gifSrc ?? e.src ?? e.url;
                null != l && _(l);
            },
            [_],
        ),
        E = n.useCallback(() => (h(null), o("HOME"), Promise.resolve()), []),
        R = null != d ? (0, s.jsx)(g.w, { type: "critical", children: d }) : null;
    return "RECENT_UPLOADS" === u
        ? (0, s.jsxs)(r.d, {
              transitionState: l,
              onClose: E,
              size: "md",
              children: [
                  (0, s.jsx)(a.rQ, {
                      title: v.intl.string(A.default.aBnIyR),
                      subtitle: v.intl.string(A.default["5VL9Ju"]),
                  }),
                  (0, s.jsxs)("div", {
                      className: I.n3,
                      children: [R, (0, s.jsx)(p.A, { guildId: c.guild_id, onSelect: _ })],
                  }),
              ],
          })
        : "GIF_PICKER" === u
          ? (0, s.jsxs)(r.d, {
                transitionState: l,
                onClose: E,
                size: "md",
                children: [
                    (0, s.jsx)(a.rQ, { title: v.intl.string(A.default.HkszWk) }),
                    (0, s.jsxs)("div", {
                        className: I.n3,
                        children: [
                            R,
                            (0, s.jsx)("div", {
                                className: I.SD,
                                children: (0, s.jsx)(j.A, { className: I.XC, onSelectGIF: N }),
                            }),
                        ],
                    }),
                ],
            })
          : (0, s.jsx)(i.Modal, {
                transitionState: l,
                onClose: t,
                size: "md",
                title: v.intl.string(A.default.yyPbqI),
                subtitle: v.intl.string(A.default["+y6KsI"]),
                notice: null != d ? { message: d, type: "critical" } : void 0,
                actions: [],
                children: (0, s.jsxs)("div", {
                    className: I.jE,
                    children: [
                        (0, s.jsx)(S, {
                            onOpenGIFPicker: () => {
                                h(null), o("GIF_PICKER");
                            },
                            onOpenRecentUploads: () => {
                                h(null), o("RECENT_UPLOADS");
                            },
                        }),
                        C
                            ? (0, s.jsx)("div", { className: I.g4, children: (0, s.jsx)(m.y, {}) })
                            : f.length > 0
                              ? (0, s.jsx)(w, { guildId: c.guild_id, hashes: f, onSelect: k })
                              : (0, s.jsx)(G, { onSelect: _ }),
                    ],
                }),
            });
}
