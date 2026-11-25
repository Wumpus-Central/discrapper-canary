var l,
    i = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(536637),
    u = n.n(o),
    c = n(886100),
    d = n(598748),
    m = n(681154),
    A = n(974690),
    p = n(379834),
    h = n(866665),
    f = n(140735),
    g = n(834730),
    x = n(983851),
    I = n(646514),
    v = n(183623),
    T = n(323384),
    S = n(687966),
    y = n(177953),
    N = n(432017),
    E = n(246913),
    C = n(291747),
    j = n(417270),
    _ = n(768622),
    b = n(369606),
    P = n(825860),
    R = n(605323),
    O = n(748562),
    D = n(306788),
    U = n(531913),
    L = n(47167),
    M = n(927813),
    G = n(403362),
    w = n(661191),
    Y = n(20805),
    k = n(202195),
    V = n(583846),
    $ = n(299846),
    F = n(693879);
n(424994);
var H = n(792996),
    B = n(681978);
let J = {
    [m.ContentInventoryEntryType.TOP_ARTIST]: [er],
    [m.ContentInventoryEntryType.PLAYED_GAME]: [K, ee, q, eo, et, ei, es, el, en],
    [m.ContentInventoryEntryType.TOP_GAME]: [ea],
    [m.ContentInventoryEntryType.WATCHED_MEDIA]: [eu, ec],
    [m.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [K, ee, q, eo, es, en],
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
let z = a.createContext({});
function Z() {
    return a.useContext(z);
}
function X(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)("div", { className: B.fC, ...n, children: t });
}
function Q(e) {
    let { Icon: t, text: n, iconColor: l, tooltipText: a, showTooltip: r, a11yText: s } = e,
        { defaultTextColor: o, defaultIconColor: u, location: c } = Z();
    return (0, i.jsx)(h.m, {
        text: a,
        shouldShow: r,
        children: (0, i.jsxs)(X, {
            children: [
                (0, i.jsx)(t, { size: "xxs", color: l ?? u }),
                null != s && (0, i.jsx)(f.A, { children: s }),
                (0, i.jsx)(g.E, {
                    variant: "body-xs/normal",
                    color: o,
                    className: B.KT,
                    scaleFontToUserSetting: 5 === c,
                    "aria-hidden": null != s || void 0,
                    children: n,
                }),
            ],
        }),
    });
}
function q(e) {
    let { entry: t } = e,
        { channel: n } = (0, k.A)(t),
        { location: l } = Z(),
        a = (0, L.Ay)(n);
    return null == n || (0, G.S1)(l, [1, 2, 3, 4]) ? null : (0, i.jsx)(Q, { Icon: x.VoiceNormalIcon, text: a });
}
function K(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: a, location: r } = Z(),
        s = (0, V.Hd)(t) && (0, G.S1)(r, [0, 4, 7, 9]),
        o = s ? I.A.colors.TEXT_FEEDBACK_POSITIVE : a,
        { streamPreviewUrl: u } = (0, k.A)(t),
        c = null != u ? v.ScreenArrowIcon : (0, Y.yl)(t) ? T.AppsIcon : S.GameControllerIcon;
    return (0, i.jsxs)(X, {
        children: [
            (0, i.jsx)(c, { size: "xxs", color: o }),
            (0, i.jsx)(F.A, {
                entry: t,
                textColor: s ? "text-feedback-positive" : l,
                hovered: n,
                scaleFontToUserSetting: 5 === r,
            }),
        ],
    });
}
function ee(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: l } = Z(),
        { state: a, party: r } = (0, $.u)(t),
        s = (0, V.gF)(a, r);
    return null == s
        ? null
        : (0, i.jsxs)(X, {
              children: [
                  (0, i.jsx)(y.GroupIcon, { size: "xxs", color: l }),
                  (0, i.jsx)(g.E, { variant: "body-xs/normal", color: n, lineClamp: 1, children: s }),
              ],
          });
}
function et(e) {
    let { entry: t } = e,
        { location: n } = Z(),
        l = (0, G.S1)(n, [0, 3]) ? I.A.colors.STATUS_POSITIVE : void 0;
    return (0, V.Rf)(t)
        ? (0, i.jsx)(Q, { Icon: E.NewUserSimpleIcon, text: H.intl.string(H.t.keY6mW), iconColor: l })
        : null;
}
function en(e) {
    let { entry: t } = e,
        { location: n } = Z();
    if (!(0, V.L7)(t)) return null;
    let l = (0, V.JM)(t),
        { text: a, tooltipText: r, a11yText: s } = (0, V.Pj)(t);
    return null == a
        ? null
        : (0, i.jsx)(Q, { Icon: C.TimerIcon, text: a, tooltipText: r, showTooltip: 0 === n && !l, a11yText: s });
}
function el(e) {
    let { entry: t } = e,
        { location: n } = Z(),
        l = 0 !== n,
        a = (0, V.KH)(t);
    if (null == a) return null;
    let r = (0, V.us)(a);
    return (0, i.jsx)(Q, {
        Icon: j.RetryIcon,
        showTooltip: !l,
        tooltipText: r,
        text: l ? r : H.intl.string(H.t.adnLsB),
    });
}
function ei(e) {
    let { entry: t } = e,
        { location: n } = Z(),
        l = (0, V.iy)(t);
    return (0, V.BZ)(t)
        ? (0, i.jsx)(Q, {
              Icon: _.FlashIcon,
              showTooltip: 0 === n,
              text: H.intl.formatToPlainString(H.t["Klie/P"], { days: l }),
              tooltipText: H.intl.formatToPlainString(H.t.PwMe0s, { days: l }),
              a11yText: H.intl.formatToPlainString(H.t.nVLPBf, { days: l }),
          })
        : null;
}
function ea(e) {
    let { entry: t } = e,
        { location: n } = Z(),
        l = 0 !== n,
        a = (0, V.ty)(t);
    if (null == a) return null;
    let r = l ? H.t.C0AxoR : H.t.SDRHgr;
    return (0, i.jsx)(Q, {
        Icon: b.TrophyIcon,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                H.intl.string(H.t["/50eHi"]),
                l ? " \u2014 " : ": ",
                H.intl.format(r, { hours: Math.round(a / M.A.Seconds.HOUR) }),
            ],
        }),
    });
}
function er(e) {
    let { entry: t } = e,
        { location: n } = Z(),
        l = (0, V.Pv)(t, A.K.AGGREGATE_COUNT)?.count;
    if (null == l) return null;
    let a = (0, G.S1)(n, [1, 2, 5])
        ? H.intl.formatToPlainString(H.t.HtifnG, { count: l })
        : H.intl.formatToPlainString(H.t["jq/Bmu"], { count: l });
    return (0, i.jsx)(Q, { Icon: b.TrophyIcon, text: a });
}
function es(e) {
    let { entry: t } = e,
        { location: n } = Z();
    if (3 === n) return null;
    let l = (0, V.CZ)(t);
    return null == l || l === p.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, i.jsx)(Q, { Icon: P.FireIcon, text: H.intl.string(H.t.kAlUsy) });
}
function eo(e) {
    let { entry: t } = e,
        { location: n } = Z();
    if (3 === n) return null;
    let l = w.default.extractTimestamp(t.extra.application_id);
    return u()().diff(u()(l), "days") > 7
        ? null
        : (0, i.jsx)(Q, { Icon: R.StarShootingIcon, text: H.intl.string(H.t.vYuyWf) });
}
function eu(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: l, defaultIconColor: a, location: r } = Z(),
        s = (0, V.Hd)(t) && 4 === r,
        o = s ? I.A.colors.TEXT_FEEDBACK_POSITIVE : a;
    return (0, i.jsxs)("div", {
        className: B.fC,
        children: [
            (0, i.jsx)(O.TvIcon, { size: "xxs", color: o }),
            (0, i.jsx)(F.A, { entry: t, textColor: s ? "text-feedback-positive" : l, hovered: n }),
        ],
    });
}
function ec(e) {
    let { entry: t } = e,
        n = (0, V.kR)(t.extra.media_assets_large_text);
    if (null == n) return null;
    let l = (0, V.WC)(t.extra.media_assets_large_text);
    return (0, i.jsx)(Q, { Icon: D.TopicsIcon, text: n, a11yText: l });
}
function ed(e) {
    let { userId: t, widgetApplicationId: n } = e,
        { defaultTextColor: l } = Z(),
        a = (0, U.A)(t, n),
        r = a.surfaceConfigs[d.m.ACTIVITY_ACCESSORY];
    return null != r && a.hasIdentity
        ? (0, i.jsx)(X, {
              children: (0, i.jsx)(c.kH, {
                  ...a,
                  surface: d.m.ACTIVITY_ACCESSORY,
                  surfaceConfig: r,
                  layoutProps: { variant: "badge", textColor: l },
              }),
          })
        : null;
}
function em(e) {
    let { location: t, children: n, className: l } = e,
        r = a.useMemo(() => {
            let e;
            return (
                (e = (0, G.S1)(t, [1, 5, 6])
                    ? {
                          defaultTextColor: "content-inventory-overlay-text-secondary",
                          defaultIconColor: I.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
                      }
                    : 2 === t
                      ? { defaultTextColor: "interactive-text-default" }
                      : 3 === t
                        ? { defaultTextColor: "text-muted" }
                        : 4 === t
                          ? { defaultTextColor: "text-subtle", defaultIconColor: I.A.colors.TEXT_SUBTLE }
                          : { defaultTextColor: "text-subtle" }),
                { location: t, ...e }
            );
        }, [t]);
    return (0, i.jsx)(z.Provider, {
        value: r,
        children: (0, i.jsx)("div", {
            className: s()(B.cV, { [B.u3]: 0 === t, [B.BQ]: (0, G.S1)(t, [1, 2, 10]), [B.DY]: 3 === t }, l),
            children: n,
        }),
    });
}
n.d(
    t,
    {},
    {
        $X: eo,
        K7: ei,
        MK: en,
        N5: W,
        R_: function (e) {
            let { entry: t, hovered: n } = e,
                { defaultTextColor: l, defaultIconColor: a, location: r } = Z(),
                s = (0, V.Hd)(t) && (0, G.S1)(r, [0, 4]),
                o = s ? I.A.colors.TEXT_FEEDBACK_POSITIVE : a;
            return (0, i.jsxs)("div", {
                className: B.fC,
                children: [
                    (0, i.jsx)(N.MusicIcon, { size: "xxs", color: o }),
                    (0, i.jsx)(F.A, { entry: t, textColor: s ? "text-feedback-positive" : l, hovered: n }),
                ],
            });
        },
        Rq: ec,
        Xr: ea,
        Xy: q,
        Y8: er,
        Yq: function (e) {
            let { entry: t } = e;
            return "applicationWidgetPreview" in t && null != t.applicationWidgetPreview
                ? (0, i.jsx)(ed, {
                      userId: t.author_id,
                      widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId,
                  })
                : null;
        },
        Zc: ee,
        er: X,
        fM: Q,
        fg: es,
        iT: function (e) {
            let { entry: t, location: n, className: l } = e,
                a = (function (e) {
                    switch (e.content_type) {
                        case m.ContentInventoryEntryType.TOP_ARTIST:
                            return J[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                        case m.ContentInventoryEntryType.PLAYED_GAME:
                            return J[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                        case m.ContentInventoryEntryType.TOP_GAME:
                            return J[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                        case m.ContentInventoryEntryType.WATCHED_MEDIA:
                            return J[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                        case m.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                            return J[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
                        default:
                            return null;
                    }
                })(t);
            return null == a ? null : (0, i.jsx)(em, { location: n, className: l, children: a });
        },
        iq: K,
        mG: em,
        sp: el,
        tR: et,
        zi: eu,
    },
);
