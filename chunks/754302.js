n.d(t, { B: () => u, q: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(947641),
    r = n(534514),
    o = n(834730),
    c = n(430345);
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: c.MD, children: (0, i.jsx)("div", { className: c.Qs, children: t }) });
}
function u(e) {
    let {
        icon: t,
        title: n,
        description: l,
        iconClassName: d,
        color: u,
        listType: h = "icon",
        completed: m = !1,
        index: A,
    } = e;
    return (0, i.jsxs)("div", {
        className: c.Hn,
        children: [
            (() => {
                if ("numbered" === h && null != A)
                    if (m)
                        return (0, i.jsx)("div", {
                            className: c.ai,
                            children: (0, i.jsx)(s.r, { color: "green", className: a()(c.Kk, d) }),
                        });
                    else
                        return (0, i.jsx)(r.D, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: c.ai,
                            children: A + 1,
                        });
                if (null != t)
                    return (0, i.jsx)("div", {
                        className: c.zc,
                        children: (0, i.jsx)(t, { color: u ?? "currentColor", className: a()(c.Kk, d) }),
                    });
            })(),
            (0, i.jsxs)("div", {
                className: c.FS,
                children: [
                    (0, i.jsx)(o.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: a()({ [c.VA]: m }),
                        children: n,
                    }),
                    null != l &&
                        (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: a()({ [c.VA]: m }),
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
