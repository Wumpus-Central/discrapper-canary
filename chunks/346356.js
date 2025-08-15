n.d(t, { H: () => w }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(636977),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(243778),
    u = n(571457),
    d = n(617136),
    p = n(569984),
    f = n(110560),
    h = n(819640),
    g = n(594174),
    m = n(74538),
    b = n(507808),
    _ = n(326272),
    O = n(804705),
    y = n(822857),
    v = n(518121),
    j = n(931928),
    C = n(981631),
    E = n(921944),
    x = n(49898),
    S = n(46140),
    I = n(388032);
let P = "orbs_discovery_reheat_coachmark",
    N = (e) => {
        let {
                targetElementRef: t,
                renderDiscoveryButton: n,
                isGuildBarScrolling: l,
                shouldShow: o,
                questId: a,
                onClose: s,
                onCtaClick: c,
                onDiscoveryButtonClick: u,
            } = e,
            d = i.useMemo(
                () => ({
                    onClose: s,
                    onCtaClick: c,
                    titleText: I.intl.string(I.t.RAMiYW),
                    descriptionText: I.intl.format(I.t.xk12LC, { quantity: 200 }),
                    ctaText: I.intl.string(I.t["cA+7mp"]),
                }),
                [c, s],
            );
        return (0, r.jsx)(v.G6, {
            errorBoundarySource: "ORBS_DISCOVERY_REHEAT_COACHMARK",
            targetElementRef: t,
            targetQuestId: a,
            renderDiscoveryButton: n,
            showingCoachmark: o,
            isGuildBarScrolling: l,
            onDiscoveryButtonClick: u,
            innerCoachmarkProps: d,
        });
    },
    w = (e) => {
        let { targetElementRef: t, scrollToBottom: n, renderDiscoveryButton: I, isGuildBarScrolling: w } = e,
            { enabled: Z } = (0, y.WX)({ location: "orbs_discovery_reheat_coachmark" }),
            T = ((e) => {
                let { onShowCoachmarkHandler: t, isVirtualCurrencyEnabled: n } = e,
                    r = (0, O.F)({ location: P }),
                    [y, v] = i.useState(!1),
                    j = ((e) => {
                        let { isIntroQuestUnclaimed: t } = (0, o.cj)([p.Z], () => {
                                let e = 0 !== p.Z.lastFetchedCurrentQuests && !p.Z.isFetchingCurrentQuests,
                                    t = p.Z.getQuest(S.V6);
                                return {
                                    isIntroQuestUnclaimed: e && null != t && "COMPLETED_CLAIMED" !== (0, d.uk)(t),
                                    currentQuestsUpdated: e,
                                };
                            }),
                            { user: n } = (0, o.cj)([g.default], () => ({ user: g.default.getCurrentUser() })),
                            r = _.Z.useExperiment(e);
                        return null != n && r.enabled && !(0, m.EO)(n) && t;
                    })({ location: P }),
                    I = (0, o.e7)([h.Z], () => h.Z.hasLayers()),
                    N = (0, s.s9z)(s.JQI),
                    w = n && j && !r && !(N || I),
                    [Z, T] = (0, c.US)(w ? [a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK] : []),
                    A = Z === a.z.VIRTUAL_CURRENCY_DISCOVERY_REHEAT_COACHMARK,
                    R = i.useCallback(() => {
                        T(E.L.TAKE_ACTION),
                            (0, u.k5)({
                                source: x.GlobalDiscoveryAnalyticsLocations.VIRTUAL_CURRENCY_REHEAT_COACHMARK,
                            }),
                            (0, f.navigateToQuestHome)({
                                fromContent: l.j.ORBS_REHEAT_COACHMARK_CTA,
                                questId: S.V6,
                            });
                    }, [T]),
                    D = i.useCallback(() => {
                        T(E.L.USER_DISMISS);
                    }, [T]),
                    L = i.useCallback(() => {
                        T(E.L.TAKE_ACTION),
                            (0, b.Y)({
                                pageType: C.ZY5.GUILD_LIST,
                                sectionType: C.jXE.ORBS_DISCOVERY_REHEAT_COACHMARK,
                                ctaObject: C.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST,
                            });
                    }, [T]);
                return (
                    i.useEffect(() => {
                        n && A && !y && (v(!0), t());
                    }, [A, t, n, y]),
                    {
                        shouldShow: A,
                        onCtaClick: R,
                        onClose: D,
                        questId: S.V6,
                        onDiscoveryButtonClick: L,
                    }
                );
            })({
                isVirtualCurrencyEnabled: Z,
                onShowCoachmarkHandler: (0, v.O5)({
                    targetElementRef: t,
                    scrollToBottom: n,
                }),
            }),
            { shouldShow: A } = T,
            R = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(T, ["shouldShow"]);
        return A
            ? (0, r.jsx)(
                  N,
                  (function (e) {
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
                  })(
                      {
                          targetElementRef: t,
                          renderDiscoveryButton: I,
                          isGuildBarScrolling: w,
                          shouldShow: A,
                      },
                      R,
                  ),
              )
            : (0, r.jsx)(j.u, {
                  targetElementRef: t,
                  scrollToBottom: n,
                  renderDiscoveryButton: I,
                  isGuildBarScrolling: w,
              });
    };
