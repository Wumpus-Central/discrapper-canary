"use strict";
n.d(t, { F: () => c, K: () => d });
var r = n(64700),
    i = n(311907),
    s = n(508675),
    a = n(7584),
    o = n(253932),
    l = n(652215);
function u(e, t) {
    let n = null;
    if (null != t) n = { id: t.id, name: t.name, animated: t.animated };
    else if (null != e.emojiName && "" !== e.emojiName) {
        let t = a.Ay.getByName(a.Ay.convertSurrogateToName(e.emojiName, !1));
        n = null != t ? { id: null, name: t.surrogates, animated: !1 } : null;
    }
    let r = Number(e.expiresAtMs),
        i = e.label?.value;
    return {
        name: "Custom Status",
        type: l.$pd.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: r > 0 ? { end: r } : void 0,
        emoji: n,
        details: i,
        metadata: { label: i },
    };
}
function c(e) {
    let { emojiId: t } = e;
    return u(e, null != t && "0" !== t ? s.Ay.getUsableCustomEmojiById(t) : null);
}
function d() {
    let e = o.G2.useSetting(),
        t = e?.emojiId,
        n = (0, i.bG)([s.Ay], () => (null != t && "0" !== t ? s.Ay.getUsableCustomEmojiById(t) : null), [t]);
    return (0, r.useMemo)(() => (null != e ? u(e, n) : null), [e, n]);
}
