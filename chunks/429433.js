"use strict";
n.d(t, { C: () => a });
var r = n(627968);
n(64700);
var i = n(937773),
    s = n(307731);
function a(e) {
    let { channel: t, closePopout: n, analyticsOverride: a, onSelectEmoji: o, messageId: l } = e;
    return (0, r.jsx)(i.A, {
        closePopout: n,
        channel: t,
        onSelectEmoji: o,
        pickerIntention: s.b_.REACTION,
        showAddEmojiButton: null == t || null != t.guild_id,
        analyticsOverride: a,
        messageId: l,
    });
}
