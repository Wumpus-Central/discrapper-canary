n.d(t, {
    Gx: () => o,
    Op: () => c,
    T4: () => s,
    V_: () => r
});
var i = n(539573),
    l = n(388032);
function a(e, t) {
    return {
        type: e,
        message: null != t ? t : null
    };
}
function r() {
    return a(0, l.intl.string(l.t['uXA57+']));
}
function s() {
    return a(0, l.intl.string(l.t.kesTVV));
}
function o(e, t) {
    return a(1, (0, i.$q)(e, null == t ? void 0 : t.id));
}
function c(e, t) {
    var n;
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : null !== (n = e.message) && void 0 !== n ? n : null;
}
