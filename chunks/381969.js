n.d(t, { A: () => y, k: () => O }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(417597),
    o = n(554146),
    c = n(58149),
    u = n(826673),
    d = n(440293),
    _ = n(599941),
    E = n(960253),
    T = n(164956),
    A = n(976860),
    I = n(808728),
    N = n(71393),
    p = n(954571),
    m = n(486418),
    R = n(920814),
    h = n(284683),
    S = n(634654),
    g = n(652215);
let C = l.createContext(void 0);
function O() {
    let e = l.useContext(C);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function y(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([N.A], () => N.A.getGuild(r)),
        O = (0, a.bG)([T.A], () => T.A.isViewingServerShop(r)),
        y = (0, m.P)(s),
        x = (0, d.w)(r),
        f = s?.features.has(g.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        P = (0, E.Oh)(s?.id),
        D = (0, _.Tq)(r)?.server_shop_tab_order,
        U = [],
        M = R.B.GUILD_SHOP_FULL_PREVIEW;
    O || (f && P)
        ? (U.push(D === h.HA.PRODUCTS_FIRST ? R.B.GUILD_PRODUCTS : R.B.GUILD_ROLE_SUBSCRIPTIONS),
          U.push(D === h.HA.PRODUCTS_FIRST ? R.B.GUILD_ROLE_SUBSCRIPTIONS : R.B.GUILD_PRODUCTS),
          (M = U[0]))
        : f && !P
          ? (U.push(R.B.GUILD_PRODUCTS), (M = R.B.GUILD_PRODUCTS))
          : !f &&
            P &&
            (U.push(R.B.GUILD_ROLE_SUBSCRIPTIONS),
            (M = R.B.GUILD_ROLE_SUBSCRIPTIONS),
            y && U.push(R.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? M);
    let [L, j] = l.useState(n),
        b = (y && !(P && x)) || L === R.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            j(n);
        }, [n]),
        (0, i.jsx)(C.Provider, {
            value: {
                selectedTab: L,
                setSelectedTab: j,
                categoryTabs: U,
                isPhantomPreview: b,
                handlePreviewDismiss: (e) => {
                    (0, u.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.H$)(r) };
                    L === R.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          j(R.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = S.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(g.BVt.CHANNEL(r, I.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = S.hN.DISMISS_FULL_PREVIEW)),
                        p.default.track(g.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
