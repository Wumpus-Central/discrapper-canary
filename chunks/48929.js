(n.d(t, { Z: () => E }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(430198),
    s = n(314897),
    l = n(592125),
    c = n(709054),
    u = n(522579);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = new Set();
function _() {
    f = new Set();
}
function p(e) {
    var t;
    if (e.isPushNotification) return;
    let n = e.message;
    if (s.default.getId() !== (null == (t = n.author) ? void 0 : t.id) || !(0, u.z9)(n.id, n.channel_id)) return;
    let r = l.Z.getChannel(n.channel_id);
    null != r && null != r.parent_id && o.Z.isChannelGated(r.guild_id, r.parent_id) && f.add(c.default.castMessageIdAsChannelId(e.message.id));
}
function h(e) {
    let { threadId: t } = e;
    f.delete(t);
}
function m(e) {
    f.clear();
}
class g extends (r = i.ZP.Store) {
    shouldDisplayPrompt(e) {
        return f.has(e);
    }
}
d(g, 'displayName', 'MediaPostSharePromptStore');
let E = new g(a.Z, {
    CONNECTION_OPEN: _,
    MESSAGE_CREATE: p,
    DISMISS_MEDIA_POST_SHARE_PROMPT: h,
    LOGOUT: m
});
