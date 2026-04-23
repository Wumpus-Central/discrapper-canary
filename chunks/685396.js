"use strict";
n.d(t, { F: () => _, K: () => u });
var i = n(64700),
    r = n(17928),
    s = n(159273),
    a = n(7584),
    o = n(253932),
    l = n(652215);
function d(e, t) {
    let n = null;
    if (null != t) n = { id: t.id, name: t.name, animated: t.animated };
    else if (null != e.emojiName && "" !== e.emojiName) {
        let t = a.Ay.getByName(a.Ay.convertSurrogateToName(e.emojiName, !1));
        n = null != t ? { id: null, name: t.surrogates, animated: !1 } : null;
    }
    let i = Number(e.expiresAtMs),
        r = e.label?.value;
    return {
        name: "Custom Status",
        type: l.$pd.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: i > 0 ? { end: i } : void 0,
        emoji: n,
        details: r,
        metadata: { label: r },
    };
}
function _(e) {
    let { emojiId: t } = e;
    return d(e, null != t && "0" !== t ? s.Ay.getUsableCustomEmojiById(t) : null);
}
function u() {
    let e = o.G2.useSetting(),
        t = e?.emojiId,
        n = (0, r.bG)([s.Ay], () => (null != t && "0" !== t ? s.Ay.getUsableCustomEmojiById(t) : null), [t]);
    return (0, i.useMemo)(() => (null != e ? d(e, n) : null), [e, n]);
}
