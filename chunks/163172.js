n.d(t, { b: () => i });
var u = n(647438),
    r = n(379955);
function i(e) {
    let [t, n] = (0, r.z)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
        i = (0, u.useCallback)(() => {
            n(!0);
        }, [n]),
        o = (0, u.useCallback)(() => {
            n(!1);
        }, [n]),
        a = (0, u.useCallback)(() => {
            n(!t);
        }, [n, t]);
    return {
        isExpanded: t,
        setExpanded: n,
        expand: i,
        collapse: o,
        toggle: a,
    };
}
