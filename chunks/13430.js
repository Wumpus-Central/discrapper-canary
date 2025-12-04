n.d(t, { Z: () => E }), n(388685), n(35282), n(642613), n(539854);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    a = n(913527),
    o = n.n(a),
    c = n(199849),
    u = n(481060),
    d = n(388032),
    h = n(67706);
let g = o()().localeData().months(),
    p = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: "".concat(e + 1),
    })),
    f = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: g[e],
    })),
    m = /[a-zA-Z0-9]/;
function _(e) {
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
let E = i.forwardRef(function (e, t) {
    let {
            value: n,
            wrapperClassName: s,
            onChange: a,
            onPopulated: g,
            error: m,
            autoFocus: E,
            required: v,
            onFocus: b,
            onBlur: j,
            name: I,
        } = e,
        {
            day: y,
            setDay: S,
            month: O,
            setMonth: N,
            year: C,
            setYear: A,
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
        })(n),
        T = i.useMemo(
            () =>
                null != y && null != O && null != C
                    ? o()("".concat(y, "/").concat(O, "/").concat(C), "DD/MM/YYYY")
                    : null,
            [y, O, C],
        );
    i.useEffect(() => {
        a((null == T ? void 0 : T.isValid()) ? T : null);
    }, [T, a]);
    let Z = m;
    null == T || T.isValid() || (Z = d.intl.string(d.t.udnqh6));
    let P = (function () {
            let e = new Date().getFullYear(),
                t = i.useRef(
                    Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: "".concat(e - t - 3),
                    })),
                );
            return (
                i.useEffect(() => {
                    t.current = Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: "".concat(e - t - 3),
                    }));
                }, [e]),
                t.current
            );
        })(),
        [R, L] = i.useState(E ? 0 : -1),
        w = i.useMemo(x, []),
        k = {
            onPopulated: g,
            sortedInputs: w,
        },
        D = i.useRef(k);
    i.useEffect(() => {
        D.current = k;
    }),
        i.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = D.current;
            if (R >= t.length) {
                null == e || e();
                return;
            }
        }, [R]);
    let M = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = w[e];
        switch (t) {
            case "day":
                M.push({
                    key: "day",
                    input: (0, r.jsx)(_, {
                        options: p,
                        selectOption: S,
                        children: (0, r.jsx)(c.y6, {
                            "aria-label": d.intl.string(d.t.Voklre),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.Voklre),
                            options: p,
                            value: y,
                            onChange: (t) => {
                                S(t), L(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: R === e,
                            onOpen: () => (null == b ? void 0 : b("".concat(I, "_").concat(t))),
                            onClose: () => (null == j ? void 0 : j("".concat(I, "_").concat(t))),
                        }),
                    }),
                });
                break;
            case "month":
                M.push({
                    key: "month",
                    input: (0, r.jsx)(_, {
                        options: f,
                        selectOption: N,
                        children: (0, r.jsx)(c.y6, {
                            "aria-label": d.intl.string(d.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.UDlN8W),
                            options: f,
                            value: O,
                            onChange: (t) => {
                                N(t), L(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: R === e,
                            onOpen: () => (null == b ? void 0 : b("".concat(I, "_").concat(t))),
                            onClose: () => (null == j ? void 0 : j("".concat(I, "_").concat(t))),
                        }),
                    }),
                });
                break;
            case "year":
                M.push({
                    key: "year",
                    input: (0, r.jsx)(_, {
                        options: P,
                        selectOption: A,
                        children: (0, r.jsx)(c.y6, {
                            "aria-label": d.intl.string(d.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: d.intl.string(d.t.ZWr5WA),
                            options: P,
                            value: C,
                            onChange: (t) => {
                                A(t), L(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: R === e,
                            onOpen: () => (null == b ? void 0 : b("".concat(I, "_").concat(t))),
                            onClose: () => (null == j ? void 0 : j("".concat(I, "_").concat(t))),
                        }),
                    }),
                });
        }
    }
    return (0, r.jsx)("fieldset", {
        className: l()(h.container, s),
        children: (0, r.jsx)(u.gNt, {
            label: d.intl.string(d.t.xNpFJ6),
            required: v,
            errorMessage: null != Z ? Z : void 0,
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
