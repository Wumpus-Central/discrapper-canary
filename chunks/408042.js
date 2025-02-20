n(47120), n(653041), n(266796);
var r,
    i = n(442837),
    l = n(570140),
    o = n(314897),
    a = n(592125),
    s = n(430824),
    c = n(709054),
    u = n(231873);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {};
function h(e, t) {
    let n = p[e];
    return !(null == n || n.has(t)) && ((p[e] = new Set(n.add(t))), !0);
}
class g extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(o.default, s.Z),
            (p = {}),
            null != e &&
                c.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && 'function' == typeof n[Symbol.iterator] && (p[t] = new Set(n));
                });
    }
    getProgress(e) {
        return p[e];
    }
    hasProgress(e) {
        let t = p[e];
        return null != t && !t.has(u.Rg.DISMISSED);
    }
    getState() {
        return p;
    }
}
d(g, 'displayName', 'GuildProgressStore'),
    d(g, 'persistKey', 'GuildProgressStore'),
    new g(l.Z, {
        CONNECTION_OPEN: function () {
            let e = [];
            c.default.keys(p).forEach((t) => {
                p[t].has(u.Rg.COMPLETED) && e.push(t);
            }),
                e.forEach((e) => h(e, u.Rg.DISMISSED));
        },
        GUILD_PROGRESS_INITIALIZE: function (e) {
            let { guildId: t } = e;
            null == p[t] && (p[t] = new Set()), p[t].has(u.Rg.COMPLETED) || p[t].delete(u.Rg.DISMISSED);
        },
        GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
            let { guildId: t } = e;
            if (null == p[t]) return !1;
            p[t] = new Set(p[t].add(u.Rg.COMPLETED));
        },
        GUILD_PROGRESS_DISMISS: function (e) {
            let { guildId: t } = e;
            return h(t, u.Rg.DISMISSED);
        },
        GUILD_CREATE: function (e) {
            let {
                    guild: { id: t, member_count: n }
                } = e,
                r = s.Z.getGuild(t);
            if (null == r) return !1;
            r.ownerId === o.default.getId() && null != p[r.id] && (null != r.icon && p[r.id].add(u.Rg.AVATAR), n > 1 && p[r.id].add(u.Rg.INVITE));
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            return null != t && null != t.guild_id && null != p[t.guild_id] && h(t.guild_id, u.Rg.CHANNEL);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let e of t) null != e && null != e.guild_id && null != p[e.guild_id] && !1 !== h(e.guild_id, u.Rg.CHANNEL) && (n = !0);
            return n;
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
            let { guild: t } = e;
            return null != t && null != t.id && null != p[t.id] && null != t.icon && h(t.id, u.Rg.AVATAR);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: r } = e,
                i = a.Z.getChannel(n);
            return (null === (t = r.author) || void 0 === t ? void 0 : t.id) === o.default.getId() && null != i && null != p[i.guild_id] && h(i.guild_id, u.Rg.MESSAGE);
        },
        GUILD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, memberCount: n } = e;
            return null != p[t] && n > 1 && h(t, u.Rg.INVITE);
        }
    });
