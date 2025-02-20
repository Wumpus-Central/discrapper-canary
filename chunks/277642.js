t.d(l, {
    r: () => c,
    t: () => o
});
var n = t(442837),
    i = t(314897),
    r = t(19780),
    s = t(959457);
function a(e, l) {
    return 0 === e.size || (1 === e.size && e.has(l));
}
function o(e) {
    return (0, n.e7)([s.Z, i.default], () => {
        if (null == e) return !0;
        let l = s.Z.getUserIds(e);
        return null == l || a(l, i.default.getId());
    });
}
function c() {
    return (0, n.e7)([r.Z, i.default], () => {
        let e = r.Z.getUserIds();
        return null == e || a(e, i.default.getId());
    });
}
