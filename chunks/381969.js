n.d(t, { A: () => T, k: () => v }), n(321073);
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
    S = n(960253),
    h = n(164956),
    A = n(976860),
    f = n(808728),
    g = n(71393),
    C = n(174459),
    I = n(486418),
    E = n(920814),
    w = n(284683),
    p = n(634654),
    m = n(652215);
let R = 21552 == n.j ? i.createContext(void 0) : null;
function v() {
    let e = i.useContext(R);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function T(e) {
    let { children: t, initialTab: n, guildId: r } = e,
        s = (0, a.bG)([g.A], () => g.A.getGuild(r)),
        v = (0, a.bG)([h.A], () => h.A.isViewingServerShop(r)),
        T = (0, I.P)(s),
        L = (0, c.w)(r),
        P = s?.features.has(m.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        O = (0, S.Oh)(s?.id),
        y = (0, _.Tq)(r)?.server_shop_tab_order,
        D = [],
        U = E.B.GUILD_SHOP_FULL_PREVIEW;
    v || (P && O)
        ? (D.push(y === w.HA.PRODUCTS_FIRST ? E.B.GUILD_PRODUCTS : E.B.GUILD_ROLE_SUBSCRIPTIONS),
          D.push(y === w.HA.PRODUCTS_FIRST ? E.B.GUILD_ROLE_SUBSCRIPTIONS : E.B.GUILD_PRODUCTS),
          (U = D[0]))
        : P && !O
          ? (D.push(E.B.GUILD_PRODUCTS), (U = E.B.GUILD_PRODUCTS))
          : !P &&
            O &&
            (D.push(E.B.GUILD_ROLE_SUBSCRIPTIONS),
            (U = E.B.GUILD_ROLE_SUBSCRIPTIONS),
            T && D.push(E.B.GUILD_PRODUCTS_PREVIEW)),
        (n = n ?? U);
    let [B, b] = i.useState(n),
        x = (T && !(O && L)) || B === E.B.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            b(n);
        }, [n]),
        (0, l.jsx)(R.Provider, {
            value: {
                selectedTab: B,
                setSelectedTab: b,
                categoryTabs: D,
                isPhantomPreview: x,
                handlePreviewDismiss: function (e) {
                    (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, u.H$)(r) };
                    B === E.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          b(E.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = p.hN.DISMISS_TAB_PREVIEW))
                        : ((0, A.bG)(m.BVt.CHANNEL(r, f.Ay.getDefaultChannel(r)?.id)),
                          (t.action_taken = p.hN.DISMISS_FULL_PREVIEW)),
                        C.default.track(m.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
