(n.d(t, { Z: () => x }), n(388685), n(997841));
var r,
    i,
    l,
    a = n(442837),
    o = n(433517),
    s = n(570140),
    c = n(314897),
    u = n(592125),
    d = n(496675),
    p = n(594174),
    m = n(630388),
    f = n(110630),
    g = n(981631);
let h = 'ChannelFollowingBumpChannels',
    _ = new Set(),
    b = new Set();
class E extends (r = a.ZP.Store) {
    initialize() {
        (this.waitFor(c.default), (_ = new Set(o.K.get(h))));
    }
    shouldShowBump(e) {
        return b.has(e);
    }
}
((l = 'ChannelFollowingPublishBumpStore'),
    (i = 'displayName') in E
        ? Object.defineProperty(E, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[i] = l));
let x = new E(s.Z, {
    MESSAGE_CREATE: function (e) {
        var t;
        let { channelId: n, message: r, optimistic: i } = e;
        if (i || _.has(n)) return !1;
        let l = u.Z.getChannel(n),
            a = p.default.getCurrentUser();
        if (!(null != l && l.type === g.d4z.GUILD_ANNOUNCEMENT && (0, f.Z)(r) && (null != a && (null == (t = r.author) ? void 0 : t.id) === a.id ? d.Z.can(g.Plq.SEND_MESSAGES, l) : d.Z.can(g.Plq.MANAGE_MESSAGES, l)) && !m.yE(Number(r.flags), g.iLy.CROSSPOSTED))) return !1;
        b.add(r.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        b.has(t.id) && m.yE(Number(t.flags), g.iLy.CROSSPOSTED) && b.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        b.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        b.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        (_.add(t), o.K.set(h, _), b.clear());
    }
});
