_.d(t, { A: () => B, k: () => h }), _(321073);
var n = _(627968),
    i = _(64700),
    S = _(284009),
    s = _.n(S),
    a = _(702841),
    r = _(554146),
    I = _(95561),
    u = _(826673),
    E = _(440293),
    R = _(599941),
    l = _(960253),
    d = _(164956),
    P = _(976860),
    C = _(808728),
    o = _(71393),
    A = _(174459),
    D = _(486418),
    U = _(920814),
    L = _(284683),
    c = _(634654),
    O = _(652215);
let T = i.createContext(void 0);
function h() {
    let e = i.useContext(T);
    return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function B(e) {
    let { children: t, initialTab: _, guildId: S } = e,
        s = (0, a.bG)([o.A], () => o.A.getGuild(S)),
        h = (0, a.bG)([d.A], () => d.A.isViewingServerShop(S)),
        B = (0, D.P)(s),
        p = (0, E.w)(S),
        G = s?.features.has(O.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
        f = (0, l.Oh)(s?.id),
        V = (0, R.Tq)(S)?.server_shop_tab_order,
        H = [],
        N = U.B.GUILD_SHOP_FULL_PREVIEW;
    h || (G && f)
        ? (H.push(V === L.HA.PRODUCTS_FIRST ? U.B.GUILD_PRODUCTS : U.B.GUILD_ROLE_SUBSCRIPTIONS),
          H.push(V === L.HA.PRODUCTS_FIRST ? U.B.GUILD_ROLE_SUBSCRIPTIONS : U.B.GUILD_PRODUCTS),
          (N = H[0]))
        : G && !f
          ? (H.push(U.B.GUILD_PRODUCTS), (N = U.B.GUILD_PRODUCTS))
          : !G &&
            f &&
            (H.push(U.B.GUILD_ROLE_SUBSCRIPTIONS),
            (N = U.B.GUILD_ROLE_SUBSCRIPTIONS),
            B && H.push(U.B.GUILD_PRODUCTS_PREVIEW)),
        (_ = _ ?? N);
    let [g, v] = i.useState(_),
        W = (B && !(f && p)) || g === U.B.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            v(_);
        }, [_]),
        (0, n.jsx)(T.Provider, {
            value: {
                selectedTab: g,
                setSelectedTab: v,
                categoryTabs: H,
                isPhantomPreview: W,
                handlePreviewDismiss: (e) => {
                    (0, u.Dr)(r.M.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, I.H$)(S) };
                    g === U.B.GUILD_PRODUCTS_PREVIEW
                        ? (e.stopPropagation(),
                          v(U.B.GUILD_ROLE_SUBSCRIPTIONS),
                          (t.action_taken = c.hN.DISMISS_TAB_PREVIEW))
                        : ((0, P.bG)(O.BVt.CHANNEL(S, C.Ay.getDefaultChannel(S)?.id)),
                          (t.action_taken = c.hN.DISMISS_FULL_PREVIEW)),
                        A.default.track(O.HAw.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: t,
        })
    );
}
