l.d(t, { E9: () => d, Ye: () => o, jM: () => u });
var r,
    n = l(477900),
    a = l(582128),
    i = l(812729),
    s = l.n(i),
    o =
        (((r = {}).COLLECTIBLES_SHOP = "collectibles_shop"),
        (r.COLLECTIBLES_SHOP_BANNER = "collectibles_shop_banner"),
        (r.SLAYER_SERVER_SHOP = "slayer_server_shop"),
        (r.GAME_PROFILE = "game_profile"),
        (r.EMBED = "embed"),
        (r.MULTI_SKU_EMBED = "multi_sku_embed"),
        r);
let c = a.createContext({});
function u() {
    return a.useContext(c);
}
function d(e) {
    let { newValue: t, children: l } = e,
        r = u(),
        i = a.useMemo(() => {
            let e = { ...r, ...t };
            return s()(r, e) ? (r ?? e) : e;
        }, [r, t]);
    return (0, n.jsx)(c.Provider, { value: i, children: l });
}
