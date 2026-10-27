e.d(t, { A: () => s });
var u = e(17928),
    d = e(404373),
    r = e(219956),
    i = e(741907);
function l(n, t) {
    return (
        n.status?.kind === t.status?.kind &&
        n.status?.projectId === t.status?.projectId &&
        n.hasUnread === t.hasUnread &&
        n.mentionCount === t.mentionCount &&
        n.unreadProjectCount === t.unreadProjectCount
    );
}
function s() {
    let n = (0, i.A)();
    return (0, u.bG)(
        r.eN,
        () =>
            (function (n) {
                let t = null,
                    e = null,
                    u = null,
                    i = 0,
                    l = 0;
                for (let s of n) {
                    let n = (0, r.A2)(s.id);
                    if ("in_progress" === n) t ??= s.id;
                    else if ("unread" === n) {
                        l++;
                        let n = (0, d.xp)(s.id);
                        ((i += n), n > 0 ? (e ??= s.id) : (u ??= s.id));
                    }
                }
                return {
                    status:
                        null != t
                            ? { kind: "working", projectId: t }
                            : null != e
                              ? { kind: "needs_input", projectId: e }
                              : null != u
                                ? { kind: "unread", projectId: u }
                                : null,
                    hasUnread: null != e || null != u,
                    mentionCount: i,
                    unreadProjectCount: l,
                };
            })(n),
        [n],
        l,
    );
}
