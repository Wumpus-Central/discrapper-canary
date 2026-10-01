n.d(e, {
    $X: () => tu,
    K7: () => ti,
    MK: () => tl,
    N5: () => K,
    R_: () => te,
    Rq: () => td,
    Xr: () => to,
    Xy: () => Q,
    Y8: () => ta,
    Yq: () => tC,
    Zc: () => tt,
    er: () => q,
    fM: () => J,
    fg: () => ts,
    iT: () => th,
    iq: () => $,
    mG: () => tA,
    sp: () => tr,
    tR: () => tn,
    zi: () => tc,
});
var l,
    r = n(477900),
    i = n(582128),
    o = n(503698),
    a = n.n(o),
    s = n(536637),
    u = n.n(s),
    c = n(589812),
    d = n(598748),
    x = n(681154),
    C = n(974690),
    A = n(379834),
    h = n(866665),
    T = n(140735),
    E = n(834730),
    f = n(983851),
    _ = n(661531),
    p = n(183623),
    y = n(323384),
    I = n(687966),
    v = n(177953),
    g = n(432017),
    m = n(246913),
    P = n(291747),
    j = n(417270),
    R = n(768622),
    O = n(369606),
    S = n(825860),
    N = n(605323),
    L = n(748562),
    w = n(306788),
    U = n(531913),
    M = n(47167),
    D = n(927813),
    V = n(403362),
    G = n(935208),
    F = n(20805),
    B = n(202195),
    Y = n(583846),
    b = n(299846),
    H = n(693879);
n(424994);
var k = n(375708),
    W = n(681978);
