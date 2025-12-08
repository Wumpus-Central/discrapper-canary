n.d(t, { h: () => c }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(314897),
    a = n(621853),
    o = n(86419);
function c(e) {
    let [t, n] = r.useState(!1),
        c = e.type,
        s = (0, i.e7)([l.default, a.Z], () => {
            var e;
            let t = l.default.getId();
            if (null == t) return !1;
            let n = a.Z.getUserProfile(t);
            return (null != (e = null == n ? void 0 : n.widgets) ? e : []).some((e) => e.type === c);
        }),
        u = (0, o.kQ)(e);
    return {
        shouldShowSuggestions: !s && !t && !u,
        handleDismissSuggestions: r.useCallback(() => {
            n(!0);
        }, []),
    };
}
