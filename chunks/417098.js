n.d(t, {
    $T: () => T,
    Hv: () => E,
    PM: () => I,
    Z_: () => v,
    eC: () => S,
    zr: () => b,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(607399),
    o = n(397927),
    l = n(954571),
    c = n(652215),
    u = n(985018),
    d = n(1624);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
function m(e, t) {
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
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = Object.freeze({
    DEFAULT: d.Lx,
    NEUTRAL: d.NT,
    BRAND: d.x8,
    WARNING: d.SO,
    DANGER: d.HW,
    INFO: d.io,
    STREAMER_MODE: d.kL,
    CUSTOM: d.P4,
    SPOTIFY: d.AU,
    PLAYSTATION: d._9,
    PREMIUM_TIER_0: d.zw,
    PREMIUM_TIER_1: d.G_,
    PREMIUM_TIER_2: d.NS,
});
function b(e) {
    let { children: t, className: n, minor: i = !1 } = e,
        s = m(e, ["children", "className", "minor"]);
    return (0, r.jsx)(o.vN3, {
        children: (0, r.jsx)("button", h(p({ className: a()(d.x6, n, { [d.oy]: i }) }, s), { children: t })),
    });
}
function y(e) {
    null != e && l.default.track(c.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: e });
}
function O(e) {
    null != e && l.default.track(c.HAw.APP_NOTICE_CLOSED, { notice_type: e });
}
function A(e, t) {
    l.default.track(c.HAw.APP_NOTICE_ANCHOR_CLICKED, {
        notice_type: e,
        href: t,
    });
}
function v(e) {
    let { children: t, noticeType: n } = e,
        i = m(e, ["children", "noticeType"]);
    return (0, r.jsx)(
        b,
        h(p({}, i), {
            onClick: (e) => {
                null != i.onClick && i.onClick(e), y(n);
            },
            children: t,
        }),
    );
}
function S(e) {
    let { children: t, href: n, noticeType: i } = e,
        a = m(e, ["children", "href", "noticeType"]);
    return (0, r.jsx)(
        o.MzZ,
        h(p({}, a), {
            className: d.x6,
            href: n,
            onClick: (e) => {
                var t;
                null == (t = a.onClick) || t.call(a, e), A(i, n);
            },
            children: t,
        }),
    );
}
function I(e) {
    let { onClick: t, noticeType: n, className: i } = e;
    return (0, r.jsx)(o.DUT, {
        focusProps: { offset: 6 },
        className: a()(d.b, i),
        onClick: () => {
            t(), O(n);
        },
        "aria-label": u.intl.string(u.t.WAI6xu),
        children: (0, r.jsx)(o.PGe, {
            size: "sm",
            color: "currentColor",
            className: d.ut,
        }),
    });
}
function T(e) {
    let { color: t = E.DEFAULT, className: n, style: i, ref: o, children: l } = e;
    return (0, r.jsx)("div", {
        ref: o,
        className: a()(d.lm, { [d.Fr]: s.Fr }, n, t),
        style: null != i ? i : void 0,
        children: l,
    });
}
