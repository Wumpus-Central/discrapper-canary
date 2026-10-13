e.d(n, { E1: () => P, NC: () => J, W5: () => A, Yl: () => R, tz: () => O });
var r = e(582128),
    u = e(17928),
    i = e(73153),
    s = e(617617),
    l = e(573163),
    o = e(935208),
    a = e(260498),
    c = e(189714),
    C = e(148087),
    f = e(790782);
function d(t, n) {
    return t > 0 || (null != n && 0 !== o.default.getNonTimestampBits(n));
}
function N(t, n, e) {
    return e || !d(t, n) ? null : t;
}
function O(t) {
    return d(l.Ay.getMentionCount(t, f.P.CONJURING_PROJECT), l.Ay.ackMessageId(t, f.P.CONJURING_PROJECT));
}
function R(t) {
    return (0, u.bG)(
        [l.Ay, s.A],
        () =>
            null == t
                ? null
                : N(
                      l.Ay.getMentionCount(t, f.P.CONJURING_PROJECT),
                      l.Ay.ackMessageId(t, f.P.CONJURING_PROJECT),
                      (0, c.j)(s.A.settings, t),
                  ),
        [t],
    );
}
function A() {
    return (0, u.yK)([l.Ay, s.A], () =>
        l.Ay.getResourceIds(f.P.CONJURING_PROJECT).filter(
            (t) =>
                null !=
                N(
                    l.Ay.getMentionCount(t, f.P.CONJURING_PROJECT),
                    l.Ay.ackMessageId(t, f.P.CONJURING_PROJECT),
                    (0, c.j)(s.A.settings, t),
                ),
        ),
    );
}
function J(t) {
    return (0, u.cf)(
        [l.Ay, s.A, a.Ay],
        () => {
            let n = 0,
                e = 0;
            for (let r of l.Ay.getResourceIds(f.P.CONJURING_PROJECT)) {
                if (
                    null != t &&
                    !(function (t, n) {
                        if (null == t) return !1;
                        let e = t.guild_id ?? t.preview_guild_id ?? null;
                        return null == e || e === n;
                    })(a.Ay.getProject(r), t)
                )
                    continue;
                let u = N(
                    l.Ay.getMentionCount(r, f.P.CONJURING_PROJECT),
                    l.Ay.ackMessageId(r, f.P.CONJURING_PROJECT),
                    (0, c.j)(s.A.settings, r),
                );
                null != u && (n++, (e += u));
            }
            return { hasUnread: n > 0, unreadCount: n, badgeCount: e };
        },
        [t],
    );
}
function P(t) {
    let n = (0, u.bG)(
            [l.Ay],
            () =>
                null != t &&
                d(l.Ay.getMentionCount(t, f.P.CONJURING_PROJECT), l.Ay.ackMessageId(t, f.P.CONJURING_PROJECT)),
            [t],
        ),
        e = (0, C.A)();
    r.useEffect(() => {
        null != t && n && e && i.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: t });
    }, [t, n, e]);
}
