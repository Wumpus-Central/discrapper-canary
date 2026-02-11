n.d(t, { B: () => o, q: () => s });
var r = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    i = n(397927),
    u = n(59182);
function s(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: u.MD, children: (0, r.jsx)("div", { className: u.Qs, children: t }) });
}
function o(e) {
    let {
        icon: t,
        title: n,
        description: a,
        iconClassName: s,
        color: o,
        listType: c = "icon",
        completed: d = !1,
        index: m,
    } = e;
    return (0, r.jsxs)("div", {
        className: u.Hn,
        children: [
            (() => {
                if ("numbered" === c && null != m)
                    if (d)
                        return (0, r.jsx)("div", {
                            className: u.ai,
                            children: (0, r.jsx)(i.rOg, { color: "green", className: l()(u.Kk, s) }),
                        });
                    else
                        return (0, r.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: u.ai,
                            children: m + 1,
                        });
                if (null != t)
                    return (0, r.jsx)("div", {
                        className: u.zc,
                        children: (0, r.jsx)(t, { color: o ?? "currentColor", className: l()(u.Kk, s) }),
                    });
            })(),
            (0, r.jsxs)("div", {
                className: u.FS,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: l()({ [u.VA]: d }),
                        children: n,
                    }),
                    null != a &&
                        (0, r.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: l()({ [u.VA]: d }),
                            children: a,
                        }),
                ],
            }),
        ],
    });
}
