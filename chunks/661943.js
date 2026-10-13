n.d(t, { $5: () => g, ht: () => p });
var i = n(391973),
    r = n(114994),
    l = n(32584),
    s = n(531685),
    a = n(365971),
    o = n(897720),
    d = n(545807),
    u = n(856988),
    c = n(644434),
    h = n(652215);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    for (let n of t.getWidgetsByTypeAndLayout(h.uss.CONJURE, c.GJ))
        if ((0, o.Du)(n) && n.meta.applicationId === e) return n;
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    return m(e, t)?.hidden === !0;
}
function p(e, t) {
    let n = m(e);
    if (null != n) {
        ((0, i.sx)([n.id], t), t || (0, i.uD)(n.id));
        return;
    }
    if (!t) return;
    let o = r.A.getProject(e),
        g = l.A.getWidgetDefaultSettings(h.uss.CONJURE);
    if (null == o || null == g) return;
    (0, i.Vz)(c.GJ, l.A.getDefaultLayout(c.GJ, 4), 4);
    let { create: p } = (0, u.c3)({
        layoutId: c.GJ,
        listed: [o],
        existing: [],
        layoutSize: s.A.windowSize((0, a.Q2)((0, d.b)())),
        defaultSettings: g,
    });
    (0, i.uF)(p.map((e) => ({ ...e, hidden: !0 })));
}
