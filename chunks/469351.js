n.d(t, {
    t: function () {
        return A;
    }
}),
    n(47120),
    n(627341);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(278074),
    o = n(399606),
    c = n(481060),
    d = n(76535),
    u = n(395586),
    m = n(204875),
    h = n(715796),
    g = n(411667),
    x = n(434404),
    p = n(962086),
    f = n(225675),
    C = n(703656),
    v = n(430824),
    _ = n(594174),
    I = n(63063),
    N = n(267101),
    T = n(294294),
    j = n(310800),
    b = n(833695),
    S = n(981631),
    E = n(176505),
    R = n(388032),
    y = n(969033);
function A(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: i } = (0, N.eD)(t),
        r = (0, o.e7)([v.Z], () => v.Z.getGuild(t)),
        A = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        Z = (null == r ? void 0 : r.isOwner(A)) === !0,
        { loading: L } = (0, d.H)(t),
        [D, O] = a.useState(n ? 'manage_listings' : 'payment');
    (0, h.P)(r);
    let k = a.useCallback(() => {
        if (null == r) return;
        let e = v.Z.getRole(r.id, r.getEveryoneRoleId());
        if (null == e) return;
        x.Z.close();
        let t = { [e.id]: e };
        (0, p.iD)(r.id, {
            type: f.z.SERVER_SHOP,
            roles: t,
            initialTab: 'guild_products',
            returnToSection: S.pNK.GUILD_PRODUCTS
        }),
            (0, C.uL)(S.Z5c.CHANNEL(r.id, E.oC.GUILD_SHOP));
    }, [r]);
    if (!i || L) return (0, l.jsx)(c.Spinner, {});
    if (null == r) return null;
    let P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H1,
                    children: R.intl.string(R.t.X6h2g4)
                }),
                (0, l.jsx)(c.FormText, {
                    type: c.FormText.Types.DESCRIPTION,
                    children: R.intl.format(R.t.xiYuDg, {
                        monetizationPolicyLink: I.Z.getArticleURL(S.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: I.Z.getCreatorSupportArticleURL(S.BhN.SERVER_PRODUCTS)
                    })
                })
            ]
        }),
        M = (0, l.jsxs)(c.TabBar, {
            type: 'top',
            look: 'brand',
            className: y.tabBar,
            'aria-label': R.intl.string(R.t.X6h2g4),
            selectedItem: D,
            onItemSelect: O,
            children: [
                (0, l.jsx)(m.Z, {
                    id: 'basic_info',
                    disabledTooltip: R.intl.string(R.t.NVDuUV),
                    disabled: !n,
                    children: R.intl.string(R.t.w27QAQ)
                }),
                (0, l.jsx)(m.Z, {
                    id: 'manage_listings',
                    disabledTooltip: R.intl.string(R.t.NVDuUV),
                    disabled: !n,
                    children: R.intl.string(R.t.wlZ1mp)
                }),
                Z
                    ? (0, l.jsx)(c.TabBar.Item, {
                          id: 'payment',
                          className: y.tabBarItem,
                          children: R.intl.string(R.t.YBrFe3)
                      })
                    : null,
                n
                    ? (0, l.jsx)('div', {
                          className: y.previewButton,
                          children: (0, l.jsx)(c.Button, {
                              onClick: k,
                              color: c.Button.Colors.PRIMARY,
                              size: c.Button.Sizes.SMALL,
                              look: c.Button.Looks.OUTLINED,
                              children: R.intl.string(R.t.vM81yc)
                          })
                      })
                    : null
            ]
        }),
        w = (0, s.EQ)(D)
            .with('basic_info', () => (0, l.jsx)(T.Z, { guildId: t }))
            .with('manage_listings', () => (0, l.jsx)(j.Z, { guildId: t }))
            .with('payment', () => (0, l.jsx)(b.Z, { guildId: t }))
            .exhaustive(),
        B = i
            ? (0, l.jsx)(c.TabBar.Panel, {
                  id: D,
                  children: w
              })
            : (0, l.jsx)(c.Spinner, {});
    return (0, l.jsxs)(u.AL, {
        guildId: t,
        children: [
            P,
            (0, l.jsx)(g.Z, { guild: r }),
            (0, l.jsx)('div', {
                className: y.tabBarContainer,
                children: M
            }),
            B
        ]
    });
}
((r = i || (i = {})).MANAGE_LISTINGS = 'manage_listings'), (r.PAYMENT = 'payment'), (r.BASIC_INFO = 'basic_info');
