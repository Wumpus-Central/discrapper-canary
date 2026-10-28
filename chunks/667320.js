n.d(t, { D: () => h });
var i = n(17928),
    l = n(576705),
    a = n(73153);
let r = new Set(),
    s = new Set();
class E extends i.Ay.PersistedStore {
    static displayName = "PinotAdminNoticeAckStore";
    static persistKey = "PinotAdminNoticeAckStore";
    initialize(e) {
        ((r = new Set(e?.ackedGuildIds ?? [])), (s = new Set()));
    }
    getState() {
        return { ackedGuildIds: Array.from(r) };
    }
    isAcked(e) {
        return r.has(e);
    }
    isHidden(e) {
        return s.has(e);
    }
}
let d = new E(a.h, {
        PINOT_ADMIN_NOTICE_ACK: function (e) {
            let { guildId: t } = e;
            if (r.has(t)) return !1;
            r = new Set([...r, t]);
        },
        PINOT_ADMIN_NOTICE_HIDE: function (e) {
            let { guildId: t } = e;
            if (s.has(t)) return !1;
            s = new Set([...s, t]);
        },
    }),
    o = 221552 == n.j ? d : null;
var u = n(677166),
    c = n(652215);
function h(e) {
    let t = (0, i.bG)(
            [l.A],
            () =>
                null != e && e.features.has(c.GuildFeatures.DISCOVERABLE) && l.A.can(c.xBc.MANAGE_GUILD, e)
                    ? e.id
                    : null,
            [e],
        ),
        n = (0, u.C)(t, "guild_header_coachmark"),
        a = (0, i.bG)([o], () => null != t && (o.isAcked(t) || o.isHidden(t)), [t]);
    return n && !a;
}
