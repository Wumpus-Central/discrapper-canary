r.d(n, {
    x: function () {
        return u;
    }
});
var i = r(239700),
    a = r(192379);
let s = 0,
    o = 100,
    l = 1;
function u(e) {
    var n;
    let { isDisabled: r = !1, minValue: u = s, maxValue: _ = o, numberFormatter: h, step: p = l, orientation: m = 'horizontal' } = e,
        g = (0, a.useMemo)(() => {
            let e = (_ - u) / 10;
            return Math.max((e = (0, i.N4)(e, 0, e + p, p)), p);
        }, [p, _, u]),
        E = (0, a.useMemo)(() => d(e.value), [e.value]),
        v = (0, a.useMemo)(() => (null !== (n = d(e.defaultValue)) && void 0 !== n ? n : [u]), [e.defaultValue, u]),
        I = f(e.value, e.defaultValue, e.onChange),
        T = f(e.value, e.defaultValue, e.onChangeEnd),
        [b, y] = (0, i.zk)(E, v, I),
        [S, A] = (0, a.useState)(Array(b.length).fill(!1)),
        N = (0, a.useRef)(Array(b.length).fill(!0)),
        [C, R] = (0, a.useState)(void 0),
        O = (0, a.useRef)(b),
        D = (0, a.useRef)(S),
        L = (e) => {
            (O.current = e), y(e);
        },
        x = (e) => {
            (D.current = e), A(e);
        };
    function w(e) {
        return (e - u) / (_ - u);
    }
    function P(e) {
        return 0 === e ? u : b[e - 1];
    }
    function M(e) {
        return e === b.length - 1 ? _ : b[e + 1];
    }
    function k(e) {
        return N.current[e];
    }
    function U(e, n) {
        if (r || !k(e)) return;
        let a = P(e),
            s = M(e);
        (n = (0, i.N4)(n, a, s, p)), L(c(O.current, e, n));
    }
    function B(e) {
        return h.format(e);
    }
    function G(e, n) {
        U(e, F(n));
    }
    function Z(e) {
        return Math.round((e - u) / p) * p + u;
    }
    function F(e) {
        let n = e * (_ - u) + u;
        return (0, i.uZ)(Z(n), u, _);
    }
    function V(e, n = 1) {
        let r = Math.max(n, p);
        U(e, (0, i.N4)(b[e] + r, u, _, p));
    }
    function j(e, n = 1) {
        let r = Math.max(n, p);
        U(e, (0, i.N4)(b[e] - r, u, _, p));
    }
    return {
        values: b,
        getThumbValue: (e) => b[e],
        setThumbValue: U,
        setThumbPercent: G,
        isThumbDragging: (e) => S[e],
        setThumbDragging: function e(e, n) {
            if (r || !k(e)) return;
            let i = D.current[e];
            (D.current = c(D.current, e, n)), x(D.current), T && i && !D.current.some(Boolean) && T(O.current);
        },
        focusedThumb: C,
        setFocusedThumb: R,
        getThumbPercent: (e) => w(b[e]),
        getValuePercent: w,
        getThumbValueLabel: (e) => B(b[e]),
        getFormattedValue: B,
        getThumbMinValue: P,
        getThumbMaxValue: M,
        getPercentValue: F,
        isThumbEditable: k,
        setThumbEditable: function e(e, n) {
            N.current[e] = n;
        },
        incrementThumb: V,
        decrementThumb: j,
        step: p,
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
