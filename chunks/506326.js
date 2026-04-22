"use strict";
n.d(t, {
    $X: () => er,
    K7: () => en,
    MK: () => ee,
    N5: () => W,
    R_: () => X,
    Rq: () => eo,
    Xr: () => ei,
    Xy: () => Y,
    Y8: () => el,
    Yq: () => ec,
    Zc: () => $,
    er: () => Z,
    fM: () => q,
    fg: () => es,
    iT: () => ed,
    iq: () => J,
    mG: () => eu,
    sp: () => et,
    tR: () => Q,
    zi: () => ea,
});
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(989349),
    c = n.n(o),
    u = n(681154),
    d = n(974690),
    h = n(379834),
    m = n(990078),
    p = n(834730),
    f = n(983851),
    g = n(827734),
    _ = n(183623),
    x = n(323384),
    A = n(687966),
    C = n(177953),
    E = n(432017),
    I = n(246913),
    v = n(291747),
    y = n(417270),
    S = n(768622),
    b = n(369606),
    N = n(825860),
    T = n(605323),
    j = n(526181),
    R = n(306788),
    w = n(47167),
    L = n(619517),
    M = n(927813),
    k = n(403362),
    O = n(661191),
    P = n(20805),
    D = n(202195),
    U = n(583846),
    V = n(299846),
    G = n(693879);
n(424994);
var F = n(985018),
    B = n(164123);
