n.d(t, {
    z: function () {
        return L;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(399606),
    l = n(433517),
    a = n(481060),
    c = n(607070),
    d = n(357352),
    C = n(703656),
    u = n(652515),
    x = n(847033),
    f = n(544978),
    p = n(307537),
    h = n(987513),
    m = n(895737),
    g = n(629481),
    v = n(981631),
    _ = n(176505),
    j = n(388032),
    I = n(895997);
function w(e) {
    let { icon: t, title: n, body: i, selected: o, disabled: l = !1, onClick: c, onPreviewDismiss: d, isNew: C = !1 } = e;
    return (0, r.jsxs)(a.ClickableContainer, {
        onClick: l ? void 0 : c,
        'aria-disabled': l,
        className: s()(I.tab, {
            [I.selected]: o,
            [I.tabDisabled]: l,
            [I.preview]: !o && null != d
        }),
        'aria-label': n,
        children: [
            (0, r.jsx)('div', {
                className: I.iconContainer,
                children: t
            }),
            (0, r.jsx)(a.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: o ? 'always-white' : 'header-primary',
                        children: n
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: o ? 'always-white' : l ? 'text-muted' : 'header-primary',
                        children: i
                    })
                ]
            }),
            C &&
                (0, r.jsx)(a.TextBadge, {
                    color: a.tokens.unsafe_rawColors.BRAND_260.css,
                    className: I.newBadge,
                    text: j.intl.string(j.t.y2b7CA)
                }),
            null != d &&
                (0, r.jsx)(a.Clickable, {
                    className: I.tabPreviewClose,
                    onClick: d,
                    'aria-label': j.intl.string(j.t.WAI6xs),
                    children: (0, r.jsx)(a.CircleXIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
        ]
    });
}
function L(e) {
    let { guild: t } = e,
        n = (0, u.RF)(t.id, 'guild_shop_category_selector'),
        { selectedTab: i, setSelectedTab: s, categoryTabs: L, handlePreviewDismiss: S } = (0, x.m)(),
        b = 'false' === l.K.get(g.Hr, 'false'),
        Z = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        N = L.map((e) => {
            switch (e) {
                case f.y.GUILD_PRODUCTS:
                    return (0, r.jsx)(
                        w,
                        {
                            icon: (0, r.jsx)(p.Z, {
                                width: 20,
                                height: 20
                            }),
                            title: j.intl.string(j.t.odvTUl),
                            body: j.intl.string(j.t['0JFpRU']),
                            selected: i === f.y.GUILD_PRODUCTS,
                            onClick: () => s(f.y.GUILD_PRODUCTS)
                        },
                        e
                    );
                case f.y.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        w,
                        {
                            icon: (0, r.jsx)(h.Z, {
                                width: 20,
                                height: 20
                            }),
                            title: j.intl.string(j.t['KzCF//']),
                            body: n ? j.intl.string(j.t['jqz+l5']) : j.intl.format(j.t.ycs4oK, { openRoleSubPage: () => (0, C.uL)(v.Z5c.CHANNEL(t.id, _.oC.ROLE_SUBSCRIPTIONS)) }),
                            disabled: !n,
                            selected: i === f.y.GUILD_ROLE_SUBSCRIPTIONS,
                            onClick: () => s(f.y.GUILD_ROLE_SUBSCRIPTIONS)
                        },
                        e
                    );
                case f.y.GUILD_PRODUCTS_PREVIEW:
                    return (0, r.jsx)(
                        w,
                        {
                            icon: b
                                ? (0, r.jsx)('img', {
                                      src: Z ? (0, d.b)('server_products/storefront/question-mark.png') : (0, d.b)('server_products/storefront/question-mark.gif'),
                                      className: I.questionMark,
                                      alt: ''
                                  })
                                : (0, r.jsx)(a.GiftIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20
                                  }),
                            title: j.intl.string(j.t.odvTUl),
                            body: j.intl.string(j.t['827i8P']),
                            selected: i === f.y.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                s(f.y.GUILD_PRODUCTS_PREVIEW), l.K.set(g.Hr, 'true');
                            },
                            onPreviewDismiss: S,
                            isNew: b
                        },
                        e
                    );
                default:
                    return null;
            }
        });
    return (0, r.jsxs)('div', {
        className: I.container,
        children: [
            (0, r.jsx)(a.Heading, {
                variant: 'heading-sm/bold',
                className: I.header,
                children: j.intl.string(j.t.GF433N)
            }),
            (0, r.jsx)(a.Spacer, { size: 12 }),
            (0, r.jsxs)('div', {
                className: I.filters,
                children: [
                    (0, r.jsx)('div', {
                        className: I.tabs,
                        children: N
                    }),
                    i === f.y.GUILD_PRODUCTS && (0, r.jsx)(m.Z, {})
                ]
            })
        ]
    });
}
