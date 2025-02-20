n.d(t, { Z: () => P });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(518950),
    m = n(598077),
    g = n(626135),
    p = n(63063),
    h = n(281494),
    f = n(276444),
    b = n(520540),
    N = n(796634),
    x = n(197115),
    _ = n(119269),
    E = n(938736),
    j = n(981631),
    C = n(388032),
    O = n(4593),
    v = n(691766);
function S(e) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
        let { userRecord: t, placement: n, trialStatus: i } = e,
            { avatarSrc: s, eventHandlers: l } = (0, u.Z)({
                user: t,
                size: o.EFr.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, E.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            m = d
                ? (0, r.jsx)(
                      o.qEK,
                      S(
                          {
                              src: s,
                              'aria-label': t.username,
                              size: o.EFr.SIZE_32
                          },
                          l
                      )
                  )
                : (0, r.jsx)(o.X6q, {
                      variant: 'heading-md/semibold',
                      className: O.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, r.jsx)(o.ua7, {
            text: C.NW.string(C.t.UnKHdn),
            shouldShow: !d,
            tooltipContentClassName: O.unsentTooltipContent,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: a()({
                        [O.redeemedCircle]: c && (i === h.Fe.REDEEMED || i === h.Fe.CONVERTED),
                        [O.convertedCircleGlow]: c && i === h.Fe.CONVERTED,
                        [O.standardCircle]: c && (i === h.Fe.PENDING || null == i)
                    }),
                    children: (0, r.jsx)('div', {
                        className: c ? O.content : void 0,
                        children: (0, r.jsx)('div', T(S({ className: O.userAvatarProgressBarUnit }, e), { children: m }))
                    })
                })
        });
    },
    y = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, r.jsxs)('div', {
            className: O.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, r.jsx)('div', { className: O.avatarProgressBarUnitConnectorBase }),
                (0, r.jsx)('div', {
                    className: a()({
                        [O.fullHighlight]: t > n,
                        [O.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    A = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            i = t.length,
            s = i < 1 ? null : t[0],
            a = i < 2 ? null : t[1],
            l = i < 3 ? null : t[2];
        return (0, r.jsxs)('div', {
            className: O.userAvatarProgressBarContainer,
            children: [
                (0, r.jsx)(I, {
                    userRecord: s,
                    placement: 1,
                    trialStatus: (null == s ? void 0 : s.id) != null ? n.get(null == s ? void 0 : s.id) : void 0
                }),
                (0, r.jsx)(y, {
                    numSentReferrals: i,
                    placement: 1
                }),
                (0, r.jsx)(I, {
                    userRecord: a,
                    placement: 2,
                    trialStatus: (null == a ? void 0 : a.id) != null ? n.get(null == a ? void 0 : a.id) : void 0
                }),
                (0, r.jsx)(y, {
                    numSentReferrals: i,
                    placement: 2
                }),
                (0, r.jsx)(I, {
                    userRecord: l,
                    placement: 3,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                })
            ]
        });
    },
    P = (e) => {
        let t,
            s,
            { isInSettings: u = !1 } = e,
            I = (0, l.e7)([f.Z], () => f.Z.getRecipientStatus()),
            y = (0, E.uv)('ReferralProgramProgressBar'),
            P = (0, E.TW)('ReferralProgramProgressBar'),
            { referralSentUsers: R, hasSentAllReferrals: D, refreshAt: Z } = (0, N.G)(),
            w = i.useMemo(() => R.map((e) => new m.Z(e)), [R]),
            { subscriberHomeVariant: k } = b.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
            W = y === j.g2L.UNAPPLIED || y === j.g2L.QUALIFIED,
            L = k === b.p.VARIANT_2,
            B = {
                redeemed: 0,
                converted: 0,
                sent: I.size
            };
        I.forEach((e) => {
            e === h.Fe.REDEEMED && B.redeemed++, e === h.Fe.CONVERTED && (B.redeemed++, B.converted++);
        });
        let M = B.sent === N.Q,
            U = p.Z.getArticleURL(j.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: V } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            G = i.useRef(null),
            F = (B.sent / N.Q) * 100,
            H = !1;
        P && null != Z && ((H = 0 < (t = Math.ceil((new Date(Z).getTime() - new Date().getTime()) / 86400000)) && t < E.AV), (s = (100 * (E.AV - t)) / E.AV));
        let z = H && null != t,
            Y = (0, r.jsxs)('div', {
                className: O.referralInfoContent,
                children: [
                    (0, r.jsx)(_.ZP, {
                        percentage: z ? 0 : F,
                        progressCircleVariation: _.Qo.NITRO_LOGO,
                        iconClassName: a()({
                            [O.referralProgressBarIcon]: !u,
                            [O.referralProgressBarIconSettings]: u
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: O.expandedProgressBarContent,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: u ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                className: O.expandedProgressBarHeader,
                                children: (0, E.$s)({
                                    referralIncentiveLifecycleState: y,
                                    hasSentAll: M,
                                    referralsStatuses: B
                                })
                            }),
                            z
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: O.progressBar,
                                              children: (0, r.jsx)('div', {
                                                  style: { width: ''.concat(s, '%') },
                                                  className: O.fill
                                              })
                                          }),
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-sm/semibold',
                                              className: O.referralCountdownDays,
                                              children: C.NW.format(C.t.eq39am, { days: t })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(A, {
                                      userRecords: w,
                                      recipientStatus: I
                                  }),
                            (0, r.jsx)(o.Text, {
                                variant: u ? 'text-sm/normal' : 'text-lg/medium',
                                children: (0, E.Hg)({
                                    helpdeskArticle: U,
                                    referralIncentiveLifecycleState: y,
                                    referralsStatuses: B,
                                    isWithinCountdownRange: H
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: a()(O.expandedProgressBarButtonContainer, { [O.expandedProgressBarButtonContainerLayout]: !u }),
                                children: [
                                    !u &&
                                        !L &&
                                        (0, r.jsx)(x.Z, {
                                            color: o.Ttl.CUSTOM,
                                            buttonText: C.NW.string(C.t.Ve9Ge3),
                                            className: a()(O.expandedProgressBarGiftingCTA, { [O.expandedProgressBarGiftingCTALayout]: !u }),
                                            look: o.iLD.OUTLINED,
                                            isGift: !0
                                        }),
                                    !z &&
                                        (0, r.jsx)(o.gtL, {
                                            className: O.expandedProgressBarSelectFriendsCTA,
                                            color: o.Ttl.CUSTOM,
                                            onClick: () => {
                                                g.default.track(j.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: V }),
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                        return (t) => (0, r.jsx)(e, T(S({}, t), { sourceAnalyticsLocations: V }));
                                                    });
                                            },
                                            onlyShineOnHover: !0,
                                            children: (0, r.jsxs)('div', {
                                                className: O.expandedProgressBarSelectFriendsCTAInner,
                                                children: [
                                                    (0, r.jsx)('img', {
                                                        src: v,
                                                        alt: '',
                                                        className: O.expandedProgressBarSelectFriendsIcon
                                                    }),
                                                    M ? C.NW.string(C.t.SY9tyM) : C.NW.string(C.t.Lm2nFR)
                                                ]
                                            })
                                        })
                                ]
                            })
                        ]
                    })
                ]
            }),
            K = B.redeemed === N.Q;
        return (0, r.jsx)(d.Gt, {
            value: V,
            children: (0, r.jsx)('div', {
                className: a()({
                    [O.containerWithGlowWithoutBanner]: !z && K && !W,
                    [O.containerWithGlowWithBanner]: !z && K && W,
                    [O.containerWithoutGlow]: z || !K,
                    [O.containerWithMargins]: !u,
                    [O.marginWithBanner]: W,
                    [O.containerWithGlowOnSettingsPage]: !z && K && u
                }),
                children: (0, r.jsxs)('div', {
                    ref: G,
                    className: a()({
                        [O.expandedProgressBarContainer]: !u,
                        [O.expandedProgressBarContainerSettingsPage]: u,
                        [O.expandedProgressBarContainerVariant1]: !L && !u,
                        [O.expandedProgressBarContainerVariant2]: L && !u,
                        [O.allReferralsSentBorder]: !z && K,
                        [O.containerWithBanner]: !z && W
                    }),
                    children: [
                        W &&
                            !z &&
                            (0, r.jsx)('div', {
                                className: a()(O.banner, {
                                    [O.bannerWithContainerOutline]: D,
                                    [O.settingsBanner]: u && !D,
                                    [O.settingsBannerAllRedeemed]: u && D
                                }),
                                children: (0, r.jsx)(o.X6q, {
                                    color: 'always-white',
                                    variant: 'heading-md/extrabold',
                                    children: C.NW.format(C.t['7GMtc3'], {
                                        discountRate: E.Nq,
                                        subscriptionInterval: C.NW.string(C.t.FPybU1)
                                    })
                                })
                            }),
                        Y
                    ]
                })
            })
        });
    };