let H = {
    [u.ContentInventoryEntryType.TOP_ARTIST]: [el],
    [u.ContentInventoryEntryType.PLAYED_GAME]: [J, $, Y, er, Q, en, es, et, ee],
    [u.ContentInventoryEntryType.TOP_GAME]: [ei],
    [u.ContentInventoryEntryType.WATCHED_MEDIA]: [ea, eo],
    [u.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [J, $, Y, er, es, ee],
};
var W =
    (((i = {})[(i.CARD = 0)] = "CARD"),
    (i[(i.POPOUT = 1)] = "POPOUT"),
    (i[(i.STREAMING_POPOUT = 2)] = "STREAMING_POPOUT"),
    (i[(i.GAME_PROFILE = 3)] = "GAME_PROFILE"),
    (i[(i.USER_PROFILE = 4)] = "USER_PROFILE"),
    (i[(i.EMBED = 5)] = "EMBED"),
    (i[(i.LEADERBOARD_POPOUT = 6)] = "LEADERBOARD_POPOUT"),
    (i[(i.OVERLAY = 7)] = "OVERLAY"),
    (i[(i.FRIENDS_POPOUT = 8)] = "FRIENDS_POPOUT"),
    (i[(i.APP_LAUNCHER = 9)] = "APP_LAUNCHER"),
    (i[(i.VOICE_USER_POPOUT = 10)] = "VOICE_USER_POPOUT"),
    i);
let K = s.createContext({});
function z() {
    return s.useContext(K);
}
function Z(e) {
    let { children: t, ...n } = e;
    return (0, l.jsx)("div", { className: B.fC, ...n, children: t });
}
function q(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: s, showTooltip: r } = e,
        { defaultTextColor: a, defaultIconColor: o, location: c } = z();
    return (0, l.jsx)(m.m, {
        text: s,
        shouldShow: r,
        children: (0, l.jsxs)(Z, {
            children: [
                (0, l.jsx)(t, { size: "xxs", color: i ?? o }),
                (0, l.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: a,
                    className: B.KT,
                    scaleFontToUserSetting: 5 === c,
                    children: n,
                }),
            ],
        }),
    });
}
function Y(e) {
    let { entry: t } = e,
        { channel: n } = (0, D.A)(t),
        { location: i } = z(),
        s = (0, w.Ay)(n);
    return null == n || (0, k.S1)(i, [1, 2, 3, 4]) ? null : (0, l.jsx)(q, { Icon: f.H, text: s });
}
function J(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: r } = z(),
        a = (0, U.Hd)(t) && (0, k.S1)(r, [0, 4, 7, 9]),
        o = a ? g.A.colors.TEXT_FEEDBACK_POSITIVE : s,
        { streamPreviewUrl: c } = (0, D.A)(t),
        u = null != c ? _.F : (0, P.yl)(t) ? x.k : A._;
    return (0, l.jsxs)(Z, {
        children: [
            (0, l.jsx)(u, { size: "xxs", color: o }),
            (0, l.jsx)(G.A, {
                entry: t,
                textColor: a ? "text-feedback-positive" : i,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === r,
            }),
        ],
    });
}
function $(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = z(),
        { state: s, party: r } = (0, V.u)(t),
        a = (0, U.gF)(s, r);
    return null == a
        ? null
        : (0, l.jsxs)(Z, {
              children: [
                  (0, l.jsx)(C.n, { size: "xxs", color: i }),
                  (0, l.jsx)(p.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: a }),
              ],
          });
}
function X(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: r } = z(),
        a = (0, U.Hd)(t) && (0, k.S1)(r, [0, 4]),
        o = a ? g.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, l.jsxs)("div", {
        className: B.fC,
        children: [
            (0, l.jsx)(E.T, { size: "xxs", color: o }),
            (0, l.jsx)(G.A, { entry: t, textColor: a ? "text-feedback-positive" : i, hovered: n, bold: !0 }),
        ],
    });
}
function Q(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = (0, k.S1)(n, [0, 3]) ? g.A.colors.STATUS_POSITIVE : void 0;
    return (0, U.Rf)(t) ? (0, l.jsx)(q, { Icon: I.P, text: F.intl.string(F.t.keY6mW), iconColor: i }) : null;
}
function ee(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (!(0, U.L7)(t)) return null;
    let i = (0, U.JM)(t),
        { text: s, tooltipText: r } = (0, U.Pj)(t);
    return null == s ? null : (0, l.jsx)(q, { Icon: v.x, text: s, tooltipText: r, showTooltip: 0 === n && !i });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = 0 !== n,
        s = (0, U.KH)(t);
    if (null == s) return null;
    let r = (0, U.us)(s);
    return (0, l.jsx)(q, { Icon: y.m, showTooltip: !i, tooltipText: r, text: i ? r : F.intl.string(F.t.adnLsB) });
}
function en(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = (0, U.iy)(t);
    return (0, U.BZ)(t)
        ? (0, l.jsx)(q, {
              Icon: S.g,
              showTooltip: 0 === n,
              text: F.intl.formatToPlainString(F.t["Klie/P"], { days: i }),
              tooltipText: F.intl.formatToPlainString(F.t.PwMe0s, { days: i }),
          })
        : null;
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = 0 !== n,
        s = (0, U.ty)(t);
    if (null == s) return null;
    let r = i ? F.t.C0AxoR : F.t.SDRHgr;
    return (0, l.jsx)(q, {
        Icon: b.O,
        text: (0, l.jsxs)(l.Fragment, {
            children: [
                F.intl.string(F.t["/50eHi"]),
                i ? " — " : ": ",
                F.intl.format(r, { hours: Math.round(s / M.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function el(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = (0, U.Pv)(t, d.K.AGGREGATE_COUNT)?.count;
    if (null == i) return null;
    let s = (0, k.S1)(n, [1, 2, 5])
        ? F.intl.formatToPlainString(F.t.HtifnG, { count: i })
        : F.intl.formatToPlainString(F.t["jq/Bmu"], { count: i });
    return (0, l.jsx)(q, { Icon: b.O, text: s });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (3 === n) return null;
    let i = (0, U.CZ)(t);
    return null == i || i === h.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, l.jsx)(q, { Icon: N.Y, text: F.intl.string(F.t.kAlUsy) });
}
function er(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (3 === n) return null;
    let i = O.default.extractTimestamp(t.extra.application_id);
    return c()().diff(c()(i), "days") > 7 ? null : (0, l.jsx)(q, { Icon: T.f, text: F.intl.string(F.t.vYuyWf) });
}
function ea(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: r } = z(),
        a = (0, U.Hd)(t) && 4 === r,
        o = a ? g.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, l.jsxs)("div", {
        className: B.fC,
        children: [
            (0, l.jsx)(j.U, { size: "xxs", color: o }),
            (0, l.jsx)(G.A, { entry: t, textColor: a ? "text-feedback-positive" : i, hovered: n, bold: !0 }),
        ],
    });
}
function eo(e) {
    let { entry: t } = e,
        n = (0, U.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, l.jsx)(q, { Icon: R.K, text: n });
}
function ec(e) {
    let { entry: t } = e,
        { defaultTextColor: n, location: i } = z();
    if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
    let { previewIcon: s, previewTextShort: r } = t.applicationWidgetPreview.previewData;
    return (0, l.jsxs)(Z, {
        children: [
            null != s &&
                (0, l.jsx)("div", {
                    className: B.dQ,
                    children: (0, l.jsx)(L.Ay, { src: s.proxyUrl, width: s.width, height: s.height, responsive: !0 }),
                }),
            (0, l.jsx)(p.E, {
                variant: "text-xs/normal",
                color: n,
                className: B.KT,
                scaleFontToUserSetting: 5 === i,
                children: r,
            }),
        ],
    });
}
function eu(e) {
    let t,
        { location: n, children: i, className: s } = e;
    return (
        (t = (0, k.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: g.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: g.A.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, l.jsx)(K.Provider, {
            value: { location: n, ...t },
            children: (0, l.jsx)("div", {
                className: a()(B.cV, { [B.u3]: 0 === n, [B.BQ]: (0, k.S1)(n, [1, 2]), [B.DY]: 3 === n }, s),
                children: i,
            }),
        })
    );
}
function ed(e) {
    let { entry: t, location: n, className: i } = e,
        s = (function (e) {
            switch (e.content_type) {
                case u.ContentInventoryEntryType.TOP_ARTIST:
                    return H[e.content_type].map((t, n) => (0, l.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.PLAYED_GAME:
                    return H[e.content_type].map((t, n) => (0, l.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.TOP_GAME:
                    return H[e.content_type].map((t, n) => (0, l.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.WATCHED_MEDIA:
                    return H[e.content_type].map((t, n) => (0, l.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return H[e.content_type].map((t, n) => (0, l.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == s ? null : (0, l.jsx)(eu, { location: n, className: i, children: s });
}
