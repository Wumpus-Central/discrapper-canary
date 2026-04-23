"use strict";
n.d(t, { JH: () => m, VC: () => d, b4: () => p, oQ: () => _, qv: () => f, tg: () => E, xl: () => h });
var r = n(311907),
    i = n(52133),
    s = n(833349);
n(313961);
var a = n(15285);
n(652896), n(87001), n(616356), n(961350), n(555528);
var o = n(375492);
n(309010);
var l = n(461213);
n(242286);
var u = n(395011);
n(897720), n(644434), n(392164);
var c = n(652215);
function d(e, t) {
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
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Ay,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.A,
        r = n.getTargetPID(),
        i = e.getGameForPID(r),
        s = t.getActivityForPID(r);
    return (null == i || null == i.id || null == i.name) && (null == s || null == s.application_id)
        ? void 0
        : { id: i?.id ?? s?.application_id, altId: s?.application_id, name: i?.name ?? s?.name };
}
function p() {
    return (0, r.bG)([a.Ay, o.A, u.A], () => f(a.Ay, o.A, u.A), [], i.A);
}
function h(e) {
    return (0, r.bG)(
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
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = t.getActivities(!0);
    return (
        (null != e ? n.find((t) => (0, s.A)(t, c.jUm.JOIN) && t.application_id === e) : void 0) ??
        n.find((e) => (0, s.A)(e, c.jUm.JOIN)) ??
        null
    );
}
function m(e) {
    return (0, r.bG)([l.A], () => E(e, l.A), [e]);
}
