"use strict";
n.d(t, {
    $X: () => ea,
    K7: () => en,
    MK: () => ee,
    N5: () => Y,
    R_: () => Z,
    Rq: () => el,
    Xr: () => er,
    Xy: () => q,
    Y8: () => ei,
    Yq: () => eu,
    Zc: () => Q,
    er: () => $,
    fM: () => z,
    fg: () => es,
    iT: () => ed,
    iq: () => X,
    mG: () => ec,
    sp: () => et,
    tR: () => J,
    zi: () => eo,
});
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(989349),
    u = n.n(l),
    c = n(681154),
    d = n(974690),
    _ = n(379834),
    f = n(990078),
    p = n(834730),
    h = n(983851),
    E = n(827734),
    m = n(183623),
    g = n(323384),
    A = n(687966),
    I = n(177953),
    T = n(432017),
    S = n(246913),
    y = n(291747),
    N = n(417270),
    v = n(768622),
    C = n(369606),
    O = n(825860),
    R = n(605323),
    b = n(526181),
    D = n(306788),
    L = n(47167),
    w = n(619517),
    M = n(927813),
    P = n(403362),
    x = n(661191),
    k = n(20805),
    U = n(202195),
    G = n(583846),
    F = n(299846),
    V = n(693879);
n(424994);
var B = n(985018),
    H = n(164123);
