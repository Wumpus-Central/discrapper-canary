n.d(t, {
    Z: () => o,
    l: () => s
});
var i = n(442837),
    r = n(430824),
    a = n(981631);
function s(e) {
    return !e.hasFeature(a.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(a.oNc.CREATOR_MONETIZABLE) || e.hasFeature(a.oNc.CREATOR_MONETIZABLE_PROVISIONAL));
}
function o(e) {
    return (0, i.e7)([r.Z], () => {
        let t = r.Z.getGuild(e);
        return null != t && s(t);
    });
}
