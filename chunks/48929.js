n.d(t, { Z: () => f }), n(47120);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(430198),
    c = n(314897),
    d = n(592125),
    u = n(709054),
    h = n(522579);
let p = new Set();
class m extends (i = r.ZP.Store) {
    shouldDisplayPrompt(e) {
        return p.has(e);
    }
}
(a = 'MediaPostSharePromptStore'),
    (l = 'displayName') in m
        ? Object.defineProperty(m, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[l] = a);
let f = new m(s.Z, {
    CONNECTION_OPEN: function () {
        p = new Set();
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.isPushNotification) return;
        let n = e.message;
        if (c.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, h.z9)(n.id, n.channel_id)) return;
        let i = d.Z.getChannel(n.channel_id);
        null != i && null != i.parent_id && o.Z.isChannelGated(i.guild_id, i.parent_id) && p.add(u.default.castMessageIdAsChannelId(e.message.id));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        p.delete(t);
    },
    LOGOUT: function (e) {
        p.clear();
    }
});
