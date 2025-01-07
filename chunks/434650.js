r.d(n, {
    O: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(237617),
    o = r(266338);
let l = {};
function u(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = (0, a.useRef)(null),
        u = (0, s.Z)(null != n ? n : l),
        c = (0, a.useRef)(null);
    return (
        (0, a.useLayoutEffect)(() => {
            if (!r) return;
            null == c.current && (c.current = (0, o.c)(u.current));
            let n = i.current,
                a = c.current;
            if (null != n && null != a) (0, o.YP)(a, n, e);
        }, [r, e, u]),
        (0, a.useEffect)(() => {
            if (!r) return;
            let e = i.current,
                n = c.current;
            if (null != e && null != n)
                return () => {
                    (0, o.UC)(n, e);
                };
        }, [r, n]),
        i
    );
}
let c = new Map([[1, { threshold: 1 }]]);
function d(e) {
    let n = c.get(e);
    return null != n ? n : ((n = { threshold: e }), c.set(e, n), n);
}
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = (0, s.Z)((n) => {
            e(n.isIntersecting);
        }),
        o = (0, a.useMemo)(() => d(n), [n]);
    return u(i.current, o, r);
}
