(n.d(t, { t: () => w }), n(388685), n(314940));
var r = n(255367),
    i = n(73800),
    l = n(278074),
    s = n(399606),
    a = n(755721),
    o = n(481060),
    c = n(76535),
    d = n(395586),
    u = n(204875),
    m = n(715796),
    g = n(411667),
    p = n(434404),
    f = n(962086),
    h = n(225675),
    x = n(703656),
    b = n(601964),
    j = n(485386),
    v = n(430824),
    _ = n(594174),
    O = n(63063),
    y = n(267101),
    C = n(294294),
    N = n(310800),
    I = n(833695),
    E = n(981631),
    S = n(176505),
    T = n(388032),
    P = n(560131);
function w(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: w } = (0, y.eD)(t),
        R = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        Z = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        D = null != R && (0, b.eM)(R, Z),
        { loading: A } = (0, c.H)(t),
        [L, k] = i.useState(n ? 'manage_listings' : 'payment');
    (0, m.P)(R);
    let M = i.useCallback(() => {
        if (null == R) return;
        let e = j.Z.getEveryoneRole(R);
        p.Z.close();
        let t = { [e.id]: e };
        ((0, f.iD)(R.id, {
            type: h.z.SERVER_SHOP,
            roles: t,
            initialTab: 'guild_products',
            returnToSection: E.pNK.GUILD_PRODUCTS
        }),
            (0, x.uL)(E.Z5c.CHANNEL(R.id, S.oC.GUILD_SHOP)));
    }, [R]);
    if (!w || A) return (0, r.jsx)(o.$jN, {});
    if (null == R) return null;
    let G = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.vwX, {
                    tag: o.RB0.H1,
                    children: T.intl.string(T.t.X6h2g4)
                }),
                (0, r.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    children: T.intl.format(T.t.xiYuDg, {
                        monetizationPolicyLink: O.Z.getArticleURL(E.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: O.Z.getCreatorSupportArticleURL(E.BhN.SERVER_PRODUCTS)
                    })
                })
            ]
        }),
        U = (0, r.jsxs)(o.njP, {
            type: 'top',
            look: 'brand',
            className: P.tabBar,
            'aria-label': T.intl.string(T.t.X6h2g4),
            selectedItem: L,
            onItemSelect: k,
            children: [
                (0, r.jsx)(u.Z, {
                    id: 'basic_info',
                    disabledTooltip: T.intl.string(T.t.NVDuUV),
                    disabled: !n,
                    children: T.intl.string(T.t.w27QAQ)
                }),
                (0, r.jsx)(u.Z, {
                    id: 'manage_listings',
                    disabledTooltip: T.intl.string(T.t.NVDuUV),
                    disabled: !n,
                    children: T.intl.string(T.t.wlZ1mp)
                }),
                D
                    ? (0, r.jsx)(o.njP.Item, {
                          id: 'payment',
                          className: P.tabBarItem,
                          children: T.intl.string(T.t.YBrFe3)
                      })
                    : null,
                n
                    ? (0, r.jsx)('div', {
                          className: P.previewButton,
                          children: (0, r.jsx)(a.zx, {
                              onClick: M,
                              color: a.zx.Colors.PRIMARY,
                              size: a.zx.Sizes.SMALL,
                              look: a.zx.Looks.OUTLINED,
                              children: T.intl.string(T.t.vM81yc)
                          })
                      })
                    : null
            ]
        }),
        B = (0, l.EQ)(L)
            .with('basic_info', () => (0, r.jsx)(C.Z, { guildId: t }))
            .with('manage_listings', () => (0, r.jsx)(N.Z, { guildId: t }))
            .with('payment', () => (0, r.jsx)(I.Z, { guildId: t }))
            .exhaustive(),
        F = w
            ? (0, r.jsx)(o.njP.Panel, {
                  id: L,
                  children: B
              })
            : (0, r.jsx)(o.$jN, {});
    return (0, r.jsxs)(d.AL, {
        guildId: t,
        children: [
            G,
            (0, r.jsx)(g.Z, { guild: R }),
            (0, r.jsx)('div', {
                className: P.tabBarContainer,
                children: U
            }),
            F
        ]
    });
}
