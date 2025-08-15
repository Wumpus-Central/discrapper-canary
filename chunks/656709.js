n.d(t, {
    k: () => o,
    p: () => a,
});
var r = n(904245),
    i = n(957730);
function a(e) {
    let { channel: t, content: n, entry: a, whenReady: o, doNotNotifyOnError: s, location: l } = e,
        c = i.ZP.parse(t, n),
        u = { unverified_content: a };
    return r.Z.sendMessage(t.id, c, o, {
        contentInventoryEntry: u,
        doNotNotifyOnError: s,
        location: l,
    });
}
function o(e) {
    let { channel: t, content: n, whenReady: a, doNotNotifyOnError: o, location: s } = e,
        l = i.ZP.parse(t, n);
    return r.Z.sendMessage(t.id, l, a, {
        doNotNotifyOnError: o,
        location: s,
    });
}
