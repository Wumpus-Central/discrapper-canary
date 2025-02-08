n.d(t, { Z: () => O });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(518950),
    m = n(598077),
    g = n(626135),
    h = n(63063),
    x = n(281494),
    _ = n(276444),
    p = n(520540),
    E = n(796634),
    C = n(197115),
    f = n(119269),
    T = n(938736),
    N = n(981631),
    I = n(388032),
    S = n(102588),
    b = n(691766);
let v = (e) => {
        let { userRecord: t, placement: n, trialStatus: s } = e,
            { avatarSrc: r, eventHandlers: a } = (0, u.Z)({
                user: t,
                size: o.EFr.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, T.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            m = d
                ? (0, i.jsx)(o.qEK, {
                      src: r,
                      'aria-label': t.username,
                      size: o.EFr.SIZE_32,
                      ...a
                  })
                : (0, i.jsx)(o.X6q, {
                      variant: 'heading-md/semibold',
                      className: S.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(o.ua7, {
            text: I.intl.string(I.t.UnKHdn),
            shouldShow: !d,
            tooltipContentClassName: S.unsentTooltipContent,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: l()({
                        [S.redeemedCircle]: c && (s === x.Fe.REDEEMED || s === x.Fe.CONVERTED),
                        [S.convertedCircleGlow]: c && s === x.Fe.CONVERTED,
                        [S.standardCircle]: c && (s === x.Fe.PENDING || null == s)
                    }),
                    children: (0, i.jsx)('div', {
                        className: c ? S.content : void 0,
                        children: (0, i.jsx)('div', {
                            className: S.userAvatarProgressBarUnit,
                            ...e,
                            children: m
                        })
                    })
                })
        });
    },
    j = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)('div', {
            className: S.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, i.jsx)('div', { className: S.avatarProgressBarUnitConnectorBase }),
                (0, i.jsx)('div', {
                    className: l()({
                        [S.fullHighlight]: t > n,
                        [S.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    A = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            s = t.length,
            r = s < 1 ? null : t[0],
            l = s < 2 ? null : t[1],
            a = s < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: S.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(v, {
                    userRecord: r,
                    placement: 1,
                    trialStatus: (null == r ? void 0 : r.id) != null ? n.get(null == r ? void 0 : r.id) : void 0
                }),
                (0, i.jsx)(j, {
                    numSentReferrals: s,
                    placement: 1
                }),
                (0, i.jsx)(v, {
                    userRecord: l,
                    placement: 2,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                }),
                (0, i.jsx)(j, {
                    numSentReferrals: s,
                    placement: 2
                }),
                (0, i.jsx)(v, {
                    userRecord: a,
                    placement: 3,
                    trialStatus: (null == a ? void 0 : a.id) != null ? n.get(null == a ? void 0 : a.id) : void 0
                })
            ]
        });
    },
    O = (e) => {
        let t,
            r,
            { isInSettings: u = !1 } = e,
            v = (0, a.e7)([_.Z], () => _.Z.getRecipientStatus()),
            j = (0, T.uv)('ReferralProgramProgressBar'),
            O = (0, T.TW)('ReferralProgramProgressBar'),
            { referralSentUsers: R, hasSentAllReferrals: P, refreshAt: D } = (0, E.G)(),
            y = s.useMemo(() => R.map((e) => new m.Z(e)), [R]),
            { subscriberHomeVariant: Z } = p.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
            k = j === N.g2L.UNAPPLIED || j === N.g2L.QUALIFIED,
            L = Z === p.p.VARIANT_2,
            B = {
                redeemed: 0,
                converted: 0,
                sent: v.size
            };
        v.forEach((e) => {
            e === x.Fe.REDEEMED && B.redeemed++, e === x.Fe.CONVERTED && (B.redeemed++, B.converted++);
        });
        let M = B.sent === E.Q,
            w = h.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: V } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            U = s.useRef(null),
            G = (B.sent / E.Q) * 100,
            F = !1;
        O && null != D && ((F = 0 < (t = Math.ceil((new Date(D).getTime() - new Date().getTime()) / 86400000)) && t < T.AV), (r = (100 * (T.AV - t)) / T.AV));
        let H = F && null != t,
            z = (0, i.jsxs)('div', {
                className: S.referralInfoContent,
                children: [
                    (0, i.jsx)(f.ZP, {
                        percentage: H ? 0 : G,
                        progressCircleVariation: f.Qo.NITRO_LOGO,
                        iconClassName: l()({
                            [S.referralProgressBarIcon]: !u,
                            [S.referralProgressBarIconSettings]: u
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: S.expandedProgressBarContent,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: u ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                className: S.expandedProgressBarHeader,
                                children: (0, T.$s)({
                                    referralIncentiveLifecycleState: j,
                                    hasSentAll: M,
                                    referralsStatuses: B
                                })
                            }),
                            H
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: S.progressBar,
                                              children: (0, i.jsx)('div', {
                                                  style: { width: ''.concat(r, '%') },
                                                  className: S.fill
                                              })
                                          }),
                                          (0, i.jsx)(o.X6q, {
                                              variant: 'heading-sm/semibold',
                                              className: S.referralCountdownDays,
                                              children: I.intl.format(I.t.eq39am, { days: t })
                                          })
                                      ]
                                  })
                                : (0, i.jsx)(A, {
                                      userRecords: y,
                                      recipientStatus: v
                                  }),
                            (0, i.jsx)(o.Text, {
                                variant: u ? 'text-sm/normal' : 'text-lg/medium',
                                children: (0, T.Hg)({
                                    helpdeskArticle: w,
                                    referralIncentiveLifecycleState: j,
                                    referralsStatuses: B,
                                    isWithinCountdownRange: F
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: l()(S.expandedProgressBarButtonContainer, { [S.expandedProgressBarButtonContainerLayout]: !u }),
                                children: [
                                    !u &&
                                        !L &&
                                        (0, i.jsx)(C.Z, {
                                            color: o.Ttl.CUSTOM,
                                            buttonText: I.intl.string(I.t.Ve9Ge3),
                                            className: l()(S.expandedProgressBarGiftingCTA, { [S.expandedProgressBarGiftingCTALayout]: !u }),
                                            look: o.iLD.OUTLINED,
                                            isGift: !0
                                        }),
                                    !H &&
                                        (0, i.jsx)(o.gtL, {
                                            className: S.expandedProgressBarSelectFriendsCTA,
                                            color: o.Ttl.CUSTOM,
                                            onClick: () => {
                                                g.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: V }),
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                sourceAnalyticsLocations: V
                                                            });
                                                    });
                                            },
                                            onlyShineOnHover: !0,
                                            children: (0, i.jsxs)('div', {
                                                className: S.expandedProgressBarSelectFriendsCTAInner,
                                                children: [
                                                    (0, i.jsx)('img', {
                                                        src: b,
                                                        alt: '',
                                                        className: S.expandedProgressBarSelectFriendsIcon
                                                    }),
                                                    M ? I.intl.string(I.t.SY9tyM) : I.intl.string(I.t.Lm2nFR)
                                                ]
                                            })
                                        })
                                ]
                            })
                        ]
                    })
                ]
            }),
            Y = B.redeemed === E.Q;
        return (0, i.jsx)(d.Gt, {
            value: V,
            children: (0, i.jsx)('div', {
                className: l()({
                    [S.containerWithGlowWithoutBanner]: !H && Y && !k,
                    [S.containerWithGlowWithBanner]: !H && Y && k,
                    [S.containerWithoutGlow]: H || !Y,
                    [S.containerWithMargins]: !u,
                    [S.marginWithBanner]: k,
                    [S.containerWithGlowOnSettingsPage]: !H && Y && u
                }),
                children: (0, i.jsxs)('div', {
                    ref: U,
                    className: l()({
                        [S.expandedProgressBarContainer]: !u,
                        [S.expandedProgressBarContainerSettingsPage]: u,
                        [S.expandedProgressBarContainerVariant1]: !L && !u,
                        [S.expandedProgressBarContainerVariant2]: L && !u,
                        [S.allReferralsSentBorder]: !H && Y,
                        [S.containerWithBanner]: !H && k
                    }),
                    children: [
                        k &&
                            !H &&
                            (0, i.jsx)('div', {
                                className: l()(S.banner, {
                                    [S.bannerWithContainerOutline]: P,
                                    [S.settingsBanner]: u && !P,
                                    [S.settingsBannerAllRedeemed]: u && P
                                }),
                                children: (0, i.jsx)(o.X6q, {
                                    color: 'always-white',
                                    variant: 'heading-md/extrabold',
                                    children: I.intl.format(I.t['7GMtc3'], {
                                        discountRate: T.Nq,
                                        subscriptionInterval: I.intl.string(I.t.FPybU1)
                                    })
                                })
                            }),
                        z
                    ]
                })
            })
        });
    };
