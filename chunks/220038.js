n.d(t, { F5: () => a, OI: () => o, d6: () => E });
var i,
    l = n(474090),
    r = n(592909),
    s = n(202541),
    a = 221552 == n.j ? (((i = {}).NITRO = "nitro"), (i.NON_NITRO = "non_nitro"), i) : null;
function E(e) {
    return (0, l.YE)(e, s.PremiumTypes.TIER_2) ? "nitro" : (0, l.ki)(e) ? null : "non_nitro";
}
function o(e, t) {
    let n = E(e);
    return (
        null != n &&
        ("non_nitro" !== n || !!r.j.getConfig({ location: t }).enabled) &&
        r.VI.getConfig({ location: t }).enabled
    );
}
