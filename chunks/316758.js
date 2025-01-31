n.d(t, {
    IV: () => o,
    P: () => d,
    fH: () => c,
    sk: () => m,
    xt: () => u
});
var i = n(166459),
    l = n(966390),
    a = n(476326),
    r = n(703558),
    s = n(398805);
async function o(e, t, n) {
    let i = (0, s.Yk)(t, n),
        l = await fetch(n);
    return c(e, t, new File([await l.blob()], i, { type: 'image/gif' })), n;
}
function c(e, t, n) {
    let l = {
        id: t,
        channelId: e,
        file: n,
        platform: a.ow.WEB
    };
    i.Z.addFile({
        file: l,
        channelId: e,
        draftType: r.d.Poll
    });
}
async function d(e, t, n) {
    i.Z.remove(e, t, r.d.Poll);
}
async function u(e) {
    i.Z.clearAll(e, r.d.Poll);
}
async function m(e) {
    let { channel: t, items: n, poll: i, nonce: a, maxSizeCallback: s } = e;
    return l.Z.uploadFiles({
        channelId: t.id,
        uploads: n,
        draftType: r.d.Poll,
        parsedMessage: {
            content: '',
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        options: {
            nonce: a,
            poll: i
        },
        raiseEndpointErrors: !0
    });
}
