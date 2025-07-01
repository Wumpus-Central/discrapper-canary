(n.d(t, {
    T: () => a,
    h: () => o
}),
    n(388685));
var r = n(73800),
    l = n(392711);
let i = (e) => e,
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = o(i, t, n, l),
            u = r.useRef(e);
        return (
            r.useEffect(() => {
                u.current = a(e);
            }, [e, a]),
            0 === t ? e : u.current
        );
    },
    o = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = r.useRef((0, l.throttle)(e, t, i));
        return (
            r.useEffect(
                () => (
                    (a.current = (0, l.throttle)(e, t, i)),
                    () => {
                        var e;
                        null == (e = a.current) || e.cancel();
                    }
                ),
                [e, t, i, ...n]
            ),
            a.current
        );
    };
