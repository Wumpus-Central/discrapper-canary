n.d(t, { $e: () => E, JA: () => _, eL: () => c, ff: () => u, j$: () => d });
var i = n(132500),
    r = n(391973),
    a = n(684013),
    s = n(32584),
    l = n(881957),
    o = n(644434);
function d() {
    (0, r.Vz)(o.GJ, s.A.getDefaultLayout(o.GJ, 4), 4);
}
function c() {
    a.A.resetDefaultLayout(o.GJ, 4);
}
function u() {
    (0, r.sx)(
        s.A.getWidgetsForLayout(o.GJ).map((e) => e.id),
        !0,
    );
}
function _(e, t) {
    let n = s.A.getWidgetsByTypeAndLayout(e, o.GJ);
    if (n.length > 0) {
        ((0, r.sx)(
            n.map((e) => e.id),
            t,
        ),
            t || (0, r.uD)(n[0].id));
        return;
    }
    if (t || null == s.A.getLayout(o.GJ)) return;
    let a = s.A.getWidgetDefaultSettings(e);
    null != a && (0, r.jn)({ ...a, type: e, id: (0, i.A)(), layoutId: o.GJ });
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A;
    if (null == t.getLayout(o.GJ)) {
        let n = t.getWidgetConfig(e);
        return n?.version === 4 && (n.layoutPolicy === l.X.REQUIRED || n.layoutPolicy === l.X.OPTIONAL_DEFAULT);
    }
    return t.getWidgetsByTypeAndLayout(e, o.GJ).some((e) => !e.hidden);
}
