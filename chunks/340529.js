r.d(t, { z: () => _ });
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    l = r(399606),
    s = r(433517),
    c = r(481060),
    a = r(607070),
    d = r(357352),
    u = r(703656),
    C = r(652515),
    p = r(847033),
    f = r(544978),
    b = r(307537),
    j = r(987513),
    g = r(895737),
    h = r(629481),
    m = r(981631),
    x = r(176505),
    O = r(388032),
    v = r(953007);
function y(e) {
    let { icon: t, title: r, body: i, selected: l, disabled: s = !1, onClick: a, onPreviewDismiss: d, isNew: u = !1 } = e;
    return (0, n.jsxs)(c.kL8, {
        onClick: s ? void 0 : a,
        'aria-disabled': s,
        className: o()(v.tab, {
            [v.selected]: l,
            [v.tabDisabled]: s,
            [v.preview]: !l && null != d
        }),
        'aria-label': r,
        children: [
            (0, n.jsx)('div', {
                className: v.iconContainer,
                children: t
            }),
            (0, n.jsx)(c.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: 'text-sm/semibold',
                        color: l ? 'always-white' : 'header-primary',
                        children: r
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: l ? 'always-white' : s ? 'text-muted' : 'header-primary',
                        children: i
                    })
                ]
            }),
            u &&
                (0, n.jsx)(c.IGR, {
                    color: c.TVs.unsafe_rawColors.BRAND_260.css,
                    className: v.newBadge,
                    text: O.intl.string(O.t.y2b7CA)
                }),
            null != d &&
                (0, n.jsx)(c.P3F, {
                    className: v.tabPreviewClose,
                    onClick: d,
                    'aria-label': O.intl.string(O.t.WAI6xs),
                    children: (0, n.jsx)(c.k$p, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
        ]
    });
}
function _(e) {
    let { guild: t } = e,
        r = (0, C.RF)(t.id, 'guild_shop_category_selector'),
        { selectedTab: i, setSelectedTab: o, categoryTabs: _, handlePreviewDismiss: w } = (0, p.m)(),
        P = 'false' === s.K.get(h.Hr, 'false'),
        S = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        L = _.map((e) => {
            switch (e) {
                case f.y.GUILD_PRODUCTS:
                    return (0, n.jsx)(
                        y,
                        {
                            icon: (0, n.jsx)(b.Z, {
                                width: 20,
                                height: 20
                            }),
                            title: O.intl.string(O.t.odvTUl),
                            body: O.intl.string(O.t['0JFpRU']),
                            selected: i === f.y.GUILD_PRODUCTS,
                            onClick: () => o(f.y.GUILD_PRODUCTS)
                        },
                        e
                    );
                case f.y.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, n.jsx)(
                        y,
                        {
                            icon: (0, n.jsx)(j.Z, {
                                width: 20,
                                height: 20
                            }),
                            title: O.intl.string(O.t['KzCF//']),
                            body: r ? O.intl.string(O.t['jqz+l5']) : O.intl.format(O.t.ycs4oK, { openRoleSubPage: () => (0, u.uL)(m.Z5c.CHANNEL(t.id, x.oC.ROLE_SUBSCRIPTIONS)) }),
                            disabled: !r,
                            selected: i === f.y.GUILD_ROLE_SUBSCRIPTIONS,
                            onClick: () => o(f.y.GUILD_ROLE_SUBSCRIPTIONS)
                        },
                        e
                    );
                case f.y.GUILD_PRODUCTS_PREVIEW:
                    return (0, n.jsx)(
                        y,
                        {
                            icon: P
                                ? (0, n.jsx)('img', {
                                      src: S ? (0, d.b)('server_products/storefront/question-mark.png') : (0, d.b)('server_products/storefront/question-mark.gif'),
                                      className: v.questionMark,
                                      alt: ''
                                  })
                                : (0, n.jsx)(c.OgN, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20
                                  }),
                            title: O.intl.string(O.t.odvTUl),
                            body: O.intl.string(O.t['827i8P']),
                            selected: i === f.y.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                o(f.y.GUILD_PRODUCTS_PREVIEW), s.K.set(h.Hr, 'true');
                            },
                            onPreviewDismiss: w,
                            isNew: P
                        },
                        e
                    );
                default:
                    return null;
            }
        });
    return (0, n.jsxs)('div', {
        className: v.container,
        children: [
            (0, n.jsx)(c.X6q, {
                variant: 'heading-sm/bold',
                className: v.header,
                children: O.intl.string(O.t.GF433N)
            }),
            (0, n.jsx)(c.LZC, { size: 12 }),
            (0, n.jsxs)('div', {
                className: v.filters,
                children: [
                    (0, n.jsx)('div', {
                        className: v.tabs,
                        children: L
                    }),
                    i === f.y.GUILD_PRODUCTS && (0, n.jsx)(g.Z, {})
                ]
            })
        ]
    });
}
