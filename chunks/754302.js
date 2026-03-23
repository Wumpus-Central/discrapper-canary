n.d(t, { B: () => o, q: () => u });
var r = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    i = n(397927),
    s = n(385104);
function u(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: s.MD, children: (0, r.jsx)("div", { className: s.Qs, children: t }) });
}
function o(e) {
    let {
        icon: t,
        title: n,
        description: a,
        iconClassName: u,
        color: o,
        listType: c = "icon",
        completed: d = !1,
        index: m,
    } = e;
    return (0, r.jsxs)("div", {
        className: s.Hn,
        children: [
            (() => {
                if ("numbered" === c && null != m)
                    if (d)
                        return (0, r.jsx)("div", {
                            className: s.ai,
                            children: (0, r.jsx)(i.rOg, { color: "green", className: l()(s.Kk, u) }),
                        });
                    else
                        return (0, r.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: s.ai,
                            children: m + 1,
                        });
                if (null != t)
                    return (0, r.jsx)("div", {
                        className: s.zc,
                        children: (0, r.jsx)(t, { color: o ?? "currentColor", className: l()(s.Kk, u) }),
                    });
            })(),
            (0, r.jsxs)("div", {
                className: s.FS,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: l()({ [s.VA]: d }),
                        children: n,
                    }),
                    null != a &&
                        (0, r.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: l()({ [s.VA]: d }),
                            children: a,
                        }),
                ],
            }),
        ],
    });
}
