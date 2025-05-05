n.d(t, { O: () => u }), n(388685);
var r = n(73800),
    i = n(237617),
    a = n(266338);
let o = {};
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = (0, r.useRef)(null),
        l = (0, i.Z)(null != t ? t : o),
        c = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, a.c)(l.current));
            let t = s.current,
                r = c.current;
            null != t && null != r && (0, a.YP)(r, t, e);
        }, [n, e, l]),
        (0, r.useEffect)(() => {
            if (!n) return;
            let e = s.current,
                t = c.current;
            if (null != e && null != t)
                return () => {
                    (0, a.UC)(t, e);
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
        a = (0, i.Z)((t) => {
            e(t.isIntersecting);
        }),
        o = (0, r.useMemo)(() => c(t), [t]);
    return s(a.current, o, n);
}
