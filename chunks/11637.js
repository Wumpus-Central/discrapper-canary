n.d(t, {
    ZP: () => _,
    hf: () => d
});
var r = n(763296),
    i = n(375954),
    o = n(768581),
    a = n(722932),
    s = n(801606),
    l = n(12327),
    c = n(277078),
    u = n(981631);
let d = /^<sound:(\d+):(\d+)>/;
function f(e, t, n, o, l) {
    if (!a.zv.getCurrentConfig({ location: 'getSoundmojiASTFromString' }, { autoTrackExposure: !1 }).enabled) return;
    let d = r.Z.getSoundById(o),
        f = (0, c.Z)(d, e, t);
    if (null != n && null != t) {
        let e = (0, s.Z)(t, n, o, l);
        if (f && null == e) {
            let e = i.Z.getMessage(t, n);
            if ((null == e ? void 0 : e.state) !== u.yb.SENT) return d;
        }
        return e;
    }
    if (f && null != d) return d;
}
function _(e, t) {
    var n;
    let r = e[1],
        i = e[2],
        { guildId: a, channelId: s, messageId: c } = t,
        u = f(a, s, c, i, t.soundboardSounds);
    if (null == u)
        return {
            type: 'text',
            content: (0, l.Z)(r, i)
        };
    let d = null != (n = null == u ? void 0 : u.name) ? n : i;
    return {
        type: 'soundboard',
        soundId: i,
        guildId: r,
        messageId: t.messageId,
        channelId: t.channelId,
        content: d,
        emojiId: null == u ? void 0 : u.emojiId,
        emojiName: null == u ? void 0 : u.emojiName,
        emojiSrc:
            (null == u ? void 0 : u.emojiId) != null
                ? (0, o.gT)({
                      id: null == u ? void 0 : u.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
