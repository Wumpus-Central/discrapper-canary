"use strict";
n.d(t, { C: () => r });
var l = n(477900);
n(582128);
var i = n(267889),
    s = n(307731);
function r(e) {
    let { channel: t, closePopout: n, analyticsOverride: r, onSelectEmoji: a, messageId: o } = e;
    return (0, l.jsx)(i.A, {
        closePopout: n,
        channel: t,
        onSelectEmoji: a,
        pickerIntention: s.EmojiIntention.REACTION,
        showAddEmojiButton: null == t || null != t.guild_id,
        analyticsOverride: r,
        messageId: o,
    });
}
