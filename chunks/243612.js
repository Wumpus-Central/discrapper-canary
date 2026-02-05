"use strict";
n.d(t, { VC: () => f, b4: () => m, oQ: () => p, qv: () => h });
var r = n(311907),
    i = n(52133),
    a = n(933958),
    s = n(415109),
    o = n(57220),
    l = n(587895);
n(313961);
var u = n(15285);
n(652896), n(87001), n(616356), n(961350), n(555528);
var c = n(375492);
n(309010), n(242286);
var d = n(395011);
function _() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
n(897720), n(644434), n(392164);
function f(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function p(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked)
            return !1;
    return !0;
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Ay,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Ay,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.A,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.A,
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, s.Y)(),
        _ = n.getCurrentEmbeddedActivity(),
        f = _?.applicationId,
        p = null == f ? void 0 : r.getApplication(f);
    if (null != _ && null != p && o) return { id: _.applicationId, altId: void 0, name: p.name };
    let h = i.getTargetPID(),
        m = e.getGameForPID(h),
        g = t.getActivityForPID(h);
    return (null == m || null == m.id || null == m.name) && (null == g || null == g.application_id)
        ? void 0
        : { id: m?.id ?? g?.application_id, altId: g?.application_id, name: m?.name ?? g?.name };
}
function m() {
    let e = (0, o.V)();
    return (0, r.bG)([u.Ay, c.A, a.Ay, l.A, d.A], () => h(u.Ay, c.A, a.Ay, l.A, d.A, e), [e], i.A);
}
