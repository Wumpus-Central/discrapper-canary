"use strict";
n.d(t, { BM: () => I, L7: () => h, XM: () => p, jm: () => f, nq: () => E, zS: () => _ });
var i = n(587895),
    r = n(985253),
    a = n(480595),
    s = n(710969),
    l = n(792620),
    o = n(814793),
    d = n(190107),
    c = n(652215),
    u = n(360469);
function _(e, t) {
    if (null == e) return !1;
    if (
        e.application_id === u.$W ||
        e.platform === c.yTV.XBOX ||
        (n = e).platform === c.yTV.PS4 ||
        n.platform === c.yTV.PS5
    ) {
        var n,
            r = e.name.toLowerCase();
        let a = (0, l.F9)(t);
        if (null == a) return !1;
        let s = i.A.getApplication(a);
        return null != s && r === s.name.toLowerCase();
    }
    return (
        (null != t && t.id === d.gB && e.application_id === d.hK) ||
        (null != e.application_id && A(e.application_id, t))
    );
}
function E(e, t) {
    for (let [n, i] of e) if (_(t, i) && !(0, s.Ic)(i)) return i;
}
function A(e, t) {
    let n = (0, l._3)(t);
    return null != n && n.some((t) => t === e);
}
function h(e, t) {
    let n;
    for (let [i, r] of e)
        if (A(t, r) && !(0, s.Ic)(r)) {
            n = r;
            break;
        }
    return n;
}
function I(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = E(e, n);
        if (null != t) return t;
    }
    return null;
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null == t
        ? []
        : Array.from(e.values()).filter((e) => {
              let i = (0, l.TP)(e);
              return (
                  null != e &&
                  (0, o.vA)(e) &&
                  !(0, s.Ic)(e) &&
                  i === t &&
                  i !== d.ej &&
                  (e.userStatus?.completedAt == null || n) &&
                  (e.userStatus?.enrolledAt == null || n)
              );
          });
}
function p(e, t) {
    let n = (0, r.A)(t),
        i = a.A.getApplicationIdForPID(e.pid);
    if (null != i) for (let e of (0, r.A)(i)) n.add(e);
    return n;
}
