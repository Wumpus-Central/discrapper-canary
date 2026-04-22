n.d(t, { I: () => u, J: () => i });
var r = n(64700),
    s = n(735438);
let l = (e) => e,
    i = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            s = arguments.length > 3 ? arguments[3] : void 0,
            i = u(l, t, n, s),
            a = r.useRef(e);
        return (
            r.useEffect(() => {
                a.current = i(e);
            }, [e, i]),
            0 === t ? e : a.current
        );
    },
    u = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0,
            i = r.useRef((0, s.throttle)(e, t, l));
        return (
            r.useEffect(
                () => (
                    (i.current = (0, s.throttle)(e, t, l)),
                    () => {
                        i.current?.cancel();
                    }
                ),
                [e, t, l, ...n],
            ),
            i.current
        );
    };
