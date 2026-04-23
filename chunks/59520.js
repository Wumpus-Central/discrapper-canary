"use strict";
n.d(t, { I: () => o, J: () => a });
var r = n(64700),
    i = n(735438);
let s = (e) => e,
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = o(s, t, n, i),
            l = r.useRef(e);
        return (
            r.useEffect(() => {
                l.current = a(e);
            }, [e, a]),
            0 === t ? e : l.current
        );
    },
    o = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            s = arguments.length > 3 ? arguments[3] : void 0,
            a = r.useRef((0, i.throttle)(e, t, s));
        return (
            r.useEffect(
                () => (
                    (a.current = (0, i.throttle)(e, t, s)),
                    () => {
                        a.current?.cancel();
                    }
                ),
                [e, t, s, ...n],
            ),
            a.current
        );
    };
