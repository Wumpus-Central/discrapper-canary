r.d(n, {
    Z: function () {
        return l;
    },
    l: function () {
        return s;
    }
});
var i = r(442837),
    a = r(430824),
    o = r(981631);
function s(e) {
    return !e.hasFeature(o.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(o.oNc.CREATOR_MONETIZABLE) || e.hasFeature(o.oNc.CREATOR_MONETIZABLE_PROVISIONAL));
}
function l(e) {
    return (0, i.e7)([a.Z], () => {
        let n = a.Z.getGuild(e);
        return null != n && s(n);
    });
}
