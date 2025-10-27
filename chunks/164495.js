n.d(t, {
    i: () => B,
    y: () => A,
});
var r = n(951288),
    s = n(647438),
    o = n(159691),
    l = n(755721),
    i = n(481060),
    a = n(100527),
    c = n(335131),
    u = n(617136),
    d = n(915750),
    p = n(509212),
    f = n(113434),
    x = n(497505),
    g = n(979232),
    j = n(373370),
    m = n(110560),
    h = n(667105),
    C = n(35215),
    b = n(46140),
    y = n(215023),
    v = n(388032),
    O = n(165016);
function k(e) {
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
function S(e, t) {
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
function E(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, r.jsx)(o.zxk, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            var e;
            let r = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? u.jZ.ACCEPT_QUEST : u.jZ.WATCH_VIDEO;
            (0, m.openVideoQuestModal)({
                quest: t,
                questContent: x.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: r,
            });
        },
        size: "sm",
        text: (0, p.F9)(s),
    });
}
let N = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, d.aM)(),
            l = (() => {
                var e;
                let n = null == (e = t.config.ctaConfig) ? void 0 : e.buttonLabel;
                return null != n
                    ? n
                    : (0, p.pO)(t) || t.config.features.includes(b.S7.NON_GAMING_PLAY_QUEST)
                      ? v.intl.string(v.t.hvVgAZ)
                      : v.intl.string(v.t.lwQdjB);
            })();
        return (0, r.jsx)(o.zxk, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, p.nc)(t, {
                    content: x.jn.QUEST_BAR_V2,
                    ctaContent: u.jZ.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: l,
        });
    },
    w = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s } = e,
            l = null == (t = (0, d.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(o.zxk, {
            fullWidth: !0,
            onClick: () =>
                (0, p.gI)(
                    { quest: n },
                    {
                        content: x.jn.QUEST_BAR_V2,
                        ctaContent: u.jZ.CONNECT_CONSOLE,
                        impressionId: l,
                        sourceQuestContent: s,
                    },
                ),
            size: "sm",
            text: v.intl.string(v.t.csptqV),
        });
    },
    P = (e) => {
        let { quest: t } = e,
            n = (0, j.CR)({ quest: t }),
            { launchInGameActivity: s } = (0, f.zB)(t);
        return (0, p.Rt)(t)
            ? (0, r.jsx)(o.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, m.getPrimaryCtaIcon)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    _ = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: l,
                onGameSheetOpened: i,
                onGameSheetClosed: a,
            } = e,
            { applications: c } = s;
        return (0, r.jsx)(C.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: l,
            onGameSheetOpened: i,
            onGameSheetClosed: a,
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    k(
                        {
                            variant: "secondary",
                            fullWidth: !0,
                            size: "sm",
                            text: v.intl.string(v.t["93PTEs"]),
                        },
                        e,
                    ),
                ),
        });
    },
    B = (e) => {
        var t,
            n,
            {
                quest: d,
                useReducedMotion: f,
                isExpanded: j,
                className: m,
                ctaLabel: C,
                onClick: b,
                questContent: E = x.jn.QUEST_BAR_V2,
                sourceQuestContent: N,
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
        let P = (null == (t = d.userStatus) ? void 0 : t.completedAt) != null,
            _ = (0, h.hf)({
                quest: d,
                questContent: E,
                sourceQuestContent: N,
            }),
            B = s.useCallback(
                (e) => {
                    var t;
                    null == b || b(e),
                        (0, p.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  tab: y.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: a.Z.QUEST_HOME_PAGE,
                              })
                            : _();
                },
                [b, d.config, null == (n = d.userStatus) ? void 0 : n.claimedAt, _],
            ),
            { shouldUseShinyButton: z } = g.Z.useConfig({ location: (0, u._b)(N) + "- CtaButton" });
        return z
            ? (0, r.jsx)(
                  i.gtL,
                  S(
                      k(
                          {
                              fullWidth: !0,
                              size: l.zx.Sizes.SMALL,
                              onClick: B,
                              pauseAnimation: f || (!j && !P),
                              className: m,
                              buttonShineClassName: O.shine,
                              "data-migration-pending": !0,
                          },
                          w,
                      ),
                      { children: null != C ? C : v.intl.string(v.t.cfY4PE) },
                  ),
              )
            : (0, r.jsx)(
                  o.zxk,
                  S(
                      k(
                          {
                              fullWidth: !0,
                              onClick: B,
                              text: null != C ? C : v.intl.string(v.t.cfY4PE),
                          },
                          w,
                      ),
                      { size: w.size === l.zx.Sizes.MEDIUM ? "md" : "sm" },
                  ),
              );
    },
    z = (e) => {
        var t;
        let {
                quest: n,
                sourceQuestContent: s,
                useReducedMotion: o,
                isExpanded: l,
                awaitingConsoleConnections: i,
                hasMadeProgress: a,
                isProgressing: c,
                activeScreen: u,
                taskDetails: d,
                popoutTargetElementRef: f,
                onGameSheetOpened: g,
                onGameSheetClosed: j,
            } = e,
            m = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            h = (0, p.q8)(n),
            C = u !== x.LI.SELECT && !a && !c,
            b = null;
        return (
            m
                ? (b = (0, r.jsx)(B, {
                      quest: n,
                      sourceQuestContent: s,
                      useReducedMotion: o,
                      isExpanded: l,
                  }))
                : h
                  ? (b = (0, r.jsx)(E, {
                        quest: n,
                        sourceQuestContent: s,
                        taskDetails: d,
                    }))
                  : (0, p.Rt)(n)
                    ? (b = (0, r.jsx)(P, { quest: n }))
                    : u === x.LI.CONSOLE && i
                      ? (b = (0, r.jsx)(w, {
                            quest: n,
                            sourceQuestContent: s,
                        }))
                      : C && (0, p.Pb)(n)
                        ? (b = (0, r.jsx)(_, {
                              quest: n,
                              sourceQuestContent: s,
                              taskDetails: d,
                              popoutTargetElementRef: f,
                              onGameSheetOpened: g,
                              onGameSheetClosed: j,
                          }))
                        : C &&
                          (b = (0, r.jsx)(N, {
                              quest: n,
                              sourceQuestContent: s,
                          })),
            null == b
                ? null
                : (0, r.jsx)("div", {
                      className: O.cta,
                      children: b,
                  })
        );
    };
function A(e) {
    let t = s.useRef(null);
    return (0, r.jsxs)("div", {
        className: O.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, r.jsx)(o.hU, {
                    size: "sm",
                    "aria-label": v.intl.string(v.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: i.V7D,
                    variant: "secondary",
                }),
            (0, r.jsx)(
                z,
                S(k({}, e), {
                    popoutTargetElementRef: t,
                    onGameSheetOpened: e.onGameSheetOpened,
                    onGameSheetClosed: e.onGameSheetClosed,
                }),
            ),
        ],
    });
}
