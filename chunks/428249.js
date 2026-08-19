"use strict";
n.d(t, { J: () => r, d: () => s });
var l = n(148494),
    i = n(451909);
function s(e) {
    let { channel: t, content: n, entry: s, whenReady: r, doNotNotifyOnError: a, location: o } = e,
        u = i.Ay.parse(t, n);
    return l.A.sendMessage(t.id, u, r, {
        contentInventoryEntry: { unverified_content: s },
        doNotNotifyOnError: a,
        location: o,
    });
}
function r(e) {
    let { channel: t, content: n, whenReady: s, doNotNotifyOnError: r, location: a } = e,
        o = i.Ay.parse(t, n);
    return l.A.sendMessage(t.id, o, s, { doNotNotifyOnError: r, location: a });
}
