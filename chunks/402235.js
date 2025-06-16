n.d(t, {
    Z: () => s,
    i: () => l
});
var r = n(442837),
    i = n(430824),
    a = n(50101),
    o = n(981631);
function s(e, t) {
    let n = (0, r.e7)([i.Z], () => {
        let t = i.Z.getGuild(e);
        return null != t && t.hasFeature(o.oNc.ENHANCED_ROLE_COLORS);
    });
    return (0, a.Ek)(null != e ? e : void 0, t) && n;
}
function l(e, t) {
    let n = i.Z.getGuild(e),
        r = null != n && n.hasFeature(o.oNc.ENHANCED_ROLE_COLORS);
    return (0, a.gV)(null != e ? e : void 0, t) && r;
}
