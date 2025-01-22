r.d(n, {
    N4: function () {
        return s;
    },
    uZ: function () {
        return o;
    },
    zk: function () {
        return a;
    }
});
var i = r(192379);
function a(e, n, r) {
    let [a, o] = (0, i.useState)(e || n),
        s = (0, i.useRef)(void 0 !== e),
        l = void 0 !== e;
    (0, i.useEffect)(() => {
        let e = s.current;
        e !== l && console.warn(`WARN: A component changed from ${e ? 'controlled' : 'uncontrolled'} to ${l ? 'controlled' : 'uncontrolled'}.`), (s.current = l);
    }, [l]);
    let u = l ? e : a,
        c = (0, i.useCallback)(
            (e, ...n) => {
                let i = (e, ...n) => {
                    r && !Object.is(u, e) && r(e, ...n), !l && (u = e);
                };
                'function' == typeof e
                    ? (console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'),
                      o((r, ...a) => {
                          let o = e(l ? u : r, ...a);
                          return (i(o, ...n), l) ? r : o;
                      }))
                    : (!l && o(e), i(e, ...n));
            },
            [l, u, r]
        );
    return [u, c];
}
function o(e, n = -1 / 0, r = 1 / 0) {
    return Math.min(Math.max(e, n), r);
}
function s(e, n, r, i) {
    (n = Number(n)), (r = Number(r));
    let a = (e - (isNaN(n) ? 0 : n)) % i,
        o = 2 * Math.abs(a) >= i ? e + Math.sign(a) * (i - Math.abs(a)) : e - a;
    isNaN(n) ? !isNaN(r) && o > r && (o = Math.floor(r / i) * i) : o < n ? (o = n) : !isNaN(r) && o > r && (o = n + Math.floor((r - n) / i) * i);
    let s = i.toString(),
        l = s.indexOf('.'),
        u = l >= 0 ? s.length - l : 0;
    if (u > 0) {
        let e = Math.pow(10, u);
        o = Math.round(o * e) / e;
    }
    return o;
}
