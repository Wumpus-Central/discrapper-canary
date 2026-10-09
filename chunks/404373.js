n.d(t, { E1: () => p, NC: () => g, oF: () => m });
var r = n(582128),
    i = n(478104),
    l = n(17928),
    a = n(73153),
    o = n(617617),
    u = n(573163),
    s = n(935208),
    c = n(189714),
    h = n(148087),
    d = n(790782);
function f(e, t, n) {
    return n || 0 === e
        ? null
        : null != t && (s.default.getNonTimestampBits(t) & i.I.NEEDS_INPUT) != 0
          ? i.I.NEEDS_INPUT
          : i.I.FINISHED;
}
function m(e) {
    return (0, l.bG)(
        [u.Ay, o.A],
        () =>
            null == e
                ? null
                : f(
                      u.Ay.getMentionCount(e, d.P.CONJURING_PROJECT),
                      u.Ay.ackMessageId(e, d.P.CONJURING_PROJECT),
                      (0, c.j)(o.A.settings, e),
                  ),
        [e],
    );
}
function g() {
    return (0, l.cf)([u.Ay, o.A], () => {
        let e = 0,
            t = 0;
        for (let n of u.Ay.getResourceIds(d.P.CONJURING_PROJECT)) {
            let r = f(
                u.Ay.getMentionCount(n, d.P.CONJURING_PROJECT),
                u.Ay.ackMessageId(n, d.P.CONJURING_PROJECT),
                (0, c.j)(o.A.settings, n),
            );
            null != r && (e++, r === i.I.NEEDS_INPUT && t++);
        }
        return { hasUnread: e > 0, unreadCount: e, badgeCount: t };
    });
}
function p(e) {
    let t = (0, l.bG)([u.Ay], () => null != e && u.Ay.getMentionCount(e, d.P.CONJURING_PROJECT) > 0, [e]),
        n = (0, h.A)();
    r.useEffect(() => {
        null != e && t && n && a.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: e });
    }, [e, t, n]);
}
