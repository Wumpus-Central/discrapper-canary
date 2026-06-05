i.d(e, { A: () => G, k: () => P }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(284009),
    u = i.n(s),
    r = i(702841),
    a = i(554146),
    S = i(95561),
    o = i(826673),
    _ = i(440293),
    c = i(599941),
    d = i(960253),
    A = i(164956),
    E = i(976860),
    I = i(808728),
    p = i(71393),
    L = i(174459),
    g = i(486418),
    R = i(920814),
    f = i(284683),
    C = i(634654),
    h = i(652215);
let D = l.createContext(void 0);
function P() {
    let t = l.useContext(D);
    return u()(null != t, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), t;
}
function G(t) {
    let { children: e, initialTab: i, guildId: s } = t,
        u = (0, r.bG)([p.A], () => p.A.getGuild(s)),
        P = (0, r.bG)([A.A], () => A.A.isViewingServerShop(s)),
        G = (0, g.P)(u),
        b = (0, _.w)(s),
        T = u?.features.has(h.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        U = (0, d.Oh)(u?.id),
        O = (0, c.Tq)(s)?.server_shop_tab_order,
        B = [],
        v = R.B.GUILD_SHOP_FULL_PREVIEW;
    P || (T && U)
        ? (B.push(O === f.HA.PRODUCTS_FIRST ? R.B.GUILD_PRODUCTS : R.B.GUILD_ROLE_SUBSCRIPTIONS),
          B.push(O === f.HA.PRODUCTS_FIRST ? R.B.GUILD_ROLE_SUBSCRIPTIONS : R.B.GUILD_PRODUCTS),
          (v = B[0]))
        : T && !U
          ? (B.push(R.B.GUILD_PRODUCTS), (v = R.B.GUILD_PRODUCTS))
          : !T &&
            U &&
            (B.push(R.B.GUILD_ROLE_SUBSCRIPTIONS),
            (v = R.B.GUILD_ROLE_SUBSCRIPTIONS),
            G && B.push(R.B.GUILD_PRODUCTS_PREVIEW)),
        (i = i ?? v);
    let [F, y] = l.useState(i),
        H = (G && !(U && b)) || F === R.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            y(i);
        }, [i]),
        (0, n.jsx)(D.Provider, {
            value: {
                selectedTab: F,
                setSelectedTab: y,
                categoryTabs: B,
                isPhantomPreview: H,
                handlePreviewDismiss: (t) => {
                    (0, o.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let e = { ...(0, S.H$)(s) };
                    F === R.B.GUILD_PRODUCTS_PREVIEW
                        ? (t.stopPropagation(),
                          y(R.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (e.action_taken = C.hN.DISMISS_TAB_PREVIEW))
                        : ((0, E.bG)(h.BVt.CHANNEL(s, I.Ay.getDefaultChannel(s)?.id)),
                          (e.action_taken = C.hN.DISMISS_FULL_PREVIEW)),
                        L.default.track(h.HAw.GUILD_SHOP_PREVIEW_CLICK, e);
                },
            },
            children: e,
        })
    );
}
