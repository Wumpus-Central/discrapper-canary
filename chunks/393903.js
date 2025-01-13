n.d(t, {
    y: function () {
        return a;
    }
});
var i = n(192379),
    l = n(237617),
    r = n(889711);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.useRef)(null),
        a = (0, i.useRef)(null),
        s = (0, l.Z)(() => e(n.current));
    return (
        (0, i.useLayoutEffect)(() => {
            if (!t) return;
            null == a.current && (a.current = (0, r.pP)(s.current));
            let e = n.current,
                i = a.current;
            if (null != e && null != i) (0, r.YP)(i, e);
        }, [t, e, s]),
        (0, i.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                i = a.current;
            if (null != e && null != i)
                return () => {
                    (0, r.UC)(i, e);
                };
        }, [t]),
        n
    );
}
