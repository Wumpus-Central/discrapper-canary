l.d(t, { A: () => u });
var n = l(284009),
    a = l.n(n),
    i = l(311907),
    s = l(508675),
    r = l(7584);
function u(e) {
    let { emojiId: t, emojiName: l } = e,
        n = (0, i.bG)([s.Ay], () => (null != t ? s.Ay.getCustomEmojiById(t) : null));
    if (null != n || null != l)
        if (null == t)
            return (
                a()(null != l, "emojiName must be defined if emojiId is not defined"),
                r.Ay.convertSurrogateToName(l, !1)
            );
        else return n?.name;
}
