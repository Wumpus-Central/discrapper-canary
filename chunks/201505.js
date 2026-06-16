a.d(t, { A: () => m }), a(321073);
var n = a(627968),
    r = a(64700),
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
        [i, o] = r.useState("");
    r.useEffect(() => {
        if ("" !== i) {
            let e = setTimeout(() => o(""), 1e3);
            return () => clearTimeout(e);
        }
    }, [i, o]);
    let s = r.useCallback(
        (e) => {
            if (f.test(e.key)) {
                let n = `${i}${e.key.toLowerCase()}`,
                    r = t.find((e) => e.label.toLowerCase().startsWith(n));
                null != r && a(r.value), o(n);
            }
        },
        [a, o, i, t],
    );
    return (0, n.jsx)("div", { onKeyDown: s, children: l });
}
function T() {
    let e = s()().localeData().longDateFormat("L"),
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
let m = r.forwardRef(function (e, t) {
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
            name: b,
        } = e,
        {
            day: N,
            setDay: D,
            month: R,
            setMonth: v,
            year: O,
            setYear: C,
        } = (function (e) {
            let t = null,
                a = null,
                n = null;
            null != e && ((t = e.date()), (a = e.month() + 1), (n = e.year()));
            let [l, i] = r.useState(t),
                [o, s] = r.useState(a),
                [u, c] = r.useState(n);
            return { day: l, setDay: i, month: o, setMonth: s, year: u, setYear: c };
        })(o),
        U = r.useMemo(
            () => (null != N && null != R && null != O ? s()(`${N}/${R}/${O}`, "DD/MM/YYYY") : null),
            [N, R, O],
        );
    r.useEffect(() => {
        f(U?.isValid() ? U : null);
    }, [U, f]);
    let M = y;
    null == U || U.isValid() || (M = d.intl.string(d.t.udnqh6));
    let S =
            ((a = new Date().getFullYear()),
            (l = r.useRef(Array.from(Array(101).keys()).map((e) => ({ value: a - e, label: `${a - e}` })))),
            r.useEffect(() => {
                l.current = Array.from(Array(101).keys()).map((e) => ({ value: a - e, label: `${a - e}` }));
            }, [a]),
            l.current),
        [I, $] = r.useState(G ? 0 : -1),
        j = r.useMemo(T, []),
        w = { onPopulated: m, sortedInputs: j },
        W = r.useRef(w);
    r.useEffect(() => {
        W.current = w;
    }),
        r.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = W.current;
            if (I >= t.length) return void e?.();
        }, [I]);
    let Y = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = j[e];
        switch (t) {
            case "day":
                Y.push({
                    key: "day",
                    input: (0, n.jsx)(_, {
                        options: E,
                        selectOption: D,
                        children: (0, n.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.Voklre),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.Voklre),
                            options: E,
                            value: N,
                            onChange: (t) => {
                                D(t), $(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: I === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "month":
                Y.push({
                    key: "month",
                    input: (0, n.jsx)(_, {
                        options: h,
                        selectOption: v,
                        children: (0, n.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.UDlN8W),
                            options: h,
                            value: R,
                            onChange: (t) => {
                                v(t), $(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: I === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "year":
                Y.push({
                    key: "year",
                    input: (0, n.jsx)(_, {
                        options: S,
                        selectOption: C,
                        children: (0, n.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.ZWr5WA),
                            options: S,
                            value: O,
                            onChange: (t) => {
                                C(t), $(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: I === e,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
        }
    }
    return (0, n.jsx)("fieldset", {
        className: i()(p.container, A),
        children: (0, n.jsx)(c.D, {
            label: d.intl.string(d.t.xNpFJ6),
            required: g,
            errorMessage: M ?? void 0,
            children: (0, n.jsx)("div", {
                className: p.inputs,
                children: Y.map((e, t) => {
                    let { key: a, input: r } = e;
                    return (0, n.jsx)(
                        "div",
                        {
                            tabIndex: t + 1,
                            className: p[a],
                            onFocus: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || x?.(`${b}_${a}`);
                            },
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || k?.(`${b}_${a}`);
                            },
                            children: r,
                        },
                        a,
                    );
                }),
            }),
        }),
    });
});
