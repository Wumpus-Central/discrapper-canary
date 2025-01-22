r.d(n, {
    Qe: function () {
        return s;
    },
    ap: function () {
        return a;
    },
    wj: function () {
        return o;
    }
});
var i = r(231338);
function a(e) {
    return e === i.BR.LIGHT;
}
function o(e) {
    switch (e) {
        case i.BR.DARK:
        case i.BR.MIDNIGHT:
        case i.BR.DARKER:
            return !0;
        default:
            return !1;
    }
}
function s(e) {
    if (null == e) return;
    let n = i.Al.get(e);
    return null != n ? 'theme-'.concat(n, ' theme-').concat(e, ' images-').concat(n) : 'theme-'.concat(e, ' images-').concat(e);
}
