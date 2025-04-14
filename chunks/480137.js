n.d(t, {
    OY: () => c,
    ZX: () => u,
    bY: () => E,
    gV: () => d,
    uo: () => _
});
var r = n(544891),
    l = n(570140),
    s = n(987707),
    a = n(981631);
function o() {
    return s.Z.isLoading || s.Z.isLoadingNextPage;
}
function i(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: r, action: l } = e,
            o = null != n ? n : s.Z.userIdFilter,
            i = null != l ? l : s.Z.actionFilter,
            E = null != r ? r : s.Z.targetIdFilter,
            c = { limit: a.Rg9 };
        return null != t && (c.before = t), null != o && (c.user_id = o), null != i && (c.action_type = i), null != E && (c.target_id = E), c;
    })(t);
    return r.tn.get({
        url: a.ANM.GUILD_AUDIT_LOG(e),
        query: n,
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function E(e, t, n, r) {
    if (!o() && null != e)
        return (
            l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
            i(e, {
                userId: t,
                action: r,
                targetId: n
            }).then(
                (e) => {
                    let { audit_log_entries: t, integrations: n, users: r, webhooks: s, guild_scheduled_events: a, auto_moderation_rules: o, threads: i, application_commands: E } = e.body;
                    l.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: t,
                        integrations: n,
                        users: r,
                        webhooks: s,
                        guildScheduledEvents: a,
                        automodRules: o,
                        threads: i,
                        applicationCommands: E
                    });
                },
                () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
            )
        );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!s.Z.hasOlderLogs || o() || null == e) return;
    let n = s.Z.logs,
        r = n[n.length - 1],
        a = null;
    return (
        null != r && (a = r.id),
        l.Z.dispatch({
            type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
            before: a,
            isGroupedFetch: t
        }),
        i(e, { before: a }).then(
            (e) => {
                let { audit_log_entries: t, integrations: n, users: r, webhooks: s, guild_scheduled_events: a, auto_moderation_rules: o, threads: i, application_commands: E } = e.body;
                l.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: t,
                    integrations: n,
                    users: r,
                    webhooks: s,
                    guildScheduledEvents: a,
                    automodRules: o,
                    threads: i,
                    applicationCommands: E
                });
            },
            () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' })
        )
    );
}
function u(e, t) {
    if (!o() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_ACTION',
                action: e
            }),
            E(t, null, null, e)
        );
}
function _(e, t) {
    if (!o() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_USER',
                userId: e
            }),
            E(t, e)
        );
}
function d(e, t) {
    if (!o() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_TARGET',
                targetId: e
            }),
            E(t, null, e)
        );
}
