n.d(t, {
    I: () => u,
    a: () => d
});
var r = n(192379),
    i = n(442837),
    o = n(339085),
    a = n(633302),
    s = n(695346),
    l = n(981631);
function c(e, t) {
    let n = null;
    if (null != t)
        n = {
            id: t.id,
            name: t.name,
            animated: t.animated
        };
    else if (null != e.emojiName && '' !== e.emojiName) {
        let t = a.ZP.getByName(a.ZP.convertSurrogateToName(e.emojiName, !1));
        n =
            null != t
                ? {
                      id: null,
                      name: t.surrogates,
                      animated: !1
                  }
                : null;
    }
    let r = Number(e.expiresAtMs);
    return {
        name: 'Custom Status',
        type: l.IIU.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: r > 0 ? { end: r } : void 0,
        emoji: n
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
