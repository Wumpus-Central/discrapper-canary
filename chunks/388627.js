n.d(t, {
    E6: () => _,
    HP: () => f,
    II: () => h,
    pL: () => p
}),
    n(47120);
var r = n(442837),
    i = n(902704),
    o = n(214629),
    a = n(317381),
    s = n(812206);
n(358221);
var l = n(594190);
n(569545), n(522474), n(199902), n(314897), n(355863);
var c = n(293273);
n(944486), n(808506);
var u = n(145597);
function d() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
n(340101), n(757744), n(501787);
function f(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function _(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
    return !0;
}
function p() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.ZP,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.ZP,
        d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
        f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, o.e1)(),
        _ = i.getCurrentEmbeddedActivity(),
        p = null == _ ? void 0 : _.applicationId,
        h = null == p ? void 0 : d.getApplication(p);
    if (null != _ && null != h && f)
        return {
            id: _.applicationId,
            altId: void 0,
            name: h.name
        };
    let m = (0, u.getPID)(),
        g = n.getGameForPID(m),
        E = r.getActivityForPID(m);
    return (null == g || null == g.id || null == g.name) && (null == E || null == E.application_id)
        ? void 0
        : {
              id: null != (e = null == g ? void 0 : g.id) ? e : null == E ? void 0 : E.application_id,
              altId: null == E ? void 0 : E.application_id,
              name: null != (t = null == g ? void 0 : g.name) ? t : null == E ? void 0 : E.name
          };
}
function h() {
    let e = (0, o.PR)();
    return (0, r.e7)([l.ZP, c.Z, a.ZP, s.Z], () => p(l.ZP, c.Z, a.ZP, s.Z, e), [e], i.Z);
}
