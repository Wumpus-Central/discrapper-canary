n(47120), n(789020);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(433517),
    c = n(570140),
    u = n(314897),
    d = n(592125),
    m = n(496675),
    h = n(594174),
    f = n(630388),
    p = n(110630),
    _ = n(981631);
let g = 'ChannelFollowingBumpChannels',
    E = new Set(),
    C = new Set();
class I extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default), (E = new Set(s.K.get(g)));
    }
    shouldShowBump(e) {
        return C.has(e);
    }
}
(a = 'ChannelFollowingPublishBumpStore'),
    (l = 'displayName') in (r = I)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new I(c.Z, {
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: i, optimistic: r } = e;
            if (r || E.has(n)) return !1;
            let l = d.Z.getChannel(n),
                a = h.default.getCurrentUser();
            if (!(null != l && l.type === _.d4z.GUILD_ANNOUNCEMENT && (0, p.Z)(i) && (null != a && (null === (t = i.author) || void 0 === t ? void 0 : t.id) === a.id ? m.Z.can(_.Plq.SEND_MESSAGES, l) : m.Z.can(_.Plq.MANAGE_MESSAGES, l)) && !f.yE(Number(i.flags), _.iLy.CROSSPOSTED))) return !1;
            C.add(i.id);
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            C.has(t.id) && f.yE(Number(t.flags), _.iLy.CROSSPOSTED) && C.delete(t.id);
        },
        CHANNEL_SELECT: function (e) {
            C.clear();
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
            let { messageId: t } = e;
            C.delete(t);
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
            let { channelId: t } = e;
            E.add(t), s.K.set(g, E), C.clear();
        }
    }));
