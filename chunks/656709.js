n.d(t, {
    k: () => a,
    p: () => o,
});
var r = n(904245),
    i = n(957730);
function o(e) {
    let { channel: t, content: n, entry: o, whenReady: a, doNotNotifyOnError: s, location: l } = e,
        c = i.ZP.parse(t, n),
        u = { unverified_content: o };
    return r.Z.sendMessage(t.id, c, a, {
        contentInventoryEntry: u,
        doNotNotifyOnError: s,
        location: l,
    });
}
function a(e) {
    let { channel: t, content: n, whenReady: o, doNotNotifyOnError: a, location: s } = e,
        l = i.ZP.parse(t, n);
    return r.Z.sendMessage(t.id, l, o, {
        doNotNotifyOnError: a,
        location: s,
    });
}
