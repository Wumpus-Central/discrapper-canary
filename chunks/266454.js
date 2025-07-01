n.d(t, {
    Nj: () => u,
    Q3: () => d,
    zu: () => c
});
var r = n(442837),
    i = n(675478),
    a = n(581883),
    o = n(915486),
    s = n(605236),
    l = n(57207);
function c(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!n && (0, l.B)(e)) return !0;
    let r = null == (t = a.Z.settings.userContent) ? void 0 : t.dismissedContents;
    return null != r && (0, o.jl)(r, e);
}
function u(e) {
    return (0, r.e7)([a.Z], () => c(e));
}
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    c(e, !0) || ((0, s.u9)(e, t), await (0, i.nm)(e), (0, s.ME)(e, t));
}
