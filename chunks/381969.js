n.d(t, { A: () => g, k: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(417597),
    o = n(554146),
    c = n(58149),
    _ = n(826673),
    E = n(599941),
    d = n(960253),
    u = n(164956),
    A = n(976860),
    T = n(808728),
    I = n(71393),
    N = n(954571),
    R = n(491026),
    S = n(486418),
    C = n(920814),
    O = n(284683),
    p = n(634654),
    m = n(652215);
let P = l.createContext(void 0);
function D() {
    let e = l.useContext(P);
    return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function g(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        a = (0, s.bG)([I.A], () => I.A.getGuild(r)),
        D = (0, s.bG)([u.A], () => u.A.isViewingServerShop(r)),
        g = (0, S.P)(a, "guild_shop_page"),
        U = (0, R.YZ)(r, "guild_shop_page"),
        M = a?.features.has(m.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        h = (0, d.Oh)(a?.id),
        y = (0, E.Tq)(r)?.server_shop_tab_order,
        f = [],
        L = C.B.GUILD_SHOP_FULL_PREVIEW;
    D || (M && h)
        ? (f.push(y === O.HA.PRODUCTS_FIRST ? C.B.GUILD_PRODUCTS : C.B.GUILD_ROLE_SUBSCRIPTIONS),
          f.push(y === O.HA.PRODUCTS_FIRST ? C.B.GUILD_ROLE_SUBSCRIPTIONS : C.B.GUILD_PRODUCTS),
          (L = f[0]))
        : M && !h
          ? (f.push(C.B.GUILD_PRODUCTS), (L = C.B.GUILD_PRODUCTS))
          : !M &&
            h &&
            (f.push(C.B.GUILD_ROLE_SUBSCRIPTIONS),
            (L = C.B.GUILD_ROLE_SUBSCRIPTIONS),
            g && f.push(C.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? L);
    let [k, x] = l.useState(n),
        G = (g && !(h && U)) || k === C.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            x(n);
        }, [n]),
        (0, i.jsx)(P.Provider, {
            value: {
                selectedTab: k,
                setSelectedTab: x,
                categoryTabs: f,
                isPhantomPreview: G,
                handlePreviewDismiss: (e) => {
                    (0, _.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.H$)(r) };
                    k === C.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          x(C.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = p.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(m.BVt.CHANNEL(r, T.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = p.hN.DISMISS_FULL_PREVIEW)),
                        N.default.track(m.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
