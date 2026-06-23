"use strict";
n.d(t, { BM: () => f, L7: () => h, jm: () => p, nq: () => d, zS: () => c });
var i = n(587895),
    r = n(710969),
    s = n(792620),
    a = n(814793),
    o = n(190107),
    l = n(652215),
    u = n(360469);
function c(e, t) {
    if (null == e) return !1;
    if (
        e.application_id === u.$W ||
        e.platform === l.yTV.XBOX ||
        (n = e).platform === l.yTV.PS4 ||
        n.platform === l.yTV.PS5
    ) {
        var n,
            r = e.name.toLowerCase();
        let a = (0, s.F9)(t);
        if (null == a) return !1;
        let o = i.A.getApplication(a);
        return null != o && r === o.name.toLowerCase();
    }
    return (
        (null != t && t.id === o.gB && e.application_id === o.hK) ||
        (null != e.application_id && _(e.application_id, t))
    );
}
function d(e, t) {
    for (let [n, i] of e) if (c(t, i) && !(0, r.Ic)(i)) return i;
}
function _(e, t) {
    let n = (0, s._3)(t);
    return null != n && n.some((t) => t === e);
}
function h(e, t) {
    let n;
    for (let [i, s] of e)
        if (_(t, s) && !(0, r.Ic)(s)) {
            n = s;
            break;
        }
    return n;
}
function f(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = d(e, n);
        if (null != t) return t;
    }
    return null;
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null == t
        ? []
        : Array.from(e.values()).filter((e) => {
              let i = (0, s.TP)(e);
              return (
                  null != e &&
                  (0, a.vA)(e) &&
                  !(0, r.Ic)(e) &&
                  i === t &&
                  i !== o.ej &&
                  (e.userStatus?.completedAt == null || n) &&
                  (e.userStatus?.enrolledAt == null || n)
              );
          });
}
