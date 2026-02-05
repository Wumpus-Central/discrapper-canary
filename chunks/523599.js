n.d(t, { A: () => P }), n(321073), n(667532);
var l = n(735438),
    r = n.n(l),
    a = n(136722),
    i = n(311907),
    s = n(73153),
    o = n(411153),
    E = n(95701),
    u = n(34457),
    c = n(696451),
    _ = n(317525),
    d = n(71393),
    g = n(652215);
let A = a.kg(
        g.xBc.KICK_MEMBERS,
        g.xBc.BAN_MEMBERS,
        g.xBc.ADMINISTRATOR,
        g.xBc.MANAGE_CHANNELS,
        g.xBc.MANAGE_GUILD,
        g.xBc.MANAGE_MESSAGES,
        g.xBc.MANAGE_NICKNAMES,
        g.xBc.MANAGE_ROLES,
        g.xBc.MANAGE_WEBHOOKS,
        g.xBc.MANAGE_GUILD_EXPRESSIONS,
        g.xBc.MOVE_MEMBERS,
        g.xBc.MUTE_MEMBERS,
        g.xBc.DEAFEN_MEMBERS,
    ),
    T = null,
    I = [],
    N = [],
    h = [],
    m = [],
    S = [],
    G = [],
    O = [],
    C = [],
    R = !0,
    L = !1,
    D = !1,
    f = !0,
    x = !1,
    M = null,
    p = g.F_X.ALL,
    U = null,
    k = {},
    b = 0;
function F(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            let l = [],
                a = null,
                i = null,
                s = null;
            if ((null != e.reason && l.push(new o.QO(g.gGk.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new o.QO(t.key, t.old_value, t.new_value);
                    l.push(e),
                        e.key === g.gGk.NAME
                            ? (a = e)
                            : e.key === g.gGk.TYPE
                              ? (s = e)
                              : e.key === g.gGk.TITLE && (i = e);
                }
            if (e.action_type === g.F_X.MEMBER_PRUNE) {
                let t =
                        null != e && null != e.options && null != e.options.delete_member_days
                            ? e.options.delete_member_days
                            : 1,
                    n = new o.QO(g.gGk.PRUNE_DELETE_DAYS, null, t);
                l.push(n);
            }
            e.action_type === g.F_X.AUTO_MODERATION_BLOCK_MESSAGE &&
                e.options?.auto_moderation_rule_name != null &&
                l.push(new o.QO(g.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)),
                e.action_type === g.F_X.VOICE_CHANNEL_STATUS_CREATE &&
                    e.options?.status != null &&
                    l.push(new o.QO(g.gGk.STATUS, null, e.options.status));
            let u = new o.Ay({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: l,
                    options: e.options,
                }),
                c = t[0];
            if (
                (function (e, t, n) {
                    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return (
                        null != e &&
                        e.action === t.action &&
                        e.targetId === t.targetId &&
                        e.userId === t.userId &&
                        r().isEqual(e.options, t.options) &&
                        t.timestampStart.diff(e.timestampStart, "minutes") < l &&
                        n < a &&
                        t.targetType !== g.GaG.INVITE &&
                        t.action !== g.F_X.MESSAGE_DELETE &&
                        t.action !== g.F_X.MESSAGE_BULK_DELETE &&
                        t.action !== g.F_X.MESSAGE_PIN &&
                        t.action !== g.F_X.MESSAGE_UNPIN &&
                        t.action !== g.F_X.MEMBER_MOVE &&
                        t.action !== g.F_X.MEMBER_DISCONNECT &&
                        t.action !== g.F_X.BOT_ADD &&
                        t.action !== g.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE &&
                        t.action !== g.F_X.MEMBER_PRUNE
                    );
                })(c, u, n)
            ) {
                (t[0] = c.merge({ changes: [...c.changes, ...u.changes], timestampEnd: u.timestampStart })), n++;
                return;
            }
            if (u.actionType === g.RWi.DELETE && (null != a || null != i)) {
                let e = a?.oldValue ?? i?.oldValue;
                (u.targetType === g.GaG.CHANNEL || u.targetType === g.GaG.CHANNEL_OVERWRITE) &&
                    null !== s &&
                    (0, E.tr)(s.oldValue) &&
                    (e = `#${e}`),
                    null == k[u.targetType]
                        ? (k[u.targetType] = { [u.targetId]: e })
                        : (k[u.targetType][u.targetId] = e);
            }
            (n = 0), t.unshift(u);
        }),
        t
    );
}
function j(e) {
    let { section: t } = e;
    if (t !== g.BEX.AUDIT_LOG) return !1;
    let n = c.Ay.getMembers(T),
        l = d.A.getGuild(T),
        a = null != T ? _.A.getUnsafeMutableRoles(T) : void 0;
    h = r()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != l) {
                    if (e.userId === l.ownerId) return !0;
                    let n = a?.[t];
                    return null != n && (0, u.sx)(n, A);
                }
            }),
        )
        .map((e) => e.userId)
        .value();
}
class v extends i.Ay.Store {
    static displayName = "GuildSettingsAuditLogStore";
    initialize() {
        this.waitFor(d.A, _.A, c.Ay);
    }
    get logs() {
        return I;
    }
    get integrations() {
        return N;
    }
    get webhooks() {
        return m;
    }
    get guildScheduledEvents() {
        return S;
    }
    get automodRules() {
        return G;
    }
    get threads() {
        return O;
    }
    get applicationCommands() {
        return C;
    }
    get isInitialLoading() {
        return R;
    }
    get isLoading() {
        return L;
    }
    get isLoadingNextPage() {
        return D;
    }
    get hasOlderLogs() {
        return f;
    }
    get hasError() {
        return x;
    }
    get userIds() {
        return h;
    }
    get userIdFilter() {
        return M;
    }
    get targetIdFilter() {
        return U;
    }
    get actionFilter() {
        return p;
    }
    get deletedTargets() {
        return k;
    }
    get groupedFetchCount() {
        return b;
    }
}
let P = new v(s.h, {
    AUDIT_LOG_FETCH_START: function () {
        L = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        (b = 0),
            (R = !1),
            (L = !1),
            (f = !0),
            (x = !1),
            (I = F(e.logs)),
            (N = e.integrations),
            (m = e.webhooks),
            (S = e.guildScheduledEvents),
            (G = e.automodRules ?? []),
            (O = e.threads),
            (C = e.applicationCommands),
            e.logs.length < g.$jw && (f = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (L = !1), (x = !0), (I = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (D = !0), t && b++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let {
            logs: t,
            integrations: n,
            webhooks: l,
            guildScheduledEvents: r,
            automodRules: a,
            threads: i,
            applicationCommands: s,
        } = e;
        if (
            ((D = !1),
            (N = n),
            (m = l),
            (S = r),
            (G = a),
            (O = i),
            (C = s),
            (0 === t.length || t.length < g.$jw) && (f = !1),
            t.length > 0)
        ) {
            let e = F(t);
            I = [...I, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        D = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        p = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        M = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        U = t;
    },
    GUILD_SETTINGS_SET_SECTION: j,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (T = t), (U = null), j({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (I = []),
            (h = []),
            (p = g.F_X.ALL),
            (M = null),
            (U = null),
            (k = {}),
            (b = 0),
            (R = !0),
            (N = []),
            (m = []),
            (S = []),
            (G = []),
            (O = []);
    },
});
