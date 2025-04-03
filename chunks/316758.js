n.d(t, {
    IV: () => s,
    P: () => u,
    fH: () => c,
    sk: () => p,
    xt: () => d
});
var r = n(166459),
    i = n(966390),
    a = n(476326),
    l = n(703558),
    o = n(398805);
async function s(e, t, n) {
    let r = (0, o.Yk)(t, n),
        i = await fetch(n);
    return c(e, t, new File([await i.blob()], r, { type: 'image/gif' })), n;
}
function c(e, t, n) {
    let i = {
        id: t,
        channelId: e,
        file: n,
        platform: a.ow.WEB
    };
    r.Z.addFile({
        file: i,
        channelId: e,
        draftType: l.d.Poll
    });
}
async function u(e, t, n) {
    r.Z.remove(e, t, l.d.Poll);
}
async function d(e) {
    r.Z.clearAll(e, l.d.Poll);
}
async function p(e) {
    let { channel: t, items: n, poll: r, nonce: a, maxSizeCallback: o } = e;
    return i.Z.uploadFiles({
        channelId: t.id,
        uploads: n,
        draftType: l.d.Poll,
        parsedMessage: {
            content: '',
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        options: {
            nonce: a,
            poll: r
        },
        raiseEndpointErrors: !0
    });
}
