n.d(t, {
    r: function () {
        return c;
    },
    t: function () {
        return o;
    }
});
var i = n(442837),
    l = n(314897),
    r = n(19780),
    a = n(959457);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.e7)([a.Z, l.default], () => {
        if (null == e) return !0;
        let t = a.Z.getUserIds(e);
        return null == t || s(t, l.default.getId());
    });
}
function c() {
    return (0, i.e7)([r.Z, l.default], () => {
        let e = r.Z.getUserIds();
        return null == e || s(e, l.default.getId());
    });
}
