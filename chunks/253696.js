n.d(t, {
    Z: () => v,
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
    p = n(981631),
    _ = n(185923),
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
        t.current.intention === _.Hz.REACTION && v(t.current);
    }, []);
}
function v(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: m, isBurstReaction: E, analyticsObject: v } = e,
        b = l.Z.getChannel(c.Z.getChannelId()),
        y = null == b ? void 0 : b.getGuildId(),
        { canSplitFrecencyList: O } = a.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        S = (0, s.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        });
    s.Xb.trackExposure({ location: 'trackOnEmojiPickerOpened' });
    let I = (O || S) && n === _.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : o.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        T = null != b ? o.ZP.getDisambiguatedEmojiContext(b.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        N = (O || S) && n === _.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : o.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        A = I.slice(0, N),
        C = null != y ? o.ZP.getGuildEmoji(y) : [],
        R = Object.values(null !== (t = o.ZP.getDisambiguatedEmojiContext(null == b ? void 0 : b.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => (e += t.length), 0),
        { topEmojis: P, newlyAddedEmojis: w } = (0, f._)({
            guildId: null == b ? void 0 : b.getGuildId(),
            pickerIntention: n
        }),
        { visibleTopEmojis: D, visibleNewlyAddedEmojis: x } = (0, d.J)({
            topEmojis: P,
            newlyAddedEmojis: w,
            rowSize: m
        });
    i.ZP.trackWithMetadata(
        n === _.Hz.REACTION ? p.rMx.REACTION_PICKER_OPENED : p.rMx.EXPRESSION_PICKER_OPENED,
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
                num_expressions_newly_added: x.length,
                num_animated_expressions_newly_added: x.filter((e) => e.animated).length
            },
            n === _.Hz.REACTION && { is_burst: E },
            null != v && { location_object: v }
        )
    );
}
