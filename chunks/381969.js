i.d(e, { A: () => T, k: () => P }), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(284009),
    s = i.n(l),
    a = i(702841),
    u = i(554146),
    o = i(95561),
    d = i(826673),
    c = i(440293),
    S = i(599941),
    _ = i(960253),
    A = i(164956),
    E = i(976860),
    p = i(808728),
    f = i(71393),
    h = i(174459),
    L = i(486418),
    I = i(920814),
    g = i(284683),
    C = i(634654),
    D = i(652215);
let R = r.createContext(void 0);
function P() {
    let t = r.useContext(R);
    return s()(null != t, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), t;
}
function T(t) {
    let { children: e, initialTab: i, guildId: l } = t,
        s = (0, a.bG)([f.A], () => f.A.getGuild(l)),
        P = (0, a.bG)([A.A], () => A.A.isViewingServerShop(l)),
        T = (0, L.P)(s),
        G = (0, c.w)(l),
        U = s?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        b = (0, _.Oh)(s?.id),
        O = (0, S.Tq)(l)?.server_shop_tab_order,
        m = [],
        y = I.B.GUILD_SHOP_FULL_PREVIEW;
    P || (U && b)
        ? (m.push(O === g.HA.PRODUCTS_FIRST ? I.B.GUILD_PRODUCTS : I.B.GUILD_ROLE_SUBSCRIPTIONS),
          m.push(O === g.HA.PRODUCTS_FIRST ? I.B.GUILD_ROLE_SUBSCRIPTIONS : I.B.GUILD_PRODUCTS),
          (y = m[0]))
        : U && !b
          ? (m.push(I.B.GUILD_PRODUCTS), (y = I.B.GUILD_PRODUCTS))
          : !U &&
            b &&
            (m.push(I.B.GUILD_ROLE_SUBSCRIPTIONS),
            (y = I.B.GUILD_ROLE_SUBSCRIPTIONS),
            T && m.push(I.B.GUILD_PRODUCTS_PREVIEW)),
        (i = i ?? y);
    let [v, B] = r.useState(i),
        F = (T && !(b && G)) || v === I.B.GUILD_PRODUCTS_PREVIEW;
    return (
        r.useEffect(() => {
            B(i);
        }, [i]),
        (0, n.jsx)(R.Provider, {
            value: {
                selectedTab: v,
                setSelectedTab: B,
                categoryTabs: m,
                isPhantomPreview: F,
                handlePreviewDismiss: (t) => {
                    (0, d.Dr)(u.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let e = { ...(0, o.H$)(l) };
                    v === I.B.GUILD_PRODUCTS_PREVIEW
                        ? (t.stopPropagation(),
                          B(I.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (e.action_taken = C.hN.DISMISS_TAB_PREVIEW))
                        : ((0, E.bG)(D.BVt.CHANNEL(l, p.Ay.getDefaultChannel(l)?.id)),
                          (e.action_taken = C.hN.DISMISS_FULL_PREVIEW)),
                        h.default.track(D.HAw.GUILD_SHOP_PREVIEW_CLICK, e);
                },
            },
            children: e,
        })
    );
}
