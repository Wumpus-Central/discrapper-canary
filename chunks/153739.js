n.d(t, { F7: () => c, tl: () => u, y3: () => d });
var l = n(702841),
    i = n(287809),
    r = n(842144),
    s = n(695515),
    a = n(438732);
function d() {
    let e = (0, a.A)();
    return (0, l.bG)([s.A, i.default], () => {
        if (!0 !== e) return i.default.getCurrentUser();
        let t = s.A.getSelectedTeenId();
        if (null !== t) return i.default.getUser(t);
    });
}
function c(e) {
    return (0, l.bG)([i.default], () => {
        let t = i.default.getUser(e);
        if (null != t) return t;
    });
}
function u() {
    let e = s.A.getSelectedTeenId(),
        { hasLoadedSettings: t, isLoading: n } = (0, l.cf)([r.A], () => ({
            hasLoadedSettings: null != e && r.A.hasSettingsForUser(e),
            isLoading: r.A.isLoading,
        }));
    return null !== e && !t && !n;
}
