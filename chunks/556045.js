n.d(t, { h: () => s }), n(388685);
var r = n(647438),
    i = n(442837),
    a = n(314897),
    l = n(621853),
    o = n(86419);
function s(e) {
    let [t, n] = r.useState(!1),
        s = e.type,
        c = (0, i.e7)([a.default, l.Z], () => {
            var e;
            let t = a.default.getId();
            if (null == t) return !1;
            let n = l.Z.getUserProfile(t);
            return (null != (e = null == n ? void 0 : n.widgets) ? e : []).some((e) => e.type === s);
        }),
        u = (0, o.kQ)(e);
    return {
        shouldShowSuggestions: !c && !t && !u,
        handleDismissSuggestions: r.useCallback(() => {
            n(!0);
        }, []),
    };
}
