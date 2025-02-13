n.d(t, { Z: () => N }), n(627341);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(278074),
    c = n(831209),
    a = n(399606),
    d = n(481060),
    u = n(37234),
    f = n(597688),
    m = n(884697),
    p = n(222062),
    h = n(74538),
    g = n(731896),
    x = n(528439),
    _ = n(981631),
    v = n(388032),
    C = n(240667),
    E = n(223223);
let I = () => 80,
    j = (e) => {
        let { children: t, className: n, isSelected: i = !1, ...l } = e;
        return (0, r.jsx)(d.P3F, {
            className: s()(C.effectGridItem, n, { [C.selected]: i }),
            ...l,
            onClick: l.onSelect,
            children: t
        });
    },
    P = (e) => {
        var t;
        let { user: n, profileEffect: l, innerRef: s, section: o, isSelected: u, ..._ } = e,
            I = (0, g.V)(l.id),
            P = (0, a.e7)([f.Z], () => {
                let e = f.Z.getProduct(l.skuId);
                return (0, m.G1)(e);
            }),
            N = (0, m.Yq)(l.skuId),
            Z = i.useRef(null),
            { accessibilityLabel: S, thumbnailPreviewSrc: b, title: T } = null !== (t = null == I ? void 0 : I.config) && void 0 !== t ? t : {},
            k = h.ZP.canUseCollectibles(n),
            A = o === x.$0.PREMIUM_PURCHASE && !k,
            B = (0, p.M)();
        return (0, r.jsxs)(j, {
            className: !A || u || B ? void 0 : C.decorationGridItemChurned,
            innerRef: null != s ? s : Z,
            isSelected: u,
            ..._,
            children: [
                (0, r.jsx)('img', {
                    src: E,
                    alt: S,
                    className: C.presetEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: C.presetEffectImg,
                    src: b,
                    alt: T
                }),
                o === x.$0.PURCHASE || (o === x.$0.PREMIUM_PURCHASE && k)
                    ? null
                    : N
                      ? (0, r.jsx)(d.lBU, {
                            className: C.newBadge,
                            text: (0, r.jsxs)('div', {
                                className: C.newBadgeText,
                                children: [
                                    (0, r.jsx)(d.mBM, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    v.intl.string(v.t.y2b7CA)
                                ]
                            })
                        })
                      : (0, r.jsx)(d.G2e, {
                            icon: P
                                ? () =>
                                      (0, r.jsx)(d.SrA, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, r.jsx)(d.mBM, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: c.Z.BACKGROUND_ACCENT,
                            className: C.lockBadge
                        })
            ]
        });
    },
    N = (e) => {
        let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: l, onSelect: s, onClose: c } = e,
            a = () => {
                c(), (0, u.jN)(_.S9g.COLLECTIBLES_SHOP);
            },
            f = (0, x.ZP)(),
            m = null != i;
        return (0, r.jsx)('section', {
            className: C.section,
            children: (0, r.jsx)(d.GMG, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: C.list,
                columns: 3,
                sections: f.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, c, u, p) => {
                    let { section: h, items: g } = f[e];
                    return (0, o.EQ)(g[c])
                        .with(x.Tm, () =>
                            (0, r.jsxs)(
                                j,
                                {
                                    style: { ...u },
                                    isSelected: !m,
                                    onSelect: () => s(null),
                                    children: [
                                        (0, r.jsx)(d.t6m, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: C.notAllowedIcon
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-primary',
                                            children: null != n ? v.intl.string(v.t.GJ3Fcn) : v.intl.string(v.t.PoWNfX)
                                        })
                                    ]
                                },
                                p
                            )
                        )
                        .with(x.oT, () =>
                            (0, r.jsxs)(
                                j,
                                {
                                    style: u,
                                    onSelect: a,
                                    children: [
                                        (0, r.jsx)(d.EOn, {
                                            size: 'custom',
                                            width: 23,
                                            height: 23,
                                            color: 'currentColor',
                                            className: C.shopIcon
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-primary',
                                            children: v.intl.string(v.t.pWG4zc)
                                        })
                                    ]
                                },
                                p
                            )
                        )
                        .otherwise((e) => {
                            let n = i === e.id;
                            return (0, r.jsx)(
                                P,
                                {
                                    user: t,
                                    style: { ...u },
                                    section: h,
                                    profileEffect: e,
                                    innerRef: n ? l : void 0,
                                    isSelected: n,
                                    onSelect: () => s(e.id)
                                },
                                p
                            );
                        });
                },
                renderSection: (e, t) => {
                    let { header: n } = f[e];
                    return (0, r.jsx)('div', {
                        style: {
                            ...t,
                            height: ''.concat(16, 'px'),
                            position: 'absolute'
                        },
                        children: (0, r.jsx)(d.vwX, { children: n })
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => {
                    var n, r;
                    return null !== (r = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null;
                },
                getItemHeight: I,
                removeEdgeItemGutters: !0
            })
        });
    };
