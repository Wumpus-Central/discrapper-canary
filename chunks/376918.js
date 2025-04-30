n.d(t, {
    Qt: () => f,
    _H: () => p,
    a7: () => d
});
var r = n(367907),
    i = n(373228),
    o = n(626135),
    a = n(981631);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t, n) {
    var i, s, c;
    o.default.track(
        a.rMx.CHANNEL_AUTOCOMPLETE_OPEN,
        u(l({}, (0, r.v_)(t), (0, r.hH)(t.guild_id)), {
            autocomplete_type: e,
            num_emoji_results: null != (i = null == n ? void 0 : n.numEmojiResults) ? i : 0,
            num_locked_emoji_results: null != (s = null == n ? void 0 : n.numLockedEmojiResults) ? s : 0,
            num_sticker_results: null != (c = null == n ? void 0 : n.numStickerResults) ? c : 0
        })
    );
}
function f(e, t, n, i) {
    var s, c, d, f, _;
    o.default.track(
        a.rMx.CHANNEL_AUTOCOMPLETE_SELECTED,
        u(l({}, (0, r.v_)(n), (0, r.hH)(n.guild_id)), {
            autocomplete_type: e,
            selection_type: t,
            emoji_id: null == i ? void 0 : i.emojiId,
            sticker_id: null == i ? void 0 : i.stickerId,
            num_emoji_results: null != (s = null == i ? void 0 : i.numEmojiResults) ? s : 0,
            num_sticker_results: null != (c = null == i ? void 0 : i.numStickerResults) ? c : 0,
            emoji_name: null != (d = null == i ? void 0 : i.expressionName) ? d : '',
            is_custom: null != (f = null == i ? void 0 : i.isCustom) && f,
            is_animated: null != (_ = null == i ? void 0 : i.isAnimated) && _
        })
    );
}
function _(e) {
    switch (e) {
        case i.V0.AUTOCOMPLETE:
            return 'autocomplete';
        case i.V0.EXPRESSION_SUGGESTIONS:
            return 'autosuggest';
        case i.V0.STICKER_PICKER:
            return 'picker';
        case i.V0.BUILT_IN_INTEGRATION:
            return 'built_in_integration';
        default:
            return null;
    }
}
function p(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: r, analyticsLocations: i } = e;
    o.default.track(a.rMx.STICKER_ATTACHED, {
        replaced: r,
        source: _(n),
        sticker_id: t.id,
        location_stack: i
    });
}
