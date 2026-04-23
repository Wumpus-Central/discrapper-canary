i.d(t, { q: () => d });
var n = i(64700),
    l = i(311907),
    s = i(961350),
    a = i(622543),
    r = i(735321);
function d(e) {
    let [t, i] = n.useState(!1),
        d = e.type,
        o = (0, l.bG)([s.default, a.A], () => {
            let e = s.default.getId();
            if (null == e) return !1;
            let t = a.A.getUserProfile(e);
            return (t?.widgets ?? []).some((e) => e.type === d);
        }),
        c = (0, r.uA)(e);
    return {
        shouldShowSuggestions: !o && !t && !c,
        handleDismissSuggestions: n.useCallback(() => {
            i(!0);
        }, []),
    };
}
