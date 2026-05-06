"use strict";
n.d(t, { Ay: () => _, ds: () => d });
var i = n(209932),
    r = n(232835),
    s = n(486020),
    a = n(864145),
    o = n(470020),
    l = n(937862),
    u = n(69945),
    c = n(652215);
let d = /^<sound:(\d+):(\d+)>/;
function _(e, t) {
    let n = e[1],
        d = e[2],
        { guildId: _, channelId: f, messageId: h } = t,
        p = (function (e, t, n, s, l) {
            if (!(0, a.K)({ location: "getSoundmojiASTFromString" })) return;
            let d = i.A.getSoundById(s),
                _ = (0, u.A)(d, e, t);
            if (null != n && null != t) {
                let e = (0, o.A)(t, n, s, l);
                if (_ && null == e) {
                    let e = r.A.getMessage(t, n);
                    if (e?.state !== c.cmJ.SENT) return d;
                }
                return e;
            }
            if (_ && null != d) return d;
        })(_, f, h, d, t.soundboardSounds);
    if (null == p) return { type: "text", content: (0, l.A)(n, d) };
    let E = p?.name ?? d;
    return {
        type: "soundboard",
        soundId: d,
        guildId: n,
        messageId: t.messageId,
        channelId: t.channelId,
        content: E,
        emojiId: p?.emojiId,
        emojiName: p?.emojiName,
        emojiSrc: p?.emojiId != null ? (0, s._O)({ id: p?.emojiId, animated: !1, size: 16 }) : void 0,
    };
}
