"use strict";
n.d(t, { JH: () => g, VC: () => u, b4: () => h, oQ: () => c, qv: () => E, tg: () => f, xl: () => m });
var i = n(17928),
    r = n(52133),
    s = n(833349);
n(313961);
var a = n(328153);
n(652896), n(567249), n(616356), n(495544), n(38502);
var o = n(375492);
n(309010);
var l = n(461213);
n(773371);
var d = n(489277);
n(897720), n(644434), n(392164);
var _ = n(652215);
function u(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function c(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked)
            return !1;
    return !0;
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Ay,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.A,
        i = n.getTargetPID(),
        r = e.getGameForPID(i),
        s = t.getActivityForPID(i);
    return (null == r || null == r.id || null == r.name) && (null == s || null == s.application_id)
        ? void 0
        : { id: r?.id ?? s?.application_id, altId: s?.application_id, name: r?.name ?? s?.name };
}
function h() {
    return (0, i.bG)([a.Ay, o.A, d.A], () => E(a.Ay, o.A, d.A), [], r.A);
}
function m(e) {
    return (0, i.bG)(
        [l.A, o.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A;
                return null == e ? null : (t.getApplicationActivity(e, !0) ?? n.getApplicationActivity(e) ?? null);
            })(e, l.A, o.A),
        [e],
    );
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = t.getActivities(!0);
    return (
        (null != e ? n.find((t) => (0, s.A)(t, _.jUm.JOIN) && t.application_id === e) : void 0) ??
        n.find((e) => (0, s.A)(e, _.jUm.JOIN)) ??
        null
    );
}
function g(e) {
    return (0, i.bG)([l.A], () => f(e, l.A), [e]);
}
