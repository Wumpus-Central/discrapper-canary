n.d(t, { A: () => m, k: () => p }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(702841),
    o = n(554146),
    u = n(95561),
    d = n(826673),
    c = n(440293),
    _ = n(599941),
    E = n(960253),
    A = n(164956),
    S = n(976860),
    I = n(808728),
    h = n(71393),
    f = n(174459),
    C = n(486418),
    g = n(920814),
    R = n(284683),
    T = n(634654),
    w = n(652215);
let L = 21552 == n.j ? i.createContext(void 0) : null;
function p() {
    let e = i.useContext(L);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function m(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([h.A], () => h.A.getGuild(r)),
        p = (0, a.bG)([A.A], () => A.A.isViewingServerShop(r)),
        m = (0, C.P)(s),
        O = (0, c.w)(r),
        v = s?.features.has(w.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        P = (0, E.Oh)(s?.id),
        D = (0, _.Tq)(r)?.server_shop_tab_order,
        U = [],
        y = g.B.GUILD_SHOP_FULL_PREVIEW;
    p || (v && P)
        ? (U.push(D === R.HA.PRODUCTS_FIRST ? g.B.GUILD_PRODUCTS : g.B.GUILD_ROLE_SUBSCRIPTIONS),
          U.push(D === R.HA.PRODUCTS_FIRST ? g.B.GUILD_ROLE_SUBSCRIPTIONS : g.B.GUILD_PRODUCTS),
          (y = U[0]))
        : v && !P
          ? (U.push(g.B.GUILD_PRODUCTS), (y = g.B.GUILD_PRODUCTS))
          : !v &&
            P &&
            (U.push(g.B.GUILD_ROLE_SUBSCRIPTIONS),
            (y = g.B.GUILD_ROLE_SUBSCRIPTIONS),
            m && U.push(g.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? y);
    let [M, B] = i.useState(n),
        N = (m && !(P && O)) || M === g.B.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            B(n);
        }, [n]),
        (0, l.jsx)(L.Provider, {
            value: {
                selectedTab: M,
                setSelectedTab: B,
                categoryTabs: U,
                isPhantomPreview: N,
                handlePreviewDismiss: function (e) {
                    (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, u.H$)(r) };
                    M === g.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          B(g.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = T.hN.DISMISS_TAB_PREVIEW))
                        : ((0, S.bG)(w.BVt.CHANNEL(r, I.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = T.hN.DISMISS_FULL_PREVIEW)),
                        f.default.track(w.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
