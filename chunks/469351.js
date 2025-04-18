n.d(t, { t: () => S }), n(388685), n(314940);
var r = n(200651),
    i = n(192379),
    s = n(278074),
    l = n(399606),
    a = n(481060),
    o = n(76535),
    c = n(395586),
    d = n(204875),
    u = n(715796),
    m = n(411667),
    g = n(434404),
    p = n(962086),
    h = n(225675),
    f = n(703656),
    x = n(430824),
    b = n(594174),
    j = n(63063),
    N = n(267101),
    _ = n(294294),
    v = n(310800),
    O = n(833695),
    C = n(981631),
    y = n(176505),
    I = n(388032),
    E = n(149555);
function S(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: S } = (0, N.eD)(t),
        T = (0, l.e7)([x.Z], () => x.Z.getGuild(t)),
        P = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        w = (null == T ? void 0 : T.isOwner(P)) === !0,
        { loading: R } = (0, o.H)(t),
        [Z, D] = i.useState(n ? 'manage_listings' : 'payment');
    (0, u.P)(T);
    let A = i.useCallback(() => {
        if (null == T) return;
        let e = x.Z.getRole(T.id, T.getEveryoneRoleId());
        if (null == e) return;
        g.Z.close();
        let t = { [e.id]: e };
        (0, p.iD)(T.id, {
            type: h.z.SERVER_SHOP,
            roles: t,
            initialTab: 'guild_products',
            returnToSection: C.pNK.GUILD_PRODUCTS
        }),
            (0, f.uL)(C.Z5c.CHANNEL(T.id, y.oC.GUILD_SHOP));
    }, [T]);
    if (!S || R) return (0, r.jsx)(a.$jN, {});
    if (null == T) return null;
    let k = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.vwX, {
                    tag: a.RB0.H1,
                    children: I.NW.string(I.t.X6h2g4)
                }),
                (0, r.jsx)(a.R94, {
                    type: a.R94.Types.DESCRIPTION,
                    children: I.NW.format(I.t.xiYuDg, {
                        monetizationPolicyLink: j.Z.getArticleURL(C.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: j.Z.getCreatorSupportArticleURL(C.BhN.SERVER_PRODUCTS)
                    })
                })
            ]
        }),
        W = (0, r.jsxs)(a.njP, {
            type: 'top',
            look: 'brand',
            className: E.tabBar,
            'aria-label': I.NW.string(I.t.X6h2g4),
            selectedItem: Z,
            onItemSelect: D,
            children: [
                (0, r.jsx)(d.Z, {
                    id: 'basic_info',
                    disabledTooltip: I.NW.string(I.t.NVDuUV),
                    disabled: !n,
                    children: I.NW.string(I.t.w27QAQ)
                }),
                (0, r.jsx)(d.Z, {
                    id: 'manage_listings',
                    disabledTooltip: I.NW.string(I.t.NVDuUV),
                    disabled: !n,
                    children: I.NW.string(I.t.wlZ1mp)
                }),
                w
                    ? (0, r.jsx)(a.njP.Item, {
                          id: 'payment',
                          className: E.tabBarItem,
                          children: I.NW.string(I.t.YBrFe3)
                      })
                    : null,
                n
                    ? (0, r.jsx)('div', {
                          className: E.previewButton,
                          children: (0, r.jsx)(a.zxk, {
                              onClick: A,
                              color: a.zxk.Colors.PRIMARY,
                              size: a.zxk.Sizes.SMALL,
                              look: a.zxk.Looks.OUTLINED,
                              children: I.NW.string(I.t.vM81yc)
                          })
                      })
                    : null
            ]
        }),
        L = (0, s.EQ)(Z)
            .with('basic_info', () => (0, r.jsx)(_.Z, { guildId: t }))
            .with('manage_listings', () => (0, r.jsx)(v.Z, { guildId: t }))
            .with('payment', () => (0, r.jsx)(O.Z, { guildId: t }))
            .exhaustive(),
        M = S
            ? (0, r.jsx)(a.njP.Panel, {
                  id: Z,
                  children: L
              })
            : (0, r.jsx)(a.$jN, {});
    return (0, r.jsxs)(c.AL, {
        guildId: t,
        children: [
            k,
            (0, r.jsx)(m.Z, { guild: T }),
            (0, r.jsx)('div', {
                className: E.tabBarContainer,
                children: W
            }),
            M
        ]
    });
}
