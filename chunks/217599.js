n.d(t, { r: () => L });
var a = n(54381),
    r = n(473749),
    i = n(159691),
    l = n(755721),
    s = n(481060),
    o = n(100527),
    c = n(335131),
    d = n(617136),
    u = n(915750),
    m = n(49436),
    p = n(373370),
    f = n(968843),
    h = n(304696),
    x = n(387745),
    b = n(115179),
    g = n(254579),
    v = n(283689),
    j = n(542347),
    C = n(659302),
    y = n(110560),
    _ = n(35215),
    S = n(526188),
    E = n(215023),
    T = n(388032),
    O = n(306946);
function N(e) {
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
function P(e, t) {
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
function w(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, a.jsx)(i.zxk, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            var e;
            let a = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
            (0, y.openVideoQuestModal)({
                quest: t,
                questContent: m.jn.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: a,
            });
        },
        size: "sm",
        text: (0, j.F9)(r),
    });
}
let I = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            r = (0, u.aM)(),
            l = (0, h.V_)(t);
        return (0, a.jsx)(i.zxk, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, x.nc)(t, {
                    content: m.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: r,
                    sourceQuestContent: n,
                }),
            text: l,
        });
    },
    k = (e) => {
        var t;
        let { quest: n, sourceQuestContent: r } = e,
            l = null == (t = (0, u.WD)()) ? void 0 : t.getId();
        return (0, a.jsx)(i.zxk, {
            fullWidth: !0,
            onClick: () =>
                (0, x.gI)(
                    { quest: n },
                    {
                        content: m.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: l,
                        sourceQuestContent: r,
                    },
                ),
            size: "sm",
            text: T.intl.string(T.t.csptqV),
        });
    },
    R = (e) => {
        let { quest: t } = e,
            n = (0, p.CR)({ quest: t }),
            { launchInGameActivity: r } = (0, f.zB)(t);
        return (0, v.Rt)(t)
            ? (0, a.jsx)(i.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, y.getPrimaryCtaIcon)(t),
                  onClick: r,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    A = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: r,
                popoutTargetElementRef: l,
                onGameSheetOpened: s,
                onGameSheetClosed: o,
            } = e,
            { applications: c } = r;
        return (0, a.jsx)(_.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: l,
            onGameSheetOpened: s,
            onGameSheetClosed: o,
            children: (e) =>
                (0, a.jsx)(
                    i.zxk,
                    N(
                        {
                            variant: "secondary",
                            fullWidth: !0,
                            size: "sm",
                            text: T.intl.string(T.t["93PTEs"]),
                        },
                        e,
                    ),
                ),
        });
    },
    D = (e) => {
        var t,
            { quest: n, ctaLabel: s, onClick: d, questContent: u = m.jn.QUEST_BAR_V2, sourceQuestContent: p } = e,
            f = (function (e, t) {
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
            })(e, ["quest", "ctaLabel", "onClick", "questContent", "sourceQuestContent"]);
        let h = (0, C.hf)({
                quest: n,
                questContent: u,
                sourceQuestContent: p,
            }),
            x = r.useCallback(
                (e) => {
                    var t;
                    null == d || d(e),
                        (0, b.xN)(n.config) && (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  tab: E.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: o.Z.QUEST_HOME_PAGE,
                              })
                            : h();
                },
                [d, n.config, null == (t = n.userStatus) ? void 0 : t.claimedAt, h],
            );
        return (0, a.jsx)(
            i.zxk,
            P(
                N(
                    {
                        fullWidth: !0,
                        onClick: x,
                        text: null != s ? s : T.intl.string(T.t.cfY4PE),
                    },
                    f,
                ),
                { size: f.size === l.zx.Sizes.MEDIUM ? "md" : "sm" },
            ),
        );
    },
    Z = (e) => {
        var t;
        let {
                sourceQuestContent: n,
                awaitingConsoleConnections: i,
                hasMadeProgress: l,
                isProgressing: s,
                activeScreen: o,
                popoutTargetElementRef: c,
            } = e,
            { quest: d, onGameSheetOpen: u, onGameSheetClose: p, taskDetails: f } = r.useContext(S.A),
            h = (null == (t = d.userStatus) ? void 0 : t.completedAt) != null,
            x = (0, g.q8)(d),
            b = o !== m.LI.SELECT && !l && !s,
            j = null;
        return (
            h
                ? (j = (0, a.jsx)(D, {
                      quest: d,
                      sourceQuestContent: n,
                  }))
                : x
                  ? (j = (0, a.jsx)(w, {
                        quest: d,
                        sourceQuestContent: n,
                        taskDetails: f,
                    }))
                  : (0, v.Rt)(d)
                    ? (j = (0, a.jsx)(R, { quest: d }))
                    : o === m.LI.CONSOLE && i
                      ? (j = (0, a.jsx)(k, {
                            quest: d,
                            sourceQuestContent: n,
                        }))
                      : b && (0, v.Pb)(d)
                        ? (j = (0, a.jsx)(A, {
                              quest: d,
                              sourceQuestContent: n,
                              taskDetails: f,
                              popoutTargetElementRef: c,
                              onGameSheetOpened: u,
                              onGameSheetClosed: p,
                          }))
                        : b &&
                          (j = (0, a.jsx)(I, {
                              quest: d,
                              sourceQuestContent: n,
                          })),
            null == j
                ? null
                : (0, a.jsx)("div", {
                      className: O.cta,
                      children: j,
                  })
        );
    };
function L(e) {
    let t = r.useRef(null);
    return (0, a.jsxs)("div", {
        className: O.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, a.jsx)(i.hU, {
                    size: "sm",
                    "aria-label": T.intl.string(T.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: s.V7D,
                    variant: "secondary",
                }),
            (0, a.jsx)(Z, P(N({}, e), { popoutTargetElementRef: t })),
        ],
    });
}
