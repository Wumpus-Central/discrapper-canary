n.d(t, {
    i: () => T,
    y: () => z,
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
    y = n(46140),
    v = n(215023),
    O = n(388032),
    b = n(165016);
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
            l =
                (0, p.pO)(t) || t.config.features.includes(y.S7.NON_GAMING_PLAY_QUEST)
                    ? O.intl.string(O.t.hvVgAQ)
                    : O.intl.string(O.t.lwQdjI);
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
    _ = (e) => {
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
            text: O.intl.string(O.t.csptqa),
        });
    },
    w = (e) => {
        let { quest: t } = e,
            n = (0, j.CR)({ quest: t }),
            { launchInGameActivity: s } = (0, f.zB)(t);
        return (0, p.Rt)(t)
            ? (0, r.jsx)(o.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: t.config.features.includes(y.S7.CLOUD_GAMING_ACTIVITY) ? o.v3n : void 0,
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    A = (e) => {
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
                            text: O.intl.string(O.t["93PTEh"]),
                        },
                        e,
                    ),
                ),
        });
    },
    T = (e) => {
        var t,
            n,
            {
                quest: d,
                useReducedMotion: f,
                isExpanded: j,
                className: m,
                ctaLabel: C,
                onClick: y,
                questContent: E = x.jn.QUEST_BAR_V2,
                sourceQuestContent: N,
            } = e,
            _ = (function (e, t) {
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
        let w = (null == (t = d.userStatus) ? void 0 : t.completedAt) != null,
            A = (0, h.hf)({
                quest: d,
                questContent: E,
                sourceQuestContent: N,
            }),
            T = s.useCallback(
                (e) => {
                    var t;
                    null == y || y(e),
                        (0, p.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: v.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: a.Z.QUEST_HOME_PAGE,
                              })
                            : A();
                },
                [y, d.config, null == (n = d.userStatus) ? void 0 : n.claimedAt, A],
            ),
            { shouldUseShinyButton: P } = g.Z.useConfig({ location: (0, u._b)(N) + "- CtaButton" });
        return P
            ? (0, r.jsx)(
                  i.gtL,
                  S(
                      k(
                          {
                              fullWidth: !0,
                              size: l.zx.Sizes.SMALL,
                              onClick: T,
                              pauseAnimation: f || (!j && !w),
                              className: m,
                              buttonShineClassName: b.shine,
                              "data-migration-pending": !0,
                          },
                          _,
                      ),
                      { children: null != C ? C : O.intl.string(O.t.cfY4PD) },
                  ),
              )
            : (0, r.jsx)(
                  o.zxk,
                  S(
                      k(
                          {
                              fullWidth: !0,
                              onClick: T,
                              text: null != C ? C : O.intl.string(O.t.cfY4PD),
                          },
                          _,
                      ),
                      { size: _.size === l.zx.Sizes.MEDIUM ? "md" : "sm" },
                  ),
              );
    },
    P = (e) => {
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
            y = null;
        return (
            m
                ? (y = (0, r.jsx)(T, {
                      quest: n,
                      sourceQuestContent: s,
                      useReducedMotion: o,
                      isExpanded: l,
                  }))
                : h
                  ? (y = (0, r.jsx)(E, {
                        quest: n,
                        sourceQuestContent: s,
                        taskDetails: d,
                    }))
                  : (0, p.Rt)(n)
                    ? (y = (0, r.jsx)(w, { quest: n }))
                    : u === x.LI.CONSOLE && i
                      ? (y = (0, r.jsx)(_, {
                            quest: n,
                            sourceQuestContent: s,
                        }))
                      : C && (0, p.Pb)(n)
                        ? (y = (0, r.jsx)(A, {
                              quest: n,
                              sourceQuestContent: s,
                              taskDetails: d,
                              popoutTargetElementRef: f,
                              onGameSheetOpened: g,
                              onGameSheetClosed: j,
                          }))
                        : C &&
                          (y = (0, r.jsx)(N, {
                              quest: n,
                              sourceQuestContent: s,
                          })),
            null == y
                ? null
                : (0, r.jsx)("div", {
                      className: b.cta,
                      children: y,
                  })
        );
    };
function z(e) {
    let t = s.useRef(null);
    return (0, r.jsxs)("div", {
        className: b.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, r.jsx)(o.hU, {
                    size: "sm",
                    "aria-label": O.intl.string(O.t["13/7kZ"]),
                    onClick: e.onBack,
                    icon: i.V7D,
                    variant: "secondary",
                }),
            (0, r.jsx)(
                P,
                S(k({}, e), {
                    popoutTargetElementRef: t,
                    onGameSheetOpened: e.onGameSheetOpened,
                    onGameSheetClosed: e.onGameSheetClosed,
                }),
            ),
        ],
    });
}
