n.d(t, {
    OY: () => c,
    ZX: () => E,
    bY: () => u,
    gV: () => _,
    uo: () => d
});
var r = n(544891),
    l = n(570140),
    i = n(987707),
    s = n(981631);
function a() {
    return i.Z.isLoading || i.Z.isLoadingNextPage;
}
function o(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: r, action: l } = e,
            a = null != n ? n : i.Z.userIdFilter,
            o = null != l ? l : i.Z.actionFilter,
            u = null != r ? r : i.Z.targetIdFilter,
            c = { limit: s.Rg9 };
        return (null != t && (c.before = t), null != a && (c.user_id = a), null != o && (c.action_type = o), null != u && (c.target_id = u), c);
    })(t);
    return r.tn.get({
        url: s.ANM.GUILD_AUDIT_LOG(e),
        query: n,
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function u(e, t, n, r) {
    if (!a() && null != e)
        return (
            l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
            o(e, {
                userId: t,
                action: r,
                targetId: n
            }).then(
                (e) => {
                    let { audit_log_entries: t, integrations: n, users: r, webhooks: i, guild_scheduled_events: s, auto_moderation_rules: a, threads: o, application_commands: u } = e.body;
                    l.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: t,
                        integrations: n,
                        users: r,
                        webhooks: i,
                        guildScheduledEvents: s,
                        automodRules: a,
                        threads: o,
                        applicationCommands: u
                    });
                },
                () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
            )
        );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!i.Z.hasOlderLogs || a() || null == e) return;
    let n = i.Z.logs,
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
                let { audit_log_entries: t, integrations: n, users: r, webhooks: i, guild_scheduled_events: s, auto_moderation_rules: a, threads: o, application_commands: u } = e.body;
                l.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: t,
                    integrations: n,
                    users: r,
                    webhooks: i,
                    guildScheduledEvents: s,
                    automodRules: a,
                    threads: o,
                    applicationCommands: u
                });
            },
            () => l.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' })
        )
    );
}
function E(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_ACTION',
                action: e
            }),
            u(t, null, null, e)
        );
}
function d(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_USER',
                userId: e
            }),
            u(t, e)
        );
}
function _(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_TARGET',
                targetId: e
            }),
            u(t, null, e)
        );
}
