n.d(t, {
    Gx: () => o,
    Op: () => c,
    T4: () => s,
    V_: () => a
});
var i = n(539573),
    r = n(388032);
function l(e, t) {
    return {
        type: e,
        message: null != t ? t : null
    };
}
function a() {
    return l(0, r.intl.string(r.t['71wuR0']));
}
function s() {
    return l(0, r.intl.string(r.t['w/BT3N']));
}
function o(e, t) {
    return l(1, (0, i.$q)(e, null == t ? void 0 : t.id));
}
function c(e, t) {
    var n;
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) || (2 === e.type && null != t.tags && t.tags.length > 0) ? null : null !== (n = e.message) && void 0 !== n ? n : null;
}
