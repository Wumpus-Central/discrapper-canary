n.d(t, { D: () => p });
var i = n(17928),
    s = n(576705),
    a = n(73153);
let r = new Set(),
    o = new Set();
class d extends i.Ay.PersistedStore {
    static displayName = "PinotAdminNoticeAckStore";
    static persistKey = "PinotAdminNoticeAckStore";
    initialize(e) {
        ((r = new Set(e?.ackedGuildIds ?? [])), (o = new Set()));
    }
    getState() {
        return { ackedGuildIds: Array.from(r) };
    }
    isAcked(e) {
        return r.has(e);
    }
    isHidden(e) {
        return o.has(e);
    }
}
let c = new d(a.h, {
    PINOT_ADMIN_NOTICE_ACK: function (e) {
        let { guildId: t } = e;
        if (r.has(t)) return !1;
        r = new Set([...r, t]);
    },
    PINOT_ADMIN_NOTICE_HIDE: function (e) {
        let { guildId: t } = e;
        if (o.has(t)) return !1;
        o = new Set([...o, t]);
    },
});
var l = n(677166),
    u = n(652215);
function p(e) {
    let t = (0, i.bG)(
            [s.A],
            () =>
                null != e && e.features.has(u.GuildFeatures.DISCOVERABLE) && s.A.can(u.xBc.MANAGE_GUILD, e)
                    ? e.id
                    : null,
            [e],
        ),
        n = (0, l.C)(t, "guild_header_coachmark"),
        a = (0, i.bG)([c], () => null != t && (c.isAcked(t) || c.isHidden(t)), [t]);
    return n && !a;
}
