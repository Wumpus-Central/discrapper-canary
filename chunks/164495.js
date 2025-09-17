n.d(t, {
    i: () => L,
    y: () => M,
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
    h = n(373370),
    m = n(110560),
    g = n(667105),
    E = n(35215),
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
        o = () => {
            var e;
            let r = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? u.jZ.ACCEPT_QUEST : u.jZ.WATCH_VIDEO;
            (0, m.openVideoQuestModal)({
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
let P = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            i = (0, d.aM)(),
            o = (0, f.pO)(t) ? O.intl.string(O.t.hvVgAQ) : O.intl.string(O.t.lwQdjI);
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
    w = (e) => {
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
            text: O.intl.string(O.t.csptqa),
        });
    },
    D = (e) => {
        let { quest: t } = e,
            n = (0, f.Vl)(t),
            i = t.config.features.includes(b.S7.START_QUEST_CTA),
            o = (0, h.CR)({ quest: t }),
            { launchInGameActivity: s } = (0, _.zB)(t);
        return n && i
            ? (0, r.jsx)(a.zxk, {
                  fullWidth: !0,
                  variant: "primary",
                  onClick: s,
                  size: "sm",
                  text: o,
              })
            : null;
    },
    x = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: i,
                popoutTargetElementRef: o,
                onGameSheetOpened: s,
                onGameSheetClosed: l,
            } = e,
            { applications: c } = i;
        return (0, r.jsx)(E.Z, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: o,
            onGameSheetOpened: s,
            onGameSheetClosed: l,
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    T(
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
    L = (e) => {
        var t,
            n,
            {
                quest: a,
                useReducedMotion: u,
                isExpanded: d,
                className: _,
                ctaLabel: h,
                onClick: m,
                questContent: E = p.jn.QUEST_BAR_V2,
                sourceQuestContent: b,
            } = e,
            I = C(e, [
                "quest",
                "useReducedMotion",
                "isExpanded",
                "className",
                "ctaLabel",
                "onClick",
                "questContent",
                "sourceQuestContent",
            ]);
        let S = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            N = (0, g.hf)({
                quest: a,
                questContent: E,
                sourceQuestContent: b,
            }),
            R = i.useCallback(
                (e) => {
                    var t;
                    null == m || m(e),
                        (0, f.xN)(a.config) && (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: y.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE,
                              })
                            : N();
                },
                [m, a.config, null == (n = a.userStatus) ? void 0 : n.claimedAt, N],
            );
        return (0, r.jsx)(
            s.gtL,
            A(
                T(
                    {
                        fullWidth: !0,
                        size: o.zx.Sizes.SMALL,
                        onClick: R,
                        pauseAnimation: u || (!d && !S),
                        className: _,
                        buttonShineClassName: v.shine,
                    },
                    I,
                ),
                { children: null != h ? h : O.intl.string(O.t.cfY4PD) },
            ),
        );
    },
    j = (e) => {
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
            b = (0, f.Vl)(n),
            y = u !== p.LI.SELECT && !l && !c,
            O = null;
        return (
            g
                ? (O = (0, r.jsx)(L, {
                      quest: n,
                      sourceQuestContent: i,
                      useReducedMotion: a,
                      isExpanded: o,
                  }))
                : E
                  ? (O = (0, r.jsx)(R, {
                        quest: n,
                        sourceQuestContent: i,
                        taskDetails: d,
                    }))
                  : b
                    ? (O = (0, r.jsx)(D, { quest: n }))
                    : u === p.LI.CONSOLE && s
                      ? (O = (0, r.jsx)(w, {
                            quest: n,
                            sourceQuestContent: i,
                        }))
                      : y && (0, f.Pb)(n)
                        ? (O = (0, r.jsx)(x, {
                              quest: n,
                              sourceQuestContent: i,
                              taskDetails: d,
                              popoutTargetElementRef: _,
                              onGameSheetOpened: h,
                              onGameSheetClosed: m,
                          }))
                        : y &&
                          (O = (0, r.jsx)(P, {
                              quest: n,
                              sourceQuestContent: i,
                          })),
            null == O
                ? null
                : (0, r.jsx)("div", {
                      className: v.cta,
                      children: O,
                  })
        );
    };
function M(e) {
    let t = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: v.ctaButtons,
        ref: t,
        children: [
            e.showBackButton &&
                (0, r.jsx)(a.hU, {
                    size: "sm",
                    "aria-label": O.intl.string(O.t["13/7kZ"]),
                    onClick: e.onBack,
                    icon: s.V7D,
                    variant: "secondary",
                }),
            (0, r.jsx)(
                j,
                A(T({}, e), {
                    popoutTargetElementRef: t,
                    onGameSheetOpened: e.onGameSheetOpened,
                    onGameSheetClosed: e.onGameSheetClosed,
                }),
            ),
        ],
    });
}
