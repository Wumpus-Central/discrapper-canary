var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(518950),
    m = n(598077),
    g = n(626135),
    h = n(63063),
    p = n(281494),
    x = n(276444),
    f = n(520540),
    _ = n(796634),
    E = n(197115),
    C = n(119269),
    T = n(938736),
    S = n(981631),
    b = n(388032),
    I = n(102588),
    N = n(691766);
let v = (e) => {
        let { userRecord: t, placement: n, trialStatus: r } = e,
            { avatarSrc: s, eventHandlers: l } = (0, u.Z)({
                user: t,
                size: o.AvatarSizes.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, T.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            m = d
                ? (0, i.jsx)(o.Avatar, {
                      src: s,
                      'aria-label': t.username,
                      size: o.AvatarSizes.SIZE_32,
                      ...l
                  })
                : (0, i.jsx)(o.Heading, {
                      variant: 'heading-md/semibold',
                      className: I.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(o.Tooltip, {
            text: b.intl.string(b.t.UnKHdn),
            shouldShow: !d,
            tooltipContentClassName: I.unsentTooltipContent,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: a()({
                        [I.redeemedCircle]: c && (r === p.Fe.REDEEMED || r === p.Fe.CONVERTED),
                        [I.convertedCircleGlow]: c && r === p.Fe.CONVERTED,
                        [I.standardCircle]: c && (r === p.Fe.PENDING || null == r)
                    }),
                    children: (0, i.jsx)('div', {
                        className: c ? I.content : void 0,
                        children: (0, i.jsx)('div', {
                            className: I.userAvatarProgressBarUnit,
                            ...e,
                            children: m
                        })
                    })
                })
        });
    },
    A = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)('div', {
            className: I.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, i.jsx)('div', { className: I.avatarProgressBarUnitConnectorBase }),
                (0, i.jsx)('div', {
                    className: a()({
                        [I.fullHighlight]: t > n,
                        [I.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    j = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            r = t.length,
            s = r < 1 ? null : t[0],
            a = r < 2 ? null : t[1],
            l = r < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: I.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(v, {
                    userRecord: s,
                    placement: 1,
                    trialStatus: (null == s ? void 0 : s.id) != null ? n.get(null == s ? void 0 : s.id) : void 0
                }),
                (0, i.jsx)(A, {
                    numSentReferrals: r,
                    placement: 1
                }),
                (0, i.jsx)(v, {
                    userRecord: a,
                    placement: 2,
                    trialStatus: (null == a ? void 0 : a.id) != null ? n.get(null == a ? void 0 : a.id) : void 0
                }),
                (0, i.jsx)(A, {
                    numSentReferrals: r,
                    placement: 2
                }),
                (0, i.jsx)(v, {
                    userRecord: l,
                    placement: 3,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                })
            ]
        });
    };
t.Z = (e) => {
    let t,
        s,
        { isInSettings: u = !1 } = e,
        v = (0, l.e7)([x.Z], () => x.Z.getRecipientStatus()),
        A = (0, T.uv)('ReferralProgramProgressBar'),
        O = (0, T.TW)('ReferralProgramProgressBar'),
        { referralSentUsers: R, hasSentAllReferrals: P, refreshAt: D } = (0, _.G)(),
        y = r.useMemo(() => R.map((e) => new m.Z(e)), [R]),
        { subscriberHomeVariant: B } = f.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
        Z = A === S.g2L.UNAPPLIED || A === S.g2L.QUALIFIED,
        L = B === f.p.VARIANT_2,
        M = {
            redeemed: 0,
            converted: 0,
            sent: v.size
        };
    v.forEach((e) => {
        e === p.Fe.REDEEMED && M.redeemed++, e === p.Fe.CONVERTED && (M.redeemed++, M.converted++);
    });
    let k = M.sent === _.Q,
        w = h.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM),
        { analyticsLocations: F } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        U = r.useRef(null),
        V = (M.sent / _.Q) * 100,
        G = !1;
    O && null != D && ((G = 0 < (t = Math.ceil((new Date(D).getTime() - new Date().getTime()) / 86400000)) && t < T.AV), (s = (100 * (T.AV - t)) / T.AV));
    let H = G && null != t,
        Y = (0, i.jsxs)('div', {
            className: I.referralInfoContent,
            children: [
                (0, i.jsx)(C.ZP, {
                    percentage: H ? 0 : V,
                    progressCircleVariation: C.Qo.NITRO_LOGO,
                    iconClassName: a()({
                        [I.referralProgressBarIcon]: !u,
                        [I.referralProgressBarIconSettings]: u
                    })
                }),
                (0, i.jsxs)('div', {
                    className: I.expandedProgressBarContent,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: u ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                            className: I.expandedProgressBarHeader,
                            children: (0, T.$s)({
                                referralIncentiveLifecycleState: A,
                                hasSentAll: k,
                                referralsStatuses: M
                            })
                        }),
                        H
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: I.progressBar,
                                          children: (0, i.jsx)('div', {
                                              style: { width: ''.concat(s, '%') },
                                              className: I.fill
                                          })
                                      }),
                                      (0, i.jsx)(o.Heading, {
                                          variant: 'heading-sm/semibold',
                                          className: I.referralCountdownDays,
                                          children: b.intl.format(b.t.eq39am, { days: t })
                                      })
                                  ]
                              })
                            : (0, i.jsx)(j, {
                                  userRecords: y,
                                  recipientStatus: v
                              }),
                        (0, i.jsx)(o.Text, {
                            variant: u ? 'text-sm/normal' : 'text-lg/medium',
                            children: (0, T.Hg)({
                                helpdeskArticle: w,
                                referralIncentiveLifecycleState: A,
                                referralsStatuses: M,
                                isWithinCountdownRange: G
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(I.expandedProgressBarButtonContainer, { [I.expandedProgressBarButtonContainerLayout]: !u }),
                            children: [
                                !u &&
                                    !L &&
                                    (0, i.jsx)(E.Z, {
                                        color: o.ButtonColors.CUSTOM,
                                        buttonText: b.intl.string(b.t.Ve9Ge3),
                                        className: a()(I.expandedProgressBarGiftingCTA, { [I.expandedProgressBarGiftingCTALayout]: !u }),
                                        look: o.ButtonLooks.OUTLINED,
                                        isGift: !0
                                    }),
                                !H &&
                                    (0, i.jsx)(o.ShinyButton, {
                                        className: I.expandedProgressBarSelectFriendsCTA,
                                        color: o.ButtonColors.CUSTOM,
                                        onClick: () => {
                                            g.default.track(S.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: F }),
                                                (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            ...t,
                                                            sourceAnalyticsLocations: F
                                                        });
                                                });
                                        },
                                        onlyShineOnHover: !0,
                                        children: (0, i.jsxs)('div', {
                                            className: I.expandedProgressBarSelectFriendsCTAInner,
                                            children: [
                                                (0, i.jsx)('img', {
                                                    src: N,
                                                    alt: '',
                                                    className: I.expandedProgressBarSelectFriendsIcon
                                                }),
                                                k ? b.intl.string(b.t.SY9tyM) : b.intl.string(b.t.Lm2nFR)
                                            ]
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        }),
        W = M.redeemed === _.Q;
    return (0, i.jsx)(d.Gt, {
        value: F,
        children: (0, i.jsx)('div', {
            className: a()({
                [I.containerWithGlowWithoutBanner]: !H && W && !Z,
                [I.containerWithGlowWithBanner]: !H && W && Z,
                [I.containerWithoutGlow]: H || !W,
                [I.containerWithMargins]: !u,
                [I.marginWithBanner]: Z,
                [I.containerWithGlowOnSettingsPage]: !H && W && u
            }),
            children: (0, i.jsxs)('div', {
                ref: U,
                className: a()({
                    [I.expandedProgressBarContainer]: !u,
                    [I.expandedProgressBarContainerSettingsPage]: u,
                    [I.expandedProgressBarContainerVariant1]: !L && !u,
                    [I.expandedProgressBarContainerVariant2]: L && !u,
                    [I.allReferralsSentBorder]: !H && W,
                    [I.containerWithBanner]: !H && Z
                }),
                children: [
                    Z &&
                        !H &&
                        (0, i.jsx)('div', {
                            className: a()(I.banner, {
                                [I.bannerWithContainerOutline]: P,
                                [I.settingsBanner]: u && !P,
                                [I.settingsBannerAllRedeemed]: u && P
                            }),
                            children: (0, i.jsx)(o.Heading, {
                                color: 'always-white',
                                variant: 'heading-md/extrabold',
                                children: b.intl.format(b.t['7GMtc3'], {
                                    discountRate: T.Nq,
                                    subscriptionInterval: b.intl.string(b.t.FPybU1)
                                })
                            })
                        }),
                    Y
                ]
            })
        })
    });
};
