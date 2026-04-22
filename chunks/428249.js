"use strict";
n.d(t, { J: () => r, d: () => s });
var i = n(843472),
    l = n(451909);
function s(e) {
    let { channel: t, content: n, entry: s, whenReady: r, doNotNotifyOnError: a, location: o } = e,
        c = l.Ay.parse(t, n);
    return i.A.sendMessage(t.id, c, r, {
        contentInventoryEntry: { unverified_content: s },
        doNotNotifyOnError: a,
        location: o,
    });
}
function r(e) {
    let { channel: t, content: n, whenReady: s, doNotNotifyOnError: r, location: a } = e,
        o = l.Ay.parse(t, n);
    return i.A.sendMessage(t.id, o, s, { doNotNotifyOnError: r, location: a });
}
