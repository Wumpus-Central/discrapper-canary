r.d(n, {
    x: function () {
        return u;
    }
});
var i = r(239700),
    a = r(192379);
let o = 0,
    s = 100,
    l = 1;
function u(e) {
    var n;
    let { isDisabled: r = !1, minValue: u = o, maxValue: p = s, numberFormatter: h, step: _ = l, orientation: m = 'horizontal' } = e,
        g = (0, a.useMemo)(() => {
            let e = (p - u) / 10;
            return Math.max((e = (0, i.N4)(e, 0, e + _, _)), _);
        }, [_, p, u]),
        E = (0, a.useMemo)(() => d(e.value), [e.value]),
        v = (0, a.useMemo)(() => (null !== (n = d(e.defaultValue)) && void 0 !== n ? n : [u]), [e.defaultValue, u]),
        y = f(e.value, e.defaultValue, e.onChange),
        b = f(e.value, e.defaultValue, e.onChangeEnd),
        [I, T] = (0, i.zk)(E, v, y),
        [S, A] = (0, a.useState)(Array(I.length).fill(!1)),
        C = (0, a.useRef)(Array(I.length).fill(!0)),
        [N, R] = (0, a.useState)(void 0),
        O = (0, a.useRef)(I),
        D = (0, a.useRef)(S),
        L = (e) => {
            (O.current = e), T(e);
        },
        x = (e) => {
            (D.current = e), A(e);
        };
    function w(e) {
        return (e - u) / (p - u);
    }
    function P(e) {
        return 0 === e ? u : I[e - 1];
    }
    function M(e) {
        return e === I.length - 1 ? p : I[e + 1];
    }
    function k(e) {
        return C.current[e];
    }
    function U(e, n) {
        if (r || !k(e)) return;
        let a = P(e),
            o = M(e);
        (n = (0, i.N4)(n, a, o, _)), L(c(O.current, e, n));
    }
    function B(e) {
        return h.format(e);
    }
    function G(e, n) {
        U(e, F(n));
    }
    function Z(e) {
        return Math.round((e - u) / _) * _ + u;
    }
    function F(e) {
        let n = e * (p - u) + u;
        return (0, i.uZ)(Z(n), u, p);
    }
    function V(e, n = 1) {
        let r = Math.max(n, _);
        U(e, (0, i.N4)(I[e] + r, u, p, _));
    }
    function j(e, n = 1) {
        let r = Math.max(n, _);
        U(e, (0, i.N4)(I[e] - r, u, p, _));
    }
    return {
        values: I,
        getThumbValue: (e) => I[e],
        setThumbValue: U,
        setThumbPercent: G,
        isThumbDragging: (e) => S[e],
        setThumbDragging: function e(e, n) {
            if (r || !k(e)) return;
            let i = D.current[e];
            (D.current = c(D.current, e, n)), x(D.current), b && i && !D.current.some(Boolean) && b(O.current);
        },
        focusedThumb: N,
        setFocusedThumb: R,
        getThumbPercent: (e) => w(I[e]),
        getValuePercent: w,
        getThumbValueLabel: (e) => B(I[e]),
        getFormattedValue: B,
        getThumbMinValue: P,
        getThumbMaxValue: M,
        getPercentValue: F,
        isThumbEditable: k,
        setThumbEditable: function e(e, n) {
            C.current[e] = n;
        },
        incrementThumb: V,
        decrementThumb: j,
        step: _,
        pageSize: g,
        orientation: m,
        isDisabled: r
    };
}
function c(e, n, r) {
    return e[n] === r ? e : [...e.slice(0, n), r, ...e.slice(n + 1)];
}
function d(e) {
    if (null != e) return Array.isArray(e) ? e : [e];
}
function f(e, n, r) {
    return (i) => {
        'number' == typeof e || 'number' == typeof n ? null == r || r(i[0]) : null == r || r(i);
    };
}
