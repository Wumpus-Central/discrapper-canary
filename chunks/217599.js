n.d(t, { r: () => B });
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(159691),
    s = n(755721),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(335131),
    m = n(617136),
    p = n(915750),
    h = n(49436),
    f = n(979232),
    x = n(373370),
    b = n(968843),
    g = n(304696),
    v = n(387745),
    j = n(115179),
    y = n(254579),
    C = n(283689),
    _ = n(542347),
    S = n(659302),
    E = n(110560),
    T = n(35215),
    O = n(526188),
    N = n(215023),
    P = n(388032),
    w = n(306946);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, a.jsx)(l.zxk, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            var e;
            let a = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? m.jZ.ACCEPT_QUEST : m.jZ.WATCH_VIDEO;
            (0, E.openVideoQuestModal)({
                quest: t,
                questContent: h.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: a,
            });
        },
        size: "sm",
        text: (0, _.F9)(r),
    });
}
let A = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            r = (0, p.aM)(),
            i = (0, g.V_)(t);
        return (0, a.jsx)(l.zxk, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, v.nc)(t, {
                    content: h.jn.QUEST_BAR_V2,
                    ctaContent: m.jZ.OPEN_GAME_LINK,
                    impressionId: r,
                    sourceQuestContent: n,
                }),
            text: i,
        });
    },
    Z = (e) => {
        var t;
        let { quest: n, sourceQuestContent: r } = e,
            i = null == (t = (0, p.WD)()) ? void 0 : t.getId();
        return (0, a.jsx)(l.zxk, {
            fullWidth: !0,
            onClick: () =>
                (0, v.gI)(
                    { quest: n },
                    {
                        content: h.jn.QUEST_BAR_V2,
                        ctaContent: m.jZ.CONNECT_CONSOLE,
                        impressionId: i,
                        sourceQuestContent: r,
                    },
                ),
            size: "sm",
            text: P.intl.string(P.t.csptqV),
        });
    },
    D = (e) => {
        let { quest: t } = e,
            n = (0, x.CR)({ quest: t }),
            { launchInGameActivity: r } = (0, b.zB)(t);
        return (0, C.Rt)(t)
            ? (0, a.jsx)(l.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, E.getPrimaryCtaIcon)(t),
                  onClick: r,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    L = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: r,
                popoutTargetElementRef: i,
                onGameSheetOpened: s,
                onGameSheetClosed: o,
            } = e,
            { applications: c } = r;
        return (0, a.jsx)(T.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: i,
            onGameSheetOpened: s,
            onGameSheetClosed: o,
            children: (e) =>
                (0, a.jsx)(
                    l.zxk,
                    I(
                        {
                            variant: "secondary",
                            fullWidth: !0,
                            size: "sm",
                            text: P.intl.string(P.t["93PTEs"]),
                        },
                        e,
                    ),
                ),
        });
    },
    M = (e) => {
        var t,
            n,
            {
                quest: i,
                useReducedMotion: c,
                isExpanded: p,
                className: x,
                ctaLabel: b,
                onClick: g,
                questContent: v = h.jn.QUEST_BAR_V2,
                sourceQuestContent: y,
            } = e,
            C = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            r = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++)
                        (n = i[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
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
        let _ = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
            E = (0, S.hf)({
                quest: i,
                questContent: v,
                sourceQuestContent: y,
            }),
            T = r.useCallback(
                (e) => {
                    var t;
                    null == g || g(e),
                        (0, j.xN)(i.config) && (null == (t = i.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, u.mK)({
                                  tab: N.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: d.Z.QUEST_HOME_PAGE,
                              })
                            : E();
                },
                [g, i.config, null == (n = i.userStatus) ? void 0 : n.claimedAt, E],
            ),
            { shouldUseShinyButton: O } = f.Z.useConfig({ location: (0, m._b)(y) + "- CtaButton" });
        return O
            ? (0, a.jsx)(
                  o.gtL,
                  k(
                      I(
                          {
                              fullWidth: !0,
                              size: s.zx.Sizes.SMALL,
                              onClick: T,
                              pauseAnimation: c || (!p && !_),
                              className: x,
                              buttonShineClassName: w.shine,
                              "data-migration-pending": !0,
                          },
                          C,
                      ),
                      { children: null != b ? b : P.intl.string(P.t.cfY4PE) },
                  ),
              )
            : (0, a.jsx)(
                  l.zxk,
                  k(
                      I(
                          {
                              fullWidth: !0,
                              onClick: T,
                              text: null != b ? b : P.intl.string(P.t.cfY4PE),
                          },
                          C,
                      ),
                      { size: C.size === s.zx.Sizes.MEDIUM ? "md" : "sm" },
                  ),
              );
    },
    U = (e) => {
        var t;
        let {
                isExpanded: n,
                sourceQuestContent: l,
                awaitingConsoleConnections: s,
                hasMadeProgress: o,
                isProgressing: d,
                activeScreen: u,
                popoutTargetElementRef: m,
            } = e,
            { quest: p, onGameSheetOpen: f, onGameSheetClose: x, taskDetails: b } = r.useContext(O.A),
            g = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
            v = (null == (t = p.userStatus) ? void 0 : t.completedAt) != null,
            j = (0, y.q8)(p),
            _ = u !== h.LI.SELECT && !o && !d,
            S = null;
        return (
            v
                ? (S = (0, a.jsx)(M, {
                      quest: p,
                      sourceQuestContent: l,
                      useReducedMotion: g,
                      isExpanded: n,
                  }))
                : j
                  ? (S = (0, a.jsx)(R, {
                        quest: p,
                        sourceQuestContent: l,
                        taskDetails: b,
                    }))
                  : (0, C.Rt)(p)
                    ? (S = (0, a.jsx)(D, { quest: p }))
                    : u === h.LI.CONSOLE && s
                      ? (S = (0, a.jsx)(Z, {
                            quest: p,
                            sourceQuestContent: l,
                        }))
                      : _ && (0, C.Pb)(p)
                        ? (S = (0, a.jsx)(L, {
                              quest: p,
                              sourceQuestContent: l,
                              taskDetails: b,
                              popoutTargetElementRef: m,
                              onGameSheetOpened: f,
                              onGameSheetClosed: x,
                          }))
                        : _ &&
                          (S = (0, a.jsx)(A, {
                              quest: p,
                              sourceQuestContent: l,
                          })),
            null == S
                ? null
                : (0, a.jsx)("div", {
                      className: w.cta,
                      children: S,
                  })
        );
    };
function B(e) {
    let t = r.useRef(null);
    return (0, a.jsxs)("div", {
        className: w.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, a.jsx)(l.hU, {
                    size: "sm",
                    "aria-label": P.intl.string(P.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: o.V7D,
                    variant: "secondary",
                }),
            (0, a.jsx)(U, k(I({}, e), { popoutTargetElementRef: t })),
        ],
    });
}
