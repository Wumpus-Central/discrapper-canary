n.d(t, {
    y: function () {
        return r;
    }
});
var i = n(192379),
    l = n(237617),
    a = n(889711);
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.useRef)(null),
        r = (0, i.useRef)(null),
        s = (0, l.Z)(() => e(n.current));
    return (
        (0, i.useLayoutEffect)(() => {
            if (!t) return;
            null == r.current && (r.current = (0, a.pP)(s.current));
            let e = n.current,
                i = r.current;
            if (null != e && null != i) (0, a.YP)(i, e);
        }, [t, e, s]),
        (0, i.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                i = r.current;
            if (null != e && null != i)
                return () => {
                    (0, a.UC)(i, e);
                };
        }, [t]),
        n
    );
}
