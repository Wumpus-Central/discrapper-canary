"use strict";
n.d(t, { A: () => p }), n(323874), n(14289), n(35956), n(321073);
var r = n(439372),
    i = n(508675),
    a = n(734057),
    s = n(486020),
    o = n(690521),
    l = n(746080),
    u = n(732139);
let c = new Worker(new URL("/assets/" + n.u("79908"), n.b));
function d(e) {
    return new Promise((t) => {
        let n = (r) => {
            let {
                data: { url: i },
            } = r;
            c?.removeEventListener("message", n), e === i && t();
        };
        c?.addEventListener("message", n), c?.postMessage({ url: e });
    });
}
function _(e) {
    let t = [],
        n = e.defaultReactionEmoji;
    return (
        n?.emojiId != null
            ? t.push(
                  s.Ay.getEmojiURL({
                      id: n.emojiId,
                      animated: i.Ay.getUsableCustomEmojiById(n.emojiId)?.animated ?? !1,
                      size: u.Ec.reaction,
                  }),
              )
            : n?.emojiName != null && t.push(o.Ay.getURL(n.emojiName)),
        e.availableTags.forEach((e) => {
            null != e.emojiId
                ? t.push(s.Ay.getEmojiURL({ id: e.emojiId, animated: !1, size: u.Ec.reaction }))
                : null != e.emojiName && t.push(o.Ay.getURL(e.emojiName));
        }),
        t
    );
}
class f extends r.A {
    actions = { CHANNEL_PRELOAD: this.handleChannelPreload };
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, l.jq)(t)) return;
        let n = a.A.getChannel(t);
        null != n &&
            n.isForumLikeChannel() &&
            _(n).forEach((e) => {
                null != e && 0 !== e.length && d(e);
            });
    }
}
let p = new f();
