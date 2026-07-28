n.d(t, { A: () => v, k: () => L }), n(321073);
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
    _ = n(164956),
    h = n(976860),
    A = n(808728),
    S = n(71393),
    I = n(174459),
    f = n(486418),
    C = n(920814),
    m = n(284683),
    p = n(634654),
    T = n(652215);
let R = 21552 == n.j ? l.createContext(void 0) : null;
function L() {
    let e = l.useContext(R);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function v(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([S.A], () => S.A.getGuild(r)),
        L = (0, a.bG)([_.A], () => _.A.isViewingServerShop(r)),
        v = (0, f.P)(s),
        P = (0, c.w)(r),
        O = s?.features.has(T.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        w = (0, g.Oh)(s?.id),
        N = (0, E.Tq)(r)?.server_shop_tab_order,
        D = [],
        M = C.B.GUILD_SHOP_FULL_PREVIEW;
    L || (O && w)
        ? (D.push(N === m.HA.PRODUCTS_FIRST ? C.B.GUILD_PRODUCTS : C.B.GUILD_ROLE_SUBSCRIPTIONS),
          D.push(N === m.HA.PRODUCTS_FIRST ? C.B.GUILD_ROLE_SUBSCRIPTIONS : C.B.GUILD_PRODUCTS),
          (M = D[0]))
        : O && !w
          ? (D.push(C.B.GUILD_PRODUCTS), (M = C.B.GUILD_PRODUCTS))
          : !O &&
            w &&
            (D.push(C.B.GUILD_ROLE_SUBSCRIPTIONS),
            (M = C.B.GUILD_ROLE_SUBSCRIPTIONS),
            v && D.push(C.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? M);
    let [y, x] = l.useState(n),
        U = (v && !(w && P)) || y === C.B.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            x(n);
        }, [n]),
        (0, i.jsx)(R.Provider, {
            value: {
                selectedTab: y,
                setSelectedTab: x,
                categoryTabs: D,
                isPhantomPreview: U,
                handlePreviewDismiss: function (e) {
                    (0, u.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, d.H$)(r) };
                    y === C.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          x(C.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = p.hN.DISMISS_TAB_PREVIEW))
                        : ((0, h.bG)(T.BVt.CHANNEL(r, A.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = p.hN.DISMISS_FULL_PREVIEW)),
                        I.default.track(T.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
