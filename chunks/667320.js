n.d(t, { D: () => _ });
var i = n(17928),
    s = n(576705),
    a = n(73153);
let r = new Set(),
    l = new Set();
class o extends i.Ay.PersistedStore {
    static displayName = "PinotAdminNoticeAckStore";
    static persistKey = "PinotAdminNoticeAckStore";
    initialize(e) {
        ((r = new Set(e?.ackedGuildIds ?? [])), (l = new Set()));
    }
    getState() {
        return { ackedGuildIds: Array.from(r) };
    }
    isAcked(e) {
        return r.has(e);
    }
    isHidden(e) {
        return l.has(e);
    }
}
let c = new o(a.h, {
    PINOT_ADMIN_NOTICE_ACK: function (e) {
        let { guildId: t } = e;
        if (r.has(t)) return !1;
        r = new Set([...r, t]);
    },
    PINOT_ADMIN_NOTICE_HIDE: function (e) {
        let { guildId: t } = e;
        if (l.has(t)) return !1;
        l = new Set([...l, t]);
    },
});
var d = n(677166),
    u = n(652215);
function _(e) {
    let t = (0, i.bG)(
            [s.A],
            () =>
                null != e && e.features.has(u.GuildFeatures.DISCOVERABLE) && s.A.can(u.xBc.MANAGE_GUILD, e)
                    ? e.id
                    : null,
            [e],
        ),
        n = (0, d.C)(t, "guild_header_coachmark"),
        a = (0, i.bG)([c], () => null != t && (c.isAcked(t) || c.isHidden(t)), [t]);
    return n && !a;
}
