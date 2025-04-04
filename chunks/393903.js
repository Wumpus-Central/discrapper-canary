n.d(t, { y: () => a });
var r = n(192379),
    i = n(237617),
    o = n(889711);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.useRef)(null),
        a = (0, r.useRef)(null),
        s = (0, i.Z)(() => e(n.current));
    return (
        (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == a.current && (a.current = (0, o.pP)(s.current));
            let e = n.current,
                r = a.current;
            null != e && null != r && (0, o.YP)(r, e);
        }, [t, e, s]),
        (0, r.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                r = a.current;
            if (null != e && null != r)
                return () => {
                    (0, o.UC)(r, e);
                };
        }, [t]),
        n
    );
}
