n.d(t, { A: () => u });
var l = n(284009),
    i = n.n(l),
    a = n(311907),
    r = n(508675),
    s = n(7584);
function u(e) {
    let { emojiId: t, emojiName: n } = e,
        l = (0, a.bG)([r.Ay], () => (null != t ? r.Ay.getCustomEmojiById(t) : null));
    if (null != l || null != n)
        if (null == t)
            return (
                i()(null != n, "emojiName must be defined if emojiId is not defined"),
                s.Ay.convertSurrogateToName(n, !1)
            );
        else return null == l ? void 0 : l.name;
}
