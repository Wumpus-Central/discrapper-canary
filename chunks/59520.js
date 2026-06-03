r.d(t, { I: () => i, J: () => h });
var n = r(64700),
    u = r(735438);
let c = (e) => e,
    h = function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            u = arguments.length > 3 ? arguments[3] : void 0,
            h = i(c, t, r, u),
            s = n.useRef(e);
        return (
            n.useEffect(() => {
                s.current = h(e);
            }, [e, h]),
            0 === t ? e : s.current
        );
    },
    i = function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            c = arguments.length > 3 ? arguments[3] : void 0,
            h = n.useRef((0, u.throttle)(e, t, c));
        return (
            n.useEffect(
                () => (
                    (h.current = (0, u.throttle)(e, t, c)),
                    () => {
                        h.current?.cancel();
                    }
                ),
                [e, t, c, ...r],
            ),
            h.current
        );
    };
