t.d(e, {
    OY: () => g,
    ZX: () => f,
    bY: () => o,
    gV: () => v,
    uo: () => c
});
var n = t(544891),
    r = t(570140),
    l = t(987707),
    i = t(981631);
function s() {
    return l.Z.isLoading || l.Z.isLoadingNextPage;
}
function a(A, e) {
    let t = (function (A) {
        let { before: e, userId: t, targetId: n, action: r } = A,
            s = null != t ? t : l.Z.userIdFilter,
            a = null != r ? r : l.Z.actionFilter,
            o = null != n ? n : l.Z.targetIdFilter,
            g = { limit: i.Rg9 };
        return (null != e && (g.before = e), null != s && (g.user_id = s), null != a && (g.action_type = a), null != o && (g.target_id = o), g);
    })(e);
    return n.tn.get({
        url: i.ANM.GUILD_AUDIT_LOG(A),
        query: t,
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function o(A, e, t, n) {
    if (!s() && null != A)
        return (
            r.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
            a(A, {
                userId: e,
                action: n,
                targetId: t
            }).then(
                (A) => {
                    let { audit_log_entries: e, integrations: t, users: n, webhooks: l, guild_scheduled_events: i, auto_moderation_rules: s, threads: a, application_commands: o } = A.body;
                    r.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: e,
                        integrations: t,
                        users: n,
                        webhooks: l,
                        guildScheduledEvents: i,
                        automodRules: s,
                        threads: a,
                        applicationCommands: o
                    });
                },
                () => r.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
            )
        );
}
function g(A) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!l.Z.hasOlderLogs || s() || null == A) return;
    let t = l.Z.logs,
        n = t[t.length - 1],
        i = null;
    return (
        null != n && (i = n.id),
        r.Z.dispatch({
            type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
            before: i,
            isGroupedFetch: e
        }),
        a(A, { before: i }).then(
            (A) => {
                let { audit_log_entries: e, integrations: t, users: n, webhooks: l, guild_scheduled_events: i, auto_moderation_rules: s, threads: a, application_commands: o } = A.body;
                r.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: e,
                    integrations: t,
                    users: n,
                    webhooks: l,
                    guildScheduledEvents: i,
                    automodRules: s,
                    threads: a,
                    applicationCommands: o
                });
            },
            () => r.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' })
        )
    );
}
function f(A, e) {
    if (!s() && null != e)
        return (
            r.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_ACTION',
                action: A
            }),
            o(e, null, null, A)
        );
}
function c(A, e) {
    if (!s() && null != e)
        return (
            r.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_USER',
                userId: A
            }),
            o(e, A)
        );
}
function v(A, e) {
    if (!s() && null != e)
        return (
            r.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_TARGET',
                targetId: A
            }),
            o(e, null, A)
        );
}
