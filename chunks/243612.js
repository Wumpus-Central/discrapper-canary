n.d(t, {
    VC: () => p,
    b4: () => m,
    oQ: () => _,
    qv: () => h,
}),
    n(896048);
var r = n(311907),
    i = n(52133),
    a = n(933958),
    s = n(415109),
    o = n(57220),
    l = n(587895);
n(313961);
var c = n(15285);
n(652896), n(87001), n(616356), n(961350), n(555528);
var u = n(375492);
n(309010), n(242286);
var d = n(395011);

function f() {
    let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
    return e.getWindowVisible(OVERLAY_V3_KEY);
}
n(897720), n(644434), n(392164);

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

function h() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.Ay,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Ay,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.A,
        f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.A,
        p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, s.Y)(),
        _ = i.getCurrentEmbeddedActivity(),
        h = null == _ ? void 0 : _.applicationId,
        m = null == h ? void 0 : o.getApplication(h);
    if (null != _ && null != m && p)
        return {
            id: _.applicationId,
            altId: void 0,
            name: m.name,
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

function m() {
    let e = (0, o.V)();
    return (0, r.bG)([c.Ay, u.A, a.Ay, l.A, d.A], () => h(c.Ay, u.A, a.Ay, l.A, d.A, e), [e], i.A);
}
