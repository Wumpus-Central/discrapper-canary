n.d(t, {
    So: () => f,
    fh: () => _,
    uA: () => d,
});
var r = n(58149),
    i = n(842086),
    a = n(954571),
    s = n(652215);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
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
function d(e, t, n, i) {
    var o, c, d;
    a.default.track(
        s.HAw.CHANNEL_AUTOCOMPLETE_OPEN,
        u(l({}, (0, r.dI)(t), (0, r.H$)(t.guild_id)), {
            autocomplete_type: e,
            num_emoji_results: null != (o = null == n ? void 0 : n.numEmojiResults) ? o : 0,
            num_locked_emoji_results: null != (c = null == n ? void 0 : n.numLockedEmojiResults) ? c : 0,
            num_sticker_results: null != (d = null == n ? void 0 : n.numStickerResults) ? d : 0,
            game_mentions_available: null != i && i,
        }),
    );
}
function f(e, t, n, i) {
    var o, c, d, f, p;
    a.default.track(
        s.HAw.CHANNEL_AUTOCOMPLETE_SELECTED,
        u(l({}, (0, r.dI)(n), (0, r.H$)(n.guild_id)), {
            autocomplete_type: e,
            selection_type: t,
            emoji_id: null == i ? void 0 : i.emojiId,
            sticker_id: null == i ? void 0 : i.stickerId,
            num_emoji_results: null != (o = null == i ? void 0 : i.numEmojiResults) ? o : 0,
            num_sticker_results: null != (c = null == i ? void 0 : i.numStickerResults) ? c : 0,
            emoji_name: null != (d = null == i ? void 0 : i.expressionName) ? d : "",
            is_custom: null != (f = null == i ? void 0 : i.isCustom) && f,
            is_animated: null != (p = null == i ? void 0 : i.isAnimated) && p,
            application_id: null == i ? void 0 : i.applicationId,
        }),
    );
}
function p(e) {
    switch (e) {
        case i.D6.AUTOCOMPLETE:
            return "autocomplete";
        case i.D6.STICKER_PICKER:
            return "picker";
        case i.D6.BUILT_IN_INTEGRATION:
            return "built_in_integration";
        default:
            return null;
    }
}
function _(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: r, analyticsLocations: i } = e;
    a.default.track(s.HAw.STICKER_ATTACHED, {
        replaced: r,
        source: p(n),
        sticker_id: t.id,
        location_stack: i,
    });
}
