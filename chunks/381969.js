i.d(e, { A: () => G, k: () => P }), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(284009),
    r = i.n(l),
    u = i(702841),
    a = i(554146),
    S = i(95561),
    o = i(826673),
    c = i(440293),
    d = i(599941),
    _ = i(960253),
    A = i(164956),
    E = i(976860),
    I = i(808728),
    p = i(71393),
    L = i(174459),
    g = i(486418),
    f = i(920814),
    h = i(284683),
    C = i(634654),
    R = i(652215);
let D = s.createContext(void 0);
function P() {
    let t = s.useContext(D);
    return r()(null != t, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), t;
}
function G(t) {
    let { children: e, initialTab: i, guildId: l } = t,
        r = (0, u.bG)([p.A], () => p.A.getGuild(l)),
        P = (0, u.bG)([A.A], () => A.A.isViewingServerShop(l)),
        G = (0, g.P)(r),
        b = (0, c.w)(l),
        T = r?.features.has(R.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        O = (0, _.Oh)(r?.id),
        U = (0, d.Tq)(l)?.server_shop_tab_order,
        m = [],
        v = f.B.GUILD_SHOP_FULL_PREVIEW;
    P || (T && O)
        ? (m.push(U === h.HA.PRODUCTS_FIRST ? f.B.GUILD_PRODUCTS : f.B.GUILD_ROLE_SUBSCRIPTIONS),
          m.push(U === h.HA.PRODUCTS_FIRST ? f.B.GUILD_ROLE_SUBSCRIPTIONS : f.B.GUILD_PRODUCTS),
          (v = m[0]))
        : T && !O
          ? (m.push(f.B.GUILD_PRODUCTS), (v = f.B.GUILD_PRODUCTS))
          : !T &&
            O &&
            (m.push(f.B.GUILD_ROLE_SUBSCRIPTIONS),
            (v = f.B.GUILD_ROLE_SUBSCRIPTIONS),
            G && m.push(f.B.GUILD_PRODUCTS_PREVIEW)),
        (i = i ?? v);
    let [B, y] = s.useState(i),
        F = (G && !(O && b)) || B === f.B.GUILD_PRODUCTS_PREVIEW;
    return (
        s.useEffect(() => {
            y(i);
        }, [i]),
        (0, n.jsx)(D.Provider, {
            value: {
                selectedTab: B,
                setSelectedTab: y,
                categoryTabs: m,
                isPhantomPreview: F,
                handlePreviewDismiss: (t) => {
                    (0, o.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let e = { ...(0, S.H$)(l) };
                    B === f.B.GUILD_PRODUCTS_PREVIEW
                        ? (t.stopPropagation(),
                          y(f.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (e.action_taken = C.hN.DISMISS_TAB_PREVIEW))
                        : ((0, E.bG)(R.BVt.CHANNEL(l, I.Ay.getDefaultChannel(l)?.id)),
                          (e.action_taken = C.hN.DISMISS_FULL_PREVIEW)),
                        L.default.track(R.HAw.GUILD_SHOP_PREVIEW_CLICK, e);
                },
            },
            children: e,
        })
    );
}
