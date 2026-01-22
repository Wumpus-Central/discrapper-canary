n.d(t, { A: () => S }), n(896048), n(938796);
var r,
    i = n(665260),
    a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(961350),
    c = n(734057),
    u = n(576705),
    d = n(287809),
    f = n(812930),
    p = n(652215);
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
let h = "ChannelFollowingBumpChannels",
    m = new Set(),
    g = new Set();
function E(e) {
    var t;
    let { channelId: n, message: r, optimistic: a } = e;
    if (a || m.has(n)) return !1;
    let s = c.A.getChannel(n),
        o = d.default.getCurrentUser();
    if (
        !(
            null != s &&
            s.type === p.rbe.GUILD_ANNOUNCEMENT &&
            (0, f.A)(r) &&
            (null != o && (null == (t = r.author) ? void 0 : t.id) === o.id
                ? u.A.can(p.xBc.SEND_MESSAGES, s)
                : u.A.can(p.xBc.MANAGE_MESSAGES, s)) &&
            !i.Lt(Number(r.flags), p.pr7.CROSSPOSTED)
        )
    )
        return !1;
    g.add(r.id);
}
function b(e) {
    let { message: t } = e;
    g.has(t.id) && i.Lt(Number(t.flags), p.pr7.CROSSPOSTED) && g.delete(t.id);
}
function y(e) {
    let { messageId: t } = e;
    g.delete(t);
}
function O(e) {
    let { channelId: t } = e;
    m.add(t), s.w.set(h, m), g.clear();
}
function A(e) {
    g.clear();
}
class v extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(l.default, c.A, u.A, d.default), (m = new Set(s.w.get(h)));
    }
    shouldShowBump(e) {
        return g.has(e);
    }
}
_(v, "displayName", "ChannelFollowingPublishBumpStore");
let S = new v(o.h, {
    MESSAGE_CREATE: E,
    MESSAGE_UPDATE: b,
    CHANNEL_SELECT: A,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: y,
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: O,
});
