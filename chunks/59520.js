"use strict";
n.d(t, { I: () => o, J: () => a });
var i = n(64700),
    r = n(735438);
let s = (e) => e,
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = o(s, t, n, r),
            l = i.useRef(e);
        return (
            i.useEffect(() => {
                l.current = a(e);
            }, [e, a]),
            0 === t ? e : l.current
        );
    },
    o = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            s = arguments.length > 3 ? arguments[3] : void 0,
            a = i.useRef((0, r.throttle)(e, t, s));
        return (
            i.useEffect(
                () => (
                    (a.current = (0, r.throttle)(e, t, s)),
                    () => {
                        a.current?.cancel();
                    }
                ),
                [e, t, s, ...n],
            ),
            a.current
        );
    };
