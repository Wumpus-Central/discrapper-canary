n.d(t, { Z: () => P });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    m = n(518950),
    p = n(598077),
    g = n(626135),
    h = n(63063),
    f = n(281494),
    b = n(276444),
    x = n(796634),
    _ = n(119269),
    j = n(938736),
    O = n(981631),
    C = n(388032),
    E = n(357885),
    v = n(691766);
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
function T(e, t) {
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
            { avatarSrc: r, eventHandlers: s } = (0, m.Z)({
                userId: null == t ? void 0 : t.id,
                size: c.EFr.SIZE_32,
                animateOnHover: !0
            }),
            a = null != t,
            l = a
                ? (0, i.jsx)(
                      c.qEK,
                      S(
                          {
                              src: r,
                              'aria-label': t.username,
                              size: c.EFr.SIZE_32
                          },
                          s
                      )
                  )
                : (0, i.jsx)(c.X6q, {
                      variant: 'heading-md/semibold',
                      className: E.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(c.ua7, {
            text: C.intl.string(C.t.UnKHdn),
            shouldShow: !a,
            tooltipContentClassName: E.unsentTooltipContent,
            children: (e) => (0, i.jsx)('div', T(S({ className: E.userAvatarProgressBarUnit }, e), { children: l }))
        });
    },
    I = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)('div', {
            className: E.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, i.jsx)('div', { className: E.avatarProgressBarUnitConnectorBase }),
                (0, i.jsx)('div', {
                    className: a()({
                        [E.fullHighlight]: t > n,
                        [E.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    y = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            r = n < 1 ? null : t[0],
            s = n < 2 ? null : t[1],
            a = n < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: E.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(N, {
                    userRecord: r,
                    placement: 1
                }),
                (0, i.jsx)(I, {
                    numSentReferrals: n,
                    placement: 1
                }),
                (0, i.jsx)(N, {
                    userRecord: s,
                    placement: 2
                }),
                (0, i.jsx)(I, {
                    numSentReferrals: n,
                    placement: 2
                }),
                (0, i.jsx)(N, {
                    userRecord: a,
                    placement: 3
                })
            ]
        });
    },
    A = (e) => {
        let { analyticsLocations: t } = e;
        (g.default.track(O.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                return (n) => (0, i.jsx)(e, T(S({}, n), { sourceAnalyticsLocations: t }));
            }));
    },
    P = (e) => {
        let { isInSettings: t = !1 } = e,
            n = (0, l.e7)([b.Z], () => b.Z.getRecipientStatus()),
            { referralSentUsers: s } = (0, x.G)(),
            m = r.useMemo(() => s.map((e) => new p.Z(e)), [s]),
            g = {
                redeemed: 0,
                converted: 0,
                sent: n.size
            };
        n.forEach((e) => {
            (e === f.Fe.REDEEMED && g.redeemed++, e === f.Fe.CONVERTED && (g.redeemed++, g.converted++));
        });
        let S = g.sent === x.Q,
            T = h.Z.getArticleURL(O.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: N } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            I = r.useRef(null),
            P = (g.sent / x.Q) * 100,
            R = (0, i.jsxs)('div', {
                className: E.referralInfoContent,
                children: [
                    (0, i.jsx)(_.ZP, {
                        percentage: P,
                        progressCircleVariation: _.Qo.NITRO_LOGO,
                        iconClassName: a()({
                            [E.referralProgressBarIcon]: !t,
                            [E.referralProgressBarIconSettings]: t
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: E.expandedProgressBarContent,
                        children: [
                            (0, i.jsx)(c.X6q, {
                                variant: t ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                                className: E.expandedProgressBarHeader,
                                children: (0, j.$s)({ hasSentAll: S })
                            }),
                            (0, i.jsx)(y, { userRecords: m }),
                            (0, i.jsx)(c.Text, {
                                variant: t ? 'text-sm/normal' : 'text-lg/medium',
                                children: (0, j.Hg)({
                                    helpdeskArticle: T,
                                    referralsStatuses: g
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: a()(E.expandedProgressBarButtonContainer, { [E.expandedProgressBarButtonContainerLayout]: !t }),
                                children: (0, i.jsx)(c.gtL, {
                                    className: E.expandedProgressBarSelectFriendsCTA,
                                    color: o.Tt.CUSTOM,
                                    onClick: () => A({ analyticsLocations: N }),
                                    onlyShineOnHover: !0,
                                    children: (0, i.jsxs)('div', {
                                        className: E.expandedProgressBarSelectFriendsCTAInner,
                                        children: [
                                            (0, i.jsx)('img', {
                                                src: v,
                                                alt: '',
                                                className: E.expandedProgressBarSelectFriendsIcon
                                            }),
                                            S ? C.intl.string(C.t.SY9tyM) : C.intl.string(C.t.Lm2nFR)
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            D = g.redeemed === x.Q;
        return (0, i.jsx)(u.Gt, {
            value: N,
            children: (0, i.jsx)('div', {
                className: a()({
                    [E.containerWithGlowWithoutBanner]: D,
                    [E.containerWithoutGlow]: !D,
                    [E.containerWithMargins]: !t,
                    [E.containerWithGlowOnSettingsPage]: D && t
                }),
                children: (0, i.jsx)('div', {
                    ref: I,
                    className: a()({
                        [E.expandedProgressBarContainer]: !t,
                        [E.expandedProgressBarContainerSettingsPage]: t,
                        [E.allReferralsSentBorder]: D
                    }),
                    children: R
                })
            })
        });
    };
