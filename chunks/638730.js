n.d(t, {
    T: () => a,
    h: () => o,
}),
    n(388685);
var r = n(647438),
    i = n(392711);
let l = (e) => e,
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = o(l, t, n, i),
            s = r.useRef(e);
        return (
            r.useEffect(() => {
                s.current = a(e);
            }, [e, a]),
            0 === t ? e : s.current
        );
    },
    o = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = r.useRef((0, i.throttle)(e, t, l));
        return (
            r.useEffect(
                () => (
                    (a.current = (0, i.throttle)(e, t, l)),
                    () => {
                        var e;
                        null == (e = a.current) || e.cancel();
                    }
                ),
                [e, t, l, ...n],
            ),
            a.current
        );
    };
