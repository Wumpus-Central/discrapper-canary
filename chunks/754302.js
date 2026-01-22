n.d(t, {
    B: () => u,
    q: () => o,
}),
    n(228524);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(397927),
    a = n(385104);

function o(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: a.MD,
        children: (0, r.jsx)("div", {
            className: a.Qs,
            children: t,
        }),
    });
}

function u(e) {
    let {
        icon: t,
        title: n,
        description: l,
        iconClassName: o,
        color: u,
        listType: c = "icon",
        completed: d = !1,
        index: p,
    } = e;
    return (0, r.jsxs)("div", {
        className: a.Hn,
        children: [
            (() => {
                if ("numbered" === c && null != p)
                    if (d)
                        return (0, r.jsx)("div", {
                            className: a.ai,
                            children: (0, r.jsx)(s.rOg, {
                                color: "green",
                                className: i()(a.Kk, o),
                            }),
                        });
                    else
                        return (0, r.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: a.ai,
                            children: p + 1,
                        });
                if (null != t)
                    return (0, r.jsx)("div", {
                        className: a.zc,
                        children: (0, r.jsx)(t, {
                            color: null != u ? u : "currentColor",
                            className: i()(a.Kk, o),
                        }),
                    });
            })(),
            (0, r.jsxs)("div", {
                className: a.FS,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: i()({
                            [a.VA]: d,
                        }),
                        children: n,
                    }),
                    null != l &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: i()({
                                [a.VA]: d,
                            }),
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
