n(321073);
var l = n(477900),
    i = n(582128),
    r = n(284009),
    s = n.n(r),
    a = n(164636),
    o = n(554146),
    u = n(149468),
    d = n(826673),
    c = n(440293),
    _ = n(599941),
    E = n(960253),
    f = n(164956),
    A = n(976860),
    S = n(808728),
    I = n(71393),
    g = n(129230),
    C = n(486418),
    h = n(920814),
    p = n(284683),
    R = n(634654),
    m = n(652215);
let v = 221552 == n.j ? i.createContext(void 0) : null;
n.d(
    t,
    {},
    {
        A: function (e) {
            let { children: t, initialTab: n, guildId: r } = e,
                s = (0, a.bG)([I.A], () => I.A.getGuild(r)),
                T = (0, a.bG)([f.A], () => f.A.isViewingServerShop(r)),
                L = (0, C.P)(s),
                w = (0, c.w)(r),
                O = s?.features.has(m.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
                P = (0, E.Oh)(s?.id),
                D = P && w,
                y = (0, _.Tq)(r)?.server_shop_tab_order,
                { categoryTabs: M, defaultInitialTab: U } = i.useMemo(() => {
                    let e = [],
                        t = h.B.GUILD_SHOP_FULL_PREVIEW;
                    return (
                        T || (O && P)
                            ? (e.push(y === p.HA.PRODUCTS_FIRST ? h.B.GUILD_PRODUCTS : h.B.GUILD_ROLE_SUBSCRIPTIONS),
                              e.push(y === p.HA.PRODUCTS_FIRST ? h.B.GUILD_ROLE_SUBSCRIPTIONS : h.B.GUILD_PRODUCTS),
                              (t = e[0]))
                            : O && !P
                              ? (e.push(h.B.GUILD_PRODUCTS), (t = h.B.GUILD_PRODUCTS))
                              : !O &&
                                P &&
                                (e.push(h.B.GUILD_ROLE_SUBSCRIPTIONS),
                                (t = h.B.GUILD_ROLE_SUBSCRIPTIONS),
                                L && e.push(h.B.GUILD_PRODUCTS_PREVIEW)),
                        { categoryTabs: e, defaultInitialTab: t }
                    );
                }, [T, O, P, y, L]);
            n = n ?? U;
            let [b, x] = i.useState(n),
                N = (L && !D) || b === h.B.GUILD_PRODUCTS_PREVIEW;
            i.useEffect(() => {
                x(n);
            }, [n]);
            let B = i.useCallback(
                    (e) => {
                        (0, d.Dr)(o.M.SERVER_SHOP_PHANTOM_PREVIEW);
                        let t = { ...(0, u.H$)(r) };
                        (b === h.B.GUILD_PRODUCTS_PREVIEW
                            ? (e.stopPropagation(),
                              x(h.B.GUILD_ROLE_SUBSCRIPTIONS),
                              (t.action_taken = R.hN.DISMISS_TAB_PREVIEW))
                            : ((0, A.bG)(m.BVt.CHANNEL(r, S.A.getDefaultChannel(r)?.id)),
                              (t.action_taken = R.hN.DISMISS_FULL_PREVIEW)),
                            g.default.track(m.HAw.GUILD_SHOP_PREVIEW_CLICK, t));
                    },
                    [r, b],
                ),
                j = i.useMemo(
                    () => ({
                        selectedTab: b,
                        setSelectedTab: x,
                        categoryTabs: M,
                        isPhantomPreview: N,
                        handlePreviewDismiss: B,
                    }),
                    [b, M, N, B],
                );
            return (0, l.jsx)(v.Provider, { value: j, children: t });
        },
        k: function () {
            let e = i.useContext(v);
            return (s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e);
        },
    },
);
