n.d(t, { A: () => T, k: () => p }), n(321073);
var r = n(627968),
    s = n(64700),
    i = n(284009),
    a = n.n(i),
    _ = n(702841),
    u = n(554146),
    l = n(95561),
    S = n(826673),
    o = n(440293),
    d = n(599941),
    I = n(960253),
    E = n(164956),
    c = n(976860),
    R = n(808728),
    P = n(71393),
    C = n(174459),
    A = n(486418),
    D = n(920814),
    U = n(284683),
    L = n(634654),
    h = n(652215);
let O = s.createContext(void 0);
function p() {
    let e = s.useContext(O);
    return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function T(e) {
    let { children: t, initialTab: n, guildId: i } = e,
        a = (0, _.bG)([P.A], () => P.A.getGuild(i)),
        p = (0, _.bG)([E.A], () => E.A.isViewingServerShop(i)),
        T = (0, A.P)(a),
        B = (0, o.w)(i),
        f = a?.features.has(h.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        G = (0, I.Oh)(a?.id),
        V = (0, d.Tq)(i)?.server_shop_tab_order,
        g = [],
        m = D.B.GUILD_SHOP_FULL_PREVIEW;
    p || (f && G)
        ? (g.push(V === U.HA.PRODUCTS_FIRST ? D.B.GUILD_PRODUCTS : D.B.GUILD_ROLE_SUBSCRIPTIONS),
          g.push(V === U.HA.PRODUCTS_FIRST ? D.B.GUILD_ROLE_SUBSCRIPTIONS : D.B.GUILD_PRODUCTS),
          (m = g[0]))
        : f && !G
          ? (g.push(D.B.GUILD_PRODUCTS), (m = D.B.GUILD_PRODUCTS))
          : !f &&
            G &&
            (g.push(D.B.GUILD_ROLE_SUBSCRIPTIONS),
            (m = D.B.GUILD_ROLE_SUBSCRIPTIONS),
            T && g.push(D.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? m);
    let [v, N] = s.useState(n),
        k = (T && !(G && B)) || v === D.B.GUILD_PRODUCTS_PREVIEW;
    return (
        s.useEffect(() => {
            N(n);
        }, [n]),
        (0, r.jsx)(O.Provider, {
            value: {
                selectedTab: v,
                setSelectedTab: N,
                categoryTabs: g,
                isPhantomPreview: k,
                handlePreviewDismiss: (e) => {
                    (0, S.Dr)(u.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, l.H$)(i) };
                    v === D.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          N(D.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = L.hN.DISMISS_TAB_PREVIEW))
                        : ((0, c.bG)(h.BVt.CHANNEL(i, R.Ay.getDefaultChannel(i)?.id)),
                          (t.action_taken = L.hN.DISMISS_FULL_PREVIEW)),
                        C.default.track(h.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
