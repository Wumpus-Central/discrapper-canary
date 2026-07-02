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
                r = null;
            null != e && ((t = e.date()), (a = e.month() + 1), (r = e.year()));
            let [l, i] = n.useState(t),
                [o, s] = n.useState(a),
                [u, c] = n.useState(r);
            return { day: l, setDay: i, month: o, setMonth: s, year: u, setYear: c };
        })(o),
        U = n.useMemo(
            () => (null != N && null != R && null != O ? s()(`${N}/${R}/${O}`, "DD/MM/YYYY") : null),
            [N, R, O],
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
        [I, $] = n.useState(G ? 0 : -1),
        j = n.useMemo(T, []),
        w = { onPopulated: m, sortedInputs: j },
        W = n.useRef(w);
    n.useEffect(() => {
        W.current = w;
    }),
        n.useEffect(() => {
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
                    input: (0, r.jsx)(_, {
                        options: E,
                        selectOption: D,
                        children: (0, r.jsx)(u.Te, {
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
                                v(t), $(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: I === e,
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
                                C(t), $(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: I === e,
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
                children: Y.map((e, t) => {
                    let { key: a, input: n } = e;
                    return (0, r.jsx)(
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
                            children: n,
                        },
                        a,
                    );
                }),
            }),
        }),
    });
});
