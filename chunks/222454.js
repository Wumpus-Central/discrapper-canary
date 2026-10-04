e.d(n, { OI: () => O, lE: () => C, v6: () => a });
var I = e(582128),
    s = e(478104),
    N = e(17928),
    u = e(73153),
    c = e(617617),
    r = e(573163),
    o = e(935208),
    l = e(911947),
    A = e(790453),
    E = e(790782);
function i(t, n, e) {
    return e || 0 === t
        ? null
        : null != n && (o.default.getNonTimestampBits(n) & s.I.NEEDS_INPUT) != 0
          ? s.I.NEEDS_INPUT
          : s.I.FINISHED;
}
function C(t) {
    return (0, N.bG)(
        [r.Ay, c.A],
        () =>
            null == t
                ? null
                : i(
                      r.Ay.getMentionCount(t, E.P.CONJURING_PROJECT),
                      r.Ay.ackMessageId(t, E.P.CONJURING_PROJECT),
                      (0, l.cI)(c.A.settings, t),
                  ),
        [t],
    );
}
function O() {
    return (0, N.cf)([r.Ay, c.A], () => {
        let t = !1,
            n = 0;
        for (let e of r.Ay.getResourceIds(E.P.CONJURING_PROJECT)) {
            let I = i(
                r.Ay.getMentionCount(e, E.P.CONJURING_PROJECT),
                r.Ay.ackMessageId(e, E.P.CONJURING_PROJECT),
                (0, l.cI)(c.A.settings, e),
            );
            null != I && ((t = !0), I === s.I.NEEDS_INPUT && n++);
        }
        return { hasUnread: t, badgeCount: n };
    });
}
function a(t) {
    let n = (0, N.bG)([r.Ay], () => null != t && r.Ay.getMentionCount(t, E.P.CONJURING_PROJECT) > 0, [t]),
        e = (0, A.A)();
    I.useEffect(() => {
        null != t && n && e && u.h.dispatch({ type: "VIBEGRATIONS_PROJECT_ACK", projectId: t });
    }, [t, n, e]);
}
