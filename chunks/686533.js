n.d(t, { $: () => o, A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(502040);
let o = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function d(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: o,
        action: d,
        hint: c,
        warning: u,
        onClick: m,
        "aria-label": _,
        className: g,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(r.HS, g),
        children: [
            (0, i.jsxs)(a.sqX, {
                "aria-label": _,
                onClick: m,
                children: [
                    null != t && (0, i.jsx)("div", { className: r.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: r.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: r.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: r.c8,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: r.SZ,
                                        children: s,
                                    }),
                                    null != o &&
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    null != c &&
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: r.a$, children: d }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: r.Om, children: u }),
        ],
    });
}
