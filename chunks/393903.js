n.d(t, { y: () => s });
var r = n(192379),
    l = n(237617),
    i = n(889711);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.useRef)(null),
        s = (0, r.useRef)(null),
        o = (0, l.Z)(() => e(n.current));
    return (
        (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == s.current && (s.current = (0, i.pP)(o.current));
            let e = n.current,
                r = s.current;
            null != e && null != r && (0, i.YP)(r, e);
        }, [t, e, o]),
        (0, r.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                r = s.current;
            if (null != e && null != r)
                return () => {
                    (0, i.UC)(r, e);
                };
        }, [t]),
        n
    );
}
