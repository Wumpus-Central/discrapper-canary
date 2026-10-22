n.d(t, { S: () => a });
var r = n(753154),
    i = n(526739),
    l = n(582128);
function a(e) {
    let {
            isDisabled: t = !1,
            minValue: n = 0,
            maxValue: a = 100,
            numberFormatter: c,
            step: d = 1,
            orientation: h = "horizontal",
        } = e,
        b = (0, l.useMemo)(() => {
            let e = (a - n) / 10;
            return Math.max((e = (0, r.BU)(e, 0, e + d, d)), d);
        }, [d, a, n]),
        p = (0, l.useCallback)(
            (e) =>
                e?.map((t, i) => {
                    let l = 0 === i ? n : e[i - 1],
                        o = i === e.length - 1 ? a : e[i + 1];
                    return (0, r.BU)(t, l, o, d);
                }),
            [n, a, d],
        ),
        g = (0, l.useMemo)(() => p(s(e.value)), [e.value, p]),
        f = (0, l.useMemo)(() => p(s(e.defaultValue) ?? [n]), [e.defaultValue, n, p]),
        m = u(e.value, e.defaultValue, e.onChange),
        y = u(e.value, e.defaultValue, e.onChangeEnd),
        [v, K] = (0, i.P)(g, f, m),
        [P] = (0, l.useState)(v),
        [T, w] = (0, l.useState)(Array(v.length).fill(!1)),
        D = (0, l.useRef)(Array(v.length).fill(!0)),
        [S, M] = (0, l.useState)(void 0),
        C = (0, l.useRef)(v),
        x = (0, l.useRef)(T);
    function E(e) {
        return (e - n) / (a - n);
    }
    function k(e) {
        return 0 === e ? n : v[e - 1];
    }
    function R(e) {
        return e === v.length - 1 ? a : v[e + 1];
    }
    function F(e) {
        return D.current[e];
    }
    function V(e, n) {
        if (t || !F(e)) return;
        let i = k(e),
            l = R(e);
        n = (0, r.BU)(n, i, l, d);
        let a = o(C.current, e, n);
        ((C.current = a), K(a));
    }
    let I = (0, l.useRef)(null);
    function A(e = v) {
        switch (("number" == typeof e && (e = [e]), e.length)) {
            case 0:
                return "";
            case 1:
                return c.format(e[0]);
            case 2:
                return c.formatRange(e[0], e[1]);
            default: {
                let t = e.map((e) => c.format(e)),
                    n = I.current;
                return (
                    (n && n.resolvedOptions().locale === c.resolvedOptions().locale) ||
                        (n = I.current = new Intl.ListFormat(c.resolvedOptions().locale, { type: "unit" })),
                    n.format(t)
                );
            }
        }
    }
    function L(e) {
        let t = e * (a - n) + n;
        return (0, r.qE)(Math.round((t - n) / d) * d + n, n, a);
    }
    return {
        values: v,
        defaultValues: void 0 !== e.defaultValue ? f : P,
        getThumbValue: (e) => v[e],
        setThumbValue: V,
        setThumbPercent: function (e, t) {
            V(e, L(t));
        },
        isThumbDragging: (e) => T[e],
        setThumbDragging: function (e, n) {
            var r;
            if (t || !F(e)) return;
            n && (C.current = v);
            let i = x.current[e];
            ((x.current = o(x.current, e, n)),
                (r = x.current),
                (x.current = r),
                w(r),
                y && i && !x.current.some(Boolean) && y(C.current));
        },
        focusedThumb: S,
        setFocusedThumb: M,
        getThumbPercent: (e) => E(v[e]),
        getValuePercent: E,
        getThumbValueLabel: (e) => A(v[e]),
        getFormattedValue: A,
        getThumbMinValue: k,
        getThumbMaxValue: R,
        getPercentValue: L,
        isThumbEditable: F,
        setThumbEditable: function (e, t) {
            D.current[e] = t;
        },
        incrementThumb: function (e, t = 1) {
            let i = Math.max(t, d);
            V(e, (0, r.BU)(v[e] + i, n, a, d));
        },
        decrementThumb: function (e, t = 1) {
            let i = Math.max(t, d);
            V(e, (0, r.BU)(v[e] - i, n, a, d));
        },
        step: d,
        pageSize: b,
        orientation: h,
        isDisabled: t,
    };
}
function o(e, t, n) {
    return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
}
function s(e) {
    if (null != e) return Array.isArray(e) ? e : [e];
}
function u(e, t, n) {
    return (r) => {
        "number" == typeof e || "number" == typeof t ? n?.(r[0]) : n?.(r);
    };
}
