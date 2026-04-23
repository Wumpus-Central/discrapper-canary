"use strict";
n.d(t, {
    $X: () => ea,
    K7: () => en,
    MK: () => ee,
    N5: () => W,
    R_: () => Q,
    Rq: () => el,
    Xr: () => ei,
    Xy: () => q,
    Y8: () => er,
    Yq: () => ed,
    Zc: () => Z,
    er: () => z,
    fM: () => $,
    fg: () => es,
    iT: () => eu,
    iq: () => X,
    mG: () => e_,
    sp: () => et,
    tR: () => J,
    zi: () => eo,
});
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(989349),
    d = n.n(l),
    _ = n(681154),
    u = n(974690),
    c = n(379834),
    E = n(990078),
    h = n(834730),
    m = n(983851),
    f = n(661531),
    g = n(183623),
    p = n(323384),
    A = n(687966),
    I = n(177953),
    T = n(432017),
    S = n(246913),
    N = n(291747),
    C = n(417270),
    R = n(768622),
    O = n(369606),
    y = n(825860),
    v = n(605323),
    D = n(526181),
    L = n(306788),
    b = n(47167),
    w = n(619517),
    P = n(927813),
    k = n(403362),
    M = n(935208),
    U = n(20805),
    x = n(202195),
    G = n(583846),
    V = n(299846),
    F = n(85451);
n(424994);
var B = n(985018),
    H = n(164123);
