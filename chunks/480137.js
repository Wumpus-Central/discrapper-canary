n.d(t, {
    OY: function () {
        return u;
    },
    ZX: function () {
        return c;
    },
    bY: function () {
        return E;
    },
    gV: function () {
        return _;
    },
    uo: function () {
        return d;
    }
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
            E = null != r ? r : i.Z.targetIdFilter,
            u = { limit: s.Rg9 };
        return null != t && (u.before = t), null != a && (u.user_id = a), null != o && (u.action_type = o), null != E && (u.target_id = E), u;
    })(t);
    return r.tn.get({
        url: s.ANM.GUILD_AUDIT_LOG(e),
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
                    let { audit_log_entries: t, integrations: n, users: r, webhooks: i, guild_scheduled_events: s, auto_moderation_rules: a, threads: o, application_commands: E } = e.body;
                    l.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: t,
                        integrations: n,
                        users: r,
                        webhooks: i,
                        guildScheduledEvents: s,
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
                let { audit_log_entries: t, integrations: n, users: r, webhooks: i, guild_scheduled_events: s, auto_moderation_rules: a, threads: o, application_commands: E } = e.body;
                l.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: t,
                    integrations: n,
                    users: r,
                    webhooks: i,
                    guildScheduledEvents: s,
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
function d(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_USER',
                userId: e
            }),
            E(t, e)
        );
}
function _(e, t) {
    if (!a() && null != t)
        return (
            l.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_TARGET',
                targetId: e
            }),
            E(t, null, e)
        );
}
