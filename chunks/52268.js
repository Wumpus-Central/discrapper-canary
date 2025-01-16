n(627341);
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
    C = n(981631),
    I = n(388032),
    v = n(479366),
    E = n(223223);
let P = () => 80,
    _ = (e) => {
        let { children: t, className: n, isSelected: i = !1, ...l } = e;
        return (0, r.jsx)(d.Clickable, {
            className: s()(v.effectGridItem, n, { [v.selected]: i }),
            ...l,
            onClick: l.onSelect,
            children: t
        });
    },
    j = (e) => {
        var t;
        let { user: n, profileEffect: l, innerRef: s, section: o, isSelected: u, ...C } = e,
            P = (0, g.V)(l.id),
            j = (0, a.e7)([f.Z], () => {
                let e = f.Z.getProduct(l.skuId);
                return (0, m.G1)(e);
            }),
            S = (0, m.Yq)(l.skuId),
            N = i.useRef(null),
            { accessibilityLabel: Z, thumbnailPreviewSrc: T, title: B } = null !== (t = null == P ? void 0 : P.config) && void 0 !== t ? t : {},
            b = h.ZP.canUseCollectibles(n),
            A = o === x.$0.PREMIUM_PURCHASE && !b,
            k = (0, p.M)();
        return (0, r.jsxs)(_, {
            className: !A || u || k ? void 0 : v.decorationGridItemChurned,
            innerRef: null != s ? s : N,
            isSelected: u,
            ...C,
            children: [
                (0, r.jsx)('img', {
                    src: E,
                    alt: Z,
                    className: v.presetEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: v.presetEffectImg,
                    src: T,
                    alt: B
                }),
                o === x.$0.PURCHASE || (o === x.$0.PREMIUM_PURCHASE && b)
                    ? null
                    : S
                      ? (0, r.jsx)(d.PremiumBadge, {
                            className: v.newBadge,
                            text: (0, r.jsxs)('div', {
                                className: v.newBadgeText,
                                children: [
                                    (0, r.jsx)(d.LockIcon, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    I.intl.string(I.t.y2b7CA)
                                ]
                            })
                        })
                      : (0, r.jsx)(d.IconBadge, {
                            icon: j
                                ? () =>
                                      (0, r.jsx)(d.NitroWheelIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, r.jsx)(d.LockIcon, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: c.Z.BACKGROUND_ACCENT,
                            className: v.lockBadge
                        })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: l, onSelect: s, onClose: c } = e,
        a = () => {
            c(), (0, u.jN)(C.S9g.COLLECTIBLES_SHOP);
        },
        f = (0, x.ZP)(),
        m = null != i;
    return (0, r.jsx)('section', {
        className: v.section,
        children: (0, r.jsx)(d.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: v.list,
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
                            _,
                            {
                                style: { ...u },
                                isSelected: !m,
                                onSelect: () => s(null),
                                children: [
                                    (0, r.jsx)(d.DenyIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: v.notAllowedIcon
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: null != n ? I.intl.string(I.t.GJ3Fcn) : I.intl.string(I.t.PoWNfX)
                                    })
                                ]
                            },
                            p
                        )
                    )
                    .with(x.oT, () =>
                        (0, r.jsxs)(
                            _,
                            {
                                style: u,
                                onSelect: a,
                                children: [
                                    (0, r.jsx)(d.ShopIcon, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: v.shopIcon
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: I.intl.string(I.t.pWG4zc)
                                    })
                                ]
                            },
                            p
                        )
                    )
                    .otherwise((e) => {
                        let n = i === e.id;
                        return (0, r.jsx)(
                            j,
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
                    children: (0, r.jsx)(d.FormTitle, { children: n })
                });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => {
                var n, r;
                return null !== (r = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null;
            },
            getItemHeight: P,
            removeEdgeItemGutters: !0
        })
    });
};
