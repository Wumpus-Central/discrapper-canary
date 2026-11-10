n.d(t, { D: () => _ });
var i = n(855986),
    s = n(576705),
    r = n(73153);
let a = new Set(),
    o = new Set();
class l extends i.Ay.PersistedStore {
    static displayName = "PinotAdminNoticeAckStore";
    static persistKey = "PinotAdminNoticeAckStore";
    initialize(e) {
        ((a = new Set(e?.ackedGuildIds ?? [])), (o = new Set()));
    }
    getState() {
        return { ackedGuildIds: Array.from(a) };
    }
    isAcked(e) {
        return a.has(e);
    }
    isHidden(e) {
        return o.has(e);
    }
}
let c = new l(r.h, {
    PINOT_ADMIN_NOTICE_ACK: function (e) {
        let { guildId: t } = e;
        if (a.has(t)) return !1;
        a = new Set([...a, t]);
    },
    PINOT_ADMIN_NOTICE_HIDE: function (e) {
        let { guildId: t } = e;
        if (o.has(t)) return !1;
        o = new Set([...o, t]);
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
        r = (0, i.bG)([c], () => null != t && (c.isAcked(t) || c.isHidden(t)), [t]);
    return n && !r;
}
