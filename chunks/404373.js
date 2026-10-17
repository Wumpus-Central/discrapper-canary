n.d(t, { E1: () => p, NC: () => I, W5: () => f, Yl: () => h, tz: () => A });
var i = n(582128),
    r = n(17928),
    a = n(73153),
    s = n(617617),
    l = n(573163),
    o = n(935208),
    d = n(260498),
    c = n(189714),
    u = n(790782);
function _(e, t) {
    return e > 0 || (null != t && 0 !== o.default.getNonTimestampBits(t));
}
function E(e, t, n) {
    return n || !_(e, t) ? null : e;
}
function A(e) {
    return _(l.Ay.getMentionCount(e, u.P.CONJURING_PROJECT), l.Ay.ackMessageId(e, u.P.CONJURING_PROJECT));
}
function h(e) {
    return (0, r.bG)(
        [l.Ay, s.A],
        () =>
            null == e
                ? null
                : E(
                      l.Ay.getMentionCount(e, u.P.CONJURING_PROJECT),
                      l.Ay.ackMessageId(e, u.P.CONJURING_PROJECT),
                      (0, c.j)(s.A.settings, e),
                  ),
        [e],
    );
}
function f() {
    return (0, r.yK)([l.Ay, s.A], () =>
        l.Ay.getResourceIds(u.P.CONJURING_PROJECT).filter(
            (e) =>
                null !=
                E(
                    l.Ay.getMentionCount(e, u.P.CONJURING_PROJECT),
                    l.Ay.ackMessageId(e, u.P.CONJURING_PROJECT),
                    (0, c.j)(s.A.settings, e),
                ),
        ),
    );
}
function I(e) {
    return (0, r.cf)(
        [l.Ay, s.A, d.Ay],
        () => {
            let t = 0,
                n = 0;
            for (let i of l.Ay.getResourceIds(u.P.CONJURING_PROJECT)) {
                if (
                    null != e &&
                    !(function (e, t) {
                        if (null == e) return !1;
                        let n = e.guild_id ?? e.preview_guild_id ?? null;
                        return null == n || n === t;
                    })(d.Ay.getProject(i), e)
                )
                    continue;
                let r = E(
                    l.Ay.getMentionCount(i, u.P.CONJURING_PROJECT),
                    l.Ay.ackMessageId(i, u.P.CONJURING_PROJECT),
                    (0, c.j)(s.A.settings, i),
                );
                null != r && (t++, (n += r));
            }
            return { hasUnread: t > 0, unreadCount: t, badgeCount: n };
        },
        [e],
    );
}
function p(e, t) {
    let n = (0, r.bG)(
        [l.Ay],
        () =>
            null != e && _(l.Ay.getMentionCount(e, u.P.CONJURING_PROJECT), l.Ay.ackMessageId(e, u.P.CONJURING_PROJECT)),
        [e],
    );
    i.useEffect(() => {
        null != e && n && t && a.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: e });
    }, [e, n, t]);
}
