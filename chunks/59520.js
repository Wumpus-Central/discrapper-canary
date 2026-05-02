n.d(e, { I: () => u, J: () => l });
var s = n(64700),
    i = n(735438);
let r = (t) => t,
    l = function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = u(r, e, n, i),
            o = s.useRef(t);
        return (
            s.useEffect(() => {
                o.current = l(t);
            }, [t, l]),
            0 === e ? t : o.current
        );
    },
    u = function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0,
            l = s.useRef((0, i.throttle)(t, e, r));
        return (
            s.useEffect(
                () => (
                    (l.current = (0, i.throttle)(t, e, r)),
                    () => {
                        l.current?.cancel();
                    }
                ),
                [t, e, r, ...n],
            ),
            l.current
        );
    };
