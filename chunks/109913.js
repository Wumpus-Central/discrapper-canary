n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(147925),
    l = n(665273);
function c(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: i, separatorClassName: c } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: a()(l.hj, { [l.jQ]: i }),
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                i
                    ? null
                    : (0, r.jsx)(o.A, {
                          className: a()(l.LJ, c),
                          direction: o.A.Directions.RIGHT,
                      }),
            ],
        },
        t.id,
    );
}
let u = function (e) {
    let { breadcrumbs: t, activeId: n, className: i, separatorClassName: s } = e;
    return (0, r.jsx)("div", {
        className: a()(l.jD, i),
        children: t.map((e, i) =>
            (0, r.jsx)(
                c,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: i === t.length - 1,
                    separatorClassName: s,
                },
                e.id,
            ),
        ),
    });
};
