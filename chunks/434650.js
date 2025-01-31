n.d(t, { O: () => c }), n(47120);
var i = n(192379),
    r = n(237617),
    a = n(266338);
let s = {};
function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = (0, i.useRef)(null),
        l = (0, r.Z)(null != t ? t : s),
        u = (0, i.useRef)(null);
    return (
        (0, i.useLayoutEffect)(() => {
            if (!n) return;
            null == u.current && (u.current = (0, a.c)(l.current));
            let t = o.current,
                i = u.current;
            null != t && null != i && (0, a.YP)(i, t, e);
        }, [n, e, l]),
        (0, i.useEffect)(() => {
            if (!n) return;
            let e = o.current,
                t = u.current;
            if (null != e && null != t)
                return () => {
                    (0, a.UC)(t, e);
                };
        }, [n, t]),
        o
    );
}
let l = new Map([[1, { threshold: 1 }]]);
function u(e) {
    let t = l.get(e);
    return null != t || ((t = { threshold: e }), l.set(e, t)), t;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = (0, r.Z)((t) => {
            e(t.isIntersecting);
        }),
        s = (0, i.useMemo)(() => u(t), [t]);
    return o(a.current, s, n);
}
