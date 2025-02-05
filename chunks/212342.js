n.d(t, { Z: () => v }), n(47120), n(789020);
var i,
    l,
    a,
    r = n(442837),
    s = n(433517),
    o = n(570140),
    c = n(314897),
    d = n(592125),
    u = n(496675),
    m = n(594174),
    _ = n(630388),
    h = n(110630),
    p = n(981631);
let g = 'ChannelFollowingBumpChannels',
    f = new Set(),
    x = new Set();
class C extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(c.default), (f = new Set(s.K.get(g)));
    }
    shouldShowBump(e) {
        return x.has(e);
    }
}
(a = 'ChannelFollowingPublishBumpStore'),
    (l = 'displayName') in C
        ? Object.defineProperty(C, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[l] = a);
let v = new C(o.Z, {
    MESSAGE_CREATE: function (e) {
        var t;
        let { channelId: n, message: i, optimistic: l } = e;
        if (l || f.has(n)) return !1;
        let a = d.Z.getChannel(n),
            r = m.default.getCurrentUser();
        if (!(null != a && a.type === p.d4z.GUILD_ANNOUNCEMENT && (0, h.Z)(i) && (null != r && (null === (t = i.author) || void 0 === t ? void 0 : t.id) === r.id ? u.Z.can(p.Plq.SEND_MESSAGES, a) : u.Z.can(p.Plq.MANAGE_MESSAGES, a)) && !_.yE(Number(i.flags), p.iLy.CROSSPOSTED))) return !1;
        x.add(i.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        x.has(t.id) && _.yE(Number(t.flags), p.iLy.CROSSPOSTED) && x.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        x.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        x.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        f.add(t), s.K.set(g, f), x.clear();
    }
});
