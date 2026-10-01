t.d(l, { Z: () => u, b: () => d });
var s = t(73153),
    n = t(287809),
    i = t(249203),
    a = t(695904);
function r(e) {
    return e !== n.default.getCurrentUser()?.id && null != (0, a.aS)();
}
function u(e) {
    r(e) && s.h.dispatch({ type: "PROFILE_READ_STATE_MARK_VIEWED", userId: e });
}
function d(e) {
    r(e) && null == i.A.getEntry(e) && s.h.dispatch({ type: "PROFILE_READ_STATE_SEED_VIEWED", userId: e });
}
