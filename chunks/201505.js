(a.d(t, { A: () => y }), a(321073));
var n = a(477900),
    r = a(582128),
    l = a(503698),
    i = a.n(l),
    o = a(536637),
    s = a.n(o),
    u = a(843282),
    c = a(452027),
    d = a(660183),
    p = a(270907);
let A = s()().localeData().months(),
    E = Array.from(Array(31).keys()).map((e) => ({ value: e + 1, label: `${e + 1}` })),
    h = Array.from(Array(12).keys()).map((e) => ({ value: e + 1, label: A[e] })),
    _ = /[a-zA-Z0-9]/;
function f(e) {
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
            if (_.test(e.key)) {
                let n = `${i}${e.key.toLowerCase()}`,
                    r = t.find((e) => e.label.toLowerCase().startsWith(n));
                (null != r && a(r.value), o(n));
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
let y = function (e) {
    let t,
        a,
        {
            value: l,
            wrapperClassName: o,
            onChange: A,
            onPopulated: _,
            error: y,
            autoFocus: m,
            required: G,
            onFocus: g,
            onBlur: x,
            name: k,
        } = e,
        {
            day: N,
            setDay: b,
            month: R,
            setMonth: D,
            year: v,
            setYear: O,
        } = (function (e) {
            let t = null,
                a = null,
                n = null;
            null != e && ((t = e.date()), (a = e.month() + 1), (n = e.year()));
            let [l, i] = r.useState(t),
                [o, s] = r.useState(a),
                [u, c] = r.useState(n);
            return { day: l, setDay: i, month: o, setMonth: s, year: u, setYear: c };
        })(l),
        C = r.useMemo(
            () => (null != N && null != R && null != v ? s()(`${N}/${R}/${v}`, "DD/MM/YYYY") : null),
            [N, R, v],
        );
    r.useEffect(() => {
        A(C?.isValid() ? C : null);
    }, [C, A]);
    let U = y;
    null == C || C.isValid() || (U = d.intl.string(d.t.udnqh6));
    let S =
            ((t = new Date().getFullYear()),
            (a = r.useRef(Array.from(Array(101).keys()).map((e) => ({ value: t - e, label: `${t - e}` })))),
            r.useEffect(() => {
                a.current = Array.from(Array(101).keys()).map((e) => ({ value: t - e, label: `${t - e}` }));
            }, [t]),
            a.current),
        [$, j] = r.useState(m ? 0 : -1),
        I = r.useMemo(T, []),
        M = { onPopulated: _, sortedInputs: I },
        w = r.useRef(M);
    (r.useEffect(() => {
        w.current = M;
    }),
        r.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = w.current;
            if ($ >= t.length) return void e?.();
        }, [$]));
    let W = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = I[e];
        switch (t) {
            case "day":
                W.push({
                    key: "day",
                    input: (0, n.jsx)(f, {
                        options: E,
                        selectOption: b,
                        children: (0, n.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.Voklre),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.Voklre),
                            options: E,
                            value: N,
                            onChange: (t) => {
                                (b(t), j(e + 1));
                            },
                            maxVisibleItems: 6,
                            autoFocus: $ === e,
                            required: G,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "month":
                W.push({
                    key: "month",
                    input: (0, n.jsx)(f, {
                        options: h,
                        selectOption: D,
                        children: (0, n.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.UDlN8W),
                            options: h,
                            value: R,
                            onChange: (t) => {
                                (D(t), j(e + 1));
                            },
                            maxVisibleItems: 6,
                            autoFocus: $ === e,
                            required: G,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "year":
                W.push({
                    key: "year",
                    input: (0, n.jsx)(f, {
                        options: S,
                        selectOption: O,
                        children: (0, n.jsx)(u.Te, {
                            "aria-label": d.intl.string(d.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.ZWr5WA),
                            options: S,
                            value: v,
                            onChange: (t) => {
                                (O(t), j(e + 1));
                            },
                            maxVisibleItems: 6,
                            autoFocus: $ === e,
                            required: G,
                            "data-migration-pending": !0,
                        }),
                    }),
                });
        }
    }
    return (0, n.jsx)("fieldset", {
        className: i()(p.container, o),
        children: (0, n.jsx)(c.D, {
            label: d.intl.string(d.t.xNpFJ6),
            required: G,
            errorMessage: U ?? void 0,
            children: (0, n.jsx)("div", {
                className: p.inputs,
                children: W.map((e) => {
                    let { key: t, input: a } = e;
                    return (0, n.jsx)(
                        "div",
                        {
                            className: p[t],
                            onFocus: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || g?.(`${k}_${t}`);
                            },
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || x?.(`${k}_${t}`);
                            },
                            children: a,
                        },
                        t,
                    );
                }),
            }),
        }),
    });
};
