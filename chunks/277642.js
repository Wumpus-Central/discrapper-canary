n.d(t, {
    r: () => c,
    t: () => o
});
var i = n(442837),
    l = n(314897),
    r = n(19780),
    s = n(959457);
function a(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.e7)([s.Z, l.default], () => {
        if (null == e) return !0;
        let t = s.Z.getUserIds(e);
        return null == t || a(t, l.default.getId());
    });
}
function c() {
    return (0, i.e7)([r.Z, l.default], () => {
        let e = r.Z.getUserIds();
        return null == e || a(e, l.default.getId());
    });
}
