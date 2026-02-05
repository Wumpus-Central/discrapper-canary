n.d(t, { q: () => o });
var i = n(64700),
    l = n(311907),
    a = n(961350),
    r = n(622543),
    s = n(735321);
function o(e) {
    let [t, n] = i.useState(!1),
        o = e.type,
        d = (0, l.bG)([a.default, r.A], () => {
            let e = a.default.getId();
            if (null == e) return !1;
            let t = r.A.getUserProfile(e);
            return (t?.widgets ?? []).some((e) => e.type === o);
        }),
        c = (0, s.uA)(e);
    return {
        shouldShowSuggestions: !d && !t && !c,
        handleDismissSuggestions: i.useCallback(() => {
            n(!0);
        }, []),
    };
}
