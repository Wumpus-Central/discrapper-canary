n.d(t, {
    Z: () => g,
    b: () => m,
});
var r = n(473749),
    i = n(367907),
    a = n(339085),
    o = n(592125),
    s = n(944486),
    l = n(176354),
    c = n(304852),
    u = n(199257),
    d = n(981631),
    f = n(185923),
    _ = n(957825);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        t.current.intention === f.Hz.REACTION && g(t.current);
    }, []);
}
function g(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: p, isBurstReaction: m, analyticsObject: g } = e,
        E = o.Z.getChannel(s.Z.getChannelId()),
        b = null == E ? void 0 : E.getGuildId(),
        y =
            n === f.Hz.REACTION
                ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : a.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        O = null != E ? a.ZP.getDisambiguatedEmojiContext(E.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        v =
            n === f.Hz.REACTION
                ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : a.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        I = y.slice(0, v),
        T = null != b ? a.ZP.getGuildEmoji(b) : [],
        S = Object.values(
            null != (t = a.ZP.getDisambiguatedEmojiContext(null == E ? void 0 : E.getGuildId()).groupedCustomEmojis)
                ? t
                : {},
        ).reduce((e, t) => (e += t.length), 0),
        { topEmojis: A, newlyAddedEmojis: C } = (0, u._)({
            guildId: null == E ? void 0 : E.getGuildId(),
            pickerIntention: n,
        }),
        { visibleTopEmojis: N, visibleNewlyAddedEmojis: R } = (0, c.J)({
            topEmojis: A,
            newlyAddedEmojis: C,
            rowSize: p,
        });
    i.ZP.trackWithMetadata(
        n === f.Hz.REACTION ? d.rMx.REACTION_PICKER_OPENED : d.rMx.EXPRESSION_PICKER_OPENED,
        h(
            {
                width: r,
                tab: _.X1.EMOJI,
                badged: !1,
                num_expressions_favorites: O.length,
                num_animated_expressions_favorites: O.filter((e) => (null == e ? void 0 : e.animated)).length,
                num_custom_expressions_favorites: O.filter(l.ZP.isCustomEmoji).length,
                num_standard_expressions_favorites: O.filter((e) => null == e.id).length,
                num_expressions_frecent: I.length,
                num_animated_expressions_frecent: I.filter((e) => (null == e ? void 0 : e.animated)).length,
                num_custom_expressions_frecent: I.filter(l.ZP.isCustomEmoji).length,
                num_standard_expressions_frecent: I.filter((e) => null == e.id).length,
                num_current_guild_expressions: T.length,
                num_custom_expressions_total: S,
                num_expressions_top_server: N.length,
                num_animated_expressions_top_server: N.filter((e) => e.animated).length,
                num_expressions_newly_added: R.length,
                num_animated_expressions_newly_added: R.filter((e) => e.animated).length,
            },
            n === f.Hz.REACTION && { is_burst: m },
            null != g && { location_object: g },
        ),
    );
}
