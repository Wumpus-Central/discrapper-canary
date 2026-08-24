n.d(t, { A: () => L, k: () => R }), n(321073);
var i = n(477900),
    l = n(582128),
    r = n(284009),
    s = n.n(r),
    a = n(702841),
    o = n(554146),
    c = n(95561),
    d = n(826673),
    u = n(440293),
    E = n(599941),
    g = n(960253),
    h = n(164956),
    _ = n(976860),
    A = n(808728),
    S = n(71393),
    f = n(174459),
    I = n(486418),
    C = n(920814),
    p = n(284683),
    m = n(634654),
    v = n(652215);
let T = 221552 == n.j ? l.createContext(void 0) : null;
function R() {
    let e = l.useContext(T);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function L(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([S.A], () => S.A.getGuild(r)),
        R = (0, a.bG)([h.A], () => h.A.isViewingServerShop(r)),
        L = (0, I.P)(s),
        P = (0, u.w)(r),
        O = s?.features.has(v.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        N = (0, g.Oh)(s?.id),
        w = (0, E.Tq)(r)?.server_shop_tab_order,
        D = [],
        x = C.B.GUILD_SHOP_FULL_PREVIEW;
    R || (O && N)
        ? (D.push(w === p.HA.PRODUCTS_FIRST ? C.B.GUILD_PRODUCTS : C.B.GUILD_ROLE_SUBSCRIPTIONS),
          D.push(w === p.HA.PRODUCTS_FIRST ? C.B.GUILD_ROLE_SUBSCRIPTIONS : C.B.GUILD_PRODUCTS),
          (x = D[0]))
        : O && !N
          ? (D.push(C.B.GUILD_PRODUCTS), (x = C.B.GUILD_PRODUCTS))
          : !O &&
            N &&
            (D.push(C.B.GUILD_ROLE_SUBSCRIPTIONS),
            (x = C.B.GUILD_ROLE_SUBSCRIPTIONS),
            L && D.push(C.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? x);
    let [y, M] = l.useState(n),
        b = (L && !(N && P)) || y === C.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            M(n);
        }, [n]),
        (0, i.jsx)(T.Provider, {
            value: {
                selectedTab: y,
                setSelectedTab: M,
                categoryTabs: D,
                isPhantomPreview: b,
                handlePreviewDismiss: function (e) {
                    (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.H$)(r) };
                    y === C.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          M(C.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = m.hN.DISMISS_TAB_PREVIEW))
                        : ((0, _.bG)(v.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = m.hN.DISMISS_FULL_PREVIEW)),
                        f.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
