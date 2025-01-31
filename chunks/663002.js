n.d(t, {
    Qe: () => s,
    ap: () => r,
    wj: () => a
});
var i = n(231338);
function r(e) {
    return e === i.BR.LIGHT;
}
function a(e) {
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
    let t = i.Al.get(e);
    return null != t ? 'theme-'.concat(t, ' theme-').concat(e, ' images-').concat(t) : 'theme-'.concat(e, ' images-').concat(e);
}
