n.d(t, { Z: () => T }), n(388685), n(997841);
var r,
    i = n(442837),
    o = n(433517),
    a = n(570140),
    s = n(314897),
    l = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(630388),
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
    let { channelId: n, message: r, optimistic: i } = e;
    if (i || m.has(n)) return !1;
    let o = l.Z.getChannel(n),
        a = u.default.getCurrentUser();
    if (
        !(
            null != o &&
            o.type === _.d4z.GUILD_ANNOUNCEMENT &&
            (0, f.Z)(r) &&
            (null != a && (null == (t = r.author) ? void 0 : t.id) === a.id
                ? c.Z.can(_.Plq.SEND_MESSAGES, o)
                : c.Z.can(_.Plq.MANAGE_MESSAGES, o)) &&
            !d.yE(Number(r.flags), _.iLy.CROSSPOSTED)
        )
    )
        return !1;
    g.add(r.id);
}
function b(e) {
    let { message: t } = e;
    g.has(t.id) && d.yE(Number(t.flags), _.iLy.CROSSPOSTED) && g.delete(t.id);
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
class I extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default), (m = new Set(o.K.get(h)));
    }
    shouldShowBump(e) {
        return g.has(e);
    }
}
p(I, "displayName", "ChannelFollowingPublishBumpStore");
let T = new I(a.Z, {
    MESSAGE_CREATE: E,
    MESSAGE_UPDATE: b,
    CHANNEL_SELECT: v,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: y,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: O,
});
