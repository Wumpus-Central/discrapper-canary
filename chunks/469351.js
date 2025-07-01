(n.d(t, { t: () => T }), n(388685), n(314940));
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
    x = n(485386),
    b = n(430824),
    j = n(594174),
    _ = n(63063),
    v = n(267101),
    O = n(294294),
    C = n(310800),
    y = n(833695),
    N = n(981631),
    I = n(176505),
    E = n(388032),
    S = n(560131);
function T(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: T } = (0, v.eD)(t),
        P = (0, s.e7)([b.Z], () => b.Z.getGuild(t)),
        w = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
        R = (null == P ? void 0 : P.isOwner(w)) === !0,
        { loading: Z } = (0, o.H)(t),
        [D, k] = i.useState(n ? 'manage_listings' : 'payment');
    (0, u.P)(P);
    let A = i.useCallback(() => {
        if (null == P) return;
        let e = x.Z.getRole(P.id, P.getEveryoneRoleId());
        if (null == e) return;
        g.Z.close();
        let t = { [e.id]: e };
        ((0, p.iD)(P.id, {
            type: f.z.SERVER_SHOP,
            roles: t,
            initialTab: 'guild_products',
            returnToSection: N.pNK.GUILD_PRODUCTS
        }),
            (0, h.uL)(N.Z5c.CHANNEL(P.id, I.oC.GUILD_SHOP)));
    }, [P]);
    if (!T || Z) return (0, r.jsx)(a.$jN, {});
    if (null == P) return null;
    let L = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.vwX, {
                    tag: a.RB0.H1,
                    children: E.intl.string(E.t.X6h2g4)
                }),
                (0, r.jsx)(a.R94, {
                    type: a.R94.Types.DESCRIPTION,
                    children: E.intl.format(E.t.xiYuDg, {
                        monetizationPolicyLink: _.Z.getArticleURL(N.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: _.Z.getCreatorSupportArticleURL(N.BhN.SERVER_PRODUCTS)
                    })
                })
            ]
        }),
        M = (0, r.jsxs)(a.njP, {
            type: 'top',
            look: 'brand',
            className: S.tabBar,
            'aria-label': E.intl.string(E.t.X6h2g4),
            selectedItem: D,
            onItemSelect: k,
            children: [
                (0, r.jsx)(d.Z, {
                    id: 'basic_info',
                    disabledTooltip: E.intl.string(E.t.NVDuUV),
                    disabled: !n,
                    children: E.intl.string(E.t.w27QAQ)
                }),
                (0, r.jsx)(d.Z, {
                    id: 'manage_listings',
                    disabledTooltip: E.intl.string(E.t.NVDuUV),
                    disabled: !n,
                    children: E.intl.string(E.t.wlZ1mp)
                }),
                R
                    ? (0, r.jsx)(a.njP.Item, {
                          id: 'payment',
                          className: S.tabBarItem,
                          children: E.intl.string(E.t.YBrFe3)
                      })
                    : null,
                n
                    ? (0, r.jsx)('div', {
                          className: S.previewButton,
                          children: (0, r.jsx)(a.zxk, {
                              onClick: A,
                              color: a.zxk.Colors.PRIMARY,
                              size: a.zxk.Sizes.SMALL,
                              look: a.zxk.Looks.OUTLINED,
                              children: E.intl.string(E.t.vM81yc)
                          })
                      })
                    : null
            ]
        }),
        G = (0, l.EQ)(D)
            .with('basic_info', () => (0, r.jsx)(O.Z, { guildId: t }))
            .with('manage_listings', () => (0, r.jsx)(C.Z, { guildId: t }))
            .with('payment', () => (0, r.jsx)(y.Z, { guildId: t }))
            .exhaustive(),
        U = T
            ? (0, r.jsx)(a.njP.Panel, {
                  id: D,
                  children: G
              })
            : (0, r.jsx)(a.$jN, {});
    return (0, r.jsxs)(c.AL, {
        guildId: t,
        children: [
            L,
            (0, r.jsx)(m.Z, { guild: P }),
            (0, r.jsx)('div', {
                className: S.tabBarContainer,
                children: M
            }),
            U
        ]
    });
}
