"use strict";
n.d(t, { C: () => s });
var i = n(477900);
n(582128);
var r = n(267889),
    a = n(307731);
function s(e) {
    let { channel: t, closePopout: n, analyticsOverride: s, onSelectEmoji: l, messageId: o } = e;
    return (0, i.jsx)(r.A, {
        closePopout: n,
        channel: t,
        onSelectEmoji: l,
        pickerIntention: a.EmojiIntention.REACTION,
        showAddEmojiButton: null == t || null != t.guild_id,
        analyticsOverride: s,
        messageId: o,
    });
}
