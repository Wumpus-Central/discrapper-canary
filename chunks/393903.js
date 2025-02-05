n.d(t, { y: () => a });
var l = n(192379),
    i = n(237617),
    r = n(889711);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, l.useRef)(null),
        a = (0, l.useRef)(null),
        s = (0, i.Z)(() => e(n.current));
    return (
        (0, l.useLayoutEffect)(() => {
            if (!t) return;
            null == a.current && (a.current = (0, r.pP)(s.current));
            let e = n.current,
                l = a.current;
            null != e && null != l && (0, r.YP)(l, e);
        }, [t, e, s]),
        (0, l.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                l = a.current;
            if (null != e && null != l)
                return () => {
                    (0, r.UC)(l, e);
                };
        }, [t]),
        n
    );
}
