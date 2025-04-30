n.d(t, {
    k: () => o,
    p: () => a
});
var r = n(904245),
    i = n(957730);
function a(e) {
    let { channel: t, content: n, entry: a, whenReady: o, doNotNotifyOnError: s } = e,
        l = i.ZP.parse(t, n),
        c = { unverified_content: a };
    return r.Z.sendMessage(t.id, l, o, {
        contentInventoryEntry: c,
        doNotNotifyOnError: s
    });
}
function o(e) {
    let { channel: t, content: n, whenReady: a, doNotNotifyOnError: o } = e,
        s = i.ZP.parse(t, n);
    return r.Z.sendMessage(t.id, s, a, { doNotNotifyOnError: o });
}
