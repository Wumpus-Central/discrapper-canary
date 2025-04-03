n.d(t, {
    T: () => o,
    h: () => a
}),
    n(47120);
var r = n(192379),
    i = n(392711);
let l = (e) => e,
    o = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = a(l, t, n, i),
            s = r.useRef(e);
        return (
            r.useEffect(() => {
                s.current = o(e);
            }, [e, o]),
            0 === t ? e : s.current
        );
    },
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0,
            o = r.useRef((0, i.throttle)(e, t, l));
        return (
            r.useEffect(
                () => (
                    (o.current = (0, i.throttle)(e, t, l)),
                    () => {
                        var e;
                        null == (e = o.current) || e.cancel();
                    }
                ),
                [e, t, l, ...n]
            ),
            o.current
        );
    };
