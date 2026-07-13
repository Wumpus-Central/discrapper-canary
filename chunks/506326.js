"use strict";
n.d(t, {
    $X: () => eo,
    K7: () => er,
    MK: () => en,
    N5: () => K,
    R_: () => ee,
    Rq: () => ec,
    Xr: () => ea,
    Xy: () => X,
    Y8: () => es,
    Yq: () => e_,
    Zc: () => J,
    er: () => q,
    fM: () => Z,
    fg: () => el,
    iT: () => eA,
    iq: () => Q,
    mG: () => eE,
    sp: () => ei,
    tR: () => et,
    zi: () => ed,
});
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(989349),
    d = n.n(o),
    c = n(284513),
    u = n(598748),
    _ = n(681154),
    E = n(974690),
    A = n(379834),
    h = n(990078),
    I = n(834730),
    f = n(983851),
    p = n(661531),
    T = n(183623),
    m = n(323384),
    g = n(687966),
    S = n(177953),
    N = n(432017),
    C = n(246913),
    O = n(291747),
    R = n(417270),
    L = n(768622),
    D = n(369606),
    y = n(825860),
    v = n(605323),
    b = n(748562),
    M = n(306788),
    P = n(531913),
    U = n(47167),
    w = n(927813),
    G = n(403362),
    x = n(935208),
    k = n(20805),
    F = n(202195),
    V = n(583846),
    B = n(299846),
    H = n(693879);
n(424994);
var j = n(375708),
    W = n(164123);
