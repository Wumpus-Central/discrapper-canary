"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(989349),
    o = n.n(a),
    c = n(843282),
    d = n(397927),
    u = n(985018),
    h = n(191);
let _ = o()().localeData().months(),
    p = Array.from(Array(31).keys()).map((e) => ({ value: e + 1, label: `${e + 1}` })),
    g = Array.from(Array(12).keys()).map((e) => ({ value: e + 1, label: _[e] })),
    m = /[a-zA-Z0-9]/;
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
            if (m.test(e.key)) {
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
            wrapperClassName: _,
            onChange: m,
            onPopulated: E,
            error: x,
            autoFocus: I,
            required: N,
            onFocus: v,
            onBlur: T,
            name: C,
        } = e,
        {
            day: j,
            setDay: S,
            month: y,
            setMonth: b,
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
            () => (null != j && null != y && null != R ? o()(`${j}/${y}/${R}`, "DD/MM/YYYY") : null),
            [j, y, R],
        );
    s.useEffect(() => {
        m(L?.isValid() ? L : null);
    }, [L, m]);
    let w = x;
    null == L || L.isValid() || (w = u.intl.string(u.t.udnqh6));
    let k =
            ((n = new Date().getFullYear()),
            (r = s.useRef(Array.from(Array(150).keys()).map((e) => ({ value: n - e - 3, label: `${n - e - 3}` })))),
            s.useEffect(() => {
                r.current = Array.from(Array(150).keys()).map((e) => ({ value: n - e - 3, label: `${n - e - 3}` }));
            }, [n]),
            r.current),
        [D, B] = s.useState(I ? 0 : -1),
        U = s.useMemo(f, []),
        P = { onPopulated: E, sortedInputs: U },
        G = s.useRef(P);
    s.useEffect(() => {
        G.current = P;
    }),
        s.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = G.current;
            if (D >= t.length) return void e?.();
        }, [D]);
    let F = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = U[e];
        switch (t) {
            case "day":
                F.push({
                    key: "day",
                    input: (0, i.jsx)(A, {
                        options: p,
                        selectOption: S,
                        children: (0, i.jsx)(c.Te, {
                            "aria-label": u.intl.string(u.t.Voklre),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.Voklre),
                            options: p,
                            value: j,
                            onChange: (t) => {
                                S(t), B(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: D === e,
                            onOpen: () => v?.(`${C}_${t}`),
                            onClose: () => T?.(`${C}_${t}`),
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "month":
                F.push({
                    key: "month",
                    input: (0, i.jsx)(A, {
                        options: g,
                        selectOption: b,
                        children: (0, i.jsx)(c.Te, {
                            "aria-label": u.intl.string(u.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.UDlN8W),
                            options: g,
                            value: y,
                            onChange: (t) => {
                                b(t), B(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: D === e,
                            onOpen: () => v?.(`${C}_${t}`),
                            onClose: () => T?.(`${C}_${t}`),
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "year":
                F.push({
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
                                O(t), B(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: D === e,
                            onOpen: () => v?.(`${C}_${t}`),
                            onClose: () => T?.(`${C}_${t}`),
                            "data-migration-pending": !0,
                        }),
                    }),
                });
        }
    }
    return (0, i.jsx)("fieldset", {
        className: l()(h.container, _),
        children: (0, i.jsx)(d.D0$, {
            label: u.intl.string(u.t.xNpFJ6),
            required: N,
            errorMessage: w ?? void 0,
            children: (0, i.jsx)("div", {
                className: h.inputs,
                children: F.map((e, t) => {
                    let { key: n, input: s } = e;
                    return (0, i.jsx)("div", { tabIndex: t + 1, className: h[n], children: s }, n);
                }),
            }),
        }),
    });
});
