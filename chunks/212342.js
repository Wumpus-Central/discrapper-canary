n.d(t, { Z: () => I }), n(388685), n(997841);
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
    p = n(981631);
function _(e, t, n) {
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
let m = "ChannelFollowingBumpChannels",
    h = new Set(),
    g = new Set();
function E(e) {
    var t;
    let { channelId: n, message: r, optimistic: a } = e;
    if (a || h.has(n)) return !1;
    let o = c.Z.getChannel(n),
        s = d.default.getCurrentUser();
    if (
        !(
            null != o &&
            o.type === p.d4z.GUILD_ANNOUNCEMENT &&
            (0, f.Z)(r) &&
            (null != s && (null == (t = r.author) ? void 0 : t.id) === s.id
                ? u.Z.can(p.Plq.SEND_MESSAGES, o)
                : u.Z.can(p.Plq.MANAGE_MESSAGES, o)) &&
            !i.yE(Number(r.flags), p.iLy.CROSSPOSTED)
        )
    )
        return !1;
    g.add(r.id);
}
function b(e) {
    let { message: t } = e;
    g.has(t.id) && i.yE(Number(t.flags), p.iLy.CROSSPOSTED) && g.delete(t.id);
}
function y(e) {
    let { messageId: t } = e;
    g.delete(t);
}
function O(e) {
    let { channelId: t } = e;
    h.add(t), o.K.set(m, h), g.clear();
}
function v(e) {
    g.clear();
}
class S extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.default, c.Z, u.Z, d.default), (h = new Set(o.K.get(m)));
    }
    shouldShowBump(e) {
        return g.has(e);
    }
}
_(S, "displayName", "ChannelFollowingPublishBumpStore");
let I = new S(s.Z, {
    MESSAGE_CREATE: E,
    MESSAGE_UPDATE: b,
    CHANNEL_SELECT: v,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: y,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: O,
});
