n.d(t, { Z: () => x }), n(388685), n(35282), n(642613), n(539854);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    a = n(913527),
    o = n.n(a),
    c = n(481060),
    u = n(388032),
    d = n(67706);
let h = o()().localeData().months(),
    g = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: "".concat(e + 1),
    })),
    p = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: h[e],
    })),
    m = /[a-zA-Z0-9]/;
function f(e) {
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
function _() {
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
let x = i.forwardRef(function (e, t) {
    let {
            value: n,
            wrapperClassName: s,
            onChange: a,
            onPopulated: h,
            error: m,
            autoFocus: x,
            required: E,
            onFocus: v,
            onBlur: b,
            name: j,
        } = e,
        {
            day: I,
            setDay: y,
            month: S,
            setMonth: O,
            year: N,
            setYear: C,
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
                null != I && null != S && null != N
                    ? o()("".concat(I, "/").concat(S, "/").concat(N), "DD/MM/YYYY")
                    : null,
            [I, S, N],
        );
    i.useEffect(() => {
        a((null == T ? void 0 : T.isValid()) ? T : null);
    }, [T, a]);
    let A = m;
    null == T || T.isValid() || (A = u.intl.string(u.t.udnqh6));
    let Z = (function () {
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
        [P, R] = i.useState(x ? 0 : -1),
        L = i.useMemo(_, []),
        w = {
            onPopulated: h,
            sortedInputs: L,
        },
        k = i.useRef(w);
    i.useEffect(() => {
        k.current = w;
    }),
        i.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = k.current;
            if (P >= t.length) {
                null == e || e();
                return;
            }
        }, [P]);
    let D = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = L[e];
        switch (t) {
            case "day":
                D.push({
                    key: "day",
                    input: (0, r.jsx)(f, {
                        options: g,
                        selectOption: y,
                        children: (0, r.jsx)(c.q4e, {
                            "aria-label": u.intl.string(u.t.Voklre),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.Voklre),
                            options: g,
                            value: I,
                            onChange: (t) => {
                                y(t), R(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: P === e,
                            onOpen: () => (null == v ? void 0 : v("".concat(j, "_").concat(t))),
                            onClose: () => (null == b ? void 0 : b("".concat(j, "_").concat(t))),
                        }),
                    }),
                });
                break;
            case "month":
                D.push({
                    key: "month",
                    input: (0, r.jsx)(f, {
                        options: p,
                        selectOption: O,
                        children: (0, r.jsx)(c.q4e, {
                            "aria-label": u.intl.string(u.t.UDlN8W),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.UDlN8W),
                            options: p,
                            value: S,
                            onChange: (t) => {
                                O(t), R(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: P === e,
                            onOpen: () => (null == v ? void 0 : v("".concat(j, "_").concat(t))),
                            onClose: () => (null == b ? void 0 : b("".concat(j, "_").concat(t))),
                        }),
                    }),
                });
                break;
            case "year":
                D.push({
                    key: "year",
                    input: (0, r.jsx)(f, {
                        options: Z,
                        selectOption: C,
                        children: (0, r.jsx)(c.q4e, {
                            "aria-label": u.intl.string(u.t.ZWr5WA),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.ZWr5WA),
                            options: Z,
                            value: N,
                            onChange: (t) => {
                                C(t), R(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: P === e,
                            onOpen: () => (null == v ? void 0 : v("".concat(j, "_").concat(t))),
                            onClose: () => (null == b ? void 0 : b("".concat(j, "_").concat(t))),
                        }),
                    }),
                });
        }
    }
    return (0, r.jsx)("fieldset", {
        className: l()(d.container, s),
        children: (0, r.jsx)(c.gNt, {
            label: u.intl.string(u.t.xNpFJ6),
            required: E,
            errorMessage: null != A ? A : void 0,
            children: (0, r.jsx)("div", {
                className: d.inputs,
                children: D.map((e, t) => {
                    let { key: n, input: i } = e;
                    return (0, r.jsx)(
                        "div",
                        {
                            tabIndex: t + 1,
                            className: d[n],
                            children: i,
                        },
                        n,
                    );
                }),
            }),
        }),
    });
});
