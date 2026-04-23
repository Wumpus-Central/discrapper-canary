i.d(e, { A: () => E });
var s = i(627968);
i(64700);
var l = i(575593),
    n = i(311907),
    a = i(778712),
    r = i(97808),
    o = i(289873),
    u = i(242874),
    d = i(75825),
    c = i(287809),
    p = i(562819),
    h = i(215689),
    f = i(674658),
    m = i(512213),
    g = i(139136),
    A = i(245068),
    x = i(971144);
let y = a._3.SIZE_152,
    R = (0, p.Te)(y),
    S = (t) => {
        let { item: e } = t,
            i = (0, n.bG)([c.default], () => c.default.getCurrentUser()),
            {
                avatarDecorationSrc: l,
                avatarPlaceholderSrc: a,
                eventHandlers: o,
            } = (0, h.A)({ user: i, avatarDecorationOverride: e, size: R });
        return (0, s.jsx)("div", {
            className: x._P,
            children: (0, s.jsx)(r.eu, { ...o, "aria-label": e.label, src: a, avatarDecoration: l, size: y }),
        });
    },
    C = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: x.xC,
            children: (0, s.jsx)(g.A, { isHighlighted: !0, skuId: e?.skuId }),
        });
    },
    I = (t) => {
        let { item: e } = t;
        return (0, s.jsx)("div", {
            className: x.M4,
            children: (0, s.jsx)(m.A, {
                nameplate: e,
                className: x.qF,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    T = (t) => {
        let { product: e } = t;
        return (0, s.jsx)("div", { className: x.hT, children: (0, s.jsx)(A.X, { product: e, isHighlighted: !1 }) });
    },
    j = (t) => {
        let { giftCode: e } = t;
        return null == e.giftStyle
            ? null
            : (0, s.jsx)(d.A, {
                  defaultAnimationState: u.oA.ACTION,
                  idleAnimationState: u.oA.LOOP,
                  className: x.l$,
                  giftStyle: e.giftStyle,
              });
    },
    E = (t) => {
        let { giftCode: e } = t,
            { product: i, isFetching: n } = (0, f.q)(e.skuId, !0);
        if (n || null == i) return (0, s.jsx)("div", { className: x.dc, children: (0, s.jsx)(o.y, {}) });
        if (i.type === l.R.BUNDLE) return 0 === i.items.length ? null : (0, s.jsx)(T, { product: i });
        let a = i?.items[0];
        switch (a?.type) {
            case l.R.AVATAR_DECORATION:
                return (0, s.jsx)(S, { item: a });
            case l.R.PROFILE_EFFECT:
                return (0, s.jsx)(C, { item: a });
            case l.R.NAMEPLATE:
                return (0, s.jsx)(I, { item: a });
            case l.R.PROFILE_FRAME:
                return (0, s.jsx)(j, { giftCode: e });
            default:
                return null != e.giftStyle
                    ? (0, s.jsx)(d.A, {
                          defaultAnimationState: u.oA.ACTION,
                          idleAnimationState: u.oA.LOOP,
                          className: x.l$,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
