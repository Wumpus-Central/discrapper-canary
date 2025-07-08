n.d(t, {
    I: () => s,
    Z: () => l
});
var r = n(442837),
    i = n(430824),
    a = n(317169),
    o = n(981631);
function s(e) {
    var t, n;
    let r = (0, a.I)(e),
        s = null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : o.Eu4.NONE;
    return o.oCV[s] + r.available;
}
function l(e) {
    let t = (0, a.Z)(e),
        n = (0, r.e7)([i.Z], () => {
            var t, n;
            return null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : o.Eu4.NONE;
        });
    return (
        ((0, r.e7)([i.Z], () => {
            var t;
            return (null == (t = i.Z.getGuild(e)) ? void 0 : t.features.has(o.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        })
            ? 0
            : o.oCV[n]) + t.available
    );
}
