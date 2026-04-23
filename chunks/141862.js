"use strict";
n.d(t, { A: () => h, y: () => p });
var r = n(64700),
    i = n(58149),
    s = n(508675),
    a = n(734057),
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
        t.current.intention === _.EmojiIntention.REACTION && h(t.current);
    }, []);
}
function h(e) {
    let { intention: t, containerWidth: n, rowSize: r, isBurstReaction: p, analyticsObject: h } = e,
        E = a.A.getChannel(o.A.getChannelId()),
        m = E?.getGuildId(),
        g =
            t === _.EmojiIntention.REACTION
                ? s.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : s.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        A = null != E ? s.Ay.getDisambiguatedEmojiContext(E.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        I =
            t === _.EmojiIntention.REACTION
                ? s.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : s.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        T = g.slice(0, I),
        S = null != m ? s.Ay.getGuildEmoji(m) : [],
        y = s.Ay.getDisambiguatedEmojiContext(E?.getGuildId()).getCustomEmoji(),
        { topEmojis: N, newlyAddedEmojis: v } = (0, c.b)({ guildId: E?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: C, visibleNewlyAddedEmojis: O } = (0, u.W)({
            topEmojis: N,
            newlyAddedEmojis: v,
            rowSize: r,
        });
    i.Ay.trackWithMetadata(
        t === _.EmojiIntention.REACTION ? d.HAw.REACTION_PICKER_OPENED : d.HAw.EXPRESSION_PICKER_OPENED,
        {
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
            num_current_guild_expressions: S.length,
            num_custom_expressions_total: y.size,
            num_expressions_top_server: C.length,
            num_animated_expressions_top_server: C.filter((e) => e.animated).length,
            num_expressions_newly_added: O.length,
            num_animated_expressions_newly_added: O.filter((e) => e.animated).length,
            ...(t === _.EmojiIntention.REACTION && { is_burst: p }),
            ...(null != h && { location_object: h }),
        },
    );
}
