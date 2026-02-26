l.d(t, { A: () => p, M: () => i });
var r = l(627968),
    a = l(64700),
    d = l(503698),
    c = l.n(d),
    n = l(732955),
    o = l(770178),
    s = l(458306),
    u = l(973207);
let i = 6,
    h = (e) => {
        let { index: t, active: l, setPage: a } = e;
        return (0, r.jsx)("div", {
            className: c()(u.page, { [u.active]: l }),
            children: (0, r.jsx)(n.QWc, {
                role: "button",
                variant: l ? "always-white" : "secondary",
                size: "sm",
                text: (t + 1).toString(),
                onClick: () => a(t),
            }),
        });
    },
    m = (e) => {
        let { page: t, pages: l, setPage: d } = e,
            [c, i] = a.useState(0),
            m = (0, o.w)((e) => {
                let { contentRect: t } = e;
                i(t.width);
            }),
            p = a.useMemo(() => {
                let e;
                if (null == l || l < 1) return null;
                let a = Math.min(8, Math.max(3, Math.floor((c - 160) / 32)));
                if (l <= a) e = Array.from({ length: l }, (e, t) => t);
                else {
                    let r = a - 2,
                        d = Math.max(1, t - Math.floor(r / 2)),
                        c = Math.min(l - 2, d + r - 1);
                    d = Math.max(1, c - r + 1);
                    let n = Array.from({ length: r }, (e, t) => d + t);
                    d > 1 && (n[0] = "ellipsis"), c < l - 2 && (n[n.length - 1] = "ellipsis"), (e = [0, ...n, l - 1]);
                }
                return e.map((e, l) =>
                    "number" == typeof e
                        ? (0, r.jsx)(h, { index: e, active: t === e, setPage: d }, e)
                        : (0, r.jsx)(
                              "div",
                              {
                                  className: u.page,
                                  children: (0, r.jsx)(s.t, { variant: "text-md/bold", content: "..." }),
                              },
                              `ellipsis-${l}`,
                          ),
                );
            }, [t, l, d, c]);
        return (0, r.jsx)("div", {
            ref: m,
            className: u.pagination,
            children: (0, r.jsxs)(s.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [
                    (0, r.jsx)(n.QWc, {
                        variant: "secondary",
                        disabled: 0 === t,
                        text: "Back",
                        onClick: () => {
                            d(t - 1);
                        },
                    }),
                    (0, r.jsx)("div", {
                        className: u.pageNumbers,
                        children: (0, r.jsx)(s.Kp, {
                            direction: "horizontal",
                            justify: "center",
                            align: "center",
                            children: p,
                        }),
                    }),
                    (0, r.jsx)(n.QWc, {
                        variant: "secondary",
                        disabled: t === l - 1,
                        text: "Next",
                        onClick: () => {
                            d(t + 1);
                        },
                    }),
                ],
            }),
        });
    },
    p = (e) => {
        let { columns: t = 3, perPage: l, paginationPosition: d = "bottom", children: n } = e,
            o = Math.max(1, Math.min(i, Math.floor(t))),
            [s, h] = a.useState(0),
            [p, k] = a.useState(l),
            [b, S] = a.useState(a.Children.count(n)),
            A = a.Children.count(n),
            f = null == l || l < 1 ? 0 : Math.ceil(A / l),
            y = null != l && l > 0,
            C = y && f > 1;
        (p !== l || b !== A) && (k(l), S(A), h(0));
        let v = a.useMemo(() => (y ? a.Children.toArray(n).slice(l * s, l * (s + 1)) : n), [s, l, n, y]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                C && "top" === d && (0, r.jsx)(m, { page: s, pages: f, setPage: h }),
                (0, r.jsx)("div", { className: c()(u.grid, u[`columns${o}`]), children: v }),
                C && "bottom" === d && (0, r.jsx)(m, { page: s, pages: f, setPage: h }),
            ],
        });
    };
