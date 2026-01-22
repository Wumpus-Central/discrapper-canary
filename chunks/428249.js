n.d(t, {
    J: () => s,
    d: () => a,
});
var r = n(843472),
    i = n(451909);
function a(e) {
    let { channel: t, content: n, entry: a, whenReady: s, doNotNotifyOnError: o, location: l } = e,
        c = i.Ay.parse(t, n),
        u = { unverified_content: a };
    return r.A.sendMessage(t.id, c, s, {
        contentInventoryEntry: u,
        doNotNotifyOnError: o,
        location: l,
    });
}
function s(e) {
    let { channel: t, content: n, whenReady: a, doNotNotifyOnError: s, location: o } = e,
        l = i.Ay.parse(t, n);
    return r.A.sendMessage(t.id, l, a, {
        doNotNotifyOnError: s,
        location: o,
    });
}
