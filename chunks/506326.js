"use strict";
n.d(t, {
    $X: () => es,
    K7: () => et,
    MK: () => J,
    N5: () => H,
    R_: () => X,
    Rq: () => eo,
    Xr: () => en,
    Xy: () => z,
    Y8: () => ei,
    Zc: () => Z,
    er: () => K,
    fM: () => $,
    fg: () => er,
    iT: () => eu,
    iq: () => q,
    mG: () => el,
    sp: () => ee,
    tR: () => Q,
    zi: () => ea,
});
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(989349),
    u = n.n(l),
    c = n(681154),
    d = n(974690),
    _ = n(379834),
    h = n(990078),
    f = n(834730),
    p = n(983851),
    E = n(661531),
    m = n(183623),
    g = n(323384),
    A = n(687966),
    I = n(177953),
    T = n(432017),
    S = n(246913),
    y = n(291747),
    C = n(417270),
    N = n(768622),
    v = n(369606),
    R = n(825860),
    O = n(605323),
    b = n(748562),
    D = n(306788),
    L = n(47167),
    w = n(927813),
    M = n(403362),
    P = n(935208),
    x = n(20805),
    k = n(202195),
    U = n(751765),
    G = n(299846),
    F = n(693879);
n(424994);
var V = n(375708),
    B = n(164123);
