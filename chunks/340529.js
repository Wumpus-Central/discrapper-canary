n.d(t, { z: () => I });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(399606),
    o = n(433517),
    a = n(481060),
    c = n(607070),
    d = n(357352),
    C = n(703656),
    u = n(652515),
    x = n(847033),
    p = n(544978),
    h = n(307537),
    _ = n(987513),
    m = n(895737),
    g = n(629481),
    v = n(981631),
    f = n(176505),
    j = n(388032),
    L = n(895997);
function w(e) {
    let { icon: t, title: n, body: r, selected: l, disabled: o = !1, onClick: c, onPreviewDismiss: d, isNew: C = !1 } = e;
    return (0, i.jsxs)(a.kL8, {
        onClick: o ? void 0 : c,
        'aria-disabled': o,
        className: s()(L.tab, {
            [L.selected]: l,
            [L.tabDisabled]: o,
            [L.preview]: !l && null != d
        }),
        'aria-label': n,
        children: [
            (0, i.jsx)('div', {
                className: L.iconContainer,
                children: t
            }),
            (0, i.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: l ? 'always-white' : 'header-primary',
                        children: n
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: l ? 'always-white' : o ? 'text-muted' : 'header-primary',
                        children: r
                    })
                ]
            }),
            C &&
                (0, i.jsx)(a.IGR, {
                    color: a.TVs.unsafe_rawColors.BRAND_260.css,
                    className: L.newBadge,
                    text: j.intl.string(j.t.y2b7CA)
                }),
            null != d &&
                (0, i.jsx)(a.P3F, {
                    className: L.tabPreviewClose,
                    onClick: d,
                    'aria-label': j.intl.string(j.t.WAI6xs),
                    children: (0, i.jsx)(a.k$p, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
        ]
    });
}
function I(e) {
    let { guild: t } = e,
        n = (0, u.RF)(t.id, 'guild_shop_category_selector'),
        { selectedTab: r, setSelectedTab: s, categoryTabs: I, handlePreviewDismiss: Z } = (0, x.m)(),
        S = 'false' === o.K.get(g.Hr, 'false'),
        N = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        b = I.map((e) => {
            switch (e) {
                case p.y.GUILD_PRODUCTS:
                    return (0, i.jsx)(
                        w,
                        {
                            icon: (0, i.jsx)(h.Z, {
                                width: 20,
                                height: 20
                            }),
                            title: j.intl.string(j.t.odvTUl),
                            body: j.intl.string(j.t['0JFpRU']),
                            selected: r === p.y.GUILD_PRODUCTS,
                            onClick: () => s(p.y.GUILD_PRODUCTS)
                        },
                        e
                    );
                case p.y.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        w,
                        {
                            icon: (0, i.jsx)(_.Z, {
                                width: 20,
                                height: 20
                            }),
                            title: j.intl.string(j.t['KzCF//']),
                            body: n ? j.intl.string(j.t['jqz+l5']) : j.intl.format(j.t.ycs4oK, { openRoleSubPage: () => (0, C.uL)(v.Z5c.CHANNEL(t.id, f.oC.ROLE_SUBSCRIPTIONS)) }),
                            disabled: !n,
                            selected: r === p.y.GUILD_ROLE_SUBSCRIPTIONS,
                            onClick: () => s(p.y.GUILD_ROLE_SUBSCRIPTIONS)
                        },
                        e
                    );
                case p.y.GUILD_PRODUCTS_PREVIEW:
                    return (0, i.jsx)(
                        w,
                        {
                            icon: S
                                ? (0, i.jsx)('img', {
                                      src: N ? (0, d.b)('server_products/storefront/question-mark.png') : (0, d.b)('server_products/storefront/question-mark.gif'),
                                      className: L.questionMark,
                                      alt: ''
                                  })
                                : (0, i.jsx)(a.OgN, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20
                                  }),
                            title: j.intl.string(j.t.odvTUl),
                            body: j.intl.string(j.t['827i8P']),
                            selected: r === p.y.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                s(p.y.GUILD_PRODUCTS_PREVIEW), o.K.set(g.Hr, 'true');
                            },
                            onPreviewDismiss: Z,
                            isNew: S
                        },
                        e
                    );
                default:
                    return null;
            }
        });
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            (0, i.jsx)(a.X6q, {
                variant: 'heading-sm/bold',
                className: L.header,
                children: j.intl.string(j.t.GF433N)
            }),
            (0, i.jsx)(a.LZC, { size: 12 }),
            (0, i.jsxs)('div', {
                className: L.filters,
                children: [
                    (0, i.jsx)('div', {
                        className: L.tabs,
                        children: b
                    }),
                    r === p.y.GUILD_PRODUCTS && (0, i.jsx)(m.Z, {})
                ]
            })
        ]
    });
}
