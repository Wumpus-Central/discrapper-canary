"use strict";
n.d(t, { J: () => a, d: () => s });
var i = n(720149),
    r = n(451909);
function s(e) {
    let { channel: t, content: n, entry: s, whenReady: a, doNotNotifyOnError: o, location: l } = e,
        u = r.Ay.parse(t, n);
    return i.A.sendMessage(t.id, u, a, {
        contentInventoryEntry: { unverified_content: s },
        doNotNotifyOnError: o,
        location: l,
    });
}
function a(e) {
    let { channel: t, content: n, whenReady: s, doNotNotifyOnError: a, location: o } = e,
        l = r.Ay.parse(t, n);
    return i.A.sendMessage(t.id, l, s, { doNotNotifyOnError: a, location: o });
}
