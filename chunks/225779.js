n.d(t, {
    DM: () => E,
    Ey: () => b,
    No: () => O,
    Ry: () => S,
    qX: () => T,
    u3: () => I
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(873546),
    s = n(481060),
    l = n(626135),
    c = n(981631),
    u = n(388032),
    d = n(240211);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = Object.freeze({
    DEFAULT: d.colorDefault,
    NEUTRAL: d.colorNeutral,
    BRAND: d.colorBrand,
    WARNING: d.colorWarning,
    DANGER: d.colorDanger,
    INFO: d.colorInfo,
    STREAMER_MODE: d.colorStreamerMode,
    CUSTOM: d.colorCustom,
    SPOTIFY: d.colorSpotify,
    PLAYSTATION: d.colorPlayStation,
    PREMIUM_TIER_0: d.colorPremiumTier0,
    PREMIUM_TIER_1: d.colorPremiumTier1,
    PREMIUM_TIER_2: d.colorPremiumTier2
});
function b(e) {
    var { children: t, className: n, minor: i = !1 } = e,
        a = m(e, ['children', 'className', 'minor']);
    return (0, r.jsx)(s.tEY, { children: (0, r.jsx)('button', h(_({ className: o()(d.button, n, { [d.buttonMinor]: i }) }, a), { children: t })) });
}
function y(e, t) {
    null != e && l.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, _({ notice_type: e }, t));
}
function v(e) {
    null != e && l.default.track(c.rMx.APP_NOTICE_CLOSED, { notice_type: e });
}
function O(e) {
    var { children: t, noticeType: n, additionalTrackingProps: i } = e,
        o = m(e, ['children', 'noticeType', 'additionalTrackingProps']);
    return (0, r.jsx)(
        b,
        h(_({}, o), {
            onClick: (e) => {
                null != o.onClick && o.onClick(e), y(n, i);
            },
            children: t
        })
    );
}
function I(e) {
    var { children: t, href: n } = e,
        i = m(e, ['children', 'href']);
    return (0, r.jsx)(
        s.eee,
        h(_({}, i), {
            className: d.button,
            href: n,
            children: t
        })
    );
}
function S(e) {
    let { onClick: t, noticeType: n } = e;
    return (0, r.jsx)(s.P3F, {
        focusProps: { offset: 6 },
        className: d.closeButton,
        onClick: () => {
            t(), v(n);
        },
        'aria-label': u.NW.string(u.t.WAI6xs),
        children: (0, r.jsx)(s.Dio, {
            size: 'sm',
            color: 'currentColor',
            className: d.closeIcon
        })
    });
}
function T(e) {
    let { color: t = E.DEFAULT, className: n, style: i, children: s } = e;
    return (0, r.jsx)('div', {
        className: o()(d.notice, { [d.isMobile]: a.tq }, n, t),
        style: null != i ? i : void 0,
        children: s
    });
}
