n.d(t, { I: () => _, J: () => s });
var i = n(64700),
    r = n(735438);
let a = (e) => e,
    s = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = _(a, t, n, r),
            l = i.useRef(e);
        return (
            i.useEffect(() => {
                l.current = s(e);
            }, [e, s]),
            0 === t ? e : l.current
        );
    },
    _ = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = i.useRef((0, r.throttle)(e, t, a));
        return (
            i.useEffect(
                () => (
                    (s.current = (0, r.throttle)(e, t, a)),
                    () => {
                        s.current?.cancel();
                    }
                ),
                [e, t, a, ...n],
            ),
            s.current
        );
    };
