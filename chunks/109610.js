var i = r(789020);
var a = r(47120);
var o = r(87051),
    s = r(147913),
    l = r(592125),
    u = r(430824),
    c = r(9156),
    d = r(70956),
    f = r(630388),
    p = r(621600),
    h = r(113449),
    _ = r(981631),
    m = r(526761);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = 1 * d.Z.Millis.DAY;
class v extends s.Z {
    checkGuilds() {
        c.ZP.useNewNotifications &&
            Object.values(u.Z.getGuilds()).forEach((e) => {
                if (null == e.joinedAt || Date.now() - e.joinedAt.getTime() > E || c.ZP.getMessageNotifications(e.id) === _.bL.ALL_MESSAGES) return;
                for (let n of Object.values(c.ZP.getChannelOverrides(e.id))) if ((null != n.message_notifications && n.message_notifications !== _.bL.NULL) || (null != n.flags && (0, f.EB)(n.flags, m.ic.UNREADS_ALL_MESSAGES | m.ic.UNREADS_ONLY_MENTIONS))) return;
                let n = Object.values(l.Z.getMutableBasicGuildChannelsForGuild(e.id)).filter((e) => e.type === _.d4z.GUILD_ANNOUNCEMENT);
                if (0 === n.length) return;
                let r = {};
                for (let i of n) r[i.id] = { flags: (0, h.pq)(c.ZP.getChannelIdFlags(e.id, i.id), m.ic.UNREADS_ALL_MESSAGES) };
                o.Z.updateChannelOverrideSettingsBulk(e.id, r, p.ZB.AnnouncementAutoEnable);
            });
    }
    constructor(...e) {
        super(...e),
            g(this, 'actions', {
                GUILD_CREATE: () => this.checkGuilds(),
                POST_CONNECTION_OPEN: () => this.checkGuilds()
            });
    }
}
n.Z = new v();