let j = {
    [c.ContentInventoryEntryType.TOP_ARTIST]: [ei],
    [c.ContentInventoryEntryType.PLAYED_GAME]: [q, Z, z, es, Q, et, er, ee, J],
    [c.ContentInventoryEntryType.TOP_GAME]: [en],
    [c.ContentInventoryEntryType.WATCHED_MEDIA]: [ea, eo],
    [c.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [q, Z, z, es, er, J],
};
var H =
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
function W() {
    return s.useContext(Y);
}
function K(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)("div", { className: B.fC, ...n, children: t });
}
function $(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: s, showTooltip: a } = e,
        { defaultTextColor: o, defaultIconColor: l, location: u } = W();
    return (0, r.jsx)(h.m, {
        text: s,
        shouldShow: a,
        children: (0, r.jsxs)(K, {
            children: [
                (0, r.jsx)(t, { size: "xxs", color: i ?? l }),
                (0, r.jsx)(f.E, {
                    variant: "text-xs/normal",
                    color: o,
                    className: B.KT,
                    scaleFontToUserSetting: 5 === u,
                    children: n,
                }),
            ],
        }),
    });
}
function z(e) {
    let { entry: t } = e,
        { channel: n } = (0, k.A)(t),
        { location: i } = W(),
        s = (0, L.Ay)(n);
    return null == n || (0, M.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)($, { Icon: p.H, text: s });
}
function q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = W(),
        o = (0, U.Hd)(t) && (0, M.S1)(a, [0, 4, 7, 9]),
        l = o ? E.A.colors.TEXT_FEEDBACK_POSITIVE : s,
        { streamPreviewUrl: u } = (0, k.A)(t),
        c = null != u ? m.F : (0, x.yl)(t) ? g.k : A._;
    return (0, r.jsxs)(K, {
        children: [
            (0, r.jsx)(c, { size: "xxs", color: l }),
            (0, r.jsx)(F.A, {
                entry: t,
                textColor: o ? "text-feedback-positive" : i,
                hovered: n,
                scaleFontToUserSetting: 5 === a,
            }),
        ],
    });
}
function Z(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = W(),
        { state: s, party: a } = (0, G.u)(t),
        o = (0, U.gF)(s, a);
    return null == o
        ? null
        : (0, r.jsxs)(K, {
              children: [
                  (0, r.jsx)(I.n, { size: "xxs", color: i }),
                  (0, r.jsx)(f.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: o }),
              ],
          });
}
function X(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = W(),
        o = (0, U.Hd)(t) && (0, M.S1)(a, [0, 4]),
        l = o ? E.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, r.jsxs)("div", {
        className: B.fC,
        children: [
            (0, r.jsx)(T.T, { size: "xxs", color: l }),
            (0, r.jsx)(F.A, { entry: t, textColor: o ? "text-feedback-positive" : i, hovered: n }),
        ],
    });
}
function Q(e) {
    let { entry: t } = e,
        { location: n } = W(),
        i = (0, M.S1)(n, [0, 3]) ? E.A.colors.STATUS_POSITIVE : void 0;
    return (0, U.Rf)(t) ? (0, r.jsx)($, { Icon: S.P, text: V.intl.string(V.t.keY6mW), iconColor: i }) : null;
}
function J(e) {
    let { entry: t } = e,
        { location: n } = W();
    if (!(0, U.L7)(t)) return null;
    let i = (0, U.JM)(t),
        { text: s, tooltipText: a } = (0, U.Pj)(t);
    return null == s ? null : (0, r.jsx)($, { Icon: y.x, text: s, tooltipText: a, showTooltip: 0 === n && !i });
}
function ee(e) {
    let { entry: t } = e,
        { location: n } = W(),
        i = 0 !== n,
        s = (0, U.KH)(t);
    if (null == s) return null;
    let a = (0, U.us)(s);
    return (0, r.jsx)($, { Icon: C.m, showTooltip: !i, tooltipText: a, text: i ? a : V.intl.string(V.t.adnLsB) });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = W(),
        i = (0, U.iy)(t);
    return (0, U.BZ)(t)
        ? (0, r.jsx)($, {
              Icon: N.g,
              showTooltip: 0 === n,
              text: V.intl.formatToPlainString(V.t["Klie/P"], { days: i }),
              tooltipText: V.intl.formatToPlainString(V.t.PwMe0s, { days: i }),
          })
        : null;
}
function en(e) {
    let { entry: t } = e,
        { location: n } = W(),
        i = 0 !== n,
        s = (0, U.ty)(t);
    if (null == s) return null;
    let a = i ? V.t.C0AxoR : V.t.SDRHgr;
    return (0, r.jsx)($, {
        Icon: v.O,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                V.intl.string(V.t["/50eHi"]),
                i ? " \u2014 " : ": ",
                V.intl.format(a, { hours: Math.round(s / w.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = W(),
        i = (0, U.Pv)(t, d.K.AGGREGATE_COUNT)?.count;
    if (null == i) return null;
    let s = (0, M.S1)(n, [1, 2, 5])
        ? V.intl.formatToPlainString(V.t.HtifnG, { count: i })
        : V.intl.formatToPlainString(V.t["jq/Bmu"], { count: i });
    return (0, r.jsx)($, { Icon: v.O, text: s });
}
function er(e) {
    let { entry: t } = e,
        { location: n } = W();
    if (3 === n) return null;
    let i = (0, U.CZ)(t);
    return null == i || i === _.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)($, { Icon: R.Y, text: V.intl.string(V.t.kAlUsy) });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = W();
    if (3 === n) return null;
    let i = P.default.extractTimestamp(t.extra.application_id);
    return u()().diff(u()(i), "days") > 7 ? null : (0, r.jsx)($, { Icon: O.f, text: V.intl.string(V.t.vYuyWf) });
}
function ea(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: s, location: a } = W(),
        o = (0, U.Hd)(t) && 4 === a,
        l = o ? E.A.colors.TEXT_FEEDBACK_POSITIVE : s;
    return (0, r.jsxs)("div", {
        className: B.fC,
        children: [
            (0, r.jsx)(b.U, { size: "xxs", color: l }),
            (0, r.jsx)(F.A, { entry: t, textColor: o ? "text-feedback-positive" : i, hovered: n }),
        ],
    });
}
function eo(e) {
    let { entry: t } = e,
        n = (0, U.kR)(t.extra.media_assets_large_text);
    return null == n ? null : (0, r.jsx)($, { Icon: D.K, text: n });
}
function el(e) {
    let t,
        { location: n, children: i, className: s } = e;
    return (
        (t = (0, M.S1)(n, [1, 5, 6])
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
        (0, r.jsx)(Y.Provider, {
            value: { location: n, ...t },
            children: (0, r.jsx)("div", {
                className: o()(B.cV, { [B.u3]: 0 === n, [B.BQ]: (0, M.S1)(n, [1, 2, 10]), [B.DY]: 3 === n }, s),
                children: i,
            }),
        })
    );
}
function eu(e) {
    let { entry: t, location: n, className: i } = e,
        s = (function (e) {
            switch (e.content_type) {
                case c.ContentInventoryEntryType.TOP_ARTIST:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.PLAYED_GAME:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.TOP_GAME:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.WATCHED_MEDIA:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                case c.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return j[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == s ? null : (0, r.jsx)(el, { location: n, className: i, children: s });
}