let j = {
    [_.ContentInventoryEntryType.TOP_ARTIST]: [er],
    [_.ContentInventoryEntryType.PLAYED_GAME]: [X, Z, q, ea, J, en, es, et, ee],
    [_.ContentInventoryEntryType.TOP_GAME]: [ei],
    [_.ContentInventoryEntryType.WATCHED_MEDIA]: [eo, el],
    [_.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [X, Z, q, ea, es, ee],
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
let Y = s.createContext({});
function K() {
    return s.useContext(Y);
}
function z(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)("div", { className: H.fC, ...n, children: t });
}
function $(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: s, showTooltip: a } = e,
        { defaultTextColor: o, defaultIconColor: l, location: d } = K();
    return (0, r.jsx)(E.m, {
        text: s,
        shouldShow: a,
        children: (0, r.jsxs)(z, {
            children: [
                (0, r.jsx)(t, { size: "xxs", color: i ?? l }),
                (0, r.jsx)(h.E, {
                    variant: "text-xs/normal",
                    color: o,
                    className: H.KT,
                    scaleFontToUserSetting: 5 === d,
                    children: n,
                }),
            ],
        }),
    });
}
function q(e) {
    let { entry: t } = e,
        { channel: n } = (0, x.A)(t),
        { location: i } = K(),
        s = (0, b.Ay)(n);
    return null == n || (0, k.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)($, { Icon: m.H, text: s });
}
function X(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = K(),
        o = (0, G.Hd)(t) && (0, k.S1)(a, [0, 4, 7, 9]),
        l = o ? f.A.colors.TEXT_FEEDBACK_POSITIVE : s,
        { streamPreviewUrl: d } = (0, x.A)(t),
        _ = null != d ? g.F : (0, U.yl)(t) ? p.k : A._;
    return (0, r.jsxs)(z, {
        children: [
            (0, r.jsx)(_, { size: "xxs", color: l }),
            (0, r.jsx)(F.A, {
                entry: t,
                textColor: o ? "text-feedback-positive" : i,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === a,
            }),
        ],
    });
}
function Z(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = K(),
        { state: s, party: a } = (0, V.u)(t),
        o = (0, G.gF)(s, a);
    return null == o
        ? null
        : (0, r.jsxs)(z, {
              children: [
                  (0, r.jsx)(I.n, { size: "xxs", color: i }),
                  (0, r.jsx)(h.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: o }),
              ],
          });
}
function Q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = K(),
        o = (0, G.Hd)(t) && (0, k.S1)(a, [0, 4]),
        l = o ? f.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, r.jsxs)("div", {
        className: H.fC,
        children: [
            (0, r.jsx)(T.T, { size: "xxs", color: l }),
            (0, r.jsx)(F.A, { entry: t, textColor: o ? "text-feedback-positive" : i, hovered: n, bold: !0 }),
        ],
    });
}
function J(e) {
    let { entry: t } = e,
        { location: n } = K(),
        i = (0, k.S1)(n, [0, 3]) ? f.A.colors.STATUS_POSITIVE : void 0;
    return (0, G.Rf)(t) ? (0, r.jsx)($, { Icon: S.P, text: B.intl.string(B.t.keY6mW), iconColor: i }) : null;
}
function ee(e) {
    let { entry: t } = e,
        { location: n } = K();
    if (!(0, G.L7)(t)) return null;
    let i = (0, G.JM)(t),
        { text: s, tooltipText: a } = (0, G.Pj)(t);
    return null == s ? null : (0, r.jsx)($, { Icon: N.x, text: s, tooltipText: a, showTooltip: 0 === n && !i });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = K(),
        i = 0 !== n,
        s = (0, G.KH)(t);
    if (null == s) return null;
    let a = (0, G.us)(s);
    return (0, r.jsx)($, { Icon: C.m, showTooltip: !i, tooltipText: a, text: i ? a : B.intl.string(B.t.adnLsB) });
}
function en(e) {
    let { entry: t } = e,
        { location: n } = K(),
        i = (0, G.iy)(t);
    return (0, G.BZ)(t)
        ? (0, r.jsx)($, {
              Icon: R.g,
              showTooltip: 0 === n,
              text: B.intl.formatToPlainString(B.t["Klie/P"], { days: i }),
              tooltipText: B.intl.formatToPlainString(B.t.PwMe0s, { days: i }),
          })
        : null;
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = K(),
        i = 0 !== n,
        s = (0, G.ty)(t);
    if (null == s) return null;
    let a = i ? B.t.C0AxoR : B.t.SDRHgr;
    return (0, r.jsx)($, {
        Icon: O.O,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                B.intl.string(B.t["/50eHi"]),
                i ? " — " : ": ",
                B.intl.format(a, { hours: Math.round(s / P.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function er(e) {
    let { entry: t } = e,
        { location: n } = K(),
        i = (0, G.Pv)(t, u.K.AGGREGATE_COUNT)?.count;
    if (null == i) return null;
    let s = (0, k.S1)(n, [1, 2, 5])
        ? B.intl.formatToPlainString(B.t.HtifnG, { count: i })
        : B.intl.formatToPlainString(B.t["jq/Bmu"], { count: i });
    return (0, r.jsx)($, { Icon: O.O, text: s });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = K();
    if (3 === n) return null;
    let i = (0, G.CZ)(t);
    return null == i || i === c.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)($, { Icon: y.Y, text: B.intl.string(B.t.kAlUsy) });
}
function ea(e) {
    let { entry: t } = e,
        { location: n } = K();
    if (3 === n) return null;
    let i = M.default.extractTimestamp(t.extra.application_id);
    return d()().diff(d()(i), "days") > 7 ? null : (0, r.jsx)($, { Icon: v.f, text: B.intl.string(B.t.vYuyWf) });
}
function eo(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = K(),
        o = (0, G.Hd)(t) && 4 === a,
        l = o ? f.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, r.jsxs)("div", {
        className: H.fC,
        children: [
            (0, r.jsx)(D.U, { size: "xxs", color: l }),
            (0, r.jsx)(F.A, { entry: t, textColor: o ? "text-feedback-positive" : i, hovered: n, bold: !0 }),
        ],
    });
}
function el(e) {
    let { entry: t } = e,
        n = (0, G.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, r.jsx)($, { Icon: L.K, text: n });
}
function ed(e) {
    let { entry: t } = e,
        { defaultTextColor: n, location: i } = K();
    if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
    let { previewIcon: s, previewTextShort: a } = t.applicationWidgetPreview.previewData;
    return (0, r.jsxs)(z, {
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: H.dQ,
                    children: (0, r.jsx)(w.Ay, { src: s.proxyUrl, width: s.width, height: s.height, responsive: !0 }),
                }),
            (0, r.jsx)(h.E, {
                variant: "text-xs/normal",
                color: n,
                className: H.KT,
                scaleFontToUserSetting: 5 === i,
                children: a,
            }),
        ],
    });
}
function e_(e) {
    let t,
        { location: n, children: i, className: s } = e;
    return (
        (t = (0, k.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: f.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: f.A.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, r.jsx)(Y.Provider, {
            value: { location: n, ...t },
            children: (0, r.jsx)("div", {
                className: o()(H.cV, { [H.u3]: 0 === n, [H.BQ]: (0, k.S1)(n, [1, 2]), [H.DY]: 3 === n }, s),
                children: i,
            }),
        })
    );
}
function eu(e) {
    let { entry: t, location: n, className: i } = e,
        s = (function (e) {
            switch (e.content_type) {
                case _.ContentInventoryEntryType.TOP_ARTIST:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.PLAYED_GAME:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.TOP_GAME:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.WATCHED_MEDIA:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case _.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == s ? null : (0, r.jsx)(e_, { location: n, className: i, children: s });
}
