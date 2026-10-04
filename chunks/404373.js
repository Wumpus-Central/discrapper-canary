e.d(n, { E1: () => O, NC: () => a, oF: () => i });
var N = e(582128),
    s = e(478104),
    u = e(17928),
    I = e(73153),
    o = e(617617),
    r = e(573163),
    c = e(935208),
    l = e(189714),
    A = e(148087),
    C = e(790782);
function E(t, n, e) {
    return e || 0 === t
        ? null
        : null != n && (c.default.getNonTimestampBits(n) & s.I.NEEDS_INPUT) != 0
          ? s.I.NEEDS_INPUT
          : s.I.FINISHED;
}
function i(t) {
    return (0, u.bG)(
        [r.Ay, o.A],
        () =>
            null == t
                ? null
                : E(
                      r.Ay.getMentionCount(t, C.P.CONJURING_PROJECT),
                      r.Ay.ackMessageId(t, C.P.CONJURING_PROJECT),
                      (0, l.j)(o.A.settings, t),
                  ),
        [t],
    );
}
function a() {
    return (0, u.cf)([r.Ay, o.A], () => {
        let t = !1,
            n = 0;
        for (let e of r.Ay.getResourceIds(C.P.CONJURING_PROJECT)) {
            let N = E(
                r.Ay.getMentionCount(e, C.P.CONJURING_PROJECT),
                r.Ay.ackMessageId(e, C.P.CONJURING_PROJECT),
                (0, l.j)(o.A.settings, e),
            );
            null != N && ((t = !0), N === s.I.NEEDS_INPUT && n++);
        }
        return { hasUnread: t, badgeCount: n };
    });
}
function O(t) {
    let n = (0, u.bG)([r.Ay], () => null != t && r.Ay.getMentionCount(t, C.P.CONJURING_PROJECT) > 0, [t]),
        e = (0, A.A)();
    N.useEffect(() => {
        null != t && n && e && I.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: t });
    }, [t, n, e]);
}
