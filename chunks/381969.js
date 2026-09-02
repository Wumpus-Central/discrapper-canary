n.d(t, { A: () => L, k: () => m }), n(321073);
var l = n(477900),
    i = n(582128),
    r = n(284009),
    s = n.n(r),
    a = n(702841),
    o = n(554146),
    u = n(95561),
    d = n(826673),
    c = n(440293),
    _ = n(599941),
    E = n(960253),
    S = n(164956),
    f = n(976860),
    A = n(808728),
    I = n(71393),
    g = n(174459),
    h = n(486418),
    C = n(920814),
    p = n(284683),
    R = n(634654),
    v = n(652215);
let T = 221552 == n.j ? i.createContext(void 0) : null;
function m() {
    let e = i.useContext(T);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function L(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([I.A], () => I.A.getGuild(r)),
        m = (0, a.bG)([S.A], () => S.A.isViewingServerShop(r)),
        L = (0, h.P)(s),
        w = (0, c.w)(r),
        O = s?.features.has(v.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        P = (0, E.Oh)(s?.id),
        y = (0, _.Tq)(r)?.server_shop_tab_order,
        D = [],
        U = C.B.GUILD_SHOP_FULL_PREVIEW;
    m || (O && P)
        ? (D.push(y === p.HA.PRODUCTS_FIRST ? C.B.GUILD_PRODUCTS : C.B.GUILD_ROLE_SUBSCRIPTIONS),
          D.push(y === p.HA.PRODUCTS_FIRST ? C.B.GUILD_ROLE_SUBSCRIPTIONS : C.B.GUILD_PRODUCTS),
          (U = D[0]))
        : O && !P
          ? (D.push(C.B.GUILD_PRODUCTS), (U = C.B.GUILD_PRODUCTS))
          : !O &&
            P &&
            (D.push(C.B.GUILD_ROLE_SUBSCRIPTIONS),
            (U = C.B.GUILD_ROLE_SUBSCRIPTIONS),
            L && D.push(C.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? U);
    let [x, M] = i.useState(n),
        N = (L && !(P && w)) || x === C.B.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            M(n);
        }, [n]),
        (0, l.jsx)(T.Provider, {
            value: {
                selectedTab: x,
                setSelectedTab: M,
                categoryTabs: D,
                isPhantomPreview: N,
                handlePreviewDismiss: function (e) {
                    (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, u.H$)(r) };
                    x === C.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          M(C.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = R.hN.DISMISS_TAB_PREVIEW))
                        : ((0, f.bG)(v.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = R.hN.DISMISS_FULL_PREVIEW)),
                        g.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
