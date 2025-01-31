n.d(t, {
    T: () => r,
    h: () => s
}),
    n(47120);
var i = n(192379),
    l = n(392711);
let a = (e) => e,
    r = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0,
            r = s(a, t, n, l),
            o = i.useRef(e);
        return (
            i.useEffect(() => {
                let t = r(e);
                o.current = t;
            }, [e, r]),
            0 === t ? e : o.current
        );
    },
    s = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            a = arguments.length > 3 ? arguments[3] : void 0,
            r = i.useRef((0, l.throttle)(e, t, a));
        return (
            i.useEffect(
                () => (
                    (r.current = (0, l.throttle)(e, t, a)),
                    () => {
                        var e;
                        null === (e = r.current) || void 0 === e || e.cancel();
                    }
                ),
                [e, t, a, ...n]
            ),
            r.current
        );
    };
