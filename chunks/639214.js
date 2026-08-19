"use strict";
n.d(t, { BM: () => A, L7: () => E, jm: () => h, nq: () => u, zS: () => c });
var i = n(587895),
    r = n(710969),
    a = n(792620),
    s = n(814793),
    l = n(190107),
    o = n(652215),
    d = n(360469);
function c(e, t) {
    if (null == e) return !1;
    if (
        e.application_id === d.$W ||
        e.platform === o.yTV.XBOX ||
        (n = e).platform === o.yTV.PS4 ||
        n.platform === o.yTV.PS5
    ) {
        var n,
            r = e.name.toLowerCase();
        let s = (0, a.F9)(t);
        if (null == s) return !1;
        let l = i.A.getApplication(s);
        return null != l && r === l.name.toLowerCase();
    }
    return (
        (null != t && t.id === l.gB && e.application_id === l.hK) ||
        (null != e.application_id && _(e.application_id, t))
    );
}
function u(e, t) {
    for (let [n, i] of e) if (c(t, i) && !(0, r.Ic)(i)) return i;
}
function _(e, t) {
    let n = (0, a._3)(t);
    return null != n && n.some((t) => t === e);
}
function E(e, t) {
    let n;
    for (let [i, a] of e)
        if (_(t, a) && !(0, r.Ic)(a)) {
            n = a;
            break;
        }
    return n;
}
function A(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = u(e, n);
        if (null != t) return t;
    }
    return null;
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null == t
        ? []
        : Array.from(e.values()).filter((e) => {
              let i = (0, a.TP)(e);
              return (
                  null != e &&
                  (0, s.vA)(e) &&
                  !(0, r.Ic)(e) &&
                  i === t &&
                  i !== l.ej &&
                  (e.userStatus?.completedAt == null || n) &&
                  (e.userStatus?.enrolledAt == null || n)
              );
          });
}
