"use strict";
n.d(t, { A: () => _ }), n(323874), n(14289), n(35956), n(321073);
var r = n(439372),
    i = n(508675),
    s = n(734057),
    a = n(486020),
    o = n(690521),
    l = n(746080),
    u = n(732139);
let d = new Worker(new URL("/assets/" + n.u("79908"), n.b));
class c extends r.A {
    actions = { CHANNEL_PRELOAD: this.handleChannelPreload };
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, l.jq)(t)) return;
        let n = s.A.getChannel(t);
        if (null != n && n.isForumLikeChannel()) {
            let e, t;
            ((e = []),
            (t = n.defaultReactionEmoji),
            t?.emojiId != null
                ? e.push(
                      a.Ay.getEmojiURL({
                          id: t.emojiId,
                          animated: i.Ay.getUsableCustomEmojiById(t.emojiId)?.animated ?? !1,
                          size: u.Ec.reaction,
                      }),
                  )
                : t?.emojiName != null && e.push(o.Ay.getURL(t.emojiName)),
            n.availableTags.forEach((t) => {
                null != t.emojiId
                    ? e.push(a.Ay.getEmojiURL({ id: t.emojiId, animated: !1, size: u.Ec.reaction }))
                    : null != t.emojiName && e.push(o.Ay.getURL(t.emojiName));
            }),
            e).forEach((e) => {
                null != e &&
                    0 !== e.length &&
                    new Promise((t) => {
                        let n = (r) => {
                            let {
                                data: { url: i },
                            } = r;
                            d?.removeEventListener("message", n), e === i && t();
                        };
                        d?.addEventListener("message", n), d?.postMessage({ url: e });
                    });
            });
        }
    }
}
let _ = new c();
