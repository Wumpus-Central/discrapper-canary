n.d(t, {
    fo: () => s,
    uW: () => a,
    vr: () => c,
    z0: () => o,
}),
    n(733351);
var r = n(753738),
    l = n(985018);
function i(e, t) {
    return {
        type: e,
        message: null != t ? t : null,
    };
}
function a() {
    return i(0, l.intl.string(l.t.uXA573));
}
function s() {
    return i(0, l.intl.string(l.t.kesTVT));
}
function o(e, t) {
    return i(1, (0, r.cw)(e, null == t ? void 0 : t.id));
}
function c(e, t) {
    var n;
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0)
        ? null
        : null != (n = e.message)
          ? n
          : null;
}
