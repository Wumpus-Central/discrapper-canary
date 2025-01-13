n.d(t, {
    IV: function () {
        return s;
    },
    P: function () {
        return d;
    },
    fH: function () {
        return c;
    },
    sk: function () {
        return m;
    },
    xt: function () {
        return u;
    }
});
var i = n(166459),
    r = n(966390),
    l = n(476326),
    a = n(703558),
    o = n(398805);
async function s(e, t, n) {
    let i = (0, o.Yk)(t, n),
        r = await fetch(n);
    return c(e, t, new File([await r.blob()], i, { type: 'image/gif' })), n;
}
function c(e, t, n) {
    let r = {
        id: t,
        channelId: e,
        file: n,
        platform: l.ow.WEB
    };
    i.Z.addFile({
        file: r,
        channelId: e,
        draftType: a.d.Poll
    });
}
async function d(e, t, n) {
    i.Z.remove(e, t, a.d.Poll);
}
async function u(e) {
    i.Z.clearAll(e, a.d.Poll);
}
async function m(e) {
    let { channel: t, items: n, poll: i, nonce: l, maxSizeCallback: o } = e;
    return r.Z.uploadFiles({
        channelId: t.id,
        uploads: n,
        draftType: a.d.Poll,
        parsedMessage: {
            content: '',
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        options: {
            nonce: l,
            poll: i
        },
        raiseEndpointErrors: !0
    });
}
