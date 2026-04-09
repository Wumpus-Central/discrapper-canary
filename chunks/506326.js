"use strict";
n.d(t, {
    $X: () => j,
    K7: () => F,
    MK: () => U,
    N5: () => R,
    R_: () => P,
    Rq: () => W,
    Xr: () => V,
    Xy: () => w,
    Y8: () => B,
    Yq: () => K,
    Zc: () => x,
    er: () => D,
    fM: () => L,
    fg: () => H,
    iT: () => q,
    iq: () => M,
    mG: () => $,
    sp: () => G,
    tR: () => k,
    zi: () => Y,
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(989349),
    l = n.n(o),
    u = n(681154),
    c = n(974690),
    d = n(379834),
    _ = n(990078),
    f = n(397927),
    p = n(47167),
    h = n(619517),
    m = n(927813),
    E = n(403362),
    g = n(661191),
    A = n(20805),
    I = n(202195),
    T = n(583846),
    S = n(299846),
    y = n(693879);
n(424994);
var v = n(985018),
    N = n(227702);
let C = {
    [u.ContentInventoryEntryType.TOP_ARTIST]: [B],
    [u.ContentInventoryEntryType.PLAYED_GAME]: [M, x, w, j, k, F, H, G, U],
    [u.ContentInventoryEntryType.TOP_GAME]: [V],
    [u.ContentInventoryEntryType.WATCHED_MEDIA]: [Y, W],
    [u.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [M, x, w, j, H, U],
};
var R = (function (e) {
    return (
        (e[(e.CARD = 0)] = "CARD"),
        (e[(e.POPOUT = 1)] = "POPOUT"),
        (e[(e.STREAMING_POPOUT = 2)] = "STREAMING_POPOUT"),
        (e[(e.GAME_PROFILE = 3)] = "GAME_PROFILE"),
        (e[(e.USER_PROFILE = 4)] = "USER_PROFILE"),
        (e[(e.EMBED = 5)] = "EMBED"),
        (e[(e.LEADERBOARD_POPOUT = 6)] = "LEADERBOARD_POPOUT"),
        (e[(e.OVERLAY = 7)] = "OVERLAY"),
        (e[(e.FRIENDS_POPOUT = 8)] = "FRIENDS_POPOUT"),
        (e[(e.APP_LAUNCHER = 9)] = "APP_LAUNCHER"),
        e
    );
})({});
let O = i.createContext({});
function b() {
    return i.useContext(O);
}
function D(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)("div", { className: N.fC, ...n, children: t });
}
function L(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: s, showTooltip: a } = e,
        { defaultTextColor: o, defaultIconColor: l, location: u } = b();
    return (0, r.jsx)(_.m, {
        text: s,
        shouldShow: a,
        children: (0, r.jsxs)(D, {
            children: [
                (0, r.jsx)(t, { size: "xxs", color: i ?? l }),
                (0, r.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: o,
                    className: N.KT,
                    scaleFontToUserSetting: 5 === u,
                    children: n,
                }),
            ],
        }),
    });
}
function w(e) {
    let { entry: t } = e,
        { channel: n } = (0, I.A)(t),
        { location: i } = b(),
        s = (0, p.Ay)(n);
    return null == n || (0, E.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)(L, { Icon: f.HKD, text: s });
}
function M(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = b(),
        o = (0, T.Hd)(t) && (0, E.S1)(a, [0, 4, 7, 9]),
        l = o ? f.LU0.colors.TEXT_FEEDBACK_POSITIVE : s,
        u = o ? "text-feedback-positive" : i,
        { streamPreviewUrl: c } = (0, I.A)(t),
        d = null != c ? f.Fzq : (0, A.yl)(t) ? f.k9F : f._xR;
    return (0, r.jsxs)(D, {
        children: [
            (0, r.jsx)(d, { size: "xxs", color: l }),
            (0, r.jsx)(y.A, { entry: t, textColor: u, hovered: n, bold: !0, scaleFontToUserSetting: 5 === a }),
        ],
    });
}
function x(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = b(),
        { state: s, party: a } = (0, S.u)(t),
        o = (0, T.gF)(s, a);
    return null == o
        ? null
        : (0, r.jsxs)(D, {
              children: [
                  (0, r.jsx)(f.nFg, { size: "xxs", color: i }),
                  (0, r.jsx)(f.Text, { variant: "text-xs/normal", color: n, lineClamp: 1, children: o }),
              ],
          });
}
function P(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = b(),
        o = (0, T.Hd)(t) && (0, E.S1)(a, [0, 4]),
        l = o ? f.LU0.colors.TEXT_FEEDBACK_POSITIVE : s,
        u = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: N.fC,
        children: [
            (0, r.jsx)(f.T7G, { size: "xxs", color: l }),
            (0, r.jsx)(y.A, { entry: t, textColor: u, hovered: n, bold: !0 }),
        ],
    });
}
function k(e) {
    let { entry: t } = e,
        { location: n } = b(),
        i = (0, E.S1)(n, [0, 3]) ? f.LU0.colors.STATUS_POSITIVE : void 0;
    return (0, T.Rf)(t) ? (0, r.jsx)(L, { Icon: f.PPD, text: v.intl.string(v.t.keY6mW), iconColor: i }) : null;
}
function U(e) {
    let { entry: t } = e,
        { location: n } = b();
    if (!(0, T.L7)(t)) return null;
    let i = (0, T.JM)(t),
        s = 0 === n && !i,
        { text: a, tooltipText: o } = (0, T.Pj)(t);
    return null == a ? null : (0, r.jsx)(L, { Icon: f.xbX, text: a, tooltipText: o, showTooltip: s });
}
function G(e) {
    let { entry: t } = e,
        { location: n } = b(),
        i = 0 !== n,
        s = (0, T.KH)(t);
    if (null == s) return null;
    let a = (0, T.us)(s);
    return (0, r.jsx)(L, { Icon: f.mqY, showTooltip: !i, tooltipText: a, text: i ? a : v.intl.string(v.t.adnLsB) });
}
function F(e) {
    let { entry: t } = e,
        { location: n } = b(),
        i = (0, T.iy)(t);
    return (0, T.BZ)(t)
        ? (0, r.jsx)(L, {
              Icon: f.gXB,
              showTooltip: 0 === n,
              text: v.intl.formatToPlainString(v.t["Klie/P"], { days: i }),
              tooltipText: v.intl.formatToPlainString(v.t.PwMe0s, { days: i }),
          })
        : null;
}
function V(e) {
    let { entry: t } = e,
        { location: n } = b(),
        i = 0 !== n,
        s = (0, T.ty)(t);
    if (null == s) return null;
    let a = i ? " — " : ": ",
        o = i ? v.t.C0AxoR : v.t.SDRHgr;
    return (0, r.jsx)(L, {
        Icon: f.OR,
        text: (0, r.jsxs)(r.Fragment, {
            children: [v.intl.string(v.t["/50eHi"]), a, v.intl.format(o, { hours: Math.round(s / m.A.Seconds.HOUR) })],
        }),
    });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = b(),
        i = (0, T.Pv)(t, c.K.AGGREGATE_COUNT)?.count;
    if (null == i) return null;
    let s = (0, E.S1)(n, [1, 2, 5])
        ? v.intl.formatToPlainString(v.t.HtifnG, { count: i })
        : v.intl.formatToPlainString(v.t["jq/Bmu"], { count: i });
    return (0, r.jsx)(L, { Icon: f.OR, text: s });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = b();
    if (3 === n) return null;
    let i = (0, T.CZ)(t);
    return null == i || i === d.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(L, { Icon: f.Y3C, text: v.intl.string(v.t.kAlUsy) });
}
function j(e) {
    let { entry: t } = e,
        { location: n } = b();
    if (3 === n) return null;
    let i = g.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), "days") > 7 ? null : (0, r.jsx)(L, { Icon: f.fR$, text: v.intl.string(v.t.vYuyWf) });
}
function Y(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = b(),
        o = (0, T.Hd)(t) && 4 === a,
        l = o ? f.LU0.colors.TEXT_FEEDBACK_POSITIVE : s,
        u = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: N.fC,
        children: [
            (0, r.jsx)(f.Uk3, { size: "xxs", color: l }),
            (0, r.jsx)(y.A, { entry: t, textColor: u, hovered: n, bold: !0 }),
        ],
    });
}
function W(e) {
    let { entry: t } = e,
        n = (0, T.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, r.jsx)(L, { Icon: f.Kck, text: n });
}
function K(e) {
    let { entry: t } = e,
        { defaultTextColor: n, location: i } = b();
    if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
    let { previewIcon: s, previewTextShort: a } = t.applicationWidgetPreview.previewData;
    return (0, r.jsxs)(D, {
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: N.dQ,
                    children: (0, r.jsx)(h.Ay, { src: s.proxyUrl, width: s.width, height: s.height, responsive: !0 }),
                }),
            (0, r.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: n,
                className: N.KT,
                scaleFontToUserSetting: 5 === i,
                children: a,
            }),
        ],
    });
}
function $(e) {
    let t,
        { location: n, children: i, className: s } = e;
    return (
        (t = (0, E.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: f.LU0.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: f.LU0.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, r.jsx)(O.Provider, {
            value: { location: n, ...t },
            children: (0, r.jsx)("div", {
                className: a()(N.cV, { [N.u3]: 0 === n, [N.BQ]: (0, E.S1)(n, [1, 2]), [N.DY]: 3 === n }, s),
                children: i,
            }),
        })
    );
}
function z(e) {
    switch (e.content_type) {
        case u.ContentInventoryEntryType.TOP_ARTIST:
            return C[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case u.ContentInventoryEntryType.PLAYED_GAME:
            return C[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case u.ContentInventoryEntryType.TOP_GAME:
            return C[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case u.ContentInventoryEntryType.WATCHED_MEDIA:
            return C[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case u.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return C[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        default:
            return null;
    }
}
function q(e) {
    let { entry: t, location: n, className: i } = e,
        s = z(t);
    return null == s ? null : (0, r.jsx)($, { location: n, className: i, children: s });
}
