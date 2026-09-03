n.d(t, { A: () => b }), n(321073), n(667532);
var l = n(435558),
    r = n.n(l),
    a = n(136722),
    i = n(17928),
    s = n(228366),
    E = n(411153),
    u = n(95701),
    o = n(34457),
    c = n(696451),
    _ = n(317525),
    d = n(71393),
    A = n(652215);
let g = a.kg(
        A.xBc.KICK_MEMBERS,
        A.xBc.BAN_MEMBERS,
        A.xBc.ADMINISTRATOR,
        A.xBc.MANAGE_CHANNELS,
        A.xBc.MANAGE_GUILD,
        A.xBc.MANAGE_MESSAGES,
        A.xBc.MANAGE_NICKNAMES,
        A.xBc.MANAGE_ROLES,
        A.xBc.MANAGE_WEBHOOKS,
        A.xBc.MANAGE_GUILD_EXPRESSIONS,
        A.xBc.MOVE_MEMBERS,
        A.xBc.MUTE_MEMBERS,
        A.xBc.DEAFEN_MEMBERS,
    ),
    T = null,
    I = [],
    N = [],
    G = [],
    O = [],
    S = [],
    m = [],
    R = [],
    D = [],
    h = !0,
    L = !1,
    C = !1,
    M = !0,
    x = !1,
    U = null,
    f = A.F_X.ALL,
    p = null,
    k = {},
    F = 0;
function P(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            let l = [],
                a = null,
                i = null,
                s = null;
            if ((null != e.reason && l.push(new E.QO(A.gGk.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new E.QO(t.key, t.old_value, t.new_value);
                    l.push(e),
                        e.key === A.gGk.NAME
                            ? (a = e)
                            : e.key === A.gGk.TYPE
                              ? (s = e)
                              : e.key === A.gGk.TITLE && (i = e);
                }
            if (e.action_type === A.F_X.MEMBER_PRUNE) {
                let t =
                        null != e && null != e.options && null != e.options.delete_member_days
                            ? e.options.delete_member_days
                            : 1,
                    n = new E.QO(A.gGk.PRUNE_DELETE_DAYS, null, t);
                l.push(n);
            }
            e.action_type === A.F_X.AUTO_MODERATION_BLOCK_MESSAGE &&
                e.options?.auto_moderation_rule_name != null &&
                l.push(new E.QO(A.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)),
                e.action_type === A.F_X.VOICE_CHANNEL_STATUS_CREATE &&
                    e.options?.status != null &&
                    l.push(new E.QO(A.gGk.STATUS, null, e.options.status));
            let o = new E.Ay({
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
                        t.targetType !== A.GaG.INVITE &&
                        t.action !== A.F_X.MESSAGE_DELETE &&
                        t.action !== A.F_X.MESSAGE_BULK_DELETE &&
                        t.action !== A.F_X.MESSAGE_PIN &&
                        t.action !== A.F_X.MESSAGE_UNPIN &&
                        t.action !== A.F_X.MEMBER_MOVE &&
                        t.action !== A.F_X.MEMBER_DISCONNECT &&
                        t.action !== A.F_X.BOT_ADD &&
                        t.action !== A.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE &&
                        t.action !== A.F_X.MEMBER_PRUNE
                    );
                })(c, o, n)
            ) {
                (t[0] = c.merge({ changes: [...c.changes, ...o.changes], timestampEnd: o.timestampStart })), n++;
                return;
            }
            if (o.actionType === A.RWi.DELETE && (null != a || null != i)) {
                let e = a?.oldValue ?? i?.oldValue;
                (o.targetType === A.GaG.CHANNEL || o.targetType === A.GaG.CHANNEL_OVERWRITE) &&
                    null !== s &&
                    (0, u.tr)(s.oldValue) &&
                    (e = `#${e}`),
                    null == k[o.targetType]
                        ? (k[o.targetType] = { [o.targetId]: e })
                        : (k[o.targetType][o.targetId] = e);
            }
            (n = 0), t.unshift(o);
        }),
        t
    );
}
function j(e) {
    let { section: t } = e;
    if (t !== A.BEX.AUDIT_LOG) return !1;
    let n = c.Ay.getMembers(T),
        l = d.A.getGuild(T),
        a = null != T ? _.A.getUnsafeMutableRoles(T) : void 0;
    G = r()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != l) {
                    if (e.userId === l.ownerId) return !0;
                    let n = a?.[t];
                    return null != n && (0, o.sx)(n, g);
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
        return O;
    }
    get guildScheduledEvents() {
        return S;
    }
    get automodRules() {
        return m;
    }
    get threads() {
        return R;
    }
    get applicationCommands() {
        return D;
    }
    get isInitialLoading() {
        return h;
    }
    get isLoading() {
        return L;
    }
    get isLoadingNextPage() {
        return C;
    }
    get hasOlderLogs() {
        return M;
    }
    get hasError() {
        return x;
    }
    get userIds() {
        return G;
    }
    get userIdFilter() {
        return U;
    }
    get targetIdFilter() {
        return p;
    }
    get actionFilter() {
        return f;
    }
    get deletedTargets() {
        return k;
    }
    get groupedFetchCount() {
        return F;
    }
}
let b = new v(s.h, {
    AUDIT_LOG_FETCH_START: function () {
        L = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        (F = 0),
            (h = !1),
            (L = !1),
            (M = !0),
            (x = !1),
            (I = P(e.logs)),
            (N = e.integrations),
            (O = e.webhooks),
            (S = e.guildScheduledEvents),
            (m = e.automodRules ?? []),
            (R = e.threads),
            (D = e.applicationCommands),
            e.logs.length < A.$jw && (M = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (L = !1), (x = !0), (I = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (C = !0), t && F++;
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
            ((C = !1),
            (N = n),
            (O = l),
            (S = r),
            (m = a),
            (R = i),
            (D = s),
            (0 === t.length || t.length < A.$jw) && (M = !1),
            t.length > 0)
        ) {
            let e = P(t);
            I = [...I, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        C = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        f = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        U = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        p = t;
    },
    GUILD_SETTINGS_SET_SECTION: j,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (T = t), (p = null), j({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (I = []),
            (G = []),
            (f = A.F_X.ALL),
            (U = null),
            (p = null),
            (k = {}),
            (F = 0),
            (h = !0),
            (N = []),
            (O = []),
            (S = []),
            (m = []),
            (R = []);
    },
});
