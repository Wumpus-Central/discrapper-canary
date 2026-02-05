"use strict";
n.d(t, { I: () => o, J: () => s });
var r = n(64700),
    i = n(735438);
let a = (e) => e,
    s = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            s = o(a, t, n, i),
            l = r.useRef(e);
        return (
            r.useEffect(() => {
                l.current = s(e);
            }, [e, s]),
            0 === t ? e : l.current
        );
    },
    o = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = r.useRef((0, i.throttle)(e, t, a));
        return (
            r.useEffect(
                () => (
                    (s.current = (0, i.throttle)(e, t, a)),
                    () => {
                        s.current?.cancel();
                    }
                ),
                [e, t, a, ...n],
            ),
            s.current
        );
    };
