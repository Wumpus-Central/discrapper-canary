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
    O = n(388032),
    C = n(357885),
    S = n(691766);
function v(e) {
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
        let { userRecord: t, placement: n } = e,
            { avatarSrc: i, eventHandlers: s } = (0, u.Z)({
                user: t,
                size: o.EFr.SIZE_32,
                animateOnHover: !0
            }),
            a = null != t,
            l = a
                ? (0, r.jsx)(
                      o.qEK,
                      v(
                          {
                              src: i,
                              'aria-label': t.username,
                              size: o.EFr.SIZE_32
                          },
                          s
                      )
                  )
                : (0, r.jsx)(o.X6q, {
                      variant: 'heading-md/semibold',
                      className: C.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, r.jsx)(o.ua7, {
            text: O.NW.string(O.t.UnKHdn),
            shouldShow: !a,
            tooltipContentClassName: C.unsentTooltipContent,
            children: (e) => (0, r.jsx)('div', T(v({ className: C.userAvatarProgressBarUnit }, e), { children: l }))
        });
    },
    y = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, r.jsxs)('div', {
            className: C.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, r.jsx)('div', { className: C.avatarProgressBarUnitConnectorBase }),
                (0, r.jsx)('div', {
                    className: a()({
                        [C.fullHighlight]: t > n,
                        [C.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    A = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            i = n < 1 ? null : t[0],
            s = n < 2 ? null : t[1],
            a = n < 3 ? null : t[2];
        return (0, r.jsxs)('div', {
            className: C.userAvatarProgressBarContainer,
            children: [
                (0, r.jsx)(I, {
                    userRecord: i,
                    placement: 1
                }),
                (0, r.jsx)(y, {
                    numSentReferrals: n,
                    placement: 1
                }),
                (0, r.jsx)(I, {
                    userRecord: s,
                    placement: 2
                }),
                (0, r.jsx)(y, {
                    numSentReferrals: n,
                    placement: 2
                }),
                (0, r.jsx)(I, {
                    userRecord: a,
                    placement: 3
                })
            ]
        });
    },
    P = (e) => {
        let { isInSettings: t = !1 } = e,
            s = (0, l.e7)([f.Z], () => f.Z.getRecipientStatus()),
            { referralSentUsers: u } = (0, N.G)(),
            I = i.useMemo(() => u.map((e) => new m.Z(e)), [u]),
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
        let D = R.sent === N.Q,
            Z = p.Z.getArticleURL(j.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: w } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            k = i.useRef(null),
            W = (R.sent / N.Q) * 100,
            L = (0, r.jsxs)('div', {
                className: C.referralInfoContent,
                children: [
                    (0, r.jsx)(_.ZP, {
                        percentage: W,
                        progressCircleVariation: _.Qo.NITRO_LOGO,
                        iconClassName: a()({
                            [C.referralProgressBarIcon]: !t,
                            [C.referralProgressBarIconSettings]: t
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: C.expandedProgressBarContent,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: t ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                className: C.expandedProgressBarHeader,
                                children: (0, E.$s)({ hasSentAll: D })
                            }),
                            (0, r.jsx)(A, { userRecords: I }),
                            (0, r.jsx)(o.Text, {
                                variant: t ? 'text-sm/normal' : 'text-lg/medium',
                                children: (0, E.Hg)({
                                    helpdeskArticle: Z,
                                    referralsStatuses: R
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: a()(C.expandedProgressBarButtonContainer, { [C.expandedProgressBarButtonContainerLayout]: !t }),
                                children: [
                                    !t &&
                                        !P &&
                                        (0, r.jsx)(x.Z, {
                                            color: o.Ttl.CUSTOM,
                                            buttonText: O.NW.string(O.t.Ve9Ge3),
                                            className: a()(C.expandedProgressBarGiftingCTA, { [C.expandedProgressBarGiftingCTALayout]: !t }),
                                            look: o.iLD.OUTLINED,
                                            isGift: !0
                                        }),
                                    (0, r.jsx)(o.gtL, {
                                        className: C.expandedProgressBarSelectFriendsCTA,
                                        color: o.Ttl.CUSTOM,
                                        onClick: () => {
                                            g.default.track(j.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: w }),
                                                (0, o.ZDy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) => (0, r.jsx)(e, T(v({}, t), { sourceAnalyticsLocations: w }));
                                                });
                                        },
                                        onlyShineOnHover: !0,
                                        children: (0, r.jsxs)('div', {
                                            className: C.expandedProgressBarSelectFriendsCTAInner,
                                            children: [
                                                (0, r.jsx)('img', {
                                                    src: S,
                                                    alt: '',
                                                    className: C.expandedProgressBarSelectFriendsIcon
                                                }),
                                                D ? O.NW.string(O.t.SY9tyM) : O.NW.string(O.t.Lm2nFR)
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            B = R.redeemed === N.Q;
        return (0, r.jsx)(d.Gt, {
            value: w,
            children: (0, r.jsx)('div', {
                className: a()({
                    [C.containerWithGlowWithoutBanner]: B,
                    [C.containerWithoutGlow]: !B,
                    [C.containerWithMargins]: !t,
                    [C.containerWithGlowOnSettingsPage]: B && t
                }),
                children: (0, r.jsx)('div', {
                    ref: k,
                    className: a()({
                        [C.expandedProgressBarContainer]: !t,
                        [C.expandedProgressBarContainerSettingsPage]: t,
                        [C.expandedProgressBarContainerVariant1]: !P && !t,
                        [C.expandedProgressBarContainerVariant2]: P && !t,
                        [C.allReferralsSentBorder]: B
                    }),
                    children: L
                })
            })
        });
    };
