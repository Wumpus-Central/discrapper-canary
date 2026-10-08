e.d(n, { E1: () => a, NC: () => O, oF: () => A });
var N = e(582128),
    s = e(478104),
    I = e(17928),
    u = e(73153),
    o = e(617617),
    c = e(573163),
    l = e(935208),
    r = e(189714),
    C = e(148087),
    E = e(790782);
function i(t, n, e) {
    return e || 0 === t
        ? null
        : null != n && (l.default.getNonTimestampBits(n) & s.I.NEEDS_INPUT) != 0
          ? s.I.NEEDS_INPUT
          : s.I.FINISHED;
}
function A(t) {
    return (0, I.bG)(
        [c.Ay, o.A],
        () =>
            null == t
                ? null
                : i(
                      c.Ay.getMentionCount(t, E.P.CONJURING_PROJECT),
                      c.Ay.ackMessageId(t, E.P.CONJURING_PROJECT),
                      (0, r.j)(o.A.settings, t),
                  ),
        [t],
    );
}
function O() {
    return (0, I.cf)([c.Ay, o.A], () => {
        let t = !1,
            n = 0;
        for (let e of c.Ay.getResourceIds(E.P.CONJURING_PROJECT)) {
            let N = i(
                c.Ay.getMentionCount(e, E.P.CONJURING_PROJECT),
                c.Ay.ackMessageId(e, E.P.CONJURING_PROJECT),
                (0, r.j)(o.A.settings, e),
            );
            null != N && ((t = !0), N === s.I.NEEDS_INPUT && n++);
        }
        return { hasUnread: t, badgeCount: n };
    });
}
function a(t) {
    let n = (0, I.bG)([c.Ay], () => null != t && c.Ay.getMentionCount(t, E.P.CONJURING_PROJECT) > 0, [t]),
        e = (0, C.A)();
    N.useEffect(() => {
        null != t && n && e && u.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: t });
    }, [t, n, e]);
}
