n.d(t, {
    I: () => u,
    a: () => d
});
var r = n(73800),
    i = n(442837),
    o = n(339085),
    a = n(633302),
    s = n(695346),
    l = n(981631);
function c(e, t) {
    var n;
    let r = null;
    if (null != t)
        r = {
            id: t.id,
            name: t.name,
            animated: t.animated
        };
    else if (null != e.emojiName && '' !== e.emojiName) {
        let t = a.ZP.getByName(a.ZP.convertSurrogateToName(e.emojiName, !1));
        r =
            null != t
                ? {
                      id: null,
                      name: t.surrogates,
                      animated: !1
                  }
                : null;
    }
    let i = Number(e.expiresAtMs),
        o = null == (n = e.label) ? void 0 : n.value;
    return {
        name: 'Custom Status',
        type: l.IIU.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: i > 0 ? { end: i } : void 0,
        emoji: r,
        details: o,
        metadata: { label: o }
    };
}
function u(e) {
    let { emojiId: t } = e;
    return c(e, null != t && '0' !== t ? o.ZP.getUsableCustomEmojiById(t) : null);
}
function d() {
    let e = s.Ok.useSetting(),
        t = null == e ? void 0 : e.emojiId,
        n = (0, i.e7)([o.ZP], () => (null != t && '0' !== t ? o.ZP.getUsableCustomEmojiById(t) : null), [t]);
    return (0, r.useMemo)(() => (null != e ? c(e, n) : null), [e, n]);
}
