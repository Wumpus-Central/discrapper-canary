e.d(n, { E1: () => A, NC: () => J, W5: () => R, Yl: () => O, tz: () => N });
var u = e(582128),
    r = e(17928),
    i = e(73153),
    s = e(617617),
    l = e(573163),
    o = e(935208),
    c = e(260498),
    a = e(189714),
    C = e(790782);
function f(t, n) {
    return t > 0 || (null != n && 0 !== o.default.getNonTimestampBits(n));
}
function d(t, n, e) {
    return e || !f(t, n) ? null : t;
}
function N(t) {
    return f(l.Ay.getMentionCount(t, C.P.CONJURING_PROJECT), l.Ay.ackMessageId(t, C.P.CONJURING_PROJECT));
}
function O(t) {
    return (0, r.bG)(
        [l.Ay, s.A],
        () =>
            null == t
                ? null
                : d(
                      l.Ay.getMentionCount(t, C.P.CONJURING_PROJECT),
                      l.Ay.ackMessageId(t, C.P.CONJURING_PROJECT),
                      (0, a.j)(s.A.settings, t),
                  ),
        [t],
    );
}
function R() {
    return (0, r.yK)([l.Ay, s.A], () =>
        l.Ay.getResourceIds(C.P.CONJURING_PROJECT).filter(
            (t) =>
                null !=
                d(
                    l.Ay.getMentionCount(t, C.P.CONJURING_PROJECT),
                    l.Ay.ackMessageId(t, C.P.CONJURING_PROJECT),
                    (0, a.j)(s.A.settings, t),
                ),
        ),
    );
}
function J(t) {
    return (0, r.cf)(
        [l.Ay, s.A, c.Ay],
        () => {
            let n = 0,
                e = 0;
            for (let u of l.Ay.getResourceIds(C.P.CONJURING_PROJECT)) {
                if (
                    null != t &&
                    !(function (t, n) {
                        if (null == t) return !1;
                        let e = t.guild_id ?? t.preview_guild_id ?? null;
                        return null == e || e === n;
                    })(c.Ay.getProject(u), t)
                )
                    continue;
                let r = d(
                    l.Ay.getMentionCount(u, C.P.CONJURING_PROJECT),
                    l.Ay.ackMessageId(u, C.P.CONJURING_PROJECT),
                    (0, a.j)(s.A.settings, u),
                );
                null != r && (n++, (e += r));
            }
            return { hasUnread: n > 0, unreadCount: n, badgeCount: e };
        },
        [t],
    );
}
function A(t, n) {
    let e = (0, r.bG)(
        [l.Ay],
        () =>
            null != t && f(l.Ay.getMentionCount(t, C.P.CONJURING_PROJECT), l.Ay.ackMessageId(t, C.P.CONJURING_PROJECT)),
        [t],
    );
    u.useEffect(() => {
        null != t && e && n && i.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: t });
    }, [t, e, n]);
}
