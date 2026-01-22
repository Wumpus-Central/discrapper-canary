n.d(t, { A: () => h }), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(321073);
var r = n(439372),
    i = n(508675),
    a = n(734057),
    s = n(486020),
    o = n(690521),
    l = n(746080),
    c = n(732139);
function u(e, t, n) {
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
let d = new Worker(new URL("/assets/" + n.u("79908"), n.b));
function f(e) {
    return new Promise((t) => {
        let n = (r) => {
            let {
                data: { url: i },
            } = r;
            null == d || d.removeEventListener("message", n), e === i && t();
        };
        null == d || d.addEventListener("message", n), null == d || d.postMessage({ url: e });
    });
}
function p(e) {
    let t = [],
        n = e.defaultReactionEmoji;
    if ((null == n ? void 0 : n.emojiId) != null) {
        var r, a;
        t.push(
            s.Ay.getEmojiURL({
                id: n.emojiId,
                animated:
                    null != (r = null == (a = i.Ay.getUsableCustomEmojiById(n.emojiId)) ? void 0 : a.animated) && r,
                size: c.Ec.reaction,
            }),
        );
    } else (null == n ? void 0 : n.emojiName) != null && t.push(o.Ay.getURL(n.emojiName));
    return (
        e.availableTags.forEach((e) => {
            null != e.emojiId
                ? t.push(
                      s.Ay.getEmojiURL({
                          id: e.emojiId,
                          animated: !1,
                          size: c.Ec.reaction,
                      }),
                  )
                : null != e.emojiName && t.push(o.Ay.getURL(e.emojiName));
        }),
        t
    );
}
class _ extends r.A {
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, l.jq)(t)) return;
        let n = a.A.getChannel(t);
        null != n &&
            n.isForumLikeChannel() &&
            p(n).forEach((e) => {
                null != e && 0 !== e.length && f(e);
            });
    }
    constructor(...e) {
        super(...e), u(this, "actions", { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
let h = new _();
