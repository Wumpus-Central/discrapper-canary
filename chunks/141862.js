"use strict";
n.d(t, { A: () => h, y: () => p });
var r = n(64700),
    i = n(58149),
    a = n(508675),
    s = n(734057),
    o = n(309010),
    l = n(690521),
    u = n(818645),
    c = n(316884),
    d = n(652215),
    _ = n(307731),
    f = n(698279);
function p(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        t.current.intention === _.b_.REACTION && h(t.current);
    }, []);
}
function h(e) {
    let { intention: t, containerWidth: n, rowSize: r, isBurstReaction: p, analyticsObject: h } = e,
        m = s.A.getChannel(o.A.getChannelId()),
        g = m?.getGuildId(),
        E =
            t === _.b_.REACTION
                ? a.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : a.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        A = null != m ? a.Ay.getDisambiguatedEmojiContext(m.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        I =
            t === _.b_.REACTION
                ? a.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : a.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        T = E.slice(0, I),
        y = null != g ? a.Ay.getGuildEmoji(g) : [],
        S = Object.values(a.Ay.getDisambiguatedEmojiContext(m?.getGuildId()).groupedCustomEmojis ?? {}).reduce(
            (e, t) => (e += t.length),
            0,
        ),
        { topEmojis: v, newlyAddedEmojis: C } = (0, c.b)({ guildId: m?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: b, visibleNewlyAddedEmojis: N } = (0, u.W)({
            topEmojis: v,
            newlyAddedEmojis: C,
            rowSize: r,
        });
    i.Ay.trackWithMetadata(t === _.b_.REACTION ? d.HAw.REACTION_PICKER_OPENED : d.HAw.EXPRESSION_PICKER_OPENED, {
        width: n,
        tab: f.kx.EMOJI,
        badged: !1,
        num_expressions_favorites: A.length,
        num_animated_expressions_favorites: A.filter((e) => e?.animated).length,
        num_custom_expressions_favorites: A.filter(l.Ay.isCustomEmoji).length,
        num_standard_expressions_favorites: A.filter((e) => null == e.id).length,
        num_expressions_frecent: T.length,
        num_animated_expressions_frecent: T.filter((e) => e?.animated).length,
        num_custom_expressions_frecent: T.filter(l.Ay.isCustomEmoji).length,
        num_standard_expressions_frecent: T.filter((e) => null == e.id).length,
        num_current_guild_expressions: y.length,
        num_custom_expressions_total: S,
        num_expressions_top_server: b.length,
        num_animated_expressions_top_server: b.filter((e) => e.animated).length,
        num_expressions_newly_added: N.length,
        num_animated_expressions_newly_added: N.filter((e) => e.animated).length,
        ...(t === _.b_.REACTION && { is_burst: p }),
        ...(null != h && { location_object: h }),
    });
}
