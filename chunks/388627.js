n.d(t, {
    E6: () => _,
    HP: () => p,
    II: () => h,
    pL: () => m,
}),
    n(388685);
var r = n(442837),
    i = n(902704),
    a = n(317381),
    o = n(850405),
    s = n(426419),
    l = n(812206);
n(358221);
var c = n(594190);
n(569545), n(522474), n(199902), n(314897), n(355863);
var u = n(293273);
n(944486), n(808506);
var d = n(610394);
function f() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
n(340101), n(757744), n(501787);
function p(e, t) {
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
function m() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.ZP,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.ZP,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
        f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.Z,
        p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, o.e)(),
        _ = i.getCurrentEmbeddedActivity(),
        m = null == _ ? void 0 : _.applicationId,
        h = null == m ? void 0 : s.getApplication(m);
    if (null != _ && null != h && p)
        return {
            id: _.applicationId,
            altId: void 0,
            name: h.name,
        };
    let g = f.getTargetPID(),
        E = n.getGameForPID(g),
        b = r.getActivityForPID(g);
    return (null == E || null == E.id || null == E.name) && (null == b || null == b.application_id)
        ? void 0
        : {
              id: null != (e = null == E ? void 0 : E.id) ? e : null == b ? void 0 : b.application_id,
              altId: null == b ? void 0 : b.application_id,
              name: null != (t = null == E ? void 0 : E.name) ? t : null == b ? void 0 : b.name,
          };
}
function h() {
    let e = (0, s.P)();
    return (0, r.e7)([c.ZP, u.Z, a.ZP, l.Z, d.Z], () => m(c.ZP, u.Z, a.ZP, l.Z, d.Z, e), [e], i.Z);
}
