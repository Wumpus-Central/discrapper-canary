"use strict";
n.d(t, { Ay: () => f, ds: () => d });
var r = n(209932),
    i = n(320501),
    a = n(486020),
    s = n(864145),
    o = n(470020),
    l = n(937862),
    u = n(69945),
    c = n(652215);
let d = /^<sound:(\d+):(\d+)>/;
function _(e, t, n, a, l) {
    if (!s.UL.getCurrentConfig({ location: "getSoundmojiASTFromString" }, { autoTrackExposure: !1 }).enabled) return;
    let d = r.A.getSoundById(a),
        _ = (0, u.A)(d, e, t);
    if (null != n && null != t) {
        let e = (0, o.A)(t, n, a, l);
        if (_ && null == e) {
            let e = i.A.getMessage(t, n);
            if (e?.state !== c.cmJ.SENT) return d;
        }
        return e;
    }
    if (_ && null != d) return d;
}
function f(e, t) {
    let n = e[1],
        r = e[2],
        { guildId: i, channelId: s, messageId: o } = t,
        u = _(i, s, o, r, t.soundboardSounds);
    if (null == u) return { type: "text", content: (0, l.A)(n, r) };
    let c = u?.name ?? r;
    return {
        type: "soundboard",
        soundId: r,
        guildId: n,
        messageId: t.messageId,
        channelId: t.channelId,
        content: c,
        emojiId: u?.emojiId,
        emojiName: u?.emojiName,
        emojiSrc: u?.emojiId != null ? (0, a._O)({ id: u?.emojiId, animated: !1, size: 16 }) : void 0,
    };
}
