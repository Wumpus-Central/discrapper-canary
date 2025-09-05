n.d(t, {
    i: () => L,
    y: () => M,
});
var r = n(951288),
    i = n(647438),
    a = n(680018),
    o = n(755721),
    s = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(617136),
    d = n(915750),
    f = n(509212),
    _ = n(113434),
    p = n(497505),
    h = n(990175),
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
    return (0, r.jsx)(a.z, {
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
        return (0, r.jsx)(a.z, {
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
        return (0, r.jsx)(a.z, {
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
            o = (0, m.CR)({ quest: t }),
            { launchInGameActivity: s } = (0, _.zB)(t);
        return n && i
            ? (0, r.jsx)(a.z, {
                  fullWidth: !0,
                  variant: "primary",
                  onClick: s,
                  size: "sm",
                  text: o,
              })
            : null;
    },
    x = (e) => {
        let { taskDetails: t } = e,
            { applications: n } = t,
            o = i.useCallback(() => {
                (0, h.v)(n);
            }, [n]);
        return (0, r.jsx)(a.z, {
            fullWidth: !0,
            size: "sm",
            onClick: o,
            text: O.intl.string(O.t["93PTEh"]),
        });
    },
    L = (e) => {
        var t,
            {
                quest: n,
                useReducedMotion: a,
                isExpanded: u,
                className: d,
                ctaLabel: _,
                onClick: h,
                questContent: m = p.jn.QUEST_BAR_V2,
                sourceQuestContent: g,
                shouldShowRewardsCTAWhenCollapsed: b = !1,
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
                "shouldShowRewardsCTAWhenCollapsed",
            ]);
        let S = (0, E.hf)({
                quest: n,
                questContent: m,
                sourceQuestContent: g,
            }),
            N = i.useCallback(
                (e) => {
                    var t;
                    null == h || h(e),
                        (0, f.xN)(n.config) && (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: y.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE,
                              })
                            : S();
                },
                [h, n.config, null == (t = n.userStatus) ? void 0 : t.claimedAt, S],
            );
        return (0, r.jsx)(
            s.gtL,
            A(
                T(
                    {
                        fullWidth: !0,
                        size: o.zx.Sizes.SMALL,
                        onClick: N,
                        pauseAnimation: a || (!u && !b),
                        className: d,
                        buttonShineClassName: v.shine,
                    },
                    I,
                ),
                { children: null != _ ? _ : O.intl.string(O.t.cfY4PD) },
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
                shouldShowRewardsCTAWhenCollapsed: _,
            } = e,
            h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            m = (0, f.q8)(n),
            g = (0, f.Vl)(n),
            E = u !== p.LI.SELECT && !l && !c,
            b = null;
        return (
            h
                ? (b = (0, r.jsx)(L, {
                      quest: n,
                      sourceQuestContent: i,
                      useReducedMotion: a,
                      isExpanded: o,
                      shouldShowRewardsCTAWhenCollapsed: _,
                  }))
                : m
                  ? (b = (0, r.jsx)(R, {
                        quest: n,
                        sourceQuestContent: i,
                        taskDetails: d,
                    }))
                  : g
                    ? (b = (0, r.jsx)(D, { quest: n }))
                    : u === p.LI.CONSOLE && s
                      ? (b = (0, r.jsx)(w, {
                            quest: n,
                            sourceQuestContent: i,
                        }))
                      : E && (0, f.Pb)(n)
                        ? (b = (0, r.jsx)(x, { taskDetails: d }))
                        : E &&
                          (b = (0, r.jsx)(P, {
                              quest: n,
                              sourceQuestContent: i,
                          })),
            null == b
                ? null
                : (0, r.jsx)("div", {
                      className: v.cta,
                      children: b,
                  })
        );
    };
function M(e) {
    return (0, r.jsxs)("div", {
        className: v.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(o.zx, {
                    className: v.backButton,
                    innerClassName: v.backButtonInner,
                    look: "blank",
                    grow: !1,
                    fullWidth: !1,
                    size: "none",
                    onClick: e.onBack,
                    children: (0, r.jsx)(s.V7D, { className: v.backIcon }),
                }),
            (0, r.jsx)(j, T({}, e)),
        ],
    });
}
