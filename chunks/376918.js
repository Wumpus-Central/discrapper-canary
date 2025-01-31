n.d(t, {
    Qt: () => l,
    _H: () => c,
    a7: () => o
});
var i = n(367907),
    r = n(373228),
    a = n(626135),
    s = n(981631);
function o(e, t, n) {
    var r, o, l;
    a.default.track(s.rMx.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, i.v_)(t),
        ...(0, i.hH)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: null !== (r = null == n ? void 0 : n.numEmojiResults) && void 0 !== r ? r : 0,
        num_locked_emoji_results: null !== (o = null == n ? void 0 : n.numLockedEmojiResults) && void 0 !== o ? o : 0,
        num_sticker_results: null !== (l = null == n ? void 0 : n.numStickerResults) && void 0 !== l ? l : 0
    });
}
function l(e, t, n, r) {
    var o, l, u, c, d;
    a.default.track(s.rMx.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, i.v_)(n),
        ...(0, i.hH)(n.guild_id),
        autocomplete_type: e,
        selection_type: t,
        emoji_id: null == r ? void 0 : r.emojiId,
        sticker_id: null == r ? void 0 : r.stickerId,
        num_emoji_results: null !== (o = null == r ? void 0 : r.numEmojiResults) && void 0 !== o ? o : 0,
        num_sticker_results: null !== (l = null == r ? void 0 : r.numStickerResults) && void 0 !== l ? l : 0,
        emoji_name: null !== (u = null == r ? void 0 : r.expressionName) && void 0 !== u ? u : '',
        is_custom: null !== (c = null == r ? void 0 : r.isCustom) && void 0 !== c && c,
        is_animated: null !== (d = null == r ? void 0 : r.isAnimated) && void 0 !== d && d
    });
}
function u(e) {
    switch (e) {
        case r.V0.AUTOCOMPLETE:
            return 'autocomplete';
        case r.V0.EXPRESSION_SUGGESTIONS:
            return 'autosuggest';
        case r.V0.STICKER_PICKER:
            return 'picker';
        case r.V0.BUILT_IN_INTEGRATION:
            return 'built_in_integration';
        default:
            return null;
    }
}
function c(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: i, analyticsLocations: r } = e;
    a.default.track(s.rMx.STICKER_ATTACHED, {
        replaced: i,
        source: u(n),
        sticker_id: t.id,
        location_stack: r
    });
}
