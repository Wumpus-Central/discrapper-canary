l.d(t, { A: () => L, k: () => C }), l(321073);
var i = l(627968),
    n = l(64700),
    r = l(284009),
    s = l.n(r),
    u = l(417597),
    a = l(554146),
    o = l(58149),
    d = l(826673),
    c = l(599941),
    S = l(960253),
    _ = l(164956),
    A = l(976860),
    p = l(808728),
    I = l(71393),
    h = l(954571),
    E = l(491026),
    R = l(486418),
    T = l(920814),
    g = l(284683),
    f = l(634654),
    m = l(652215);
let D = 21552 == l.j ? n.createContext(void 0) : null;
function C() {
    let e = n.useContext(D);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function L(e) {
    let { children: t, initialTab: l, guildId: r } = e,
        s = (0, u.bG)([I.A], () => I.A.getGuild(r)),
        C = (0, u.bG)([_.A], () => _.A.isViewingServerShop(r)),
        L = (0, R.P)(s, "guild_shop_page"),
        G = (0, E.YZ)(r, "guild_shop_page"),
        v = s?.features.has(m.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        N = (0, S.Oh)(s?.id),
        P = (0, c.Tq)(r)?.server_shop_tab_order,
        U = [],
        y = T.B.GUILD_SHOP_FULL_PREVIEW;
    C || (v && N)
        ? (U.push(P === g.HA.PRODUCTS_FIRST ? T.B.GUILD_PRODUCTS : T.B.GUILD_ROLE_SUBSCRIPTIONS),
          U.push(P === g.HA.PRODUCTS_FIRST ? T.B.GUILD_ROLE_SUBSCRIPTIONS : T.B.GUILD_PRODUCTS),
          (y = U[0]))
        : v && !N
          ? (U.push(T.B.GUILD_PRODUCTS), (y = T.B.GUILD_PRODUCTS))
          : !v &&
            N &&
            (U.push(T.B.GUILD_ROLE_SUBSCRIPTIONS),
            (y = T.B.GUILD_ROLE_SUBSCRIPTIONS),
            L && U.push(T.B.GUILD_PRODUCTS_PREVIEW)),
        (l = l ?? y);
    let [O, b] = n.useState(l),
        x = (L && !(N && G)) || O === T.B.GUILD_PRODUCTS_PREVIEW;
    return (
        n.useEffect(() => {
            b(l);
        }, [l]),
        (0, i.jsx)(D.Provider, {
            value: {
                selectedTab: O,
                setSelectedTab: b,
                categoryTabs: U,
                isPhantomPreview: x,
                handlePreviewDismiss: (e) => {
                    (0, d.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, o.H$)(r) };
                    O === T.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          b(T.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = f.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(m.BVt.CHANNEL(r, p.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = f.hN.DISMISS_FULL_PREVIEW)),
                        h.default.track(m.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
