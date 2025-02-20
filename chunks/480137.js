n.d(t, {
    OY: () => c,
    ZX: () => u,
    bY: () => E,
    gV: () => d,
    uo: () => _
});
var r = n(544891),
    l = n(570140),
    a = n(987707),
    i = n(981631);
function o() {
    return a.Z.isLoading || a.Z.isLoadingNextPage;
}
function s(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: r, action: l } = e,
            o = null != n ? n : a.Z.userIdFilter,
            s = null != l ? l : a.Z.actionFilter,
            E = null != r ? r : a.Z.targetIdFilter,
            c = { limit: i.Rg9 };
        return null != t && (c.before = t), null != o && (c.user_id = o), null != s && (c.action_type = s), null != E && (c.target_id = E), c;
    })(t);
    return r.tn.get({
        url: i.ANM.GUILD_AUDIT_LOG(e),
        query: n,
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function E(e, t, n, r) {
    if (!o() && null != e)
        return (
            l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
            s(e, {
                userId: t,
                action: r,
                targetId: n
            }).then(
                (e) => {
                    let { audit_log_entries: t, integrations: n, users: r, webhooks: a, guild_scheduled_events: i, auto_moderation_rules: o, threads: s, application_commands: E } = e.body;
                    l.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: t,
                        integrations: n,
                        users: r,
                        webhooks: a,
                        guildScheduledEvents: i,
                        automodRules: o,
                        threads: s,
                        applicationCommands: E
                    });
                },
                () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
            )
        );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!a.Z.hasOlderLogs || o() || null == e) return;
    let n = a.Z.logs,
        r = n[n.length - 1],
        i = null;
    return (
        null != r && (i = r.id),
        l.Z.dispatch({
            type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
            before: i,
            isGroupedFetch: t
        }),
        s(e, { before: i }).then(
            (e) => {
                let { audit_log_entries: t, integrations: n, users: r, webhooks: a, guild_scheduled_events: i, auto_moderation_rules: o, threads: s, application_commands: E } = e.body;
                l.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: t,
                    integrations: n,
                    users: r,
                    webhooks: a,
                    guildScheduledEvents: i,
                    automodRules: o,
                    threads: s,
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
