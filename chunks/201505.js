"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(989349),
    o = n.n(a),
    c = n(843282),
    d = n(452027),
    u = n(985018),
    _ = n(629776);
let h = o()().localeData().months(),
    m = Array.from(Array(31).keys()).map((e) => ({ value: e + 1, label: `${e + 1}` })),
    g = Array.from(Array(12).keys()).map((e) => ({ value: e + 1, label: h[e] })),
    p = /[a-zA-Z0-9]/;
function A(e) {
    let { options: t, selectOption: n, children: r } = e,
        [l, a] = s.useState("");
    s.useEffect(() => {
        if ("" !== l) {
            let e = setTimeout(() => a(""), 1e3);
            return () => clearTimeout(e);
        }
    }, [l, a]);
    let o = s.useCallback(
        (e) => {
            if (p.test(e.key)) {
                let i = `${l}${e.key.toLowerCase()}`,
                    s = t.find((e) => e.label.toLowerCase().startsWith(i));
                null != s && n(s.value), a(i);
            }
        },
        [n, a, l, t],
    );
    return (0, i.jsx)("div", { onKeyDown: o, children: r });
}
function f() {
    let e = o()().localeData().longDateFormat("L"),
        t = e.indexOf("D"),
        n = e.indexOf("M"),
        i = e.indexOf("Y");
    return (
        (-1 === t || -1 === n || -1 === i) && ((t = 0), (n = 1), (i = 2)),
        [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: i, type: "year" },
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let E = s.forwardRef(function (e, t) {
    let n,
        r,
        {
            value: a,
            wrapperClassName: h,
            onChange: p,
            onPopulated: E,
            error: x,
            autoFocus: I,
            required: v,
            onFocus: N,
            onBlur: j,
            name: C,
        } = e,
        {
            day: T,
            setDay: y,
            month: b,
            setMonth: S,
            year: R,
            setYear: O,
        } = (function (e) {
            let t = null,
                n = null,
                i = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (i = e.year()));
            let [r, l] = s.useState(t),
                [a, o] = s.useState(n),
                [c, d] = s.useState(i);
            return { day: r, setDay: l, month: a, setMonth: o, year: c, setYear: d };
        })(a),
        L = s.useMemo(
            () => (null != T && null != b && null != R ? o()(`${T}/${b}/${R}`, "DD/MM/YYYY") : null),
            [T, b, R],
        );
    s.useEffect(() => {
        p(L?.isValid() ? L : null);
    }, [L, p]);
    let w = x;
    null == L || L.isValid() || (w = u.intl.string(u.t.udnqh6));
    let k =
            ((n = new Date().getFullYear()),
            (r = s.useRef(Array.from(Array(150).keys()).map((e) => ({ value: n - e - 3, label: `${n - e - 3}` })))),
            s.useEffect(() => {
                r.current = Array.from(Array(150).keys()).map((e) => ({ value: n - e - 3, label: `${n - e - 3}` }));
            }, [n]),
            r.current),
        [G, D] = s.useState(I ? 0 : -1),
        P = s.useMemo(f, []),
        U = { onPopulated: E, sortedInputs: P },
        B = s.useRef(U);
    s.useEffect(() => {
        B.current = U;
    }),
        s.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = B.current;
            if (G >= t.length) return void e?.();
        }, [G]);
    let M = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = P[e];
        switch (t) {
            case "day":
                M.push({
                    key: "day",
                    input: (0, i.jsx)(A, {
                        options: m,
                        selectOption: y,
                        children: (0, i.jsx)(c.Te, {
                            "aria-label": u.intl.string(u.t.Voklre),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.Voklre),
                            options: m,
                            value: T,
                            onChange: (t) => {
                                y(t), D(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: G === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "month":
                M.push({
                    key: "month",
                    input: (0, i.jsx)(A, {
                        options: g,
                        selectOption: S,
                        children: (0, i.jsx)(c.Te, {
                            "aria-label": u.intl.string(u.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.UDlN8W),
                            options: g,
                            value: b,
                            onChange: (t) => {
                                S(t), D(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: G === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "year":
                M.push({
                    key: "year",
                    input: (0, i.jsx)(A, {
                        options: k,
                        selectOption: O,
                        children: (0, i.jsx)(c.Te, {
                            "aria-label": u.intl.string(u.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.ZWr5WA),
                            options: k,
                            value: R,
                            onChange: (t) => {
                                O(t), D(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: G === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
        }
    }
    return (0, i.jsx)("fieldset", {
        className: l()(_.container, h),
        children: (0, i.jsx)(d.D, {
            label: u.intl.string(u.t.xNpFJ6),
            required: v,
            errorMessage: w ?? void 0,
            children: (0, i.jsx)("div", {
                className: _.inputs,
                children: M.map((e, t) => {
                    let { key: n, input: s } = e;
                    return (0, i.jsx)(
                        "div",
                        {
                            tabIndex: t + 1,
                            className: _[n],
                            onFocus: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || N?.(`${C}_${n}`);
                            },
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || j?.(`${C}_${n}`);
                            },
                            children: s,
                        },
                        n,
                    );
                }),
            }),
        }),
    });
});
