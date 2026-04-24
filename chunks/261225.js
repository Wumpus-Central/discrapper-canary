"use strict";
r.d(t, { Ay: () => E, JZ: () => v, Mm: () => h, Wk: () => A, hi: () => p, oP: () => f });
var l = r(627968),
    s = r(64700),
    n = r(503698),
    a = r.n(n),
    i = r(123292),
    c = r(770178),
    u = r(204990),
    d = r(219561),
    o = r(882724);
let h = 6,
    m = (e) => {
        let { index: t, active: r, setPage: s } = e;
        return (0, l.jsx)("div", {
            className: a()(o.page, { [o.active]: r }),
            children: (0, l.jsx)(i.Q, {
                role: "button",
                variant: r ? "always-white" : "secondary",
                size: "sm",
                text: (t + 1).toString(),
                onClick: () => s(t),
            }),
        });
    },
    p = (e) => {
        let { page: t, pages: r, setPage: n } = e,
            [a, u] = s.useState(0),
            h = (0, c.w)((e) => {
                let { contentRect: t } = e;
                u(t.width);
            }),
            p = s.useMemo(() => {
                let e;
                if (null == r || r < 1) return null;
                let s = Math.min(8, Math.max(3, Math.floor((a - 160) / 32)));
                if (r <= s) e = Array.from({ length: r }, (e, t) => t);
                else {
                    let l = s - 2,
                        n = Math.max(1, t - Math.floor(l / 2)),
                        a = Math.min(r - 2, n + l - 1);
                    n = Math.max(1, a - l + 1);
                    let i = Array.from({ length: l }, (e, t) => n + t);
                    n > 1 && (i[0] = "ellipsis"), a < r - 2 && (i[i.length - 1] = "ellipsis"), (e = [0, ...i, r - 1]);
                }
                return e.map((e, r) =>
                    "number" == typeof e
                        ? (0, l.jsx)(m, { index: e, active: t === e, setPage: n }, e)
                        : (0, l.jsx)(
                              "div",
                              {
                                  className: o.page,
                                  children: (0, l.jsx)(d.t, { variant: "text-md/bold", content: "..." }),
                              },
                              `ellipsis-${r}`,
                          ),
                );
            }, [t, r, n, a]);
        return (0, l.jsx)("div", {
            ref: h,
            className: o.pagination,
            children: (0, l.jsxs)(d.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [
                    (0, l.jsx)(i.Q, {
                        variant: "secondary",
                        disabled: 0 === t,
                        text: "Back",
                        onClick: () => {
                            n(t - 1);
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
                    (0, l.jsx)(i.Q, {
                        variant: "secondary",
                        disabled: t === r - 1,
                        text: "Next",
                        onClick: () => {
                            n(t + 1);
                        },
                    }),
                ],
            }),
        });
    },
    g = s.createContext(void 0),
    v = () => s.useContext(g);
function f(e, t, r, l) {
    return null == t || null == r ? e : l ? e.slice(0, r) : e.slice(r * t, r * (t + 1));
}
let A = (e, t, r) => {
        let {
                paginationStrategy: l = u.o.PAGINATE,
                perPage: n,
                paginationPosition: a = "bottom",
                scrollToTop: i = !0,
            } = t ?? {},
            c = l === u.o.TRUNCATE,
            [d, o] = s.useState(0),
            [h, m] = s.useState(n),
            [p, g] = s.useState(e),
            v = null == n || n < 1 ? 0 : Math.ceil(e / n),
            f = null != n && n > 0;
        return (
            (h !== n || p !== e) && (m(n), g(e), o(0)),
            {
                page: d,
                pages: v,
                paginate: f,
                showPagination: !c && f && v > 1,
                paginationPosition: a,
                truncate: c,
                perPage: n,
                setPage: s.useCallback(
                    (e) => {
                        o(e),
                            i &&
                                r?.current != null &&
                                r.current.scrollIntoView({ behavior: "instant", block: "start" });
                    },
                    [i, r],
                ),
            }
        );
    },
    E = (e) => {
        let { columns: t = 3, paginationOptions: r, children: n } = e,
            i = Math.max(1, Math.min(h, Math.floor(t))),
            c = s.Children.count(n),
            u = s.useRef(null),
            {
                page: d,
                pages: m,
                paginate: v,
                showPagination: E,
                paginationPosition: x,
                truncate: y,
                perPage: C,
                setPage: S,
            } = A(c, r, u),
            T = s.useMemo(() => f(s.Children.toArray(n), v ? d : void 0, C, y), [d, C, n, v, y]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                E && "top" === x && (0, l.jsx)(p, { page: d, pages: m, setPage: S }),
                (0, l.jsx)(g.Provider, {
                    value: r,
                    children: (0, l.jsx)("div", {
                        ref: u,
                        className: o.gridContainer,
                        children: (0, l.jsx)("div", { className: a()(o.grid, o[`columns${i}`]), children: T }),
                    }),
                }),
                E && "bottom" === x && (0, l.jsx)(p, { page: d, pages: m, setPage: S }),
            ],
        });
    };
