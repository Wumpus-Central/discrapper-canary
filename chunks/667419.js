n.d(t, { $e: () => d, JA: () => o, ff: () => l });
var i = n(132500),
    r = n(391973),
    a = n(32584),
    s = n(644434);
function l() {
    (0, r.sx)(
        a.A.getWidgetsForLayout(s.GJ).map((e) => e.id),
        !0,
    );
}
function o(e, t) {
    let n = a.A.getWidgetsByTypeAndLayout(e, s.GJ);
    if (n.length > 0) {
        ((0, r.sx)(
            n.map((e) => e.id),
            t,
        ),
            t || (0, r.uD)(n[0].id));
        return;
    }
    if (t || null == a.A.getLayout(s.GJ)) return;
    let l = a.A.getWidgetDefaultSettings(e);
    null != l && (0, r.jn)({ ...l, type: e, id: (0, i.A)(), layoutId: s.GJ });
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A;
    return t.getWidgetsByTypeAndLayout(e, s.GJ).some((e) => !e.hidden);
}
