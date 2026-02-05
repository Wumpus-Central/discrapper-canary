"use strict";
n.d(t, { C: () => s });
var r = n(627968);
n(64700);
var i = n(937773),
    a = n(307731);
function s(e) {
    let { channel: t, closePopout: n, analyticsOverride: s, onSelectEmoji: o, messageId: l } = e;
    return (0, r.jsx)(i.A, {
        closePopout: n,
        channel: t,
        onSelectEmoji: o,
        pickerIntention: a.b_.REACTION,
        analyticsOverride: s,
        messageId: l,
    });
}
