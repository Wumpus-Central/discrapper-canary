n.d(t, {
    A: () => A,
}),
    n(896048),
    n(938796);
var r,
    i,
    l = n(665260),
    a = n(311907),
    s = n(506774),
    o = n(73153),
    c = n(961350),
    u = n(734057),
    d = n(576705),
    p = n(287809),
    m = n(812930),
    f = n(652215);
let g = "ChannelFollowingBumpChannels",
    h = new Set(),
    _ = new Set();
class b extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.A, d.A, p.default), (h = new Set(s.w.get(g)));
    }
    shouldShowBump(e) {
        return _.has(e);
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
let A = new b(o.h, {
    MESSAGE_CREATE: function (e) {
        var t;
        let { channelId: n, message: r, optimistic: i } = e;
        if (i || h.has(n)) return !1;
        let a = u.A.getChannel(n),
            s = p.default.getCurrentUser();
        if (
            !(
                null != a &&
                a.type === f.rbe.GUILD_ANNOUNCEMENT &&
                (0, m.A)(r) &&
                (null != s && (null == (t = r.author) ? void 0 : t.id) === s.id
                    ? d.A.can(f.xBc.SEND_MESSAGES, a)
                    : d.A.can(f.xBc.MANAGE_MESSAGES, a)) &&
                !l.Lt(Number(r.flags), f.pr7.CROSSPOSTED)
            )
        )
            return !1;
        _.add(r.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        _.has(t.id) && l.Lt(Number(t.flags), f.pr7.CROSSPOSTED) && _.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        _.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        _.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        h.add(t), s.w.set(g, h), _.clear();
    },
});
