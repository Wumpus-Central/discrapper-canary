n.d(t, { C: () => d });
var i = n(477900),
    l = n(582128),
    s = n(969602),
    r = n(490035),
    a = n(934499),
    o = n(307731);
function d(e) {
    let { channel: t, closePopout: n, analyticsOverride: d, onSelectEmoji: c, messageId: u } = e,
        [m, h] = l.useState(!1),
        g = (0, r.H)("reaction_picker");
    l.useEffect(() => {
        g && (0, a.Fp)();
    }, [g]);
    let p = g && m;
    return (0, i.jsx)(s.A, {
        closePopout: n,
        channel: t,
        onSelectEmoji: c,
        pickerIntention: o.EmojiIntention.REACTION,
        showAddEmojiButton: null == t || null != t.guild_id,
        analyticsOverride: d,
        messageId: u,
        isViewingEmojiPacks: p,
        onViewEmojiPacksChange: g ? h : void 0,
    });
}
