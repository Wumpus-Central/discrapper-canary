n.d(t, { BM: () => f, L7: () => h, XM: () => p, jm: () => I, nq: () => E, zS: () => _ });
var i = n(570138),
    r = n(587895),
    a = n(765741),
    s = n(985253),
    l = n(977416),
    o = n(792620),
    d = n(814793),
    c = n(190107),
    u = n(818023);
function _(e, t) {
    if (null == e) return !1;
    if (
        e.application_id === u.$W ||
        e.platform === i.y.XBOX ||
        (n = e).platform === i.y.PLAYSTATION_4 ||
        n.platform === i.y.PLAYSTATION_5
    ) {
        var n,
            a = e.name.toLowerCase();
        let i = (0, o.F9)(t);
        if (null == i) return !1;
        let s = r.A.getApplication(i);
        return null != s && a === s.name.toLowerCase();
    }
    return (
        (null != t && t.id === c.gB && e.application_id === c.hK) ||
        (null != e.application_id && A(e.application_id, t))
    );
}
function E(e, t) {
    for (let [n, i] of e) if (_(t, i) && !(0, l.Ic)(i)) return i;
}
function A(e, t) {
    let n = (0, o._3)(t);
    return null != n && n.some((t) => t === e);
}
function h(e, t) {
    let n;
    for (let [i, r] of e)
        if (A(t, r) && !(0, l.Ic)(r)) {
            n = r;
            break;
        }
    return n;
}
function f(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = E(e, n);
        if (null != t) return t;
    }
    return null;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null == t
        ? []
        : Array.from(e.values()).filter((e) => {
              let i = (0, o.TP)(e);
              return (
                  null != e &&
                  (0, d.vA)(e) &&
                  !(0, l.Ic)(e) &&
                  i === t &&
                  i !== c.ej &&
                  (e.userStatus?.completedAt == null || n) &&
                  (e.userStatus?.enrolledAt == null || n)
              );
          });
}
function p(e, t) {
    let n = (0, s.A)(t),
        i = a.A.getApplicationIdForPID(e.pid);
    if (null != i) for (let e of (0, s.A)(i)) n.add(e);
    return n;
}
