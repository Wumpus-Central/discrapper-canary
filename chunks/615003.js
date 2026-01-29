n.d(t, {
    P: () => et,
    o: () => en,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(837381),
    a = n(877624),
    s = n(311907),
    o = n(554146),
    c = n(3026),
    u = n(397927),
    d = n(701363),
    p = n(366999),
    h = n(531260),
    g = n(771781),
    f = n(826673),
    m = n(379848),
    A = n(895944),
    _ = n(649032),
    b = n(287809),
    E = n(166403),
    O = n(954571),
    y = n(927578),
    I = n(683760),
    v = n(40185),
    S = n(637073),
    C = n(377168),
    N = n(288349),
    T = n(131168),
    j = n(422936),
    x = n(234419),
    P = n(549996),
    w = n(612669),
    L = n(768569),
    R = n(603488),
    D = n(282077),
    M = n(385327),
    k = n(727949),
    U = n(84483),
    G = n(164554),
    V = n(305498),
    B = n(909255),
    H = n(328717),
    F = n(953062),
    Y = n(105390),
    K = n(173522),
    W = n(796878),
    q = n(156393),
    z = n(513570),
    Q = n(221688),
    X = n(622037),
    Z = n(788868),
    J = n(652215),
    $ = n(49999),
    ee = n(985018);
let et = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
            r = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            i = (0, x.V)(),
            l = (0, j.O)(),
            a = (0, v.cg)(),
            o = (0, z.H)(),
            c = (0, y.Of)(n, r),
            u = (0, s.bG)([I.A], () => I.A.getCreatedAtOverride()),
            d = t || null != i || null != l || a || null != o || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 12096e5);
    },
    en = (e) => {
        var t, n, I;
        let en,
            er,
            ei,
            { selected: el, nitroTabButtonRef: ea, route: es, locationState: eo } = e,
            ec = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["selected", "nitroTabButtonRef", "route", "locationState"]),
            eu = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
            ed = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            ep = (0, y.Of)(eu, ed),
            eh = (0, y.YE)(eu, Z.PremiumTypes.TIER_2),
            eg = (0, l.rm)("nitro"),
            ef = (0, x.V)(),
            em = (0, j.O)(),
            eA = (0, T.p)(),
            e_ = (0, S.d)(),
            eb = (0, v.cg)(),
            eE = (0, k.NF)({
                trialOffer: ef,
            }),
            eO = (0, w.bf)(),
            ey = (0, z.H)(),
            eI = (0, k.Tp)(),
            ev = (0, M.c7)(),
            { isInTreatment: eS } = (0, U.uX)("NitroTabButton"),
            eC = !(0, y.TW)(eu) && eS,
            eN = (0, s.bG)([A.A], () => A.A.getRewardForProgram(_.W.NITRO)),
            eT = null == eN ? void 0 : eN.last_granted_reward,
            ej = null == eN ? void 0 : eN.last_granted_reward_amount,
            ex = eh && eS && null != eT && null != ej,
            eP = eh && eS && null != eN,
            ew = (0, Q.gr)(),
            eL = null != eA && null != ed && ed.status === J.Dmq.CANCELED,
            {
                fractionalState: eR,
                startsAt: eD,
                endsAt: eM,
            } = (0, h.A)({
                forceFetch: !0,
            }),
            [ek, eU] = (0, m.Wl)(eR !== Z.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eD.valueOf(),
                cooldownDurationMs: 0,
            }),
            eG = (0, C.A)({
                location: "NitroTabButton",
            }),
            eV = (null == ef ? void 0 : ef.trial_id) === Z.Dw,
            eB = [],
            eH = [];
        (0, g.Tc)() &&
            (ev && eB.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            eb && eB.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eG && eB.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            e_ && eB.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eF, eY] = (0, m.kn)(eB, void 0, !0);
        eL && eH.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eO && eH.push(o.M.PREMIUM_GROUP_POPOVER),
            eC && eH.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eP && eH.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eK, eW] = (0, m.kn)(eH, void 0, !0),
            eq = (0, P.c)(a.C.PREMIUM_TAB),
            ez = (0, P.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [eQ, eX] = (0, m.Cc)(
                null != eq && "premiumTab" === eq.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (t = null == eq ? void 0 : eq.promotionId) ? t : "",
                void 0,
                !0,
            ),
            [eZ, eJ] = (0, m.Cc)(ex ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, null != eT ? eT : "", void 0, !0),
            e$ =
                null != ez &&
                "premiumTabTooltip" === ez.properties.properties.oneofKind &&
                eQ === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (i.useEffect(() => {
                !0 === el && null != eF && eY($.i.AUTO_DISMISS),
                    !0 === el && null != eK && eW($.i.AUTO_DISMISS),
                    !0 === el && null != eQ && eX($.i.AUTO_DISMISS),
                    !0 === el && null != eZ && eJ($.i.AUTO_DISMISS);
            }, [eY, el, eF, eW, eK, eQ, eX, eZ, eJ]),
            !et({
                selected: el,
            }))
        )
            return null;
        let e0 = () => {
            ek === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eU($.i.TAKE_ACTION),
                O.default.track(J.HAw.NITRO_TAB_VISITED, {
                    badge_decorator: ei,
                    has_premium: ep,
                }),
                null != eF && eY($.i.USER_DISMISS),
                null != eQ && eX($.i.USER_DISMISS),
                eK === o.M.PREMIUM_GROUP_POPOVER && eW($.i.USER_DISMISS);
        };
        eR === Z.xc.NONE ||
            e_ ||
            ((ei = 7),
            (er = (0, r.jsx)(N.A, {
                className: "",
                startsAt: eD,
                endsAt: eM,
                messageStyle: p.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e1 = eO && eK === o.M.PREMIUM_GROUP_POPOVER;
        if (e1)
            (er = (0, r.jsx)(u.Exy, {
                type: "new",
                variant: "expressive",
            })),
                (ei = 10);
        else if (null != eq && "premiumTab" === eq.properties.properties.oneofKind)
            (er = (0, r.jsx)(D.A, {
                componentId: eq.id,
                badgeCopy: eq.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eq.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eQ !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (ei = 9);
        else if (eb) (er = (0, r.jsx)(R.A, {})), (ei = 0);
        else if (eE) {
            let e = (0, k.ZR)();
            (er = (0, r.jsx)(Y.MA, {
                isTabSelected: el,
                badgeCopy: ee.intl.string(ee.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == ef ? void 0 : ef.expires_at) : null,
            })),
                (ei = 4);
        } else
            eF === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((er = (0, r.jsx)(u.Exy, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (ei = 4),
                  (e0 = () => {
                      O.default.track(J.HAw.NITRO_TAB_VISITED, {
                          badge_decorator: ei,
                          has_premium: ep,
                      }),
                          eY($.i.USER_DISMISS);
                  }))
                : eF === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((er = (0, r.jsx)(Y.MA, {
                        isTabSelected: el,
                        badgeCopy: ee.intl.string(ee.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (ei = 2))
                  : e_
                    ? ((er = (0, r.jsx)(q.d, {
                          expiresAt: eM,
                      })),
                      (ei = 4))
                    : null != ey
                      ? ((er = (0, r.jsx)(X.A, {
                            copy: ey,
                            showStars: !1,
                        })),
                        (ei = 1))
                      : null != em
                        ? ((er = (0, r.jsx)(Y.fY, {
                              userDiscount: em,
                              isTabSelected: el,
                              includesAmountOff: !1,
                          })),
                          (ei = 3))
                        : null == ef || eV
                          ? ew
                              ? ((er = (0, r.jsx)(K.F, {
                                    isSelected: el,
                                    onSelect: () =>
                                        (0, f.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: $.i.TAKE_ACTION,
                                        }),
                                })),
                                (ei = 6))
                              : eL
                                ? ((er = (0, r.jsx)(F.A, {
                                      isSelected: el,
                                      discountOffer: eA,
                                  })),
                                  (ei = 8))
                                : (eC && eK === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                    (eP && eK === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                                  ? ((er = (0, r.jsx)(u.Exy, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (ei = 2))
                                  : ex &&
                                    eZ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                    ((er = (0, r.jsx)(u.Exy, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (ei = 2))
                          : ((er = (0, r.jsx)(Y.Ag, {
                                trialOffer: ef,
                                isTabSelected: el,
                            })),
                            (ei = 4));
        eI &&
            ((er = (0, r.jsx)(Y.MA, {
                isTabSelected: el,
                badgeCopy: ee.intl.string(ee.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (ei = 4),
            (e0 = () => {
                O.default.track(J.HAw.NITRO_TAB_VISITED, {
                    badge_decorator: ei,
                    has_premium: ep,
                }),
                    (0, k.ne)();
            }));
        let e6 = (0, r.jsx)(
            d.z9,
            ((n = (function (e) {
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
                    listItemRef: ea,
                    selected: el,
                    route: es,
                    icon: u.tvc,
                    text: (0, r.jsx)(c.A, {
                        children: eh ? ee.intl.string(ee.t["4gwVVn"]) : ee.intl.string(ee.t.Ipxkog),
                    }),
                    locationState: eo,
                    onClick: e0,
                },
                ec,
                eg,
            )),
            (I = I =
                {
                    className: en,
                    children: er,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(I))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(I)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(I, e));
                  }),
            n),
        );
        return ew
            ? (0, r.jsx)(K.T, {
                  children: e6,
              })
            : eL && eK === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === ei
              ? (0, r.jsx)(H.A, {
                    targetElementRef: ea,
                    discountOffer: eA,
                    premiumSubscription: ed,
                    dismissCoachmark: eW,
                    children: e6,
                })
              : e1
                ? (0, r.jsx)(L.p, {
                      targetElementRef: ea,
                      dismissPopover: eW,
                      children: e6,
                  })
                : eC && eK === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                  ? (0, r.jsx)(B.A, {
                        targetElementRef: ea,
                        dismissPopover: eW,
                        children: e6,
                    })
                  : eP && eK === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                    ? (0, r.jsx)(G.A, {
                          targetElementRef: ea,
                          dismissPopover: eW,
                          children: e6,
                      })
                    : ex && eZ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                      ? (0, r.jsx)(V.A, {
                            targetElementRef: ea,
                            dismissPopover: eJ,
                            lastGrantedRewardAmount: ej,
                            children: e6,
                        })
                      : e$
                        ? (0, r.jsx)(W.A, {
                              children: e6,
                          })
                        : e6;
    };
