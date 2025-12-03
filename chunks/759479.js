n.d(t, {
    Jg: () => h,
    ZZ: () => p,
    _D: () => f,
    lQ: () => m,
}),
    n(388685);
var r = n(812206),
    i = n(862657),
    a = n(254579),
    o = n(324805),
    s = n(981631),
    l = n(701488);
let c = (e) => e.application_id === l.Ev || e.platform === s.M7m.XBOX,
    u = (e) => e.platform === s.M7m.PS4 || e.platform === s.M7m.PS5;
function d(e, t) {
    let n = (0, a.Gs)(t);
    if (null == n) return !1;
    let i = r.Z.getApplication(n);
    return null != i && e === i.name.toLowerCase();
}
function f(e, t) {
    return (
        null != e &&
        (c(e) || u(e)
            ? d(e.name.toLowerCase(), t)
            : (null != t && t.id === o.Jk && e.application_id === o.$z) ||
              (null != e.application_id && _(e.application_id, t)))
    );
}
function p(e, t) {
    for (let [n, r] of e) if (f(t, r) && !(0, i.zi)(r)) return r;
}
function _(e, t) {
    let n = (0, a.MC)(t);
    return null != n && n.some((t) => t === e);
}
function m(e, t) {
    let n;
    for (let [r, a] of e)
        if (_(t, a) && !(0, i.zi)(a)) {
            n = a;
            break;
        }
    return n;
}
function h(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = p(e, n);
        if (null != t) return t;
    }
    return null;
}