let Y = {
    [_.ContentInventoryEntryType.TOP_ARTIST]: [es],
    [_.ContentInventoryEntryType.PLAYED_GAME]: [Q, J, X, eo, et, er, el, ei, en],
    [_.ContentInventoryEntryType.TOP_GAME]: [ea],
    [_.ContentInventoryEntryType.WATCHED_MEDIA]: [ed, ec],
    [_.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [Q, J, X, eo, el, en],
};
var K =
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
let $ = a.createContext({});
function z() {
    return a.useContext($);
}
function q(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)("div", { className: W.fC, ...n, children: t });
}
function Z(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: a, showTooltip: s } = e,
        { defaultTextColor: l, defaultIconColor: o, location: d } = z();
    return (0, r.jsx)(h.m, {
        text: a,
        shouldShow: s,
        children: (0, r.jsxs)(q, {
            children: [
                (0, r.jsx)(t, { size: "xxs", color: i ?? o }),
                (0, r.jsx)(I.E, {
                    variant: "text-xs/normal",
                    color: l,
                    className: W.KT,
                    scaleFontToUserSetting: 5 === d,
                    children: n,
                }),
            ],
        }),
    });
}
function X(e) {
    let { entry: t } = e,
        { channel: n } = (0, F.A)(t),
        { location: i } = z(),
        a = (0, U.Ay)(n);
    return null == n || (0, G.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)(Z, { Icon: f.H, text: a });
}
function Q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = z(),
        l = (0, V.Hd)(t) && (0, G.S1)(s, [0, 4, 7, 9]),
        o = l ? p.A.colors.TEXT_FEEDBACK_POSITIVE : a,
        { streamPreviewUrl: d } = (0, F.A)(t),
        c = null != d ? T.F : (0, k.yl)(t) ? m.k : g._;
    return (0, r.jsxs)(q, {
        children: [
            (0, r.jsx)(c, { size: "xxs", color: o }),
            (0, r.jsx)(H.A, {
                entry: t,
                textColor: l ? "text-feedback-positive" : i,
                hovered: n,
                scaleFontToUserSetting: 5 === s,
            }),
        ],
    });
}
function J(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = z(),
        { state: a, party: s } = (0, B.u)(t),
        l = (0, V.gF)(a, s);
    return null == l
        ? null
        : (0, r.jsxs)(q, {
              children: [
                  (0, r.jsx)(S.n, { size: "xxs", color: i }),
                  (0, r.jsx)(I.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: l }),
              ],
          });
}
function ee(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = z(),
        l = (0, V.Hd)(t) && (0, G.S1)(s, [0, 4]),
        o = l ? p.A.colors.TEXT_FEEDBACK_POSITIVE : a;
    return (0, r.jsxs)("div", {
        className: W.fC,
        children: [
            (0, r.jsx)(N.T, { size: "xxs", color: o }),
            (0, r.jsx)(H.A, { entry: t, textColor: l ? "text-feedback-positive" : i, hovered: n }),
        ],
    });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = (0, G.S1)(n, [0, 3]) ? p.A.colors.STATUS_POSITIVE : void 0;
    return (0, V.Rf)(t) ? (0, r.jsx)(Z, { Icon: C.P, text: j.intl.string(j.t.keY6mW), iconColor: i }) : null;
}
function en(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (!(0, V.L7)(t)) return null;
    let i = (0, V.JM)(t),
        { text: a, tooltipText: s } = (0, V.Pj)(t);
    return null == a ? null : (0, r.jsx)(Z, { Icon: O.x, text: a, tooltipText: s, showTooltip: 0 === n && !i });
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = 0 !== n,
        a = (0, V.KH)(t);
    if (null == a) return null;
    let s = (0, V.us)(a);
    return (0, r.jsx)(Z, { Icon: R.m, showTooltip: !i, tooltipText: s, text: i ? s : j.intl.string(j.t.adnLsB) });
}
function er(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = (0, V.iy)(t);
    return (0, V.BZ)(t)
        ? (0, r.jsx)(Z, {
              Icon: L.g,
              showTooltip: 0 === n,
              text: j.intl.formatToPlainString(j.t["Klie/P"], { days: i }),
              tooltipText: j.intl.formatToPlainString(j.t.PwMe0s, { days: i }),
          })
        : null;
}
function ea(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = 0 !== n,
        a = (0, V.ty)(t);
    if (null == a) return null;
    let s = i ? j.t.C0AxoR : j.t.SDRHgr;
    return (0, r.jsx)(Z, {
        Icon: D.O,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                j.intl.string(j.t["/50eHi"]),
                i ? " \u2014 " : ": ",
                j.intl.format(s, { hours: Math.round(a / w.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = z(),
        i = (0, V.Pv)(t, E.K.AGGREGATE_COUNT)?.count;
    if (null == i) return null;
    let a = (0, G.S1)(n, [1, 2, 5])
        ? j.intl.formatToPlainString(j.t.HtifnG, { count: i })
        : j.intl.formatToPlainString(j.t["jq/Bmu"], { count: i });
    return (0, r.jsx)(Z, { Icon: D.O, text: a });
}
function el(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (3 === n) return null;
    let i = (0, V.CZ)(t);
    return null == i || i === A.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(Z, { Icon: y.Y, text: j.intl.string(j.t.kAlUsy) });
}
function eo(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (3 === n) return null;
    let i = x.default.extractTimestamp(t.extra.application_id);
    return d()().diff(d()(i), "days") > 7 ? null : (0, r.jsx)(Z, { Icon: v.f, text: j.intl.string(j.t.vYuyWf) });
}
function ed(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = z(),
        l = (0, V.Hd)(t) && 4 === s,
        o = l ? p.A.colors.TEXT_FEEDBACK_POSITIVE : a;
    return (0, r.jsxs)("div", {
        className: W.fC,
        children: [
            (0, r.jsx)(b.U, { size: "xxs", color: o }),
            (0, r.jsx)(H.A, { entry: t, textColor: l ? "text-feedback-positive" : i, hovered: n }),
        ],
    });
}
function ec(e) {
    let { entry: t } = e,
        n = (0, V.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, r.jsx)(Z, { Icon: M.K, text: n });
}
function eu(e) {
    let { userId: t, widgetApplicationId: n } = e,
        { defaultTextColor: i } = z(),
        a = (0, P.A)(t, n),
        s = a.surfaceConfigs[u.m.ACTIVITY_ACCESSORY];
    return null != s && a.hasIdentity
        ? (0, r.jsx)(q, {
              children: (0, r.jsx)(c.kH, {
                  ...a,
                  surface: u.m.ACTIVITY_ACCESSORY,
                  surfaceConfig: s,
                  layoutProps: { variant: "badge", textColor: i },
              }),
          })
        : null;
}
function e_(e) {
    let { entry: t } = e;
    return "applicationWidgetPreview" in t && null != t.applicationWidgetPreview
        ? (0, r.jsx)(eu, { userId: t.author_id, widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId })
        : null;
}
function eE(e) {
    let t,
        { location: n, children: i, className: a } = e;
    return (
        (t = (0, G.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: p.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: p.A.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, r.jsx)($.Provider, {
            value: { location: n, ...t },
            children: (0, r.jsx)("div", {
                className: l()(W.cV, { [W.u3]: 0 === n, [W.BQ]: (0, G.S1)(n, [1, 2, 10]), [W.DY]: 3 === n }, a),
                children: i,
            }),
        })
    );
}
function eA(e) {
    let { entry: t, location: n, className: i } = e,
        a = (function (e) {
            switch (e.content_type) {
                case _.ContentInventoryEntryType.TOP_ARTIST:
                    return Y[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.PLAYED_GAME:
                    return Y[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.TOP_GAME:
                    return Y[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.WATCHED_MEDIA:
                    return Y[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return Y[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == a ? null : (0, r.jsx)(eE, { location: n, className: i, children: a });
}
