n.d(t, {
    ZP: () => _,
    hf: () => d
});
var i = n(763296),
    r = n(375954),
    a = n(768581),
    s = n(722932),
    o = n(801606),
    l = n(12327),
    u = n(277078),
    c = n(981631);
let d = /^<sound:(\d+):(\d+)>/;
function f(e, t, n, a, l) {
    if (!s.zv.getCurrentConfig({ location: 'getSoundmojiASTFromString' }, { autoTrackExposure: !1 }).enabled) return;
    let d = i.Z.getSoundById(a),
        f = (0, u.Z)(d, e, t);
    if (null != n && null != t) {
        let e = (0, o.Z)(t, n, a, l);
        if (f && null == e) {
            let e = r.Z.getMessage(t, n);
            if ((null == e ? void 0 : e.state) !== c.yb.SENT) return d;
        }
        return e;
    }
    if (f && null != d) return d;
}
function _(e, t) {
    var n;
    let i = e[1],
        r = e[2],
        { guildId: s, channelId: o, messageId: u } = t,
        c = f(s, o, u, r, t.soundboardSounds);
    if (null == c)
        return {
            type: 'text',
            content: (0, l.Z)(i, r)
        };
    let d = null !== (n = null == c ? void 0 : c.name) && void 0 !== n ? n : r;
    return {
        type: 'soundboard',
        soundId: r,
        guildId: i,
        messageId: t.messageId,
        channelId: t.channelId,
        content: d,
        emojiId: null == c ? void 0 : c.emojiId,
        emojiName: null == c ? void 0 : c.emojiName,
        emojiSrc:
            (null == c ? void 0 : c.emojiId) != null
                ? (0, a.gT)({
                      id: null == c ? void 0 : c.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
