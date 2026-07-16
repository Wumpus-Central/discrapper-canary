"use strict";
n.d(t, { B: () => u, q: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(947641),
    l = n(297264),
    o = n(834730),
    d = n(430345);
function c(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: d.MD, children: (0, i.jsx)("div", { className: d.Qs, children: t }) });
}
function u(e) {
    let {
        icon: t,
        title: n,
        description: r,
        iconClassName: c,
        color: u,
        listType: _ = "icon",
        completed: E = !1,
        index: A,
    } = e;
    return (0, i.jsxs)("div", {
        className: d.Hn,
        children: [
            (function () {
                if ("numbered" === _ && null != A)
                    if (E)
                        return (0, i.jsx)("div", {
                            className: d.ai,
                            children: (0, i.jsx)(s.r, { color: "green", className: a()(d.Kk, c) }),
                        });
                    else
                        return (0, i.jsx)(l.D, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: d.ai,
                            children: A + 1,
                        });
                if (null != t)
                    return (0, i.jsx)("div", {
                        className: d.zc,
                        children: (0, i.jsx)(t, { color: u ?? "currentColor", className: a()(d.Kk, c) }),
                    });
            })(),
            (0, i.jsxs)("div", {
                className: d.FS,
                children: [
                    (0, i.jsx)(o.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: a()({ [d.VA]: E }),
                        children: n,
                    }),
                    null != r &&
                        (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: a()({ [d.VA]: E }),
                            children: r,
                        }),
                ],
            }),
        ],
    });
}
