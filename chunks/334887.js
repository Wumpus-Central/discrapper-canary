"use strict";
r.d(t, { U: () => o });
var n = r(582128);
function o(e) {
    let t = (0, n.useRef)(null),
        r = (0, n.useRef)(void 0),
        o = (0, n.useCallback)(
            (t) => {
                if ("function" == typeof e) {
                    let r = e(t);
                    return () => {
                        "function" == typeof r ? r() : e(null);
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
    return (0, n.useMemo)(
        () => ({
            get current() {
                return t.current;
            },
            set current(value) {
                (t.current = value),
                    r.current && (r.current(), (r.current = void 0)),
                    null != value && (r.current = o(value));
            },
        }),
        [o],
    );
}
