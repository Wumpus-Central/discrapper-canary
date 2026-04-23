a.d(t, { A: () => A }), a(321073);
var n = a(627968),
    s = a(64700),
    i = a(503698),
    l = a.n(i),
    r = a(989349),
    o = a.n(r),
    c = a(843282),
    _ = a(452027),
    d = a(985018),
    u = a(629776);
let m = o()().localeData().months(),
    p = Array.from(Array(31).keys()).map((e) => ({ value: e + 1, label: `${e + 1}` })),
    f = Array.from(Array(12).keys()).map((e) => ({ value: e + 1, label: m[e] })),
    E = /[a-zA-Z0-9]/;
function h(e) {
    let { options: t, selectOption: a, children: i } = e,
        [l, r] = s.useState("");
    s.useEffect(() => {
        if ("" !== l) {
            let e = setTimeout(() => r(""), 1e3);
            return () => clearTimeout(e);
        }
    }, [l, r]);
    let o = s.useCallback(
        (e) => {
            if (E.test(e.key)) {
                let n = `${l}${e.key.toLowerCase()}`,
                    s = t.find((e) => e.label.toLowerCase().startsWith(n));
                null != s && a(s.value), r(n);
            }
        },
        [a, r, l, t],
    );
    return (0, n.jsx)("div", { onKeyDown: o, children: i });
}
function N() {
    let e = o()().localeData().longDateFormat("L"),
        t = e.indexOf("D"),
        a = e.indexOf("M"),
        n = e.indexOf("Y");
    return (
        (-1 === t || -1 === a || -1 === n) && ((t = 0), (a = 1), (n = 2)),
        [
            { index: t, type: "day" },
            { index: a, type: "month" },
            { index: n, type: "year" },
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let A = s.forwardRef(function (e, t) {
    let a,
        i,
        {
            value: r,
            wrapperClassName: m,
            onChange: E,
            onPopulated: A,
            error: b,
            autoFocus: x,
            required: T,
            onFocus: D,
            onBlur: j,
            name: C,
        } = e,
        {
            day: I,
            setDay: g,
            month: y,
            setMonth: G,
            year: v,
            setYear: L,
        } = (function (e) {
            let t = null,
                a = null,
                n = null;
            null != e && ((t = e.date()), (a = e.month() + 1), (n = e.year()));
            let [i, l] = s.useState(t),
                [r, o] = s.useState(a),
                [c, _] = s.useState(n);
            return { day: i, setDay: l, month: r, setMonth: o, year: c, setYear: _ };
        })(r),
        U = s.useMemo(
            () => (null != I && null != y && null != v ? o()(`${I}/${y}/${v}`, "DD/MM/YYYY") : null),
            [I, y, v],
        );
    s.useEffect(() => {
        E(U?.isValid() ? U : null);
    }, [U, E]);
    let k = b;
    null == U || U.isValid() || (k = d.intl.string(d.t.udnqh6));
    let O =
            ((a = new Date().getFullYear()),
            (i = s.useRef(Array.from(Array(150).keys()).map((e) => ({ value: a - e - 3, label: `${a - e - 3}` })))),
            s.useEffect(() => {
                i.current = Array.from(Array(150).keys()).map((e) => ({ value: a - e - 3, label: `${a - e - 3}` }));
            }, [a]),
            i.current),
        [S, R] = s.useState(x ? 0 : -1),
        M = s.useMemo(N, []),
        w = { onPopulated: A, sortedInputs: M },
        W = s.useRef(w);
    s.useEffect(() => {
        W.current = w;
    }),
        s.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = W.current;
            if (S >= t.length) return void e?.();
        }, [S]);
    let P = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = M[e];
        switch (t) {
            case "day":
                P.push({
                    key: "day",
                    input: (0, n.jsx)(h, {
                        options: p,
                        selectOption: g,
                        children: (0, n.jsx)(c.Te, {
                            "aria-label": d.intl.string(d.t.Voklre),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.Voklre),
                            options: p,
                            value: I,
                            onChange: (t) => {
                                g(t), R(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: S === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "month":
                P.push({
                    key: "month",
                    input: (0, n.jsx)(h, {
                        options: f,
                        selectOption: G,
                        children: (0, n.jsx)(c.Te, {
                            "aria-label": d.intl.string(d.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.UDlN8W),
                            options: f,
                            value: y,
                            onChange: (t) => {
                                G(t), R(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: S === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "year":
                P.push({
                    key: "year",
                    input: (0, n.jsx)(h, {
                        options: O,
                        selectOption: L,
                        children: (0, n.jsx)(c.Te, {
                            "aria-label": d.intl.string(d.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.ZWr5WA),
                            options: O,
                            value: v,
                            onChange: (t) => {
                                L(t), R(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: S === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
        }
    }
    return (0, n.jsx)("fieldset", {
        className: l()(u.container, m),
        children: (0, n.jsx)(_.D, {
            label: d.intl.string(d.t.xNpFJ6),
            required: T,
            errorMessage: k ?? void 0,
            children: (0, n.jsx)("div", {
                className: u.inputs,
                children: P.map((e, t) => {
                    let { key: a, input: s } = e;
                    return (0, n.jsx)(
                        "div",
                        {
                            tabIndex: t + 1,
                            className: u[a],
                            onFocus: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || D?.(`${C}_${a}`);
                            },
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || j?.(`${C}_${a}`);
                            },
                            children: s,
                        },
                        a,
                    );
                }),
            }),
        }),
    });
});
