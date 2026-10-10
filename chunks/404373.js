e.d(n, { E1: () => P, NC: () => a, Yl: () => O, tz: () => J });
var u = e(582128),
    s = e(17928),
    C = e(73153),
    o = e(617617),
    r = e(573163),
    c = e(935208),
    i = e(189714),
    A = e(148087),
    N = e(790782);
function R(t, n) {
    return t > 0 || (null != n && 0 !== c.default.getNonTimestampBits(n));
}
function l(t, n, e) {
    return e || !R(t, n) ? null : t;
}
function J(t) {
    return R(r.Ay.getMentionCount(t, N.P.CONJURING_PROJECT), r.Ay.ackMessageId(t, N.P.CONJURING_PROJECT));
}
function O(t) {
    return (0, s.bG)(
        [r.Ay, o.A],
        () =>
            null == t
                ? null
                : l(
                      r.Ay.getMentionCount(t, N.P.CONJURING_PROJECT),
                      r.Ay.ackMessageId(t, N.P.CONJURING_PROJECT),
                      (0, i.j)(o.A.settings, t),
                  ),
        [t],
    );
}
function a() {
    return (0, s.cf)([r.Ay, o.A], () => {
        let t = 0,
            n = 0;
        for (let e of r.Ay.getResourceIds(N.P.CONJURING_PROJECT)) {
            let u = l(
                r.Ay.getMentionCount(e, N.P.CONJURING_PROJECT),
                r.Ay.ackMessageId(e, N.P.CONJURING_PROJECT),
                (0, i.j)(o.A.settings, e),
            );
            null != u && (t++, (n += u));
        }
        return { hasUnread: t > 0, unreadCount: t, badgeCount: n };
    });
}
function P(t) {
    let n = (0, s.bG)(
            [r.Ay],
            () =>
                null != t &&
                R(r.Ay.getMentionCount(t, N.P.CONJURING_PROJECT), r.Ay.ackMessageId(t, N.P.CONJURING_PROJECT)),
            [t],
        ),
        e = (0, A.A)();
    u.useEffect(() => {
        null != t && n && e && C.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: t });
    }, [t, n, e]);
}
