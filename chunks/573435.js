n.d(t, {
    Al: () => ed,
    Ay: () => eu,
    hW: () => m,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a);
n(883392);
var s = n(398094),
    l = n(778712),
    c = n(83767);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
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

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var m = (function (e) {
    return (
        (e.SQUIRCLE = "svg-mask-squircle"),
        (e.HEADER_BAR_BADGE_TOP = "svg-mask-header-bar-badge-top"),
        (e.HEADER_BAR_BADGE_BOTTOM = "svg-mask-header-bar-badge-bottom"),
        (e.VOICE_USER_SUMMARY_ITEM = "svg-mask-voice-user-summary-item"),
        (e.VERTICAL_FADE = "svg-mask-vertical-fade"),
        (e.PANEL_BUTTON = "svg-mask-panel-button"),
        (e.CHANNEL_CALL_CONTROL_BUTTON = "svg-mask-channel-call-control-button"),
        (e.CHANNEL_CALL_CONTROL_BUTTON_BADGE_16 = "svg-mask-channel-call-control-button-badge-16"),
        (e.CHANNEL_CALL_CONTROL_BUTTON_BADGE_22 = "svg-mask-channel-call-control-button-badge-22"),
        (e.CHANNEL_CALL_CONTROL_BUTTON_BADGE_29 = "svg-mask-channel-call-control-button-badge-29"),
        (e.AVATAR_DEFAULT = "svg-mask-avatar-default"),
        (e.AVATAR_STATUS_ROUND_16 = "svg-mask-avatar-status-round-16"),
        (e.AVATAR_STATUS_ROUND_20 = "svg-mask-avatar-status-round-20"),
        (e.AVATAR_STATUS_ROUND_24 = "svg-mask-avatar-status-round-24"),
        (e.AVATAR_STATUS_ROUND_32 = "svg-mask-avatar-status-round-32"),
        (e.AVATAR_STATUS_ROUND_40 = "svg-mask-avatar-status-round-40"),
        (e.AVATAR_STATUS_ROUND_44 = "svg-mask-avatar-status-round-44"),
        (e.AVATAR_STATUS_ROUND_48 = "svg-mask-avatar-status-round-48"),
        (e.AVATAR_STATUS_ROUND_56 = "svg-mask-avatar-status-round-56"),
        (e.AVATAR_STATUS_ROUND_72 = "svg-mask-avatar-status-round-72"),
        (e.AVATAR_STATUS_ROUND_80 = "svg-mask-avatar-status-round-80"),
        (e.AVATAR_STATUS_ROUND_96 = "svg-mask-avatar-status-round-96"),
        (e.AVATAR_STATUS_ROUND_100 = "svg-mask-avatar-status-round-100"),
        (e.AVATAR_STATUS_ROUND_120 = "svg-mask-avatar-status-round-120"),
        (e.DIAGONAL_FACEPILE_16 = "svg-mask-diagonal-facepile-16"),
        (e.DIAGONAL_FACEPILE_20 = "svg-mask-diagonal-facepile-20"),
        (e.DIAGONAL_FACEPILE_24 = "svg-mask-diagonal-facepile-24"),
        (e.DIAGONAL_FACEPILE_32 = "svg-mask-diagonal-facepile-32"),
        (e.DIAGONAL_FACEPILE_40 = "svg-mask-diagonal-facepile-40"),
        (e.DIAGONAL_FACEPILE_44 = "svg-mask-diagonal-facepile-44"),
        (e.DIAGONAL_FACEPILE_48 = "svg-mask-diagonal-facepile-48"),
        (e.DIAGONAL_FACEPILE_56 = "svg-mask-diagonal-facepile-56"),
        (e.DIAGONAL_FACEPILE_72 = "svg-mask-diagonal-facepile-72"),
        (e.DIAGONAL_FACEPILE_80 = "svg-mask-diagonal-facepile-80"),
        (e.DIAGONAL_FACEPILE_96 = "svg-mask-diagonal-facepile-96"),
        (e.DIAGONAL_FACEPILE_100 = "svg-mask-diagonal-facepile-100"),
        (e.DIAGONAL_FACEPILE_120 = "svg-mask-diagonal-facepile-120"),
        (e.DIAGONAL_FACEPILE_BACK_16 = "svg-mask-diagonal-facepile-back-16"),
        (e.DIAGONAL_FACEPILE_BACK_20 = "svg-mask-diagonal-facepile-back-20"),
        (e.DIAGONAL_FACEPILE_BACK_24 = "svg-mask-diagonal-facepile-back-24"),
        (e.DIAGONAL_FACEPILE_BACK_32 = "svg-mask-diagonal-facepile-back-32"),
        (e.DIAGONAL_FACEPILE_BACK_40 = "svg-mask-diagonal-facepile-back-40"),
        (e.DIAGONAL_FACEPILE_BACK_44 = "svg-mask-diagonal-facepile-back-44"),
        (e.DIAGONAL_FACEPILE_BACK_48 = "svg-mask-diagonal-facepile-back-48"),
        (e.DIAGONAL_FACEPILE_BACK_56 = "svg-mask-diagonal-facepile-back-56"),
        (e.DIAGONAL_FACEPILE_BACK_72 = "svg-mask-diagonal-facepile-back-72"),
        (e.DIAGONAL_FACEPILE_BACK_80 = "svg-mask-diagonal-facepile-back-80"),
        (e.DIAGONAL_FACEPILE_BACK_96 = "svg-mask-diagonal-facepile-back-96"),
        (e.DIAGONAL_FACEPILE_BACK_100 = "svg-mask-diagonal-facepile-back-100"),
        (e.DIAGONAL_FACEPILE_BACK_120 = "svg-mask-diagonal-facepile-back-120"),
        (e.DIAGONAL_FACEPILE_STATUS_16 = "svg-mask-diagonal-facepile-status-16"),
        (e.DIAGONAL_FACEPILE_STATUS_20 = "svg-mask-diagonal-facepile-status-20"),
        (e.DIAGONAL_FACEPILE_STATUS_24 = "svg-mask-diagonal-facepile-status-24"),
        (e.DIAGONAL_FACEPILE_STATUS_32 = "svg-mask-diagonal-facepile-status-32"),
        (e.DIAGONAL_FACEPILE_STATUS_40 = "svg-mask-diagonal-facepile-status-40"),
        (e.DIAGONAL_FACEPILE_STATUS_44 = "svg-mask-diagonal-facepile-status-44"),
        (e.DIAGONAL_FACEPILE_STATUS_48 = "svg-mask-diagonal-facepile-status-48"),
        (e.DIAGONAL_FACEPILE_STATUS_56 = "svg-mask-diagonal-facepile-status-56"),
        (e.DIAGONAL_FACEPILE_STATUS_72 = "svg-mask-diagonal-facepile-status-72"),
        (e.DIAGONAL_FACEPILE_STATUS_80 = "svg-mask-diagonal-facepile-status-80"),
        (e.DIAGONAL_FACEPILE_STATUS_96 = "svg-mask-diagonal-facepile-status-96"),
        (e.DIAGONAL_FACEPILE_STATUS_100 = "svg-mask-diagonal-facepile-status-100"),
        (e.DIAGONAL_FACEPILE_STATUS_120 = "svg-mask-diagonal-facepile-status-120"),
        (e.DIAGONAL_FACEPILE_TYPING_16 = "svg-mask-diagonal-facepile-typing-16"),
        (e.DIAGONAL_FACEPILE_TYPING_20 = "svg-mask-diagonal-facepile-typing-20"),
        (e.DIAGONAL_FACEPILE_TYPING_24 = "svg-mask-diagonal-facepile-typing-24"),
        (e.DIAGONAL_FACEPILE_TYPING_32 = "svg-mask-diagonal-facepile-typing-32"),
        (e.DIAGONAL_FACEPILE_TYPING_40 = "svg-mask-diagonal-facepile-typing-40"),
        (e.DIAGONAL_FACEPILE_TYPING_44 = "svg-mask-diagonal-facepile-typing-44"),
        (e.DIAGONAL_FACEPILE_TYPING_48 = "svg-mask-diagonal-facepile-typing-48"),
        (e.DIAGONAL_FACEPILE_TYPING_56 = "svg-mask-diagonal-facepile-typing-56"),
        (e.DIAGONAL_FACEPILE_TYPING_72 = "svg-mask-diagonal-facepile-typing-72"),
        (e.DIAGONAL_FACEPILE_TYPING_80 = "svg-mask-diagonal-facepile-typing-80"),
        (e.DIAGONAL_FACEPILE_TYPING_96 = "svg-mask-diagonal-facepile-typing-96"),
        (e.DIAGONAL_FACEPILE_TYPING_100 = "svg-mask-diagonal-facepile-typing-100"),
        (e.DIAGONAL_FACEPILE_TYPING_120 = "svg-mask-diagonal-facepile-typing-120"),
        (e.AVATAR_STATUS_MOBILE_16 = "svg-mask-avatar-status-mobile-16"),
        (e.AVATAR_STATUS_MOBILE_20 = "svg-mask-avatar-status-mobile-20"),
        (e.AVATAR_STATUS_MOBILE_24 = "svg-mask-avatar-status-mobile-24"),
        (e.AVATAR_STATUS_MOBILE_32 = "svg-mask-avatar-status-mobile-32"),
        (e.AVATAR_STATUS_MOBILE_40 = "svg-mask-avatar-status-mobile-40"),
        (e.AVATAR_STATUS_MOBILE_44 = "svg-mask-avatar-status-mobile-44"),
        (e.AVATAR_STATUS_MOBILE_48 = "svg-mask-avatar-status-mobile-48"),
        (e.AVATAR_STATUS_MOBILE_56 = "svg-mask-avatar-status-mobile-56"),
        (e.AVATAR_STATUS_MOBILE_72 = "svg-mask-avatar-status-mobile-72"),
        (e.AVATAR_STATUS_MOBILE_80 = "svg-mask-avatar-status-mobile-80"),
        (e.AVATAR_STATUS_MOBILE_96 = "svg-mask-avatar-status-mobile-96"),
        (e.AVATAR_STATUS_MOBILE_100 = "svg-mask-avatar-status-mobile-100"),
        (e.AVATAR_STATUS_MOBILE_120 = "svg-mask-avatar-status-mobile-120"),
        (e.AVATAR_STATUS_TYPING_16 = "svg-mask-avatar-status-typing-16"),
        (e.AVATAR_STATUS_TYPING_20 = "svg-mask-avatar-status-typing-20"),
        (e.AVATAR_STATUS_TYPING_24 = "svg-mask-avatar-status-typing-24"),
        (e.AVATAR_STATUS_TYPING_32 = "svg-mask-avatar-status-typing-32"),
        (e.AVATAR_STATUS_TYPING_40 = "svg-mask-avatar-status-typing-40"),
        (e.AVATAR_STATUS_TYPING_44 = "svg-mask-avatar-status-typing-44"),
        (e.AVATAR_STATUS_TYPING_48 = "svg-mask-avatar-status-typing-48"),
        (e.AVATAR_STATUS_TYPING_56 = "svg-mask-avatar-status-typing-56"),
        (e.AVATAR_STATUS_TYPING_72 = "svg-mask-avatar-status-typing-72"),
        (e.AVATAR_STATUS_TYPING_80 = "svg-mask-avatar-status-typing-80"),
        (e.AVATAR_STATUS_TYPING_96 = "svg-mask-avatar-status-typing-96"),
        (e.AVATAR_STATUS_TYPING_100 = "svg-mask-avatar-status-typing-100"),
        (e.AVATAR_STATUS_TYPING_120 = "svg-mask-avatar-status-typing-120"),
        (e.AVATAR_DECORATION_STATUS_ROUND_16 = "svg-mask-avatar-decoration-status-round-16"),
        (e.AVATAR_DECORATION_STATUS_ROUND_20 = "svg-mask-avatar-decoration-status-round-20"),
        (e.AVATAR_DECORATION_STATUS_ROUND_24 = "svg-mask-avatar-decoration-status-round-24"),
        (e.AVATAR_DECORATION_STATUS_ROUND_32 = "svg-mask-avatar-decoration-status-round-32"),
        (e.AVATAR_DECORATION_STATUS_ROUND_40 = "svg-mask-avatar-decoration-status-round-40"),
        (e.AVATAR_DECORATION_STATUS_ROUND_44 = "svg-mask-avatar-decoration-status-round-44"),
        (e.AVATAR_DECORATION_STATUS_ROUND_48 = "svg-mask-avatar-decoration-status-round-48"),
        (e.AVATAR_DECORATION_STATUS_ROUND_56 = "svg-mask-avatar-decoration-status-round-56"),
        (e.AVATAR_DECORATION_STATUS_ROUND_72 = "svg-mask-avatar-decoration-status-round-72"),
        (e.AVATAR_DECORATION_STATUS_ROUND_80 = "svg-mask-avatar-decoration-status-round-80"),
        (e.AVATAR_DECORATION_STATUS_ROUND_96 = "svg-mask-avatar-decoration-status-round-96"),
        (e.AVATAR_DECORATION_STATUS_ROUND_120 = "svg-mask-avatar-decoration-status-round-120"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_16 = "svg-mask-avatar-decoration-status-mobile-16"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_20 = "svg-mask-avatar-decoration-status-mobile-20"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_24 = "svg-mask-avatar-decoration-status-mobile-24"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_32 = "svg-mask-avatar-decoration-status-mobile-32"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_40 = "svg-mask-avatar-decoration-status-mobile-40"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_44 = "svg-mask-avatar-decoration-status-mobile-44"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_48 = "svg-mask-avatar-decoration-status-mobile-48"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_56 = "svg-mask-avatar-decoration-status-mobile-56"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_72 = "svg-mask-avatar-decoration-status-mobile-72"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_80 = "svg-mask-avatar-decoration-status-mobile-80"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_96 = "svg-mask-avatar-decoration-status-mobile-96"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_100 = "svg-mask-avatar-decoration-status-mobile-100"),
        (e.AVATAR_DECORATION_STATUS_MOBILE_120 = "svg-mask-avatar-decoration-status-mobile-120"),
        (e.AVATAR_DECORATION_STATUS_TYPING_16 = "svg-mask-avatar-decoration-status-typing-16"),
        (e.AVATAR_DECORATION_STATUS_TYPING_20 = "svg-mask-avatar-decoration-status-typing-20"),
        (e.AVATAR_DECORATION_STATUS_TYPING_24 = "svg-mask-avatar-decoration-status-typing-24"),
        (e.AVATAR_DECORATION_STATUS_TYPING_32 = "svg-mask-avatar-decoration-status-typing-32"),
        (e.AVATAR_DECORATION_STATUS_TYPING_40 = "svg-mask-avatar-decoration-status-typing-40"),
        (e.AVATAR_DECORATION_STATUS_TYPING_44 = "svg-mask-avatar-decoration-status-typing-44"),
        (e.AVATAR_DECORATION_STATUS_TYPING_48 = "svg-mask-avatar-decoration-status-typing-48"),
        (e.AVATAR_DECORATION_STATUS_TYPING_56 = "svg-mask-avatar-decoration-status-typing-56"),
        (e.AVATAR_DECORATION_STATUS_TYPING_72 = "svg-mask-avatar-decoration-status-typing-72"),
        (e.AVATAR_DECORATION_STATUS_TYPING_80 = "svg-mask-avatar-decoration-status-typing-80"),
        (e.AVATAR_DECORATION_STATUS_TYPING_96 = "svg-mask-avatar-decoration-status-typing-96"),
        (e.AVATAR_DECORATION_STATUS_TYPING_100 = "svg-mask-avatar-decoration-status-typing-100"),
        (e.AVATAR_DECORATION_STATUS_TYPING_120 = "svg-mask-avatar-decoration-status-typing-120"),
        (e.AVATAR_VOICE_CALL_80 = "svg-mask-avatar-voice-call-80"),
        (e.AVATAR_CALL_ICON = "svg-mask-avatar-call-icon"),
        (e.AVATAR_CALL_ICON_32 = "svg-mask-avatar-call-icon-32"),
        (e.STATUS_ONLINE_MOBILE = "svg-mask-status-online-mobile"),
        (e.STATUS_ONLINE = "svg-mask-status-online"),
        (e.STATUS_IDLE = "svg-mask-status-idle"),
        (e.STATUS_DND = "svg-mask-status-dnd"),
        (e.STATUS_OFFLINE = "svg-mask-status-offline"),
        (e.STATUS_STREAMING = "svg-mask-status-streaming"),
        (e.STATUS_TYPING = "svg-mask-status-typing"),
        (e.STATUS_SCREENSHARE = "svg-mask-status-screenshare"),
        (e.STICKER_ROUNDED_RECT = "svg-mask-sticker-rounded-rect"),
        (e.STICKER_SHOP_NOTIFICATION = "svg-mask-sticker-shop-notification"),
        (e.GUILD_ICON_WITH_CHANNEL_TYPE = "svg-mask-guild-icon-with-channel-type"),
        (e.CHANNEL_ICON_WITH_GUILD_ICON = "svg-mask-channel-icon-with-guild-icon"),
        (e.GUILD_POPOUT_FACE_PILE_AVATAR = "svg-mask-guild-popout-activity-icon"),
        (e.CHAT_INPUT_BUTTON_NOTIFICATION = "svg-mask-chat-input-button-notification"),
        (e.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI = "svg-mask-autocomplete-emoji-upsell-emoji"),
        (e.EVENT_TICKET = "svg-mask-event-ticket"),
        (e.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR = "svg-mask-content-inventory-card-face-pile-avatar"),
        (e.CLAN_ICON = "svg-mask-clan-icon"),
        (e.BADGED_GUILD_ICON = "svg-mask-badged-guild-icon"),
        (e.FORWARD_ATTACHMENT_PILE_OVERFLOW = "svg-mask-forward-attachment-pile-overflow"),
        (e.GAMEPLAY_HIGH_ACTIVITY_ICON = "svg-mask-gameplay-high-activity-icon"),
        (e.CONTENT_IMAGE_60 = "svg-mask-content-image-60"),
        (e.CONTENT_IMAGE_72 = "svg-mask-content-image-72"),
        (e.CONTENT_IMAGE_100 = "svg-mask-content-image-100"),
        (e.USER_AVATAR_WITH_GAME_ICON = "svg-mask-user-avatar-with-game-icon"),
        e
    );
})({});
let g = 24;

function E(e, t) {
    return (e - 0.5) / (null != t ? t : s.Xq) + 0.5;
}

function y(e) {
    let t = 80,
        n = 0,
        i = 4,
        a = 12;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: t / 2 / t,
                cy: t / 2 / t,
                r: t / 2 / t,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: (t - a - n) / t,
                cy: (t - a - n) / t,
                r: (a + i) / t,
            }),
        ],
    });
}

