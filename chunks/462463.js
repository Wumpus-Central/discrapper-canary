r.d(t, { A: () => i });
var a = r(64700),
    n = r(287809),
    s = r(657331);
function i() {
    return (0, a.useCallback)(() => {
        let e = n.default.getCurrentUser();
        null != e && (0, s.openUserProfileModal)({ userId: e.id });
    }, []);
}
