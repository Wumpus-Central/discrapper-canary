n.d(t, {
    Z: () => s,
    l: () => o
});
var r = n(442837),
    i = n(430824),
    a = n(981631);
function o(e) {
    return !e.hasFeature(a.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(a.oNc.CREATOR_MONETIZABLE) || e.hasFeature(a.oNc.CREATOR_MONETIZABLE_PROVISIONAL));
}
function s(e) {
    return (0, r.e7)([i.Z], () => {
        let t = i.Z.getGuild(e);
        return null != t && o(t);
    });
}
