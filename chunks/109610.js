(n.d(t, { Z: () => g }), n(997841), n(388685));
var r = n(87051),
    i = n(147913),
    a = n(592125),
    o = n(430824),
    s = n(9156),
    l = n(70956),
    c = n(630388),
    u = n(621600),
    d = n(113449),
    _ = n(981631),
    f = n(526761);
function p(e, t, n) {
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
let h = +l.Z.Millis.DAY;
class m extends i.Z {
    checkGuilds() {
        s.ZP.useNewNotifications &&
            o.Z.getGuildsArray().forEach((e) => {
                if (null == e.joinedAt || Date.now() - e.joinedAt.getTime() > h || s.ZP.getMessageNotifications(e.id) === _.bL.ALL_MESSAGES) return;
                for (let t of Object.values(s.ZP.getChannelOverrides(e.id))) if ((null != t.message_notifications && t.message_notifications !== _.bL.NULL) || (null != t.flags && (0, c.EB)(t.flags, f.ic.UNREADS_ALL_MESSAGES | f.ic.UNREADS_ONLY_MENTIONS))) return;
                let t = Object.values(a.Z.getMutableBasicGuildChannelsForGuild(e.id)).filter((e) => e.type === _.d4z.GUILD_ANNOUNCEMENT);
                if (0 === t.length) return;
                let n = {};
                for (let r of t) n[r.id] = { flags: (0, d.pq)(s.ZP.getChannelIdFlags(e.id, r.id), f.ic.UNREADS_ALL_MESSAGES) };
                r.Z.updateChannelOverrideSettingsBulk(e.id, n, u.ZB.AnnouncementAutoEnable);
            });
    }
    constructor(...e) {
        (super(...e),
            p(this, 'actions', {
                GUILD_CREATE: () => this.checkGuilds(),
                POST_CONNECTION_OPEN: () => this.checkGuilds()
            }));
    }
}
let g = new m();
