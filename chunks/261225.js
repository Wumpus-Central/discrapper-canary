r.d(t, { A: () => p, M: () => u });
var l = r(627968),
    n = r(64700),
    a = r(503698),
    s = r.n(a),
    c = r(732955),
    i = r(770178),
    d = r(219561),
    o = r(882724);
let u = 6,
    m = (e) => {
        let { index: t, active: r, setPage: n } = e;
        return (0, l.jsx)("div", {
            className: s()(o.page, { [o.active]: r }),
            children: (0, l.jsx)(c.QWc, {
                role: "button",
                variant: r ? "always-white" : "secondary",
                size: "sm",
                text: (t + 1).toString(),
                onClick: () => n(t),
            }),
        });
    },
    h = (e) => {
        let { page: t, pages: r, setPage: a } = e,
            [s, u] = n.useState(0),
            h = (0, i.w)((e) => {
                let { contentRect: t } = e;
                u(t.width);
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
                        ? (0, l.jsx)(m, { index: e, active: t === e, setPage: a }, e)
                        : (0, l.jsx)(
                              "div",
                              {
                                  className: o.page,
                                  children: (0, l.jsx)(d.t, { variant: "text-md/bold", content: "..." }),
                              },
                              `ellipsis-${r}`,
                          ),
                );
            }, [t, r, a, s]);
        return (0, l.jsx)("div", {
            ref: h,
            className: o.pagination,
            children: (0, l.jsxs)(d.Kp, {
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
                        className: o.pageNumbers,
                        children: (0, l.jsx)(d.Kp, {
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
    p = (e) => {
        let { columns: t = 3, perPage: r, paginationPosition: a = "bottom", children: c } = e,
            i = Math.max(1, Math.min(u, Math.floor(t))),
            [d, m] = n.useState(0),
            [p, A] = n.useState(r),
            [g, f] = n.useState(n.Children.count(c)),
            E = n.Children.count(c),
            v = null == r || r < 1 ? 0 : Math.ceil(E / r),
            S = null != r && r > 0,
            y = S && v > 1;
        (p !== r || g !== E) && (A(r), f(E), m(0));
        let x = n.useMemo(() => (S ? n.Children.toArray(c).slice(r * d, r * (d + 1)) : c), [d, r, c, S]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                y && "top" === a && (0, l.jsx)(h, { page: d, pages: v, setPage: m }),
                (0, l.jsx)("div", {
                    className: o.gridContainer,
                    children: (0, l.jsx)("div", { className: s()(o.grid, o[`columns${i}`]), children: x }),
                }),
                y && "bottom" === a && (0, l.jsx)(h, { page: d, pages: v, setPage: m }),
            ],
        });
    };
