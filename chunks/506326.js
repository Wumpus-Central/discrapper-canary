"use strict";
n.d(t, {
    $X: () => eo,
    K7: () => ei,
    MK: () => en,
    N5: () => z,
    R_: () => ee,
    Rq: () => ec,
    Xr: () => es,
    Xy: () => $,
    Y8: () => er,
    Yq: () => eh,
    Zc: () => Q,
    er: () => q,
    fM: () => J,
    fg: () => ea,
    iT: () => ef,
    iq: () => X,
    mG: () => em,
    sp: () => el,
    tR: () => et,
    zi: () => eu,
});
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(989349),
    u = n.n(o),
    c = n(794248),
    d = n(598748),
    h = n(681154),
    m = n(974690),
    f = n(379834),
    p = n(866665),
    g = n(834730),
    x = n(983851),
    A = n(661531),
    C = n(183623),
    E = n(323384),
    I = n(687966),
    y = n(177953),
    v = n(432017),
    S = n(246913),
    N = n(291747),
    _ = n(417270),
    T = n(768622),
    j = n(369606),
    b = n(825860),
    R = n(605323),
    O = n(748562),
    M = n(306788),
    w = n(531913),
    L = n(47167),
    k = n(927813),
    P = n(403362),
    D = n(935208),
    U = n(20805),
    G = n(202195),
    V = n(583846),
    F = n(299846),
    H = n(693879);
n(424994);
var B = n(375708),
    W = n(403523);
