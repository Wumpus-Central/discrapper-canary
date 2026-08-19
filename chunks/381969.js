n.d(t, { A: () => L, k: () => R }), n(321073);
var i = n(477900),
    l = n(582128),
    r = n(284009),
    s = n.n(r),
    a = n(702841),
    o = n(554146),
    d = n(95561),
    u = n(826673),
    c = n(440293),
    E = n(599941),
    g = n(960253),
    h = n(164956),
    A = n(976860),
    _ = n(808728),
    S = n(71393),
    f = n(174459),
    I = n(486418),
    C = n(920814),
    m = n(284683),
    p = n(634654),
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
        P = (0, c.w)(r),
        O = s?.features.has(v.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        N = (0, g.Oh)(s?.id),
        w = (0, E.Tq)(r)?.server_shop_tab_order,
        y = [],
        D = C.B.GUILD_SHOP_FULL_PREVIEW;
    R || (O && N)
        ? (y.push(w === m.HA.PRODUCTS_FIRST ? C.B.GUILD_PRODUCTS : C.B.GUILD_ROLE_SUBSCRIPTIONS),
          y.push(w === m.HA.PRODUCTS_FIRST ? C.B.GUILD_ROLE_SUBSCRIPTIONS : C.B.GUILD_PRODUCTS),
          (D = y[0]))
        : O && !N
          ? (y.push(C.B.GUILD_PRODUCTS), (D = C.B.GUILD_PRODUCTS))
          : !O &&
            N &&
            (y.push(C.B.GUILD_ROLE_SUBSCRIPTIONS),
            (D = C.B.GUILD_ROLE_SUBSCRIPTIONS),
            L && y.push(C.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? D);
    let [M, x] = l.useState(n),
        b = (L && !(N && P)) || M === C.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            x(n);
        }, [n]),
        (0, i.jsx)(T.Provider, {
            value: {
                selectedTab: M,
                setSelectedTab: x,
                categoryTabs: y,
                isPhantomPreview: b,
                handlePreviewDismiss: function (e) {
                    (0, u.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, d.H$)(r) };
                    M === C.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          x(C.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = p.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(v.BVt.CHANNEL(r, _.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = p.hN.DISMISS_FULL_PREVIEW)),
                        f.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
