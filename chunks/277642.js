n.d(t, {
    r: function () {
        return a;
    },
    t: function () {
        return o;
    }
});
var r = n(442837),
    l = n(314897),
    i = n(19780),
    u = n(959457);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, r.e7)([u.Z, l.default], () => {
        if (null == e) return !0;
        let t = u.Z.getUserIds(e);
        return null == t || s(t, l.default.getId());
    });
}
function a() {
    return (0, r.e7)([i.Z, l.default], () => {
        let e = i.Z.getUserIds();
        return null == e || s(e, l.default.getId());
    });
}