function b(e, t, n) {
    let i = (0, l.Kj)(t),
        a = 80,
        o = 32 === i.size,
        s = 8 * !!o,
        c = o ? 2 : 4,
        u = o ? 24 : 12;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: a / 2 / a,
                cy: a / 2 / a,
                r: a / 2 / a,
                opacity: n,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: (a - u + s) / a,
                cy: (u - s / 2) / a,
                r: (u + c) / a,
            }),
        ],
    });
}

function O(e) {
    let t = 56,
        n = 0,
        i = 4,
        a = 10;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: t / 2 / t,
                cy: t / 2 / t,
                r: t / 2 / t,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: (t - a - n) / t,
                cy: (t - a - n) / t,
                r: (a + i) / t,
            }),
        ],
    });
}

function v(e, t) {
    let n = 56,
        i = 0,
        a = 4,
        o = 16;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: n / 2 / n,
                cy: n / 2 / n,
                r: n / 2 / n,
            }),
            (0, r.jsx)("rect", {
                fill: "black",
                x: (n - t - a - i) / n,
                y: (-a - i) / n,
                width: (t + 2 * a) / n,
                height: (o + 2 * a) / n,
                rx: (o / 2 + a) / n,
                ry: (o / 2 + a) / n,
            }),
        ],
    });
}

