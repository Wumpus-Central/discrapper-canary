"use strict";
n.d(t, { JH: () => y, VC: () => m, b4: () => A, oQ: () => E, qv: () => g, tg: () => S, xl: () => T });
var r = n(311907),
    i = n(52133),
    s = n(933958),
    a = n(415109),
    o = n(57220),
    l = n(833349),
    u = n(587895);
n(313961);
var c = n(15285);
n(652896), n(87001), n(616356), n(961350), n(555528);
var d = n(375492);
n(309010);
var _ = n(461213);
n(242286);
var f = n(395011);
n(897720), n(644434), n(392164);
var p = n(652215);
function h() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
function m(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function E(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked)
            return !1;
    return !0;
}
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.Ay,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.A,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.A,
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, a.Y)(),
        l = n.getCurrentEmbeddedActivity(),
        _ = l?.applicationId,
        p = null == _ ? void 0 : r.getApplication(_);
    if (null != l && null != p && o) return { id: l.applicationId, altId: void 0, name: p.name };
    let h = i.getTargetPID(),
        m = e.getGameForPID(h),
        E = t.getActivityForPID(h);
    return (null == m || null == m.id || null == m.name) && (null == E || null == E.application_id)
        ? void 0
        : { id: m?.id ?? E?.application_id, altId: E?.application_id, name: m?.name ?? E?.name };
}
function A() {
    let e = (0, o.V)();
    return (0, r.bG)([c.Ay, d.A, s.Ay, u.A, f.A], () => g(c.Ay, d.A, s.Ay, u.A, f.A, e), [e], i.A);
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.A;
    return null == e ? null : (t.getApplicationActivity(e, !0) ?? n.getApplicationActivity(e) ?? null);
}
function T(e) {
    return (0, r.bG)([_.A, d.A], () => I(e, _.A, d.A), [e]);
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.A,
        n = t.getActivities(!0);
    return (
        (null != e ? n.find((t) => (0, l.A)(t, p.jUm.JOIN) && t.application_id === e) : void 0) ??
        n.find((e) => (0, l.A)(e, p.jUm.JOIN)) ??
        null
    );
}
function y(e) {
    return (0, r.bG)([_.A], () => S(e, _.A), [e]);
}
