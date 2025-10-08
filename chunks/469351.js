n.d(t, { t: () => w }), n(388685), n(314940);
var r = n(951288),
    i = n(647438),
    l = n(278074),
    s = n(399606),
    a = n(159691),
    o = n(481060),
    c = n(76535),
    d = n(395586),
    u = n(204875),
    g = n(715796),
    m = n(411667),
    p = n(434404),
    f = n(962086),
    h = n(225675),
    x = n(703656),
    b = n(601964),
    j = n(485386),
    _ = n(430824),
    v = n(594174),
    C = n(63063),
    O = n(267101),
    y = n(294294),
    N = n(310800),
    E = n(833695),
    I = n(981631),
    S = n(176505),
    T = n(388032),
    P = n(514709);
function w(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: w } = (0, O.eD)(t),
        R = (0, s.e7)([_.Z], () => _.Z.getGuild(t)),
        Z = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        D = null != R && (0, b.eM)(R, Z),
        { loading: A } = (0, c.H)(t),
        [L, k] = i.useState(n ? "manage_listings" : "payment");
    (0, g.P)(R);
    let G = i.useCallback(() => {
        if (null == R) return;
        let e = j.Z.getEveryoneRole(R);
        p.Z.close();
        let t = { [e.id]: e };
        (0, f.iD)(R.id, {
            type: h.z.SERVER_SHOP,
            roles: t,
            initialTab: "guild_products",
            returnToSection: I.pNK.GUILD_PRODUCTS,
        }),
            (0, x.uL)(I.Z5c.CHANNEL(R.id, S.oC.GUILD_SHOP));
    }, [R]);
    if (!w || A) return (0, r.jsx)(o.$jN, {});
    if (null == R) return null;
    let M = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.vwX, {
                    tag: o.RB0.H1,
                    children: T.intl.string(T.t.X6h2g4),
                }),
                (0, r.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    children: T.intl.format(T.t.xiYuDg, {
                        monetizationPolicyLink: C.Z.getArticleURL(I.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: C.Z.getCreatorSupportArticleURL(I.BhN.SERVER_PRODUCTS),
                    }),
                }),
            ],
        }),
        U = (0, r.jsxs)(o.njP, {
            type: "top",
            look: "brand",
            className: P.tabBar,
            "aria-label": T.intl.string(T.t.X6h2g4),
            selectedItem: L,
            onItemSelect: k,
            children: [
                (0, r.jsx)(u.Z, {
                    id: "basic_info",
                    disabledTooltip: T.intl.string(T.t.NVDuUV),
                    disabled: !n,
                    children: T.intl.string(T.t.w27QAQ),
                }),
                (0, r.jsx)(u.Z, {
                    id: "manage_listings",
                    disabledTooltip: T.intl.string(T.t.NVDuUV),
                    disabled: !n,
                    children: T.intl.string(T.t.wlZ1mp),
                }),
                D
                    ? (0, r.jsx)(o.njP.Item, {
                          id: "payment",
                          className: P.tabBarItem,
                          children: T.intl.string(T.t.YBrFe3),
                      })
                    : null,
                n
                    ? (0, r.jsx)("div", {
                          className: P.previewButton,
                          children: (0, r.jsx)(a.zxk, {
                              text: T.intl.string(T.t.vM81yc),
                              variant: "secondary",
                              onClick: G,
                              size: "sm",
                          }),
                      })
                    : null,
            ],
        }),
        B = (0, l.EQ)(L)
            .with("basic_info", () => (0, r.jsx)(y.Z, { guildId: t }))
            .with("manage_listings", () => (0, r.jsx)(N.Z, { guildId: t }))
            .with("payment", () => (0, r.jsx)(E.Z, { guildId: t }))
            .exhaustive(),
        F = w
            ? (0, r.jsx)(o.njP.Panel, {
                  id: L,
                  children: B,
              })
            : (0, r.jsx)(o.$jN, {});
    return (0, r.jsxs)(d.AL, {
        guildId: t,
        children: [
            M,
            (0, r.jsx)(m.Z, { guild: R }),
            (0, r.jsx)("div", {
                className: P.tabBarContainer,
                children: U,
            }),
            F,
        ],
    });
}
