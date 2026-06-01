i.d(e, { A: () => T, k: () => P }), i(321073);
var l = i(627968),
    n = i(64700),
    r = i(284009),
    s = i.n(r),
    u = i(702841),
    a = i(554146),
    o = i(95561),
    S = i(826673),
    d = i(440293),
    c = i(599941),
    _ = i(960253),
    h = i(164956),
    A = i(976860),
    p = i(808728),
    E = i(71393),
    I = i(174459),
    R = i(486418),
    f = i(920814),
    C = i(284683),
    L = i(634654),
    g = i(652215);
let D = 21552 == i.j ? n.createContext(void 0) : null;
function P() {
    let t = n.useContext(D);
    return s()(null != t, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), t;
}
function T(t) {
    let { children: e, initialTab: i, guildId: r } = t,
        s = (0, u.bG)([E.A], () => E.A.getGuild(r)),
        P = (0, u.bG)([h.A], () => h.A.isViewingServerShop(r)),
        T = (0, R.P)(s),
        b = (0, d.w)(r),
        U = s?.features.has(g.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        G = (0, _.Oh)(s?.id),
        O = (0, c.Tq)(r)?.server_shop_tab_order,
        v = [],
        B = f.B.GUILD_SHOP_FULL_PREVIEW;
    P || (U && G)
        ? (v.push(O === C.HA.PRODUCTS_FIRST ? f.B.GUILD_PRODUCTS : f.B.GUILD_ROLE_SUBSCRIPTIONS),
          v.push(O === C.HA.PRODUCTS_FIRST ? f.B.GUILD_ROLE_SUBSCRIPTIONS : f.B.GUILD_PRODUCTS),
          (B = v[0]))
        : U && !G
          ? (v.push(f.B.GUILD_PRODUCTS), (B = f.B.GUILD_PRODUCTS))
          : !U &&
            G &&
            (v.push(f.B.GUILD_ROLE_SUBSCRIPTIONS),
            (B = f.B.GUILD_ROLE_SUBSCRIPTIONS),
            T && v.push(f.B.GUILD_PRODUCTS_PREVIEW)),
        (i = i ?? B);
    let [m, y] = n.useState(i),
        F = (T && !(G && b)) || m === f.B.GUILD_PRODUCTS_PREVIEW;
    return (
        n.useEffect(() => {
            y(i);
        }, [i]),
        (0, l.jsx)(D.Provider, {
            value: {
                selectedTab: m,
                setSelectedTab: y,
                categoryTabs: v,
                isPhantomPreview: F,
                handlePreviewDismiss: (t) => {
                    (0, S.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let e = { ...(0, o.H$)(r) };
                    m === f.B.GUILD_PRODUCTS_PREVIEW
                        ? (t.stopPropagation(),
                          y(f.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (e.action_taken = L.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(g.BVt.CHANNEL(r, p.Ay.getDefaultChannel(r)?.id)),
                          (e.action_taken = L.hN.DISMISS_FULL_PREVIEW)),
                        I.default.track(g.HAw.GUILD_SHOP_PREVIEW_CLICK, e);
                },
            },
            children: e,
        })
    );
}
