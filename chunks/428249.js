n.d(t, { J: () => s, d: () => a });
var i = n(720149),
    r = n(451909);
function a(e) {
    let { channel: t, content: n, entry: a, whenReady: s, doNotNotifyOnError: _, location: l } = e,
        o = r.Ay.parse(t, n);
    return i.A.sendMessage(t.id, o, s, {
        contentInventoryEntry: { unverified_content: a },
        doNotNotifyOnError: _,
        location: l,
    });
}
function s(e) {
    let { channel: t, content: n, whenReady: a, doNotNotifyOnError: s, location: _ } = e,
        l = r.Ay.parse(t, n);
    return i.A.sendMessage(t.id, l, a, { doNotNotifyOnError: s, location: _ });
}
