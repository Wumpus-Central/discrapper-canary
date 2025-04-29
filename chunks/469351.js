n.d(t, { t: () => S }), n(388685), n(314940);
var r = n(255367),
    i = n(73800),
    l = n(278074),
    s = n(399606),
    a = n(481060),
    o = n(76535),
    c = n(395586),
    u = n(204875),
    d = n(715796),
    m = n(411667),
    g = n(434404),
    p = n(962086),
    h = n(225675),
    f = n(703656),
    x = n(430824),
    b = n(594174),
    j = n(63063),
    _ = n(267101),
    v = n(294294),
    O = n(310800),
    C = n(833695),
    y = n(981631),
    N = n(176505),
    I = n(388032),
    E = n(560131);
function S(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: S } = (0, _.eD)(t),
        T = (0, s.e7)([x.Z], () => x.Z.getGuild(t)),
        P = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        w = (null == T ? void 0 : T.isOwner(P)) === !0,
        { loading: R } = (0, o.H)(t),
        [Z, D] = i.useState(n ? 'manage_listings' : 'payment');
    (0, d.P)(T);
    let k = i.useCallback(() => {
        if (null == T) return;
        let e = x.Z.getRole(T.id, T.getEveryoneRoleId());
        if (null == e) return;
        g.Z.close();
        let t = { [e.id]: e };
        (0, p.iD)(T.id, {
            type: h.z.SERVER_SHOP,
            roles: t,
            initialTab: 'guild_products',
            returnToSection: y.pNK.GUILD_PRODUCTS
        }),
            (0, f.uL)(y.Z5c.CHANNEL(T.id, N.oC.GUILD_SHOP));
    }, [T]);
    if (!S || R) return (0, r.jsx)(a.$jN, {});
    if (null == T) return null;
    let A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.vwX, {
                    tag: a.RB0.H1,
                    children: I.intl.string(I.t.X6h2g4)
                }),
                (0, r.jsx)(a.R94, {
                    type: a.R94.Types.DESCRIPTION,
                    children: I.intl.format(I.t.xiYuDg, {
                        monetizationPolicyLink: j.Z.getArticleURL(y.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: j.Z.getCreatorSupportArticleURL(y.BhN.SERVER_PRODUCTS)
                    })
                })
            ]
        }),
        L = (0, r.jsxs)(a.njP, {
            type: 'top',
            look: 'brand',
            className: E.tabBar,
            'aria-label': I.intl.string(I.t.X6h2g4),
            selectedItem: Z,
            onItemSelect: D,
            children: [
                (0, r.jsx)(u.Z, {
                    id: 'basic_info',
                    disabledTooltip: I.intl.string(I.t.NVDuUV),
                    disabled: !n,
                    children: I.intl.string(I.t.w27QAQ)
                }),
                (0, r.jsx)(u.Z, {
                    id: 'manage_listings',
                    disabledTooltip: I.intl.string(I.t.NVDuUV),
                    disabled: !n,
                    children: I.intl.string(I.t.wlZ1mp)
                }),
                w
                    ? (0, r.jsx)(a.njP.Item, {
                          id: 'payment',
                          className: E.tabBarItem,
                          children: I.intl.string(I.t.YBrFe3)
                      })
                    : null,
                n
                    ? (0, r.jsx)('div', {
                          className: E.previewButton,
                          children: (0, r.jsx)(a.zxk, {
                              onClick: k,
                              color: a.zxk.Colors.PRIMARY,
                              size: a.zxk.Sizes.SMALL,
                              look: a.zxk.Looks.OUTLINED,
                              children: I.intl.string(I.t.vM81yc)
                          })
                      })
                    : null
            ]
        }),
        M = (0, l.EQ)(Z)
            .with('basic_info', () => (0, r.jsx)(v.Z, { guildId: t }))
            .with('manage_listings', () => (0, r.jsx)(O.Z, { guildId: t }))
            .with('payment', () => (0, r.jsx)(C.Z, { guildId: t }))
            .exhaustive(),
        G = S
            ? (0, r.jsx)(a.njP.Panel, {
                  id: Z,
                  children: M
              })
            : (0, r.jsx)(a.$jN, {});
    return (0, r.jsxs)(c.AL, {
        guildId: t,
        children: [
            A,
            (0, r.jsx)(m.Z, { guild: T }),
            (0, r.jsx)('div', {
                className: E.tabBarContainer,
                children: L
            }),
            G
        ]
    });
}
