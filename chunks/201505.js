n.d(t, { A: () => _ }), n(896048), n(747238), n(638769), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(989349),
    o = n.n(a),
    c = n(843282),
    u = n(397927),
    d = n(985018),
    h = n(614725);
let f = o()().localeData().months(),
    p = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: "".concat(e + 1),
    })),
    g = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: f[e],
    })),
    m = /[a-zA-Z0-9]/;
function A(e) {
    let { options: t, selectOption: n, children: s } = e,
        [l, a] = i.useState("");
    i.useEffect(() => {
        if ("" !== l) {
            let e = setTimeout(() => a(""), 1000);
            return () => clearTimeout(e);
        }
    }, [l, a]);
    let o = i.useCallback(
        (e) => {
            if (m.test(e.key)) {
                let r = "".concat(l).concat(e.key.toLowerCase()),
                    i = t.find((e) => e.label.toLowerCase().startsWith(r));
                null != i && n(i.value), a(r);
            }
        },
        [n, a, l, t],
    );
    return (0, r.jsx)("div", {
        onKeyDown: o,
        children: s,
    });
}
function x() {
    let e = o()().localeData().longDateFormat("L"),
        t = e.indexOf("D"),
        n = e.indexOf("M"),
        r = e.indexOf("Y");
    return (
        (-1 === t || -1 === n || -1 === r) && ((t = 0), (n = 1), (r = 2)),
        [
            {
                index: t,
                type: "day",
            },
            {
                index: n,
                type: "month",
            },
            {
                index: r,
                type: "year",
            },
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let _ = i.forwardRef(function (e, t) {
    let n,
        s,
        {
            value: a,
            wrapperClassName: f,
            onChange: m,
            onPopulated: _,
            error: E,
            autoFocus: b,
            required: v,
            onFocus: j,
            onBlur: y,
            name: S,
        } = e,
        {
            day: N,
            setDay: O,
            month: I,
            setMonth: T,
            year: C,
            setYear: R,
        } = (function (e) {
            let t = null,
                n = null,
                r = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (r = e.year()));
            let [s, l] = i.useState(t),
                [a, o] = i.useState(n),
                [c, u] = i.useState(r);
            return {
                day: s,
                setDay: l,
                month: a,
                setMonth: o,
                year: c,
                setYear: u,
            };
        })(a),
        w = i.useMemo(
            () =>
                null != N && null != I && null != C
                    ? o()("".concat(N, "/").concat(I, "/").concat(C), "DD/MM/YYYY")
                    : null,
            [N, I, C],
        );
    i.useEffect(() => {
        m((null == w ? void 0 : w.isValid()) ? w : null);
    }, [w, m]);
    let P = E;
    null == w || w.isValid() || (P = d.intl.string(d.t.udnqh6));
    let L =
            ((n = new Date().getFullYear()),
            (s = i.useRef(
                Array.from(Array(150).keys()).map((e) => ({
                    value: n - e - 3,
                    label: "".concat(n - e - 3),
                })),
            )),
            i.useEffect(() => {
                s.current = Array.from(Array(150).keys()).map((e) => ({
                    value: n - e - 3,
                    label: "".concat(n - e - 3),
                }));
            }, [n]),
            s.current),
        [k, D] = i.useState(b ? 0 : -1),
        B = i.useMemo(x, []),
        U = {
            onPopulated: _,
            sortedInputs: B,
        },
        G = i.useRef(U);
    i.useEffect(() => {
        G.current = U;
    }),
        i.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = G.current;
            if (k >= t.length) {
                null == e || e();
                return;
            }
        }, [k]);
    let M = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = B[e];
        switch (t) {
            case "day":
                M.push({
                    key: "day",
                    input: (0, r.jsx)(A, {
                        options: p,
                        selectOption: O,
                        children: (0, r.jsx)(c.Te, {
                            "aria-label": d.intl.string(d.t.Voklre),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.Voklre),
                            options: p,
                            value: N,
                            onChange: (t) => {
                                O(t), D(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: k === e,
                            onOpen: () => (null == j ? void 0 : j("".concat(S, "_").concat(t))),
                            onClose: () => (null == y ? void 0 : y("".concat(S, "_").concat(t))),
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "month":
                M.push({
                    key: "month",
                    input: (0, r.jsx)(A, {
                        options: g,
                        selectOption: T,
                        children: (0, r.jsx)(c.Te, {
                            "aria-label": d.intl.string(d.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.UDlN8W),
                            options: g,
                            value: I,
                            onChange: (t) => {
                                T(t), D(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: k === e,
                            onOpen: () => (null == j ? void 0 : j("".concat(S, "_").concat(t))),
                            onClose: () => (null == y ? void 0 : y("".concat(S, "_").concat(t))),
                            "data-migration-pending": !0,
                        }),
                    }),
                });
                break;
            case "year":
                M.push({
                    key: "year",
                    input: (0, r.jsx)(A, {
                        options: L,
                        selectOption: R,
                        children: (0, r.jsx)(c.Te, {
                            "aria-label": d.intl.string(d.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.ZWr5WA),
                            options: L,
                            value: C,
                            onChange: (t) => {
                                R(t), D(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: k === e,
                            onOpen: () => (null == j ? void 0 : j("".concat(S, "_").concat(t))),
                            onClose: () => (null == y ? void 0 : y("".concat(S, "_").concat(t))),
                            "data-migration-pending": !0,
                        }),
                    }),
                });
        }
    }
    return (0, r.jsx)("fieldset", {
        className: l()(h.container, f),
        children: (0, r.jsx)(u.D0$, {
            label: d.intl.string(d.t.xNpFJ6),
            required: v,
            errorMessage: null != P ? P : void 0,
            children: (0, r.jsx)("div", {
                className: h.inputs,
                children: M.map((e, t) => {
                    let { key: n, input: i } = e;
                    return (0, r.jsx)(
                        "div",
                        {
                            tabIndex: t + 1,
                            className: h[n],
                            children: i,
                        },
                        n,
                    );
                }),
            }),
        }),
    });
});
