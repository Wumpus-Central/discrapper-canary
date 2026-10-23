r.d(t, { S: () => a });
var n = r(753154),
    i = r(526739),
    o = r(582128);
function a(e) {
    let {
            isDisabled: t = !1,
            minValue: r = 0,
            maxValue: a = 100,
            numberFormatter: c,
            step: f = 1,
            orientation: p = "horizontal",
        } = e,
        d = (0, o.useMemo)(() => {
            let e = (a - r) / 10;
            return Math.max((e = (0, n.BU)(e, 0, e + f, f)), f);
        }, [f, a, r]),
        h = (0, o.useCallback)(
            (e) =>
                e?.map((t, i) => {
                    let o = 0 === i ? r : e[i - 1],
                        s = i === e.length - 1 ? a : e[i + 1];
                    return (0, n.BU)(t, o, s, f);
                }),
            [r, a, f],
        ),
        m = (0, o.useMemo)(() => h(l(e.value)), [e.value, h]),
        v = (0, o.useMemo)(() => h(l(e.defaultValue) ?? [r]), [e.defaultValue, r, h]),
        y = u(e.value, e.defaultValue, e.onChange),
        g = u(e.value, e.defaultValue, e.onChangeEnd),
        [b, w] = (0, i.P)(m, v, y),
        [_] = (0, o.useState)(b),
        [S, E] = (0, o.useState)(Array(b.length).fill(!1)),
        x = (0, o.useRef)(Array(b.length).fill(!0)),
        [C, k] = (0, o.useState)(void 0),
        T = (0, o.useRef)(b),
        M = (0, o.useRef)(S);
    function P(e) {
        return (e - r) / (a - r);
    }
    function A(e) {
        return 0 === e ? r : b[e - 1];
    }
    function I(e) {
        return e === b.length - 1 ? a : b[e + 1];
    }
    function O(e) {
        return x.current[e];
    }
    function R(e, r) {
        if (t || !O(e)) return;
        let i = A(e),
            o = I(e);
        r = (0, n.BU)(r, i, o, f);
        let a = s(T.current, e, r);
        ((T.current = a), w(a));
    }
    let D = (0, o.useRef)(null);
    function L(e = b) {
        switch (("number" == typeof e && (e = [e]), e.length)) {
            case 0:
                return "";
            case 1:
                return c.format(e[0]);
            case 2:
                return c.formatRange(e[0], e[1]);
            default: {
                let t = e.map((e) => c.format(e)),
                    r = D.current;
                return (
                    (r && r.resolvedOptions().locale === c.resolvedOptions().locale) ||
                        (r = D.current = new Intl.ListFormat(c.resolvedOptions().locale, { type: "unit" })),
                    r.format(t)
                );
            }
        }
    }
    function F(e) {
        let t = e * (a - r) + r;
        return (0, n.qE)(Math.round((t - r) / f) * f + r, r, a);
    }
    return {
        values: b,
        defaultValues: void 0 !== e.defaultValue ? v : _,
        getThumbValue: (e) => b[e],
        setThumbValue: R,
        setThumbPercent: function (e, t) {
            R(e, F(t));
        },
        isThumbDragging: (e) => S[e],
        setThumbDragging: function (e, r) {
            var n;
            if (t || !O(e)) return;
            r && (T.current = b);
            let i = M.current[e];
            ((M.current = s(M.current, e, r)),
                (n = M.current),
                (M.current = n),
                E(n),
                g && i && !M.current.some(Boolean) && g(T.current));
        },
        focusedThumb: C,
        setFocusedThumb: k,
        getThumbPercent: (e) => P(b[e]),
        getValuePercent: P,
        getThumbValueLabel: (e) => L(b[e]),
        getFormattedValue: L,
        getThumbMinValue: A,
        getThumbMaxValue: I,
        getPercentValue: F,
        isThumbEditable: O,
        setThumbEditable: function (e, t) {
            x.current[e] = t;
        },
        incrementThumb: function (e, t = 1) {
            let i = Math.max(t, f);
            R(e, (0, n.BU)(b[e] + i, r, a, f));
        },
        decrementThumb: function (e, t = 1) {
            let i = Math.max(t, f);
            R(e, (0, n.BU)(b[e] - i, r, a, f));
        },
        step: f,
        pageSize: d,
        orientation: p,
        isDisabled: t,
    };
}
function s(e, t, r) {
    return e[t] === r ? e : [...e.slice(0, t), r, ...e.slice(t + 1)];
}
function l(e) {
    if (null != e) return Array.isArray(e) ? e : [e];
}
function u(e, t, r) {
    return (n) => {
        "number" == typeof e || "number" == typeof t ? r?.(n[0]) : r?.(n);
    };
}
