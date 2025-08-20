n.d(t, {
    i: () => x,
    y: () => j,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(100527),
    u = n(335131),
    d = n(617136),
    f = n(915750),
    _ = n(509212),
    p = n(113434),
    h = n(497505),
    m = n(373370),
    g = n(110560),
    E = n(667105),
    b = n(46140),
    y = n(215023),
    O = n(388032),
    v = n(165016);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: i } = e,
        a = () => {
            var e;
            let r = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
            (0, g.openVideoQuestModal)({
                quest: t,
                questContent: h.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: r,
            });
        };
    return (0, r.jsx)(s.zx, {
        className: v.cta,
        color: s.zx.Colors.BRAND,
        fullWidth: !0,
        onClick: a,
        size: s.zx.Sizes.SMALL,
        children: (0, _.F9)(i),
    });
}
let P = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            i = (0, f.aM)();
        return (0, r.jsx)(s.zx, {
            className: v.cta,
            size: s.zx.Sizes.SMALL,
            onClick: () =>
                (0, _.nc)(t, {
                    content: h.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: i,
                    sourceQuestContent: n,
                }),
            children: (0, _.pO)(t) ? O.intl.string(O.t.hvVgAQ) : O.intl.string(O.t.lwQdjI),
        });
    },
    w = (e) => {
        var t;
        let { quest: n, sourceQuestContent: i } = e,
            a = null == (t = (0, f.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(s.zx, {
            fullWidth: !0,
            className: v.cta,
            onClick: () =>
                (0, _.gI)(
                    { quest: n },
                    {
                        content: h.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: a,
                        sourceQuestContent: i,
                    },
                ),
            size: s.zx.Sizes.SMALL,
            children: O.intl.string(O.t.csptqa),
        });
    },
    D = (e) => {
        let { quest: t } = e,
            n = (0, _.Vl)(t),
            i = t.config.features.includes(b.S7.START_QUEST_CTA),
            a = (0, m.CR)({ quest: t }),
            { launchInGameActivity: o } = (0, p.zB)(t);
        return n && i
            ? (0, r.jsx)(s.zx, {
                  className: v.cta,
                  color: s.zx.Colors.BRAND,
                  fullWidth: !0,
                  onClick: o,
                  size: s.zx.Sizes.SMALL,
                  children: a,
              })
            : null;
    },
    x = (e) => {
        var t,
            {
                quest: n,
                useReducedMotion: a,
                isExpanded: d,
                className: f,
                ctaLabel: p,
                onClick: m,
                questContent: g = h.jn.QUEST_BAR_V2,
                sourceQuestContent: b,
                shouldShowRewardsCTAWhenCollapsed: I = !1,
            } = e,
            S = C(e, [
                "quest",
                "useReducedMotion",
                "isExpanded",
                "className",
                "ctaLabel",
                "onClick",
                "questContent",
                "sourceQuestContent",
                "shouldShowRewardsCTAWhenCollapsed",
            ]);
        let N = (0, E.hf)({
                quest: n,
                questContent: g,
                sourceQuestContent: b,
            }),
            R = i.useCallback(
                (e) => {
                    var t;
                    null == m || m(e),
                        (0, _.xN)(n.config) && (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, u.mK)({
                                  openInLayer: !1,
                                  tab: y.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: c.Z.QUEST_HOME_PAGE,
                              })
                            : N();
                },
                [m, n.config, null == (t = n.userStatus) ? void 0 : t.claimedAt, N],
            );
        return (0, r.jsx)(
            l.gtL,
            A(
                T(
                    {
                        fullWidth: !0,
                        size: s.zx.Sizes.SMALL,
                        onClick: R,
                        pauseAnimation: a || (!d && !I),
                        className: o()(v.cta, f),
                        buttonShineClassName: v.shine,
                    },
                    S,
                ),
                { children: null != p ? p : O.intl.string(O.t.cfY4PD) },
            ),
        );
    },
    L = (e) => {
        var t;
        let {
                quest: n,
                sourceQuestContent: i,
                useReducedMotion: a,
                isExpanded: o,
                awaitingConsoleConnections: s,
                hasMadeProgress: l,
                isProgressing: c,
                activeScreen: u,
                taskDetails: d,
                shouldShowRewardsCTAWhenCollapsed: f,
            } = e,
            p = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            m = (0, _.q8)(n),
            g = (0, _.Vl)(n);
        if (p)
            return (0, r.jsx)(x, {
                quest: n,
                sourceQuestContent: i,
                useReducedMotion: a,
                isExpanded: o,
                shouldShowRewardsCTAWhenCollapsed: f,
            });
        if (m)
            return (0, r.jsx)(R, {
                quest: n,
                sourceQuestContent: i,
                taskDetails: d,
            });
        if (g) return (0, r.jsx)(D, { quest: n });
        if (u === h.LI.CONSOLE && s)
            return (0, r.jsx)(w, {
                quest: n,
                sourceQuestContent: i,
            });
        if (u !== h.LI.SELECT && !l && !c)
            return (0, r.jsx)(P, {
                quest: n,
                sourceQuestContent: i,
            });
        return null;
    };
function j(e) {
    return (0, r.jsxs)("div", {
        className: v.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(s.zx, {
                    className: v.backButton,
                    innerClassName: v.backButtonInner,
                    look: "blank",
                    grow: !1,
                    fullWidth: !1,
                    size: "none",
                    onClick: e.onBack,
                    children: (0, r.jsx)(l.V7D, { className: v.backIcon }),
                }),
            (0, r.jsx)(L, T({}, e)),
        ],
    });
}
