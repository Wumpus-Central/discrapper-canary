(n.d(t, { H: () => w }), n(388685));
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
    _ = n(804705),
    O = n(822857),
    y = n(518121),
    C = n(931928),
    v = n(981631),
    j = n(921944),
    E = n(49898),
    S = n(46140),
    x = n(388032);
let I = () => {
        let { isIntroQuestUnclaimed: e } = (0, o.cj)([h.Z], () => {
                let e = 0 !== h.Z.lastFetchedCurrentQuests && !h.Z.isFetchingCurrentQuests,
                    t = h.Z.getQuest(S.V6);
                return {
                    isIntroQuestUnclaimed: e && null != t && 'COMPLETED_CLAIMED' !== (0, d.uk)(t),
                    currentQuestsUpdated: e
                };
            }),
            { user: t } = (0, o.cj)([g.default], () => ({ user: g.default.getCurrentUser() }));
        return null != t && t.isStaff() && !(0, m.EO)(t) && e;
    },
    P = (e) => {
        let { onShowCoachmarkHandler: t, isVirtualCurrencyEnabled: n } = e,
            r = (0, _.F)({ location: 'orbs_discovery_reheat_coachmark' }),
            [d, h] = i.useState(!1),
            g = I(),
            m = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
            O = (0, s.s9z)(s.JQI),
            y = n && g && !r && !(O || m),
            [C, x] = (0, c.US)(y ? [a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK] : []),
            P = C === a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK,
            N = i.useCallback(() => {
                (x(j.L.TAKE_ACTION),
                    (0, u.k5)({ source: E.GlobalDiscoveryAnalyticsLocations.VIRTUAL_CURRENCY_REHEAT_COACHMARK }),
                    (0, p.navigateToQuestHome)({
                        fromContent: l.j.ORBS_REHEAT_COACHMARK_CTA,
                        questId: S.V6
                    }));
            }, [x]),
            w = i.useCallback(() => {
                x(j.L.USER_DISMISS);
            }, [x]),
            Z = i.useCallback(() => {
                (x(j.L.TAKE_ACTION),
                    (0, b.Y)({
                        pageType: v.ZY5.GUILD_LIST,
                        sectionType: v.jXE.ORBS_DISCOVERY_REHEAT_COACHMARK,
                        ctaObject: v.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
                    }));
            }, [x]);
        return (
            i.useEffect(() => {
                n && P && !d && (h(!0), t());
            }, [P, t, n, d]),
            {
                shouldShow: P,
                onCtaClick: N,
                onClose: w,
                questId: S.V6,
                onDiscoveryButtonClick: Z
            }
        );
    },
    N = (e) => {
        let { targetElementRef: t, renderDiscoveryButton: n, isGuildBarScrolling: l, shouldShow: o, questId: a, onClose: s, onCtaClick: c, onDiscoveryButtonClick: u } = e,
            d = i.useMemo(
                () => ({
                    onClose: s,
                    onCtaClick: c,
                    titleText: x.intl.string(x.t.RAMiYW),
                    descriptionText: x.intl.format(x.t.xk12LC, { quantity: 200 }),
                    ctaText: x.intl.string(x.t['cA+7mp'])
                }),
                [c, s]
            );
        return (0, r.jsx)(y.G6, {
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
    w = (e) => {
        let { targetElementRef: t, scrollToBottom: n, renderDiscoveryButton: i, isGuildBarScrolling: l } = e,
            { enabled: o } = (0, O.WX)({ location: 'orbs_discovery_reheat_coachmark' }),
            a = P({
                isVirtualCurrencyEnabled: o,
                onShowCoachmarkHandler: (0, y.O5)({
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
                  N,
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
            : (0, r.jsx)(C.u, {
                  targetElementRef: t,
                  scrollToBottom: n,
                  renderDiscoveryButton: i,
                  isGuildBarScrolling: l
              });
    };
