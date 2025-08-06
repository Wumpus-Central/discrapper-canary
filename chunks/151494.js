n.d(t, {
    I: () => s,
    Z: () => l,
});
var r = n(442837),
    i = n(430824),
    o = n(317169),
    a = n(981631);
function s(e) {
    var t, n;
    let r = (0, o.I)(e),
        s = null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : a.Eu4.NONE;
    return a.oCV[s] + r.available;
}
function l(e) {
    let t = (0, o.Z)(e),
        n = (0, r.e7)([i.Z], () => {
            var t, n;
            return null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : a.Eu4.NONE;
        });
    return (
        ((0, r.e7)([i.Z], () => {
            var t;
            return (null == (t = i.Z.getGuild(e)) ? void 0 : t.features.has(a.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        })
            ? 0
            : a.oCV[n]) + t.available
    );
}
