n.d(t, {
    Gx: () => o,
    Op: () => c,
    T4: () => s,
    V_: () => l,
}),
    n(781311);
var a = n(539573),
    r = n(388032);
function i(e, t) {
    return {
        type: e,
        message: null != t ? t : null,
    };
}
function l() {
    return i(0, r.intl.string(r.t["71wuR0"]));
}
function s() {
    return i(0, r.intl.string(r.t["w/BT3G"]));
}
function o(e, t) {
    return i(1, (0, a.$q)(e, null == t ? void 0 : t.id));
}
function c(e, t) {
    var n;
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : null != (n = e.message)
          ? n
          : null;
}
