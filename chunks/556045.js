r.d(t, { h: () => c }), r(388685);
var n = r(647438),
    i = r(442837),
    o = r(314897),
    a = r(621853),
    l = r(86419);
function c(e) {
    let [t, r] = n.useState(!1),
        c = e.type,
        s = (0, i.e7)([o.default, a.Z], () => {
            var e;
            let t = o.default.getId();
            if (null == t) return !1;
            let r = a.Z.getUserProfile(t);
            return (null != (e = null == r ? void 0 : r.widgets) ? e : []).some((e) => e.type === c);
        }),
        u = (0, l.kQ)(e);
    return {
        shouldShowSuggestions: !s && !t && !u,
        handleDismissSuggestions: n.useCallback(() => {
            r(!0);
        }, []),
    };
}
