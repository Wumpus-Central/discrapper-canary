r.d(e, { I: () => h, J: () => i });
var n = r(64700),
    u = r(735438);
function c(t) {
    return t;
}
let i = function (t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            u = arguments.length > 3 ? arguments[3] : void 0,
            i = h(c, e, r, u),
            o = n.useRef(t);
        return (
            n.useEffect(() => {
                o.current = i(t);
            }, [t, i]),
            0 === e ? t : o.current
        );
    },
    h = function (t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            c = arguments.length > 3 ? arguments[3] : void 0,
            i = n.useRef((0, u.throttle)(t, e, c));
        return (
            n.useEffect(
                () => (
                    (i.current = (0, u.throttle)(t, e, c)),
                    () => {
                        i.current?.cancel();
                    }
                ),
                [t, e, c, ...r],
            ),
            i.current
        );
    };
