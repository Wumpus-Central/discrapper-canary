n.d(t, { t: () => R }), n(47120), n(627341);
var i = n(200651),
    r = n(192379),
    l = n(278074),
    s = n(399606),
    a = n(481060),
    o = n(76535),
    c = n(395586),
    d = n(204875),
    u = n(715796),
    m = n(411667),
    h = n(434404),
    g = n(962086),
    x = n(225675),
    p = n(703656),
    _ = n(430824),
    C = n(594174),
    f = n(63063),
    v = n(267101),
    N = n(294294),
    j = n(310800),
    I = n(833695),
    E = n(981631),
    b = n(176505),
    T = n(388032),
    S = n(969033);
function R(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: R } = (0, v.eD)(t),
        Z = (0, s.e7)([_.Z], () => _.Z.getGuild(t)),
        y = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        A = (null == Z ? void 0 : Z.isOwner(y)) === !0,
        { loading: L } = (0, o.H)(t),
        [D, O] = r.useState(n ? 'manage_listings' : 'payment');
    (0, u.P)(Z);
    let k = r.useCallback(() => {
        if (null == Z) return;
        let e = _.Z.getRole(Z.id, Z.getEveryoneRoleId());
        if (null == e) return;
        h.Z.close();
        let t = { [e.id]: e };
        (0, g.iD)(Z.id, {
            type: x.z.SERVER_SHOP,
            roles: t,
            initialTab: 'guild_products',
            returnToSection: E.pNK.GUILD_PRODUCTS
        }),
            (0, p.uL)(E.Z5c.CHANNEL(Z.id, b.oC.GUILD_SHOP));
    }, [Z]);
    if (!R || L) return (0, i.jsx)(a.$jN, {});
    if (null == Z) return null;
    let P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.vwX, {
                    tag: a.RB0.H1,
                    children: T.intl.string(T.t.X6h2g4)
                }),
                (0, i.jsx)(a.R94, {
                    type: a.R94.Types.DESCRIPTION,
                    children: T.intl.format(T.t.xiYuDg, {
                        monetizationPolicyLink: f.Z.getArticleURL(E.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: f.Z.getCreatorSupportArticleURL(E.BhN.SERVER_PRODUCTS)
                    })
                })
            ]
        }),
        w = (0, i.jsxs)(a.njP, {
            type: 'top',
            look: 'brand',
            className: S.tabBar,
            'aria-label': T.intl.string(T.t.X6h2g4),
            selectedItem: D,
            onItemSelect: O,
            children: [
                (0, i.jsx)(d.Z, {
                    id: 'basic_info',
                    disabledTooltip: T.intl.string(T.t.NVDuUV),
                    disabled: !n,
                    children: T.intl.string(T.t.w27QAQ)
                }),
                (0, i.jsx)(d.Z, {
                    id: 'manage_listings',
                    disabledTooltip: T.intl.string(T.t.NVDuUV),
                    disabled: !n,
                    children: T.intl.string(T.t.wlZ1mp)
                }),
                A
                    ? (0, i.jsx)(a.njP.Item, {
                          id: 'payment',
                          className: S.tabBarItem,
                          children: T.intl.string(T.t.YBrFe3)
                      })
                    : null,
                n
                    ? (0, i.jsx)('div', {
                          className: S.previewButton,
                          children: (0, i.jsx)(a.zxk, {
                              onClick: k,
                              color: a.zxk.Colors.PRIMARY,
                              size: a.zxk.Sizes.SMALL,
                              look: a.zxk.Looks.OUTLINED,
                              children: T.intl.string(T.t.vM81yc)
                          })
                      })
                    : null
            ]
        }),
        M = (0, l.EQ)(D)
            .with('basic_info', () => (0, i.jsx)(N.Z, { guildId: t }))
            .with('manage_listings', () => (0, i.jsx)(j.Z, { guildId: t }))
            .with('payment', () => (0, i.jsx)(I.Z, { guildId: t }))
            .exhaustive(),
        U = R
            ? (0, i.jsx)(a.njP.Panel, {
                  id: D,
                  children: M
              })
            : (0, i.jsx)(a.$jN, {});
    return (0, i.jsxs)(c.AL, {
        guildId: t,
        children: [
            P,
            (0, i.jsx)(m.Z, { guild: Z }),
            (0, i.jsx)('div', {
                className: S.tabBarContainer,
                children: w
            }),
            U
        ]
    });
}
