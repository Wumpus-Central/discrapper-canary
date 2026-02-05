n.d(t, { A: () => U, k: () => m }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(417597),
    o = n(554146),
    E = n(58149),
    c = n(826673),
    _ = n(599941),
    d = n(960253),
    A = n(164956),
    u = n(976860),
    T = n(808728),
    I = n(71393),
    N = n(954571),
    R = n(491026),
    S = n(486418),
    O = n(920814),
    C = n(284683),
    P = n(634654),
    D = n(652215);
let p = l.createContext(void 0);
function m() {
    let e = l.useContext(p);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function U(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([I.A], () => I.A.getGuild(r)),
        m = (0, a.bG)([A.A], () => A.A.isViewingServerShop(r)),
        U = (0, S.P)(s, "guild_shop_page"),
        M = (0, R.YZ)(r, "guild_shop_page"),
        h = s?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        g = (0, d.Oh)(s?.id),
        y = (0, _.Tq)(r)?.server_shop_tab_order,
        L = [],
        k = O.B.GUILD_SHOP_FULL_PREVIEW;
    m || (h && g)
        ? (L.push(y === C.HA.PRODUCTS_FIRST ? O.B.GUILD_PRODUCTS : O.B.GUILD_ROLE_SUBSCRIPTIONS),
          L.push(y === C.HA.PRODUCTS_FIRST ? O.B.GUILD_ROLE_SUBSCRIPTIONS : O.B.GUILD_PRODUCTS),
          (k = L[0]))
        : h && !g
          ? (L.push(O.B.GUILD_PRODUCTS), (k = O.B.GUILD_PRODUCTS))
          : !h &&
            g &&
            (L.push(O.B.GUILD_ROLE_SUBSCRIPTIONS),
            (k = O.B.GUILD_ROLE_SUBSCRIPTIONS),
            U && L.push(O.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? k);
    let [f, x] = l.useState(n),
        G = (U && !(g && M)) || f === O.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            x(n);
        }, [n]),
        (0, i.jsx)(p.Provider, {
            value: {
                selectedTab: f,
                setSelectedTab: x,
                categoryTabs: L,
                isPhantomPreview: G,
                handlePreviewDismiss: (e) => {
                    (0, c.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, E.H$)(r) };
                    f === O.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          x(O.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = P.hN.DISMISS_TAB_PREVIEW))
                        : ((0, u.bG)(D.BVt.CHANNEL(r, T.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = P.hN.DISMISS_FULL_PREVIEW)),
                        N.default.track(D.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
