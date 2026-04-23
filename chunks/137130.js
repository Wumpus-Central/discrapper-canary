n.d(t, { ER: () => c, Qi: () => d, Wy: () => _, gN: () => u, jS: () => o });
var l = n(636537),
    a = n(228366),
    r = n(523599),
    i = n(652215);
function s() {
    return r.A.isLoading || r.A.isLoadingNextPage;
}
function E(e, t) {
    let n = (function (e) {
        let { before: t, userId: n, targetId: l, action: a } = e,
            s = n ?? r.A.userIdFilter,
            E = a ?? r.A.actionFilter,
            _ = l ?? r.A.targetIdFilter,
            o = { limit: i.$jw };
        return (
            null != t && (o.before = t),
            null != s && (o.user_id = s),
            null != E && (o.action_type = E),
            null != _ && (o.target_id = _),
            o
        );
    })(t);
    return l.Bo.get({ url: i.Rsh.GUILD_AUDIT_LOG(e), query: n, oldFormErrors: !0, rejectWithError: !0 });
}
function _(e, t, n, l) {
    if (!s() && null != e)
        return (
            a.h.dispatch({ type: "AUDIT_LOG_FETCH_START" }),
            E(e, { userId: t, action: l, targetId: n }).then(
                (e) => {
                    let {
                        audit_log_entries: t,
                        integrations: n,
                        users: l,
                        webhooks: r,
                        guild_scheduled_events: i,
                        auto_moderation_rules: s,
                        threads: E,
                        application_commands: _,
                    } = e.body;
                    a.h.dispatch({
                        type: "AUDIT_LOG_FETCH_SUCCESS",
                        logs: t,
                        integrations: n,
                        users: l,
                        webhooks: r,
                        guildScheduledEvents: i,
                        automodRules: s,
                        threads: E,
                        applicationCommands: _,
                    });
                },
                () => a.h.dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }),
            )
        );
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!r.A.hasOlderLogs || s() || null == e) return;
    let n = r.A.logs,
        l = n[n.length - 1],
        i = null;
    return (
        null != l && (i = l.id),
        a.h.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_START", before: i, isGroupedFetch: t }),
        E(e, { before: i }).then(
            (e) => {
                let {
                    audit_log_entries: t,
                    integrations: n,
                    users: l,
                    webhooks: r,
                    guild_scheduled_events: i,
                    auto_moderation_rules: s,
                    threads: E,
                    application_commands: _,
                } = e.body;
                a.h.dispatch({
                    type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
                    logs: t,
                    integrations: n,
                    users: l,
                    webhooks: r,
                    guildScheduledEvents: i,
                    automodRules: s,
                    threads: E,
                    applicationCommands: _,
                });
            },
            () => a.h.dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }),
        )
    );
}
function u(e, t) {
    if (!s() && null != t) return a.h.dispatch({ type: "AUDIT_LOG_FILTER_BY_ACTION", action: e }), _(t, null, null, e);
}
function c(e, t) {
    if (!s() && null != t) return a.h.dispatch({ type: "AUDIT_LOG_FILTER_BY_USER", userId: e }), _(t, e);
}
function d(e, t) {
    if (!s() && null != t) return a.h.dispatch({ type: "AUDIT_LOG_FILTER_BY_TARGET", targetId: e }), _(t, null, e);
}
