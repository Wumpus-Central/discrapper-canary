n.d(t, {
    Co: () => el,
    QS: () => g,
    ZP: () => es
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(182294),
    l = n(3682),
    c = n(419061),
    u = n(312267);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var g = (function (e) {
    return (
        (e.SQUIRCLE = 'svg-mask-squircle'),
        (e.HEADER_BAR_BADGE_TOP = 'svg-mask-header-bar-badge-top'),
        (e.HEADER_BAR_BADGE_BOTTOM = 'svg-mask-header-bar-badge-bottom'),
        (e.VOICE_USER_SUMMARY_ITEM = 'svg-mask-voice-user-summary-item'),
        (e.VERTICAL_FADE = 'svg-mask-vertical-fade'),
        (e.PANEL_BUTTON = 'svg-mask-panel-button'),
        (e.CHANNEL_CALL_CONTROL_BUTTON = 'svg-mask-channel-call-control-button'),
        (e.CHANNEL_CALL_CONTROL_BUTTON_BADGE_16 = 'svg-mask-channel-call-control-button-badge-16'),
        (e.CHANNEL_CALL_CONTROL_BUTTON_BADGE_22 = 'svg-mask-channel-call-control-button-badge-22'),
        (e.CHANNEL_CALL_CONTROL_BUTTON_BADGE_29 = 'svg-mask-channel-call-control-button-badge-29'),
        (e.AVATAR_DEFAULT = 'svg-mask-avatar-default'),
        (e.AVATAR_STATUS_ROUND_16 = 'svg-mask-avatar-status-round-16'),
        (e.AVATAR_STATUS_ROUND_20 = 'svg-mask-avatar-status-round-20'),
        (e.AVATAR_STATUS_ROUND_24 = 'svg-mask-avatar-status-round-24'),
        (e.AVATAR_STATUS_ROUND_32 = 'svg-mask-avatar-status-round-32'),
        (e.AVATAR_STATUS_ROUND_40 = 'svg-mask-avatar-status-round-40'),
        (e.AVATAR_STATUS_ROUND_44 = 'svg-mask-avatar-status-round-44'),
        (e.AVATAR_STATUS_ROUND_48 = 'svg-mask-avatar-status-round-48'),
        (e.AVATAR_STATUS_ROUND_56 = 'svg-mask-avatar-status-round-56'),
        (e.AVATAR_STATUS_ROUND_80 = 'svg-mask-avatar-status-round-80'),
        (e.AVATAR_STATUS_ROUND_100 = 'svg-mask-avatar-status-round-100'),
        (e.AVATAR_STATUS_ROUND_120 = 'svg-mask-avatar-status-round-120'),
        (e.DIAGONAL_FACEPILE_16 = 'svg-mask-diagonal-facepile-16'),
        (e.DIAGONAL_FACEPILE_20 = 'svg-mask-diagonal-facepile-20'),
        (e.DIAGONAL_FACEPILE_24 = 'svg-mask-diagonal-facepile-24'),
        (e.DIAGONAL_FACEPILE_32 = 'svg-mask-diagonal-facepile-32'),
        (e.DIAGONAL_FACEPILE_40 = 'svg-mask-diagonal-facepile-40'),
        (e.DIAGONAL_FACEPILE_44 = 'svg-mask-diagonal-facepile-44'),
        (e.DIAGONAL_FACEPILE_48 = 'svg-mask-diagonal-facepile-48'),
        (e.DIAGONAL_FACEPILE_56 = 'svg-mask-diagonal-facepile-56'),
        (e.DIAGONAL_FACEPILE_80 = 'svg-mask-diagonal-facepile-80'),
        (e.DIAGONAL_FACEPILE_100 = 'svg-mask-diagonal-facepile-100'),
        (e.DIAGONAL_FACEPILE_120 = 'svg-mask-diagonal-facepile-120'),
        (e.DIAGONAL_FACEPILE_STATUS_16 = 'svg-mask-diagonal-facepile-status-16'),
        (e.DIAGONAL_FACEPILE_STATUS_20 = 'svg-mask-diagonal-facepile-status-20'),
        (e.DIAGONAL_FACEPILE_STATUS_24 = 'svg-mask-diagonal-facepile-status-24'),
        (e.DIAGONAL_FACEPILE_STATUS_32 = 'svg-mask-diagonal-facepile-status-32'),
        (e.DIAGONAL_FACEPILE_STATUS_40 = 'svg-mask-diagonal-facepile-status-40'),
        (e.DIAGONAL_FACEPILE_STATUS_44 = 'svg-mask-diagonal-facepile-status-44'),
        (e.DIAGONAL_FACEPILE_STATUS_48 = 'svg-mask-diagonal-facepile-status-48'),
        (e.DIAGONAL_FACEPILE_STATUS_56 = 'svg-mask-diagonal-facepile-status-56'),
        (e.DIAGONAL_FACEPILE_STATUS_80 = 'svg-mask-diagonal-facepile-status-80'),
        (e.DIAGONAL_FACEPILE_STATUS_100 = 'svg-mask-diagonal-facepile-status-100'),
        (e.DIAGONAL_FACEPILE_STATUS_120 = 'svg-mask-diagonal-facepile-status-120'),
        (e.DIAGONAL_FACEPILE_TYPING_16 = 'svg-mask-diagonal-facepile-typing-16'),
        (e.DIAGONAL_FACEPILE_TYPING_20 = 'svg-mask-diagonal-facepile-typing-20'),
        (e.DIAGONAL_FACEPILE_TYPING_24 = 'svg-mask-diagonal-facepile-typing-24'),
        (e.DIAGONAL_FACEPILE_TYPING_32 = 'svg-mask-diagonal-facepile-typing-32'),
        (e.DIAGONAL_FACEPILE_TYPING_40 = 'svg-mask-diagonal-facepile-typing-40'),
        (e.DIAGONAL_FACEPILE_TYPING_44 = 'svg-mask-diagonal-facepile-typing-44'),
        (e.DIAGONAL_FACEPILE_TYPING_48 = 'svg-mask-diagonal-facepile-typing-48'),
        (e.DIAGONAL_FACEPILE_TYPING_56 = 'svg-mask-diagonal-facepile-typing-56'),
        (e.DIAGONAL_FACEPILE_TYPING_80 = 'svg-mask-diagonal-facepile-typing-80'),
        (e.DIAGONAL_FACEPILE_TYPING_100 = 'svg-mask-diagonal-facepile-typing-100'),
        (e.DIAGONAL_FACEPILE_TYPING_120 = 'svg-mask-diagonal-facepile-typing-120'),
        (e.AVATAR_STATUS_MOBILE_16 = 'svg-mask-avatar-status-mobile-16'),
        (e.AVATAR_STATUS_MOBILE_20 = 'svg-mask-avatar-status-mobile-20'),
        (e.AVATAR_STATUS_MOBILE_24 = 'svg-mask-avatar-status-mobile-24'),
        (e.AVATAR_STATUS_MOBILE_32 = 'svg-mask-avatar-status-mobile-32'),
        (e.AVATAR_STATUS_MOBILE_40 = 'svg-mask-avatar-status-mobile-40'),
        (e.AVATAR_STATUS_MOBILE_44 = 'svg-mask-avatar-status-mobile-44'),
        (e.AVATAR_STATUS_MOBILE_48 = 'svg-mask-avatar-status-mobile-48'),
        (e.AVATAR_STATUS_MOBILE_56 = 'svg-mask-avatar-status-mobile-56'),
        (e.AVATAR_STATUS_MOBILE_80 = 'svg-mask-avatar-status-mobile-80'),
        (e.AVATAR_STATUS_MOBILE_100 = 'svg-mask-avatar-status-mobile-100'),
        (e.AVATAR_STATUS_MOBILE_120 = 'svg-mask-avatar-status-mobile-120'),
        (e.AVATAR_STATUS_TYPING_16 = 'svg-mask-avatar-status-typing-16'),
        (e.AVATAR_STATUS_TYPING_20 = 'svg-mask-avatar-status-typing-20'),
        (e.AVATAR_STATUS_TYPING_24 = 'svg-mask-avatar-status-typing-24'),
        (e.AVATAR_STATUS_TYPING_32 = 'svg-mask-avatar-status-typing-32'),
        (e.AVATAR_STATUS_TYPING_40 = 'svg-mask-avatar-status-typing-40'),
        (e.AVATAR_STATUS_TYPING_44 = 'svg-mask-avatar-status-typing-44'),
        (e.AVATAR_STATUS_TYPING_48 = 'svg-mask-avatar-status-typing-48'),
        (e.AVATAR_STATUS_TYPING_56 = 'svg-mask-avatar-status-typing-56'),
        (e.AVATAR_STATUS_TYPING_80 = 'svg-mask-avatar-status-typing-80'),
        (e.AVATAR_STATUS_TYPING_100 = 'svg-mask-avatar-status-typing-100'),
        (e.AVATAR_STATUS_TYPING_120 = 'svg-mask-avatar-status-typing-120'),
        (e.AVATAR_DECORATION_STATUS_ROUND_16 = 'svg-mask-avatar-decoration-status-round-16'),
        (e.AVATAR_DECORATION_STATUS_ROUND_20 = 'svg-mask-avatar-decoration-status-round-20'),
        (e.AVATAR_DECORATION_STATUS_ROUND_24 = 'svg-mask-avatar-decoration-status-round-24'),
        (e.AVATAR_DECORATION_STATUS_ROUND_32 = 'svg-mask-avatar-decoration-status-round-32'),
        (e.AVATAR_DECORATION_STATUS_ROUND_40 = 'svg-mask-avatar-decoration-status-round-40'),
        (e.AVATAR_DECORATION_STATUS_ROUND_44 = 'svg-mask-avatar-decoration-status-round-44'),
        (e.AVATAR_DECORATION_STATUS_ROUND_48 = 'svg-mask-avatar-decoration-status-round-48'),
        (e.AVATAR_DECORATION_STATUS_ROUND_56 = 'svg-mask-avatar-decoration-status-round-56'),
        (e.AVATAR_DECORATION_STATUS_ROUND_80 = 'svg-mask-avatar-decoration-status-round-80'),
        (e.AVATAR_DECORATION_STATUS_ROUND_120 = 'svg-mask-avatar-decoration-status-round-120'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_16 = 'svg-mask-avatar-decoration-status-mobile-16'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_20 = 'svg-mask-avatar-decoration-status-mobile-20'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_24 = 'svg-mask-avatar-decoration-status-mobile-24'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_32 = 'svg-mask-avatar-decoration-status-mobile-32'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_40 = 'svg-mask-avatar-decoration-status-mobile-40'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_44 = 'svg-mask-avatar-decoration-status-mobile-44'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_48 = 'svg-mask-avatar-decoration-status-mobile-48'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_56 = 'svg-mask-avatar-decoration-status-mobile-56'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_80 = 'svg-mask-avatar-decoration-status-mobile-80'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_100 = 'svg-mask-avatar-decoration-status-mobile-100'),
        (e.AVATAR_DECORATION_STATUS_MOBILE_120 = 'svg-mask-avatar-decoration-status-mobile-120'),
        (e.AVATAR_DECORATION_STATUS_TYPING_16 = 'svg-mask-avatar-decoration-status-typing-16'),
        (e.AVATAR_DECORATION_STATUS_TYPING_20 = 'svg-mask-avatar-decoration-status-typing-20'),
        (e.AVATAR_DECORATION_STATUS_TYPING_24 = 'svg-mask-avatar-decoration-status-typing-24'),
        (e.AVATAR_DECORATION_STATUS_TYPING_32 = 'svg-mask-avatar-decoration-status-typing-32'),
        (e.AVATAR_DECORATION_STATUS_TYPING_40 = 'svg-mask-avatar-decoration-status-typing-40'),
        (e.AVATAR_DECORATION_STATUS_TYPING_44 = 'svg-mask-avatar-decoration-status-typing-44'),
        (e.AVATAR_DECORATION_STATUS_TYPING_48 = 'svg-mask-avatar-decoration-status-typing-48'),
        (e.AVATAR_DECORATION_STATUS_TYPING_56 = 'svg-mask-avatar-decoration-status-typing-56'),
        (e.AVATAR_DECORATION_STATUS_TYPING_80 = 'svg-mask-avatar-decoration-status-typing-80'),
        (e.AVATAR_DECORATION_STATUS_TYPING_100 = 'svg-mask-avatar-decoration-status-typing-100'),
        (e.AVATAR_DECORATION_STATUS_TYPING_120 = 'svg-mask-avatar-decoration-status-typing-120'),
        (e.AVATAR_VOICE_CALL_80 = 'svg-mask-avatar-voice-call-80'),
        (e.AVATAR_CALL_ICON = 'svg-mask-avatar-call-icon'),
        (e.AVATAR_CALL_ICON_32 = 'svg-mask-avatar-call-icon-32'),
        (e.STATUS_ONLINE_MOBILE = 'svg-mask-status-online-mobile'),
        (e.STATUS_ONLINE = 'svg-mask-status-online'),
        (e.STATUS_IDLE = 'svg-mask-status-idle'),
        (e.STATUS_DND = 'svg-mask-status-dnd'),
        (e.STATUS_OFFLINE = 'svg-mask-status-offline'),
        (e.STATUS_STREAMING = 'svg-mask-status-streaming'),
        (e.STATUS_TYPING = 'svg-mask-status-typing'),
        (e.STATUS_SCREENSHARE = 'svg-mask-status-screenshare'),
        (e.STICKER_ROUNDED_RECT = 'svg-mask-sticker-rounded-rect'),
        (e.STICKER_SHOP_NOTIFICATION = 'svg-mask-sticker-shop-notification'),
        (e.GUILD_ICON_WITH_CHANNEL_TYPE = 'svg-mask-guild-icon-with-channel-type'),
        (e.GUILD_POPOUT_FACE_PILE_AVATAR = 'svg-mask-guild-popout-activity-icon'),
        (e.CHAT_INPUT_BUTTON_NOTIFICATION = 'svg-mask-chat-input-button-notification'),
        (e.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI = 'svg-mask-autocomplete-emoji-upsell-emoji'),
        (e.EVENT_TICKET = 'svg-mask-event-ticket'),
        (e.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR = 'svg-mask-content-inventory-card-face-pile-avatar'),
        (e.CLAN_ICON = 'svg-mask-clan-icon'),
        (e.BADGED_GUILD_ICON = 'svg-mask-badged-guild-icon'),
        (e.FORWARD_ATTACHMENT_PILE_OVERFLOW = 'svg-mask-forward-attachment-pile-overflow'),
        (e.GAMEPLAY_HIGH_ACTIVITY_ICON = 'svg-mask-gameplay-high-activity-icon'),
        (e.CONTENT_IMAGE_60 = 'svg-mask-content-image-60'),
        (e.CONTENT_IMAGE_72 = 'svg-mask-content-image-72'),
        e
    );
})({});
let E = 24;
function b(e, t) {
    return (e - 0.5) / (null != t ? t : c.hs) + 0.5;
}
function y(e) {
    let t = 80,
        n = 0,
        i = 4,
        o = 12;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: t / 2 / t,
                cy: t / 2 / t,
                r: t / 2 / t
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: (t - o - n) / t,
                cy: (t - o - n) / t,
                r: (o + i) / t
            })
        ]
    });
}
function v(e, t, n) {
    let i = (0, s.UC)(t),
        o = 80,
        a = 32 === i.size,
        l = 8 * !!a,
        c = a ? 2 : 4,
        u = a ? 24 : 12;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: o / 2 / o,
                cy: o / 2 / o,
                r: o / 2 / o,
                opacity: n
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: (o - u + l) / o,
                cy: (u - l / 2) / o,
                r: (u + c) / o
            })
        ]
    });
}
function O(e) {
    let t = 56,
        n = 0,
        i = 4,
        o = 10;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: t / 2 / t,
                cy: t / 2 / t,
                r: t / 2 / t
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: (t - o - n) / t,
                cy: (t - o - n) / t,
                r: (o + i) / t
            })
        ]
    });
}
function I(e, t) {
    let n = 56,
        i = 0,
        o = 4,
        a = 16;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: n / 2 / n,
                cy: n / 2 / n,
                r: n / 2 / n
            }),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: (n - t - o - i) / n,
                y: (-o - i) / n,
                width: (t + 2 * o) / n,
                height: (a + 2 * o) / n,
                rx: (a / 2 + o) / n,
                ry: (a / 2 + o) / n
            })
        ]
    });
}
function S(e, t) {
    let n = 24;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: 1,
                height: 1
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: (0.75 * n) / n,
                cy: (n * t) / n,
                r: (0.25 * n) / n
            })
        ]
    });
}
function T(e) {
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: 1,
                height: 1
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: 0.75,
                cy: 0.75,
                r: 0.25
            })
        ]
    });
}
function N(e) {
    let t = 48;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                width: 1,
                height: 1
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: 58 / t,
                cy: t / 2 / t,
                r: (t / 2 + 2) / t
            })
        ]
    });
}
function A(e) {
    let t = e.size,
        n = e.size / (l.z3 + l.o),
        r = n * l.z3,
        i = n / 2 / t,
        o = (l.o * n) / t + r / 2 / t,
        a = (l.$V + r / 2) / t;
    return {
        totalSize: t,
        backAvatarSize: n,
        frontAvatarSize: r,
        backAvatarCenter: i,
        frontAvatarCenter: o,
        strokeMaskRadius: a
    };
}
function C(e) {
    let { totalSize: t, backAvatarSize: n, frontAvatarSize: i, backAvatarCenter: o, frontAvatarCenter: a, strokeMaskRadius: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: o,
                cy: o,
                r: n / 2 / t
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: a,
                cy: a,
                r: s
            }),
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: a,
                cy: a,
                r: i / 2 / t
            })
        ]
    });
}
function R(e, t) {
    let n = A((0, s.UC)(t));
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: C(n)
    });
}
function P(e, t) {
    let n = (0, s.UC)(t),
        i = A(n),
        o = i.totalSize,
        a = n.status / 2;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            C(i),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: (o - a - n.offset) / o,
                cy: (o - a - n.offset) / o,
                r: (a + n.stroke) / o
            })
        ]
    });
}
function w(e, t) {
    let n = (0, s.UC)(t),
        i = A(n),
        o = i.totalSize,
        a = (2.5 * n.status - n.status + 2 * n.stroke) / 2,
        c = n.size - n.status - a - n.offset,
        u = n.status + 2 * n.stroke;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            C(i),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: c / o,
                y: (o - n.status - n.stroke - n.offset) / o,
                width: (n.status * l.jR + 2 * n.stroke) / o,
                height: u / o,
                rx: u / 2 / o,
                ry: u / 2 / o
            })
        ]
    });
}
function D(e) {
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: (0, r.jsx)('path', {
            fill: 'white',
            d: 'M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z'
        })
    });
}
function L(e) {
    let t = ''.concat(e, '-gradient');
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsxs)('linearGradient', {
                id: t,
                gradientTransform: 'rotate(90)',
                x1: 0,
                x2: 1,
                y1: 0,
                y2: 0,
                children: [
                    (0, r.jsx)('stop', {
                        offset: '0%',
                        stopColor: 'white'
                    }),
                    (0, r.jsx)('stop', {
                        offset: '100%',
                        stopColor: 'black'
                    })
                ]
            }),
            (0, r.jsx)('rect', {
                fill: 'url(#'.concat(t, ')'),
                x: 0,
                y: 0,
                width: 1,
                height: 1
            })
        ]
    });
}
function x(e) {
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: (0, r.jsx)('circle', {
            fill: 'white',
            cx: 0.5,
            cy: 0.5,
            r: 0.5
        })
    });
}
function M(e, t) {
    let n = (0, s.UC)(t),
        i = n.status / 2;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: n.size / 2 / n.size,
                cy: n.size / 2 / n.size,
                r: n.size / 2 / n.size
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: (n.size - i - n.offset) / n.size,
                cy: (n.size - i - n.offset) / n.size,
                r: (i + n.stroke) / n.size
            })
        ]
    });
}
function k(e, t) {
    let n = (0, s.UC)(t),
        i = n.status / 2,
        o = (i + n.stroke) / n.size / c.hs,
        a = b((n.size - i - n.offset) / n.size);
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: '100%',
                height: '100%'
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: a,
                cy: a,
                r: o
            })
        ]
    });
}
function j(e, t) {
    let n = (0, s.UC)(t),
        i = (2.5 * n.status - n.status + 2 * n.stroke) / 2,
        o = n.size - n.status - i - n.offset,
        a = n.status + 2 * n.stroke;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: n.size / 2 / n.size,
                cy: n.size / 2 / n.size,
                r: n.size / 2 / n.size
            }),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: o / n.size,
                y: (n.size - n.status - n.stroke - n.offset) / n.size,
                width: (2.5 * n.status + 2 * n.stroke) / n.size,
                height: a / n.size,
                rx: a / 2 / n.size,
                ry: a / 2 / n.size
            })
        ]
    });
}
function U(e, t) {
    let n = (0, s.UC)(t),
        i = (2.5 * n.status - n.status + 2 * n.stroke) / 2,
        o = b((n.size - n.status - n.stroke - n.offset) / n.size),
        a = b((n.size - n.status - i - n.offset) / n.size),
        l = (2.5 * n.status + 2 * n.stroke) / n.size / c.hs,
        u = (n.status + 2 * n.stroke) / n.size / c.hs,
        d = b(u / 2 / n.size);
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: '100%',
                height: '100%'
            }),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: a,
                y: o,
                width: l,
                height: u,
                rx: d,
                ry: d
            })
        ]
    });
}
function G(e, t) {
    let n = (0, s.UC)(t);
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: n.size / 2 / n.size,
                cy: n.size / 2 / n.size,
                r: n.size / 2 / n.size
            }),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: (n.size - n.status - n.stroke - n.offset) / n.size,
                y: (n.size - n.status * s.EW - n.stroke - n.offset) / n.size,
                width: (n.status + 2 * n.stroke) / n.size,
                height: (n.status * s.EW + 2 * n.stroke) / n.size,
                rx: ((n.status * s.EW + 2 * n.stroke) * s.ZC) / n.size,
                ry: ((n.status * s.EW + 2 * n.stroke) * s.ZC) / n.size
            })
        ]
    });
}
function B(e, t) {
    let n = (0, s.UC)(t),
        i = b((n.size - n.status - n.stroke - n.offset) / n.size),
        o = b((n.size - n.status * s.EW - n.stroke - n.offset) / n.size),
        a = (n.status + 2 * n.stroke) / n.size / c.hs,
        l = (n.status * s.EW + 2 * n.stroke) / n.size / c.hs;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: '100%',
                height: '100%'
            }),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: i,
                y: o,
                width: a,
                height: l,
                rx: ((n.status * s.EW + 2 * n.stroke) * s.ZC) / n.size,
                ry: ((n.status * s.EW + 2 * n.stroke) * s.ZC) / n.size
            })
        ]
    });
}
function F(e) {
    let t = 8,
        n = 8 * s.EW;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                rx: (n * s.e7) / t,
                ry: (n * s.e7) / n
            }),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: 1 / t,
                y: 2 / n,
                width: 6 / t,
                height: 6 / n
            }),
            (0, r.jsx)('ellipse', {
                fill: 'black',
                cx: t / 2 / t,
                cy: 10 / n,
                rx: 1 / t,
                ry: 1 / n
            })
        ]
    });
}
function V(e) {
    let t = 8;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: 2 / t,
                cy: 2 / t,
                r: 3 / t
            })
        ]
    });
}
function Z(e) {
    let t = 8;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t
            }),
            (0, r.jsx)('rect', {
                fill: 'black',
                x: 1 / t,
                y: 3 / t,
                width: 6 / t,
                height: 2 / t,
                rx: 1 / t,
                ry: 1 / t
            })
        ]
    });
}
function H(e) {
    let t = 8;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: 4 / t,
                cy: 4 / t,
                r: 2 / t
            })
        ]
    });
}
function W(e) {
    let t = 8;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('circle', {
                fill: 'white',
                cx: 4 / t,
                cy: 4 / t,
                r: 4 / t
            }),
            (0, r.jsx)('polygon', {
                fill: 'black',
                points: ''
                    .concat(2.8 / t, ',')
                    .concat(2 / t, ' ')
                    .concat(6.264102 / t, ',')
                    .concat(4 / t, ' ')
                    .concat(2.8 / t, ',')
                    .concat(6 / t)
            })
        ]
    });
}
function Y(e) {
    let t = 8;
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: (0, r.jsx)('rect', {
            fill: 'white',
            cx: 0,
            cy: 0,
            width: 1,
            height: 1,
            ry: 4 / t,
            rx: 4 / (2.5 * t)
        })
    });
}
function K(e) {
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                width: '1',
                height: '1',
                fill: 'white'
            }),
            (0, r.jsx)('path', {
                d: 'M0.5 0.71875C0.5 0.649716 0.555966 0.59375 0.625 0.59375H1.0V1.0H0.5V0.71875Z',
                fill: 'black'
            })
        ]
    });
}
function z(e) {
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: (0, r.jsx)('path', {
            d: 'M0 0.26087C0 0.137894 0 0.0764069 0.0382035 0.0382035C0.0764069 0 0.137894 0 0.26087 0H0.73913C0.862106 0 0.923593 0 0.961797 0.0382035C1 0.0764069 1 0.137894 1 0.26087V0.73913C1 0.862106 1 0.923593 0.961797 0.961797C0.923593 1 0.862106 1 0.73913 1H0.26087C0.137894 1 0.0764069 1 0.0382035 0.961797C0 0.923593 0 0.862106 0 0.73913V0.26087Z',
            fill: 'white'
        })
    });
}
function q(e) {
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                width: '1',
                height: '1',
                fill: 'white'
            }),
            (0, r.jsx)('circle', {
                cx: '0.85',
                cy: '0.85',
                r: '0.25',
                fill: 'black'
            })
        ]
    });
}
function Q(e) {
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                width: '1',
                height: '1',
                fill: 'white'
            }),
            (0, r.jsx)('circle', {
                cx: '0.9',
                cy: '0.9',
                r: '0.5',
                fill: 'black'
            })
        ]
    });
}
function X(e) {
    let t = 24;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                width: 1,
                height: 1
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: 1.33,
                cy: 0.5,
                r: (t / 2 + 2) / t
            })
        ]
    });
}
function J(e) {
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: (0, r.jsx)('path', {
            d: 'M0 0.12C0 0.0779961 0 0.0569941 0.00408726 0.0409507C0.00768251 0.0268386 0.0134193 0.015365 0.0204754 0.00817451C0.028497 0 0.038998 0 0.06 0H0.94C0.961002 0 0.971503 0 0.979525 0.00817451C0.986581 0.015365 0.992318 0.0268386 0.995913 0.0409507C1 0.0569941 1 0.0779961 1 0.12V0.45C0.986193 0.45 0.975 0.472386 0.975 0.5C0.975 0.527614 0.986193 0.55 1 0.55V0.88C1 0.922004 1 0.943006 0.995913 0.959049C0.992318 0.973161 0.986581 0.984635 0.979525 0.991826C0.971503 1 0.961002 1 0.94 1H0.0600001C0.0389981 1 0.028497 1 0.0204754 0.991826C0.0134193 0.984635 0.00768251 0.973161 0.00408726 0.959049C0 0.943006 0 0.922004 0 0.88V0.55C0.0138071 0.55 0.025 0.527614 0.025 0.5C0.025 0.472386 0.0138071 0.45 0 0.45V0.12Z',
            fill: 'white'
        })
    });
}
function $(e) {
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('path', {
                fill: 'white',
                d: 'M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z'
            }),
            (0, r.jsx)('circle', {
                cx: '0.9',
                cy: '0.9',
                r: '0.5',
                fill: 'black'
            })
        ]
    });
}
function ee(e) {
    let t = 16;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                width: 1,
                height: 1
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: 1.33,
                cy: 0.5,
                r: (t / 2 + 2.4) / t
            })
        ]
    });
}
function et(e, t, n, i) {
    let o = 4;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: '100%',
                height: '100%'
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: (t - n / 2 + o) / t,
                cy: (t - n / 2 + o) / t,
                r: (n / 2 + i) / t
            })
        ]
    });
}
function en(e) {
    let t = 24;
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                fill: 'white',
                x: 0,
                y: 0,
                width: '100%',
                height: '100%'
            }),
            (0, r.jsx)('circle', {
                fill: 'black',
                cx: 1.33,
                cy: 0.5,
                r: (t / 2 + 2.4) / t
            })
        ]
    });
}
function er(e) {
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: (0, r.jsx)('rect', {
            fill: 'white',
            rx: 0.3,
            ry: 0.3,
            width: 1,
            height: 1
        })
    });
}
function ei(e) {
    return (0, r.jsxs)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: [
            (0, r.jsx)('rect', {
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                fill: 'white'
            }),
            (0, r.jsx)('circle', {
                cx: 0.85,
                cy: 0.15,
                r: 0.25,
                fill: 'black'
            })
        ]
    });
}
function eo(e) {
    return (0, r.jsx)('mask', {
        id: e,
        maskContentUnits: 'objectBoundingBox',
        viewBox: '0 0 1 1',
        children: (0, r.jsx)('path', {
            d: 'M0.142857 0C0.0639593 0 0 0.0639593 0 0.142857V0.857143C0 0.936041 0.0639593 1 0.142857 1H0.554564C0.520632 0.962089 0.5 0.912025 0.5 0.857143V0.714286C0.5 0.595939 0.595939 0.5 0.714286 0.5H0.857143C0.912025 0.5 0.962089 0.520632 1 0.554564V0.142857C1 0.0639593 0.936041 0 0.857143 0H0.142857Z',
            fill: 'white'
        })
    });
}
function ea(e) {
    var { mask: t, width: n = E, height: i = E, rightOverhang: o = 0, bottomOverhang: s = 0, children: l, className: c, style: d, 'aria-label': _ } = e,
        m = h(e, ['mask', 'width', 'height', 'rightOverhang', 'bottomOverhang', 'children', 'className', 'style', 'aria-label']);
    return (0, r.jsx)(
        'svg',
        p(
            f(
                {
                    width: n + o,
                    height: i + s,
                    className: a()(u.svg, c),
                    viewBox: '0 0 '.concat(n + o, ' ').concat(i + s),
                    style: d,
                    'aria-label': _
                },
                m
            ),
            {
                children: (0, r.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: n,
                    height: i,
                    overflow: 'visible',
                    mask: null != t ? 'url(#'.concat(t, ')') : void 0,
                    children: l
                })
            }
        )
    );
}
ea.Masks = g;
let es = ea,
    el = i.memo(
        function () {
            return (0, r.jsxs)('svg', {
                viewBox: '0 0 1 1',
                style: {
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: -1,
                    left: -1,
                    width: 1,
                    height: 1
                },
                'aria-hidden': !0,
                children: [
                    D('svg-mask-squircle'),
                    S('svg-mask-header-bar-badge-top', 0.25),
                    S('svg-mask-header-bar-badge-bottom', 0.75),
                    N('svg-mask-voice-user-summary-item'),
                    L('svg-mask-vertical-fade'),
                    T('svg-mask-panel-button'),
                    O('svg-mask-channel-call-control-button'),
                    I('svg-mask-channel-call-control-button-badge-16', 16),
                    I('svg-mask-channel-call-control-button-badge-22', 22),
                    I('svg-mask-channel-call-control-button-badge-29', 29),
                    x('svg-mask-avatar-default'),
                    M('svg-mask-avatar-status-round-16', s.EF.SIZE_16),
                    k('svg-mask-avatar-decoration-status-round-16', s.EF.SIZE_16),
                    G('svg-mask-avatar-status-mobile-16', s.EF.SIZE_16),
                    B('svg-mask-avatar-decoration-status-mobile-16', s.EF.SIZE_16),
                    j('svg-mask-avatar-status-typing-16', s.EF.SIZE_16),
                    U('svg-mask-avatar-decoration-status-typing-16', s.EF.SIZE_16),
                    M('svg-mask-avatar-status-round-20', s.EF.SIZE_20),
                    k('svg-mask-avatar-decoration-status-round-20', s.EF.SIZE_20),
                    G('svg-mask-avatar-status-mobile-20', s.EF.SIZE_20),
                    B('svg-mask-avatar-decoration-status-mobile-20', s.EF.SIZE_20),
                    j('svg-mask-avatar-status-typing-20', s.EF.SIZE_20),
                    U('svg-mask-avatar-decoration-status-typing-20', s.EF.SIZE_20),
                    M('svg-mask-avatar-status-round-24', s.EF.SIZE_24),
                    k('svg-mask-avatar-decoration-status-round-24', s.EF.SIZE_24),
                    G('svg-mask-avatar-status-mobile-24', s.EF.SIZE_24),
                    B('svg-mask-avatar-decoration-status-mobile-24', s.EF.SIZE_24),
                    j('svg-mask-avatar-status-typing-24', s.EF.SIZE_24),
                    U('svg-mask-avatar-decoration-status-typing-24', s.EF.SIZE_24),
                    M('svg-mask-avatar-status-round-32', s.EF.SIZE_32),
                    k('svg-mask-avatar-decoration-status-round-32', s.EF.SIZE_32),
                    G('svg-mask-avatar-status-mobile-32', s.EF.SIZE_32),
                    B('svg-mask-avatar-decoration-status-mobile-32', s.EF.SIZE_32),
                    j('svg-mask-avatar-status-typing-32', s.EF.SIZE_32),
                    U('svg-mask-avatar-decoration-status-typing-32', s.EF.SIZE_32),
                    M('svg-mask-avatar-status-round-40', s.EF.SIZE_40),
                    k('svg-mask-avatar-decoration-status-round-40', s.EF.SIZE_40),
                    G('svg-mask-avatar-status-mobile-40', s.EF.SIZE_40),
                    B('svg-mask-avatar-decoration-status-mobile-40', s.EF.SIZE_40),
                    j('svg-mask-avatar-status-typing-40', s.EF.SIZE_40),
                    U('svg-mask-avatar-decoration-status-typing-40', s.EF.SIZE_40),
                    M('svg-mask-avatar-status-round-44', s.EF.SIZE_44),
                    k('svg-mask-avatar-decoration-status-round-44', s.EF.SIZE_44),
                    G('svg-mask-avatar-status-mobile-44', s.EF.SIZE_44),
                    B('svg-mask-avatar-decoration-status-mobile-44', s.EF.SIZE_44),
                    j('svg-mask-avatar-status-typing-44', s.EF.SIZE_44),
                    U('svg-mask-avatar-decoration-status-typing-44', s.EF.SIZE_44),
                    M('svg-mask-avatar-status-round-48', s.EF.SIZE_48),
                    k('svg-mask-avatar-decoration-status-round-48', s.EF.SIZE_48),
                    G('svg-mask-avatar-status-mobile-48', s.EF.SIZE_48),
                    B('svg-mask-avatar-decoration-status-mobile-48', s.EF.SIZE_48),
                    j('svg-mask-avatar-status-typing-48', s.EF.SIZE_48),
                    U('svg-mask-avatar-decoration-status-typing-48', s.EF.SIZE_48),
                    M('svg-mask-avatar-status-round-56', s.EF.SIZE_56),
                    k('svg-mask-avatar-decoration-status-round-56', s.EF.SIZE_56),
                    G('svg-mask-avatar-status-mobile-56', s.EF.SIZE_56),
                    B('svg-mask-avatar-decoration-status-mobile-56', s.EF.SIZE_56),
                    j('svg-mask-avatar-status-typing-56', s.EF.SIZE_56),
                    U('svg-mask-avatar-decoration-status-typing-56', s.EF.SIZE_56),
                    M('svg-mask-avatar-status-round-80', s.EF.SIZE_80),
                    k('svg-mask-avatar-decoration-status-round-80', s.EF.SIZE_80),
                    G('svg-mask-avatar-status-mobile-80', s.EF.SIZE_80),
                    B('svg-mask-avatar-decoration-status-mobile-80', s.EF.SIZE_80),
                    j('svg-mask-avatar-status-typing-80', s.EF.SIZE_80),
                    U('svg-mask-avatar-decoration-status-typing-80', s.EF.SIZE_80),
                    M('svg-mask-avatar-status-round-120', s.EF.SIZE_120),
                    k('svg-mask-avatar-decoration-status-round-120', s.EF.SIZE_120),
                    G('svg-mask-avatar-status-mobile-120', s.EF.SIZE_120),
                    B('svg-mask-avatar-decoration-status-mobile-120', s.EF.SIZE_120),
                    j('svg-mask-avatar-status-typing-120', s.EF.SIZE_120),
                    U('svg-mask-avatar-decoration-status-typing-120', s.EF.SIZE_120),
                    R('svg-mask-diagonal-facepile-16', s.EF.SIZE_16),
                    P('svg-mask-diagonal-facepile-status-16', s.EF.SIZE_16),
                    w('svg-mask-diagonal-facepile-typing-16', s.EF.SIZE_16),
                    R('svg-mask-diagonal-facepile-20', s.EF.SIZE_20),
                    P('svg-mask-diagonal-facepile-status-20', s.EF.SIZE_20),
                    w('svg-mask-diagonal-facepile-typing-20', s.EF.SIZE_20),
                    R('svg-mask-diagonal-facepile-24', s.EF.SIZE_24),
                    P('svg-mask-diagonal-facepile-status-24', s.EF.SIZE_24),
                    w('svg-mask-diagonal-facepile-typing-24', s.EF.SIZE_24),
                    R('svg-mask-diagonal-facepile-32', s.EF.SIZE_32),
                    P('svg-mask-diagonal-facepile-status-32', s.EF.SIZE_32),
                    w('svg-mask-diagonal-facepile-typing-32', s.EF.SIZE_32),
                    R('svg-mask-diagonal-facepile-40', s.EF.SIZE_40),
                    P('svg-mask-diagonal-facepile-status-40', s.EF.SIZE_40),
                    w('svg-mask-diagonal-facepile-typing-40', s.EF.SIZE_40),
                    R('svg-mask-diagonal-facepile-48', s.EF.SIZE_48),
                    P('svg-mask-diagonal-facepile-status-48', s.EF.SIZE_48),
                    w('svg-mask-diagonal-facepile-typing-48', s.EF.SIZE_48),
                    R('svg-mask-diagonal-facepile-56', s.EF.SIZE_56),
                    P('svg-mask-diagonal-facepile-status-56', s.EF.SIZE_56),
                    w('svg-mask-diagonal-facepile-typing-56', s.EF.SIZE_56),
                    R('svg-mask-diagonal-facepile-80', s.EF.SIZE_80),
                    P('svg-mask-diagonal-facepile-status-80', s.EF.SIZE_80),
                    w('svg-mask-diagonal-facepile-typing-80', s.EF.SIZE_80),
                    R('svg-mask-diagonal-facepile-120', s.EF.SIZE_120),
                    P('svg-mask-diagonal-facepile-status-120', s.EF.SIZE_120),
                    w('svg-mask-diagonal-facepile-typing-120', s.EF.SIZE_120),
                    F('svg-mask-status-online-mobile'),
                    x('svg-mask-status-online'),
                    V('svg-mask-status-idle'),
                    Z('svg-mask-status-dnd'),
                    H('svg-mask-status-offline'),
                    W('svg-mask-status-streaming'),
                    Y('svg-mask-status-typing'),
                    K('svg-mask-status-screenshare'),
                    y('svg-mask-avatar-voice-call-80'),
                    v('svg-mask-avatar-call-icon', s.EF.SIZE_56, 1),
                    v('svg-mask-avatar-call-icon-32', s.EF.SIZE_32, 0.5),
                    z('svg-mask-sticker-rounded-rect'),
                    q('svg-mask-chat-input-button-notification'),
                    Q('svg-mask-sticker-shop-notification'),
                    X('svg-mask-autocomplete-emoji-upsell-emoji'),
                    J('svg-mask-event-ticket'),
                    $('svg-mask-guild-icon-with-channel-type'),
                    ee('svg-mask-content-inventory-card-face-pile-avatar'),
                    en('svg-mask-guild-popout-activity-icon'),
                    er('svg-mask-clan-icon'),
                    ei('svg-mask-badged-guild-icon'),
                    eo('svg-mask-forward-attachment-pile-overflow'),
                    et('svg-mask-content-image-60', 60, 24, 2),
                    et('svg-mask-content-image-72', 72, 32, 4)
                ]
            });
        },
        () => !0
    );
