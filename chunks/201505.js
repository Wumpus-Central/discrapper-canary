a.d(t, { A: () => m }), a(321073);
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    o = a(989349),
    s = a.n(o),
    u = a(843282),
    c = a(452027),
    d = a(375708),
    p = a(629776);
let A = s()().localeData().months(),
    E = Array.from(Array(31).keys()).map((e) => ({ value: e + 1, label: `${e + 1}` })),
    h = Array.from(Array(12).keys()).map((e) => ({ value: e + 1, label: A[e] })),
    f = /[a-zA-Z0-9]/;
function _(e) {
    let { options: t, selectOption: a, children: l } = e,
        [i, o] = n.useState("");
    n.useEffect(() => {
        if ("" !== i) {
            let e = setTimeout(() => o(""), 1e3);
            return () => clearTimeout(e);
        }
    }, [i, o]);
    let s = n.useCallback(
        (e) => {
            if (f.test(e.key)) {
                let r = `${i}${e.key.toLowerCase()}`,
                    n = t.find((e) => e.label.toLowerCase().startsWith(r));
                null != n && a(n.value), o(r);
            }
        },
        [a, o, i, t],
    );
    return (0, r.jsx)("div", { onKeyDown: s, children: l });
}
function T() {
    let e = s()().localeData().longDateFormat("L"),
        t = e.indexOf("D"),
        a = e.indexOf("M"),
        r = e.indexOf("Y");
    return (
        (-1 === t || -1 === a || -1 === r) && ((t = 0), (a = 1), (r = 2)),
        [
            { index: t, type: "day" },
            { index: a, type: "month" },
            { index: r, type: "year" },
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let m = n.forwardRef(function (e, t) {
    let a,
        l,
        {
            value: o,
            wrapperClassName: A,
            onChange: f,
            onPopulated: m,
            error: y,
            autoFocus: G,
            required: g,
            onFocus: x,
            onBlur: k,
            name: N,
        } = e,
        {
            day: b,
            setDay: D,
            month: R,
            setMonth: v,
            year: O,
            setYear: C,
        } = (function (e) {
            let t = null,
                a = null,
                r = null;
            null != e && ((t = e.date()), (a = e.month() + 1), (r = e.year()));
            let [l, i] = n.useState(t),
                [o, s] = n.useState(a),
                [u, c] = n.useState(r);
            return { day: l, setDay: i, month: o, setMonth: s, year: u, setYear: c };
        })(o),
        U = n.useMemo(
            () => (null != b && null != R && null != O ? s()(`${b}/${R}/${O}`, "DD/MM/YYYY") : null),
            [b, R, O],
        );
    n.useEffect(() => {
        f(U?.isValid() ? U : null);
    }, [U, f]);
    let M = y;
    null == U || U.isValid() || (M = d.intl.string(d.t.udnqh6));
    let S =
            ((a = new Date().getFullYear()),
            (l = n.useRef(Array.from(Array(101).keys()).map((e) => ({ value: a - e, label: `${a - e}` })))),
            n.useEffect(() => {
                l.current = Array.from(Array(101).keys()).map((e) => ({ value: a - e, label: `${a - e}` }));
            }, [a]),
            l.current),
        [$, j] = n.useState(G ? 0 : -1),
        w = n.useMemo(T, []),
        I = { onPopulated: m, sortedInputs: w },
        W = n.useRef(I);
    n.useEffect(() => {
        W.current = I;
    }),
        n.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = W.current;
            if ($ >= t.length) return void e?.();
        }, [$]);
    let Y = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = w[e];
        switch (t) {
            case "day":
                Y.push({
                    key: "day",
                    input: (0, r.jsx)(_, {
                        options: E,
                        selectOption: D,
                        children: (0, r.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.Voklre),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.Voklre),
                            options: E,
                            value: b,
                            onChange: (t) => {
                                D(t), j(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: $ === e,
                            required: g,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "month":
                Y.push({
                    key: "month",
                    input: (0, r.jsx)(_, {
                        options: h,
                        selectOption: v,
                        children: (0, r.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.UDlN8W),
                            options: h,
                            value: R,
                            onChange: (t) => {
                                v(t), j(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: $ === e,
                            required: g,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "year":
                Y.push({
                    key: "year",
                    input: (0, r.jsx)(_, {
                        options: S,
                        selectOption: C,
                        children: (0, r.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.ZWr5WA),
                            options: S,
                            value: O,
                            onChange: (t) => {
                                C(t), j(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: $ === e,
                            required: g,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
        }
    }
    return (0, r.jsx)("fieldset", {
        className: i()(p.container, A),
        children: (0, r.jsx)(c.D, {
            label: d.intl.string(d.t.xNpFJ6),
            required: g,
            errorMessage: M ?? void 0,
            children: (0, r.jsx)("div", {
                className: p.inputs,
                children: Y.map((e) => {
                    let { key: t, input: a } = e;
                    return (0, r.jsx)(
                        "div",
                        {
                            className: p[t],
                            onFocus: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || x?.(`${N}_${t}`);
                            },
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || k?.(`${N}_${t}`);
                            },
                            children: a,
                        },
                        t,
                    );
                }),
            }),
        }),
    });
});
