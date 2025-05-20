n.d(t, { Z: () => L });
var l = n(255367),
    r = n(73800),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    c = n(780384),
    a = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(600164),
    E = n(963249),
    P = n(639119),
    m = n(165583),
    h = n(263954),
    _ = n(706454),
    S = n(709586),
    y = n(626135),
    f = n(930153),
    N = n(74538),
    I = n(937615),
    g = n(981631),
    O = n(474936),
    b = n(388032),
    x = n(231788);
function M(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, o.e7)([_.default], () => _.default.locale);
    return (0, l.jsxs)('div', {
        className: x.perksList,
        children: [
            (0, l.jsx)(h.Z, {
                icon: S.Z,
                iconClassName: x.perkIconGuild,
                description: b.intl.formatToPlainString(b.t.sQBgs7, { numFreeGuildSubscriptions: O.cb })
            }),
            (0, l.jsx)(h.Z, {
                icon: S.Z,
                iconClassName: x.perkIconGuild,
                description: b.intl.formatToPlainString(b.t['1A6vXl'], { percent: (0, f.T3)(n, O.Rr / 100) })
            }),
            t
                ? (0, l.jsx)(h.Z, {
                      icon: a.EO4,
                      iconClassName: x.perkIconChatPerks,
                      description: b.intl.string(b.t.Z9b2x8)
                  })
                : null,
            (0, l.jsx)(h.Z, {
                icon: a.hGI,
                iconClassName: x.perkIconStream,
                description: b.intl.string(b.t['8dqG5O'])
            }),
            (0, l.jsx)(h.Z, {
                icon: a.rG2,
                iconClassName: x.perkIconUpload,
                description: b.intl.string(b.t.cBorIy)
            })
        ]
    });
}
function L(e) {
    var t;
    let { premiumSubscriptionPlan: n, onClose: i, onBack: o, onSkip: h, onSubscriptionConfirmation: _, analyticsLocation: S, analyticsSourceLocation: f, priceOptions: L } = e,
        { analyticsLocations: k, sourceAnalyticsLocations: T } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: j } = (0, a.TCT)(),
        C = (0, c.ap)(j) ? a.zxk.Colors.PRIMARY : a.zxk.Colors.WHITE,
        A = null == n || null == n.premiumSubscriptionType,
        R = N.ZP.getPrice(O.Xh.PREMIUM_MONTH_TIER_2, !1, !1, L),
        D = (0, I.T4)(R.amount, R.currency),
        Z = (0, P.N)(),
        v = null == Z ? void 0 : Z.trial_id,
        w = (null == Z || null == (t = Z.subscription_trial) ? void 0 : t.sku_id) === O.Si.TIER_2;
    return (
        r.useEffect(() => {
            y.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                type: O.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: T
            });
        }, [T]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(a.hzk, {
                    className: x.content,
                    children: [
                        (0, l.jsx)(a.olH, {
                            onClick: i,
                            className: x.closeButton
                        }),
                        w && (0, l.jsx)(m.dz, { className: x.premiumTrialBadge }),
                        (0, l.jsx)('div', { className: s()(x.upsellImage, { [x.upsellImageWithTrialOffer]: w }) }),
                        (0, l.jsx)('div', {
                            className: x.bodyText,
                            children: null != v ? b.intl.string(b.t.AoSzEh) : b.intl.format(b.t['7vePZW'], { monthlyPrice: D })
                        }),
                        (0, l.jsx)(M, { shouldUpsellFromNoneTier: A })
                    ]
                }),
                (0, l.jsxs)(a.mzw, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, l.jsxs)('div', {
                            className: x.footerRight,
                            children: [
                                (0, l.jsx)(a.zxk, {
                                    look: a.zxk.Looks.LINK,
                                    color: C,
                                    onClick: h,
                                    children: b.intl.string(b.t['SI/adn'])
                                }),
                                (0, l.jsx)(a.zxk, {
                                    color: a.zxk.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        var e, t;
                                        i(),
                                            (0, E.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: O.Si.TIER_2,
                                                analyticsLocations: k,
                                                analyticsObject:
                                                    ((e = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                l = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (t) {
                                                                    var l;
                                                                    (l = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = l);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, S)),
                                                    (t = t = { section: g.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var l = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, l);
                                                              }
                                                              return n;
                                                          })(Object(t)).forEach(function (n) {
                                                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                          }),
                                                    e),
                                                analyticsSourceLocation: f,
                                                onSubscriptionConfirmation: _,
                                                trialId: v
                                            });
                                    },
                                    children: null != v ? b.intl.string(b.t['Gd/XHB']) : b.intl.string(b.t.p2moio)
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: x.backStep,
                            children: (0, l.jsx)(a.zxk, {
                                color: C,
                                look: a.zxk.Looks.LINK,
                                size: a.zxk.Sizes.NONE,
                                onClick: () => o(),
                                children: b.intl.string(b.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
