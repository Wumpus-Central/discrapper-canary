n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(834730),
    s = n(147925),
    o = n(89892);
function u(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: r, separatorClassName: u } = e;
    return (0, a.jsxs)(
        "div",
        {
            className: l()(o.hj, { [o.jQ]: r }),
            children: [
                (0, a.jsx)(i.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r ? null : (0, a.jsx)(s.A, { className: l()(o.LJ, u), direction: s.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let c = function (e) {
    let { breadcrumbs: t, activeId: n, className: r, separatorClassName: i } = e;
    return (0, a.jsx)("div", {
        className: l()(o.jD, r),
        children: t.map((e, r) =>
            (0, a.jsx)(
                u,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: r === t.length - 1,
                    separatorClassName: i,
                },
                e.id,
            ),
        ),
    });
};
