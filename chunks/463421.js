n.d(t, {
    Z: () => _,
    _: () => f,
}),
    n(388685),
    n(997841);
var r = n(473749),
    i = n(95015),
    a = n(442837),
    o = n(314897),
    s = n(158776),
    l = n(885110),
    c = n(981631);
let u = new Set([c.M7m.XBOX, c.M7m.PS4, c.M7m.PS5]);
function d(e) {
    return e.filter((e) => {
        var t, n;
        return (
            null != e.application_id &&
            e.type === c.IIU.PLAYING &&
            !(0, i.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED) &&
            !u.has(null != (n = e.platform) ? n : "")
        );
    });
}
function f(e, t) {
    return d(o.default.getId() === e ? l.Z.getActivities() : s.Z.getActivities(e, t));
}
function _(e, t) {
    let n = (0, a.e7)([l.Z, s.Z, o.default], () =>
        o.default.getId() === e ? l.Z.getActivities() : s.Z.getActivities(e, t),
    );
    return r.useMemo(() => d(n), [n]);
}
