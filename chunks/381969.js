r.d(t, { A: () => O, k: () => p }), r(321073);
var i = r(627968),
    n = r(64700),
    a = r(284009),
    l = r.n(a),
    _ = r(702841),
    S = r(554146),
    s = r(95561),
    u = r(826673),
    o = r(440293),
    d = r(599941),
    I = r(960253),
    R = r(164956),
    E = r(976860),
    C = r(808728),
    h = r(71393),
    P = r(174459),
    A = r(486418),
    c = r(920814),
    U = r(284683),
    T = r(634654),
    D = r(652215);
let L = 21552 == r.j ? n.createContext(void 0) : null;
function p() {
    let e = n.useContext(L);
    return l()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function O(e) {
    let { children: t, initialTab: r, guildId: a } = e,
        l = (0, _.bG)([h.A], () => h.A.getGuild(a)),
        p = (0, _.bG)([R.A], () => R.A.isViewingServerShop(a)),
        O = (0, A.P)(l),
        B = (0, o.w)(a),
        v = l?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        G = (0, I.Oh)(l?.id),
        f = (0, d.Tq)(a)?.server_shop_tab_order,
        N = [],
        m = c.B.GUILD_SHOP_FULL_PREVIEW;
    p || (v && G)
        ? (N.push(f === U.HA.PRODUCTS_FIRST ? c.B.GUILD_PRODUCTS : c.B.GUILD_ROLE_SUBSCRIPTIONS),
          N.push(f === U.HA.PRODUCTS_FIRST ? c.B.GUILD_ROLE_SUBSCRIPTIONS : c.B.GUILD_PRODUCTS),
          (m = N[0]))
        : v && !G
          ? (N.push(c.B.GUILD_PRODUCTS), (m = c.B.GUILD_PRODUCTS))
          : !v &&
            G &&
            (N.push(c.B.GUILD_ROLE_SUBSCRIPTIONS),
            (m = c.B.GUILD_ROLE_SUBSCRIPTIONS),
            O && N.push(c.B.GUILD_PRODUCTS_PREVIEW)),
        (r = r ?? m);
    let [W, g] = n.useState(r),
        w = (O && !(G && B)) || W === c.B.GUILD_PRODUCTS_PREVIEW;
    return (
        n.useEffect(() => {
            g(r);
        }, [r]),
        (0, i.jsx)(L.Provider, {
            value: {
                selectedTab: W,
                setSelectedTab: g,
                categoryTabs: N,
                isPhantomPreview: w,
                handlePreviewDismiss: (e) => {
                    (0, u.Dr)(S.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, s.H$)(a) };
                    W === c.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          g(c.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = T.hN.DISMISS_TAB_PREVIEW))
                        : ((0, E.bG)(D.BVt.CHANNEL(a, C.Ay.getDefaultChannel(a)?.id)),
                          (t.action_taken = T.hN.DISMISS_FULL_PREVIEW)),
                        P.default.track(D.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
