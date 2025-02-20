n.d(t, {
    k: () => a,
    p: () => o
});
var r = n(904245),
    i = n(957730);
function o(e) {
    let { channel: t, content: n, entry: o, whenReady: a, doNotNotifyOnError: s } = e,
        l = i.ZP.parse(t, n),
        c = { unverified_content: o };
    return r.Z.sendMessage(t.id, l, a, {
        contentInventoryEntry: c,
        doNotNotifyOnError: s
    });
}
function a(e) {
    let { channel: t, content: n, whenReady: o, doNotNotifyOnError: a } = e,
        s = i.ZP.parse(t, n);
    return r.Z.sendMessage(t.id, s, o, { doNotNotifyOnError: a });
}
