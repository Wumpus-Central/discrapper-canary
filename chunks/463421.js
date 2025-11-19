n.d(t, {
    Z: () => _,
    _: () => f,
}),
    n(388685),
    n(997841);
var r = n(473749),
    i = n(442837),
    a = n(314897),
    o = n(158776),
    s = n(885110),
    l = n(630388),
    c = n(981631);
let u = new Set([c.M7m.XBOX, c.M7m.PS4, c.M7m.PS5]);
function d(e) {
    return e.filter((e) => {
        var t, n;
        return (
            null != e.application_id &&
            e.type === c.IIU.PLAYING &&
            !(0, l.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED) &&
            !u.has(null != (n = e.platform) ? n : "")
        );
    });
}
function f(e, t) {
    return d(a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t));
}
function _(e, t) {
    let n = (0, i.e7)([s.Z, o.Z, a.default], () =>
        a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t),
    );
    return r.useMemo(() => d(n), [n]);
}
