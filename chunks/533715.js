"use strict";
n.d(t, { U: () => r });
var i = n(64700);
function r(e) {
    let t = (0, i.useRef)(null),
        n = (0, i.useRef)(void 0),
        r = (0, i.useCallback)(
            (t) => {
                if ("function" == typeof e) {
                    let n = e(t);
                    return () => {
                        "function" == typeof n ? n() : e(null);
                    };
                }
                if (e)
                    return (
                        (e.current = t),
                        () => {
                            e.current = null;
                        }
                    );
            },
            [e],
        );
    return (0, i.useMemo)(
        () => ({
            get current() {
                return t.current;
            },
            set current(value) {
                (t.current = value),
                    n.current && (n.current(), (n.current = void 0)),
                    null != value && (n.current = r(value));
            },
        }),
        [r],
    );
}
