n(47120), n(653041);
var i,
    r = n(442837),
    l = n(570140),
    a = n(314897),
    s = n(592125),
    o = n(430824),
    c = n(709054),
    d = n(231873);
function u(e, t, n) {
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
let h = {};
function m(e, t) {
    let n = h[e];
    return !(null == n || n.has(t)) && ((h[e] = new Set(n.add(t))), !0);
}
class p extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.default, o.Z),
            (h = {}),
            null != e &&
                c.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && 'function' == typeof n[Symbol.iterator] && (h[t] = new Set(n));
                });
    }
    getProgress(e) {
        return h[e];
    }
    hasProgress(e) {
        let t = h[e];
        return null != t && !t.has(d.Rg.DISMISSED);
    }
    getState() {
        return h;
    }
}
u(p, 'displayName', 'GuildProgressStore'),
    u(p, 'persistKey', 'GuildProgressStore'),
    new p(l.Z, {
        CONNECTION_OPEN: function () {
            let e = [];
            c.default.keys(h).forEach((t) => {
                h[t].has(d.Rg.COMPLETED) && e.push(t);
            }),
                e.forEach((e) => m(e, d.Rg.DISMISSED));
        },
        GUILD_PROGRESS_INITIALIZE: function (e) {
            let { guildId: t } = e;
            null == h[t] && (h[t] = new Set()), !h[t].has(d.Rg.COMPLETED) && h[t].delete(d.Rg.DISMISSED);
        },
        GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
            let { guildId: t } = e;
            if (null == h[t]) return !1;
            h[t] = new Set(h[t].add(d.Rg.COMPLETED));
        },
        GUILD_PROGRESS_DISMISS: function (e) {
            let { guildId: t } = e;
            return m(t, d.Rg.DISMISSED);
        },
        GUILD_CREATE: function (e) {
            let {
                    guild: { id: t, member_count: n }
                } = e,
                i = o.Z.getGuild(t);
            if (null == i) return !1;
            i.ownerId === a.default.getId() && null != h[i.id] && (null != i.icon && h[i.id].add(d.Rg.AVATAR), n > 1 && h[i.id].add(d.Rg.INVITE));
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            return null != t && null != t.guild_id && null != h[t.guild_id] && m(t.guild_id, d.Rg.CHANNEL);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let e of t) null != e && null != e.guild_id && null != h[e.guild_id] && !1 !== m(e.guild_id, d.Rg.CHANNEL) && (n = !0);
            return n;
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
            let { guild: t } = e;
            return null != t && null != t.id && null != h[t.id] && null != t.icon && m(t.id, d.Rg.AVATAR);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: i } = e,
                r = s.Z.getChannel(n);
            return (null === (t = i.author) || void 0 === t ? void 0 : t.id) === a.default.getId() && null != r && null != h[r.guild_id] && m(r.guild_id, d.Rg.MESSAGE);
        },
        GUILD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, memberCount: n } = e;
            return null != h[t] && !!(n > 1) && m(t, d.Rg.INVITE);
        }
    });
