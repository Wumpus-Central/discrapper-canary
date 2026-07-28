n.d(e, { A: () => N, k: () => D }), n(321073);
var i = n(477900),
    r = n(582128),
    s = n(284009),
    a = n.n(s),
    l = n(702841),
    o = n(554146),
    c = n(95561),
    d = n(826673),
    u = n(440293),
    h = n(599941),
    S = n(960253),
    _ = n(164956),
    g = n(976860),
    E = n(808728),
    A = n(71393),
    I = n(174459),
    C = n(486418),
    P = n(920814),
    p = n(284683),
    R = n(634654),
    m = n(652215);
let f = r.createContext(void 0);
function D() {
    let t = r.useContext(f);
    return a()(null != t, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), t;
}
function N(t) {
    let { children: e, initialTab: n, guildId: s } = t,
        a = (0, l.bG)([A.A], () => A.A.getGuild(s)),
        D = (0, l.bG)([_.A], () => _.A.isViewingServerShop(s)),
        N = (0, C.P)(a),
        T = (0, u.w)(s),
        L = a?.features.has(m.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        v = (0, S.Oh)(a?.id),
        O = (0, h.Tq)(s)?.server_shop_tab_order,
        U = [],
        x = P.B.GUILD_SHOP_FULL_PREVIEW;
    D || (L && v)
        ? (U.push(O === p.HA.PRODUCTS_FIRST ? P.B.GUILD_PRODUCTS : P.B.GUILD_ROLE_SUBSCRIPTIONS),
          U.push(O === p.HA.PRODUCTS_FIRST ? P.B.GUILD_ROLE_SUBSCRIPTIONS : P.B.GUILD_PRODUCTS),
          (x = U[0]))
        : L && !v
          ? (U.push(P.B.GUILD_PRODUCTS), (x = P.B.GUILD_PRODUCTS))
          : !L &&
            v &&
            (U.push(P.B.GUILD_ROLE_SUBSCRIPTIONS),
            (x = P.B.GUILD_ROLE_SUBSCRIPTIONS),
            N && U.push(P.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? x);
    let [M, b] = r.useState(n),
        B = (N && !(v && T)) || M === P.B.GUILD_PRODUCTS_PREVIEW;
    return (
        r.useEffect(() => {
            b(n);
        }, [n]),
        (0, i.jsx)(f.Provider, {
            value: {
                selectedTab: M,
                setSelectedTab: b,
                categoryTabs: U,
                isPhantomPreview: B,
                handlePreviewDismiss: function (t) {
                    (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let e = { ...(0, c.H$)(s) };
                    M === P.B.GUILD_PRODUCTS_PREVIEW
                        ? (t.stopPropagation(),
                          b(P.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (e.action_taken = R.hN.DISMISS_TAB_PREVIEW))
                        : ((0, g.bG)(m.BVt.CHANNEL(s, E.Ay.getDefaultChannel(s)?.id)),
                          (e.action_taken = R.hN.DISMISS_FULL_PREVIEW)),
                        I.default.track(m.HAw.GUILD_SHOP_PREVIEW_CLICK, e);
                },
            },
            children: e,
        })
    );
}
