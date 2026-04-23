n.d(t, { $: () => d, A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(890856),
    r = n(834730),
    o = n(481384);
let d = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function u(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: d,
        action: u,
        hint: c,
        warning: g,
        onClick: m,
        "aria-label": _,
        className: A,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(o.HS, A),
        children: [
            (0, i.jsxs)(a.s, {
                "aria-label": _,
                onClick: m,
                children: [
                    null != t && (0, i.jsx)("div", { className: o.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: o.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: o.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: o.c8,
                                children: [
                                    (0, i.jsx)(r.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: o.SZ,
                                        children: s,
                                    }),
                                    null != d &&
                                        (0, i.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: d,
                                        }),
                                    null != c &&
                                        (0, i.jsx)(r.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: o.a$, children: u }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: o.Om, children: g }),
        ],
    });
}
