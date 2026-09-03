n.d(t, { Ay: () => _, ds: () => u });
var i = n(209932),
    r = n(232835),
    a = n(486020),
    s = n(864145),
    l = n(470020),
    o = n(937862),
    d = n(69945),
    c = n(652215);
let u = /^<sound:(\d+):(\d+)>/;
function _(e, t) {
    let n = e[1],
        u = e[2],
        { guildId: _, channelId: E, messageId: A } = t,
        h = (function (e, t, n, a, o) {
            if (!(0, s.K)({ location: "getSoundmojiASTFromString" })) return;
            let u = i.A.getSoundById(a),
                _ = (0, d.A)(u, e, t);
            if (null != n && null != t) {
                let e = (0, l.A)(t, n, a, o);
                if (_ && null == e) {
                    let e = r.A.getMessage(t, n);
                    if (e?.state !== c.cmJ.SENT) return u;
                }
                return e;
            }
            if (_ && null != u) return u;
        })(_, E, A, u, t.soundboardSounds);
    if (null == h) return { type: "text", content: (0, o.A)(n, u) };
    let I = h?.name ?? u;
    return {
        type: "soundboard",
        soundId: u,
        guildId: n,
        messageId: t.messageId,
        channelId: t.channelId,
        content: I,
        emojiId: h?.emojiId,
        emojiName: h?.emojiName,
        emojiSrc: h?.emojiId != null ? (0, a._O)({ id: h?.emojiId, animated: !1, size: 16 }) : void 0,
    };
}
