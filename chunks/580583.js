var i = n(855986),
    r = n(73153),
    a = n(951217),
    s = n(653868),
    l = n(673383);
let o = new Map(),
    d = new Set();
class c extends i.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return o.get(e) ?? null;
    }
    getInvites() {
        return o;
    }
    isJoinFlowPending(e) {
        return d.has(e);
    }
    getPendingJoinFlowCodes() {
        return d;
    }
}
let u = new c(r.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (o.get(t)?.state === l.Zb.RESOLVED) return !1;
        (o = new Map(o)).set(t, { code: t, state: l.Zb.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (o = new Map(o)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i, guild: r } = e;
                return {
                    code: e.code,
                    state: l.Zb.RESOLVED,
                    inviterId: e.inviter_id,
                    accepted: e.accepted,
                    guildId: e.guild.id,
                    organization: (0, a.p)(t),
                    application: (0, s.Xw)(n),
                    displayNoun: i?.display_noun ?? null,
                    characterMode: i?.character_mode ?? l.Wy.SINGLE,
                    linkedGuild: (0, s.y1)(r),
                };
            })(n),
        );
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function (e) {
        let { code: t, error: n } = e;
        if (o.get(t)?.state === l.Zb.RESOLVED) return !1;
        (o = new Map(o)).set(t, { code: t, state: l.Zb.ERROR, error: n });
    },
    GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function (e) {
        let { code: t } = e,
            n = o.get(t);
        if (n?.state !== l.Zb.RESOLVED) return !1;
        (o = new Map(o)).set(t, { ...n, accepted: !0 });
    },
    GAME_ORGANIZATION_JOIN_FLOW_PENDING: function (e) {
        let { code: t, pending: n } = e;
        if (d.has(t) === n) return !1;
        let i = new Set(d);
        (n ? i.add(t) : i.delete(t), (d = i));
    },
});
n.d(t, {}, { A: u });