let Z = {
    [x.ContentInventoryEntryType.TOP_ARTIST]: [ta],
    [x.ContentInventoryEntryType.PLAYED_GAME]: [$, tt, Q, tu, tn, ti, ts, tr, tl],
    [x.ContentInventoryEntryType.TOP_GAME]: [to],
    [x.ContentInventoryEntryType.WATCHED_MEDIA]: [tc, td],
    [x.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [$, tt, Q, tu, ts, tl],
};
var K =
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
let z = i.createContext({});
function X() {
    return i.useContext(z);
}
function q(t) {
    let { children: e, ...n } = t;
    return (0, r.jsx)("div", { className: W.fC, ...n, children: e });
}
function J(t) {
    let { Icon: e, text: n, iconColor: l, tooltipText: i, showTooltip: o, a11yText: a } = t,
        { defaultTextColor: s, defaultIconColor: u, location: c } = X();
    return (0, r.jsx)(h.m, {
        text: i,
        shouldShow: o,
        children: (0, r.jsxs)(q, {
            children: [
                (0, r.jsx)(e, { size: "xxs", color: l ?? u }),
                null != a && (0, r.jsx)(T.A, { children: a }),
                (0, r.jsx)(E.E, {
                    variant: "text-xs/normal",
                    color: s,
                    className: W.KT,
                    scaleFontToUserSetting: 5 === c,
                    "aria-hidden": null != a || void 0,
                    children: n,
                }),
            ],
        }),
    });
}
function Q(t) {
    let { entry: e } = t,
        { channel: n } = (0, B.A)(e),
        { location: l } = X(),
        i = (0, M.Ay)(n);
    return null == n || (0, V.S1)(l, [1, 2, 3, 4]) ? null : (0, r.jsx)(J, { Icon: f.H, text: i });
}
function $(t) {
    let { entry: e, hovered: n } = t,
        { defaultTextColor: l, defaultIconColor: i, location: o } = X(),
        a = (0, Y.Hd)(e) && (0, V.S1)(o, [0, 4, 7, 9]),
        s = a ? _.A.colors.TEXT_FEEDBACK_POSITIVE : i,
        { streamPreviewUrl: u } = (0, B.A)(e),
        c = null != u ? p.F : (0, F.yl)(e) ? y.k : I.GameControllerIcon;
    return (0, r.jsxs)(q, {
        children: [
            (0, r.jsx)(c, { size: "xxs", color: s }),
            (0, r.jsx)(H.A, {
                entry: e,
                textColor: a ? "text-feedback-positive" : l,
                hovered: n,
                scaleFontToUserSetting: 5 === o,
            }),
        ],
    });
}
function tt(t) {
    let { entry: e } = t,
        { defaultTextColor: n, defaultIconColor: l } = X(),
        { state: i, party: o } = (0, b.u)(e),
        a = (0, Y.gF)(i, o);
    return null == a
        ? null
        : (0, r.jsxs)(q, {
              children: [
                  (0, r.jsx)(v.n, { size: "xxs", color: l }),
                  (0, r.jsx)(E.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: a }),
              ],
          });
}
function te(t) {
    let { entry: e, hovered: n } = t,
        { defaultTextColor: l, defaultIconColor: i, location: o } = X(),
        a = (0, Y.Hd)(e) && (0, V.S1)(o, [0, 4]),
        s = a ? _.A.colors.TEXT_FEEDBACK_POSITIVE : i;
    return (0, r.jsxs)("div", {
        className: W.fC,
        children: [
            (0, r.jsx)(g.T, { size: "xxs", color: s }),
            (0, r.jsx)(H.A, { entry: e, textColor: a ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function tn(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = (0, V.S1)(n, [0, 3]) ? _.A.colors.STATUS_POSITIVE : void 0;
    return (0, Y.Rf)(e) ? (0, r.jsx)(J, { Icon: m.P, text: k.intl.string(k.t.keY6mW), iconColor: l }) : null;
}
function tl(t) {
    let { entry: e } = t,
        { location: n } = X();
    if (!(0, Y.L7)(e)) return null;
    let l = (0, Y.JM)(e),
        { text: i, tooltipText: o, a11yText: a } = (0, Y.Pj)(e);
    return null == i
        ? null
        : (0, r.jsx)(J, { Icon: P.x, text: i, tooltipText: o, showTooltip: 0 === n && !l, a11yText: a });
}
function tr(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = 0 !== n,
        i = (0, Y.KH)(e);
    if (null == i) return null;
    let o = (0, Y.us)(i);
    return (0, r.jsx)(J, {
        Icon: j.RetryIcon,
        showTooltip: !l,
        tooltipText: o,
        text: l ? o : k.intl.string(k.t.adnLsB),
    });
}
function ti(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = (0, Y.iy)(e);
    return (0, Y.BZ)(e)
        ? (0, r.jsx)(J, {
              Icon: R.g,
              showTooltip: 0 === n,
              text: k.intl.formatToPlainString(k.t["Klie/P"], { days: l }),
              tooltipText: k.intl.formatToPlainString(k.t.PwMe0s, { days: l }),
              a11yText: k.intl.formatToPlainString(k.t.nVLPBf, { days: l }),
          })
        : null;
}
function to(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = 0 !== n,
        i = (0, Y.ty)(e);
    if (null == i) return null;
    let o = l ? k.t.C0AxoR : k.t.SDRHgr;
    return (0, r.jsx)(J, {
        Icon: O.TrophyIcon,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                k.intl.string(k.t["/50eHi"]),
                l ? " \u2014 " : ": ",
                k.intl.format(o, { hours: Math.round(i / D.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function ta(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = (0, Y.Pv)(e, C.K.AGGREGATE_COUNT)?.count;
    if (null == l) return null;
    let i = (0, V.S1)(n, [1, 2, 5])
        ? k.intl.formatToPlainString(k.t.HtifnG, { count: l })
        : k.intl.formatToPlainString(k.t["jq/Bmu"], { count: l });
    return (0, r.jsx)(J, { Icon: O.TrophyIcon, text: i });
}
function ts(t) {
    let { entry: e } = t,
        { location: n } = X();
    if (3 === n) return null;
    let l = (0, Y.CZ)(e);
    return null == l || l === A.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(J, { Icon: S.FireIcon, text: k.intl.string(k.t.kAlUsy) });
}
function tu(t) {
    let { entry: e } = t,
        { location: n } = X();
    if (3 === n) return null;
    let l = G.default.extractTimestamp(e.extra.application_id);
    return u()().diff(u()(l), "days") > 7 ? null : (0, r.jsx)(J, { Icon: N.f, text: k.intl.string(k.t.vYuyWf) });
}
function tc(t) {
    let { entry: e, hovered: n } = t,
        { defaultTextColor: l, defaultIconColor: i, location: o } = X(),
        a = (0, Y.Hd)(e) && 4 === o,
        s = a ? _.A.colors.TEXT_FEEDBACK_POSITIVE : i;
    return (0, r.jsxs)("div", {
        className: W.fC,
        children: [
            (0, r.jsx)(L.U, { size: "xxs", color: s }),
            (0, r.jsx)(H.A, { entry: e, textColor: a ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function td(t) {
    let { entry: e } = t,
        n = (0, Y.kR)(e.extra.media_assets_large_text);
    if (null == n) return null;
    let l = (0, Y.WC)(e.extra.media_assets_large_text);
    return (0, r.jsx)(J, { Icon: w.K, text: n, a11yText: l });
}
function tx(t) {
    let { userId: e, widgetApplicationId: n } = t,
        { defaultTextColor: l } = X(),
        i = (0, U.A)(e, n),
        o = i.surfaceConfigs[d.m.ACTIVITY_ACCESSORY];
    return null != o && i.hasIdentity
        ? (0, r.jsx)(q, {
              children: (0, r.jsx)(c.kH, {
                  ...i,
                  surface: d.m.ACTIVITY_ACCESSORY,
                  surfaceConfig: o,
                  layoutProps: { variant: "badge", textColor: l },
              }),
          })
        : null;
}
function tC(t) {
    let { entry: e } = t;
    return "applicationWidgetPreview" in e && null != e.applicationWidgetPreview
        ? (0, r.jsx)(tx, { userId: e.author_id, widgetApplicationId: e.applicationWidgetPreview.widgetApplicationId })
        : null;
}
function tA(t) {
    let e,
        { location: n, children: l, className: i } = t;
    return (
        (e = (0, V.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: _.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? { defaultTextColor: "text-subtle", defaultIconColor: _.A.colors.TEXT_SUBTLE }
                  : { defaultTextColor: "text-subtle" }),
        (0, r.jsx)(z.Provider, {
            value: { location: n, ...e },
            children: (0, r.jsx)("div", {
                className: a()(W.cV, { [W.u3]: 0 === n, [W.BQ]: (0, V.S1)(n, [1, 2, 10]), [W.DY]: 3 === n }, i),
                children: l,
            }),
        })
    );
}
function th(t) {
    let { entry: e, location: n, className: l } = t,
        i = (function (t) {
            switch (t.content_type) {
                case x.ContentInventoryEntryType.TOP_ARTIST:
                    return Z[t.content_type].map((e, n) => (0, r.jsx)(e, { entry: t }, n));
                case x.ContentInventoryEntryType.PLAYED_GAME:
                    return Z[t.content_type].map((e, n) => (0, r.jsx)(e, { entry: t }, n));
                case x.ContentInventoryEntryType.TOP_GAME:
                    return Z[t.content_type].map((e, n) => (0, r.jsx)(e, { entry: t }, n));
                case x.ContentInventoryEntryType.WATCHED_MEDIA:
                    return Z[t.content_type].map((e, n) => (0, r.jsx)(e, { entry: t }, n));
                case x.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                    return Z[t.content_type].map((e, n) => (0, r.jsx)(e, { entry: t }, n));
                default:
                    return null;
            }
        })(e);
    return null == i ? null : (0, r.jsx)(tA, { location: n, className: l, children: i });
}
