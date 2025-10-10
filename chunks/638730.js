n.d(t, {
    T: () => a,
    h: () => s,
}),
    n(388685);
var r = n(647438),
    i = n(392711);
let l = (e) => e,
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = s(l, t, n, i),
            o = r.useRef(e);
        return (
            r.useEffect(() => {
                o.current = a(e);
            }, [e, a]),
            0 === t ? e : o.current
        );
    },
    s = function (e, t) {
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
