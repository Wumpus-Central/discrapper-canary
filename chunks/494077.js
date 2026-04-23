"use strict";
n.d(t, { E: () => s });
var r = n(64700),
    i = n(492313);
function s(e) {
    let [t, n] = (0, i.P)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
        s = (0, r.useCallback)(() => {
            n(!0);
        }, [n]),
        a = (0, r.useCallback)(() => {
            n(!1);
        }, [n]),
        o = (0, r.useCallback)(() => {
            n(!t);
        }, [n, t]);
    return { isExpanded: t, setExpanded: n, expand: s, collapse: a, toggle: o };
}
