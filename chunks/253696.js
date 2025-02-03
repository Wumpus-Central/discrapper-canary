n.d(t, {
    Z: () => g,
    b: () => m
}),
    n(724458);
var i = n(192379),
    r = n(367907),
    a = n(339085),
    s = n(689789),
    o = n(407477),
    l = n(592125),
    u = n(944486),
    c = n(176354),
    d = n(304852),
    f = n(199257),
    _ = n(981631),
    p = n(185923),
    h = n(957825);
function m(e) {
    let t = i.useRef(e);
    i.useEffect(() => {
        t.current.intention === p.Hz.REACTION && g(t.current);
    }, []);
}
function g(e) {
    var t;
    let { intention: n, containerWidth: i, rowSize: m, isBurstReaction: g, analyticsObject: E } = e,
        v = l.Z.getChannel(u.Z.getChannelId()),
        y = null == v ? void 0 : v.getGuildId(),
        { canSplitFrecencyList: I } = s.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        b = (0, o.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        });
    o.Xb.trackExposure({ location: 'trackOnEmojiPickerOpened' });
    let T = (I || b) && n === p.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : a.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        S = null != v ? a.ZP.getDisambiguatedEmojiContext(v.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        A = (I || b) && n === p.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : a.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        N = T.slice(0, A),
        C = null != y ? a.ZP.getGuildEmoji(y) : [],
        R = Object.values(null !== (t = a.ZP.getDisambiguatedEmojiContext(null == v ? void 0 : v.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => (e += t.length), 0),
        { topEmojis: O, newlyAddedEmojis: D } = (0, f._)({
            guildId: null == v ? void 0 : v.getGuildId(),
            pickerIntention: n
        }),
        { visibleTopEmojis: x, visibleNewlyAddedEmojis: L } = (0, d.J)({
            topEmojis: O,
            newlyAddedEmojis: D,
            rowSize: m
        });
    r.ZP.trackWithMetadata(n === p.Hz.REACTION ? _.rMx.REACTION_PICKER_OPENED : _.rMx.EXPRESSION_PICKER_OPENED, {
        width: i,
        tab: h.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: S.length,
        num_animated_expressions_favorites: S.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_favorites: S.filter(c.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: S.filter((e) => null == e.id).length,
        num_expressions_frecent: N.length,
        num_animated_expressions_frecent: N.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_frecent: N.filter(c.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: N.filter((e) => null == e.id).length,
        num_current_guild_expressions: C.length,
        num_custom_expressions_total: R,
        num_expressions_top_server: x.length,
        num_animated_expressions_top_server: x.filter((e) => e.animated).length,
        num_expressions_newly_added: L.length,
        num_animated_expressions_newly_added: L.filter((e) => e.animated).length,
        ...(n === p.Hz.REACTION && { is_burst: g }),
        ...(null != E && { location_object: E })
    });
}