function A(e, t) {
    let n = 24;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: 1,
                height: 1,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: (0.75 * n) / n,
                cy: (n * t) / n,
                r: (0.25 * n) / n,
            }),
        ],
    });
}

function I(e) {
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: 1,
                height: 1,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: 0.75,
                cy: 0.75,
                r: 0.25,
            }),
        ],
    });
}

function S(e) {
    let t = 48;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                width: 1,
                height: 1,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: 58 / t,
                cy: t / 2 / t,
                r: (t / 2 + 2) / t,
            }),
        ],
    });
}

function T(e) {
    let t = e.size,
        n = e.size / 1.5,
        r = +n,
        i = n / 2 / t,
        a = (0.5 * n) / t + r / 2 / t,
        o = (3 + r / 2) / t;
    return {
        totalSize: t,
        backAvatarSize: n,
        frontAvatarSize: r,
        backAvatarCenter: i,
        frontAvatarCenter: a,
        strokeMaskRadius: o,
    };
}

function C(e) {
    let {
        totalSize: t,
        backAvatarSize: n,
        frontAvatarSize: i,
        backAvatarCenter: a,
        frontAvatarCenter: o,
        strokeMaskRadius: s,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: a,
                cy: a,
                r: n / 2 / t,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: o,
                cy: o,
                r: s,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: o,
                cy: o,
                r: i / 2 / t,
            }),
        ],
    });
}

