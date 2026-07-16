r.d(e, { B: () => u, q: () => o });
var a = r(627968);
r(64700);
var l = r(503698),
    n = r.n(l),
    c = r(947641),
    i = r(297264),
    t = r(834730),
    d = r(430345);
function o(s) {
    let { children: e } = s;
    return (0, a.jsx)("div", { className: d.MD, children: (0, a.jsx)("div", { className: d.Qs, children: e }) });
}
function u(s) {
    let {
        icon: e,
        title: r,
        description: l,
        iconClassName: o,
        color: u,
        listType: m = "icon",
        completed: x = !1,
        index: h,
    } = s;
    return (0, a.jsxs)("div", {
        className: d.Hn,
        children: [
            (function () {
                if ("numbered" === m && null != h)
                    if (x)
                        return (0, a.jsx)("div", {
                            className: d.ai,
                            children: (0, a.jsx)(c.r, { color: "green", className: n()(d.Kk, o) }),
                        });
                    else
                        return (0, a.jsx)(i.D, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: d.ai,
                            children: h + 1,
                        });
                if (null != e)
                    return (0, a.jsx)("div", {
                        className: d.zc,
                        children: (0, a.jsx)(e, { color: u ?? "currentColor", className: n()(d.Kk, o) }),
                    });
            })(),
            (0, a.jsxs)("div", {
                className: d.FS,
                children: [
                    (0, a.jsx)(t.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: n()({ [d.VA]: x }),
                        children: r,
                    }),
                    null != l &&
                        (0, a.jsx)(t.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: n()({ [d.VA]: x }),
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
