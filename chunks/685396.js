n.d(t, { F: () => _, K: () => E });
var i = n(582128),
    r = n(350835),
    a = n(17928),
    s = n(236285),
    l = n(7584),
    o = n(182159),
    d = n(253932);
function c(e, t) {
    let n = null;
    if (null != t) n = { id: t.id, name: t.name, animated: t.animated };
    else if (null != e.emojiName && "" !== e.emojiName) {
        let t = l.Ay.getByName(l.Ay.convertSurrogateToName(e.emojiName, !1));
        n = null != t ? { id: null, name: t.surrogates, animated: !1 } : null;
    }
    let i = Number(e.expiresAtMs),
        a = e.label?.value;
    return {
        name: "Custom Status",
        type: r.$.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: i > 0 ? { end: i } : void 0,
        emoji: n,
        details: a,
        metadata: { label: a },
    };
}
function u(e) {
    if (null == e || "0" === e) return null;
    let t = o.A.getEmoji(e);
    return s.Ay.getUsableCustomEmojiById(e) ?? (null != t && o.A.isPackEmojiUsable(t) ? t : null);
}
function _(e) {
    return c(e, u(e.emojiId));
}
function E() {
    let e = d.G2.useSetting(),
        t = e?.emojiId,
        n = (0, a.bG)([s.Ay, o.A], () => u(t), [t]);
    return (0, i.useMemo)(() => (null != e ? c(e, n) : null), [e, n]);
}
