n.d(t, {
    Nj: () => d,
    Ob: () => _,
    Q3: () => f,
    zu: () => u
});
var r = n(442837),
    i = n(675478),
    a = n(581883),
    o = n(709054),
    s = n(915486),
    l = n(605236),
    c = n(57207);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!n && (0, c.B)(e)) return !0;
    let r = null == (t = a.Z.settings.userContent) ? void 0 : t.dismissedContents;
    return null != r && (0, s.jl)(r, e);
}
function d(e) {
    return (0, r.e7)([a.Z], () => u(e));
}
async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    u(e, !0) || ((0, l.u9)(e, t), await (0, i.nm)(e), (0, l.ME)(e, t));
}
function _(e, t) {
    var n, r;
    if ((0, c.B)(e))
        return {
            isDismissed: !0,
            lastDismissedSnowflakeId: null
        };
    let i = null == (r = a.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? void 0 : n.lastDismissedObjectId;
    return {
        isDismissed: null != i && 1 !== o.default.compare(t, i),
        lastDismissedSnowflakeId: i
    };
}
