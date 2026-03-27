a.d(t, { A: () => i });
var r = a(64700),
    n = a(287809),
    s = a(657331);
function i() {
    return (0, r.useCallback)(() => {
        let e = n.default.getCurrentUser();
        null != e && (0, s.openUserProfileModal)({ userId: e.id });
    }, []);
}
