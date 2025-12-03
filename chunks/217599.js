n.d(t, { r: () => k });
var r = n(54381),
    s = n(473749),
    o = n(159691),
    a = n(755721),
    i = n(481060),
    l = n(100527),
    c = n(335131),
    d = n(617136),
    u = n(915750),
    p = n(49436),
    m = n(509212),
    g = n(979232),
    f = n(373370),
    h = n(968843),
    x = n(115179),
    _ = n(542347),
    b = n(659302),
    j = n(110560),
    v = n(35215),
    C = n(215023),
    y = n(388032),
    E = n(802378);
function O(e) {
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
function T(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, r.jsx)(o.zxk, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            var e;
            let r = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
            (0, j.openVideoQuestModal)({
                quest: t,
                questContent: p.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: r,
            });
        },
        size: "sm",
        text: (0, _.F9)(s),
    });
}
let w = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, u.aM)(),
            a = (0, m.V_)(t);
        return (0, r.jsx)(o.zxk, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, m.nc)(t, {
                    content: p.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: a,
        });
    },
    P = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s } = e,
            a = null == (t = (0, u.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(o.zxk, {
            fullWidth: !0,
            onClick: () =>
                (0, m.gI)(
                    { quest: n },
                    {
                        content: p.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: a,
                        sourceQuestContent: s,
                    },
                ),
            size: "sm",
            text: y.intl.string(y.t.csptqV),
        });
    },
    N = (e) => {
        let { quest: t } = e,
            n = (0, f.CR)({ quest: t }),
            { launchInGameActivity: s } = (0, h.zB)(t);
        return (0, m.Rt)(t)
            ? (0, r.jsx)(o.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, j.getPrimaryCtaIcon)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    R = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: a,
                onGameSheetOpened: i,
                onGameSheetClosed: l,
            } = e,
            { applications: c } = s;
        return (0, r.jsx)(v.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: a,
            onGameSheetOpened: i,
            onGameSheetClosed: l,
            children: (e) =>
                (0, r.jsx)(
                    o.zxk,
                    O(
                        {
                            variant: "secondary",
                            fullWidth: !0,
                            size: "sm",
                            text: y.intl.string(y.t["93PTEs"]),
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
                isExpanded: f,
                className: h,
                ctaLabel: _,
                onClick: j,
                questContent: v = p.jn.QUEST_BAR_V2,
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
            N = (0, b.hf)({
                quest: u,
                questContent: v,
                sourceQuestContent: T,
            }),
            R = s.useCallback(
                (e) => {
                    var t;
                    null == j || j(e),
                        (0, x.xN)(u.config) && (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  tab: C.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE,
                              })
                            : N();
                },
                [j, u.config, null == (n = u.userStatus) ? void 0 : n.claimedAt, N],
            ),
            { shouldUseShinyButton: A } = g.Z.useConfig({ location: (0, d._b)(T) + "- CtaButton" });
        return A
            ? (0, r.jsx)(
                  i.gtL,
                  S(
                      O(
                          {
                              fullWidth: !0,
                              size: a.zx.Sizes.SMALL,
                              onClick: R,
                              pauseAnimation: m || (!f && !P),
                              className: h,
                              buttonShineClassName: E.shine,
                              "data-migration-pending": !0,
                          },
                          w,
                      ),
                      { children: null != _ ? _ : y.intl.string(y.t.cfY4PE) },
                  ),
              )
            : (0, r.jsx)(
                  o.zxk,
                  S(
                      O(
                          {
                              fullWidth: !0,
                              onClick: R,
                              text: null != _ ? _ : y.intl.string(y.t.cfY4PE),
                          },
                          w,
                      ),
                      { size: w.size === a.zx.Sizes.MEDIUM ? "md" : "sm" },
                  ),
              );
    },
    B = (e) => {
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
                popoutTargetElementRef: g,
                onGameSheetOpened: f,
                onGameSheetClosed: h,
            } = e,
            x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            _ = (0, m.q8)(n),
            b = d !== p.LI.SELECT && !l && !c,
            j = null;
        return (
            x
                ? (j = (0, r.jsx)(A, {
                      quest: n,
                      sourceQuestContent: s,
                      useReducedMotion: o,
                      isExpanded: a,
                  }))
                : _
                  ? (j = (0, r.jsx)(T, {
                        quest: n,
                        sourceQuestContent: s,
                        taskDetails: u,
                    }))
                  : (0, m.Rt)(n)
                    ? (j = (0, r.jsx)(N, { quest: n }))
                    : d === p.LI.CONSOLE && i
                      ? (j = (0, r.jsx)(P, {
                            quest: n,
                            sourceQuestContent: s,
                        }))
                      : b && (0, m.Pb)(n)
                        ? (j = (0, r.jsx)(R, {
                              quest: n,
                              sourceQuestContent: s,
                              taskDetails: u,
                              popoutTargetElementRef: g,
                              onGameSheetOpened: f,
                              onGameSheetClosed: h,
                          }))
                        : b &&
                          (j = (0, r.jsx)(w, {
                              quest: n,
                              sourceQuestContent: s,
                          })),
            null == j
                ? null
                : (0, r.jsx)("div", {
                      className: E.cta,
                      children: j,
                  })
        );
    };
function k(e) {
    let t = s.useRef(null);
    return (0, r.jsxs)("div", {
        className: E.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, r.jsx)(o.hU, {
                    size: "sm",
                    "aria-label": y.intl.string(y.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: i.V7D,
                    variant: "secondary",
                }),
            (0, r.jsx)(
                B,
                S(O({}, e), {
                    popoutTargetElementRef: t,
                    onGameSheetOpened: e.onGameSheetOpened,
                    onGameSheetClosed: e.onGameSheetClosed,
                }),
            ),
        ],
    });
}