function N(e, t) {
    let n = T((0, l.Kj)(t));
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: C(n),
    });
}

function w(e) {
    let {
        totalSize: t,
        backAvatarSize: n,
        frontAvatarSize: i,
        backAvatarCenter: a,
        frontAvatarCenter: o,
        strokeMaskRadius: s,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: a,
                cy: a,
                r: n / 2 / t,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: o,
                cy: o,
                r: s,
            }),
            (0, r.jsx)("circle", {
                fill: "white",
                cx: o,
                cy: o,
                r: i / 2 / t,
            }),
        ],
    });
}

function R(e, t) {
    let n = T((0, l.Kj)(t));
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: w(n),
    });
}

function P(e, t) {
    let n = (0, l.Kj)(t),
        i = T(n),
        a = i.totalSize,
        o = n.status / 2;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            w(i),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: (a - o - n.offset) / a,
                cy: (a - o - n.offset) / a,
                r: (o + n.stroke) / a,
            }),
        ],
    });
}

function D(e, t) {
    let n = (0, l.Kj)(t),
        i = T(n),
        a = i.totalSize,
        o = (2.5 * n.status - n.status + 2 * n.stroke) / 2,
        s = n.size - n.status - o - n.offset,
        c = n.status + 2 * n.stroke;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            w(i),
            (0, r.jsx)("rect", {
                fill: "black",
                x: s / a,
                y: (a - n.status - n.stroke - n.offset) / a,
                width: (2.5 * n.status + 2 * n.stroke) / a,
                height: c / a,
                rx: c / 2 / a,
                ry: c / 2 / a,
            }),
        ],
    });
}

function L(e) {
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("path", {
            fill: "white",
            d: "M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z",
        }),
    });
}

function x(e) {
    let t = "".concat(e, "-gradient");
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsxs)("linearGradient", {
                id: t,
                gradientTransform: "rotate(90)",
                x1: 0,
                x2: 1,
                y1: 0,
                y2: 0,
                children: [
                    (0, r.jsx)("stop", {
                        offset: "0%",
                        stopColor: "white",
                    }),
                    (0, r.jsx)("stop", {
                        offset: "100%",
                        stopColor: "black",
                    }),
                ],
            }),
            (0, r.jsx)("rect", {
                fill: "url(#".concat(t, ")"),
                x: 0,
                y: 0,
                width: 1,
                height: 1,
            }),
        ],
    });
}

function M(e) {
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("circle", {
            fill: "white",
            cx: 0.5,
            cy: 0.5,
            r: 0.5,
        }),
    });
}

