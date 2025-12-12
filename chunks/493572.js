n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(259580),
    l = n(825456);
function c(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: i, separatorClassName: c } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: o()(l.breadcrumbWrapper, { [l.breadcrumbFinalWrapper]: i }),
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                i
                    ? null
                    : (0, r.jsx)(s.Z, {
                          className: o()(l.breadcrumbArrow, c),
                          direction: s.Z.Directions.RIGHT,
                      }),
            ],
        },
        t.id,
    );
}
let u = function (e) {
    let { breadcrumbs: t, activeId: n, className: i, separatorClassName: a } = e;
    return (0, r.jsx)("div", {
        className: o()(l.breadcrumbs, i),
        children: t.map((e, i) =>
            (0, r.jsx)(
                c,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: i === t.length - 1,
                    separatorClassName: a,
                },
                e.id,
            ),
        ),
    });
};
