n.d(t, {
    E6: () => p,
    HP: () => _,
    II: () => m,
    pL: () => h
}),
    n(388685);
var r = n(442837),
    i = n(902704),
    o = n(317381),
    a = n(850405),
    s = n(426419),
    l = n(812206);
n(358221);
var c = n(594190);
n(569545), n(522474), n(199902), n(314897), n(355863);
var u = n(293273);
n(944486), n(808506);
var d = n(145597);
function f() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
n(340101), n(757744), n(501787);
function _(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function p(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
    return !0;
}
function h() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.ZP,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.ZP,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
        f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, a.e)(),
        _ = i.getCurrentEmbeddedActivity(),
        p = null == _ ? void 0 : _.applicationId,
        h = null == p ? void 0 : s.getApplication(p);
    if (null != _ && null != h && f)
        return {
            id: _.applicationId,
            altId: void 0,
            name: h.name
        };
    let m = (0, d.getPID)(),
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
function m() {
    let e = (0, s.P)();
    return (0, r.e7)([c.ZP, u.Z, o.ZP, l.Z], () => h(c.ZP, u.Z, o.ZP, l.Z, e), [e], i.Z);
}
