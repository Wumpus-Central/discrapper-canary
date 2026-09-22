n.d(s, { Z: () => u, b: () => d });
var t = n(228366),
    i = n(287809),
    l = n(249203),
    a = n(695904);
function r(e) {
    return e !== i.default.getCurrentUser()?.id && null != (0, a.aS)();
}
function u(e) {
    r(e) && t.h.dispatch({ type: "PROFILE_READ_STATE_MARK_VIEWED", userId: e });
}
function d(e) {
    r(e) && null == l.A.getEntry(e) && t.h.dispatch({ type: "PROFILE_READ_STATE_SEED_VIEWED", userId: e });
}
