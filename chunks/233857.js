n.d(t, { Z: () => w }), n(583741), n(539854), n(388685), n(290780);
var r,
    l,
    i = n(392711),
    s = n.n(i),
    a = n(149765),
    o = n(442837),
    u = n(570140),
    c = n(387667),
    E = n(131704),
    d = n(345162),
    _ = n(271383),
    A = n(485386),
    T = n(430824),
    I = n(981631);
let m = a.$e(
        I.Plq.KICK_MEMBERS,
        I.Plq.BAN_MEMBERS,
        I.Plq.ADMINISTRATOR,
        I.Plq.MANAGE_CHANNELS,
        I.Plq.MANAGE_GUILD,
        I.Plq.MANAGE_MESSAGES,
        I.Plq.MANAGE_NICKNAMES,
        I.Plq.MANAGE_ROLES,
        I.Plq.MANAGE_WEBHOOKS,
        I.Plq.MANAGE_GUILD_EXPRESSIONS,
        I.Plq.MOVE_MEMBERS,
        I.Plq.MUTE_MEMBERS,
        I.Plq.DEAFEN_MEMBERS,
    ),
    g = null,
    N = [],
    h = [],
    O = [],
    f = [],
    R = [],
    S = [],
    p = [],
    C = [],
    D = !0,
    U = !1,
    L = !1,
    M = !0,
    x = !1,
    b = null,
    v = I.rsA.ALL,
    P = null,
    j = {},
    y = 0;
function G(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, i;
            let a = [],
                o = null,
                u = null,
                d = null;
            if ((null != e.reason && a.push(new c.ms(I.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new c.ms(t.key, t.old_value, t.new_value);
                    a.push(e),
                        e.key === I.zUn.NAME
                            ? (o = e)
                            : e.key === I.zUn.TYPE
                              ? (d = e)
                              : e.key === I.zUn.TITLE && (u = e);
                }
            if (e.action_type === I.rsA.MEMBER_PRUNE) {
                let t =
                        null != e && null != e.options && null != e.options.delete_member_days
                            ? e.options.delete_member_days
                            : 1,
                    n = new c.ms(I.zUn.PRUNE_DELETE_DAYS, null, t);
                a.push(n);
            }
            e.action_type === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE &&
                (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null &&
                a.push(new c.ms(I.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)),
                e.action_type === I.rsA.VOICE_CHANNEL_STATUS_CREATE &&
                    (null == (r = e.options) ? void 0 : r.status) != null &&
                    a.push(new c.ms(I.zUn.STATUS, null, e.options.status));
            let _ = new c.ZP({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: a,
                    options: e.options,
                }),
                A = t[0];
            if (
                (function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return (
                        null != e &&
                        e.action === t.action &&
                        e.targetId === t.targetId &&
                        e.userId === t.userId &&
                        s().isEqual(e.options, t.options) &&
                        t.timestampStart.diff(e.timestampStart, "minutes") < r &&
                        n < l &&
                        t.targetType !== I.KFR.INVITE &&
                        t.action !== I.rsA.MESSAGE_DELETE &&
                        t.action !== I.rsA.MESSAGE_BULK_DELETE &&
                        t.action !== I.rsA.MESSAGE_PIN &&
                        t.action !== I.rsA.MESSAGE_UNPIN &&
                        t.action !== I.rsA.MEMBER_MOVE &&
                        t.action !== I.rsA.MEMBER_DISCONNECT &&
                        t.action !== I.rsA.BOT_ADD &&
                        t.action !== I.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE &&
                        t.action !== I.rsA.MEMBER_PRUNE
                    );
                })(A, _, n)
            ) {
                (t[0] = A.merge({
                    changes: [...A.changes, ..._.changes],
                    timestampEnd: _.timestampStart,
                })),
                    n++;
                return;
            }
            if (_.actionType === I.vB8.DELETE && (null != o || null != u)) {
                let e = null != (i = null == o ? void 0 : o.oldValue) ? i : null == u ? void 0 : u.oldValue;
                (_.targetType === I.KFR.CHANNEL || _.targetType === I.KFR.CHANNEL_OVERWRITE) &&
                    null !== d &&
                    (0, E.r8)(d.oldValue) &&
                    (e = "#".concat(e)),
                    null == j[_.targetType]
                        ? (j[_.targetType] = { [_.targetId]: e })
                        : (j[_.targetType][_.targetId] = e);
            }
            (n = 0), t.unshift(_);
        }),
        t
    );
}
function k(e) {
    let { section: t } = e;
    if (t !== I.pNK.AUDIT_LOG) return !1;
    let n = _.ZP.getMembers(g),
        r = T.Z.getGuild(g),
        l = null != g ? A.Z.getUnsafeMutableRoles(g) : void 0;
    O = s()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && (0, d._N)(n, m);
                }
            }),
        )
        .map((e) => e.userId)
        .value();
}
class F extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, A.Z, _.ZP);
    }
    get logs() {
        return N;
    }
    get integrations() {
        return h;
    }
    get webhooks() {
        return f;
    }
    get guildScheduledEvents() {
        return R;
    }
    get automodRules() {
        return S;
    }
    get threads() {
        return p;
    }
    get applicationCommands() {
        return C;
    }
    get isInitialLoading() {
        return D;
    }
    get isLoading() {
        return U;
    }
    get isLoadingNextPage() {
        return L;
    }
    get hasOlderLogs() {
        return M;
    }
    get hasError() {
        return x;
    }
    get userIds() {
        return O;
    }
    get userIdFilter() {
        return b;
    }
    get targetIdFilter() {
        return P;
    }
    get actionFilter() {
        return v;
    }
    get deletedTargets() {
        return j;
    }
    get groupedFetchCount() {
        return y;
    }
}
(l = "displayName") in F
    ? Object.defineProperty(F, l, {
          value: "GuildSettingsAuditLogStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (F[l] = "GuildSettingsAuditLogStore");
let w = new F(u.Z, {
    AUDIT_LOG_FETCH_START: function () {
        U = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        (y = 0),
            (D = !1),
            (U = !1),
            (M = !0),
            (x = !1),
            (N = G(e.logs)),
            (h = e.integrations),
            (f = e.webhooks),
            (R = e.guildScheduledEvents),
            (S = null != (t = e.automodRules) ? t : []),
            (p = e.threads),
            (C = e.applicationCommands),
            e.logs.length < I.Rg9 && (M = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (U = !1), (x = !0), (N = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (L = !0), t && y++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let {
            logs: t,
            integrations: n,
            webhooks: r,
            guildScheduledEvents: l,
            automodRules: i,
            threads: s,
            applicationCommands: a,
        } = e;
        if (
            ((L = !1),
            (h = n),
            (f = r),
            (R = l),
            (S = i),
            (p = s),
            (C = a),
            (0 === t.length || t.length < I.Rg9) && (M = !1),
            t.length > 0)
        ) {
            let e = G(t);
            N = [...N, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        L = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        v = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        b = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        P = t;
    },
    GUILD_SETTINGS_SET_SECTION: k,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (g = t), (P = null), k({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (N = []),
            (O = []),
            (v = I.rsA.ALL),
            (b = null),
            (P = null),
            (j = {}),
            (y = 0),
            (D = !0),
            (h = []),
            (f = []),
            (R = []),
            (S = []),
            (p = []);
    },
});
