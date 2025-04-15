n.d(t, {
    r: () => c,
    t: () => a
});
var r = n(442837),
    i = n(314897),
    l = n(19780),
    o = n(959457);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function a(e) {
    return (0, r.e7)([o.Z, i.default], () => {
        if (null == e) return !0;
        let t = o.Z.getUserIds(e);
        return null == t || s(t, i.default.getId());
    });
}
function c() {
    return (0, r.e7)([l.Z, i.default], () => {
        let e = l.Z.getUserIds();
        return null == e || s(e, i.default.getId());
    });
}
