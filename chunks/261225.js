l.d(t, { Ay: () => E, JZ: () => f, Mm: () => m, Wk: () => v, hi: () => p, oP: () => A });
var r = l(627968),
    n = l(64700),
    a = l(503698),
    s = l.n(a),
    i = l(123292),
    c = l(770178),
    d = l(204990),
    o = l(219561),
    u = l(882724);
let m = 6,
    h = (e) => {
        let { index: t, active: l, setPage: n } = e;
        return (0, r.jsx)("div", {
            className: s()(u.page, { [u.active]: l }),
            children: (0, r.jsx)(i.Q, {
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
            m = (0, c.w)((e) => {
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
                    let i = Array.from({ length: r }, (e, t) => a + t);
                    a > 1 && (i[0] = "ellipsis"), s < l - 2 && (i[i.length - 1] = "ellipsis"), (e = [0, ...i, l - 1]);
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
                    (0, r.jsx)(i.Q, {
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
                    (0, r.jsx)(i.Q, {
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
    g = n.createContext(void 0),
    f = () => n.useContext(g);
function A(e, t, l, r) {
    return null == t || null == l ? e : r ? e.slice(0, l) : e.slice(l * t, l * (t + 1));
}
let v = (e, t, l) => {
        let {
                paginationStrategy: r = d.o.PAGINATE,
                perPage: a,
                paginationPosition: s = "bottom",
                scrollToTop: i = !0,
            } = t ?? {},
            c = r === d.o.TRUNCATE,
            [o, u] = n.useState(0),
            [m, h] = n.useState(a),
            [p, g] = n.useState(e),
            f = null == a || a < 1 ? 0 : Math.ceil(e / a),
            A = null != a && a > 0;
        return (
            (m !== a || p !== e) && (h(a), g(e), u(0)),
            {
                page: o,
                pages: f,
                paginate: A,
                showPagination: !c && A && f > 1,
                paginationPosition: s,
                truncate: c,
                perPage: a,
                setPage: n.useCallback(
                    (e) => {
                        u(e),
                            i &&
                                l?.current != null &&
                                l.current.scrollIntoView({ behavior: "instant", block: "start" });
                    },
                    [i, l],
                ),
            }
        );
    },
    E = (e) => {
        let { columns: t = 3, paginationOptions: l, children: a } = e,
            i = Math.max(1, Math.min(m, Math.floor(t))),
            c = n.Children.count(a),
            d = n.useRef(null),
            {
                page: o,
                pages: h,
                paginate: f,
                showPagination: E,
                paginationPosition: x,
                truncate: y,
                perPage: C,
                setPage: S,
            } = v(c, l, d),
            T = n.useMemo(() => A(n.Children.toArray(a), f ? o : void 0, C, y), [o, C, a, f, y]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                E && "top" === x && (0, r.jsx)(p, { page: o, pages: h, setPage: S }),
                (0, r.jsx)(g.Provider, {
                    value: l,
                    children: (0, r.jsx)("div", {
                        ref: d,
                        className: u.gridContainer,
                        children: (0, r.jsx)("div", { className: s()(u.grid, u[`columns${i}`]), children: T }),
                    }),
                }),
                E && "bottom" === x && (0, r.jsx)(p, { page: o, pages: h, setPage: S }),
            ],
        });
    };
