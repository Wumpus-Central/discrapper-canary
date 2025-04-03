n.d(t, {
    i0: () => w,
    yD: () => z
});
var r = n(200651),
    o = n(192379),
    s = n(120356),
    l = n.n(s),
    i = n(481060),
    c = n(100527),
    a = n(335131),
    u = n(703656),
    d = n(617136),
    f = n(915750),
    p = n(497505),
    x = n(918701),
    g = n(796111),
    j = n(373370),
    b = n(667105),
    k = n(341907),
    m = n(46140),
    h = n(981631),
    y = n(215023),
    S = n(388032),
    O = n(895518);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(i.zxk, {
        className: O.cta,
        color: i.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, k.openVideoQuestModal)(t);
        },
        size: i.zxk.Sizes.SMALL,
        children: (0, x.F9)(n)
    });
}
let N = (e) => {
        let { quest: t } = e,
            n = (0, f.aM)();
        return (0, r.jsx)(i.zxk, {
            className: O.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, x.FE)(t, {
                    content: p.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, x.pO)(t) ? S.NW.string(S.t.hvVgAQ) : S.NW.string(S.t.lwQdjI)
        });
    },
    E = (e) => {
        var t;
        let { quest: n } = e,
            o = null == (t = (0, f.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: O.cta,
            onClick: () =>
                (0, x.gI)(
                    { quest: n },
                    {
                        content: p.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: o
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: S.NW.string(S.t.csptqa)
        });
    },
    A = (e) => {
        let { quest: t } = e,
            n = (0, x.Vl)(t),
            o = t.config.features.includes(m.S7.START_QUEST_CTA),
            s = (0, j.CR)({
                quest: t,
                location: m.dr.QUESTS_BAR
            });
        return n && o
            ? (0, r.jsx)(i.zxk, {
                  className: O.cta,
                  color: i.zxk.Colors.BRAND,
                  fullWidth: !0,
                  onClick: () => {
                      (0, u.uL)(h.Z5c.ACTIVITY_DETAILS(t.config.application.id));
                  },
                  size: i.zxk.Sizes.SMALL,
                  children: s
              })
            : null;
    },
    w = (e) => {
        var t,
            n,
            s,
            { quest: u, useReducedMotion: d, isExpanded: f, className: g, ctaLabel: j, onClick: k } = e,
            m = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(e, ['quest', 'useReducedMotion', 'isExpanded', 'className', 'ctaLabel', 'onClick']);
        let h = (0, b.hf)({
                quest: u,
                location: p.jn.QUEST_BAR_V2
            }),
            v = o.useCallback(
                (e) => {
                    var t;
                    null == k || k(e),
                        (0, x.xN)(u.config) && (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, a.mK)({
                                  openInLayer: !1,
                                  tab: y.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: c.Z.QUEST_HOME_PAGE
                              })
                            : h();
                },
                [k, u.config, null == (s = u.userStatus) ? void 0 : s.claimedAt, h]
            );
        return (0, r.jsx)(
            i.gtL,
            ((t = C(
                {
                    fullWidth: !0,
                    size: i.zxk.Sizes.SMALL,
                    onClick: v,
                    pauseAnimation: d || !f,
                    className: l()(O.cta, g),
                    buttonShineClassName: O.shine
                },
                m
            )),
            (n = n = { children: null != j ? j : S.NW.string(S.t.cfY4PD) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    },
    B = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: s, awaitingConsoleConnections: l, hasMadeProgress: i, isProgressing: c, activeScreen: a, taskDetails: u } = e,
            d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            f = (0, g.P)({ location: m.dr.QUESTS_BAR }),
            j = (0, x.q8)(n),
            b = (0, x.Vl)(n);
        if (d)
            return (0, r.jsx)(w, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s
            });
        if (j)
            return (0, r.jsx)(v, {
                quest: n,
                taskDetails: u
            });
        if (b) return (0, r.jsx)(A, { quest: n });
        if (a === p.LI.CONSOLE && l && !f) return (0, r.jsx)(E, { quest: n });
        if (a !== p.LI.SELECT && !i && !c) return (0, r.jsx)(N, { quest: n });
        return null;
    };
function z(e) {
    return (0, r.jsxs)('div', {
        className: O.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zxk, {
                    className: O.backButton,
                    innerClassName: O.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.V7D, { className: O.backIcon })
                }),
            (0, r.jsx)(B, C({}, e))
        ]
    });
}
