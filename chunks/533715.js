"use strict";
n.d(t, { U: () => i });
var r = n(64700);
function i(e) {
    let t = (0, r.useRef)(null),
        n = (0, r.useRef)(void 0),
        i = (0, r.useCallback)(
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
    return (0, r.useMemo)(
        () => ({
            get current() {
                return t.current;
            },
            set current(value) {
                (t.current = value),
                    n.current && (n.current(), (n.current = void 0)),
                    null != value && (n.current = i(value));
            },
        }),
        [i],
    );
}
