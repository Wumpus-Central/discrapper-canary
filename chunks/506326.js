var l,
    r = n(477900),
    o = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(536637),
    c = n.n(s),
    u = n(886100),
    d = n(598748),
    x = n(681154),
    C = n(974690),
    A = n(379834),
    h = n(866665),
    T = n(140735),
    E = n(834730),
    I = n(983851),
    f = n(646514),
    p = n(183623),
    _ = n(323384),
    y = n(687966),
    v = n(177953),
    m = n(432017),
    g = n(246913),
    P = n(291747),
    j = n(417270),
    R = n(768622),
    S = n(369606),
    O = n(825860),
    N = n(605323),
    w = n(748562),
    L = n(306788),
    U = n(531913),
    M = n(47167),
    D = n(927813),
    V = n(403362),
    G = n(811091),
    F = n(20805),
    b = n(202195),
    B = n(583846),
    Y = n(299846),
    H = n(693879);
n(424994);
var k = n(792996),
    W = n(681978);
let Z = {
    [x.ContentInventoryEntryType.TOP_ARTIST]: [ti],
    [x.ContentInventoryEntryType.PLAYED_GAME]: [$, tt, Q, ts, te, tr, ta, tl, tn],
    [x.ContentInventoryEntryType.TOP_GAME]: [to],
    [x.ContentInventoryEntryType.WATCHED_MEDIA]: [tc, tu],
    [x.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [$, tt, Q, ts, ta, tn],
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
let z = o.createContext({});
function X() {
    return o.useContext(z);
}
function q(t) {
    let { children: e, ...n } = t;
    return (0, r.jsx)("div", { className: W.fC, ...n, children: e });
}
function J(t) {
    let { Icon: e, text: n, iconColor: l, tooltipText: o, showTooltip: i, a11yText: a } = t,
        { defaultTextColor: s, defaultIconColor: c, location: u } = X();
    return (0, r.jsx)(h.m, {
        text: o,
        shouldShow: i,
        children: (0, r.jsxs)(q, {
            children: [
                (0, r.jsx)(e, { size: "xxs", color: l ?? c }),
                null != a && (0, r.jsx)(T.A, { children: a }),
                (0, r.jsx)(E.E, {
                    variant: "body-xs/normal",
                    color: s,
                    className: W.KT,
                    scaleFontToUserSetting: 5 === u,
                    "aria-hidden": null != a || void 0,
                    children: n,
                }),
            ],
        }),
    });
}
function Q(t) {
    let { entry: e } = t,
        { channel: n } = (0, b.A)(e),
        { location: l } = X(),
        o = (0, M.Ay)(n);
    return null == n || (0, V.S1)(l, [1, 2, 3, 4]) ? null : (0, r.jsx)(J, { Icon: I.VoiceNormalIcon, text: o });
}
function $(t) {
    let { entry: e, hovered: n } = t,
        { defaultTextColor: l, defaultIconColor: o, location: i } = X(),
        a = (0, B.Hd)(e) && (0, V.S1)(i, [0, 4, 7, 9]),
        s = a ? f.A.colors.TEXT_FEEDBACK_POSITIVE : o,
        { streamPreviewUrl: c } = (0, b.A)(e),
        u = null != c ? p.ScreenArrowIcon : (0, F.yl)(e) ? _.AppsIcon : y.GameControllerIcon;
    return (0, r.jsxs)(q, {
        children: [
            (0, r.jsx)(u, { size: "xxs", color: s }),
            (0, r.jsx)(H.A, {
                entry: e,
                textColor: a ? "text-feedback-positive" : l,
                hovered: n,
                scaleFontToUserSetting: 5 === i,
            }),
        ],
    });
}
function tt(t) {
    let { entry: e } = t,
        { defaultTextColor: n, defaultIconColor: l } = X(),
        { state: o, party: i } = (0, Y.u)(e),
        a = (0, B.gF)(o, i);
    return null == a
        ? null
        : (0, r.jsxs)(q, {
              children: [
                  (0, r.jsx)(v.GroupIcon, { size: "xxs", color: l }),
                  (0, r.jsx)(E.E, { variant: "body-xs/normal", color: n, lineClamp: 1, children: a }),
              ],
          });
}
function te(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = (0, V.S1)(n, [0, 3]) ? f.A.colors.STATUS_POSITIVE : void 0;
    return (0, B.Rf)(e)
        ? (0, r.jsx)(J, { Icon: g.NewUserSimpleIcon, text: k.intl.string(k.t.keY6mW), iconColor: l })
        : null;
}
function tn(t) {
    let { entry: e } = t,
        { location: n } = X();
    if (!(0, B.L7)(e)) return null;
    let l = (0, B.JM)(e),
        { text: o, tooltipText: i, a11yText: a } = (0, B.Pj)(e);
    return null == o
        ? null
        : (0, r.jsx)(J, { Icon: P.TimerIcon, text: o, tooltipText: i, showTooltip: 0 === n && !l, a11yText: a });
}
function tl(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = 0 !== n,
        o = (0, B.KH)(e);
    if (null == o) return null;
    let i = (0, B.us)(o);
    return (0, r.jsx)(J, {
        Icon: j.RetryIcon,
        showTooltip: !l,
        tooltipText: i,
        text: l ? i : k.intl.string(k.t.adnLsB),
    });
}
function tr(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = (0, B.iy)(e);
    return (0, B.BZ)(e)
        ? (0, r.jsx)(J, {
              Icon: R.FlashIcon,
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
        o = (0, B.ty)(e);
    if (null == o) return null;
    let i = l ? k.t.C0AxoR : k.t.SDRHgr;
    return (0, r.jsx)(J, {
        Icon: S.TrophyIcon,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                k.intl.string(k.t["/50eHi"]),
                l ? " \u2014 " : ": ",
                k.intl.format(i, { hours: Math.round(o / D.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function ti(t) {
    let { entry: e } = t,
        { location: n } = X(),
        l = (0, B.Pv)(e, C.K.AGGREGATE_COUNT)?.count;
    if (null == l) return null;
    let o = (0, V.S1)(n, [1, 2, 5])
        ? k.intl.formatToPlainString(k.t.HtifnG, { count: l })
        : k.intl.formatToPlainString(k.t["jq/Bmu"], { count: l });
    return (0, r.jsx)(J, { Icon: S.TrophyIcon, text: o });
}
function ta(t) {
    let { entry: e } = t,
        { location: n } = X();
    if (3 === n) return null;
    let l = (0, B.CZ)(e);
    return null == l || l === A.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(J, { Icon: O.FireIcon, text: k.intl.string(k.t.kAlUsy) });
}
function ts(t) {
    let { entry: e } = t,
        { location: n } = X();
    if (3 === n) return null;
    let l = G.default.extractTimestamp(e.extra.application_id);
    return c()().diff(c()(l), "days") > 7
        ? null
        : (0, r.jsx)(J, { Icon: N.StarShootingIcon, text: k.intl.string(k.t.vYuyWf) });
}
function tc(t) {
    let { entry: e, hovered: n } = t,
        { defaultTextColor: l, defaultIconColor: o, location: i } = X(),
        a = (0, B.Hd)(e) && 4 === i,
        s = a ? f.A.colors.TEXT_FEEDBACK_POSITIVE : o;
    return (0, r.jsxs)("div", {
        className: W.fC,
        children: [
            (0, r.jsx)(w.TvIcon, { size: "xxs", color: s }),
            (0, r.jsx)(H.A, { entry: e, textColor: a ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function tu(t) {
    let { entry: e } = t,
        n = (0, B.kR)(e.extra.media_assets_large_text);
    if (null == n) return null;
    let l = (0, B.WC)(e.extra.media_assets_large_text);
    return (0, r.jsx)(J, { Icon: L.TopicsIcon, text: n, a11yText: l });
}
function td(t) {
    let { userId: e, widgetApplicationId: n } = t,
        { defaultTextColor: l } = X(),
        o = (0, U.A)(e, n),
        i = o.surfaceConfigs[d.m.ACTIVITY_ACCESSORY];
    return null != i && o.hasIdentity
        ? (0, r.jsx)(q, {
              children: (0, r.jsx)(u.kH, {
                  ...o,
                  surface: d.m.ACTIVITY_ACCESSORY,
                  surfaceConfig: i,
                  layoutProps: { variant: "badge", textColor: l },
              }),
          })
        : null;
}
function tx(t) {
    let { location: e, children: n, className: l } = t,
        i = o.useMemo(() => {
            let t;
            return (
                (t = (0, V.S1)(e, [1, 5, 6])
                    ? {
                          defaultTextColor: "content-inventory-overlay-text-secondary",
                          defaultIconColor: f.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
                      }
                    : 2 === e
                      ? { defaultTextColor: "interactive-text-default" }
                      : 3 === e
                        ? { defaultTextColor: "text-muted" }
                        : 4 === e
                          ? { defaultTextColor: "text-subtle", defaultIconColor: f.A.colors.TEXT_SUBTLE }
                          : { defaultTextColor: "text-subtle" }),
                { location: e, ...t }
            );
        }, [e]);
    return (0, r.jsx)(z.Provider, {
        value: i,
        children: (0, r.jsx)("div", {
            className: a()(W.cV, { [W.u3]: 0 === e, [W.BQ]: (0, V.S1)(e, [1, 2, 10]), [W.DY]: 3 === e }, l),
            children: n,
        }),
    });
}
n.d(
    e,
    {},
    {
        $X: ts,
        K7: tr,
        MK: tn,
        N5: K,
        R_: function (t) {
            let { entry: e, hovered: n } = t,
                { defaultTextColor: l, defaultIconColor: o, location: i } = X(),
                a = (0, B.Hd)(e) && (0, V.S1)(i, [0, 4]),
                s = a ? f.A.colors.TEXT_FEEDBACK_POSITIVE : o;
            return (0, r.jsxs)("div", {
                className: W.fC,
                children: [
                    (0, r.jsx)(m.MusicIcon, { size: "xxs", color: s }),
                    (0, r.jsx)(H.A, { entry: e, textColor: a ? "text-feedback-positive" : l, hovered: n }),
                ],
            });
        },
        Rq: tu,
        Xr: to,
        Xy: Q,
        Y8: ti,
        Yq: function (t) {
            let { entry: e } = t;
            return "applicationWidgetPreview" in e && null != e.applicationWidgetPreview
                ? (0, r.jsx)(td, {
                      userId: e.author_id,
                      widgetApplicationId: e.applicationWidgetPreview.widgetApplicationId,
                  })
                : null;
        },
        Zc: tt,
        er: q,
        fM: J,
        fg: ta,
        iT: function (t) {
            let { entry: e, location: n, className: l } = t,
                o = (function (t) {
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
            return null == o ? null : (0, r.jsx)(tx, { location: n, className: l, children: o });
        },
        iq: $,
        mG: tx,
        sp: tl,
        tR: te,
        zi: tc,
    },
);
