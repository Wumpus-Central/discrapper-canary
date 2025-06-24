n.d(t, {
    Gx: () => o,
    Op: () => c,
    T4: () => s,
    V_: () => i
}),
    n(781311);
var r = n(539573),
    a = n(388032);
function l(e, t) {
    return {
        type: e,
        message: null != t ? t : null
    };
}
function i() {
    return l(0, a.intl.string(a.t['71wuR0']));
}
function s() {
    return l(0, a.intl.string(a.t['w/BT3N']));
}
function o(e, t) {
    return l(1, (0, r.$q)(e, null == t ? void 0 : t.id));
}
function c(e, t) {
    var n;
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) || (2 === e.type && null != t.tags && t.tags.length > 0) ? null : null != (n = e.message) ? n : null;
}
