n.d(t, { F: () => c, K: () => u });
var i = n(582128),
    r = n(17928),
    a = n(236285),
    s = n(7584),
    l = n(885386),
    o = n(652215);
function d(e, t) {
    let n = null;
    if (null != t) n = { id: t.id, name: t.name, animated: t.animated };
    else if (null != e.emojiName && "" !== e.emojiName) {
        let t = s.Ay.getByName(s.Ay.convertSurrogateToName(e.emojiName, !1));
        n = null != t ? { id: null, name: t.surrogates, animated: !1 } : null;
    }
    let i = Number(e.expiresAtMs),
        r = e.label?.value;
    return {
        name: "Custom Status",
        type: o.$pd.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: i > 0 ? { end: i } : void 0,
        emoji: n,
        details: r,
        metadata: { label: r },
    };
}
function c(e) {
    let { emojiId: t } = e;
    return d(e, null != t && "0" !== t ? a.Ay.getUsableCustomEmojiById(t) : null);
}
function u() {
    let e = l.G2.useSetting(),
        t = e?.emojiId,
        n = (0, r.bG)([a.Ay], () => (null != t && "0" !== t ? a.Ay.getUsableCustomEmojiById(t) : null), [t]);
    return (0, i.useMemo)(() => (null != e ? d(e, n) : null), [e, n]);
}
