n.d(t, { Z: () => x }), n(388685), n(35282), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
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
    m = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: h[e],
    })),
    p = /[a-zA-Z0-9]/;
function f(e) {
    let { options: t, selectOption: n, children: l } = e,
        [s, a] = i.useState("");
    i.useEffect(() => {
        if ("" !== s) {
            let e = setTimeout(() => a(""), 1000);
            return () => clearTimeout(e);
        }
    }, [s, a]);
    let o = i.useCallback(
        (e) => {
            if (p.test(e.key)) {
                let r = "".concat(s).concat(e.key.toLowerCase()),
                    i = t.find((e) => e.label.toLowerCase().startsWith(r));
                null != i && n(i.value), a(r);
            }
        },
        [n, a, s, t],
    );
    return (0, r.jsx)("div", {
        onKeyDown: o,
        children: l,
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
            wrapperClassName: l,
            onChange: a,
            onPopulated: h,
            error: p,
            autoFocus: x,
            required: E,
            onFocus: v,
            onBlur: b,
            name: I,
            labelTag: j,
        } = e,
        {
            day: N,
            setDay: S,
            month: O,
            setMonth: y,
            year: C,
            setYear: A,
        } = (function (e) {
            let t = null,
                n = null,
                r = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (r = e.year()));
            let [l, s] = i.useState(t),
                [a, o] = i.useState(n),
                [c, u] = i.useState(r);
            return {
                day: l,
                setDay: s,
                month: a,
                setMonth: o,
                year: c,
                setYear: u,
            };
        })(n),
        T = i.useMemo(
            () =>
                null != N && null != O && null != C
                    ? o()("".concat(N, "/").concat(O, "/").concat(C), "DD/MM/YYYY")
                    : null,
            [N, O, C],
        );
    i.useEffect(() => {
        a((null == T ? void 0 : T.isValid()) ? T : null);
    }, [T, a]);
    let Z = p;
    null == T || T.isValid() || (Z = u.intl.string(u.t.udnqh4));
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
        [R, L] = i.useState(x ? 0 : -1),
        w = i.useMemo(_, []),
        D = {
            onPopulated: h,
            sortedInputs: w,
        },
        k = i.useRef(D);
    i.useEffect(() => {
        k.current = D;
    }),
        i.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = k.current;
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
                    input: (0, r.jsx)(f, {
                        options: g,
                        selectOption: S,
                        children: (0, r.jsx)(c.q4e, {
                            "aria-label": u.intl.string(u.t.Voklra),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.Voklra),
                            options: g,
                            value: N,
                            onChange: (t) => {
                                S(t), L(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: R === e,
                            onOpen: () => (null == v ? void 0 : v("".concat(I, "_").concat(t))),
                            onClose: () => (null == b ? void 0 : b("".concat(I, "_").concat(t))),
                        }),
                    }),
                });
                break;
            case "month":
                M.push({
                    key: "month",
                    input: (0, r.jsx)(f, {
                        options: m,
                        selectOption: y,
                        children: (0, r.jsx)(c.q4e, {
                            "aria-label": u.intl.string(u.t.UDlN8f),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.UDlN8f),
                            options: m,
                            value: O,
                            onChange: (t) => {
                                y(t), L(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: R === e,
                            onOpen: () => (null == v ? void 0 : v("".concat(I, "_").concat(t))),
                            onClose: () => (null == b ? void 0 : b("".concat(I, "_").concat(t))),
                        }),
                    }),
                });
                break;
            case "year":
                M.push({
                    key: "year",
                    input: (0, r.jsx)(f, {
                        options: P,
                        selectOption: A,
                        children: (0, r.jsx)(c.q4e, {
                            "aria-label": u.intl.string(u.t.ZWr5WF),
                            popoutPosition: "top",
                            placeholder: u.intl.string(u.t.ZWr5WF),
                            options: P,
                            value: C,
                            onChange: (t) => {
                                A(t), L(e + 1);
                            },
                            maxVisibleItems: 6,
                            autoFocus: R === e,
                            onOpen: () => (null == v ? void 0 : v("".concat(I, "_").concat(t))),
                            onClose: () => (null == b ? void 0 : b("".concat(I, "_").concat(t))),
                        }),
                    }),
                });
        }
    }
    return (0, r.jsxs)("fieldset", {
        className: s()(d.container, l),
        children: [
            (0, r.jsx)(c.vwX, {
                tag: null != j ? j : "legend",
                required: E,
                error: Z,
                children: u.intl.string(u.t.xNpFJy),
            }),
            (0, r.jsx)("div", {
                className: d.inputs,
                children: M.map((e, t) => {
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
        ],
    });
});
