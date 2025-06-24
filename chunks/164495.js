n.d(t, {
    i: () => w,
    y: () => P
});
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(617136),
    d = n(915750),
    p = n(113434),
    m = n(497505),
    f = n(918701),
    g = n(373370),
    x = n(667105),
    h = n(341907),
    b = n(46140),
    j = n(215023),
    _ = n(388032),
    v = n(895518);
function y(e) {
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
function C(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, r.jsx)(i.zxk, {
        className: v.cta,
        color: i.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, h.openVideoQuestModal)({
                quest: t,
                sourceQuestContent: n
            });
        },
        size: i.zxk.Sizes.SMALL,
        children: (0, f.F9)(s)
    });
}
let O = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, d.aM)();
        return (0, r.jsx)(i.zxk, {
            className: v.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, f.nc)(t, {
                    content: m.jn.QUEST_BAR_V2,
                    ctaContent: u.jZ.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n
                }),
            children: (0, f.pO)(t) ? _.intl.string(_.t.hvVgAQ) : _.intl.string(_.t.lwQdjI)
        });
    },
    S = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s } = e,
            o = null == (t = (0, d.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: v.cta,
            onClick: () =>
                (0, f.gI)(
                    { quest: n },
                    {
                        content: m.jn.QUEST_BAR_V2,
                        ctaContent: u.jZ.CONNECT_CONSOLE,
                        impressionId: o,
                        sourceQuestContent: s
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: _.intl.string(_.t.csptqa)
        });
    },
    E = (e) => {
        let { quest: t } = e,
            n = (0, f.Vl)(t),
            s = t.config.features.includes(b.S7.START_QUEST_CTA),
            o = (0, g.CR)({
                quest: t,
                location: b.dr.QUESTS_BAR
            }),
            { launchInGameActivity: a } = (0, p.zB)(t);
        return n && s
            ? (0, r.jsx)(i.zxk, {
                  className: v.cta,
                  color: i.zxk.Colors.BRAND,
                  fullWidth: !0,
                  onClick: a,
                  size: i.zxk.Sizes.SMALL,
                  children: o
              })
            : null;
    },
    w = (e) => {
        var t,
            n,
            o,
            { quest: u, useReducedMotion: d, isExpanded: p, className: h, ctaLabel: _, onClick: C, questContent: O = m.jn.QUEST_BAR_V2, sourceQuestContent: S } = e,
            E = (function (e, t) {
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
                    for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                }
                return s;
            })(e, ['quest', 'useReducedMotion', 'isExpanded', 'className', 'ctaLabel', 'onClick', 'questContent', 'sourceQuestContent']);
        let w = (0, x.hf)({
                quest: u,
                questContent: O,
                sourceQuestContent: S
            }),
            T = (0, g.up)(b.dr.QUESTS_BAR),
            P = s.useCallback(
                (e) => {
                    var t;
                    null == C || C(e),
                        (0, f.xN)(u.config) && (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: j.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE
                              })
                            : w();
                },
                [C, u.config, null == (o = u.userStatus) ? void 0 : o.claimedAt, w]
            );
        return (0, r.jsx)(
            i.gtL,
            ((t = y(
                {
                    fullWidth: !0,
                    size: i.zxk.Sizes.SMALL,
                    onClick: P,
                    pauseAnimation: d || !p,
                    className: a()(v.cta, h),
                    buttonShineClassName: v.shine
                },
                E
            )),
            (n = n = { children: null != _ ? _ : T }),
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
    T = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: i, hasMadeProgress: l, isProgressing: c, activeScreen: u, taskDetails: d } = e,
            p = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            g = (0, f.q8)(n),
            x = (0, f.Vl)(n);
        if (p)
            return (0, r.jsx)(w, {
                quest: n,
                sourceQuestContent: s,
                useReducedMotion: o,
                isExpanded: a
            });
        if (g)
            return (0, r.jsx)(C, {
                quest: n,
                sourceQuestContent: s,
                taskDetails: d
            });
        if (x) return (0, r.jsx)(E, { quest: n });
        if (u === m.LI.CONSOLE && i)
            return (0, r.jsx)(S, {
                quest: n,
                sourceQuestContent: s
            });
        if (u !== m.LI.SELECT && !l && !c)
            return (0, r.jsx)(O, {
                quest: n,
                sourceQuestContent: s
            });
        return null;
    };
function P(e) {
    return (0, r.jsxs)('div', {
        className: v.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zxk, {
                    className: v.backButton,
                    innerClassName: v.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.V7D, { className: v.backIcon })
                }),
            (0, r.jsx)(T, y({}, e))
        ]
    });
}
