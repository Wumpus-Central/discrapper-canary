var i = n(582128),
    s = n(149468),
    l = n(121681),
    r = n(734057),
    a = n(309010),
    o = n(690521),
    c = n(818645),
    u = n(316884),
    d = n(652215),
    m = n(307731),
    f = n(698279);
function E(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: E, analyticsObject: I } = e,
        h = r.A.getChannel(a.Ay.getChannelId()),
        g = h?.getGuildId(),
        A =
            t === m.EmojiIntention.REACTION
                ? l.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : l.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        p = null != h ? l.Ay.getDisambiguatedEmojiContext(h.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        _ =
            t === m.EmojiIntention.REACTION
                ? l.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : l.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        N = A.slice(0, _),
        C = null != g ? l.Ay.getGuildEmoji(g) : [],
        y = l.Ay.getDisambiguatedEmojiContext(h?.getGuildId()).getCustomEmoji(),
        { topEmojis: x, newlyAddedEmojis: j } = (0, u.b)({ guildId: h?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: O, visibleNewlyAddedEmojis: S } = (0, c.W)({
            topEmojis: x,
            newlyAddedEmojis: j,
            rowSize: i,
        });
    s.Ay.trackWithMetadata(
        t === m.EmojiIntention.REACTION ? d.HAw.REACTION_PICKER_OPENED : d.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: f.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: p.length,
            num_animated_expressions_favorites: p.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: p.filter(o.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: p.filter((e) => null == e.id).length,
            num_expressions_frecent: N.length,
            num_animated_expressions_frecent: N.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: N.filter(o.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: N.filter((e) => null == e.id).length,
            num_current_guild_expressions: C.length,
            num_custom_expressions_total: y.size,
            num_expressions_top_server: O.length,
            num_animated_expressions_top_server: O.filter((e) => e.animated).length,
            num_expressions_newly_added: S.length,
            num_animated_expressions_newly_added: S.filter((e) => e.animated).length,
            ...(t === m.EmojiIntention.REACTION && { is_burst: E }),
            ...(null != I && { location_object: I }),
        },
    );
}
n.d(
    t,
    {},
    {
        A: E,
        y: function (e) {
            let t = i.useRef(e);
            i.useEffect(() => {
                t.current.intention === m.EmojiIntention.REACTION && E(t.current);
            }, []);
        },
    },
);
