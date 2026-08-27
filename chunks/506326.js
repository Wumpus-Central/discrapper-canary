"use strict";
n.d(t, {
    $X: () => eu,
    K7: () => es,
    MK: () => el,
    N5: () => Z,
    R_: () => et,
    Rq: () => ed,
    Xr: () => er,
    Xy: () => X,
    Y8: () => ea,
    Yq: () => em,
    Zc: () => ee,
    er: () => J,
    fM: () => $,
    fg: () => eo,
    iT: () => ep,
    iq: () => Q,
    mG: () => ef,
    sp: () => ei,
    tR: () => en,
    zi: () => ec,
});
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(536637),
    u = n.n(o),
    c = n(794248),
    d = n(598748),
    h = n(681154),
    m = n(974690),
    f = n(379834),
    p = n(866665),
    g = n(140735),
    x = n(834730),
    A = n(983851),
    C = n(661531),
    E = n(183623),
    I = n(323384),
    y = n(687966),
    S = n(177953),
    N = n(432017),
    v = n(246913),
    _ = n(291747),
    j = n(417270),
    T = n(768622),
    b = n(369606),
    R = n(825860),
    O = n(605323),
    M = n(748562),
    L = n(306788),
    k = n(531913),
    w = n(47167),
    P = n(927813),
    D = n(403362),
    U = n(935208),
    G = n(20805),
    V = n(202195),
    F = n(583846),
    H = n(299846),
    B = n(693879);
n(424994);
var W = n(375708),
    K = n(681978);
