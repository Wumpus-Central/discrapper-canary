n.d(t, {
    IV: () => s,
    P: () => d,
    fH: () => c,
    sk: () => p,
    xt: () => u
});
var r = n(166459),
    i = n(966390),
    a = n(476326),
    o = n(703558),
    l = n(398805);
async function s(e, t, n) {
    let r = (0, l.Yk)(t, n),
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
        draftType: o.d.Poll
    });
}
async function d(e, t, n) {
    r.Z.remove(e, t, o.d.Poll);
}
async function u(e) {
    r.Z.clearAll(e, o.d.Poll);
}
async function p(e) {
    let { channel: t, items: n, poll: r, nonce: a, maxSizeCallback: l } = e;
    return i.Z.uploadFiles({
        channelId: t.id,
        uploads: n,
        draftType: o.d.Poll,
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
