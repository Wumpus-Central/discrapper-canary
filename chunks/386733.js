var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(518950),
    g = n(598077),
    m = n(626135),
    f = n(63063),
    p = n(281494),
    _ = n(276444),
    h = n(520540),
    x = n(796634),
    E = n(197115),
    b = n(119269),
    C = n(938736),
    v = n(981631),
    T = n(388032),
    N = n(102588),
    I = n(691766);
let S = (e) => {
        let { userRecord: t, placement: n, trialStatus: r } = e,
            { avatarSrc: a, eventHandlers: l } = (0, u.Z)({
                user: t,
                size: o.AvatarSizes.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, C.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            g = d
                ? (0, i.jsx)(o.Avatar, {
                      src: a,
                      'aria-label': t.username,
                      size: o.AvatarSizes.SIZE_32,
                      ...l
                  })
                : (0, i.jsx)(o.Heading, {
                      variant: 'heading-md/semibold',
                      className: N.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(o.Tooltip, {
            text: T.intl.string(T.t.UnKHdn),
            shouldShow: !d,
            tooltipContentClassName: N.unsentTooltipContent,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: s()({
                        [N.redeemedCircle]: c && (r === p.Fe.REDEEMED || r === p.Fe.CONVERTED),
                        [N.convertedCircleGlow]: c && r === p.Fe.CONVERTED,
                        [N.standardCircle]: c && (r === p.Fe.PENDING || null == r)
                    }),
                    children: (0, i.jsx)('div', {
                        className: c ? N.content : void 0,
                        children: (0, i.jsx)('div', {
                            className: N.userAvatarProgressBarUnit,
                            ...e,
                            children: g
                        })
                    })
                })
        });
    },
    R = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)('div', {
            className: N.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, i.jsx)('div', { className: N.avatarProgressBarUnitConnectorBase }),
                (0, i.jsx)('div', {
                    className: s()({
                        [N.fullHighlight]: t > n,
                        [N.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    j = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            r = t.length,
            a = r < 1 ? null : t[0],
            s = r < 2 ? null : t[1],
            l = r < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: N.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(S, {
                    userRecord: a,
                    placement: 1,
                    trialStatus: (null == a ? void 0 : a.id) != null ? n.get(null == a ? void 0 : a.id) : void 0
                }),
                (0, i.jsx)(R, {
                    numSentReferrals: r,
                    placement: 1
                }),
                (0, i.jsx)(S, {
                    userRecord: s,
                    placement: 2,
                    trialStatus: (null == s ? void 0 : s.id) != null ? n.get(null == s ? void 0 : s.id) : void 0
                }),
                (0, i.jsx)(R, {
                    numSentReferrals: r,
                    placement: 2
                }),
                (0, i.jsx)(S, {
                    userRecord: l,
                    placement: 3,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                })
            ]
        });
    };
t.Z = (e) => {
    let t,
        a,
        { isInSettings: u = !1 } = e,
        S = (0, l.e7)([_.Z], () => _.Z.getRecipientStatus()),
        R = (0, C.uv)('ReferralProgramProgressBar'),
        A = (0, C.TW)('ReferralProgramProgressBar'),
        { referralSentUsers: P, hasSentAllReferrals: O, refreshAt: Z } = (0, x.G)(),
        M = r.useMemo(() => P.map((e) => new g.Z(e)), [P]),
        { subscriberHomeVariant: B } = h.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
        y = R === v.g2L.UNAPPLIED || R === v.g2L.QUALIFIED,
        w = B === h.p.VARIANT_2,
        k = {
            redeemed: 0,
            converted: 0,
            sent: S.size
        };
    S.forEach((e) => {
        e === p.Fe.REDEEMED && k.redeemed++, e === p.Fe.CONVERTED && (k.redeemed++, k.converted++);
    });
    let L = k.sent === x.Q,
        U = f.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM),
        { analyticsLocations: D } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        G = r.useRef(null),
        H = (k.sent / x.Q) * 100,
        V = !1;
    A && null != Z && ((V = 0 < (t = Math.ceil((new Date(Z).getTime() - new Date().getTime()) / 86400000)) && t < C.AV), (a = (100 * (C.AV - t)) / C.AV));
    let F = V && null != t,
        W = (0, i.jsxs)('div', {
            className: N.referralInfoContent,
            children: [
                (0, i.jsx)(b.ZP, {
                    percentage: F ? 0 : H,
                    progressCircleVariation: b.Qo.NITRO_LOGO,
                    iconClassName: s()({
                        [N.referralProgressBarIcon]: !u,
                        [N.referralProgressBarIconSettings]: u
                    })
                }),
                (0, i.jsxs)('div', {
                    className: N.expandedProgressBarContent,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: u ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                            className: N.expandedProgressBarHeader,
                            children: (0, C.$s)({
                                referralIncentiveLifecycleState: R,
                                hasSentAll: L,
                                referralsStatuses: k
                            })
                        }),
                        F
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: N.progressBar,
                                          children: (0, i.jsx)('div', {
                                              style: { width: ''.concat(a, '%') },
                                              className: N.fill
                                          })
                                      }),
                                      (0, i.jsx)(o.Heading, {
                                          variant: 'heading-sm/semibold',
                                          className: N.referralCountdownDays,
                                          children: T.intl.format(T.t.eq39am, { days: t })
                                      })
                                  ]
                              })
                            : (0, i.jsx)(j, {
                                  userRecords: M,
                                  recipientStatus: S
                              }),
                        (0, i.jsx)(o.Text, {
                            variant: u ? 'text-sm/normal' : 'text-lg/medium',
                            children: (0, C.Hg)({
                                helpdeskArticle: U,
                                referralIncentiveLifecycleState: R,
                                referralsStatuses: k,
                                isWithinCountdownRange: V
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: s()(N.expandedProgressBarButtonContainer, { [N.expandedProgressBarButtonContainerLayout]: !u }),
                            children: [
                                !u &&
                                    !w &&
                                    (0, i.jsx)(E.Z, {
                                        color: o.ButtonColors.CUSTOM,
                                        buttonText: T.intl.string(T.t.Ve9Ge3),
                                        className: s()(N.expandedProgressBarGiftingCTA, { [N.expandedProgressBarGiftingCTALayout]: !u }),
                                        look: o.ButtonLooks.OUTLINED,
                                        isGift: !0
                                    }),
                                !F &&
                                    (0, i.jsx)(o.ShinyButton, {
                                        className: N.expandedProgressBarSelectFriendsCTA,
                                        color: o.ButtonColors.CUSTOM,
                                        onClick: () => {
                                            m.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: D }),
                                                (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            ...t,
                                                            sourceAnalyticsLocations: D
                                                        });
                                                });
                                        },
                                        onlyShineOnHover: !0,
                                        children: (0, i.jsxs)('div', {
                                            className: N.expandedProgressBarSelectFriendsCTAInner,
                                            children: [
                                                (0, i.jsx)('img', {
                                                    src: I,
                                                    alt: '',
                                                    className: N.expandedProgressBarSelectFriendsIcon
                                                }),
                                                L ? T.intl.string(T.t.SY9tyM) : T.intl.string(T.t.Lm2nFR)
                                            ]
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        }),
        z = k.redeemed === x.Q;
    return (0, i.jsx)(d.Gt, {
        value: D,
        children: (0, i.jsx)('div', {
            className: s()({
                [N.containerWithGlowWithoutBanner]: !F && z && !y,
                [N.containerWithGlowWithBanner]: !F && z && y,
                [N.containerWithoutGlow]: F || !z,
                [N.containerWithMargins]: !u,
                [N.marginWithBanner]: y,
                [N.containerWithGlowOnSettingsPage]: !F && z && u
            }),
            children: (0, i.jsxs)('div', {
                ref: G,
                className: s()({
                    [N.expandedProgressBarContainer]: !u,
                    [N.expandedProgressBarContainerSettingsPage]: u,
                    [N.expandedProgressBarContainerVariant1]: !w && !u,
                    [N.expandedProgressBarContainerVariant2]: w && !u,
                    [N.allReferralsSentBorder]: !F && z,
                    [N.containerWithBanner]: !F && y
                }),
                children: [
                    y &&
                        !F &&
                        (0, i.jsx)('div', {
                            className: s()(N.banner, {
                                [N.bannerWithContainerOutline]: O,
                                [N.settingsBanner]: u && !O,
                                [N.settingsBannerAllRedeemed]: u && O
                            }),
                            children: (0, i.jsx)(o.Heading, {
                                color: 'always-white',
                                variant: 'heading-md/extrabold',
                                children: T.intl.format(T.t['7GMtc3'], {
                                    discountRate: C.Nq,
                                    subscriptionInterval: T.intl.string(T.t.FPybU1)
                                })
                            })
                        }),
                    W
                ]
            })
        })
    });
};
