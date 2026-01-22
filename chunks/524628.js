n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(158954),
    s = n(311907),
    o = n(775602),
    c = n(824134);

function u(e) {
    let { withHeader: t = !0, size: n = 15 } = e,
        l = (0, s.bG)([o.A], () => o.A.useReducedMotion);
    return (0, r.jsxs)(a.BJc, {
        gap: 4,
        children: [
            t &&
                (0, r.jsx)("div", {
                    className: i()(c.iE, {
                        [c.cb]: l,
                    }),
                    style: {
                        paddingTop: 8,
                        paddingBottom: 8,
                    },
                    children: (0, r.jsx)(d, {
                        className: i()(c.nq, c.NX),
                    }),
                }),
            Array.from({
                length: n,
            }).map((e, t) => (0, r.jsx)(f, {}, t)),
        ],
    });
}

function d(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", {
        className: i()(c.n8, t),
    });
}

function f() {
    let e = (0, s.bG)([o.A], () => o.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            gap: 12,
            padding: 4,
        },
        className: i()(c.iE, {
            [c.cb]: e,
        }),
        children: [
            (0, r.jsx)("div", {
                className: i()(c.my, c.NX),
            }),
            (0, r.jsxs)("div", {
                className: c.U0,
                children: [
                    (0, r.jsx)(d, {
                        className: i()(c.Md, c.NX),
                    }),
                    (0, r.jsx)(d, {
                        className: i()(c.nq, c.NX),
                    }),
                    (0, r.jsx)(d, {
                        className: i()(c.xs, c.NX),
                    }),
                ],
            }),
        ],
    });
}