function j(e, t) {
    let n = (0, l.Kj)(t),
        i = n.status / 2;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: n.size / 2 / n.size,
                cy: n.size / 2 / n.size,
                r: n.size / 2 / n.size,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: (n.size - i - n.offset) / n.size,
                cy: (n.size - i - n.offset) / n.size,
                r: (i + n.stroke) / n.size,
            }),
        ],
    });
}

function k(e, t) {
    let n = (0, l.Kj)(t),
        i = n.status / 2,
        a = (i + n.stroke) / n.size / s.Xq,
        o = E((n.size - i - n.offset) / n.size);
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: o,
                cy: o,
                r: a,
            }),
        ],
    });
}

function U(e, t) {
    let n = (0, l.Kj)(t),
        i = (2.5 * n.status - n.status + 2 * n.stroke) / 2,
        a = n.size - n.status - i - n.offset,
        o = n.status + 2 * n.stroke;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: n.size / 2 / n.size,
                cy: n.size / 2 / n.size,
                r: n.size / 2 / n.size,
            }),
            (0, r.jsx)("rect", {
                fill: "black",
                x: a / n.size,
                y: (n.size - n.status - n.stroke - n.offset) / n.size,
                width: (2.5 * n.status + 2 * n.stroke) / n.size,
                height: o / n.size,
                rx: o / 2 / n.size,
                ry: o / 2 / n.size,
            }),
        ],
    });
}

function G(e, t) {
    let n = (0, l.Kj)(t),
        i = (2.5 * n.status - n.status + 2 * n.stroke) / 2,
        a = E((n.size - n.status - n.stroke - n.offset) / n.size),
        o = E((n.size - n.status - i - n.offset) / n.size),
        c = (2.5 * n.status + 2 * n.stroke) / n.size / s.Xq,
        u = (n.status + 2 * n.stroke) / n.size / s.Xq,
        d = E(u / 2 / n.size);
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
            }),
            (0, r.jsx)("rect", {
                fill: "black",
                x: o,
                y: a,
                width: c,
                height: u,
                rx: d,
                ry: d,
            }),
        ],
    });
}

function V(e, t) {
    let n = (0, l.Kj)(t);
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: n.size / 2 / n.size,
                cy: n.size / 2 / n.size,
                r: n.size / 2 / n.size,
            }),
            (0, r.jsx)("rect", {
                fill: "black",
                x: (n.size - n.status - n.stroke - n.offset) / n.size,
                y: (n.size - n.status * l.jo - n.stroke - n.offset) / n.size,
                width: (n.status + 2 * n.stroke) / n.size,
                height: (n.status * l.jo + 2 * n.stroke) / n.size,
                rx: ((n.status * l.jo + 2 * n.stroke) * l.hn) / n.size,
                ry: ((n.status * l.jo + 2 * n.stroke) * l.hn) / n.size,
            }),
        ],
    });
}

function F(e, t) {
    let n = (0, l.Kj)(t),
        i = E((n.size - n.status - n.stroke - n.offset) / n.size),
        a = E((n.size - n.status * l.jo - n.stroke - n.offset) / n.size),
        o = (n.status + 2 * n.stroke) / n.size / s.Xq,
        c = (n.status * l.jo + 2 * n.stroke) / n.size / s.Xq;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
            }),
            (0, r.jsx)("rect", {
                fill: "black",
                x: i,
                y: a,
                width: o,
                height: c,
                rx: ((n.status * l.jo + 2 * n.stroke) * l.hn) / n.size,
                ry: ((n.status * l.jo + 2 * n.stroke) * l.hn) / n.size,
            }),
        ],
    });
}

function B(e) {
    let t = 8,
        n = 8 * l.jo;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                rx: (n * l.sf) / t,
                ry: (n * l.sf) / n,
            }),
            (0, r.jsx)("rect", {
                fill: "black",
                x: 1 / t,
                y: 2 / n,
                width: 6 / t,
                height: 6 / n,
            }),
            (0, r.jsx)("ellipse", {
                fill: "black",
                cx: t / 2 / t,
                cy: 10 / n,
                rx: 1 / t,
                ry: 1 / n,
            }),
        ],
    });
}

function H(e) {
    let t = 8;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: 2 / t,
                cy: 2 / t,
                r: 3 / t,
            }),
        ],
    });
}

function Y(e) {
    let t = 8;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t,
            }),
            (0, r.jsx)("rect", {
                fill: "black",
                x: 1 / t,
                y: 3 / t,
                width: 6 / t,
                height: 2 / t,
                rx: 1 / t,
                ry: 1 / t,
            }),
        ],
    });
}

function W(e) {
    let t = 8;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: 4 / t,
                cy: 4 / t,
                r: 2 / t,
            }),
        ],
    });
}

function K(e) {
    let t = 8;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("circle", {
                fill: "white",
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t,
            }),
            (0, r.jsx)("polygon", {
                fill: "black",
                points: ""
                    .concat(2.8 / t, ",")
                    .concat(2 / t, " ")
                    .concat(6.264102 / t, ",")
                    .concat(4 / t, " ")
                    .concat(2.8 / t, ",")
                    .concat(6 / t),
            }),
        ],
    });
}

function z(e) {
    let t = 8;
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("rect", {
            fill: "white",
            cx: 0,
            cy: 0,
            width: 1,
            height: 1,
            ry: 4 / t,
            rx: 4 / (2.5 * t),
        }),
    });
}

function q(e) {
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                width: "1",
                height: "1",
                fill: "white",
            }),
            (0, r.jsx)("path", {
                d: "M0.5 0.71875C0.5 0.649716 0.555966 0.59375 0.625 0.59375H1.0V1.0H0.5V0.71875Z",
                fill: "black",
            }),
        ],
    });
}

function Z(e) {
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("path", {
            d: "M0 0.26087C0 0.137894 0 0.0764069 0.0382035 0.0382035C0.0764069 0 0.137894 0 0.26087 0H0.73913C0.862106 0 0.923593 0 0.961797 0.0382035C1 0.0764069 1 0.137894 1 0.26087V0.73913C1 0.862106 1 0.923593 0.961797 0.961797C0.923593 1 0.862106 1 0.73913 1H0.26087C0.137894 1 0.0764069 1 0.0382035 0.961797C0 0.923593 0 0.862106 0 0.73913V0.26087Z",
            fill: "white",
        }),
    });
}

