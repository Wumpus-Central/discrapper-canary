n.d(t, {
    Z: () => d,
    _: () => u,
}),
    n(997841);
var r = n(647438),
    i = n(442837),
    a = n(314897),
    o = n(158776),
    s = n(885110),
    l = n(630388),
    c = n(981631);
function u(e, t) {
    return (a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t)).filter((e) => {
        var t;
        return (
            null != e.application_id &&
            e.type === c.IIU.PLAYING &&
            !(0, l.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED)
        );
    });
}
function d(e, t) {
    let n = (0, i.e7)([s.Z, o.Z, a.default], () =>
        a.default.getId() === e ? s.Z.getActivities() : o.Z.getActivities(e, t),
    );
    return r.useMemo(
        () =>
            n.filter((e) => {
                var t;
                return (
                    null != e.application_id &&
                    e.type === c.IIU.PLAYING &&
                    !(0, l.yE)(null != (t = e.flags) ? t : 0, c.xjy.EMBEDDED)
                );
            }),
        [n],
    );
}
