"use strict";
n.d(t, {
    $X: () => j,
    K7: () => G,
    MK: () => k,
    N5: () => b,
    R_: () => P,
    Rq: () => Y,
    Xr: () => V,
    Xy: () => L,
    Y8: () => F,
    Yq: () => W,
    Zc: () => x,
    er: () => O,
    fM: () => D,
    fg: () => B,
    iT: () => $,
    iq: () => w,
    mG: () => K,
    sp: () => U,
    tR: () => M,
    zi: () => H,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    u = n(681154),
    c = n(974690),
    d = n(379834),
    _ = n(990078),
    f = n(397927),
    p = n(619517),
    h = n(927813),
    m = n(403362),
    g = n(661191),
    E = n(20805),
    A = n(202195),
    I = n(583846),
    T = n(299846),
    y = n(693879);
n(424994);
var S = n(985018),
    v = n(584576);
let C = {
    [u.ContentInventoryEntryType.TOP_ARTIST]: [F],
    [u.ContentInventoryEntryType.PLAYED_GAME]: [w, x, L, j, M, G, B, U, k],
    [u.ContentInventoryEntryType.TOP_GAME]: [V],
    [u.ContentInventoryEntryType.WATCHED_MEDIA]: [H, Y],
    [u.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [w, x, L, j, B, k],
};
var b = (function (e) {
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
let N = i.createContext({});
function R() {
    return i.useContext(N);
}
function O(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)("div", { className: v.fC, ...n, children: t });
}
function D(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: a, showTooltip: s } = e,
        { defaultTextColor: o, defaultIconColor: l, location: u } = R();
    return (0, r.jsx)(_.m, {
        text: a,
        shouldShow: s,
        children: (0, r.jsxs)(O, {
            children: [
                (0, r.jsx)(t, { size: "xxs", color: i ?? l }),
                (0, r.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: o,
                    className: v.KT,
                    scaleFontToUserSetting: 5 === u,
                    children: n,
                }),
            ],
        }),
    });
}
function L(e) {
    let { entry: t } = e,
        { channel: n } = (0, A.A)(t),
        { location: i } = R();
    return null == n || (0, m.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)(D, { Icon: f.HKD, text: n.name });
}
function w(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = R(),
        o = (0, I.Hd)(t) && (0, m.S1)(s, [0, 4, 7, 9]),
        l = o ? f.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        u = o ? "text-feedback-positive" : i,
        { streamPreviewUrl: c } = (0, A.A)(t),
        d = null != c ? f.Fzq : (0, E.yl)(t) ? f.k9F : f._xR;
    return (0, r.jsxs)(O, {
        children: [
            (0, r.jsx)(d, { size: "xxs", color: l }),
            (0, r.jsx)(y.A, { entry: t, textColor: u, hovered: n, bold: !0, scaleFontToUserSetting: 5 === s }),
        ],
    });
}
function x(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = R(),
        { state: a, party: s } = (0, T.u)(t),
        o = (0, I.gF)(a, s);
    return null == o
        ? null
        : (0, r.jsxs)(O, {
              children: [
                  (0, r.jsx)(f.nFg, { size: "xxs", color: i }),
                  (0, r.jsx)(f.Text, { variant: "text-xs/normal", color: n, lineClamp: 1, children: o }),
              ],
          });
}
function P(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = R(),
        o = (0, I.Hd)(t) && (0, m.S1)(s, [0, 4]),
        l = o ? f.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        u = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: v.fC,
        children: [
            (0, r.jsx)(f.T7G, { size: "xxs", color: l }),
            (0, r.jsx)(y.A, { entry: t, textColor: u, hovered: n, bold: !0 }),
        ],
    });
}
function M(e) {
    let { entry: t } = e,
        { location: n } = R(),
        i = (0, m.S1)(n, [0, 3]) ? f.LU0.colors.STATUS_POSITIVE : void 0;
    return (0, I.Rf)(t) ? (0, r.jsx)(D, { Icon: f.PPD, text: S.intl.string(S.t.keY6mW), iconColor: i }) : null;
}
function k(e) {
    let { entry: t } = e,
        { location: n } = R();
    if (!(0, I.L7)(t)) return null;
    let i = (0, I.JM)(t),
        a = 0 === n && !i,
        { text: s, tooltipText: o } = (0, I.Pj)(t);
    return null == s ? null : (0, r.jsx)(D, { Icon: f.xbX, text: s, tooltipText: o, showTooltip: a });
}
function U(e) {
    let { entry: t } = e,
        { location: n } = R(),
        i = 0 !== n,
        a = (0, I.KH)(t);
    if (null == a) return null;
    let s = (0, I.us)(a);
    return (0, r.jsx)(D, { Icon: f.mqY, showTooltip: !i, tooltipText: s, text: i ? s : S.intl.string(S.t.adnLsB) });
}
function G(e) {
    let { entry: t } = e,
        { location: n } = R(),
        i = (0, I.iy)(t);
    return (0, I.BZ)(t)
        ? (0, r.jsx)(D, {
              Icon: f.gXB,
              showTooltip: 0 === n,
              text: S.intl.formatToPlainString(S.t["Klie/P"], { days: i }),
              tooltipText: S.intl.formatToPlainString(S.t.PwMe0s, { days: i }),
          })
        : null;
}
function V(e) {
    let { entry: t } = e,
        { location: n } = R(),
        i = 0 !== n,
        a = (0, I.ty)(t);
    if (null == a) return null;
    let s = i ? " — " : ": ",
        o = i ? S.t.C0AxoR : S.t.SDRHgr;
    return (0, r.jsx)(D, {
        Icon: f.OR,
        text: (0, r.jsxs)(r.Fragment, {
            children: [S.intl.string(S.t["/50eHi"]), s, S.intl.format(o, { hours: Math.round(a / h.A.Seconds.HOUR) })],
        }),
    });
}
function F(e) {
    let { entry: t } = e,
        { location: n } = R(),
        i = (0, I.Pv)(t, c.K.AGGREGATE_COUNT)?.count;
    if (null == i) return null;
    let a = (0, m.S1)(n, [1, 2, 5])
        ? S.intl.formatToPlainString(S.t.HtifnG, { count: i })
        : S.intl.formatToPlainString(S.t["jq/Bmu"], { count: i });
    return (0, r.jsx)(D, { Icon: f.OR, text: a });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = R();
    if (3 === n) return null;
    let i = (0, I.CZ)(t);
    return null == i || i === d.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(D, { Icon: f.Y3C, text: S.intl.string(S.t.kAlUsy) });
}
function j(e) {
    let { entry: t } = e,
        { location: n } = R();
    if (3 === n) return null;
    let i = g.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), "days") > 7 ? null : (0, r.jsx)(D, { Icon: f.fR$, text: S.intl.string(S.t.vYuyWf) });
}
function H(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = R(),
        o = (0, I.Hd)(t) && 4 === s,
        l = o ? f.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        u = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: v.fC,
        children: [
            (0, r.jsx)(f.Uk3, { size: "xxs", color: l }),
            (0, r.jsx)(y.A, { entry: t, textColor: u, hovered: n, bold: !0 }),
        ],
    });
}
function Y(e) {
    let { entry: t } = e,
        n = (0, I.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, r.jsx)(D, { Icon: f.Kck, text: n });
}
function W(e) {
    let { entry: t } = e,
        { defaultTextColor: n, location: i } = R();
    if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
    let { previewIcon: a, previewTextShort: s } = t.applicationWidgetPreview.previewData;
    return (0, r.jsxs)(O, {
        children: [
            null != a &&
                (0, r.jsx)("div", {
                    className: v.dQ,
                    children: (0, r.jsx)(p.Ay, { src: a.proxyUrl, width: a.width, height: a.height, responsive: !0 }),
                }),
            (0, r.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: n,
                className: v.KT,
                scaleFontToUserSetting: 5 === i,
                children: s,
            }),
        ],
    });
}
function K(e) {
    let t,
        { location: n, children: i, className: a } = e;
    return (
        (t = (0, m.S1)(n, [1, 5, 6])
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
        (0, r.jsx)(N.Provider, {
            value: { location: n, ...t },
            children: (0, r.jsx)("div", {
                className: s()(v.cV, { [v.u3]: 0 === n, [v.BQ]: (0, m.S1)(n, [1, 2]), [v.DY]: 3 === n }, a),
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
function $(e) {
    let { entry: t, location: n, className: i } = e,
        a = z(t);
    return null == a ? null : (0, r.jsx)(K, { location: n, className: i, children: a });
}