function Q(e) {
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                width: "1",
                height: "1",
                fill: "white",
            }),
            (0, r.jsx)("circle", {
                cx: "0.85",
                cy: "0.85",
                r: "0.25",
                fill: "black",
            }),
        ],
    });
}

function X(e) {
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                width: "1",
                height: "1",
                fill: "white",
            }),
            (0, r.jsx)("circle", {
                cx: "0.9",
                cy: "0.9",
                r: "0.5",
                fill: "black",
            }),
        ],
    });
}

function J(e) {
    let t = 24;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                width: 1,
                height: 1,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: 1.33,
                cy: 0.5,
                r: (t / 2 + 2) / t,
            }),
        ],
    });
}

function $(e) {
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("path", {
            d: "M0 0.12C0 0.0779961 0 0.0569941 0.00408726 0.0409507C0.00768251 0.0268386 0.0134193 0.015365 0.0204754 0.00817451C0.028497 0 0.038998 0 0.06 0H0.94C0.961002 0 0.971503 0 0.979525 0.00817451C0.986581 0.015365 0.992318 0.0268386 0.995913 0.0409507C1 0.0569941 1 0.0779961 1 0.12V0.45C0.986193 0.45 0.975 0.472386 0.975 0.5C0.975 0.527614 0.986193 0.55 1 0.55V0.88C1 0.922004 1 0.943006 0.995913 0.959049C0.992318 0.973161 0.986581 0.984635 0.979525 0.991826C0.971503 1 0.961002 1 0.94 1H0.0600001C0.0389981 1 0.028497 1 0.0204754 0.991826C0.0134193 0.984635 0.00768251 0.973161 0.00408726 0.959049C0 0.943006 0 0.922004 0 0.88V0.55C0.0138071 0.55 0.025 0.527614 0.025 0.5C0.025 0.472386 0.0138071 0.45 0 0.45V0.12Z",
            fill: "white",
        }),
    });
}

function ee(e) {
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("path", {
                fill: "white",
                d: "M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z",
            }),
            (0, r.jsx)("circle", {
                cx: "0.9",
                cy: "0.9",
                r: "0.5",
                fill: "black",
            }),
        ],
    });
}

function et(e) {
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("path", {
                fill: "white",
                d: "M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z",
            }),
            (0, r.jsx)("path", {
                fill: "black",
                d: "M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z",
                transform: "translate(0.45 0.45)",
            }),
        ],
    });
}

function en(e) {
    let t = 16;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                width: 1,
                height: 1,
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: 1.33,
                cy: 0.5,
                r: (t / 2 + 2.4) / t,
            }),
        ],
    });
}

function er(e, t, n, i) {
    let a = 4;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: (t - n / 2 + a) / t,
                cy: (t - n / 2 + a) / t,
                r: (n / 2 + i) / t,
            }),
        ],
    });
}

function ei(e) {
    let t = 24;
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                fill: "white",
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
            }),
            (0, r.jsx)("circle", {
                fill: "black",
                cx: 1.33,
                cy: 0.5,
                r: (t / 2 + 2.4) / t,
            }),
        ],
    });
}

function ea(e) {
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("rect", {
            fill: "white",
            rx: 0.3,
            ry: 0.3,
            width: 1,
            height: 1,
        }),
    });
}

function eo(e) {
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("rect", {
            fill: "white",
            rx: 0.3,
            ry: 0.3,
            width: 1,
            height: 1,
        }),
    });
}

function es(e) {
    return (0, r.jsxs)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: [
            (0, r.jsx)("rect", {
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                fill: "white",
            }),
            (0, r.jsx)("circle", {
                cx: 0.85,
                cy: 0.15,
                r: 0.25,
                fill: "black",
            }),
        ],
    });
}

function el(e) {
    return (0, r.jsx)("mask", {
        id: e,
        maskContentUnits: "objectBoundingBox",
        viewBox: "0 0 1 1",
        children: (0, r.jsx)("path", {
            d: "M0.142857 0C0.0639593 0 0 0.0639593 0 0.142857V0.857143C0 0.936041 0.0639593 1 0.142857 1H0.554564C0.520632 0.962089 0.5 0.912025 0.5 0.857143V0.714286C0.5 0.595939 0.595939 0.5 0.714286 0.5H0.857143C0.912025 0.5 0.962089 0.520632 1 0.554564V0.142857C1 0.0639593 0.936041 0 0.857143 0H0.142857Z",
            fill: "white",
        }),
    });
}

