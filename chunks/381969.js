r.d(t, { A: () => O, k: () => T }), r(321073);
var a = r(627968),
    i = r(64700),
    n = r(284009),
    l = r.n(n),
    _ = r(702841),
    s = r(554146),
    o = r(58149),
    d = r(826673),
    u = r(440293),
    S = r(599941),
    I = r(960253),
    h = r(164956),
    E = r(976860),
    R = r(808728),
    c = r(71393),
    P = r(954571),
    C = r(486418),
    U = r(920814),
    D = r(284683),
    p = r(634654),
    A = r(652215);
let L = 21552 == r.j ? i.createContext(void 0) : null;
function T() {
    let e = i.useContext(L);
    return l()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function O(e) {
    let { children: t, initialTab: r, guildId: n } = e,
        l = (0, _.bG)([c.A], () => c.A.getGuild(n)),
        T = (0, _.bG)([h.A], () => h.A.isViewingServerShop(n)),
        O = (0, C.P)(l),
        G = (0, u.w)(n),
        v = l?.features.has(A.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        B = (0, I.Oh)(l?.id),
        f = (0, S.Tq)(n)?.server_shop_tab_order,
        m = [],
        N = U.B.GUILD_SHOP_FULL_PREVIEW;
    T || (v && B)
        ? (m.push(f === D.HA.PRODUCTS_FIRST ? U.B.GUILD_PRODUCTS : U.B.GUILD_ROLE_SUBSCRIPTIONS),
          m.push(f === D.HA.PRODUCTS_FIRST ? U.B.GUILD_ROLE_SUBSCRIPTIONS : U.B.GUILD_PRODUCTS),
          (N = m[0]))
        : v && !B
          ? (m.push(U.B.GUILD_PRODUCTS), (N = U.B.GUILD_PRODUCTS))
          : !v &&
            B &&
            (m.push(U.B.GUILD_ROLE_SUBSCRIPTIONS),
            (N = U.B.GUILD_ROLE_SUBSCRIPTIONS),
            O && m.push(U.B.GUILD_PRODUCTS_PREVIEW)),
        (r = r ?? N);
    let [w, H] = i.useState(r),
        b = (O && !(B && G)) || w === U.B.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            H(r);
        }, [r]),
        (0, a.jsx)(L.Provider, {
            value: {
                selectedTab: w,
                setSelectedTab: H,
                categoryTabs: m,
                isPhantomPreview: b,
                handlePreviewDismiss: (e) => {
                    (0, d.Dr)(s.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, o.H$)(n) };
                    w === U.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          H(U.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = p.hN.DISMISS_TAB_PREVIEW))
                        : ((0, E.bG)(A.BVt.CHANNEL(n, R.Ay.getDefaultChannel(n)?.id)),
                          (t.action_taken = p.hN.DISMISS_FULL_PREVIEW)),
                        P.default.track(A.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
