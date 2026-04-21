r.d(t, { A: () => A, M: () => m });
var l = r(627968),
    n = r(64700),
    a = r(503698),
    s = r.n(a),
    c = r(732955),
    i = r(770178),
    d = r(204990),
    o = r(219561),
    u = r(882724);
let m = 6,
    h = (e) => {
        let { index: t, active: r, setPage: n } = e;
        return (0, l.jsx)("div", {
            className: s()(u.page, { [u.active]: r }),
            children: (0, l.jsx)(c.QWc, {
                role: "button",
                variant: r ? "always-white" : "secondary",
                size: "sm",
                text: (t + 1).toString(),
                onClick: () => n(t),
            }),
        });
    },
    p = (e) => {
        let { page: t, pages: r, setPage: a } = e,
            [s, d] = n.useState(0),
            m = (0, i.w)((e) => {
                let { contentRect: t } = e;
                d(t.width);
            }),
            p = n.useMemo(() => {
                let e;
                if (null == r || r < 1) return null;
                let n = Math.min(8, Math.max(3, Math.floor((s - 160) / 32)));
                if (r <= n) e = Array.from({ length: r }, (e, t) => t);
                else {
                    let l = n - 2,
                        a = Math.max(1, t - Math.floor(l / 2)),
                        s = Math.min(r - 2, a + l - 1);
                    a = Math.max(1, s - l + 1);
                    let c = Array.from({ length: l }, (e, t) => a + t);
                    a > 1 && (c[0] = "ellipsis"), s < r - 2 && (c[c.length - 1] = "ellipsis"), (e = [0, ...c, r - 1]);
                }
                return e.map((e, r) =>
                    "number" == typeof e
                        ? (0, l.jsx)(h, { index: e, active: t === e, setPage: a }, e)
                        : (0, l.jsx)(
                              "div",
                              {
                                  className: u.page,
                                  children: (0, l.jsx)(o.t, { variant: "text-md/bold", content: "..." }),
                              },
                              `ellipsis-${r}`,
                          ),
                );
            }, [t, r, a, s]);
        return (0, l.jsx)("div", {
            ref: m,
            className: u.pagination,
            children: (0, l.jsxs)(o.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [
                    (0, l.jsx)(c.QWc, {
                        variant: "secondary",
                        disabled: 0 === t,
                        text: "Back",
                        onClick: () => {
                            a(t - 1);
                        },
                    }),
                    (0, l.jsx)("div", {
                        className: u.pageNumbers,
                        children: (0, l.jsx)(o.Kp, {
                            direction: "horizontal",
                            justify: "center",
                            align: "center",
                            children: p,
                        }),
                    }),
                    (0, l.jsx)(c.QWc, {
                        variant: "secondary",
                        disabled: t === r - 1,
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
        let { columns: t = 3, paginationOptions: r, children: a } = e,
            { paginationStrategy: c = d.o.PAGINATE, perPage: i, paginationPosition: o = "bottom" } = r ?? {},
            h = c === d.o.TRUNCATE,
            A = Math.max(1, Math.min(m, Math.floor(t))),
            [g, f] = n.useState(0),
            [E, v] = n.useState(i),
            [S, y] = n.useState(n.Children.count(a)),
            x = n.Children.count(a),
            T = null == i || i < 1 ? 0 : Math.ceil(x / i),
            C = null != i && i > 0,
            _ = !h && C && T > 1;
        (E !== i || S !== x) && (v(i), y(x), f(0));
        let j = n.useMemo(
            () => (C ? (h ? n.Children.toArray(a).slice(0, i) : n.Children.toArray(a).slice(i * g, i * (g + 1))) : a),
            [g, i, a, C, h],
        );
        return (0, l.jsxs)(l.Fragment, {
            children: [
                _ && "top" === o && (0, l.jsx)(p, { page: g, pages: T, setPage: f }),
                (0, l.jsx)("div", {
                    className: u.gridContainer,
                    children: (0, l.jsx)("div", { className: s()(u.grid, u[`columns${A}`]), children: j }),
                }),
                _ && "bottom" === o && (0, l.jsx)(p, { page: g, pages: T, setPage: f }),
            ],
        });
    };
