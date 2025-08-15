t.d(e, {
    OY: () => g,
    ZX: () => c,
    bY: () => o,
    gV: () => v,
    uo: () => f,
});
var n = t(544891),
    r = t(570140),
    l = t(987707),
    i = t(981631);
function a() {
    return l.Z.isLoading || l.Z.isLoadingNextPage;
}
function s(A, e) {
    let t = (function (A) {
        let { before: e, userId: t, targetId: n, action: r } = A,
            a = null != t ? t : l.Z.userIdFilter,
            s = null != r ? r : l.Z.actionFilter,
            o = null != n ? n : l.Z.targetIdFilter,
            g = { limit: i.Rg9 };
        return (
            null != e && (g.before = e),
            null != a && (g.user_id = a),
            null != s && (g.action_type = s),
            null != o && (g.target_id = o),
            g
        );
    })(e);
    return n.tn.get({
        url: i.ANM.GUILD_AUDIT_LOG(A),
        query: t,
        oldFormErrors: !0,
        rejectWithError: !0,
    });
}
function o(A, e, t, n) {
    if (!a() && null != A)
        return (
            r.Z.dispatch({ type: "AUDIT_LOG_FETCH_START" }),
            s(A, {
                userId: e,
                action: n,
                targetId: t,
            }).then(
                (A) => {
                    let {
                        audit_log_entries: e,
                        integrations: t,
                        users: n,
                        webhooks: l,
                        guild_scheduled_events: i,
                        auto_moderation_rules: a,
                        threads: s,
                        application_commands: o,
                    } = A.body;
                    r.Z.dispatch({
                        type: "AUDIT_LOG_FETCH_SUCCESS",
                        logs: e,
                        integrations: t,
                        users: n,
                        webhooks: l,
                        guildScheduledEvents: i,
                        automodRules: a,
                        threads: s,
                        applicationCommands: o,
                    });
                },
                () => r.Z.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }),
            )
        );
}
function g(A) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!l.Z.hasOlderLogs || a() || null == A) return;
    let t = l.Z.logs,
        n = t[t.length - 1],
        i = null;
    return (
        null != n && (i = n.id),
        r.Z.dispatch({
            type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
            before: i,
            isGroupedFetch: e,
        }),
        s(A, { before: i }).then(
            (A) => {
                let {
                    audit_log_entries: e,
                    integrations: t,
                    users: n,
                    webhooks: l,
                    guild_scheduled_events: i,
                    auto_moderation_rules: a,
                    threads: s,
                    application_commands: o,
                } = A.body;
                r.Z.dispatch({
                    type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
                    logs: e,
                    integrations: t,
                    users: n,
                    webhooks: l,
                    guildScheduledEvents: i,
                    automodRules: a,
                    threads: s,
                    applicationCommands: o,
                });
            },
            () => r.Z.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }),
        )
    );
}
function c(A, e) {
    if (!a() && null != e)
        return (
            r.Z.dispatch({
                type: "AUDIT_LOG_FILTER_BY_ACTION",
                action: A,
            }),
            o(e, null, null, A)
        );
}
function f(A, e) {
    if (!a() && null != e)
        return (
            r.Z.dispatch({
                type: "AUDIT_LOG_FILTER_BY_USER",
                userId: A,
            }),
            o(e, A)
        );
}
function v(A, e) {
    if (!a() && null != e)
        return (
            r.Z.dispatch({
                type: "AUDIT_LOG_FILTER_BY_TARGET",
                targetId: A,
            }),
            o(e, null, A)
        );
}
