r.d(t, {
    i: () => w,
    y: () => z,
});
var n = r(255367),
    s = r(73800),
    o = r(120356),
    l = r.n(o),
    a = r(755721),
    c = r(481060),
    i = r(100527),
    u = r(335131),
    d = r(617136),
    f = r(915750),
    p = r(509212),
    x = r(113434),
    j = r(497505),
    g = r(373370),
    h = r(110560),
    C = r(667105),
    b = r(46140),
    m = r(215023),
    y = r(388032),
    O = r(890937);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function k(e) {
    let { quest: t, sourceQuestContent: r, taskDetails: s } = e;
    return (0, n.jsx)(a.zx, {
        className: O.cta,
        color: a.zx.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            var e;
            let n = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
            (0, h.openVideoQuestModal)({
                quest: t,
                questContent: j.jn.QUEST_BAR_V2,
                sourceQuestContent: r,
                sourceQuestContentCTA: n,
            });
        },
        size: a.zx.Sizes.SMALL,
        children: (0, p.F9)(s),
    });
}
let v = (e) => {
        let { quest: t, sourceQuestContent: r } = e,
            s = (0, f.aM)();
        return (0, n.jsx)(a.zx, {
            className: O.cta,
            size: a.zx.Sizes.SMALL,
            onClick: () =>
                (0, p.nc)(t, {
                    content: j.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: r,
                }),
            children: (0, p.pO)(t) ? y.intl.string(y.t.hvVgAQ) : y.intl.string(y.t.lwQdjI),
        });
    },
    N = (e) => {
        var t;
        let { quest: r, sourceQuestContent: s } = e,
            o = null == (t = (0, f.WD)()) ? void 0 : t.getId();
        return (0, n.jsx)(a.zx, {
            fullWidth: !0,
            className: O.cta,
            onClick: () =>
                (0, p.gI)(
                    { quest: r },
                    {
                        content: j.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: o,
                        sourceQuestContent: s,
                    },
                ),
            size: a.zx.Sizes.SMALL,
            children: y.intl.string(y.t.csptqa),
        });
    },
    E = (e) => {
        let { quest: t } = e,
            r = (0, p.Vl)(t),
            s = t.config.features.includes(b.S7.START_QUEST_CTA),
            o = (0, g.CR)({ quest: t }),
            { launchInGameActivity: l } = (0, x.zB)(t);
        return r && s
            ? (0, n.jsx)(a.zx, {
                  className: O.cta,
                  color: a.zx.Colors.BRAND,
                  fullWidth: !0,
                  onClick: l,
                  size: a.zx.Sizes.SMALL,
                  children: o,
              })
            : null;
    },
    w = (e) => {
        var t,
            r,
            o,
            {
                quest: d,
                useReducedMotion: f,
                isExpanded: x,
                className: g,
                ctaLabel: h,
                onClick: b,
                questContent: k = j.jn.QUEST_BAR_V2,
                sourceQuestContent: v,
                shouldShowRewardsCTAWhenCollapsed: N = !1,
            } = e,
            E = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            s = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
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
                "shouldShowRewardsCTAWhenCollapsed",
            ]);
        let w = (0, C.hf)({
                quest: d,
                questContent: k,
                sourceQuestContent: v,
            }),
            A = s.useCallback(
                (e) => {
                    var t;
                    null == b || b(e),
                        (0, p.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, u.mK)({
                                  openInLayer: !1,
                                  tab: m.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: i.Z.QUEST_HOME_PAGE,
                              })
                            : w();
                },
                [b, d.config, null == (o = d.userStatus) ? void 0 : o.claimedAt, w],
            );
        return (0, n.jsx)(
            c.gtL,
            ((t = S(
                {
                    fullWidth: !0,
                    size: a.zx.Sizes.SMALL,
                    onClick: A,
                    pauseAnimation: f || (!x && !N),
                    className: l()(O.cta, g),
                    buttonShineClassName: O.shine,
                },
                E,
            )),
            (r = r = { children: null != h ? h : y.intl.string(y.t.cfY4PD) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        );
    },
    A = (e) => {
        var t;
        let {
                quest: r,
                sourceQuestContent: s,
                useReducedMotion: o,
                isExpanded: l,
                awaitingConsoleConnections: a,
                hasMadeProgress: c,
                isProgressing: i,
                activeScreen: u,
                taskDetails: d,
                shouldShowRewardsCTAWhenCollapsed: f,
            } = e,
            x = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
            g = (0, p.q8)(r),
            h = (0, p.Vl)(r);
        if (x)
            return (0, n.jsx)(w, {
                quest: r,
                sourceQuestContent: s,
                useReducedMotion: o,
                isExpanded: l,
                shouldShowRewardsCTAWhenCollapsed: f,
            });
        if (g)
            return (0, n.jsx)(k, {
                quest: r,
                sourceQuestContent: s,
                taskDetails: d,
            });
        if (h) return (0, n.jsx)(E, { quest: r });
        if (u === j.LI.CONSOLE && a)
            return (0, n.jsx)(N, {
                quest: r,
                sourceQuestContent: s,
            });
        if (u !== j.LI.SELECT && !c && !i)
            return (0, n.jsx)(v, {
                quest: r,
                sourceQuestContent: s,
            });
        return null;
    };
function z(e) {
    return (0, n.jsxs)("div", {
        className: O.ctaButtons,
        children: [
            e.showBackButton &&
                (0, n.jsx)(a.zx, {
                    className: O.backButton,
                    innerClassName: O.backButtonInner,
                    look: "blank",
                    grow: !1,
                    fullWidth: !1,
                    size: "none",
                    onClick: e.onBack,
                    children: (0, n.jsx)(c.V7D, { className: O.backIcon }),
                }),
            (0, n.jsx)(A, S({}, e)),
        ],
    });
}
