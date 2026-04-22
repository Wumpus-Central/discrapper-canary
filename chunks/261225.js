l.d(t, { A: () => A, M: () => m });
var r = l(627968),
    n = l(64700),
    a = l(503698),
    s = l.n(a),
    c = l(123292),
    i = l(770178),
    d = l(204990),
    o = l(219561),
    u = l(882724);
let m = 6,
    h = (e) => {
        let { index: t, active: l, setPage: n } = e;
        return (0, r.jsx)("div", {
            className: s()(u.page, { [u.active]: l }),
            children: (0, r.jsx)(c.Q, {
                role: "button",
                variant: l ? "always-white" : "secondary",
                size: "sm",
                text: (t + 1).toString(),
                onClick: () => n(t),
            }),
        });
    },
    p = (e) => {
        let { page: t, pages: l, setPage: a } = e,
            [s, d] = n.useState(0),
            m = (0, i.w)((e) => {
                let { contentRect: t } = e;
                d(t.width);
            }),
            p = n.useMemo(() => {
                let e;
                if (null == l || l < 1) return null;
                let n = Math.min(8, Math.max(3, Math.floor((s - 160) / 32)));
                if (l <= n) e = Array.from({ length: l }, (e, t) => t);
                else {
                    let r = n - 2,
                        a = Math.max(1, t - Math.floor(r / 2)),
                        s = Math.min(l - 2, a + r - 1);
                    a = Math.max(1, s - r + 1);
                    let c = Array.from({ length: r }, (e, t) => a + t);
                    a > 1 && (c[0] = "ellipsis"), s < l - 2 && (c[c.length - 1] = "ellipsis"), (e = [0, ...c, l - 1]);
                }
                return e.map((e, l) =>
                    "number" == typeof e
                        ? (0, r.jsx)(h, { index: e, active: t === e, setPage: a }, e)
                        : (0, r.jsx)(
                              "div",
                              {
                                  className: u.page,
                                  children: (0, r.jsx)(o.t, { variant: "text-md/bold", content: "..." }),
                              },
                              `ellipsis-${l}`,
                          ),
                );
            }, [t, l, a, s]);
        return (0, r.jsx)("div", {
            ref: m,
            className: u.pagination,
            children: (0, r.jsxs)(o.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [
                    (0, r.jsx)(c.Q, {
                        variant: "secondary",
                        disabled: 0 === t,
                        text: "Back",
                        onClick: () => {
                            a(t - 1);
                        },
                    }),
                    (0, r.jsx)("div", {
                        className: u.pageNumbers,
                        children: (0, r.jsx)(o.Kp, {
                            direction: "horizontal",
                            justify: "center",
                            align: "center",
                            children: p,
                        }),
                    }),
                    (0, r.jsx)(c.Q, {
                        variant: "secondary",
                        disabled: t === l - 1,
                        text: "Next",
                        onClick: () => {
                            a(t + 1);
                        },
                    }),
                ],
            }),
        });
    },
    A = (e) => {
        let { columns: t = 3, paginationOptions: l, children: a } = e,
            { paginationStrategy: c = d.o.PAGINATE, perPage: i, paginationPosition: o = "bottom" } = l ?? {},
            h = c === d.o.TRUNCATE,
            A = Math.max(1, Math.min(m, Math.floor(t))),
            [E, f] = n.useState(0),
            [g, v] = n.useState(i),
            [x, y] = n.useState(n.Children.count(a)),
            C = n.Children.count(a),
            S = null == i || i < 1 ? 0 : Math.ceil(C / i),
            T = null != i && i > 0,
            j = !h && T && S > 1;
        (g !== i || x !== C) && (v(i), y(C), f(0));
        let _ = n.useMemo(
            () => (T ? (h ? n.Children.toArray(a).slice(0, i) : n.Children.toArray(a).slice(i * E, i * (E + 1))) : a),
            [E, i, a, T, h],
        );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                j && "top" === o && (0, r.jsx)(p, { page: E, pages: S, setPage: f }),
                (0, r.jsx)("div", {
                    className: u.gridContainer,
                    children: (0, r.jsx)("div", { className: s()(u.grid, u[`columns${A}`]), children: _ }),
                }),
                j && "bottom" === o && (0, r.jsx)(p, { page: E, pages: S, setPage: f }),
            ],
        });
    };
