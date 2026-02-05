"use strict";
n.d(t, { BM: () => g, L7: () => m, jm: () => E, nq: () => p, zS: () => f });
var r = n(587895),
    i = n(710969),
    a = n(792620),
    s = n(814793),
    o = n(654487),
    l = n(652215),
    u = n(360469);
let c = (e) => e.application_id === u.$W || e.platform === l.yTV.XBOX,
    d = (e) => e.platform === l.yTV.PS4 || e.platform === l.yTV.PS5;
function _(e, t) {
    let n = (0, a.F9)(t);
    if (null == n) return !1;
    let i = r.A.getApplication(n);
    return null != i && e === i.name.toLowerCase();
}
function f(e, t) {
    return (
        null != e &&
        (c(e) || d(e)
            ? _(e.name.toLowerCase(), t)
            : (null != t && t.id === o.gB && e.application_id === o.hK) ||
              (null != e.application_id && h(e.application_id, t)))
    );
}
function p(e, t) {
    for (let [n, r] of e) if (f(t, r) && !(0, i.Ic)(r)) return r;
}
function h(e, t) {
    let n = (0, a._3)(t);
    return null != n && n.some((t) => t === e);
}
function m(e, t) {
    let n;
    for (let [r, a] of e)
        if (h(t, a) && !(0, i.Ic)(a)) {
            n = a;
            break;
        }
    return n;
}
function g(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = p(e, n);
        if (null != t) return t;
    }
    return null;
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null == t
        ? []
        : Array.from(e.values()).filter((e) => {
              let r = (0, a.TP)(e);
              return (
                  null != e &&
                  (0, s.vA)(e) &&
                  !(0, i.Ic)(e) &&
                  r === t &&
                  r !== o.ej &&
                  (e.userStatus?.completedAt == null || n) &&
                  (e.userStatus?.enrolledAt == null || n)
              );
          });
}
