"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(147925),
    l = n(89892);
function u(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: i, separatorClassName: u } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: s()(l.hj, { [l.jQ]: i }),
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                i ? null : (0, r.jsx)(o.A, { className: s()(l.LJ, u), direction: o.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let c = function (e) {
    let { breadcrumbs: t, activeId: n, className: i, separatorClassName: a } = e;
    return (0, r.jsx)("div", {
        className: s()(l.jD, i),
        children: t.map((e, i) =>
            (0, r.jsx)(
                u,
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
