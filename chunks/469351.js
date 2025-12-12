n.d(t, { t: () => w }), n(388685), n(314940);
var r = n(54381),
    i = n(473749),
    l = n(278074),
    a = n(399606),
    s = n(159691),
    o = n(481060),
    c = n(76535),
    d = n(395586),
    u = n(204875),
    g = n(715796),
    f = n(411667),
    m = n(434404),
    b = n(962086),
    p = n(225675),
    h = n(703656),
    x = n(601964),
    j = n(485386),
    v = n(430824),
    O = n(594174),
    C = n(63063),
    y = n(267101),
    N = n(294294),
    E = n(310800),
    I = n(833695),
    S = n(981631),
    _ = n(176505),
    T = n(388032),
    P = n(155167);
function w(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: w } = (0, y.eD)(t),
        Z = (0, a.e7)([v.Z], () => v.Z.getGuild(t)),
        R = (0, a.e7)([O.default], () => O.default.getCurrentUser()),
        D = null != Z && (0, x.eM)(Z, R),
        { loading: A } = (0, c.H)(t),
        [L, k] = i.useState(n ? "manage_listings" : "payment");
    (0, g.P)(Z);
    let G = i.useCallback(() => {
        if (null == Z) return;
        let e = j.Z.getEveryoneRole(Z);
        m.Z.close();
        let t = { [e.id]: e };
        (0, b.iD)(Z.id, {
            type: p.z.SERVER_SHOP,
            roles: t,
            initialTab: "guild_products",
            returnToSection: S.pNK.GUILD_PRODUCTS,
        }),
            (0, h.uL)(S.Z5c.CHANNEL(Z.id, _.oC.GUILD_SHOP));
    }, [Z]);
    if (!w || A) return (0, r.jsx)(o.$jN, {});
    if (null == Z) return null;
    let M = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: T.intl.string(T.t.X6h2gz),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: T.intl.format(T.t.xiYuDt, {
                        monetizationPolicyLink: C.Z.getArticleURL(S.BhN.CREATOR_POLICY),
                        serverProductsSupportLink: C.Z.getCreatorSupportArticleURL(S.BhN.SERVER_PRODUCTS),
                    }),
                }),
            ],
        }),
        U = (0, r.jsxs)(o.njP, {
            type: "top",
            look: "brand",
            className: P.tabBar,
            "aria-label": T.intl.string(T.t.X6h2gz),
            selectedItem: L,
            onItemSelect: k,
            children: [
                (0, r.jsx)(u.Z, {
                    id: "basic_info",
                    disabledTooltip: T.intl.string(T.t.NVDuUX),
                    disabled: !n,
                    children: T.intl.string(T.t.w27QAR),
                }),
                (0, r.jsx)(u.Z, {
                    id: "manage_listings",
                    disabledTooltip: T.intl.string(T.t.NVDuUX),
                    disabled: !n,
                    children: T.intl.string(T.t.wlZ1mh),
                }),
                D
                    ? (0, r.jsx)(o.njP.Item, {
                          id: "payment",
                          className: P.tabBarItem,
                          children: T.intl.string(T.t.YBrFe6),
                      })
                    : null,
                n
                    ? (0, r.jsx)("div", {
                          className: P.previewButton,
                          children: (0, r.jsx)(s.zxk, {
                              text: T.intl.string(T.t.vM81yY),
                              variant: "secondary",
                              onClick: G,
                              size: "sm",
                          }),
                      })
                    : null,
            ],
        }),
        B = (0, l.EQ)(L)
            .with("basic_info", () => (0, r.jsx)(N.Z, { guildId: t }))
            .with("manage_listings", () => (0, r.jsx)(E.Z, { guildId: t }))
            .with("payment", () => (0, r.jsx)(I.Z, { guildId: t }))
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
            (0, r.jsx)(f.Z, { guild: Z }),
            (0, r.jsx)("div", {
                className: P.tabBarContainer,
                children: U,
            }),
            F,
        ],
    });
}
