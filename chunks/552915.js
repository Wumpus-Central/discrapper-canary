i.d(e, { A: () => C });
var s = i(627968);
i(64700);
var n = i(575593),
    l = i(311907),
    a = i(397927),
    r = i(550111),
    o = i(242874),
    u = i(75825),
    d = i(331402),
    c = i(287809),
    f = i(562819),
    p = i(215689),
    h = i(674658),
    m = i(245068),
    g = i(704751);
let A = a._3J.SIZE_152,
    x = (0, f.Te)(A),
    _ = (t) => {
        let { item: e } = t,
            i = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
            {
                avatarDecorationSrc: n,
                avatarPlaceholderSrc: r,
                eventHandlers: o,
            } = (0, p.A)({ user: i, avatarDecorationOverride: e, size: x });
        return (0, s.jsx)("div", {
            className: g._P,
            children: (0, s.jsx)(a.euF, { ...o, "aria-label": e.label, src: r, avatarDecoration: n, size: A }),
        });
    },
    y = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: g.xC,
            children: (0, s.jsx)(d.A, { isHighlighted: !0, skuId: e?.skuId }),
        });
    },
    R = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: g.M4,
            children: (0, s.jsx)(r.A, {
                nameplate: e,
                className: g.qF,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    S = (t) => {
        let { product: e } = t;
        return (0, s.jsx)("div", { className: g.hT, children: (0, s.jsx)(m.X, { product: e, isHighlighted: !1 }) });
    },
    C = (t) => {
        let { giftCode: e } = t,
            { product: i, isFetching: l } = (0, h.q)(e.skuId, !0);
        if (l || null == i) return (0, s.jsx)("div", { className: g.dc, children: (0, s.jsx)(a.y$y, {}) });
        if (i.type === n.R.BUNDLE) return 0 === i.items.length ? null : (0, s.jsx)(S, { product: i });
        let r = i?.items[0];
        switch (r?.type) {
            case n.R.AVATAR_DECORATION:
                return (0, s.jsx)(_, { item: r });
            case n.R.PROFILE_EFFECT:
                return (0, s.jsx)(y, { item: r });
            case n.R.NAMEPLATE:
                return (0, s.jsx)(R, { item: r });
            default:
                return null != e.giftStyle
                    ? (0, s.jsx)(u.A, {
                          defaultAnimationState: o.oA.ACTION,
                          idleAnimationState: o.oA.LOOP,
                          className: g.l$,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
