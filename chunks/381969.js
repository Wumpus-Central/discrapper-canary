n.d(t, {
    A: () => C,
    k: () => f,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    o = n(417597),
    s = n(554146),
    c = n(58149),
    u = n(826673),
    E = n(599941),
    d = n(960253),
    _ = n(164956),
    A = n(976860),
    T = n(808728),
    I = n(71393),
    O = n(954571),
    N = n(491026),
    p = n(486418),
    R = n(920814),
    S = n(284683),
    P = n(634654),
    y = n(652215);
let m = i.createContext(void 0);

function f() {
    let e = i.useContext(m);
    return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}

function C(e) {
    var t;
    let { children: n, initialTab: l, guildId: a } = e,
        f = (0, o.bG)([I.A], () => I.A.getGuild(a)),
        C = (0, o.bG)([_.A], () => _.A.isViewingServerShop(a)),
        g = (0, p.P)(f, "guild_shop_page"),
        D = (0, N.YZ)(a, "guild_shop_page"),
        h = (null == f ? void 0 : f.features.has(y.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        U = (0, d.Oh)(null == f ? void 0 : f.id),
        b = null == (t = (0, E.Tq)(a)) ? void 0 : t.server_shop_tab_order,
        M = [],
        j = R.B.GUILD_SHOP_FULL_PREVIEW;
    C || (h && U)
        ? (M.push(b === S.HA.PRODUCTS_FIRST ? R.B.GUILD_PRODUCTS : R.B.GUILD_ROLE_SUBSCRIPTIONS),
          M.push(b === S.HA.PRODUCTS_FIRST ? R.B.GUILD_ROLE_SUBSCRIPTIONS : R.B.GUILD_PRODUCTS),
          (j = M[0]))
        : h && !U
          ? (M.push(R.B.GUILD_PRODUCTS), (j = R.B.GUILD_PRODUCTS))
          : !h &&
            U &&
            (M.push(R.B.GUILD_ROLE_SUBSCRIPTIONS),
            (j = R.B.GUILD_ROLE_SUBSCRIPTIONS),
            g && M.push(R.B.GUILD_PRODUCTS_PREVIEW)),
        (l = null != l ? l : j);
    let [v, k] = i.useState(l),
        L = (g && !(U && D)) || v === R.B.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            k(l);
        }, [l]),
        (0, r.jsx)(m.Provider, {
            value: {
                selectedTab: v,
                setSelectedTab: k,
                categoryTabs: M,
                isPhantomPreview: L,
                handlePreviewDismiss: (e) => {
                    (0, u.Dr)(s.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, (0, c.H$)(a));
                    if (v === R.B.GUILD_PRODUCTS_PREVIEW)
                        e.stopPropagation(),
                            k(R.B.GUILD_ROLE_SUBSCRIPTIONS),
                            (t.action_taken = P.hN.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, A.bG)(y.BVt.CHANNEL(a, null == (n = T.Ay.getDefaultChannel(a)) ? void 0 : n.id)),
                            (t.action_taken = P.hN.DISMISS_FULL_PREVIEW);
                    }
                    O.default.track(y.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: n,
        })
    );
}
