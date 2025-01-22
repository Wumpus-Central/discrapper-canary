r.d(n, {
    Qt: function () {
        return c;
    },
    _H: function () {
        return f;
    },
    a7: function () {
        return u;
    }
});
var i,
    a = r(367907),
    o = r(373228),
    s = r(626135),
    l = r(981631);
function u(e, n, r) {
    var i, o, u;
    s.default.track(l.rMx.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, a.v_)(n),
        ...(0, a.hH)(n.guild_id),
        autocomplete_type: e,
        num_emoji_results: null !== (i = null == r ? void 0 : r.numEmojiResults) && void 0 !== i ? i : 0,
        num_locked_emoji_results: null !== (o = null == r ? void 0 : r.numLockedEmojiResults) && void 0 !== o ? o : 0,
        num_sticker_results: null !== (u = null == r ? void 0 : r.numStickerResults) && void 0 !== u ? u : 0
    });
}
function c(e, n, r, i) {
    var o, u, c, d, f;
    s.default.track(l.rMx.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, a.v_)(r),
        ...(0, a.hH)(r.guild_id),
        autocomplete_type: e,
        selection_type: n,
        emoji_id: null == i ? void 0 : i.emojiId,
        sticker_id: null == i ? void 0 : i.stickerId,
        num_emoji_results: null !== (o = null == i ? void 0 : i.numEmojiResults) && void 0 !== o ? o : 0,
        num_sticker_results: null !== (u = null == i ? void 0 : i.numStickerResults) && void 0 !== u ? u : 0,
        emoji_name: null !== (c = null == i ? void 0 : i.expressionName) && void 0 !== c ? c : '',
        is_custom: null !== (d = null == i ? void 0 : i.isCustom) && void 0 !== d && d,
        is_animated: null !== (f = null == i ? void 0 : i.isAnimated) && void 0 !== f && f
    });
}
function d(e) {
    switch (e) {
        case o.V0.AUTOCOMPLETE:
            return 'autocomplete';
        case o.V0.EXPRESSION_SUGGESTIONS:
            return 'autosuggest';
        case o.V0.STICKER_PICKER:
            return 'picker';
        case o.V0.BUILT_IN_INTEGRATION:
            return 'built_in_integration';
        default:
            return null;
    }
}
function f(e) {
    let { sticker: n, stickerSelectLocation: r, isReplacement: i, analyticsLocations: a } = e;
    s.default.track(l.rMx.STICKER_ATTACHED, {
        replaced: i,
        source: d(r),
        sticker_id: n.id,
        location_stack: a
    });
}
!(function (e) {
    (e.AUTOCOMPLETE = 'autocomplete'), (e.AUTOSUGGEST = 'autosuggest'), (e.STICKER_PICKER = 'picker'), (e.BUILT_IN_INTEGRATION = 'built_in_integration');
})(i || (i = {}));
