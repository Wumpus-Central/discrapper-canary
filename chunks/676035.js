r.d(n, {
    I: function () {
        return d;
    },
    a: function () {
        return f;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(339085),
    s = r(633302),
    l = r(695346),
    u = r(981631);
function c(e, n) {
    let r = null;
    if (null != n)
        r = {
            id: n.id,
            name: n.name,
            animated: n.animated
        };
    else if (null != e.emojiName && '' !== e.emojiName) {
        let n = s.ZP.getByName(s.ZP.convertSurrogateToName(e.emojiName, !1));
        r =
            null != n
                ? {
                      id: null,
                      name: n.surrogates,
                      animated: !1
                  }
                : null;
    }
    let i = Number(e.expiresAtMs);
    return {
        name: 'Custom Status',
        type: u.IIU.CUSTOM_STATUS,
        state: e.text.length > 0 ? e.text : void 0,
        timestamps: i > 0 ? { end: i } : void 0,
        emoji: r
    };
}
function d(e) {
    let { emojiId: n } = e;
    return c(e, null != n && '0' !== n ? o.ZP.getUsableCustomEmojiById(n) : null);
}
function f() {
    let e = l.Ok.useSetting(),
        n = null == e ? void 0 : e.emojiId,
        r = (0, a.e7)([o.ZP], () => (null != n && '0' !== n ? o.ZP.getUsableCustomEmojiById(n) : null), [n]);
    return (0, i.useMemo)(() => (null != e ? c(e, r) : null), [e, r]);
}
