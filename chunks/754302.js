e.d(i, { B: () => o, q: () => c });
var n = e(627968);
e(64700);
var s = e(503698),
    r = e.n(s),
    l = e(397927),
    a = e(385104);
function c(t) {
    let { children: i } = t;
    return (0, n.jsx)("div", { className: a.MD, children: (0, n.jsx)("div", { className: a.Qs, children: i }) });
}
function o(t) {
    let {
        icon: i,
        title: e,
        description: s,
        iconClassName: c,
        color: o,
        listType: d = "icon",
        completed: x = !1,
        index: m,
    } = t;
    return (0, n.jsxs)("div", {
        className: a.Hn,
        children: [
            (() => {
                if ("numbered" === d && null != m)
                    if (x)
                        return (0, n.jsx)("div", {
                            className: a.ai,
                            children: (0, n.jsx)(l.rOg, { color: "green", className: r()(a.Kk, c) }),
                        });
                    else
                        return (0, n.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: a.ai,
                            children: m + 1,
                        });
                if (null != i)
                    return (0, n.jsx)("div", {
                        className: a.zc,
                        children: (0, n.jsx)(i, { color: o ?? "currentColor", className: r()(a.Kk, c) }),
                    });
            })(),
            (0, n.jsxs)("div", {
                className: a.FS,
                children: [
                    (0, n.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: r()({ [a.VA]: x }),
                        children: e,
                    }),
                    null != s &&
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: r()({ [a.VA]: x }),
                            children: s,
                        }),
                ],
            }),
        ],
    });
}
