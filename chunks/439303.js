t.d(l, { E9: () => d, Ye: () => o, jM: () => u });
var n,
    r = t(477900),
    a = t(582128),
    i = t(812729),
    s = t.n(i),
    o =
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
    let { newValue: l, children: t } = e,
        n = u(),
        i = a.useMemo(() => {
            let e = { ...n, ...l };
            return s()(n, e) ? (n ?? e) : e;
        }, [n, l]);
    return (0, r.jsx)(c.Provider, { value: i, children: t });
}
