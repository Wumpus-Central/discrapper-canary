n.d(t, {
    r: () => c,
    t: () => l
});
var r = n(442837),
    i = n(314897),
    a = n(19780),
    o = n(959457);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function l(e) {
    return (0, r.e7)([o.Z, i.default], () => {
        if (null == e) return !0;
        let t = o.Z.getUserIds(e);
        return null == t || s(t, i.default.getId());
    });
}
function c() {
    return (0, r.e7)([a.Z, i.default], () => {
        let e = a.Z.getUserIds();
        return null == e || s(e, i.default.getId());
    });
}
