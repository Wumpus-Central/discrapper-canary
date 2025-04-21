n.d(t, {
    OY: () => u,
    ZX: () => c,
    bY: () => E,
    gV: () => d,
    uo: () => _
});
var r = n(544891),
    l = n(570140),
    s = n(987707),
    i = n(981631);
function a() {
    return s.Z.isLoading || s.Z.isLoadingNextPage;
}
function o(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: r, action: l } = e,
            a = null != n ? n : s.Z.userIdFilter,
            o = null != l ? l : s.Z.actionFilter,
            E = null != r ? r : s.Z.targetIdFilter,
            u = { limit: i.Rg9 };
        return null != t && (u.before = t), null != a && (u.user_id = a), null != o && (u.action_type = o), null != E && (u.target_id = E), u;
    })(t);
    return r.tn.get({
        url: i.ANM.GUILD_AUDIT_LOG(e),
        query: n,
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function E(e, t, n, r) {
    if (!a() && null != e)
        return (
            l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
            o(e, {
                userId: t,
                action: r,
                targetId: n
            }).then(
                (e) => {
                    let { audit_log_entries: t, integrations: n, users: r, webhooks: s, guild_scheduled_events: i, auto_moderation_rules: a, threads: o, application_commands: E } = e.body;
                    l.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: t,
                        integrations: n,
                        users: r,
                        webhooks: s,
                        guildScheduledEvents: i,
                        automodRules: a,
                        threads: o,
                        applicationCommands: E
                    });
                },
                () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
            )
        );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!s.Z.hasOlderLogs || a() || null == e) return;
    let n = s.Z.logs,
        r = n[n.length - 1],
        i = null;
    return (
        null != r && (i = r.id),
        l.Z.dispatch({
            type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
            before: i,
            isGroupedFetch: t
        }),
        o(e, { before: i }).then(
            (e) => {
                let { audit_log_entries: t, integrations: n, users: r, webhooks: s, guild_scheduled_events: i, auto_moderation_rules: a, threads: o, application_commands: E } = e.body;
                l.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: t,
                    integrations: n,
                    users: r,
                    webhooks: s,
                    guildScheduledEvents: i,
                    automodRules: a,
                    threads: o,
                    applicationCommands: E
                });
            },
            () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' })
        )
    );
}
function c(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_ACTION',
                action: e
            }),
            E(t, null, null, e)
        );
}
function _(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_USER',
                userId: e
            }),
            E(t, e)
        );
}
function d(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_TARGET',
                targetId: e
            }),
            E(t, null, e)
        );
}
