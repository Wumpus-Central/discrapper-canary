n.d(t, { Z: () => P });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(518950),
    m = n(598077),
    p = n(626135),
    g = n(63063),
    h = n(281494),
    f = n(276444),
    b = n(520540),
    _ = n(796634),
    x = n(197115),
    E = n(119269),
    j = n(938736),
    C = n(981631),
    O = n(388032),
    S = n(357885),
    v = n(691766);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (e) => {
        let { userRecord: t, placement: n } = e,
            { avatarSrc: r, eventHandlers: s } = (0, u.Z)({
                user: t,
                size: o.EFr.SIZE_32,
                animateOnHover: !0
            }),
            l = null != t,
            a = l
                ? (0, i.jsx)(
                      o.qEK,
                      T(
                          {
                              src: r,
                              'aria-label': t.username,
                              size: o.EFr.SIZE_32
                          },
                          s
                      )
                  )
                : (0, i.jsx)(o.X6q, {
                      variant: 'heading-md/semibold',
                      className: S.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(o.ua7, {
            text: O.intl.string(O.t.UnKHdn),
            shouldShow: !l,
            tooltipContentClassName: S.unsentTooltipContent,
            children: (e) => (0, i.jsx)('div', I(T({ className: S.userAvatarProgressBarUnit }, e), { children: a }))
        });
    },
    y = (e) => {
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
        let { userRecords: t } = e,
            n = t.length,
            r = n < 1 ? null : t[0],
            s = n < 2 ? null : t[1],
            l = n < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: S.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(N, {
                    userRecord: r,
                    placement: 1
                }),
                (0, i.jsx)(y, {
                    numSentReferrals: n,
                    placement: 1
                }),
                (0, i.jsx)(N, {
                    userRecord: s,
                    placement: 2
                }),
                (0, i.jsx)(y, {
                    numSentReferrals: n,
                    placement: 2
                }),
                (0, i.jsx)(N, {
                    userRecord: l,
                    placement: 3
                })
            ]
        });
    },
    P = (e) => {
        let { isInSettings: t = !1 } = e,
            s = (0, a.e7)([f.Z], () => f.Z.getRecipientStatus()),
            { referralSentUsers: u } = (0, _.G)(),
            N = r.useMemo(() => u.map((e) => new m.Z(e)), [u]),
            { subscriberHomeVariant: y } = b.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
            P = y === b.p.VARIANT_2,
            R = {
                redeemed: 0,
                converted: 0,
                sent: s.size
            };
        s.forEach((e) => {
            e === h.Fe.REDEEMED && R.redeemed++, e === h.Fe.CONVERTED && (R.redeemed++, R.converted++);
        });
        let D = R.sent === _.Q,
            Z = g.Z.getArticleURL(C.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: w } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            k = r.useRef(null),
            L = (R.sent / _.Q) * 100,
            M = (0, i.jsxs)('div', {
                className: S.referralInfoContent,
                children: [
                    (0, i.jsx)(E.ZP, {
                        percentage: L,
                        progressCircleVariation: E.Qo.NITRO_LOGO,
                        iconClassName: l()({
                            [S.referralProgressBarIcon]: !t,
                            [S.referralProgressBarIconSettings]: t
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: S.expandedProgressBarContent,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: t ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                className: S.expandedProgressBarHeader,
                                children: (0, j.$s)({ hasSentAll: D })
                            }),
                            (0, i.jsx)(A, { userRecords: N }),
                            (0, i.jsx)(o.Text, {
                                variant: t ? 'text-sm/normal' : 'text-lg/medium',
                                children: (0, j.Hg)({
                                    helpdeskArticle: Z,
                                    referralsStatuses: R
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: l()(S.expandedProgressBarButtonContainer, { [S.expandedProgressBarButtonContainerLayout]: !t }),
                                children: [
                                    !t &&
                                        !P &&
                                        (0, i.jsx)(x.Z, {
                                            color: o.Ttl.CUSTOM,
                                            buttonText: O.intl.string(O.t.Ve9Ge3),
                                            className: l()(S.expandedProgressBarGiftingCTA, { [S.expandedProgressBarGiftingCTALayout]: !t }),
                                            look: o.iLD.OUTLINED,
                                            isGift: !0
                                        }),
                                    (0, i.jsx)(o.gtL, {
                                        className: S.expandedProgressBarSelectFriendsCTA,
                                        color: o.Ttl.CUSTOM,
                                        onClick: () => {
                                            p.default.track(C.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: w }),
                                                (0, o.ZDy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) => (0, i.jsx)(e, I(T({}, t), { sourceAnalyticsLocations: w }));
                                                });
                                        },
                                        onlyShineOnHover: !0,
                                        children: (0, i.jsxs)('div', {
                                            className: S.expandedProgressBarSelectFriendsCTAInner,
                                            children: [
                                                (0, i.jsx)('img', {
                                                    src: v,
                                                    alt: '',
                                                    className: S.expandedProgressBarSelectFriendsIcon
                                                }),
                                                D ? O.intl.string(O.t.SY9tyM) : O.intl.string(O.t.Lm2nFR)
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            B = R.redeemed === _.Q;
        return (0, i.jsx)(d.Gt, {
            value: w,
            children: (0, i.jsx)('div', {
                className: l()({
                    [S.containerWithGlowWithoutBanner]: B,
                    [S.containerWithoutGlow]: !B,
                    [S.containerWithMargins]: !t,
                    [S.containerWithGlowOnSettingsPage]: B && t
                }),
                children: (0, i.jsx)('div', {
                    ref: k,
                    className: l()({
                        [S.expandedProgressBarContainer]: !t,
                        [S.expandedProgressBarContainerSettingsPage]: t,
                        [S.expandedProgressBarContainerVariant1]: !P && !t,
                        [S.expandedProgressBarContainerVariant2]: P && !t,
                        [S.allReferralsSentBorder]: B
                    }),
                    children: M
                })
            })
        });
    };
