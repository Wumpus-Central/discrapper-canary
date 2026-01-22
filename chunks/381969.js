n.d(t, {
    A: () => N,
    k: () => C,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(417597),
    l = n(554146),
    c = n(58149),
    u = n(826673),
    d = n(599941),
    f = n(960253),
    p = n(164956),
    _ = n(976860),
    h = n(808728),
    m = n(71393),
    g = n(954571),
    E = n(491026),
    b = n(486418),
    y = n(920814),
    O = n(284683),
    A = n(634654),
    v = n(652215);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let T = i.createContext(void 0);

function C() {
    let e = i.useContext(T);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}

function N(e) {
    var t;
    let { children: n, initialTab: a, guildId: s } = e,
        S = (0, o.bG)([m.A], () => m.A.getGuild(s)),
        C = (0, o.bG)([p.A], () => p.A.isViewingServerShop(s)),
        N = (0, b.P)(S, "guild_shop_page"),
        R = (0, E.YZ)(s, "guild_shop_page"),
        w = (null == S ? void 0 : S.features.has(v.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        P = (0, f.Oh)(null == S ? void 0 : S.id),
        D = P && R,
        x = null == (t = (0, d.Tq)(s)) ? void 0 : t.server_shop_tab_order,
        L = [],
        j = y.B.GUILD_SHOP_FULL_PREVIEW;
    C || (w && P)
        ? (L.push(x === O.HA.PRODUCTS_FIRST ? y.B.GUILD_PRODUCTS : y.B.GUILD_ROLE_SUBSCRIPTIONS),
          L.push(x === O.HA.PRODUCTS_FIRST ? y.B.GUILD_ROLE_SUBSCRIPTIONS : y.B.GUILD_PRODUCTS),
          (j = L[0]))
        : w && !P
          ? (L.push(y.B.GUILD_PRODUCTS), (j = y.B.GUILD_PRODUCTS))
          : !w &&
            P &&
            (L.push(y.B.GUILD_ROLE_SUBSCRIPTIONS),
            (j = y.B.GUILD_ROLE_SUBSCRIPTIONS),
            N && L.push(y.B.GUILD_PRODUCTS_PREVIEW)),
        (a = null != a ? a : j);
    let [M, k] = i.useState(a),
        U = (N && !D) || M === y.B.GUILD_PRODUCTS_PREVIEW;
    i.useEffect(() => {
        k(a);
    }, [a]);
    let G = (e) => {
        (0, u.Dr)(l.M.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = I({}, (0, c.H$)(s));
        if (M === y.B.GUILD_PRODUCTS_PREVIEW)
            e.stopPropagation(), k(y.B.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = A.hN.DISMISS_TAB_PREVIEW);
        else {
            var n;
            (0, _.bG)(v.BVt.CHANNEL(s, null == (n = h.Ay.getDefaultChannel(s)) ? void 0 : n.id)),
                (t.action_taken = A.hN.DISMISS_FULL_PREVIEW);
        }
        g.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
    };
    return (0, r.jsx)(T.Provider, {
        value: {
            selectedTab: M,
            setSelectedTab: k,
            categoryTabs: L,
            isPhantomPreview: U,
            handlePreviewDismiss: G,
        },
        children: n,
    });
}
