r.d(n, {
    O: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(237617),
    s = r(266338);
let l = {};
function u(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = (0, a.useRef)(null),
        u = (0, o.Z)(null != n ? n : l),
        c = (0, a.useRef)(null);
    return (
        (0, a.useLayoutEffect)(() => {
            if (!r) return;
            null == c.current && (c.current = (0, s.c)(u.current));
            let n = i.current,
                a = c.current;
            if (null != n && null != a) (0, s.YP)(a, n, e);
        }, [r, e, u]),
        (0, a.useEffect)(() => {
            if (!r) return;
            let e = i.current,
                n = c.current;
            if (null != e && null != n)
                return () => {
                    (0, s.UC)(n, e);
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
        i = (0, o.Z)((n) => {
            e(n.isIntersecting);
        }),
        s = (0, a.useMemo)(() => d(n), [n]);
    return u(i.current, s, r);
}
