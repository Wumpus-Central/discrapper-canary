l.d(t, { E9: () => d, Ye: () => s, jM: () => u });
var n,
    r = l(477900),
    a = l(582128),
    i = l(812729),
    o = l.n(i),
    s =
        (((n = {}).COLLECTIBLES_SHOP = "collectibles_shop"),
        (n.COLLECTIBLES_SHOP_BANNER = "collectibles_shop_banner"),
        (n.SLAYER_SERVER_SHOP = "slayer_server_shop"),
        (n.GAME_PROFILE = "game_profile"),
        (n.GAME_PROFILE_GAME_SHOP = "game_profile_game_shop"),
        (n.EMBED = "embed"),
        (n.MULTI_SKU_EMBED = "multi_sku_embed"),
        n);
let c = a.createContext({});
function u() {
    return a.useContext(c);
}
function d(e) {
    let { newValue: t, children: l } = e,
        n = u(),
        i = a.useMemo(() => {
            let e = { ...n, ...t };
            return o()(n, e) ? (n ?? e) : e;
        }, [n, t]);
    return (0, r.jsx)(c.Provider, { value: i, children: l });
}
