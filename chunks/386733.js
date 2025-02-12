n.d(t, { Z: () => A });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(518950),
    m = n(598077),
    g = n(626135),
    _ = n(63063),
    p = n(281494),
    f = n(276444),
    h = n(520540),
    x = n(796634),
    E = n(197115),
    C = n(119269),
    b = n(938736),
    v = n(981631),
    T = n(388032),
    N = n(916199),
    I = n(691766);
let R = (e) => {
        let { userRecord: t, placement: n, trialStatus: r } = e,
            { avatarSrc: a, eventHandlers: l } = (0, u.Z)({
                user: t,
                size: o.EFr.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, b.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            m = d
                ? (0, i.jsx)(o.qEK, {
                      src: a,
                      'aria-label': t.username,
                      size: o.EFr.SIZE_32,
                      ...l
                  })
                : (0, i.jsx)(o.X6q, {
                      variant: 'heading-md/semibold',
                      className: N.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(o.ua7, {
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
                            children: m
                        })
                    })
                })
        });
    },
    j = (e) => {
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
    S = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            r = t.length,
            a = r < 1 ? null : t[0],
            s = r < 2 ? null : t[1],
            l = r < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: N.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(R, {
                    userRecord: a,
                    placement: 1,
                    trialStatus: (null == a ? void 0 : a.id) != null ? n.get(null == a ? void 0 : a.id) : void 0
                }),
                (0, i.jsx)(j, {
                    numSentReferrals: r,
                    placement: 1
                }),
                (0, i.jsx)(R, {
                    userRecord: s,
                    placement: 2,
                    trialStatus: (null == s ? void 0 : s.id) != null ? n.get(null == s ? void 0 : s.id) : void 0
                }),
                (0, i.jsx)(j, {
                    numSentReferrals: r,
                    placement: 2
                }),
                (0, i.jsx)(R, {
                    userRecord: l,
                    placement: 3,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                })
            ]
        });
    },
    A = (e) => {
        let t,
            a,
            { isInSettings: u = !1 } = e,
            R = (0, l.e7)([f.Z], () => f.Z.getRecipientStatus()),
            j = (0, b.uv)('ReferralProgramProgressBar'),
            A = (0, b.TW)('ReferralProgramProgressBar'),
            { referralSentUsers: P, hasSentAllReferrals: Z, refreshAt: w } = (0, x.G)(),
            M = r.useMemo(() => P.map((e) => new m.Z(e)), [P]),
            { subscriberHomeVariant: B } = h.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
            y = j === v.g2L.UNAPPLIED || j === v.g2L.QUALIFIED,
            k = B === h.p.VARIANT_2,
            O = {
                redeemed: 0,
                converted: 0,
                sent: R.size
            };
        R.forEach((e) => {
            e === p.Fe.REDEEMED && O.redeemed++, e === p.Fe.CONVERTED && (O.redeemed++, O.converted++);
        });
        let L = O.sent === x.Q,
            D = _.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: U } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            G = r.useRef(null),
            V = (O.sent / x.Q) * 100,
            H = !1;
        A && null != w && ((H = 0 < (t = Math.ceil((new Date(w).getTime() - new Date().getTime()) / 86400000)) && t < b.AV), (a = (100 * (b.AV - t)) / b.AV));
        let F = H && null != t,
            W = (0, i.jsxs)('div', {
                className: N.referralInfoContent,
                children: [
                    (0, i.jsx)(C.ZP, {
                        percentage: F ? 0 : V,
                        progressCircleVariation: C.Qo.NITRO_LOGO,
                        iconClassName: s()({
                            [N.referralProgressBarIcon]: !u,
                            [N.referralProgressBarIconSettings]: u
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: N.expandedProgressBarContent,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: u ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                className: N.expandedProgressBarHeader,
                                children: (0, b.$s)({
                                    referralIncentiveLifecycleState: j,
                                    hasSentAll: L,
                                    referralsStatuses: O
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
                                          (0, i.jsx)(o.X6q, {
                                              variant: 'heading-sm/semibold',
                                              className: N.referralCountdownDays,
                                              children: T.intl.format(T.t.eq39am, { days: t })
                                          })
                                      ]
                                  })
                                : (0, i.jsx)(S, {
                                      userRecords: M,
                                      recipientStatus: R
                                  }),
                            (0, i.jsx)(o.Text, {
                                variant: u ? 'text-sm/normal' : 'text-lg/medium',
                                children: (0, b.Hg)({
                                    helpdeskArticle: D,
                                    referralIncentiveLifecycleState: j,
                                    referralsStatuses: O,
                                    isWithinCountdownRange: H
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: s()(N.expandedProgressBarButtonContainer, { [N.expandedProgressBarButtonContainerLayout]: !u }),
                                children: [
                                    !u &&
                                        !k &&
                                        (0, i.jsx)(E.Z, {
                                            color: o.Ttl.CUSTOM,
                                            buttonText: T.intl.string(T.t.Ve9Ge3),
                                            className: s()(N.expandedProgressBarGiftingCTA, { [N.expandedProgressBarGiftingCTALayout]: !u }),
                                            look: o.iLD.OUTLINED,
                                            isGift: !0
                                        }),
                                    !F &&
                                        (0, i.jsx)(o.gtL, {
                                            className: N.expandedProgressBarSelectFriendsCTA,
                                            color: o.Ttl.CUSTOM,
                                            onClick: () => {
                                                g.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: U }),
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                sourceAnalyticsLocations: U
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
            z = O.redeemed === x.Q;
        return (0, i.jsx)(d.Gt, {
            value: U,
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
                        [N.expandedProgressBarContainerVariant1]: !k && !u,
                        [N.expandedProgressBarContainerVariant2]: k && !u,
                        [N.allReferralsSentBorder]: !F && z,
                        [N.containerWithBanner]: !F && y
                    }),
                    children: [
                        y &&
                            !F &&
                            (0, i.jsx)('div', {
                                className: s()(N.banner, {
                                    [N.bannerWithContainerOutline]: Z,
                                    [N.settingsBanner]: u && !Z,
                                    [N.settingsBannerAllRedeemed]: u && Z
                                }),
                                children: (0, i.jsx)(o.X6q, {
                                    color: 'always-white',
                                    variant: 'heading-md/extrabold',
                                    children: T.intl.format(T.t['7GMtc3'], {
                                        discountRate: b.Nq,
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
