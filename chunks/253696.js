r.d(n, {
    Z: function () {
        return v;
    },
    b: function () {
        return E;
    }
});
var i = r(724458);
var a = r(192379),
    o = r(367907),
    s = r(339085),
    l = r(689789),
    u = r(407477),
    c = r(592125),
    d = r(944486),
    f = r(176354),
    p = r(304852),
    h = r(199257),
    _ = r(981631),
    m = r(185923),
    g = r(957825);
function E(e) {
    let n = a.useRef(e);
    a.useEffect(() => {
        if (n.current.intention === m.Hz.REACTION) v(n.current);
    }, []);
}
function v(e) {
    var n;
    let { intention: r, containerWidth: i, rowSize: a, isBurstReaction: E, analyticsObject: v } = e,
        y = c.Z.getChannel(d.Z.getChannelId()),
        b = null == y ? void 0 : y.getGuildId(),
        { canSplitFrecencyList: I } = l.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        T = (0, u.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        });
    u.Xb.trackExposure({ location: 'trackOnEmojiPickerOpened' });
    let S = (I || T) && r === m.Hz.REACTION ? s.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : s.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        A = null != y ? s.ZP.getDisambiguatedEmojiContext(y.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        C = (I || T) && r === m.Hz.REACTION ? s.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : s.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        N = S.slice(0, C),
        R = null != b ? s.ZP.getGuildEmoji(b) : [],
        O = Object.values(null !== (n = s.ZP.getDisambiguatedEmojiContext(null == y ? void 0 : y.getGuildId()).groupedCustomEmojis) && void 0 !== n ? n : {}).reduce((e, n) => (e += n.length), 0),
        { topEmojis: D, newlyAddedEmojis: x } = (0, h._)({
            guildId: null == y ? void 0 : y.getGuildId(),
            pickerIntention: r
        }),
        { visibleTopEmojis: L, visibleNewlyAddedEmojis: w } = (0, p.J)({
            topEmojis: D,
            newlyAddedEmojis: x,
            rowSize: a
        });
    o.ZP.trackWithMetadata(r === m.Hz.REACTION ? _.rMx.REACTION_PICKER_OPENED : _.rMx.EXPRESSION_PICKER_OPENED, {
        width: i,
        tab: g.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: A.length,
        num_animated_expressions_favorites: A.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_favorites: A.filter(f.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: A.filter((e) => null == e.id).length,
        num_expressions_frecent: N.length,
        num_animated_expressions_frecent: N.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_frecent: N.filter(f.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: N.filter((e) => null == e.id).length,
        num_current_guild_expressions: R.length,
        num_custom_expressions_total: O,
        num_expressions_top_server: L.length,
        num_animated_expressions_top_server: L.filter((e) => e.animated).length,
        num_expressions_newly_added: w.length,
        num_animated_expressions_newly_added: w.filter((e) => e.animated).length,
        ...(r === m.Hz.REACTION && { is_burst: E }),
        ...(null != v && { location_object: v })
    });
}
