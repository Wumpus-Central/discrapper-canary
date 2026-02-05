n.d(t, { ER: () => _, Qi: () => d, Wy: () => E, gN: () => c, jS: () => u });
var l = n(562465),
    r = n(73153),
    a = n(523599),
    i = n(652215);
function s() {
    return a.A.isLoading || a.A.isLoadingNextPage;
}
function o(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: l, action: r } = e,
            s = n ?? a.A.userIdFilter,
            o = r ?? a.A.actionFilter,
            E = l ?? a.A.targetIdFilter,
            u = { limit: i.$jw };
        return (
            null != t && (u.before = t),
            null != s && (u.user_id = s),
            null != o && (u.action_type = o),
            null != E && (u.target_id = E),
            u
        );
    })(t);
    return l.Bo.get({ url: i.Rsh.GUILD_AUDIT_LOG(e), query: n, oldFormErrors: !0, rejectWithError: !0 });
}
function E(e, t, n, l) {
    if (!s() && null != e)
        return (
            r.h.dispatch({ type: "AUDIT_LOG_FETCH_START" }),
            o(e, { userId: t, action: l, targetId: n }).then(
                (e) => {
                    let {
                        audit_log_entries: t,
                        integrations: n,
                        users: l,
                        webhooks: a,
                        guild_scheduled_events: i,
                        auto_moderation_rules: s,
                        threads: o,
                        application_commands: E,
                    } = e.body;
                    r.h.dispatch({
                        type: "AUDIT_LOG_FETCH_SUCCESS",
                        logs: t,
                        integrations: n,
                        users: l,
                        webhooks: a,
                        guildScheduledEvents: i,
                        automodRules: s,
                        threads: o,
                        applicationCommands: E,
                    });
                },
                () => r.h.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }),
            )
        );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!a.A.hasOlderLogs || s() || null == e) return;
    let n = a.A.logs,
        l = n[n.length - 1],
        i = null;
    return (
        null != l && (i = l.id),
        r.h.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_START", before: i, isGroupedFetch: t }),
        o(e, { before: i }).then(
            (e) => {
                let {
                    audit_log_entries: t,
                    integrations: n,
                    users: l,
                    webhooks: a,
                    guild_scheduled_events: i,
                    auto_moderation_rules: s,
                    threads: o,
                    application_commands: E,
                } = e.body;
                r.h.dispatch({
                    type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
                    logs: t,
                    integrations: n,
                    users: l,
                    webhooks: a,
                    guildScheduledEvents: i,
                    automodRules: s,
                    threads: o,
                    applicationCommands: E,
                });
            },
            () => r.h.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }),
        )
    );
}
function c(e, t) {
    if (!s() && null != t) return r.h.dispatch({ type: "AUDIT_LOG_FILTER_BY_ACTION", action: e }), E(t, null, null, e);
}
function _(e, t) {
    if (!s() && null != t) return r.h.dispatch({ type: "AUDIT_LOG_FILTER_BY_USER", userId: e }), E(t, e);
}
function d(e, t) {
    if (!s() && null != t) return r.h.dispatch({ type: "AUDIT_LOG_FILTER_BY_TARGET", targetId: e }), E(t, null, e);
}