function ec(e) {
    let {
            mask: t,
            width: n = g,
            height: i = g,
            rightOverhang: a = 0,
            bottomOverhang: s = 0,
            children: l,
            className: u,
            style: f,
            "aria-label": h,
        } = e,
        m = _(e, [
            "mask",
            "width",
            "height",
            "rightOverhang",
            "bottomOverhang",
            "children",
            "className",
            "style",
            "aria-label",
        ]);
    return (0, r.jsx)(
        "svg",
        p(
            d(
                {
                    width: n + a,
                    height: i + s,
                    className: o()(c.J, u),
                    viewBox: "0 0 ".concat(n + a, " ").concat(i + s),
                    style: f,
                    "aria-label": h,
                },
                m,
            ),
            {
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: n,
                    height: i,
                    overflow: "visible",
                    mask: null != t ? "url(#".concat(t, ")") : void 0,
                    children: l,
                }),
            },
        ),
    );
}
ec.Masks = m;
let eu = ec,
    ed = i.memo(
        function () {
            return (0, r.jsxs)("svg", {
                viewBox: "0 0 1 1",
                style: {
                    position: "absolute",
                    pointerEvents: "none",
                    top: -1,
                    left: -1,
                    width: 1,
                    height: 1,
                },
                "aria-hidden": !0,
                children: [
                    L("svg-mask-squircle"),
                    A("svg-mask-header-bar-badge-top", 0.25),
                    A("svg-mask-header-bar-badge-bottom", 0.75),
                    S("svg-mask-voice-user-summary-item"),
                    x("svg-mask-vertical-fade"),
                    I("svg-mask-panel-button"),
                    O("svg-mask-channel-call-control-button"),
                    v("svg-mask-channel-call-control-button-badge-16", 16),
                    v("svg-mask-channel-call-control-button-badge-22", 22),
                    v("svg-mask-channel-call-control-button-badge-29", 29),
                    M("svg-mask-avatar-default"),
                    j("svg-mask-avatar-status-round-16", l._3.SIZE_16),
                    k("svg-mask-avatar-decoration-status-round-16", l._3.SIZE_16),
                    V("svg-mask-avatar-status-mobile-16", l._3.SIZE_16),
                    F("svg-mask-avatar-decoration-status-mobile-16", l._3.SIZE_16),
                    U("svg-mask-avatar-status-typing-16", l._3.SIZE_16),
                    G("svg-mask-avatar-decoration-status-typing-16", l._3.SIZE_16),
                    j("svg-mask-avatar-status-round-20", l._3.SIZE_20),
                    k("svg-mask-avatar-decoration-status-round-20", l._3.SIZE_20),
                    V("svg-mask-avatar-status-mobile-20", l._3.SIZE_20),
                    F("svg-mask-avatar-decoration-status-mobile-20", l._3.SIZE_20),
                    U("svg-mask-avatar-status-typing-20", l._3.SIZE_20),
                    G("svg-mask-avatar-decoration-status-typing-20", l._3.SIZE_20),
                    j("svg-mask-avatar-status-round-24", l._3.SIZE_24),
                    k("svg-mask-avatar-decoration-status-round-24", l._3.SIZE_24),
                    V("svg-mask-avatar-status-mobile-24", l._3.SIZE_24),
                    F("svg-mask-avatar-decoration-status-mobile-24", l._3.SIZE_24),
                    U("svg-mask-avatar-status-typing-24", l._3.SIZE_24),
                    G("svg-mask-avatar-decoration-status-typing-24", l._3.SIZE_24),
                    j("svg-mask-avatar-status-round-32", l._3.SIZE_32),
                    k("svg-mask-avatar-decoration-status-round-32", l._3.SIZE_32),
                    V("svg-mask-avatar-status-mobile-32", l._3.SIZE_32),
                    F("svg-mask-avatar-decoration-status-mobile-32", l._3.SIZE_32),
                    U("svg-mask-avatar-status-typing-32", l._3.SIZE_32),
                    G("svg-mask-avatar-decoration-status-typing-32", l._3.SIZE_32),
                    j("svg-mask-avatar-status-round-40", l._3.SIZE_40),
                    k("svg-mask-avatar-decoration-status-round-40", l._3.SIZE_40),
                    V("svg-mask-avatar-status-mobile-40", l._3.SIZE_40),
                    F("svg-mask-avatar-decoration-status-mobile-40", l._3.SIZE_40),
                    U("svg-mask-avatar-status-typing-40", l._3.SIZE_40),
                    G("svg-mask-avatar-decoration-status-typing-40", l._3.SIZE_40),
                    j("svg-mask-avatar-status-round-44", l._3.SIZE_44),
                    k("svg-mask-avatar-decoration-status-round-44", l._3.SIZE_44),
                    V("svg-mask-avatar-status-mobile-44", l._3.SIZE_44),
                    F("svg-mask-avatar-decoration-status-mobile-44", l._3.SIZE_44),
                    U("svg-mask-avatar-status-typing-44", l._3.SIZE_44),
                    G("svg-mask-avatar-decoration-status-typing-44", l._3.SIZE_44),
                    j("svg-mask-avatar-status-round-48", l._3.SIZE_48),
                    k("svg-mask-avatar-decoration-status-round-48", l._3.SIZE_48),
                    V("svg-mask-avatar-status-mobile-48", l._3.SIZE_48),
                    F("svg-mask-avatar-decoration-status-mobile-48", l._3.SIZE_48),
                    U("svg-mask-avatar-status-typing-48", l._3.SIZE_48),
                    G("svg-mask-avatar-decoration-status-typing-48", l._3.SIZE_48),
                    j("svg-mask-avatar-status-round-56", l._3.SIZE_56),
                    k("svg-mask-avatar-decoration-status-round-56", l._3.SIZE_56),
                    V("svg-mask-avatar-status-mobile-56", l._3.SIZE_56),
                    F("svg-mask-avatar-decoration-status-mobile-56", l._3.SIZE_56),
                    U("svg-mask-avatar-status-typing-56", l._3.SIZE_56),
                    G("svg-mask-avatar-decoration-status-typing-56", l._3.SIZE_56),
                    j("svg-mask-avatar-status-round-72", l._3.SIZE_72),
                    k("svg-mask-avatar-decoration-status-round-72", l._3.SIZE_72),
                    V("svg-mask-avatar-status-mobile-72", l._3.SIZE_72),
                    F("svg-mask-avatar-decoration-status-mobile-72", l._3.SIZE_72),
                    U("svg-mask-avatar-status-typing-72", l._3.SIZE_72),
                    G("svg-mask-avatar-decoration-status-typing-72", l._3.SIZE_72),
                    j("svg-mask-avatar-status-round-80", l._3.SIZE_80),
                    k("svg-mask-avatar-decoration-status-round-80", l._3.SIZE_80),
                    V("svg-mask-avatar-status-mobile-80", l._3.SIZE_80),
                    F("svg-mask-avatar-decoration-status-mobile-80", l._3.SIZE_80),
                    U("svg-mask-avatar-status-typing-80", l._3.SIZE_80),
                    G("svg-mask-avatar-decoration-status-typing-80", l._3.SIZE_80),
                    j("svg-mask-avatar-status-round-96", l._3.SIZE_96),
                    k("svg-mask-avatar-decoration-status-round-96", l._3.SIZE_96),
                    V("svg-mask-avatar-status-mobile-96", l._3.SIZE_96),
                    F("svg-mask-avatar-decoration-status-mobile-96", l._3.SIZE_96),
                    U("svg-mask-avatar-status-typing-96", l._3.SIZE_96),
                    G("svg-mask-avatar-decoration-status-typing-96", l._3.SIZE_96),
                    j("svg-mask-avatar-status-round-120", l._3.SIZE_120),
                    k("svg-mask-avatar-decoration-status-round-120", l._3.SIZE_120),
                    V("svg-mask-avatar-status-mobile-120", l._3.SIZE_120),
                    F("svg-mask-avatar-decoration-status-mobile-120", l._3.SIZE_120),
                    U("svg-mask-avatar-status-typing-120", l._3.SIZE_120),
                    G("svg-mask-avatar-decoration-status-typing-120", l._3.SIZE_120),
                    R("svg-mask-diagonal-facepile-16", l._3.SIZE_16),
                    N("svg-mask-diagonal-facepile-back-16", l._3.SIZE_16),
                    P("svg-mask-diagonal-facepile-status-16", l._3.SIZE_16),
                    D("svg-mask-diagonal-facepile-typing-16", l._3.SIZE_16),
                    R("svg-mask-diagonal-facepile-20", l._3.SIZE_20),
                    N("svg-mask-diagonal-facepile-back-20", l._3.SIZE_20),
                    P("svg-mask-diagonal-facepile-status-20", l._3.SIZE_20),
                    D("svg-mask-diagonal-facepile-typing-20", l._3.SIZE_20),
                    R("svg-mask-diagonal-facepile-24", l._3.SIZE_24),
                    N("svg-mask-diagonal-facepile-back-24", l._3.SIZE_24),
                    P("svg-mask-diagonal-facepile-status-24", l._3.SIZE_24),
                    D("svg-mask-diagonal-facepile-typing-24", l._3.SIZE_24),
                    R("svg-mask-diagonal-facepile-32", l._3.SIZE_32),
                    N("svg-mask-diagonal-facepile-back-32", l._3.SIZE_32),
                    P("svg-mask-diagonal-facepile-status-32", l._3.SIZE_32),
                    D("svg-mask-diagonal-facepile-typing-32", l._3.SIZE_32),
                    R("svg-mask-diagonal-facepile-40", l._3.SIZE_40),
                    N("svg-mask-diagonal-facepile-back-40", l._3.SIZE_40),
                    P("svg-mask-diagonal-facepile-status-40", l._3.SIZE_40),
                    D("svg-mask-diagonal-facepile-typing-40", l._3.SIZE_40),
                    R("svg-mask-diagonal-facepile-48", l._3.SIZE_48),
                    N("svg-mask-diagonal-facepile-back-48", l._3.SIZE_48),
                    P("svg-mask-diagonal-facepile-status-48", l._3.SIZE_48),
                    D("svg-mask-diagonal-facepile-typing-48", l._3.SIZE_48),
                    R("svg-mask-diagonal-facepile-56", l._3.SIZE_56),
                    N("svg-mask-diagonal-facepile-back-56", l._3.SIZE_56),
                    P("svg-mask-diagonal-facepile-status-56", l._3.SIZE_56),
                    D("svg-mask-diagonal-facepile-typing-56", l._3.SIZE_56),
                    R("svg-mask-diagonal-facepile-72", l._3.SIZE_72),
                    N("svg-mask-diagonal-facepile-back-72", l._3.SIZE_72),
                    P("svg-mask-diagonal-facepile-status-72", l._3.SIZE_72),
                    D("svg-mask-diagonal-facepile-typing-72", l._3.SIZE_72),
                    R("svg-mask-diagonal-facepile-80", l._3.SIZE_80),
                    N("svg-mask-diagonal-facepile-back-80", l._3.SIZE_80),
                    P("svg-mask-diagonal-facepile-status-80", l._3.SIZE_80),
                    D("svg-mask-diagonal-facepile-typing-80", l._3.SIZE_80),
                    R("svg-mask-diagonal-facepile-96", l._3.SIZE_96),
                    N("svg-mask-diagonal-facepile-back-96", l._3.SIZE_96),
                    P("svg-mask-diagonal-facepile-status-96", l._3.SIZE_96),
                    D("svg-mask-diagonal-facepile-typing-96", l._3.SIZE_96),
                    R("svg-mask-diagonal-facepile-120", l._3.SIZE_120),
                    N("svg-mask-diagonal-facepile-back-120", l._3.SIZE_120),
                    P("svg-mask-diagonal-facepile-status-120", l._3.SIZE_120),
                    D("svg-mask-diagonal-facepile-typing-120", l._3.SIZE_120),
                    B("svg-mask-status-online-mobile"),
                    M("svg-mask-status-online"),
                    H("svg-mask-status-idle"),
                    Y("svg-mask-status-dnd"),
                    W("svg-mask-status-offline"),
                    K("svg-mask-status-streaming"),
                    z("svg-mask-status-typing"),
                    q("svg-mask-status-screenshare"),
                    y("svg-mask-avatar-voice-call-80"),
                    b("svg-mask-avatar-call-icon", l._3.SIZE_56, 1),
                    b("svg-mask-avatar-call-icon-32", l._3.SIZE_32, 0.5),
                    Z("svg-mask-sticker-rounded-rect"),
                    Q("svg-mask-chat-input-button-notification"),
                    X("svg-mask-sticker-shop-notification"),
                    J("svg-mask-autocomplete-emoji-upsell-emoji"),
                    $("svg-mask-event-ticket"),
                    ee("svg-mask-guild-icon-with-channel-type"),
                    et("svg-mask-channel-icon-with-guild-icon"),
                    en("svg-mask-content-inventory-card-face-pile-avatar"),
                    ei("svg-mask-guild-popout-activity-icon"),
                    ea("svg-mask-clan-icon"),
                    es("svg-mask-badged-guild-icon"),
                    el("svg-mask-forward-attachment-pile-overflow"),
                    er("svg-mask-content-image-60", 60, 24, 2),
                    er("svg-mask-content-image-72", 72, 32, 4),
                    er("svg-mask-content-image-100", 100, 32, 4),
                    eo("svg-mask-user-avatar-with-game-icon"),
                ],
            });
        },
        () => !0,
    );
