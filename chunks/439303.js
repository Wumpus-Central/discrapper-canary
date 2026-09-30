t.d(l, { E9: () => d, Ye: () => o, jM: () => u });
var r,
    n = t(477900),
    a = t(582128),
    i = t(812729),
    s = t.n(i),
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
    let { newValue: l, children: t } = e,
        r = u(),
        i = a.useMemo(() => {
            let e = { ...r, ...l };
            return s()(r, e) ? (r ?? e) : e;
        }, [r, l]);
    return (0, n.jsx)(c.Provider, { value: i, children: t });
}
