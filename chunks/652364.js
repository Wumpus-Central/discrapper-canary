"use strict";
n.d(t, { A: () => _ }), n(323874), n(14289), n(35956), n(321073);
var i = n(439372),
    r = n(236285),
    a = n(734057),
    s = n(486020),
    l = n(690521),
    o = n(746080),
    d = n(732139);
let c = new Worker(new URL("/assets/" + n.u("179908"), n.b));
class u extends i.A {
    actions = { CHANNEL_PRELOAD: this.handleChannelPreload };
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, o.jq)(t)) return;
        let n = a.A.getChannel(t);
        if (null != n && n.isForumLikeChannel()) {
            let e, t;
            ((e = []),
            (t = n.defaultReactionEmoji),
            t?.emojiId != null
                ? e.push(
                      s.Ay.getEmojiURL({
                          id: t.emojiId,
                          animated: r.Ay.getUsableCustomEmojiById(t.emojiId)?.animated ?? !1,
                          size: d.Ec.reaction,
                      }),
                  )
                : t?.emojiName != null && e.push(l.Ay.getURL(t.emojiName)),
            n.availableTags.forEach((t) => {
                null != t.emojiId
                    ? e.push(s.Ay.getEmojiURL({ id: t.emojiId, animated: !1, size: d.Ec.reaction }))
                    : null != t.emojiName && e.push(l.Ay.getURL(t.emojiName));
            }),
            e).forEach((e) => {
                null != e &&
                    0 !== e.length &&
                    new Promise((t) => {
                        c?.addEventListener("message", function n(i) {
                            let {
                                data: { url: r },
                            } = i;
                            c?.removeEventListener("message", n), e === r && t();
                        }),
                            c?.postMessage({ url: e });
                    });
            });
        }
    }
}
let _ = new u();
