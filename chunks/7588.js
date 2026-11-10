var r = n(914313),
    u = n(710969),
    i = n(723702),
    l = n(929482);
function o() {
    return r.Se.getConfig({ location: "quest_ios_attribution" }).enabled && (0, i.un)();
}
function a(e, t) {
    return (0, u.vZ)(e, t)?.is_campaign_ios_attribution_enabled === !0;
}
n.d(
    t,
    {},
    {
        C$: o,
        Oh: a,
        vV: function (e, t, n) {
            return o() && e && a(t, n) ? (0, l.BU)() : null;
        },
    },
);