let j = {
    [c.ContentInventoryEntryType.TOP_ARTIST]: [ei],
    [c.ContentInventoryEntryType.PLAYED_GAME]: [X, Q, q, ea, J, en, es, et, ee],
    [c.ContentInventoryEntryType.TOP_GAME]: [er],
    [c.ContentInventoryEntryType.WATCHED_MEDIA]: [eo, el],
    [c.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [X, Q, q, ea, es, ee],
};
var Y =
    (((r = {})[(r.CARD = 0)] = "CARD"),
    (r[(r.POPOUT = 1)] = "POPOUT"),
    (r[(r.STREAMING_POPOUT = 2)] = "STREAMING_POPOUT"),
    (r[(r.GAME_PROFILE = 3)] = "GAME_PROFILE"),
    (r[(r.USER_PROFILE = 4)] = "USER_PROFILE"),
    (r[(r.EMBED = 5)] = "EMBED"),
    (r[(r.LEADERBOARD_POPOUT = 6)] = "LEADERBOARD_POPOUT"),
    (r[(r.OVERLAY = 7)] = "OVERLAY"),
    (r[(r.FRIENDS_POPOUT = 8)] = "FRIENDS_POPOUT"),
    (r[(r.APP_LAUNCHER = 9)] = "APP_LAUNCHER"),
    (r[(r.VOICE_USER_POPOUT = 10)] = "VOICE_USER_POPOUT"),
    r);
let W = s.createContext({});
function K() {
    return s.useContext(W);
}
function $(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)("div", { className: H.fC, ...n, children: t });
}
function z(e) {
    let { Icon: t, text: n, iconColor: r, tooltipText: s, showTooltip: a } = e,
        { defaultTextColor: o, defaultIconColor: l, location: u } = K();
    return (0, i.jsx)(f.m, {
        text: s,
        shouldShow: a,
        children: (0, i.jsxs)($, {
            children: [
                (0, i.jsx)(t, { size: "xxs", color: r ?? l }),
                (0, i.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: o,
                    className: H.KT,
                    scaleFontToUserSetting: 5 === u,
                    children: n,
                }),
            ],
        }),
    });
}
function q(e) {
    let { entry: t } = e,
        { channel: n } = (0, U.A)(t),
        { location: r } = K(),
        s = (0, L.Ay)(n);
    return null == n || (0, P.S1)(r, [1, 2, 3, 4]) ? null : (0, i.jsx)(z, { Icon: h.H, text: s });
}
function X(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: s, location: a } = K(),
        o = (0, G.Hd)(t) && (0, P.S1)(a, [0, 4, 7, 9]),
        l = o ? E.A.colors.TEXT_FEEDBACK_POSITIVE : s,
        { streamPreviewUrl: u } = (0, U.A)(t),
        c = null != u ? m.F : (0, k.yl)(t) ? g.k : A._;
    return (0, i.jsxs)($, {
        children: [
            (0, i.jsx)(c, { size: "xxs", color: l }),
            (0, i.jsx)(V.A, {
                entry: t,
                textColor: o ? "text-feedback-positive" : r,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === a,
            }),
        ],
    });
}
function Q(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: r } = K(),
        { state: s, party: a } = (0, F.u)(t),
        o = (0, G.gF)(s, a);
    return null == o
        ? null
        : (0, i.jsxs)($, {
              children: [
                  (0, i.jsx)(I.n, { size: "xxs", color: r }),
                  (0, i.jsx)(p.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: o }),
              ],
          });
}
function Z(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: s, location: a } = K(),
        o = (0, G.Hd)(t) && (0, P.S1)(a, [0, 4]),
        l = o ? E.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: H.fC,
        children: [
            (0, i.jsx)(T.T, { size: "xxs", color: l }),
            (0, i.jsx)(V.A, { entry: t, textColor: o ? "text-feedback-positive" : r, hovered: n, bold: !0 }),
        ],
    });
}
function J(e) {
    let { entry: t } = e,
        { location: n } = K(),
        r = (0, P.S1)(n, [0, 3]) ? E.A.colors.STATUS_POSITIVE : void 0;
    return (0, G.Rf)(t) ? (0, i.jsx)(z, { Icon: S.P, text: B.intl.string(B.t.keY6mW), iconColor: r }) : null;
}
function ee(e) {
    let { entry: t } = e,
        { location: n } = K();
    if (!(0, G.L7)(t)) return null;
    let r = (0, G.JM)(t),
        { text: s, tooltipText: a } = (0, G.Pj)(t);
    return null == s ? null : (0, i.jsx)(z, { Icon: y.x, text: s, tooltipText: a, showTooltip: 0 === n && !r });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = K(),
        r = 0 !== n,
        s = (0, G.KH)(t);
    if (null == s) return null;
    let a = (0, G.us)(s);
    return (0, i.jsx)(z, { Icon: N.m, showTooltip: !r, tooltipText: a, text: r ? a : B.intl.string(B.t.adnLsB) });
}
function en(e) {
    let { entry: t } = e,
        { location: n } = K(),
        r = (0, G.iy)(t);
    return (0, G.BZ)(t)
        ? (0, i.jsx)(z, {
              Icon: v.g,
              showTooltip: 0 === n,
              text: B.intl.formatToPlainString(B.t["Klie/P"], { days: r }),
              tooltipText: B.intl.formatToPlainString(B.t.PwMe0s, { days: r }),
          })
        : null;
}
function er(e) {
    let { entry: t } = e,
        { location: n } = K(),
        r = 0 !== n,
        s = (0, G.ty)(t);
    if (null == s) return null;
    let a = r ? B.t.C0AxoR : B.t.SDRHgr;
    return (0, i.jsx)(z, {
        Icon: C.O,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                B.intl.string(B.t["/50eHi"]),
                r ? " — " : ": ",
                B.intl.format(a, { hours: Math.round(s / M.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = K(),
        r = (0, G.Pv)(t, d.K.AGGREGATE_COUNT)?.count;
    if (null == r) return null;
    let s = (0, P.S1)(n, [1, 2, 5])
        ? B.intl.formatToPlainString(B.t.HtifnG, { count: r })
        : B.intl.formatToPlainString(B.t["jq/Bmu"], { count: r });
    return (0, i.jsx)(z, { Icon: C.O, text: s });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = K();
    if (3 === n) return null;
    let r = (0, G.CZ)(t);
    return null == r || r === _.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, i.jsx)(z, { Icon: O.Y, text: B.intl.string(B.t.kAlUsy) });
}
function ea(e) {
    let { entry: t } = e,
        { location: n } = K();
    if (3 === n) return null;
    let r = x.default.extractTimestamp(t.extra.application_id);
    return u()().diff(u()(r), "days") > 7 ? null : (0, i.jsx)(z, { Icon: R.f, text: B.intl.string(B.t.vYuyWf) });
}
function eo(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: s, location: a } = K(),
        o = (0, G.Hd)(t) && 4 === a,
        l = o ? E.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, i.jsxs)("div", {
        className: H.fC,
        children: [
            (0, i.jsx)(b.U, { size: "xxs", color: l }),
            (0, i.jsx)(V.A, { entry: t, textColor: o ? "text-feedback-positive" : r, hovered: n, bold: !0 }),
        ],
    });
}
function el(e) {
    let { entry: t } = e,
        n = (0, G.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, i.jsx)(z, { Icon: D.K, text: n });
}
function eu(e) {
    let { entry: t } = e,
        { defaultTextColor: n, location: r } = K();
    if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
    let { previewIcon: s, previewTextShort: a } = t.applicationWidgetPreview.previewData;
    return (0, i.jsxs)($, {
        children: [
            null != s &&
                (0, i.jsx)("div", {
                    className: H.dQ,
                    children: (0, i.jsx)(w.Ay, { src: s.proxyUrl, width: s.width, height: s.height, responsive: !0 }),
                }),
            (0, i.jsx)(p.E, {
                variant: "text-xs/normal",
                color: n,
                className: H.KT,
                scaleFontToUserSetting: 5 === r,
                children: a,
            }),
        ],
    });
}
function ec(e) {
    let t,
        { location: n, children: r, className: s } = e;
    return (
        (t = (0, P.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: E.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: E.A.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, i.jsx)(W.Provider, {
            value: { location: n, ...t },
            children: (0, i.jsx)("div", {
                className: o()(H.cV, { [H.u3]: 0 === n, [H.BQ]: (0, P.S1)(n, [1, 2]), [H.DY]: 3 === n }, s),
                children: r,
            }),
        })
    );
}
function ed(e) {
    let { entry: t, location: n, className: r } = e,
        s = (function (e) {
            switch (e.content_type) {
                case c.ContentInventoryEntryType.TOP_ARTIST:
                    return j[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.PLAYED_GAME:
                    return j[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.TOP_GAME:
                    return j[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.WATCHED_MEDIA:
                    return j[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return j[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == s ? null : (0, i.jsx)(ec, { location: n, className: r, children: s });
}
