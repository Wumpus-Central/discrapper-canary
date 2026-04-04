n.d(t, { z: () => m });
var i = n(311907),
    s = n(955572),
    l = n(775602),
    a = n(419954),
    r = n(975571),
    o = n(780964),
    d = n(358776),
    c = n(652215),
    u = n(985018);
let m = (0, a.zD)(o.X.REDUCED_MOTION, {
    useTitle: () => u.intl.string(u.t.b3XBzg),
    useSubtitle: (0, d.Ci)("Motion")
        ? () => u.intl.format(u.t.XqvxJc, { helpdeskArticle: r.A.getArticleURL(c.MVz.REDUCED_MOTION) })
        : void 0,
    useValue: () => (0, i.bG)([l.A], () => l.A.useReducedMotion),
    setValue: (e) => (0, s.qz)(e ? "reduce" : "no-preference"),
});
