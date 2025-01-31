n.d(t, { Z: () => g }), n(789020), n(47120);
var i = n(87051),
    r = n(147913),
    a = n(592125),
    s = n(430824),
    o = n(9156),
    l = n(70956),
    u = n(630388),
    c = n(621600),
    d = n(113449),
    f = n(981631),
    _ = n(526761);
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
let h = 1 * l.Z.Millis.DAY;
class m extends r.Z {
    checkGuilds() {
        o.ZP.useNewNotifications &&
            Object.values(s.Z.getGuilds()).forEach((e) => {
                if (null == e.joinedAt || Date.now() - e.joinedAt.getTime() > h || o.ZP.getMessageNotifications(e.id) === f.bL.ALL_MESSAGES) return;
                for (let t of Object.values(o.ZP.getChannelOverrides(e.id))) if ((null != t.message_notifications && t.message_notifications !== f.bL.NULL) || (null != t.flags && (0, u.EB)(t.flags, _.ic.UNREADS_ALL_MESSAGES | _.ic.UNREADS_ONLY_MENTIONS))) return;
                let t = Object.values(a.Z.getMutableBasicGuildChannelsForGuild(e.id)).filter((e) => e.type === f.d4z.GUILD_ANNOUNCEMENT);
                if (0 === t.length) return;
                let n = {};
                for (let i of t) n[i.id] = { flags: (0, d.pq)(o.ZP.getChannelIdFlags(e.id, i.id), _.ic.UNREADS_ALL_MESSAGES) };
                i.Z.updateChannelOverrideSettingsBulk(e.id, n, c.ZB.AnnouncementAutoEnable);
            });
    }
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                GUILD_CREATE: () => this.checkGuilds(),
                POST_CONNECTION_OPEN: () => this.checkGuilds()
            });
    }
}
let g = new m();
