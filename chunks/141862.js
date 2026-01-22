n.d(t, {
    A: () => g,
    y: () => m,
});
var r = n(64700),
    i = n(58149),
    a = n(508675),
    s = n(734057),
    o = n(309010),
    l = n(690521),
    c = n(818645),
    u = n(316884),
    d = n(652215),
    f = n(307731),
    p = n(698279);
function _(e, t, n) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        t.current.intention === f.b_.REACTION && g(t.current);
    }, []);
}
function g(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: _, isBurstReaction: m, analyticsObject: g } = e,
        E = s.A.getChannel(o.A.getChannelId()),
        b = null == E ? void 0 : E.getGuildId(),
        y =
            n === f.b_.REACTION
                ? a.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : a.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        O = null != E ? a.Ay.getDisambiguatedEmojiContext(E.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        A =
            n === f.b_.REACTION
                ? a.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : a.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        v = y.slice(0, A),
        S = null != b ? a.Ay.getGuildEmoji(b) : [],
        I = Object.values(
            null != (t = a.Ay.getDisambiguatedEmojiContext(null == E ? void 0 : E.getGuildId()).groupedCustomEmojis)
                ? t
                : {},
        ).reduce((e, t) => (e += t.length), 0),
        { topEmojis: T, newlyAddedEmojis: C } = (0, u.b)({
            guildId: null == E ? void 0 : E.getGuildId(),
            pickerIntention: n,
        }),
        { visibleTopEmojis: N, visibleNewlyAddedEmojis: R } = (0, c.W)({
            topEmojis: T,
            newlyAddedEmojis: C,
            rowSize: _,
        });
    i.Ay.trackWithMetadata(
        n === f.b_.REACTION ? d.HAw.REACTION_PICKER_OPENED : d.HAw.EXPRESSION_PICKER_OPENED,
        h(
            {
                width: r,
                tab: p.kx.EMOJI,
                badged: !1,
                num_expressions_favorites: O.length,
                num_animated_expressions_favorites: O.filter((e) => (null == e ? void 0 : e.animated)).length,
                num_custom_expressions_favorites: O.filter(l.Ay.isCustomEmoji).length,
                num_standard_expressions_favorites: O.filter((e) => null == e.id).length,
                num_expressions_frecent: v.length,
                num_animated_expressions_frecent: v.filter((e) => (null == e ? void 0 : e.animated)).length,
                num_custom_expressions_frecent: v.filter(l.Ay.isCustomEmoji).length,
                num_standard_expressions_frecent: v.filter((e) => null == e.id).length,
                num_current_guild_expressions: S.length,
                num_custom_expressions_total: I,
                num_expressions_top_server: N.length,
                num_animated_expressions_top_server: N.filter((e) => e.animated).length,
                num_expressions_newly_added: R.length,
                num_animated_expressions_newly_added: R.filter((e) => e.animated).length,
            },
            n === f.b_.REACTION && { is_burst: m },
            null != g && { location_object: g },
        ),
    );
}
