n.d(t, {
    F: () => u,
    K: () => d,
});
var r = n(64700),
    i = n(311907),
    a = n(508675),
    s = n(7584),
    o = n(253932),
    l = n(652215);
function c(e, t) {
    var n;
    let r = null;
    if (null != t)
        r = {
            id: t.id,
            name: t.name,
            animated: t.animated,
        };
    else if (null != e.emojiName && "" !== e.emojiName) {
        let t = s.Ay.getByName(s.Ay.convertSurrogateToName(e.emojiName, !1));
        r =
            null != t
                ? {
                      id: null,
                      name: t.surrogates,
                      animated: !1,
                  }
                : null;
    }
    let i = Number(e.expiresAtMs),
        a = null == (n = e.label) ? void 0 : n.value;
    return {
        name: "Custom Status",
        type: l.$pd.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: i > 0 ? { end: i } : void 0,
        emoji: r,
        details: a,
        metadata: { label: a },
    };
}
function u(e) {
    let { emojiId: t } = e;
    return c(e, null != t && "0" !== t ? a.Ay.getUsableCustomEmojiById(t) : null);
}
function d() {
    let e = o.G2.useSetting(),
        t = null == e ? void 0 : e.emojiId,
        n = (0, i.bG)([a.Ay], () => (null != t && "0" !== t ? a.Ay.getUsableCustomEmojiById(t) : null), [t]);
    return (0, r.useMemo)(() => (null != e ? c(e, n) : null), [e, n]);
}
