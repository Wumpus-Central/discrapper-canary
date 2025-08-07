n.d(t, { t: () => u }), n(388685);
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(889564),
    l = n(471613),
    c = n(267642);
function u(e) {
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
        i = (0, a.e7)([l.Z], () => l.Z.getEmojis(t.id)),
        [u, d] = r.useMemo(() => {
            let e = null == i ? void 0 : i.filter((e) => !(0, s.Kt)(e, t.id)),
                [n, r] = o().partition(e, (e) => !e.animated);
            return [n, r];
        }, [i, t]),
        f = Math.max(n - u.length, n - d.length);
    return {
        maxEmojiSlots: n,
        availableEmojiSlots: f,
        staticEmoji: u,
        totalStaticEmoji: u.length,
        animatedEmoji: d,
        totalAnimatedEmoji: d.length,
    };
}
