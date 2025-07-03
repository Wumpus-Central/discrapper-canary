n.d(t, {
    Z: () => s,
    l: () => o
});
var r = n(442837),
    i = n(430824),
    a = n(981631);
function o(e) {
    return !e.features.has(a.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.features.has(a.oNc.CREATOR_MONETIZABLE) || e.features.has(a.oNc.CREATOR_MONETIZABLE_PROVISIONAL));
}
function s(e) {
    return (0, r.e7)([i.Z], () => {
        let t = i.Z.getGuild(e);
        return null != t && o(t);
    });
}
