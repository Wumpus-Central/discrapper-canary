"use strict";
n.d(t, {
    $X: () => ea,
    K7: () => en,
    MK: () => ee,
    N5: () => W,
    R_: () => $,
    Rq: () => eo,
    Xr: () => el,
    Xy: () => J,
    Y8: () => ei,
    Yq: () => ec,
    Zc: () => X,
    er: () => Z,
    fM: () => q,
    fg: () => es,
    iT: () => ed,
    iq: () => Y,
    mG: () => eu,
    sp: () => et,
    tR: () => Q,
    zi: () => er,
});
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(989349),
    c = n.n(o),
    u = n(681154),
    d = n(974690),
    h = n(379834),
    m = n(990078),
    p = n(834730),
    f = n(983851),
    g = n(661531),
    _ = n(183623),
    x = n(323384),
    C = n(687966),
    A = n(177953),
    E = n(432017),
    I = n(246913),
    v = n(291747),
    y = n(417270),
    b = n(768622),
    S = n(369606),
    N = n(825860),
    j = n(605323),
    T = n(526181),
    w = n(306788),
    R = n(47167),
    L = n(619517),
    k = n(927813),
    M = n(403362),
    O = n(935208),
    P = n(20805),
    D = n(202195),
    U = n(583846),
    V = n(299846),
    G = n(85451);
n(424994);
var F = n(985018),
    B = n(164123);
