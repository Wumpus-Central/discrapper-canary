n.d(t, { O: () => u }), n(47120);
var r = n(192379),
    i = n(237617),
    o = n(266338);
let a = {};
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = (0, r.useRef)(null),
        l = (0, i.Z)(null != t ? t : a),
        c = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, o.c)(l.current));
            let t = s.current,
                r = c.current;
            null != t && null != r && (0, o.YP)(r, t, e);
        }, [n, e, l]),
        (0, r.useEffect)(() => {
            if (!n) return;
            let e = s.current,
                t = c.current;
            if (null != e && null != t)
                return () => {
                    (0, o.UC)(t, e);
                };
        }, [n, t]),
        s
    );
}
let l = new Map([[1, { threshold: 1 }]]);
function c(e) {
    let t = l.get(e);
    return null != t || ((t = { threshold: e }), l.set(e, t)), t;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = (0, i.Z)((t) => {
            e(t.isIntersecting);
        }),
        a = (0, r.useMemo)(() => c(t), [t]);
    return s(o.current, a, n);
}
