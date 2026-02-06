n.d(t, { A: () => m, k: () => U }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(417597),
    o = n(554146),
    E = n(58149),
    _ = n(826673),
    c = n(599941),
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
let p = 21552 == n.j ? l.createContext(void 0) : null;
function U() {
    let e = l.useContext(p);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function m(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([I.A], () => I.A.getGuild(r)),
        U = (0, a.bG)([u.A], () => u.A.isViewingServerShop(r)),
        m = (0, S.P)(s, "guild_shop_page"),
        M = (0, R.YZ)(r, "guild_shop_page"),
        h = s?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        g = (0, d.Oh)(s?.id),
        y = (0, c.Tq)(r)?.server_shop_tab_order,
        f = [],
        L = O.B.GUILD_SHOP_FULL_PREVIEW;
    U || (h && g)
        ? (f.push(y === C.HA.PRODUCTS_FIRST ? O.B.GUILD_PRODUCTS : O.B.GUILD_ROLE_SUBSCRIPTIONS),
          f.push(y === C.HA.PRODUCTS_FIRST ? O.B.GUILD_ROLE_SUBSCRIPTIONS : O.B.GUILD_PRODUCTS),
          (L = f[0]))
        : h && !g
          ? (f.push(O.B.GUILD_PRODUCTS), (L = O.B.GUILD_PRODUCTS))
          : !h &&
            g &&
            (f.push(O.B.GUILD_ROLE_SUBSCRIPTIONS),
            (L = O.B.GUILD_ROLE_SUBSCRIPTIONS),
            m && f.push(O.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? L);
    let [k, G] = l.useState(n),
        x = (m && !(g && M)) || k === O.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            G(n);
        }, [n]),
        (0, i.jsx)(p.Provider, {
            value: {
                selectedTab: k,
                setSelectedTab: G,
                categoryTabs: f,
                isPhantomPreview: x,
                handlePreviewDismiss: (e) => {
                    (0, _.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, E.H$)(r) };
                    k === O.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          G(O.B.GUILD_ROLE_SUBSCRIPTIONS),
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
