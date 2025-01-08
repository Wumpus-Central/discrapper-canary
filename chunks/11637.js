r.d(n, {
    ZP: function () {
        return h;
    },
    hf: function () {
        return f;
    }
});
var i = r(763296),
    a = r(375954),
    s = r(768581),
    o = r(722932),
    l = r(801606),
    u = r(12327),
    c = r(277078),
    d = r(981631);
let f = /^<sound:(\d+):(\d+)>/;
function _(e, n, r, s) {
    if (!o.zv.getCurrentConfig({ location: 'getSoundmojiASTFromString' }, { autoTrackExposure: !1 }).enabled) return;
    let u = i.Z.getSoundById(s),
        f = (0, c.Z)(u, e, n);
    if (null != r && null != n) {
        let e = (0, l.Z)(n, r, s);
        if (f && null == e) {
            let e = a.Z.getMessage(n, r);
            if ((null == e ? void 0 : e.state) !== d.yb.SENT) return u;
        }
        return e;
    }
    if (!!f) {
        if (null != u) return u;
    }
}
function h(e, n) {
    var r;
    let i = e[1],
        a = e[2],
        { guildId: o, channelId: l, messageId: c } = n,
        d = _(o, l, c, a);
    if (null == d)
        return {
            type: 'text',
            content: (0, u.Z)(i, a)
        };
    let f = null !== (r = null == d ? void 0 : d.name) && void 0 !== r ? r : a;
    return {
        type: 'soundboard',
        soundId: a,
        guildId: i,
        messageId: n.messageId,
        channelId: n.channelId,
        content: f,
        emojiId: null == d ? void 0 : d.emojiId,
        emojiName: null == d ? void 0 : d.emojiName,
        emojiSrc:
            (null == d ? void 0 : d.emojiId) != null
                ? (0, s.gT)({
                      id: null == d ? void 0 : d.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
