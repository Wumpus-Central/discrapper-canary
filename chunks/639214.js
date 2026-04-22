"use strict";
n.d(t, { BM: () => E, L7: () => f, jm: () => h, nq: () => c, zS: () => d });
var r = n(587895),
    i = n(710969),
    s = n(792620),
    a = n(814793),
    o = n(654487),
    l = n(652215),
    u = n(360469);
function d(e, t) {
    if (null == e) return !1;
    if (
        e.application_id === u.$W ||
        e.platform === l.yTV.XBOX ||
        e.platform === l.yTV.PS4 ||
        e.platform === l.yTV.PS5
    ) {
        var n = e.name.toLowerCase();
        let i = (0, s.F9)(t);
        if (null == i) return !1;
        let a = r.A.getApplication(i);
        return null != a && n === a.name.toLowerCase();
    }
    return (
        (null != t && t.id === o.gB && e.application_id === o.hK) ||
        (null != e.application_id && _(e.application_id, t))
    );
}
function c(e, t) {
    for (let [n, r] of e) if (d(t, r) && !(0, i.Ic)(r)) return r;
}
function _(e, t) {
    let n = (0, s._3)(t);
    return null != n && n.some((t) => t === e);
}
function f(e, t) {
    let n;
    for (let [r, s] of e)
        if (_(t, s) && !(0, i.Ic)(s)) {
            n = s;
            break;
        }
    return n;
}
function E(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = c(e, n);
        if (null != t) return t;
    }
    return null;
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null == t
        ? []
        : Array.from(e.values()).filter((e) => {
              let r = (0, s.TP)(e);
              return (
                  null != e &&
                  (0, a.vA)(e) &&
                  !(0, i.Ic)(e) &&
                  r === t &&
                  r !== o.ej &&
                  (e.userStatus?.completedAt == null || n) &&
                  (e.userStatus?.enrolledAt == null || n)
              );
          });
}
