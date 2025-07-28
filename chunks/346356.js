(n.d(t, { H: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(636977),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(243778),
    u = n(571457),
    d = n(617136),
    h = n(569984),
    p = n(110560),
    f = n(819640),
    g = n(594174),
    m = n(74538),
    b = n(507808),
    _ = n(326272),
    O = n(804705),
    y = n(822857),
    C = n(518121),
    v = n(931928),
    j = n(981631),
    E = n(921944),
    S = n(49898),
    x = n(46140),
    I = n(388032);
let P = (e) => {
        let { isIntroQuestUnclaimed: t } = (0, o.cj)([h.Z], () => {
                let e = 0 !== h.Z.lastFetchedCurrentQuests && !h.Z.isFetchingCurrentQuests,
                    t = h.Z.getQuest(x.V6);
                return {
                    isIntroQuestUnclaimed: e && null != t && 'COMPLETED_CLAIMED' !== (0, d.uk)(t),
                    currentQuestsUpdated: e
                };
            }),
            { user: n } = (0, o.cj)([g.default], () => ({ user: g.default.getCurrentUser() })),
            r = _.Z.useExperiment(e);
        return null != n && r.enabled && !(0, m.EO)(n) && t;
    },
    N = 'orbs_discovery_reheat_coachmark',
    w = (e) => {
        let { onShowCoachmarkHandler: t, isVirtualCurrencyEnabled: n } = e,
            r = (0, O.F)({ location: N }),
            [d, h] = i.useState(!1),
            g = P({ location: N }),
            m = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
            _ = (0, s.s9z)(s.JQI),
            y = n && g && !r && !(_ || m),
            [C, v] = (0, c.US)(y ? [a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK] : []),
            I = C === a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK,
            w = i.useCallback(() => {
                (v(E.L.TAKE_ACTION),
                    (0, u.k5)({ source: S.GlobalDiscoveryAnalyticsLocations.VIRTUAL_CURRENCY_REHEAT_COACHMARK }),
                    (0, p.navigateToQuestHome)({
                        fromContent: l.j.ORBS_REHEAT_COACHMARK_CTA,
                        questId: x.V6
                    }));
            }, [v]),
            Z = i.useCallback(() => {
                v(E.L.USER_DISMISS);
            }, [v]),
            T = i.useCallback(() => {
                (v(E.L.TAKE_ACTION),
                    (0, b.Y)({
                        pageType: j.ZY5.GUILD_LIST,
                        sectionType: j.jXE.ORBS_DISCOVERY_REHEAT_COACHMARK,
                        ctaObject: j.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
                    }));
            }, [v]);
        return (
            i.useEffect(() => {
                n && I && !d && (h(!0), t());
            }, [I, t, n, d]),
            {
                shouldShow: I,
                onCtaClick: w,
                onClose: Z,
                questId: x.V6,
                onDiscoveryButtonClick: T
            }
        );
    },
    Z = (e) => {
        let { targetElementRef: t, renderDiscoveryButton: n, isGuildBarScrolling: l, shouldShow: o, questId: a, onClose: s, onCtaClick: c, onDiscoveryButtonClick: u } = e,
            d = i.useMemo(
                () => ({
                    onClose: s,
                    onCtaClick: c,
                    titleText: I.intl.string(I.t.RAMiYW),
                    descriptionText: I.intl.format(I.t.xk12LC, { quantity: 200 }),
                    ctaText: I.intl.string(I.t['cA+7mp'])
                }),
                [c, s]
            );
        return (0, r.jsx)(C.G6, {
            errorBoundarySource: 'ORBS_DISCOVERY_REHEAT_COACHMARK',
            targetElementRef: t,
            targetQuestId: a,
            renderDiscoveryButton: n,
            showingCoachmark: o,
            isGuildBarScrolling: l,
            onDiscoveryButtonClick: u,
            innerCoachmarkProps: d
        });
    },
    T = (e) => {
        let { targetElementRef: t, scrollToBottom: n, renderDiscoveryButton: i, isGuildBarScrolling: l } = e,
            { enabled: o } = (0, y.WX)({ location: 'orbs_discovery_reheat_coachmark' }),
            a = w({
                isVirtualCurrencyEnabled: o,
                onShowCoachmarkHandler: (0, C.O5)({
                    targetElementRef: t,
                    scrollToBottom: n
                })
            }),
            { shouldShow: s } = a,
            c = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(a, ['shouldShow']);
        return s
            ? (0, r.jsx)(
                  Z,
                  (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                          ('function' == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  })
                              )),
                              r.forEach(function (t) {
                                  var r;
                                  ((r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            })
                                          : (e[t] = r));
                              }));
                      }
                      return e;
                  })(
                      {
                          targetElementRef: t,
                          renderDiscoveryButton: i,
                          isGuildBarScrolling: l,
                          shouldShow: s
                      },
                      c
                  )
              )
            : (0, r.jsx)(v.u, {
                  targetElementRef: t,
                  scrollToBottom: n,
                  renderDiscoveryButton: i,
                  isGuildBarScrolling: l
              });
    };