let H = {
    [u.ContentInventoryEntryType.TOP_ARTIST]: [ei],
    [u.ContentInventoryEntryType.PLAYED_GAME]: [Y, X, J, ea, Q, en, es, et, ee],
    [u.ContentInventoryEntryType.TOP_GAME]: [el],
    [u.ContentInventoryEntryType.WATCHED_MEDIA]: [er, eo],
    [u.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [Y, X, J, ea, es, ee],
};
var W =
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
let K = s.createContext({});
function z() {
    return s.useContext(K);
}
function Z(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)("div", { className: B.fC, ...n, children: t });
}
function q(e) {
    let { Icon: t, text: n, iconColor: l, tooltipText: s, showTooltip: a } = e,
        { defaultTextColor: r, defaultIconColor: o, location: c } = z();
    return (0, i.jsx)(m.m, {
        text: s,
        shouldShow: a,
        children: (0, i.jsxs)(Z, {
            children: [
                (0, i.jsx)(t, { size: "xxs", color: l ?? o }),
                (0, i.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: r,
                    className: B.KT,
                    scaleFontToUserSetting: 5 === c,
                    children: n,
                }),
            ],
        }),
    });
}
function J(e) {
    let { entry: t } = e,
        { channel: n } = (0, D.A)(t),
        { location: l } = z(),
        s = (0, R.Ay)(n);
    return null == n || (0, M.S1)(l, [1, 2, 3, 4]) ? null : (0, i.jsx)(q, { Icon: f.H, text: s });
}
function Y(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: a } = z(),
        r = (0, U.Hd)(t) && (0, M.S1)(a, [0, 4, 7, 9]),
        o = r ? g.A.colors.TEXT_FEEDBACK_POSITIVE : s,
        { streamPreviewUrl: c } = (0, D.A)(t),
        u = null != c ? _.F : (0, P.yl)(t) ? x.k : C._;
    return (0, i.jsxs)(Z, {
        children: [
            (0, i.jsx)(u, { size: "xxs", color: o }),
            (0, i.jsx)(G.A, {
                entry: t,
                textColor: r ? "text-feedback-positive" : l,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === a,
            }),
        ],
    });
}
function X(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: l } = z(),
        { state: s, party: a } = (0, V.u)(t),
        r = (0, U.gF)(s, a);
    return null == r
        ? null
        : (0, i.jsxs)(Z, {
              children: [
                  (0, i.jsx)(A.n, { size: "xxs", color: l }),
                  (0, i.jsx)(p.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: r }),
              ],
          });
}
function $(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: a } = z(),
        r = (0, U.Hd)(t) && (0, M.S1)(a, [0, 4]),
        o = r ? g.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: B.fC,
        children: [
            (0, i.jsx)(E.T, { size: "xxs", color: o }),
            (0, i.jsx)(G.A, { entry: t, textColor: r ? "text-feedback-positive" : l, hovered: n, bold: !0 }),
        ],
    });
}
function Q(e) {
    let { entry: t } = e,
        { location: n } = z(),
        l = (0, M.S1)(n, [0, 3]) ? g.A.colors.STATUS_POSITIVE : void 0;
    return (0, U.Rf)(t) ? (0, i.jsx)(q, { Icon: I.P, text: F.intl.string(F.t.keY6mW), iconColor: l }) : null;
}
function ee(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (!(0, U.L7)(t)) return null;
    let l = (0, U.JM)(t),
        { text: s, tooltipText: a } = (0, U.Pj)(t);
    return null == s ? null : (0, i.jsx)(q, { Icon: v.x, text: s, tooltipText: a, showTooltip: 0 === n && !l });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = z(),
        l = 0 !== n,
        s = (0, U.KH)(t);
    if (null == s) return null;
    let a = (0, U.us)(s);
    return (0, i.jsx)(q, { Icon: y.m, showTooltip: !l, tooltipText: a, text: l ? a : F.intl.string(F.t.adnLsB) });
}
function en(e) {
    let { entry: t } = e,
        { location: n } = z(),
        l = (0, U.iy)(t);
    return (0, U.BZ)(t)
        ? (0, i.jsx)(q, {
              Icon: b.g,
              showTooltip: 0 === n,
              text: F.intl.formatToPlainString(F.t["Klie/P"], { days: l }),
              tooltipText: F.intl.formatToPlainString(F.t.PwMe0s, { days: l }),
          })
        : null;
}
function el(e) {
    let { entry: t } = e,
        { location: n } = z(),
        l = 0 !== n,
        s = (0, U.ty)(t);
    if (null == s) return null;
    let a = l ? F.t.C0AxoR : F.t.SDRHgr;
    return (0, i.jsx)(q, {
        Icon: S.O,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                F.intl.string(F.t["/50eHi"]),
                l ? " — " : ": ",
                F.intl.format(a, { hours: Math.round(s / k.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = z(),
        l = (0, U.Pv)(t, d.K.AGGREGATE_COUNT)?.count;
    if (null == l) return null;
    let s = (0, M.S1)(n, [1, 2, 5])
        ? F.intl.formatToPlainString(F.t.HtifnG, { count: l })
        : F.intl.formatToPlainString(F.t["jq/Bmu"], { count: l });
    return (0, i.jsx)(q, { Icon: S.O, text: s });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (3 === n) return null;
    let l = (0, U.CZ)(t);
    return null == l || l === h.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, i.jsx)(q, { Icon: N.Y, text: F.intl.string(F.t.kAlUsy) });
}
function ea(e) {
    let { entry: t } = e,
        { location: n } = z();
    if (3 === n) return null;
    let l = O.default.extractTimestamp(t.extra.application_id);
    return c()().diff(c()(l), "days") > 7 ? null : (0, i.jsx)(q, { Icon: j.f, text: F.intl.string(F.t.vYuyWf) });
}
function er(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: s, location: a } = z(),
        r = (0, U.Hd)(t) && 4 === a,
        o = r ? g.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: B.fC,
        children: [
            (0, i.jsx)(T.U, { size: "xxs", color: o }),
            (0, i.jsx)(G.A, { entry: t, textColor: r ? "text-feedback-positive" : l, hovered: n, bold: !0 }),
        ],
    });
}
function eo(e) {
    let { entry: t } = e,
        n = (0, U.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, i.jsx)(q, { Icon: w.K, text: n });
}
function ec(e) {
    let { entry: t } = e,
        { defaultTextColor: n, location: l } = z();
    if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
    let { previewIcon: s, previewTextShort: a } = t.applicationWidgetPreview.previewData;
    return (0, i.jsxs)(Z, {
        children: [
            null != s &&
                (0, i.jsx)("div", {
                    className: B.dQ,
                    children: (0, i.jsx)(L.Ay, { src: s.proxyUrl, width: s.width, height: s.height, responsive: !0 }),
                }),
            (0, i.jsx)(p.E, {
                variant: "text-xs/normal",
                color: n,
                className: B.KT,
                scaleFontToUserSetting: 5 === l,
                children: a,
            }),
        ],
    });
}
function eu(e) {
    let t,
        { location: n, children: l, className: s } = e;
    return (
        (t = (0, M.S1)(n, [1, 5, 6])
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
        (0, i.jsx)(K.Provider, {
            value: { location: n, ...t },
            children: (0, i.jsx)("div", {
                className: r()(B.cV, { [B.u3]: 0 === n, [B.BQ]: (0, M.S1)(n, [1, 2]), [B.DY]: 3 === n }, s),
                children: l,
            }),
        })
    );
}
function ed(e) {
    let { entry: t, location: n, className: l } = e,
        s = (function (e) {
            switch (e.content_type) {
                case u.ContentInventoryEntryType.TOP_ARTIST:
                    return H[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.PLAYED_GAME:
                    return H[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.TOP_GAME:
                    return H[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.WATCHED_MEDIA:
                    return H[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case u.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return H[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == s ? null : (0, i.jsx)(eu, { location: n, className: l, children: s });
}
