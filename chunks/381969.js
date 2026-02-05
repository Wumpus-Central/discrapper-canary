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
    u = n(164956),
    A = n(976860),
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
        m = (0, a.bG)([u.A], () => u.A.isViewingServerShop(r)),
        U = (0, S.P)(s, "guild_shop_page"),
        h = (0, R.YZ)(r, "guild_shop_page"),
        M = s?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        g = (0, d.Oh)(s?.id),
        y = (0, _.Tq)(r)?.server_shop_tab_order,
        f = [],
        L = O.B.GUILD_SHOP_FULL_PREVIEW;
    m || (M && g)
        ? (f.push(y === C.HA.PRODUCTS_FIRST ? O.B.GUILD_PRODUCTS : O.B.GUILD_ROLE_SUBSCRIPTIONS),
          f.push(y === C.HA.PRODUCTS_FIRST ? O.B.GUILD_ROLE_SUBSCRIPTIONS : O.B.GUILD_PRODUCTS),
          (L = f[0]))
        : M && !g
          ? (f.push(O.B.GUILD_PRODUCTS), (L = O.B.GUILD_PRODUCTS))
          : !M &&
            g &&
            (f.push(O.B.GUILD_ROLE_SUBSCRIPTIONS),
            (L = O.B.GUILD_ROLE_SUBSCRIPTIONS),
            U && f.push(O.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? L);
    let [k, x] = l.useState(n),
        G = (U && !(g && h)) || k === O.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            x(n);
        }, [n]),
        (0, i.jsx)(p.Provider, {
            value: {
                selectedTab: k,
                setSelectedTab: x,
                categoryTabs: f,
                isPhantomPreview: G,
                handlePreviewDismiss: (e) => {
                    (0, c.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, E.H$)(r) };
                    k === O.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          x(O.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = P.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(D.BVt.CHANNEL(r, T.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = P.hN.DISMISS_FULL_PREVIEW)),
                        N.default.track(D.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