let K = {
    [h.ContentInventoryEntryType.TOP_ARTIST]: [er],
    [h.ContentInventoryEntryType.PLAYED_GAME]: [X, Q, $, eo, et, ei, ea, el, en],
    [h.ContentInventoryEntryType.TOP_GAME]: [es],
    [h.ContentInventoryEntryType.WATCHED_MEDIA]: [eu, ec],
    [h.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [X, Q, $, eo, ea, en],
};
var z =
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
let Z = s.createContext({});
function Y() {
    return s.useContext(Z);
}
function q(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)("div", { className: W.fC, ...n, children: t });
}
function J(e) {
    let { Icon: t, text: n, iconColor: l, tooltipText: s, showTooltip: r } = e,
        { defaultTextColor: a, defaultIconColor: o, location: u } = Y();
    return (0, i.jsx)(p.m, {
        text: s,
        shouldShow: r,
        children: (0, i.jsxs)(q, {
            children: [
                (0, i.jsx)(t, { size: "xxs", color: l ?? o }),
                (0, i.jsx)(g.E, {
                    variant: "text-xs/normal",
                    color: a,
                    className: W.KT,
                    scaleFontToUserSetting: 5 === u,
                    children: n,
                }),
            ],
        }),
    });
}
function $(e) {
    let { entry: t } = e,
        { channel: n } = (0, G.A)(t),
        { location: l } = Y(),
        s = (0, L.Ay)(n);
    return null == n || (0, P.S1)(l, [1, 2, 3, 4]) ? null : (0, i.jsx)(J, { Icon: x.H, text: s });
}
function X(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: r } = Y(),
        a = (0, V.Hd)(t) && (0, P.S1)(r, [0, 4, 7, 9]),
        o = a ? A.A.colors.TEXT_FEEDBACK_POSITIVE : s,
        { streamPreviewUrl: u } = (0, G.A)(t),
        c = null != u ? C.F : (0, U.yl)(t) ? E.k : I.GameControllerIcon;
    return (0, i.jsxs)(q, {
        children: [
            (0, i.jsx)(c, { size: "xxs", color: o }),
            (0, i.jsx)(H.A, {
                entry: t,
                textColor: a ? "text-feedback-positive" : l,
                hovered: n,
                scaleFontToUserSetting: 5 === r,
            }),
        ],
    });
}
function Q(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: l } = Y(),
        { state: s, party: r } = (0, F.u)(t),
        a = (0, V.gF)(s, r);
    return null == a
        ? null
        : (0, i.jsxs)(q, {
              children: [
                  (0, i.jsx)(y.n, { size: "xxs", color: l }),
                  (0, i.jsx)(g.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: a }),
              ],
          });
}
function ee(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: r } = Y(),
        a = (0, V.Hd)(t) && (0, P.S1)(r, [0, 4]),
        o = a ? A.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: W.fC,
        children: [
            (0, i.jsx)(v.T, { size: "xxs", color: o }),
            (0, i.jsx)(H.A, { entry: t, textColor: a ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = Y(),
        l = (0, P.S1)(n, [0, 3]) ? A.A.colors.STATUS_POSITIVE : void 0;
    return (0, V.Rf)(t) ? (0, i.jsx)(J, { Icon: S.P, text: B.intl.string(B.t.keY6mW), iconColor: l }) : null;
}
function en(e) {
    let { entry: t } = e,
        { location: n } = Y();
    if (!(0, V.L7)(t)) return null;
    let l = (0, V.JM)(t),
        { text: s, tooltipText: r } = (0, V.Pj)(t);
    return null == s ? null : (0, i.jsx)(J, { Icon: N.x, text: s, tooltipText: r, showTooltip: 0 === n && !l });
}
function el(e) {
    let { entry: t } = e,
        { location: n } = Y(),
        l = 0 !== n,
        s = (0, V.KH)(t);
    if (null == s) return null;
    let r = (0, V.us)(s);
    return (0, i.jsx)(J, {
        Icon: _.RetryIcon,
        showTooltip: !l,
        tooltipText: r,
        text: l ? r : B.intl.string(B.t.adnLsB),
    });
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = Y(),
        l = (0, V.iy)(t);
    return (0, V.BZ)(t)
        ? (0, i.jsx)(J, {
              Icon: T.g,
              showTooltip: 0 === n,
              text: B.intl.formatToPlainString(B.t["Klie/P"], { days: l }),
              tooltipText: B.intl.formatToPlainString(B.t.PwMe0s, { days: l }),
          })
        : null;
}
function es(e) {
    let { entry: t } = e,
        { location: n } = Y(),
        l = 0 !== n,
        s = (0, V.ty)(t);
    if (null == s) return null;
    let r = l ? B.t.C0AxoR : B.t.SDRHgr;
    return (0, i.jsx)(J, {
        Icon: j.TrophyIcon,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                B.intl.string(B.t["/50eHi"]),
                l ? " \u2014 " : ": ",
                B.intl.format(r, { hours: Math.round(s / k.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function er(e) {
    let { entry: t } = e,
        { location: n } = Y(),
        l = (0, V.Pv)(t, m.K.AGGREGATE_COUNT)?.count;
    if (null == l) return null;
    let s = (0, P.S1)(n, [1, 2, 5])
        ? B.intl.formatToPlainString(B.t.HtifnG, { count: l })
        : B.intl.formatToPlainString(B.t["jq/Bmu"], { count: l });
    return (0, i.jsx)(J, { Icon: j.TrophyIcon, text: s });
}
function ea(e) {
    let { entry: t } = e,
        { location: n } = Y();
    if (3 === n) return null;
    let l = (0, V.CZ)(t);
    return null == l || l === f.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, i.jsx)(J, { Icon: b.FireIcon, text: B.intl.string(B.t.kAlUsy) });
}
function eo(e) {
    let { entry: t } = e,
        { location: n } = Y();
    if (3 === n) return null;
    let l = D.default.extractTimestamp(t.extra.application_id);
    return u()().diff(u()(l), "days") > 7 ? null : (0, i.jsx)(J, { Icon: R.f, text: B.intl.string(B.t.vYuyWf) });
}
function eu(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: r } = Y(),
        a = (0, V.Hd)(t) && 4 === r,
        o = a ? A.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: W.fC,
        children: [
            (0, i.jsx)(O.U, { size: "xxs", color: o }),
            (0, i.jsx)(H.A, { entry: t, textColor: a ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function ec(e) {
    let { entry: t } = e,
        n = (0, V.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, i.jsx)(J, { Icon: M.K, text: n });
}
function ed(e) {
    let { userId: t, widgetApplicationId: n } = e,
        { defaultTextColor: l } = Y(),
        s = (0, w.A)(t, n),
        r = s.surfaceConfigs[d.m.ACTIVITY_ACCESSORY];
    return null != r && s.hasIdentity
        ? (0, i.jsx)(q, {
              children: (0, i.jsx)(c.kH, {
                  ...s,
                  surface: d.m.ACTIVITY_ACCESSORY,
                  surfaceConfig: r,
                  layoutProps: { variant: "badge", textColor: l },
              }),
          })
        : null;
}
function eh(e) {
    let { entry: t } = e;
    return "applicationWidgetPreview" in t && null != t.applicationWidgetPreview
        ? (0, i.jsx)(ed, { userId: t.author_id, widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId })
        : null;
}
function em(e) {
    let t,
        { location: n, children: l, className: s } = e;
    return (
        (t = (0, P.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: A.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: A.A.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, i.jsx)(Z.Provider, {
            value: { location: n, ...t },
            children: (0, i.jsx)("div", {
                className: a()(W.cV, { [W.u3]: 0 === n, [W.BQ]: (0, P.S1)(n, [1, 2, 10]), [W.DY]: 3 === n }, s),
                children: l,
            }),
        })
    );
}
function ef(e) {
    let { entry: t, location: n, className: l } = e,
        s = (function (e) {
            switch (e.content_type) {
                case h.ContentInventoryEntryType.TOP_ARTIST:
                    return K[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.PLAYED_GAME:
                    return K[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.TOP_GAME:
                    return K[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.WATCHED_MEDIA:
                    return K[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case h.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return K[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == s ? null : (0, i.jsx)(em, { location: n, className: l, children: s });
}
