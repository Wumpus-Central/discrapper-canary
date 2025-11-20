n.d(t, { Z: () => T }), n(388685), n(997841);
var r,
    i = n(95015),
    a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(314897),
    c = n(592125),
    u = n(496675),
    d = n(594174),
    f = n(110630),
    _ = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = "ChannelFollowingBumpChannels",
    m = new Set(),
    g = new Set();
function E(e) {
    var t;
    let { channelId: n, message: r, optimistic: a } = e;
    if (a || m.has(n)) return !1;
    let o = c.Z.getChannel(n),
        s = d.default.getCurrentUser();
    if (
        !(
            null != o &&
            o.type === _.d4z.GUILD_ANNOUNCEMENT &&
            (0, f.Z)(r) &&
            (null != s && (null == (t = r.author) ? void 0 : t.id) === s.id
                ? u.Z.can(_.Plq.SEND_MESSAGES, o)
                : u.Z.can(_.Plq.MANAGE_MESSAGES, o)) &&
            !i.yE(Number(r.flags), _.iLy.CROSSPOSTED)
        )
    )
        return !1;
    g.add(r.id);
}
function b(e) {
    let { message: t } = e;
    g.has(t.id) && i.yE(Number(t.flags), _.iLy.CROSSPOSTED) && g.delete(t.id);
}
function y(e) {
    let { messageId: t } = e;
    g.delete(t);
}
function O(e) {
    let { channelId: t } = e;
    m.add(t), o.K.set(h, m), g.clear();
}
function v(e) {
    g.clear();
}
class I extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.default, c.Z, u.Z, d.default), (m = new Set(o.K.get(h)));
    }
    shouldShowBump(e) {
        return g.has(e);
    }
}
p(I, "displayName", "ChannelFollowingPublishBumpStore");
let T = new I(s.Z, {
    MESSAGE_CREATE: E,
    MESSAGE_UPDATE: b,
    CHANNEL_SELECT: v,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: y,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: O,
});
