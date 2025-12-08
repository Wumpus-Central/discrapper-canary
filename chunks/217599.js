n.d(t, { r: () => q });
var r = n(54381),
    s = n(473749),
    o = n(159691),
    a = n(755721),
    i = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(617136),
    d = n(915750),
    p = n(49436),
    m = n(979232),
    f = n(373370),
    g = n(968843),
    x = n(304696),
    h = n(387745),
    _ = n(115179),
    b = n(254579),
    j = n(283689),
    v = n(542347),
    C = n(659302),
    y = n(110560),
    E = n(35215),
    O = n(215023),
    S = n(388032),
    T = n(802378);
function w(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, r.jsx)(o.zxk, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            var e;
            let r = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? u.jZ.ACCEPT_QUEST : u.jZ.WATCH_VIDEO;
            (0, y.openVideoQuestModal)({
                quest: t,
                questContent: p.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: r,
            });
        },
        size: "sm",
        text: (0, v.F9)(s),
    });
}
let R = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, d.aM)(),
            a = (0, x.V_)(t);
        return (0, r.jsx)(o.zxk, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, h.nc)(t, {
                    content: p.jn.QUEST_BAR_V2,
                    ctaContent: u.jZ.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: a,
        });
    },
    A = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s } = e,
            a = null == (t = (0, d.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(o.zxk, {
            fullWidth: !0,
            onClick: () =>
                (0, h.gI)(
                    { quest: n },
                    {
                        content: p.jn.QUEST_BAR_V2,
                        ctaContent: u.jZ.CONNECT_CONSOLE,
                        impressionId: a,
                        sourceQuestContent: s,
                    },
                ),
            size: "sm",
            text: S.intl.string(S.t.csptqV),
        });
    },
    B = (e) => {
        let { quest: t } = e,
            n = (0, f.CR)({ quest: t }),
            { launchInGameActivity: s } = (0, g.zB)(t);
        return (0, j.Rt)(t)
            ? (0, r.jsx)(o.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, y.getPrimaryCtaIcon)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    k = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: a,
                onGameSheetOpened: i,
                onGameSheetClosed: l,
            } = e,
            { applications: c } = s;
        return (0, r.jsx)(E.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: a,
            onGameSheetOpened: i,
            onGameSheetClosed: l,
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    w(
                        {
                            variant: "secondary",
                            fullWidth: !0,
                            size: "sm",
                            text: S.intl.string(S.t["93PTEs"]),
                        },
                        e,
                    ),
                ),
        });
    },
    I = (e) => {
        var t,
            n,
            {
                quest: d,
                useReducedMotion: f,
                isExpanded: g,
                className: x,
                ctaLabel: h,
                onClick: b,
                questContent: j = p.jn.QUEST_BAR_V2,
                sourceQuestContent: v,
            } = e,
            y = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                }
                return s;
            })(e, [
                "quest",
                "useReducedMotion",
                "isExpanded",
                "className",
                "ctaLabel",
                "onClick",
                "questContent",
                "sourceQuestContent",
            ]);
        let E = (null == (t = d.userStatus) ? void 0 : t.completedAt) != null,
            N = (0, C.hf)({
                quest: d,
                questContent: j,
                sourceQuestContent: v,
            }),
            R = s.useCallback(
                (e) => {
                    var t;
                    null == b || b(e),
                        (0, _.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  tab: O.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE,
                              })
                            : N();
                },
                [b, d.config, null == (n = d.userStatus) ? void 0 : n.claimedAt, N],
            ),
            { shouldUseShinyButton: A } = m.Z.useConfig({ location: (0, u._b)(v) + "- CtaButton" });
        return A
            ? (0, r.jsx)(
                  i.gtL,
                  P(
                      w(
                          {
                              fullWidth: !0,
                              size: a.zx.Sizes.SMALL,
                              onClick: R,
                              pauseAnimation: f || (!g && !E),
                              className: x,
                              buttonShineClassName: T.shine,
                              "data-migration-pending": !0,
                          },
                          y,
                      ),
                      { children: null != h ? h : S.intl.string(S.t.cfY4PE) },
                  ),
              )
            : (0, r.jsx)(
                  o.zxk,
                  P(
                      w(
                          {
                              fullWidth: !0,
                              onClick: R,
                              text: null != h ? h : S.intl.string(S.t.cfY4PE),
                          },
                          y,
                      ),
                      { size: y.size === a.zx.Sizes.MEDIUM ? "md" : "sm" },
                  ),
              );
    },
    D = (e) => {
        var t;
        let {
                quest: n,
                sourceQuestContent: s,
                useReducedMotion: o,
                isExpanded: a,
                awaitingConsoleConnections: i,
                hasMadeProgress: l,
                isProgressing: c,
                activeScreen: u,
                taskDetails: d,
                popoutTargetElementRef: m,
                onGameSheetOpened: f,
                onGameSheetClosed: g,
            } = e,
            x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            h = (0, b.q8)(n),
            _ = u !== p.LI.SELECT && !l && !c,
            v = null;
        return (
            x
                ? (v = (0, r.jsx)(I, {
                      quest: n,
                      sourceQuestContent: s,
                      useReducedMotion: o,
                      isExpanded: a,
                  }))
                : h
                  ? (v = (0, r.jsx)(N, {
                        quest: n,
                        sourceQuestContent: s,
                        taskDetails: d,
                    }))
                  : (0, j.Rt)(n)
                    ? (v = (0, r.jsx)(B, { quest: n }))
                    : u === p.LI.CONSOLE && i
                      ? (v = (0, r.jsx)(A, {
                            quest: n,
                            sourceQuestContent: s,
                        }))
                      : _ && (0, j.Pb)(n)
                        ? (v = (0, r.jsx)(k, {
                              quest: n,
                              sourceQuestContent: s,
                              taskDetails: d,
                              popoutTargetElementRef: m,
                              onGameSheetOpened: f,
                              onGameSheetClosed: g,
                          }))
                        : _ &&
                          (v = (0, r.jsx)(R, {
                              quest: n,
                              sourceQuestContent: s,
                          })),
            null == v
                ? null
                : (0, r.jsx)("div", {
                      className: T.cta,
                      children: v,
                  })
        );
    };
function q(e) {
    let t = s.useRef(null);
    return (0, r.jsxs)("div", {
        className: T.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, r.jsx)(o.hU, {
                    size: "sm",
                    "aria-label": S.intl.string(S.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: i.V7D,
                    variant: "secondary",
                }),
            (0, r.jsx)(
                D,
                P(w({}, e), {
                    popoutTargetElementRef: t,
                    onGameSheetOpened: e.onGameSheetOpened,
                    onGameSheetClosed: e.onGameSheetClosed,
                }),
            ),
        ],
    });
}
