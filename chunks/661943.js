n.d(t, { $5: () => p, ht: () => f });
var i = n(391973),
    l = n(114994),
    r = n(32584),
    s = n(531685),
    a = n(365971),
    o = n(897720),
    d = n(667419),
    u = n(545807),
    c = n(856988),
    h = n(644434),
    m = n(652215);
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    for (let n of t.getWidgetsByTypeAndLayout(m.uss.CONJURE, h.GJ))
        if ((0, o.Du)(n) && n.meta.applicationId === e) return n;
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return g(e, t)?.hidden === !0;
}
function f(e, t) {
    let n = g(e);
    if (null != n) {
        ((0, i.sx)([n.id], t), t || (0, i.uD)(n.id));
        return;
    }
    if (!t) return;
    let o = l.A.getProject(e),
        p = r.A.getWidgetDefaultSettings(m.uss.CONJURE);
    if (null == o || null == p) return;
    (0, d.j$)();
    let { create: f } = (0, c.c3)({
        layoutId: h.GJ,
        listed: [o],
        existing: [],
        layoutSize: s.A.windowSize((0, a.Q2)((0, u.b)())),
        defaultSettings: p,
    });
    (0, i.uF)(f.map((e) => ({ ...e, hidden: !0 })));
}
