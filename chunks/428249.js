n.d(t, { J: () => i, d: () => o });
var r = n(148494),
    u = n(451909);
function o(e) {
    let { channel: t, content: n, entry: o, whenReady: i, doNotNotifyOnError: a, location: s } = e,
        l = u.Ay.parse(t, n);
    return r.A.sendMessage(t.id, l, i, {
        contentInventoryEntry: { unverified_content: o },
        doNotNotifyOnError: a,
        location: s,
    });
}
function i(e) {
    let { channel: t, content: n, whenReady: o, doNotNotifyOnError: i, location: a } = e,
        s = u.Ay.parse(t, n);
    return r.A.sendMessage(t.id, s, o, { doNotNotifyOnError: i, location: a });
}
