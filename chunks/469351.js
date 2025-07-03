(n.d(t, { t: () => P }), n(388685), n(314940));
var r = n(255367),
    i = n(73800),
    l = n(278074),
    s = n(399606),
    a = n(481060),
    o = n(76535),
    c = n(395586),
    d = n(204875),
    u = n(715796),
    m = n(411667),
    g = n(434404),
    p = n(962086),
    f = n(225675),
    h = n(703656),
    x = n(601964),
    b = n(485386),
    j = n(430824),
    _ = n(594174),
    v = n(63063),
    O = n(267101),
    C = n(294294),
    y = n(310800),
    N = n(833695),
    I = n(981631),
    E = n(176505),
    S = n(388032),
    T = n(560131);
function P(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: P } = (0, O.eD)(t),
        w = (0, s.e7)([j.Z], () => j.Z.getGuild(t)),
        R = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        Z = null != w && (0, x.eM)(w, R),
        { loading: D } = (0, o.H)(t),
        [k, A] = i.useState(n ? 'manage_listings' : 'payment');
    (0, u.P)(w);
    let L = i.useCallback(() => {
        if (null == w) return;
        let e = b.Z.getEveryoneRole(w);
        g.Z.close();
        let t = { [e.id]: e };
        ((0, p.iD)(w.id, {
            type: f.z.SERVER_SHOP,
            roles: t,
            initialTab: 'guild_products',
            returnToSection: I.pNK.GUILD_PRODUCTS
        }),
            (0, h.uL)(I.Z5c.CHANNEL(w.id, E.oC.GUILD_SHOP)));
    }, [w]);
    if (!P || D) return (0, r.jsx)(a.$jN, {});
    if (null == w) return null;
    let M = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.vwX, {
                    tag: a.RB0.H1,
                    children: S.intl.string(S.t.X6h2g4)
                }),
                (0, r.jsx)(a.R94, {
                    type: a.R94.Types.DESCRIPTION,
                    children: S.intl.format(S.t.xiYuDg, {
                        monetizationPolicyLink: v.Z.getArticleURL(I.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: v.Z.getCreatorSupportArticleURL(I.BhN.SERVER_PRODUCTS)
                    })
                })
            ]
        }),
        G = (0, r.jsxs)(a.njP, {
            type: 'top',
            look: 'brand',
            className: T.tabBar,
            'aria-label': S.intl.string(S.t.X6h2g4),
            selectedItem: k,
            onItemSelect: A,
            children: [
                (0, r.jsx)(d.Z, {
                    id: 'basic_info',
                    disabledTooltip: S.intl.string(S.t.NVDuUV),
                    disabled: !n,
                    children: S.intl.string(S.t.w27QAQ)
                }),
                (0, r.jsx)(d.Z, {
                    id: 'manage_listings',
                    disabledTooltip: S.intl.string(S.t.NVDuUV),
                    disabled: !n,
                    children: S.intl.string(S.t.wlZ1mp)
                }),
                Z
                    ? (0, r.jsx)(a.njP.Item, {
                          id: 'payment',
                          className: T.tabBarItem,
                          children: S.intl.string(S.t.YBrFe3)
                      })
                    : null,
                n
                    ? (0, r.jsx)('div', {
                          className: T.previewButton,
                          children: (0, r.jsx)(a.zxk, {
                              onClick: L,
                              color: a.zxk.Colors.PRIMARY,
                              size: a.zxk.Sizes.SMALL,
                              look: a.zxk.Looks.OUTLINED,
                              children: S.intl.string(S.t.vM81yc)
                          })
                      })
                    : null
            ]
        }),
        U = (0, l.EQ)(k)
            .with('basic_info', () => (0, r.jsx)(C.Z, { guildId: t }))
            .with('manage_listings', () => (0, r.jsx)(y.Z, { guildId: t }))
            .with('payment', () => (0, r.jsx)(N.Z, { guildId: t }))
            .exhaustive(),
        B = P
            ? (0, r.jsx)(a.njP.Panel, {
                  id: k,
                  children: U
              })
            : (0, r.jsx)(a.$jN, {});
    return (0, r.jsxs)(c.AL, {
        guildId: t,
        children: [
            M,
            (0, r.jsx)(m.Z, { guild: w }),
            (0, r.jsx)('div', {
                className: T.tabBarContainer,
                children: G
            }),
            B
        ]
    });
}
