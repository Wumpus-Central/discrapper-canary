n.d(t, {
    Jg: () => g,
    ZZ: () => _,
    _D: () => p,
    lQ: () => h,
    zs: () => E,
}),
    n(388685);
var r = n(812206),
    i = n(862657),
    a = n(254579),
    o = n(283689),
    s = n(324805),
    l = n(981631),
    c = n(701488);
let u = (e) => e.application_id === c.Ev || e.platform === l.M7m.XBOX,
    d = (e) => e.platform === l.M7m.PS4 || e.platform === l.M7m.PS5;
function f(e, t) {
    let n = (0, a.Gs)(t);
    if (null == n) return !1;
    let i = r.Z.getApplication(n);
    return null != i && e === i.name.toLowerCase();
}
function p(e, t) {
    return (
        null != e &&
        (u(e) || d(e)
            ? f(e.name.toLowerCase(), t)
            : (null != t && t.id === s.Jk && e.application_id === s.$z) ||
              (null != e.application_id && m(e.application_id, t)))
    );
}
function _(e, t) {
    for (let [n, r] of e) if (p(t, r) && !(0, i.zi)(r)) return r;
}
function m(e, t) {
    let n = (0, a.MC)(t);
    return null != n && n.some((t) => t === e);
}
function h(e, t) {
    let n;
    for (let [r, a] of e)
        if (m(t, a) && !(0, i.zi)(a)) {
            n = a;
            break;
        }
    return n;
}
function g(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = _(e, n);
        if (null != t) return t;
    }
    return null;
}
function E(e, t) {
    return null == t
        ? [].values()
        : e.values().filter((e) => {
              var n, r;
              let l = (0, a.Mo)(e);
              return (
                  null != e &&
                  (0, o.Rt)(e) &&
                  !(0, i.zi)(e) &&
                  l === t &&
                  l !== s.Ts &&
                  (null == (n = e.userStatus) ? void 0 : n.completedAt) == null &&
                  (null == (r = e.userStatus) ? void 0 : r.enrolledAt) == null
              );
          });
}
