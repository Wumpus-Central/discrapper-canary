n.d(t, {
    i: () => j,
    y: () => k,
});
var r = n(951288),
    i = n(647438),
    a = n(159691),
    o = n(755721),
    s = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(617136),
    d = n(915750),
    f = n(509212),
    _ = n(113434),
    p = n(497505),
    h = n(979232),
    m = n(373370),
    g = n(110560),
    E = n(667105),
    b = n(35215),
    y = n(46140),
    O = n(215023),
    v = n(388032),
    I = n(165016);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function P(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: i } = e,
        o = () => {
            var e;
            let r = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? u.jZ.ACCEPT_QUEST : u.jZ.WATCH_VIDEO;
            (0, g.openVideoQuestModal)({
                quest: t,
                questContent: p.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: r,
            });
        };
    return (0, r.jsx)(a.zxk, {
        variant: "primary",
        fullWidth: !0,
        onClick: o,
        size: "sm",
        text: (0, f.F9)(i),
    });
}
let w = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            i = (0, d.aM)(),
            o =
                (0, f.pO)(t) || t.config.features.includes(y.S7.NON_GAMING_PLAY_QUEST)
                    ? v.intl.string(v.t.hvVgAQ)
                    : v.intl.string(v.t.lwQdjI);
        return (0, r.jsx)(a.zxk, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, f.nc)(t, {
                    content: p.jn.QUEST_BAR_V2,
                    ctaContent: u.jZ.OPEN_GAME_LINK,
                    impressionId: i,
                    sourceQuestContent: n,
                }),
            text: o,
        });
    },
    D = (e) => {
        var t;
        let { quest: n, sourceQuestContent: i } = e,
            o = null == (t = (0, d.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(a.zxk, {
            fullWidth: !0,
            onClick: () =>
                (0, f.gI)(
                    { quest: n },
                    {
                        content: p.jn.QUEST_BAR_V2,
                        ctaContent: u.jZ.CONNECT_CONSOLE,
                        impressionId: o,
                        sourceQuestContent: i,
                    },
                ),
            size: "sm",
            text: v.intl.string(v.t.csptqa),
        });
    },
    x = (e) => {
        let { quest: t } = e,
            n = (0, m.CR)({ quest: t }),
            { launchInGameActivity: i } = (0, _.zB)(t);
        return (0, f.Rt)(t)
            ? (0, r.jsx)(a.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: t.config.features.includes(y.S7.CLOUD_GAMING_ACTIVITY) ? a.v3n : void 0,
                  onClick: i,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    L = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: i,
                popoutTargetElementRef: o,
                onGameSheetOpened: s,
                onGameSheetClosed: l,
            } = e,
            { applications: c } = i;
        return (0, r.jsx)(b.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: o,
            onGameSheetOpened: s,
            onGameSheetClosed: l,
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    S(
                        {
                            variant: "secondary",
                            fullWidth: !0,
                            size: "sm",
                            text: v.intl.string(v.t["93PTEh"]),
                        },
                        e,
                    ),
                ),
        });
    },
    j = (e) => {
        var t,
            n,
            {
                quest: d,
                useReducedMotion: _,
                isExpanded: m,
                className: g,
                ctaLabel: b,
                onClick: y,
                questContent: T = p.jn.QUEST_BAR_V2,
                sourceQuestContent: A,
            } = e,
            R = N(e, [
                "quest",
                "useReducedMotion",
                "isExpanded",
                "className",
                "ctaLabel",
                "onClick",
                "questContent",
                "sourceQuestContent",
            ]);
        let P = (null == (t = d.userStatus) ? void 0 : t.completedAt) != null,
            w = (0, E.hf)({
                quest: d,
                questContent: T,
                sourceQuestContent: A,
            }),
            D = i.useCallback(
                (e) => {
                    var t;
                    null == y || y(e),
                        (0, f.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: O.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE,
                              })
                            : w();
                },
                [y, d.config, null == (n = d.userStatus) ? void 0 : n.claimedAt, w],
            ),
            { shouldUseShinyButton: x } = h.Z.useConfig({ location: (0, u._b)(A) + "- CtaButton" });
        return x
            ? (0, r.jsx)(
                  s.gtL,
                  C(
                      S(
                          {
                              fullWidth: !0,
                              size: o.zx.Sizes.SMALL,
                              onClick: D,
                              pauseAnimation: _ || (!m && !P),
                              className: g,
                              buttonShineClassName: I.shine,
                              "data-migration-pending": !0,
                          },
                          R,
                      ),
                      { children: null != b ? b : v.intl.string(v.t.cfY4PD) },
                  ),
              )
            : (0, r.jsx)(
                  a.zxk,
                  C(
                      S(
                          {
                              fullWidth: !0,
                              onClick: D,
                              text: null != b ? b : v.intl.string(v.t.cfY4PD),
                          },
                          R,
                      ),
                      { size: R.size === o.zx.Sizes.MEDIUM ? "md" : "sm" },
                  ),
              );
    },
    M = (e) => {
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
                popoutTargetElementRef: _,
                onGameSheetOpened: h,
                onGameSheetClosed: m,
            } = e,
            g = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            E = (0, f.q8)(n),
            b = u !== p.LI.SELECT && !l && !c,
            y = null;
        return (
            g
                ? (y = (0, r.jsx)(j, {
                      quest: n,
                      sourceQuestContent: i,
                      useReducedMotion: a,
                      isExpanded: o,
                  }))
                : E
                  ? (y = (0, r.jsx)(P, {
                        quest: n,
                        sourceQuestContent: i,
                        taskDetails: d,
                    }))
                  : (0, f.Rt)(n)
                    ? (y = (0, r.jsx)(x, { quest: n }))
                    : u === p.LI.CONSOLE && s
                      ? (y = (0, r.jsx)(D, {
                            quest: n,
                            sourceQuestContent: i,
                        }))
                      : b && (0, f.Pb)(n)
                        ? (y = (0, r.jsx)(L, {
                              quest: n,
                              sourceQuestContent: i,
                              taskDetails: d,
                              popoutTargetElementRef: _,
                              onGameSheetOpened: h,
                              onGameSheetClosed: m,
                          }))
                        : b &&
                          (y = (0, r.jsx)(w, {
                              quest: n,
                              sourceQuestContent: i,
                          })),
            null == y
                ? null
                : (0, r.jsx)("div", {
                      className: I.cta,
                      children: y,
                  })
        );
    };
function k(e) {
    let t = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: I.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, r.jsx)(a.hU, {
                    size: "sm",
                    "aria-label": v.intl.string(v.t["13/7kZ"]),
                    onClick: e.onBack,
                    icon: s.V7D,
                    variant: "secondary",
                }),
            (0, r.jsx)(
                M,
                C(S({}, e), {
                    popoutTargetElementRef: t,
                    onGameSheetOpened: e.onGameSheetOpened,
                    onGameSheetClosed: e.onGameSheetClosed,
                }),
            ),
        ],
    });
}
