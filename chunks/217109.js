l.d(t, { Ay: () => v, JZ: () => E, Mm: () => h, Wk: () => A, hi: () => p, oP: () => f });
var r = l(627968),
    n = l(64700),
    a = l(503698),
    s = l.n(a),
    i = l(123292),
    c = l(770178),
    d = l(152858),
    o = l(498381),
    u = l(682124);
let h = 6,
    m = (e) => {
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
            h = (0, c.w)((e) => {
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
                        ? (0, r.jsx)(m, { index: e, active: t === e, setPage: a }, e)
                        : (0, r.jsx)(
                              "div",
                              {
                                  className: u.page,
                                  children: (0, r.jsx)(o.Ni, { variant: "text-md/bold", content: "..." }),
                              },
                              `ellipsis-${l}`,
                          ),
                );
            }, [t, l, a, s]);
        return (0, r.jsx)("div", {
            ref: h,
            className: u.pagination,
            children: (0, r.jsxs)(o.Ym, {
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
                        children: (0, r.jsx)(o.Ym, {
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
    E = () => n.useContext(g);
function f(e, t, l, r) {
    return null == t || null == l ? e : r ? e.slice(0, l) : e.slice(l * t, l * (t + 1));
}
let A = (e, t, l) => {
        let {
                paginationStrategy: r = d.oV.PAGINATE,
                perPage: a,
                paginationPosition: s = "bottom",
                scrollToTop: i = !0,
            } = t ?? {},
            c = r === d.oV.TRUNCATE,
            [o, u] = n.useState(0),
            [h, m] = n.useState(a),
            [p, g] = n.useState(e),
            E = null == a || a < 1 ? 0 : Math.ceil(e / a),
            f = null != a && a > 0;
        return (
            (h !== a || p !== e) && (m(a), g(e), u(0)),
            {
                page: o,
                pages: E,
                paginate: f,
                showPagination: !c && f && E > 1,
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
    v = (e) => {
        let { columns: t = 3, paginationOptions: l, children: a } = e,
            i = Math.max(1, Math.min(h, Math.floor(t))),
            c = n.Children.count(a),
            d = n.useRef(null),
            {
                page: o,
                pages: m,
                paginate: E,
                showPagination: v,
                paginationPosition: x,
                truncate: T,
                perPage: S,
                setPage: y,
            } = A(c, l, d),
            j = n.useMemo(() => f(n.Children.toArray(a), E ? o : void 0, S, T), [o, S, a, E, T]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                v && "top" === x && (0, r.jsx)(p, { page: o, pages: m, setPage: y }),
                (0, r.jsx)(g.Provider, {
                    value: l,
                    children: (0, r.jsx)("div", {
                        ref: d,
                        className: u.gridContainer,
                        children: (0, r.jsx)("div", { className: s()(u.grid, u[`columns${i}`]), children: j }),
                    }),
                }),
                v && "bottom" === x && (0, r.jsx)(p, { page: o, pages: m, setPage: y }),
            ],
        });
    };
