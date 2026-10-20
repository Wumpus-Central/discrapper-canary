l.d(t, { DC: () => s, aq: () => c, rH: () => d });
var i = l(17928),
    n = l(945810),
    a = l(71393),
    r = l(246338);
let s = 2e3;
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, i.bG)([a.A, n.Bt], () => t && (0, r.XF)(a.A.getGuildsArray(), e), [e, t]);
}
function c(e) {
    return [
        "Build a profile card (an application profile widget) for my Discord profile.\nRead the data from the public source below \u2014 it must be reachable without a login.\nRecommend which fields the card should show and ask me to confirm or edit them before you build.\n",
        e,
    ].join("\n");
}
