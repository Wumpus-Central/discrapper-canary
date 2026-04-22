i.d(e, { A: () => T });
var s = i(627968);
i(64700);
var n = i(575593),
    l = i(311907),
    a = i(397927),
    r = i(242874),
    o = i(75825),
    u = i(287809),
    d = i(562819),
    c = i(215689),
    f = i(674658),
    p = i(512213),
    h = i(139136),
    m = i(245068),
    g = i(971144);
let A = a._3J.SIZE_152,
    x = (0, d.Te)(A),
    _ = (t) => {
        let { item: e } = t,
            i = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
            {
                avatarDecorationSrc: n,
                avatarPlaceholderSrc: r,
                eventHandlers: o,
            } = (0, c.A)({ user: i, avatarDecorationOverride: e, size: x });
        return (0, s.jsx)("div", {
            className: g._P,
            children: (0, s.jsx)(a.euF, { ...o, "aria-label": e.label, src: r, avatarDecoration: n, size: A }),
        });
    },
    y = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: g.xC,
            children: (0, s.jsx)(h.A, { isHighlighted: !0, skuId: e?.skuId }),
        });
    },
    R = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: g.M4,
            children: (0, s.jsx)(p.A, {
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
        let { giftCode: e } = t;
        return null == e.giftStyle
            ? null
            : (0, s.jsx)(o.A, {
                  defaultAnimationState: r.oA.ACTION,
                  idleAnimationState: r.oA.LOOP,
                  className: g.l$,
                  giftStyle: e.giftStyle,
              });
    },
    T = (t) => {
        let { giftCode: e } = t,
            { product: i, isFetching: l } = (0, f.q)(e.skuId, !0);
        if (l || null == i) return (0, s.jsx)("div", { className: g.dc, children: (0, s.jsx)(a.y$y, {}) });
        if (i.type === n.R.BUNDLE) return 0 === i.items.length ? null : (0, s.jsx)(S, { product: i });
        let u = i?.items[0];
        switch (u?.type) {
            case n.R.AVATAR_DECORATION:
                return (0, s.jsx)(_, { item: u });
            case n.R.PROFILE_EFFECT:
                return (0, s.jsx)(y, { item: u });
            case n.R.NAMEPLATE:
                return (0, s.jsx)(R, { item: u });
            case n.R.PROFILE_FRAME:
                return (0, s.jsx)(C, { giftCode: e });
            default:
                return null != e.giftStyle
                    ? (0, s.jsx)(o.A, {
                          defaultAnimationState: r.oA.ACTION,
                          idleAnimationState: r.oA.LOOP,
                          className: g.l$,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