let z = {
    [h.ContentInventoryEntryType.TOP_ARTIST]: [ea],
    [h.ContentInventoryEntryType.PLAYED_GAME]: [Q, ee, X, eu, en, es, eo, ei, el],
    [h.ContentInventoryEntryType.TOP_GAME]: [er],
    [h.ContentInventoryEntryType.WATCHED_MEDIA]: [ec, ed],
    [h.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [Q, ee, X, eu, eo, el],
};
var Z =
    (((l = {})[(l.CARD = 0)] = "CARD"),
    (l[(l.POPOUT = 1)] = "POPOUT"),
    (l[(l.STREAMING_POPOUT = 2)] = "STREAMING_POPOUT"),
    (l[(l.GAME_PROFILE = 3)] = "GAME_PROFILE"),
    (l[(l.USER_PROFILE = 4)] = "USER_PROFILE"),
    (l[(l.EMBED = 5)] = "EMBED"),
    (l[(l.LEADERBOARD_POPOUT = 6)] = "LEADERBOARD_POPOUT"),
    (l[(l.OVERLAY = 7)] = "OVERLAY"),
    (l[(l.FRIENDS_POPOUT = 8)] = "FRIENDS_POPOUT"),
    (l[(l.APP_LAUNCHER = 9)] = "APP_LAUNCHER"),
    (l[(l.VOICE_USER_POPOUT = 10)] = "VOICE_USER_POPOUT"),
    l);
let Y = s.createContext({});
function q() {
    return s.useContext(Y);
}
function J(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)("div", { className: K.fC, ...n, children: t });
}
function $(e) {
    let { Icon: t, text: n, iconColor: l, tooltipText: s, showTooltip: r, a11yText: a } = e,
        { defaultTextColor: o, defaultIconColor: u, location: c } = q();
    return (0, i.jsx)(p.m, {
        text: s,
        shouldShow: r,
        children: (0, i.jsxs)(J, {
            children: [
                (0, i.jsx)(t, { size: "xxs", color: l ?? u }),
                null != a && (0, i.jsx)(g.A, { children: a }),
                (0, i.jsx)(x.E, {
                    variant: "text-xs/normal",
                    color: o,
                    className: K.KT,
                    scaleFontToUserSetting: 5 === c,
                    "aria-hidden": null != a || void 0,
                    children: n,
                }),
            ],
        }),
    });
}
function X(e) {
    let { entry: t } = e,
        { channel: n } = (0, V.A)(t),
        { location: l } = q(),
        s = (0, w.Ay)(n);
    return null == n || (0, D.S1)(l, [1, 2, 3, 4]) ? null : (0, i.jsx)($, { Icon: A.H, text: s });
}
function Q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: r } = q(),
        a = (0, F.Hd)(t) && (0, D.S1)(r, [0, 4, 7, 9]),
        o = a ? C.A.colors.TEXT_FEEDBACK_POSITIVE : s,
        { streamPreviewUrl: u } = (0, V.A)(t),
        c = null != u ? E.F : (0, G.yl)(t) ? I.k : y.GameControllerIcon;
    return (0, i.jsxs)(J, {
        children: [
            (0, i.jsx)(c, { size: "xxs", color: o }),
            (0, i.jsx)(B.A, {
                entry: t,
                textColor: a ? "text-feedback-positive" : l,
                hovered: n,
                scaleFontToUserSetting: 5 === r,
            }),
        ],
    });
}
function ee(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: l } = q(),
        { state: s, party: r } = (0, H.u)(t),
        a = (0, F.gF)(s, r);
    return null == a
        ? null
        : (0, i.jsxs)(J, {
              children: [
                  (0, i.jsx)(S.n, { size: "xxs", color: l }),
                  (0, i.jsx)(x.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: a }),
              ],
          });
}
function et(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: r } = q(),
        a = (0, F.Hd)(t) && (0, D.S1)(r, [0, 4]),
        o = a ? C.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: K.fC,
        children: [
            (0, i.jsx)(N.T, { size: "xxs", color: o }),
            (0, i.jsx)(B.A, { entry: t, textColor: a ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function en(e) {
    let { entry: t } = e,
        { location: n } = q(),
        l = (0, D.S1)(n, [0, 3]) ? C.A.colors.STATUS_POSITIVE : void 0;
    return (0, F.Rf)(t) ? (0, i.jsx)($, { Icon: v.P, text: W.intl.string(W.t.keY6mW), iconColor: l }) : null;
}
function el(e) {
    let { entry: t } = e,
        { location: n } = q();
    if (!(0, F.L7)(t)) return null;
    let l = (0, F.JM)(t),
        { text: s, tooltipText: r, a11yText: a } = (0, F.Pj)(t);
    return null == s
        ? null
        : (0, i.jsx)($, { Icon: _.x, text: s, tooltipText: r, showTooltip: 0 === n && !l, a11yText: a });
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = q(),
        l = 0 !== n,
        s = (0, F.KH)(t);
    if (null == s) return null;
    let r = (0, F.us)(s);
    return (0, i.jsx)($, {
        Icon: j.RetryIcon,
        showTooltip: !l,
        tooltipText: r,
        text: l ? r : W.intl.string(W.t.adnLsB),
    });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = q(),
        l = (0, F.iy)(t);
    return (0, F.BZ)(t)
        ? (0, i.jsx)($, {
              Icon: T.g,
              showTooltip: 0 === n,
              text: W.intl.formatToPlainString(W.t["Klie/P"], { days: l }),
              tooltipText: W.intl.formatToPlainString(W.t.PwMe0s, { days: l }),
              a11yText: W.intl.formatToPlainString(W.t.nVLPBf, { days: l }),
          })
        : null;
}
function er(e) {
    let { entry: t } = e,
        { location: n } = q(),
        l = 0 !== n,
        s = (0, F.ty)(t);
    if (null == s) return null;
    let r = l ? W.t.C0AxoR : W.t.SDRHgr;
    return (0, i.jsx)($, {
        Icon: b.TrophyIcon,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                W.intl.string(W.t["/50eHi"]),
                l ? " \u2014 " : ": ",
                W.intl.format(r, { hours: Math.round(s / P.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function ea(e) {
    let { entry: t } = e,
        { location: n } = q(),
        l = (0, F.Pv)(t, m.K.AGGREGATE_COUNT)?.count;
    if (null == l) return null;
    let s = (0, D.S1)(n, [1, 2, 5])
        ? W.intl.formatToPlainString(W.t.HtifnG, { count: l })
        : W.intl.formatToPlainString(W.t["jq/Bmu"], { count: l });
    return (0, i.jsx)($, { Icon: b.TrophyIcon, text: s });
}
function eo(e) {
    let { entry: t } = e,
        { location: n } = q();
    if (3 === n) return null;
    let l = (0, F.CZ)(t);
    return null == l || l === f.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, i.jsx)($, { Icon: R.FireIcon, text: W.intl.string(W.t.kAlUsy) });
}
function eu(e) {
    let { entry: t } = e,
        { location: n } = q();
    if (3 === n) return null;
    let l = U.default.extractTimestamp(t.extra.application_id);
    return u()().diff(u()(l), "days") > 7 ? null : (0, i.jsx)($, { Icon: O.f, text: W.intl.string(W.t.vYuyWf) });
}
function ec(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: r } = q(),
        a = (0, F.Hd)(t) && 4 === r,
        o = a ? C.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: K.fC,
        children: [
            (0, i.jsx)(M.U, { size: "xxs", color: o }),
            (0, i.jsx)(B.A, { entry: t, textColor: a ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function ed(e) {
    let { entry: t } = e,
        n = (0, F.kR)(t.extra.media_assets_large_text);
    if (null == n) return null;
    let l = (0, F.WC)(t.extra.media_assets_large_text);
    return (0, i.jsx)($, { Icon: L.K, text: n, a11yText: l });
}
function eh(e) {
    let { userId: t, widgetApplicationId: n } = e,
        { defaultTextColor: l } = q(),
        s = (0, k.A)(t, n),
        r = s.surfaceConfigs[d.m.ACTIVITY_ACCESSORY];
    return null != r && s.hasIdentity
        ? (0, i.jsx)(J, {
              children: (0, i.jsx)(c.kH, {
                  ...s,
                  surface: d.m.ACTIVITY_ACCESSORY,
                  surfaceConfig: r,
                  layoutProps: { variant: "badge", textColor: l },
              }),
          })
        : null;
}
function em(e) {
    let { entry: t } = e;
    return "applicationWidgetPreview" in t && null != t.applicationWidgetPreview
        ? (0, i.jsx)(eh, { userId: t.author_id, widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId })
        : null;
}
function ef(e) {
    let t,
        { location: n, children: l, className: s } = e;
    return (
        (t = (0, D.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: C.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: C.A.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, i.jsx)(Y.Provider, {
            value: { location: n, ...t },
            children: (0, i.jsx)("div", {
                className: a()(K.cV, { [K.u3]: 0 === n, [K.BQ]: (0, D.S1)(n, [1, 2, 10]), [K.DY]: 3 === n }, s),
                children: l,
            }),
        })
    );
}
function ep(e) {
    let { entry: t, location: n, className: l } = e,
        s = (function (e) {
            switch (e.content_type) {
                case h.ContentInventoryEntryType.TOP_ARTIST:
                    return z[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.PLAYED_GAME:
                    return z[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.TOP_GAME:
                    return z[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.WATCHED_MEDIA:
                    return z[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return z[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == s ? null : (0, i.jsx)(ef, { location: n, className: l, children: s });
}
