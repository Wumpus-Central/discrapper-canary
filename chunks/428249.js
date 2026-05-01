n.d(t, { J: () => s, d: () => r });
var i = n(720149),
    l = n(451909);
function r(e) {
    let { channel: t, content: n, entry: r, whenReady: s, doNotNotifyOnError: a, location: o } = e,
        u = l.Ay.parse(t, n);
    return i.A.sendMessage(t.id, u, s, {
        contentInventoryEntry: { unverified_content: r },
        doNotNotifyOnError: a,
        location: o,
    });
}
function s(e) {
    let { channel: t, content: n, whenReady: r, doNotNotifyOnError: s, location: a } = e,
        o = l.Ay.parse(t, n);
    return i.A.sendMessage(t.id, o, r, { doNotNotifyOnError: s, location: a });
}
