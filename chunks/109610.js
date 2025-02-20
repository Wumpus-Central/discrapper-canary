n.d(t, { Z: () => g }), n(789020), n(47120);
var r = n(87051),
    i = n(147913),
    o = n(592125),
    a = n(430824),
    s = n(9156),
    l = n(70956),
    c = n(630388),
    u = n(621600),
    d = n(113449),
    f = n(981631),
    p = n(526761);
function _(e, t, n) {
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
            Object.values(a.Z.getGuilds()).forEach((e) => {
                if (null == e.joinedAt || Date.now() - e.joinedAt.getTime() > h || s.ZP.getMessageNotifications(e.id) === f.bL.ALL_MESSAGES) return;
                for (let t of Object.values(s.ZP.getChannelOverrides(e.id))) if ((null != t.message_notifications && t.message_notifications !== f.bL.NULL) || (null != t.flags && (0, c.EB)(t.flags, p.ic.UNREADS_ALL_MESSAGES | p.ic.UNREADS_ONLY_MENTIONS))) return;
                let t = Object.values(o.Z.getMutableBasicGuildChannelsForGuild(e.id)).filter((e) => e.type === f.d4z.GUILD_ANNOUNCEMENT);
                if (0 === t.length) return;
                let n = {};
                for (let r of t) n[r.id] = { flags: (0, d.pq)(s.ZP.getChannelIdFlags(e.id, r.id), p.ic.UNREADS_ALL_MESSAGES) };
                r.Z.updateChannelOverrideSettingsBulk(e.id, n, u.ZB.AnnouncementAutoEnable);
            });
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                GUILD_CREATE: () => this.checkGuilds(),
                POST_CONNECTION_OPEN: () => this.checkGuilds()
            });
    }
}
let g = new m();
