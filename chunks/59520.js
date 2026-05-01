n.d(e, { I: () => u, J: () => l });
var i = n(64700),
    r = n(735438);
let s = (t) => t,
    l = function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0,
            l = u(s, e, n, r),
            o = i.useRef(t);
        return (
            i.useEffect(() => {
                o.current = l(t);
            }, [t, l]),
            0 === e ? t : o.current
        );
    },
    u = function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            s = arguments.length > 3 ? arguments[3] : void 0,
            l = i.useRef((0, r.throttle)(t, e, s));
        return (
            i.useEffect(
                () => (
                    (l.current = (0, r.throttle)(t, e, s)),
                    () => {
                        l.current?.cancel();
                    }
                ),
                [t, e, s, ...n],
            ),
            l.current
        );
    };
