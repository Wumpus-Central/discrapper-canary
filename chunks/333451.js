t.d(n, { Z: () => C });
var r = t(200651),
    l = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(442837),
    a = t(780384),
    c = t(481060),
    u = t(100527),
    p = t(906732),
    d = t(600164),
    _ = t(963249),
    m = t(639119),
    S = t(165583),
    f = t(263954),
    E = t(706454),
    b = t(709586),
    h = t(626135),
    P = t(930153),
    g = t(74538),
    I = t(937615),
    x = t(981631),
    N = t(474936),
    y = t(388032),
    T = t(88619);
function k(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, s.e7)([E.default], () => E.default.locale);
    return (0, r.jsxs)('div', {
        className: T.perksList,
        children: [
            (0, r.jsx)(f.Z, {
                icon: b.Z,
                iconClassName: T.perkIconGuild,
                description: y.NW.formatToPlainString(y.t.sQBgs7, { numFreeGuildSubscriptions: N.cb })
            }),
            (0, r.jsx)(f.Z, {
                icon: b.Z,
                iconClassName: T.perkIconGuild,
                description: y.NW.formatToPlainString(y.t['1A6vXl'], { percent: (0, P.T3)(t, N.Rr / 100) })
            }),
            n
                ? (0, r.jsx)(f.Z, {
                      icon: c.EO4,
                      iconClassName: T.perkIconChatPerks,
                      description: y.NW.string(y.t.Z9b2x8)
                  })
                : null,
            (0, r.jsx)(f.Z, {
                icon: c.hGI,
                iconClassName: T.perkIconStream,
                description: y.NW.string(y.t['8dqG5O'])
            }),
            (0, r.jsx)(f.Z, {
                icon: c.rG2,
                iconClassName: T.perkIconUpload,
                description: y.NW.string(y.t.cBorIy)
            })
        ]
    });
}
function C(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: i, onBack: s, onSkip: f, onSubscriptionConfirmation: E, analyticsLocation: b, analyticsSourceLocation: P, priceOptions: C } = e,
        { analyticsLocations: O, sourceAnalyticsLocations: M } = (0, p.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: L } = (0, c.TCT)(),
        j = (0, a.ap)(L) ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
        v = null == t || null == t.premiumSubscriptionType,
        R = g.ZP.getPrice(N.Xh.PREMIUM_MONTH_TIER_2, !1, !1, C),
        A = (0, I.T4)(R.amount, R.currency),
        D = (0, m.N)(),
        Z = null == D ? void 0 : D.trial_id,
        w = (null == D ? void 0 : null === (n = D.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === N.Si.TIER_2;
    return (
        l.useEffect(() => {
            h.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: M
            });
        }, [M]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(c.hzk, {
                    className: T.content,
                    children: [
                        (0, r.jsx)(c.olH, {
                            onClick: i,
                            className: T.closeButton
                        }),
                        w && (0, r.jsx)(S.dz, { className: T.premiumTrialBadge }),
                        (0, r.jsx)('div', { className: o()(T.upsellImage, { [T.upsellImageWithTrialOffer]: w }) }),
                        (0, r.jsx)('div', {
                            className: T.bodyText,
                            children: null != Z ? y.NW.string(y.t.AoSzEh) : y.NW.format(y.t['7vePZW'], { monthlyPrice: A })
                        }),
                        (0, r.jsx)(k, { shouldUpsellFromNoneTier: v })
                    ]
                }),
                (0, r.jsxs)(c.mzw, {
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.END,
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.footerRight,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    look: c.zxk.Looks.LINK,
                                    color: j,
                                    onClick: f,
                                    children: y.NW.string(y.t['SI/adn'])
                                }),
                                (0, r.jsx)(c.zxk, {
                                    color: c.zxk.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        var e, n;
                                        i(),
                                            (0, _.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: N.Si.TIER_2,
                                                analyticsLocations: O,
                                                analyticsObject:
                                                    ((e = (function (e) {
                                                        for (var n = 1; n < arguments.length; n++) {
                                                            var t = null != arguments[n] ? arguments[n] : {},
                                                                r = Object.keys(t);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                    })
                                                                )),
                                                                r.forEach(function (n) {
                                                                    var r;
                                                                    (r = t[n]),
                                                                        n in e
                                                                            ? Object.defineProperty(e, n, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[n] = r);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, b)),
                                                    (n = n = { section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                        : (function (e, n) {
                                                              var t = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  t.push.apply(t, r);
                                                              }
                                                              return t;
                                                          })(Object(n)).forEach(function (t) {
                                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                          }),
                                                    e),
                                                analyticsSourceLocation: P,
                                                onSubscriptionConfirmation: E,
                                                trialId: Z
                                            });
                                    },
                                    children: null != Z ? y.NW.string(y.t['Gd/XHB']) : y.NW.string(y.t.p2moio)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: T.backStep,
                            children: (0, r.jsx)(c.zxk, {
                                color: j,
                                look: c.zxk.Looks.LINK,
                                size: c.zxk.Sizes.NONE,
                                onClick: () => s(),
                                children: y.NW.string(y.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
