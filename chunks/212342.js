n.d(t, { Z: () => E }), n(388685), n(997841);
var r,
    i,
    l = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(314897),
    c = n(592125),
    u = n(496675),
    d = n(594174),
    p = n(630388),
    m = n(110630),
    f = n(981631);
let g = "ChannelFollowingBumpChannels",
    _ = new Set(),
    h = new Set();
class b extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(s.default), (_ = new Set(a.K.get(g)));
    }
    shouldShowBump(e) {
        return h.has(e);
    }
}
(i = "displayName") in b
    ? Object.defineProperty(b, i, {
          value: "ChannelFollowingPublishBumpStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (b[i] = "ChannelFollowingPublishBumpStore");
let E = new b(o.Z, {
    MESSAGE_CREATE: function (e) {
        var t;
        let { channelId: n, message: r, optimistic: i } = e;
        if (i || _.has(n)) return !1;
        let l = c.Z.getChannel(n),
            a = d.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === f.d4z.GUILD_ANNOUNCEMENT &&
                (0, m.Z)(r) &&
                (null != a && (null == (t = r.author) ? void 0 : t.id) === a.id
                    ? u.Z.can(f.Plq.SEND_MESSAGES, l)
                    : u.Z.can(f.Plq.MANAGE_MESSAGES, l)) &&
                !p.yE(Number(r.flags), f.iLy.CROSSPOSTED)
            )
        )
            return !1;
        h.add(r.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        h.has(t.id) && p.yE(Number(t.flags), f.iLy.CROSSPOSTED) && h.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        h.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        h.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        _.add(t), a.K.set(g, _), h.clear();
    },
});
