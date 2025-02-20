n.d(t, { y: () => o });
var i = n(192379),
    r = n(237617),
    l = n(889711);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.useRef)(null),
        o = (0, i.useRef)(null),
        s = (0, r.Z)(() => e(n.current));
    return (
        (0, i.useLayoutEffect)(() => {
            if (!t) return;
            null == o.current && (o.current = (0, l.pP)(s.current));
            let e = n.current,
                i = o.current;
            null != e && null != i && (0, l.YP)(i, e);
        }, [t, e, s]),
        (0, i.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                i = o.current;
            if (null != e && null != i)
                return () => {
                    (0, l.UC)(i, e);
                };
        }, [t]),
        n
    );
}
