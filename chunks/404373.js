n.d(t, { E1: () => h, NC: () => A, tz: () => E });
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
function E(e) {
    return _(l.Ay.getMentionCount(e, u.P.CONJURING_PROJECT), l.Ay.ackMessageId(e, u.P.CONJURING_PROJECT));
}
function A(e) {
    return (0, r.cf)(
        [l.Ay, s.A, d.Ay],
        () => {
            let t = 0,
                n = 0;
            for (let a of l.Ay.getResourceIds(u.P.CONJURING_PROJECT)) {
                var i, r;
                if (
                    null != e &&
                    !(function (e, t) {
                        if (null == e) return !1;
                        let n = e.guild_id ?? e.preview_guild_id ?? null;
                        return null == n || n === t;
                    })(d.Ay.getProject(a), e)
                )
                    continue;
                let o =
                    ((i = l.Ay.getMentionCount(a, u.P.CONJURING_PROJECT)),
                    (r = l.Ay.ackMessageId(a, u.P.CONJURING_PROJECT)),
                    (0, c.j)(s.A.settings, a) || !_(i, r) ? null : i);
                null != o && (t++, (n += o));
            }
            return { hasUnread: t > 0, unreadCount: t, badgeCount: n };
        },
        [e],
    );
}
function h(e, t) {
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
