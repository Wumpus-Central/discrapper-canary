n.d(t, { t: () => d }), n(388685);
var r = n(473749),
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    s = n(889564),
    o = n(471613),
    c = n(267642);
function d(e) {
    let { guild: t } = e;
    if (null == t)
        return {
            maxEmojiSlots: 0,
            availableEmojiSlots: 0,
            staticEmoji: [],
            totalStaticEmoji: 0,
            animatedEmoji: [],
            totalAnimatedEmoji: 0,
        };
    let n = (0, c.y4)(t),
        i = (0, a.e7)([o.Z], () => o.Z.getEmojis(t.id)),
        [d, u] = r.useMemo(() => {
            let e = null == i ? void 0 : i.filter((e) => !(0, s.Kt)(e, t.id)),
                [n, r] = l().partition(e, (e) => !e.animated);
            return [n, r];
        }, [i, t]),
        g = Math.max(n - d.length, n - u.length);
    return {
        maxEmojiSlots: n,
        availableEmojiSlots: g,
        staticEmoji: d,
        totalStaticEmoji: d.length,
        animatedEmoji: u,
        totalAnimatedEmoji: u.length,
    };
}
