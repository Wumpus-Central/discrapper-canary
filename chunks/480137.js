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
    s = n(981631);
function i() {
    return a.Z.isLoading || a.Z.isLoadingNextPage;
}
function o(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: r, action: l } = e,
            i = null != n ? n : a.Z.userIdFilter,
            o = null != l ? l : a.Z.actionFilter,
            E = null != r ? r : a.Z.targetIdFilter,
            c = { limit: s.Rg9 };
        return null != t && (c.before = t), null != i && (c.user_id = i), null != o && (c.action_type = o), null != E && (c.target_id = E), c;
    })(t);
    return r.tn.get({
        url: s.ANM.GUILD_AUDIT_LOG(e),
        query: n,
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function E(e, t, n, r) {
    if (!i() && null != e)
        return (
            l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
            o(e, {
                userId: t,
                action: r,
                targetId: n
            }).then(
                (e) => {
                    let { audit_log_entries: t, integrations: n, users: r, webhooks: a, guild_scheduled_events: s, auto_moderation_rules: i, threads: o, application_commands: E } = e.body;
                    l.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: t,
                        integrations: n,
                        users: r,
                        webhooks: a,
                        guildScheduledEvents: s,
                        automodRules: i,
                        threads: o,
                        applicationCommands: E
                    });
                },
                () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
            )
        );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!a.Z.hasOlderLogs || i() || null == e) return;
    let n = a.Z.logs,
        r = n[n.length - 1],
        s = null;
    return (
        null != r && (s = r.id),
        l.Z.dispatch({
            type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
            before: s,
            isGroupedFetch: t
        }),
        o(e, { before: s }).then(
            (e) => {
                let { audit_log_entries: t, integrations: n, users: r, webhooks: a, guild_scheduled_events: s, auto_moderation_rules: i, threads: o, application_commands: E } = e.body;
                l.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: t,
                    integrations: n,
                    users: r,
                    webhooks: a,
                    guildScheduledEvents: s,
                    automodRules: i,
                    threads: o,
                    applicationCommands: E
                });
            },
            () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' })
        )
    );
}
function u(e, t) {
    if (!i() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_ACTION',
                action: e
            }),
            E(t, null, null, e)
        );
}
function _(e, t) {
    if (!i() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_USER',
                userId: e
            }),
            E(t, e)
        );
}
function d(e, t) {
    if (!i() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_TARGET',
                targetId: e
            }),
            E(t, null, e)
        );
}
