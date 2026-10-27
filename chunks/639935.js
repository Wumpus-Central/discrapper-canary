i.d(l, { Z: () => d, b: () => u });
var t = i(73153),
    n = i(287809),
    a = i(249203),
    s = i(695904);
function r(e) {
    return e !== n.default.getCurrentUser()?.id && null != (0, s.aS)();
}
function d(e) {
    r(e) && t.h.dispatch({ type: "PROFILE_READ_STATE_MARK_VIEWED", userId: e });
}
function u(e) {
    r(e) && null == a.A.getEntry(e) && t.h.dispatch({ type: "PROFILE_READ_STATE_SEED_VIEWED", userId: e });
}
