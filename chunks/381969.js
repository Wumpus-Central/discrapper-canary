(n.d(t, { A: () => L, k: () => m }), n(321073));
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
    A = n(976860),
    f = n(808728),
    I = n(71393),
    C = n(174459),
    g = n(486418),
    h = n(920814),
    p = n(284683),
    R = n(634654),
    v = n(652215);
let T = 221552 == n.j ? i.createContext(void 0) : null;
function m() {
    let e = i.useContext(T);
    return (s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e);
}
function L(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([I.A], () => I.A.getGuild(r)),
        m = (0, a.bG)([S.A], () => S.A.isViewingServerShop(r)),
        L = (0, g.P)(s),
        w = (0, c.w)(r),
        O = s?.features.has(v.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        P = (0, E.Oh)(s?.id),
        D = (0, _.Tq)(r)?.server_shop_tab_order,
        y = [],
        U = h.B.GUILD_SHOP_FULL_PREVIEW;
    (m || (O && P)
        ? (y.push(D === p.HA.PRODUCTS_FIRST ? h.B.GUILD_PRODUCTS : h.B.GUILD_ROLE_SUBSCRIPTIONS),
          y.push(D === p.HA.PRODUCTS_FIRST ? h.B.GUILD_ROLE_SUBSCRIPTIONS : h.B.GUILD_PRODUCTS),
          (U = y[0]))
        : O && !P
          ? (y.push(h.B.GUILD_PRODUCTS), (U = h.B.GUILD_PRODUCTS))
          : !O &&
            P &&
            (y.push(h.B.GUILD_ROLE_SUBSCRIPTIONS),
            (U = h.B.GUILD_ROLE_SUBSCRIPTIONS),
            L && y.push(h.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? U));
    let [M, x] = i.useState(n),
        N = (L && !(P && w)) || M === h.B.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            x(n);
        }, [n]),
        (0, l.jsx)(T.Provider, {
            value: {
                selectedTab: M,
                setSelectedTab: x,
                categoryTabs: y,
                isPhantomPreview: N,
                handlePreviewDismiss: function (e) {
                    (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, u.H$)(r) };
                    (M === h.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          x(h.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = R.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(v.BVt.CHANNEL(r, f.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = R.hN.DISMISS_FULL_PREVIEW)),
                        C.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, t));
                },
            },
            children: t,
        })
    );
}
