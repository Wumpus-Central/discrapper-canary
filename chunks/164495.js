n.d(t, { y: () => B });
var r = n(951288),
    s = n(647438),
    o = n(159691),
    a = n(755721),
    i = n(481060),
    l = n(100527),
    c = n(335131),
    d = n(617136),
    u = n(915750),
    p = n(509212),
    m = n(113434),
    g = n(497505),
    f = n(979232),
    h = n(373370),
    x = n(110560),
    j = n(667105),
    b = n(35215),
    _ = n(46140),
    v = n(215023),
    C = n(388032),
    y = n(165016);
function E(e) {
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
function O(e, t) {
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
function S(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, r.jsx)(o.zxk, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            var e;
            let r = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
            (0, x.openVideoQuestModal)({
                quest: t,
                questContent: g.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: r,
            });
        },
        size: "sm",
        text: (0, p.F9)(s),
    });
}
let T = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, u.aM)(),
            a = (() => {
                var e;
                let n = null == (e = t.config.ctaConfig) ? void 0 : e.buttonLabel;
                return null != n
                    ? n
                    : (0, p.pO)(t) || t.config.features.includes(_.S7.NON_GAMING_PLAY_QUEST)
                      ? C.intl.string(C.t.hvVgAZ)
                      : C.intl.string(C.t.lwQdjB);
            })();
        return (0, r.jsx)(o.zxk, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, p.nc)(t, {
                    content: g.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: a,
        });
    },
    w = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s } = e,
            a = null == (t = (0, u.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(o.zxk, {
            fullWidth: !0,
            onClick: () =>
                (0, p.gI)(
                    { quest: n },
                    {
                        content: g.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: a,
                        sourceQuestContent: s,
                    },
                ),
            size: "sm",
            text: C.intl.string(C.t.csptqV),
        });
    },
    P = (e) => {
        let { quest: t } = e,
            n = (0, h.CR)({ quest: t }),
            { launchInGameActivity: s } = (0, m.zB)(t);
        return (0, p.Rt)(t)
            ? (0, r.jsx)(o.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, x.getPrimaryCtaIcon)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    N = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: a,
                onGameSheetOpened: i,
                onGameSheetClosed: l,
            } = e,
            { applications: c } = s;
        return (0, r.jsx)(b.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: a,
            onGameSheetOpened: i,
            onGameSheetClosed: l,
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    E(
                        {
                            variant: "secondary",
                            fullWidth: !0,
                            size: "sm",
                            text: C.intl.string(C.t["93PTEs"]),
                        },
                        e,
                    ),
                ),
        });
    },
    A = (e) => {
        var t,
            n,
            {
                quest: u,
                useReducedMotion: m,
                isExpanded: h,
                className: x,
                ctaLabel: b,
                onClick: _,
                questContent: S = g.jn.QUEST_BAR_V2,
                sourceQuestContent: T,
            } = e,
            w = (function (e, t) {
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
        let P = (null == (t = u.userStatus) ? void 0 : t.completedAt) != null,
            N = (0, j.hf)({
                quest: u,
                questContent: S,
                sourceQuestContent: T,
            }),
            A = s.useCallback(
                (e) => {
                    var t;
                    null == _ || _(e),
                        (0, p.xN)(u.config) && (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  tab: v.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE,
                              })
                            : N();
                },
                [_, u.config, null == (n = u.userStatus) ? void 0 : n.claimedAt, N],
            ),
            { shouldUseShinyButton: R } = f.Z.useConfig({ location: (0, d._b)(T) + "- CtaButton" });
        return R
            ? (0, r.jsx)(
                  i.gtL,
                  O(
                      E(
                          {
                              fullWidth: !0,
                              size: a.zx.Sizes.SMALL,
                              onClick: A,
                              pauseAnimation: m || (!h && !P),
                              className: x,
                              buttonShineClassName: y.shine,
                              "data-migration-pending": !0,
                          },
                          w,
                      ),
                      { children: null != b ? b : C.intl.string(C.t.cfY4PE) },
                  ),
              )
            : (0, r.jsx)(
                  o.zxk,
                  O(
                      E(
                          {
                              fullWidth: !0,
                              onClick: A,
                              text: null != b ? b : C.intl.string(C.t.cfY4PE),
                          },
                          w,
                      ),
                      { size: w.size === a.zx.Sizes.MEDIUM ? "md" : "sm" },
                  ),
              );
    },
    R = (e) => {
        var t;
        let {
                quest: n,
                sourceQuestContent: s,
                useReducedMotion: o,
                isExpanded: a,
                awaitingConsoleConnections: i,
                hasMadeProgress: l,
                isProgressing: c,
                activeScreen: d,
                taskDetails: u,
                popoutTargetElementRef: m,
                onGameSheetOpened: f,
                onGameSheetClosed: h,
            } = e,
            x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            j = (0, p.q8)(n),
            b = d !== g.LI.SELECT && !l && !c,
            _ = null;
        return (
            x
                ? (_ = (0, r.jsx)(A, {
                      quest: n,
                      sourceQuestContent: s,
                      useReducedMotion: o,
                      isExpanded: a,
                  }))
                : j
                  ? (_ = (0, r.jsx)(S, {
                        quest: n,
                        sourceQuestContent: s,
                        taskDetails: u,
                    }))
                  : (0, p.Rt)(n)
                    ? (_ = (0, r.jsx)(P, { quest: n }))
                    : d === g.LI.CONSOLE && i
                      ? (_ = (0, r.jsx)(w, {
                            quest: n,
                            sourceQuestContent: s,
                        }))
                      : b && (0, p.Pb)(n)
                        ? (_ = (0, r.jsx)(N, {
                              quest: n,
                              sourceQuestContent: s,
                              taskDetails: u,
                              popoutTargetElementRef: m,
                              onGameSheetOpened: f,
                              onGameSheetClosed: h,
                          }))
                        : b &&
                          (_ = (0, r.jsx)(T, {
                              quest: n,
                              sourceQuestContent: s,
                          })),
            null == _
                ? null
                : (0, r.jsx)("div", {
                      className: y.cta,
                      children: _,
                  })
        );
    };
function B(e) {
    let t = s.useRef(null);
    return (0, r.jsxs)("div", {
        className: y.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, r.jsx)(o.hU, {
                    size: "sm",
                    "aria-label": C.intl.string(C.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: i.V7D,
                    variant: "secondary",
                }),
            (0, r.jsx)(
                R,
                O(E({}, e), {
                    popoutTargetElementRef: t,
                    onGameSheetOpened: e.onGameSheetOpened,
                    onGameSheetClosed: e.onGameSheetClosed,
                }),
            ),
        ],
    });
}
