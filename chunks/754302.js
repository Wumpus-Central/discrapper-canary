r.d(e, { B: () => u, q: () => o });
var a = r(477900);
r(582128);
var l = r(503698),
    n = r.n(l),
    c = r(947641),
    i = r(534514),
    d = r(834730),
    t = r(563682);
function o(s) {
    let { children: e } = s;
    return (0, a.jsx)("div", { className: t.MD, children: (0, a.jsx)("div", { className: t.Qs, children: e }) });
}
function u(s) {
    let {
        icon: e,
        title: r,
        description: l,
        iconClassName: o,
        color: u,
        listType: m = "icon",
        completed: h = !1,
        index: x,
    } = s;
    return (0, a.jsxs)("div", {
        className: t.Hn,
        children: [
            (function () {
                if ("numbered" === m && null != x)
                    if (h)
                        return (0, a.jsx)("div", {
                            className: t.ai,
                            children: (0, a.jsx)(c.r, { color: "green", className: n()(t.Kk, o) }),
                        });
                    else
                        return (0, a.jsx)(i.D, {
                            variant: "heading-sm/semibold",
                            color: "text-brand",
                            className: t.ai,
                            children: x + 1,
                        });
                if (null != e)
                    return (0, a.jsx)("div", {
                        className: t.zc,
                        children: (0, a.jsx)(e, { color: u ?? "currentColor", className: n()(t.Kk, o) }),
                    });
            })(),
            (0, a.jsxs)("div", {
                className: t.FS,
                children: [
                    (0, a.jsx)(d.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        className: n()({ [t.VA]: h }),
                        children: r,
                    }),
                    null != l &&
                        (0, a.jsx)(d.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            className: n()({ [t.VA]: h }),
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
