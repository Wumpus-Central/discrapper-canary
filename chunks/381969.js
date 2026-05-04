i.d(t, { A: () => T, k: () => P }), i(321073);
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
    p = i(976860),
    A = i(808728),
    E = i(71393),
    I = i(174459),
    L = i(486418),
    R = i(920814),
    f = i(284683),
    g = i(634654),
    C = i(652215);
let D = 21552 == i.j ? n.createContext(void 0) : null;
function P() {
    let e = n.useContext(D);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function T(e) {
    let { children: t, initialTab: i, guildId: r } = e,
        s = (0, u.bG)([E.A], () => E.A.getGuild(r)),
        P = (0, u.bG)([h.A], () => h.A.isViewingServerShop(r)),
        T = (0, L.P)(s),
        b = (0, d.w)(r),
        G = s?.features.has(C.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        U = (0, _.Oh)(s?.id),
        O = (0, c.Tq)(r)?.server_shop_tab_order,
        v = [],
        m = R.B.GUILD_SHOP_FULL_PREVIEW;
    P || (G && U)
        ? (v.push(O === f.HA.PRODUCTS_FIRST ? R.B.GUILD_PRODUCTS : R.B.GUILD_ROLE_SUBSCRIPTIONS),
          v.push(O === f.HA.PRODUCTS_FIRST ? R.B.GUILD_ROLE_SUBSCRIPTIONS : R.B.GUILD_PRODUCTS),
          (m = v[0]))
        : G && !U
          ? (v.push(R.B.GUILD_PRODUCTS), (m = R.B.GUILD_PRODUCTS))
          : !G &&
            U &&
            (v.push(R.B.GUILD_ROLE_SUBSCRIPTIONS),
            (m = R.B.GUILD_ROLE_SUBSCRIPTIONS),
            T && v.push(R.B.GUILD_PRODUCTS_PREVIEW)),
        (i = i ?? m);
    let [N, y] = n.useState(i),
        B = (T && !(U && b)) || N === R.B.GUILD_PRODUCTS_PREVIEW;
    return (
        n.useEffect(() => {
            y(i);
        }, [i]),
        (0, l.jsx)(D.Provider, {
            value: {
                selectedTab: N,
                setSelectedTab: y,
                categoryTabs: v,
                isPhantomPreview: B,
                handlePreviewDismiss: (e) => {
                    (0, S.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, o.H$)(r) };
                    N === R.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          y(R.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = g.hN.DISMISS_TAB_PREVIEW))
                        : ((0, p.bG)(C.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = g.hN.DISMISS_FULL_PREVIEW)),
                        I.default.track(C.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
