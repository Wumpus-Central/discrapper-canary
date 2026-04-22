"use strict";
n.d(t, { Ay: () => _, ds: () => c });
var r = n(209932),
    i = n(320501),
    s = n(486020),
    a = n(864145),
    o = n(470020),
    l = n(937862),
    u = n(69945),
    d = n(652215);
let c = /^<sound:(\d+):(\d+)>/;
function _(e, t) {
    let n = e[1],
        c = e[2],
        { guildId: _, channelId: f, messageId: E } = t,
        h = (function (e, t, n, s, l) {
            if (!(0, a.K)({ location: "getSoundmojiASTFromString" })) return;
            let c = r.A.getSoundById(s),
                _ = (0, u.A)(c, e, t);
            if (null != n && null != t) {
                let e = (0, o.A)(t, n, s, l);
                if (_ && null == e) {
                    let e = i.A.getMessage(t, n);
                    if (e?.state !== d.cmJ.SENT) return c;
                }
                return e;
            }
            if (_ && null != c) return c;
        })(_, f, E, c, t.soundboardSounds);
    if (null == h) return { type: "text", content: (0, l.A)(n, c) };
    let p = h?.name ?? c;
    return {
        type: "soundboard",
        soundId: c,
        guildId: n,
        messageId: t.messageId,
        channelId: t.channelId,
        content: p,
        emojiId: h?.emojiId,
        emojiName: h?.emojiName,
        emojiSrc: h?.emojiId != null ? (0, s._O)({ id: h?.emojiId, animated: !1, size: 16 }) : void 0,
    };
}
