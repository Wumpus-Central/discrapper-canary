n.d(t, {
    y: function () {
        return o;
    }
});
var r = n(192379),
    i = n(237617),
    l = n(889711);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.useRef)(null),
        o = (0, r.useRef)(null),
        s = (0, i.Z)(() => e(n.current));
    return (
        (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == o.current && (o.current = (0, l.pP)(s.current));
            let e = n.current,
                r = o.current;
            if (null != e && null != r) (0, l.YP)(r, e);
        }, [t, e, s]),
        (0, r.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                r = o.current;
            if (null != e && null != r)
                return () => {
                    (0, l.UC)(r, e);
                };
        }, [t]),
        n
    );
}
