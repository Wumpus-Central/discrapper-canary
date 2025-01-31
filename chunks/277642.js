t.d(l, {
    r: () => c,
    t: () => o
});
var n = t(442837),
    i = t(314897),
    s = t(19780),
    a = t(959457);
function r(e, l) {
    return 0 === e.size || (1 === e.size && e.has(l));
}
function o(e) {
    return (0, n.e7)([a.Z, i.default], () => {
        if (null == e) return !0;
        let l = a.Z.getUserIds(e);
        return null == l || r(l, i.default.getId());
    });
}
function c() {
    return (0, n.e7)([s.Z, i.default], () => {
        let e = s.Z.getUserIds();
        return null == e || r(e, i.default.getId());
    });
}
