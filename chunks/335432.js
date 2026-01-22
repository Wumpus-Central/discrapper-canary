n.d(t, {
    Ay: () => p,
    ds: () => d,
});
var r = n(209932),
    i = n(320501),
    a = n(486020),
    s = n(864145),
    o = n(470020),
    l = n(937862),
    c = n(69945),
    u = n(652215);
let d = /^<sound:(\d+):(\d+)>/;

function f(e, t, n, a, l) {
    if (
        !s.UL.getCurrentConfig(
            {
                location: "getSoundmojiASTFromString",
            },
            {
                autoTrackExposure: !1,
            },
        ).enabled
    )
        return;
    let d = r.A.getSoundById(a),
        f = (0, c.A)(d, e, t);
    if (null != n && null != t) {
        let e = (0, o.A)(t, n, a, l);
        if (f && null == e) {
            let e = i.A.getMessage(t, n);
            if ((null == e ? void 0 : e.state) !== u.cmJ.SENT) return d;
        }
        return e;
    }
    if (f && null != d) return d;
}

function p(e, t) {
    var n;
    let r = e[1],
        i = e[2],
        { guildId: s, channelId: o, messageId: c } = t,
        u = f(s, o, c, i, t.soundboardSounds);
    if (null == u)
        return {
            type: "text",
            content: (0, l.A)(r, i),
        };
    let d = null != (n = null == u ? void 0 : u.name) ? n : i;
    return {
        type: "soundboard",
        soundId: i,
        guildId: r,
        messageId: t.messageId,
        channelId: t.channelId,
        content: d,
        emojiId: null == u ? void 0 : u.emojiId,
        emojiName: null == u ? void 0 : u.emojiName,
        emojiSrc:
            (null == u ? void 0 : u.emojiId) != null
                ? (0, a._O)({
                      id: null == u ? void 0 : u.emojiId,
                      animated: !1,
                      size: 16,
                  })
                : void 0,
    };
}
