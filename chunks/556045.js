n.d(t, { h: () => c }), n(388685);
var r = n(647438),
    i = n(442837),
    a = n(314897),
    o = n(621853),
    l = n(86419);
function c(e) {
    let [t, n] = r.useState(!1),
        c = e.type,
        s = (0, i.e7)([a.default, o.Z], () => {
            var e;
            let t = a.default.getId();
            if (null == t) return !1;
            let n = o.Z.getUserProfile(t);
            return (null != (e = null == n ? void 0 : n.widgets) ? e : []).some((e) => e.type === c);
        }),
        u = (0, l.kQ)(e);
    return {
        shouldShowSuggestions: !s && !t && !u,
        handleDismissSuggestions: r.useCallback(() => {
            n(!0);
        }, []),
    };
}
