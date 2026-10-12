n.d(e, { E1: () => R, NC: () => p, Yl: () => f, tz: () => h });
var r = n(582128),
    i = n(17928),
    l = n(73153),
    u = n(617617),
    o = n(573163),
    a = n(935208),
    c = n(260498),
    s = n(189714),
    d = n(148087),
    _ = n(790782);
function E(t, e) {
    return t > 0 || (null != e && 0 !== a.default.getNonTimestampBits(e));
}
function C(t, e, n) {
    return n || !E(t, e) ? null : t;
}
function h(t) {
    return E(o.Ay.getMentionCount(t, _.P.CONJURING_PROJECT), o.Ay.ackMessageId(t, _.P.CONJURING_PROJECT));
}
function f(t) {
    return (0, i.bG)(
        [o.Ay, u.A],
        () =>
            null == t
                ? null
                : C(
                      o.Ay.getMentionCount(t, _.P.CONJURING_PROJECT),
                      o.Ay.ackMessageId(t, _.P.CONJURING_PROJECT),
                      (0, s.j)(u.A.settings, t),
                  ),
        [t],
    );
}
function p(t) {
    return (0, i.cf)(
        [o.Ay, u.A, c.Ay],
        () => {
            let e = 0,
                n = 0;
            for (let r of o.Ay.getResourceIds(_.P.CONJURING_PROJECT)) {
                if (
                    null != t &&
                    !(function (t, e) {
                        if (null == t) return !1;
                        let n = t.guild_id ?? t.preview_guild_id ?? null;
                        return null == n || n === e;
                    })(c.Ay.getProject(r), t)
                )
                    continue;
                let i = C(
                    o.Ay.getMentionCount(r, _.P.CONJURING_PROJECT),
                    o.Ay.ackMessageId(r, _.P.CONJURING_PROJECT),
                    (0, s.j)(u.A.settings, r),
                );
                null != i && (e++, (n += i));
            }
            return { hasUnread: e > 0, unreadCount: e, badgeCount: n };
        },
        [t],
    );
}
function R(t) {
    let e = (0, i.bG)(
            [o.Ay],
            () =>
                null != t &&
                E(o.Ay.getMentionCount(t, _.P.CONJURING_PROJECT), o.Ay.ackMessageId(t, _.P.CONJURING_PROJECT)),
            [t],
        ),
        n = (0, d.A)();
    r.useEffect(() => {
        null != t && e && n && l.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: t });
    }, [t, e, n]);
}
