t.d(s, { Z: () => u, b: () => d });
var n = t(228366),
    i = t(287809),
    l = t(249203),
    a = t(695904);
function r(e) {
    return e !== i.default.getCurrentUser()?.id && null != (0, a.aS)();
}
function u(e) {
    r(e) && n.h.dispatch({ type: "PROFILE_READ_STATE_MARK_VIEWED", userId: e });
}
function d(e) {
    r(e) && null == l.A.getEntry(e) && n.h.dispatch({ type: "PROFILE_READ_STATE_SEED_VIEWED", userId: e });
}
