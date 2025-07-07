n.d(t, { Z: () => A });
var i = n(255367),
    r = n(73800),
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
    b = n(796634),
    x = n(119269),
    _ = n(938736),
    E = n(981631),
    j = n(388032),
    O = n(357885),
    C = n(691766);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function v(e, t) {
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
let T = (e) => {
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
                      S(
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
                      className: O.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(o.ua7, {
            text: j.intl.string(j.t.UnKHdn),
            shouldShow: !l,
            tooltipContentClassName: O.unsentTooltipContent,
            children: (e) => (0, i.jsx)('div', v(S({ className: O.userAvatarProgressBarUnit }, e), { children: a }))
        });
    },
    N = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)('div', {
            className: O.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, i.jsx)('div', { className: O.avatarProgressBarUnitConnectorBase }),
                (0, i.jsx)('div', {
                    className: l()({
                        [O.fullHighlight]: t > n,
                        [O.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    I = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            r = n < 1 ? null : t[0],
            s = n < 2 ? null : t[1],
            l = n < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: O.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(T, {
                    userRecord: r,
                    placement: 1
                }),
                (0, i.jsx)(N, {
                    numSentReferrals: n,
                    placement: 1
                }),
                (0, i.jsx)(T, {
                    userRecord: s,
                    placement: 2
                }),
                (0, i.jsx)(N, {
                    numSentReferrals: n,
                    placement: 2
                }),
                (0, i.jsx)(T, {
                    userRecord: l,
                    placement: 3
                })
            ]
        });
    },
    y = (e) => {
        let { analyticsLocations: t } = e;
        (p.default.track(E.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                return (n) => (0, i.jsx)(e, v(S({}, n), { sourceAnalyticsLocations: t }));
            }));
    },
    A = (e) => {
        let { isInSettings: t = !1 } = e,
            n = (0, a.e7)([f.Z], () => f.Z.getRecipientStatus()),
            { referralSentUsers: s } = (0, b.G)(),
            u = r.useMemo(() => s.map((e) => new m.Z(e)), [s]),
            p = {
                redeemed: 0,
                converted: 0,
                sent: n.size
            };
        n.forEach((e) => {
            (e === h.Fe.REDEEMED && p.redeemed++, e === h.Fe.CONVERTED && (p.redeemed++, p.converted++));
        });
        let S = p.sent === b.Q,
            v = g.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: T } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            N = r.useRef(null),
            A = (p.sent / b.Q) * 100,
            P = (0, i.jsxs)('div', {
                className: O.referralInfoContent,
                children: [
                    (0, i.jsx)(x.ZP, {
                        percentage: A,
                        progressCircleVariation: x.Qo.NITRO_LOGO,
                        iconClassName: l()({
                            [O.referralProgressBarIcon]: !t,
                            [O.referralProgressBarIconSettings]: t
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: O.expandedProgressBarContent,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: t ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                className: O.expandedProgressBarHeader,
                                children: (0, _.$s)({ hasSentAll: S })
                            }),
                            (0, i.jsx)(I, { userRecords: u }),
                            (0, i.jsx)(o.Text, {
                                variant: t ? 'text-sm/normal' : 'text-lg/medium',
                                children: (0, _.Hg)({
                                    helpdeskArticle: v,
                                    referralsStatuses: p
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: l()(O.expandedProgressBarButtonContainer, { [O.expandedProgressBarButtonContainerLayout]: !t }),
                                children: (0, i.jsx)(o.gtL, {
                                    className: O.expandedProgressBarSelectFriendsCTA,
                                    color: o.Ttl.CUSTOM,
                                    onClick: () => y({ analyticsLocations: T }),
                                    onlyShineOnHover: !0,
                                    children: (0, i.jsxs)('div', {
                                        className: O.expandedProgressBarSelectFriendsCTAInner,
                                        children: [
                                            (0, i.jsx)('img', {
                                                src: C,
                                                alt: '',
                                                className: O.expandedProgressBarSelectFriendsIcon
                                            }),
                                            S ? j.intl.string(j.t.SY9tyM) : j.intl.string(j.t.Lm2nFR)
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            R = p.redeemed === b.Q;
        return (0, i.jsx)(d.Gt, {
            value: T,
            children: (0, i.jsx)('div', {
                className: l()({
                    [O.containerWithGlowWithoutBanner]: R,
                    [O.containerWithoutGlow]: !R,
                    [O.containerWithMargins]: !t,
                    [O.containerWithGlowOnSettingsPage]: R && t
                }),
                children: (0, i.jsx)('div', {
                    ref: N,
                    className: l()({
                        [O.expandedProgressBarContainer]: !t,
                        [O.expandedProgressBarContainerSettingsPage]: t,
                        [O.allReferralsSentBorder]: R
                    }),
                    children: P
                })
            })
        });
    };
