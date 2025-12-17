n.d(t, {
    OY: () => c,
    ZX: () => E,
    bY: () => u,
    gV: () => _,
    uo: () => d,
});
var r = n(544891),
    l = n(570140),
    i = n(233857),
    a = n(981631);
function s() {
    return i.Z.isLoading || i.Z.isLoadingNextPage;
}
function o(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: r, action: l } = e,
            s = null != n ? n : i.Z.userIdFilter,
            o = null != l ? l : i.Z.actionFilter,
            u = null != r ? r : i.Z.targetIdFilter,
            c = { limit: a.Rg9 };
        return (
            null != t && (c.before = t),
            null != s && (c.user_id = s),
            null != o && (c.action_type = o),
            null != u && (c.target_id = u),
            c
        );
    })(t);
    return r.tn.get({
        url: a.ANM.GUILD_AUDIT_LOG(e),
        query: n,
        oldFormErrors: !0,
        rejectWithError: !0,
    });
}
function u(e, t, n, r) {
    if (!s() && null != e)
        return (
            l.Z.dispatch({ type: "AUDIT_LOG_FETCH_START" }),
            o(e, {
                userId: t,
                action: r,
                targetId: n,
            }).then(
                (e) => {
                    let {
                        audit_log_entries: t,
                        integrations: n,
                        users: r,
                        webhooks: i,
                        guild_scheduled_events: a,
                        auto_moderation_rules: s,
                        threads: o,
                        application_commands: u,
                    } = e.body;
                    l.Z.dispatch({
                        type: "AUDIT_LOG_FETCH_SUCCESS",
                        logs: t,
                        integrations: n,
                        users: r,
                        webhooks: i,
                        guildScheduledEvents: a,
                        automodRules: s,
                        threads: o,
                        applicationCommands: u,
                    });
                },
                () => l.Z.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }),
            )
        );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!i.Z.hasOlderLogs || s() || null == e) return;
    let n = i.Z.logs,
        r = n[n.length - 1],
        a = null;
    return (
        null != r && (a = r.id),
        l.Z.dispatch({
            type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
            before: a,
            isGroupedFetch: t,
        }),
        o(e, { before: a }).then(
            (e) => {
                let {
                    audit_log_entries: t,
                    integrations: n,
                    users: r,
                    webhooks: i,
                    guild_scheduled_events: a,
                    auto_moderation_rules: s,
                    threads: o,
                    application_commands: u,
                } = e.body;
                l.Z.dispatch({
                    type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
                    logs: t,
                    integrations: n,
                    users: r,
                    webhooks: i,
                    guildScheduledEvents: a,
                    automodRules: s,
                    threads: o,
                    applicationCommands: u,
                });
            },
            () => l.Z.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }),
        )
    );
}
function E(e, t) {
    if (!s() && null != t)
        return (
            l.Z.dispatch({
                type: "AUDIT_LOG_FILTER_BY_ACTION",
                action: e,
            }),
            u(t, null, null, e)
        );
}
function d(e, t) {
    if (!s() && null != t)
        return (
            l.Z.dispatch({
                type: "AUDIT_LOG_FILTER_BY_USER",
                userId: e,
            }),
            u(t, e)
        );
}
function _(e, t) {
    if (!s() && null != t)
        return (
            l.Z.dispatch({
                type: "AUDIT_LOG_FILTER_BY_TARGET",
                targetId: e,
            }),
            u(t, null, e)
        );
}
