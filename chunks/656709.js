n.d(t, { p: () => a });
var i = n(904245),
    r = n(957730);
function a(e) {
    let { channel: t, content: n, entry: a, whenReady: s, doNotNotifyOnError: o } = e,
        l = r.ZP.parse(t, n),
        u = { unverified_content: a };
    return i.Z.sendMessage(t.id, l, s, {
        contentInventoryEntry: u,
        doNotNotifyOnError: o
    });
}
