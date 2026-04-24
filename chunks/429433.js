"use strict";
n.d(t, { C: () => a });
var l = n(627968);
n(64700);
var i = n(267889),
    s = n(307731);
function a(e) {
    let { channel: t, closePopout: n, analyticsOverride: a, onSelectEmoji: r, messageId: o } = e;
    return (0, l.jsx)(i.A, {
        closePopout: n,
        channel: t,
        onSelectEmoji: r,
        pickerIntention: s.EmojiIntention.REACTION,
        showAddEmojiButton: null == t || null != t.guild_id,
        analyticsOverride: a,
        messageId: o,
    });
}
