n.d(t, { D: () => A });
var i = n(17928),
    s = n(576705),
    a = n(73153);
let l = new Set(),
    r = new Set();
class c extends i.Ay.PersistedStore {
    static displayName = "PinotAdminNoticeAckStore";
    static persistKey = "PinotAdminNoticeAckStore";
    initialize(e) {
        ((l = new Set(e?.ackedGuildIds ?? [])), (r = new Set()));
    }
    getState() {
        return { ackedGuildIds: Array.from(l) };
    }
    isAcked(e) {
        return l.has(e);
    }
    isHidden(e) {
        return r.has(e);
    }
}
let o = new c(a.h, {
    PINOT_ADMIN_NOTICE_ACK: function (e) {
        let { guildId: t } = e;
        if (l.has(t)) return !1;
        l = new Set([...l, t]);
    },
    PINOT_ADMIN_NOTICE_HIDE: function (e) {
        let { guildId: t } = e;
        if (r.has(t)) return !1;
        r = new Set([...r, t]);
    },
});
var u = n(677166),
    d = n(652215);
function A(e) {
    let t = (0, i.bG)(
            [s.A],
            () =>
                null != e && e.features.has(d.GuildFeatures.DISCOVERABLE) && s.A.can(d.xBc.MANAGE_GUILD, e)
                    ? e.id
                    : null,
            [e],
        ),
        n = (0, u.C)(t, "guild_header_coachmark"),
        a = (0, i.bG)([o], () => null != t && (o.isAcked(t) || o.isHidden(t)), [t]);
    return n && !a;
}
