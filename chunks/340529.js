r.d(t, { z: () => _ });
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    s = r(399606),
    c = r(433517),
    l = r(481060),
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
    let { icon: t, title: r, body: i, selected: s, disabled: c = !1, onClick: a, onPreviewDismiss: d, isNew: u = !1 } = e;
    return (0, n.jsxs)(l.kL8, {
        onClick: c ? void 0 : a,
        'aria-disabled': c,
        className: o()(v.tab, {
            [v.selected]: s,
            [v.tabDisabled]: c,
            [v.preview]: !s && null != d
        }),
        'aria-label': r,
        children: [
            (0, n.jsx)('div', {
                className: v.iconContainer,
                children: t
            }),
            (0, n.jsx)(l.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: s ? 'always-white' : 'header-primary',
                        children: r
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: s ? 'always-white' : c ? 'text-muted' : 'header-primary',
                        children: i
                    })
                ]
            }),
            u &&
                (0, n.jsx)(l.IGR, {
                    color: l.TVs.unsafe_rawColors.BRAND_260.css,
                    className: v.newBadge,
                    text: O.NW.string(O.t.y2b7CA)
                }),
            null != d &&
                (0, n.jsx)(l.P3F, {
                    className: v.tabPreviewClose,
                    onClick: d,
                    'aria-label': O.NW.string(O.t.WAI6xs),
                    children: (0, n.jsx)(l.k$p, {
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
        P = 'false' === c.K.get(h.Hr, 'false'),
        N = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
        S = _.map((e) => {
            switch (e) {
                case f.y.GUILD_PRODUCTS:
                    return (0, n.jsx)(
                        y,
                        {
                            icon: (0, n.jsx)(b.Z, {
                                width: 20,
                                height: 20
                            }),
                            title: O.NW.string(O.t.odvTUl),
                            body: O.NW.string(O.t['0JFpRU']),
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
                            title: O.NW.string(O.t['KzCF//']),
                            body: r ? O.NW.string(O.t['jqz+l5']) : O.NW.format(O.t.ycs4oK, { openRoleSubPage: () => (0, u.uL)(m.Z5c.CHANNEL(t.id, x.oC.ROLE_SUBSCRIPTIONS)) }),
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
                                      src: N ? (0, d.b)('server_products/storefront/question-mark.png') : (0, d.b)('server_products/storefront/question-mark.gif'),
                                      className: v.questionMark,
                                      alt: ''
                                  })
                                : (0, n.jsx)(l.OgN, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20
                                  }),
                            title: O.NW.string(O.t.odvTUl),
                            body: O.NW.string(O.t['827i8P']),
                            selected: i === f.y.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                o(f.y.GUILD_PRODUCTS_PREVIEW), c.K.set(h.Hr, 'true');
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
            (0, n.jsx)(l.X6q, {
                variant: 'heading-sm/bold',
                className: v.header,
                children: O.NW.string(O.t.GF433N)
            }),
            (0, n.jsx)(l.LZC, { size: 12 }),
            (0, n.jsxs)('div', {
                className: v.filters,
                children: [
                    (0, n.jsx)('div', {
                        className: v.tabs,
                        children: S
                    }),
                    i === f.y.GUILD_PRODUCTS && (0, n.jsx)(g.Z, {})
                ]
            })
        ]
    });
}
