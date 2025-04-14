n.d(t, {
    Z: () => b,
    b: () => E
});
var r = n(192379),
    i = n(367907),
    o = n(339085),
    a = n(689789),
    s = n(407477),
    l = n(592125),
    c = n(944486),
    u = n(176354),
    d = n(304852),
    f = n(199257),
    _ = n(981631),
    p = n(185923),
    h = n(957825);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        t.current.intention === p.Hz.REACTION && b(t.current);
    }, []);
}
function b(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: m, isBurstReaction: E, analyticsObject: b } = e,
        y = l.Z.getChannel(c.Z.getChannelId()),
        v = null == y ? void 0 : y.getGuildId(),
        { canSplitFrecencyList: O } = a.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        I = (0, s.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        });
    s.Xb.trackExposure({ location: 'trackOnEmojiPickerOpened' });
    let S = (O || I) && n === p.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : o.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        T = null != y ? o.ZP.getDisambiguatedEmojiContext(y.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        N = (O || I) && n === p.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : o.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        A = S.slice(0, N),
        C = null != v ? o.ZP.getGuildEmoji(v) : [],
        R = Object.values(null != (t = o.ZP.getDisambiguatedEmojiContext(null == y ? void 0 : y.getGuildId()).groupedCustomEmojis) ? t : {}).reduce((e, t) => (e += t.length), 0),
        { topEmojis: P, newlyAddedEmojis: w } = (0, f._)({
            guildId: null == y ? void 0 : y.getGuildId(),
            pickerIntention: n
        }),
        { visibleTopEmojis: D, visibleNewlyAddedEmojis: L } = (0, d.J)({
            topEmojis: P,
            newlyAddedEmojis: w,
            rowSize: m
        });
    i.ZP.trackWithMetadata(
        n === p.Hz.REACTION ? _.rMx.REACTION_PICKER_OPENED : _.rMx.EXPRESSION_PICKER_OPENED,
        g(
            {
                width: r,
                tab: h.X1.EMOJI,
                badged: !1,
                num_expressions_favorites: T.length,
                num_animated_expressions_favorites: T.filter((e) => (null == e ? void 0 : e.animated)).length,
                num_custom_expressions_favorites: T.filter(u.ZP.isCustomEmoji).length,
                num_standard_expressions_favorites: T.filter((e) => null == e.id).length,
                num_expressions_frecent: A.length,
                num_animated_expressions_frecent: A.filter((e) => (null == e ? void 0 : e.animated)).length,
                num_custom_expressions_frecent: A.filter(u.ZP.isCustomEmoji).length,
                num_standard_expressions_frecent: A.filter((e) => null == e.id).length,
                num_current_guild_expressions: C.length,
                num_custom_expressions_total: R,
                num_expressions_top_server: D.length,
                num_animated_expressions_top_server: D.filter((e) => e.animated).length,
                num_expressions_newly_added: L.length,
                num_animated_expressions_newly_added: L.filter((e) => e.animated).length
            },
            n === p.Hz.REACTION && { is_burst: E },
            null != b && { location_object: b }
        )
    );
}
