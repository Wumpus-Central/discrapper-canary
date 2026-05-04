i.d(e, { A: () => G, k: () => P }), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(284009),
    r = i.n(l),
    u = i(702841),
    a = i(554146),
    o = i(95561),
    d = i(826673),
    S = i(440293),
    c = i(599941),
    _ = i(960253),
    A = i(164956),
    E = i(976860),
    p = i(808728),
    L = i(71393),
    I = i(174459),
    f = i(486418),
    h = i(920814),
    C = i(284683),
    g = i(634654),
    D = i(652215);
let R = s.createContext(void 0);
function P() {
    let t = s.useContext(R);
    return r()(null != t, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), t;
}
function G(t) {
    let { children: e, initialTab: i, guildId: l } = t,
        r = (0, u.bG)([L.A], () => L.A.getGuild(l)),
        P = (0, u.bG)([A.A], () => A.A.isViewingServerShop(l)),
        G = (0, f.P)(r),
        T = (0, S.w)(l),
        O = r?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        b = (0, _.Oh)(r?.id),
        U = (0, c.Tq)(l)?.server_shop_tab_order,
        y = [],
        v = h.B.GUILD_SHOP_FULL_PREVIEW;
    P || (O && b)
        ? (y.push(U === C.HA.PRODUCTS_FIRST ? h.B.GUILD_PRODUCTS : h.B.GUILD_ROLE_SUBSCRIPTIONS),
          y.push(U === C.HA.PRODUCTS_FIRST ? h.B.GUILD_ROLE_SUBSCRIPTIONS : h.B.GUILD_PRODUCTS),
          (v = y[0]))
        : O && !b
          ? (y.push(h.B.GUILD_PRODUCTS), (v = h.B.GUILD_PRODUCTS))
          : !O &&
            b &&
            (y.push(h.B.GUILD_ROLE_SUBSCRIPTIONS),
            (v = h.B.GUILD_ROLE_SUBSCRIPTIONS),
            G && y.push(h.B.GUILD_PRODUCTS_PREVIEW)),
        (i = i ?? v);
    let [B, m] = s.useState(i),
        F = (G && !(b && T)) || B === h.B.GUILD_PRODUCTS_PREVIEW;
    return (
        s.useEffect(() => {
            m(i);
        }, [i]),
        (0, n.jsx)(R.Provider, {
            value: {
                selectedTab: B,
                setSelectedTab: m,
                categoryTabs: y,
                isPhantomPreview: F,
                handlePreviewDismiss: (t) => {
                    (0, d.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let e = { ...(0, o.H$)(l) };
                    B === h.B.GUILD_PRODUCTS_PREVIEW
                        ? (t.stopPropagation(),
                          m(h.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (e.action_taken = g.hN.DISMISS_TAB_PREVIEW))
                        : ((0, E.bG)(D.BVt.CHANNEL(l, p.Ay.getDefaultChannel(l)?.id)),
                          (e.action_taken = g.hN.DISMISS_FULL_PREVIEW)),
                        I.default.track(D.HAw.GUILD_SHOP_PREVIEW_CLICK, e);
                },
            },
            children: e,
        })
    );
}
