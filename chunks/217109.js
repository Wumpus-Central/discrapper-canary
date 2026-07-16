n.d(t, { Ay: () => A, JZ: () => g, Mm: () => h, Wk: () => v, hi: () => p, oP: () => E });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    i = n(123292),
    c = n(770178),
    o = n(152858),
    u = n(498381),
    d = n(682124);
let h = 6;
function m(e) {
    let { index: t, active: n, setPage: l } = e;
    return (0, r.jsx)("div", {
        className: s()(d.page, { [d.active]: n }),
        children: (0, r.jsx)(i.Q, {
            role: "button",
            variant: n ? "always-white" : "secondary",
            size: "sm",
            text: (t + 1).toString(),
            onClick: () => l(t),
        }),
    });
}
function p(e) {
    let { page: t, pages: n, setPage: a } = e,
        [s, o] = l.useState(0),
        h = (0, c.w)((e) => {
            let { contentRect: t } = e;
            o(t.width);
        }),
        p = l.useMemo(() => {
            let e;
            if (null == n || n < 1) return null;
            let l = Math.min(8, Math.max(3, Math.floor((s - 160) / 32)));
            if (n <= l) e = Array.from({ length: n }, (e, t) => t);
            else {
                let r = l - 2,
                    a = Math.max(1, t - Math.floor(r / 2)),
                    s = Math.min(n - 2, a + r - 1);
                a = Math.max(1, s - r + 1);
                let i = Array.from({ length: r }, (e, t) => a + t);
                a > 1 && (i[0] = "ellipsis"), s < n - 2 && (i[i.length - 1] = "ellipsis"), (e = [0, ...i, n - 1]);
            }
            return e.map((e, n) =>
                "number" == typeof e
                    ? (0, r.jsx)(m, { index: e, active: t === e, setPage: a }, e)
                    : (0, r.jsx)(
                          "div",
                          {
                              className: d.page,
                              children: (0, r.jsx)(u.Ni, { variant: "text-md/bold", content: "..." }),
                          },
                          `ellipsis-${n}`,
                      ),
            );
        }, [t, n, a, s]);
    return (0, r.jsx)("div", {
        ref: h,
        className: d.pagination,
        children: (0, r.jsxs)(u.Ym, {
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
                    className: d.pageNumbers,
                    children: (0, r.jsx)(u.Ym, {
                        direction: "horizontal",
                        justify: "center",
                        align: "center",
                        children: p,
                    }),
                }),
                (0, r.jsx)(i.Q, {
                    variant: "secondary",
                    disabled: t === n - 1,
                    text: "Next",
                    onClick: () => {
                        a(t + 1);
                    },
                }),
            ],
        }),
    });
}
let f = l.createContext(void 0);
function g() {
    return l.useContext(f);
}
function E(e, t, n, r) {
    return null == t || null == n ? e : r ? e.slice(0, n) : e.slice(n * t, n * (t + 1));
}
function v(e, t, n) {
    let {
            paginationStrategy: r = o.oV.PAGINATE,
            perPage: a,
            paginationPosition: s = "bottom",
            scrollToTop: i = !0,
        } = t ?? {},
        c = r === o.oV.TRUNCATE,
        [u, d] = l.useState(0),
        [h, m] = l.useState(a),
        [p, f] = l.useState(e),
        g = null == a || a < 1 ? 0 : Math.ceil(e / a),
        E = null != a && a > 0;
    return (
        (h !== a || p !== e) && (m(a), f(e), d(0)),
        {
            page: u,
            pages: g,
            paginate: E,
            showPagination: !c && E && g > 1,
            paginationPosition: s,
            truncate: c,
            perPage: a,
            setPage: l.useCallback(
                (e) => {
                    d(e), i && n?.current != null && n.current.scrollIntoView({ behavior: "instant", block: "start" });
                },
                [i, n],
            ),
        }
    );
}
let A = function (e) {
    let { columns: t = 3, paginationOptions: n, children: a } = e,
        i = Math.max(1, Math.min(h, Math.floor(t))),
        c = l.Children.count(a),
        o = l.useRef(null),
        {
            page: u,
            pages: m,
            paginate: g,
            showPagination: A,
            paginationPosition: x,
            truncate: T,
            perPage: S,
            setPage: y,
        } = v(c, n, o),
        j = l.useMemo(() => E(l.Children.toArray(a), g ? u : void 0, S, T), [u, S, a, g, T]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A && "top" === x && (0, r.jsx)(p, { page: u, pages: m, setPage: y }),
            (0, r.jsx)(f.Provider, {
                value: n,
                children: (0, r.jsx)("div", {
                    ref: o,
                    className: d.gridContainer,
                    children: (0, r.jsx)("div", { className: s()(d.grid, d[`columns${i}`]), children: j }),
                }),
            }),
            A && "bottom" === x && (0, r.jsx)(p, { page: u, pages: m, setPage: y }),
        ],
    });
};
