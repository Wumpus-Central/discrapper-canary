"use strict";
n.d(t, { JH: () => f, VC: () => u, b4: () => A, oQ: () => _, qv: () => E, tg: () => I, xl: () => h });
var i = n(17928),
    r = n(52133),
    a = n(55730);
n(198052);
var s = n(952818);
n(652896), n(567249), n(616356), n(280450), n(38502);
var l = n(480595);
n(309010);
var o = n(461213);
n(773371);
var d = n(489277);
n(897720), n(644434), n(392164);
var c = n(652215);
function u(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function _(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked)
            return !1;
    return !0;
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Ay,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.A,
        i = n.getTargetPID(),
        r = e.getGameForPID(i),
        a = t.getActivityForPID(i);
    return (null == r || null == r.id || null == r.name) && (null == a || null == a.application_id)
        ? void 0
        : { id: r?.id ?? a?.application_id, altId: a?.application_id, name: r?.name ?? a?.name };
}
function A() {
    return (0, i.bG)([s.Ay, l.A, d.A], () => E(s.Ay, l.A, d.A), [], r.A);
}
function h(e) {
    return (0, i.bG)(
        [o.A, l.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A;
                return null == e ? null : (t.getApplicationActivity(e, !0) ?? n.getApplicationActivity(e) ?? null);
            })(e, o.A, l.A),
        [e],
    );
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = t.getActivities(!0);
    return (
        (null != e ? n.find((t) => (0, a.A)(t, c.jUm.JOIN) && t.application_id === e) : void 0) ??
        n.find((e) => (0, a.A)(e, c.jUm.JOIN)) ??
        null
    );
}
function f(e) {
    return (0, i.bG)([o.A], () => I(e, o.A), [e]);
}
