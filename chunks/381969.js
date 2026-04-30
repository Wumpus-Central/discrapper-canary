i.d(e, { A: () => b, k: () => P }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    u = i(702841),
    a = i(554146),
    S = i(58149),
    o = i(826673),
    c = i(440293),
    d = i(599941),
    _ = i(960253),
    p = i(164956),
    I = i(976860),
    L = i(808728),
    A = i(71393),
    E = i(954571),
    R = i(486418),
    g = i(920814),
    h = i(284683),
    f = i(634654),
    C = i(652215);
let D = l.createContext(void 0);
function P() {
    let t = l.useContext(D);
    return r()(null != t, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), t;
}
function b(t) {
    let { children: e, initialTab: i, guildId: s } = t,
        r = (0, u.bG)([A.A], () => A.A.getGuild(s)),
        P = (0, u.bG)([p.A], () => p.A.isViewingServerShop(s)),
        b = (0, R.P)(r),
        G = (0, c.w)(s),
        T = r?.features.has(C.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        U = (0, _.Oh)(r?.id),
        O = (0, d.Tq)(s)?.server_shop_tab_order,
        v = [],
        y = g.B.GUILD_SHOP_FULL_PREVIEW;
    P || (T && U)
        ? (v.push(O === h.HA.PRODUCTS_FIRST ? g.B.GUILD_PRODUCTS : g.B.GUILD_ROLE_SUBSCRIPTIONS),
          v.push(O === h.HA.PRODUCTS_FIRST ? g.B.GUILD_ROLE_SUBSCRIPTIONS : g.B.GUILD_PRODUCTS),
          (y = v[0]))
        : T && !U
          ? (v.push(g.B.GUILD_PRODUCTS), (y = g.B.GUILD_PRODUCTS))
          : !T &&
            U &&
            (v.push(g.B.GUILD_ROLE_SUBSCRIPTIONS),
            (y = g.B.GUILD_ROLE_SUBSCRIPTIONS),
            b && v.push(g.B.GUILD_PRODUCTS_PREVIEW)),
        (i = i ?? y);
    let [B, F] = l.useState(i),
        N = (b && !(U && G)) || B === g.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            F(i);
        }, [i]),
        (0, n.jsx)(D.Provider, {
            value: {
                selectedTab: B,
                setSelectedTab: F,
                categoryTabs: v,
                isPhantomPreview: N,
                handlePreviewDismiss: (t) => {
                    (0, o.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let e = { ...(0, S.H$)(s) };
                    B === g.B.GUILD_PRODUCTS_PREVIEW
                        ? (t.stopPropagation(),
                          F(g.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (e.action_taken = f.hN.DISMISS_TAB_PREVIEW))
                        : ((0, I.bG)(C.BVt.CHANNEL(s, L.Ay.getDefaultChannel(s)?.id)),
                          (e.action_taken = f.hN.DISMISS_FULL_PREVIEW)),
                        E.default.track(C.HAw.GUILD_SHOP_PREVIEW_CLICK, e);
                },
            },
            children: e,
        })
    );
}
