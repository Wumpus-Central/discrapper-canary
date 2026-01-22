l.d(t, {
    A: () => u,
});
var n = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(397927),
    i = l(993408),
    o = l(985018),
    c = l(933122);
let u = (e) => {
    let { category: t, daysRemainingText: l = o.t.Io7ozn, className: r } = e;
    if (!(0, i.HF)(t.unpublishedAt)) return null;
    let u = (0, i.WU)(t.unpublishedAt),
        d =
            u > 1
                ? o.intl.formatToPlainString(l, {
                      days: u,
                  })
                : o.intl.string(o.t.Bc13HF);
    return (0, n.jsx)(a.LpS, {
        disableColor: !0,
        text: d,
        className: s()(c.q, r),
    });
};
