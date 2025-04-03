n.d(t, { Z: () => L });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    c = n(780384),
    a = n(481060),
    u = n(100527),
    p = n(906732),
    d = n(600164),
    E = n(963249),
    P = n(639119),
    m = n(165583),
    h = n(263954),
    _ = n(706454),
    N = n(709586),
    S = n(626135),
    y = n(930153),
    f = n(74538),
    I = n(937615),
    g = n(981631),
    b = n(474936),
    O = n(388032),
    x = n(231788);
function M(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, o.e7)([_.default], () => _.default.locale);
    return (0, r.jsxs)('div', {
        className: x.perksList,
        children: [
            (0, r.jsx)(h.Z, {
                icon: N.Z,
                iconClassName: x.perkIconGuild,
                description: O.NW.formatToPlainString(O.t.sQBgs7, { numFreeGuildSubscriptions: b.cb })
            }),
            (0, r.jsx)(h.Z, {
                icon: N.Z,
                iconClassName: x.perkIconGuild,
                description: O.NW.formatToPlainString(O.t['1A6vXl'], { percent: (0, y.T3)(n, b.Rr / 100) })
            }),
            t
                ? (0, r.jsx)(h.Z, {
                      icon: a.EO4,
                      iconClassName: x.perkIconChatPerks,
                      description: O.NW.string(O.t.Z9b2x8)
                  })
                : null,
            (0, r.jsx)(h.Z, {
                icon: a.hGI,
                iconClassName: x.perkIconStream,
                description: O.NW.string(O.t['8dqG5O'])
            }),
            (0, r.jsx)(h.Z, {
                icon: a.rG2,
                iconClassName: x.perkIconUpload,
                description: O.NW.string(O.t.cBorIy)
            })
        ]
    });
}
function L(e) {
    var t;
    let { premiumSubscriptionPlan: n, onClose: i, onBack: o, onSkip: h, onSubscriptionConfirmation: _, analyticsLocation: N, analyticsSourceLocation: y, priceOptions: L } = e,
        { analyticsLocations: k, sourceAnalyticsLocations: T } = (0, p.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: j } = (0, a.TCT)(),
        C = (0, c.ap)(j) ? a.zxk.Colors.PRIMARY : a.zxk.Colors.WHITE,
        A = null == n || null == n.premiumSubscriptionType,
        R = f.ZP.getPrice(b.Xh.PREMIUM_MONTH_TIER_2, !1, !1, L),
        D = (0, I.T4)(R.amount, R.currency),
        Z = (0, P.N)(),
        v = null == Z ? void 0 : Z.trial_id,
        w = (null == Z || null == (t = Z.subscription_trial) ? void 0 : t.sku_id) === b.Si.TIER_2;
    return (
        l.useEffect(() => {
            S.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                type: b.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: T
            });
        }, [T]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(a.hzk, {
                    className: x.content,
                    children: [
                        (0, r.jsx)(a.olH, {
                            onClick: i,
                            className: x.closeButton
                        }),
                        w && (0, r.jsx)(m.dz, { className: x.premiumTrialBadge }),
                        (0, r.jsx)('div', { className: s()(x.upsellImage, { [x.upsellImageWithTrialOffer]: w }) }),
                        (0, r.jsx)('div', {
                            className: x.bodyText,
                            children: null != v ? O.NW.string(O.t.AoSzEh) : O.NW.format(O.t['7vePZW'], { monthlyPrice: D })
                        }),
                        (0, r.jsx)(M, { shouldUpsellFromNoneTier: A })
                    ]
                }),
                (0, r.jsxs)(a.mzw, {
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.END,
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.footerRight,
                            children: [
                                (0, r.jsx)(a.zxk, {
                                    look: a.zxk.Looks.LINK,
                                    color: C,
                                    onClick: h,
                                    children: O.NW.string(O.t['SI/adn'])
                                }),
                                (0, r.jsx)(a.zxk, {
                                    color: a.zxk.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        var e, t;
                                        i(),
                                            (0, E.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: b.Si.TIER_2,
                                                analyticsLocations: k,
                                                analyticsObject:
                                                    ((e = (function (e) {
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
                                                    })({}, N)),
                                                    (t = t = { section: g.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
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
                                                    e),
                                                analyticsSourceLocation: y,
                                                onSubscriptionConfirmation: _,
                                                trialId: v
                                            });
                                    },
                                    children: null != v ? O.NW.string(O.t['Gd/XHB']) : O.NW.string(O.t.p2moio)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: x.backStep,
                            children: (0, r.jsx)(a.zxk, {
                                color: C,
                                look: a.zxk.Looks.LINK,
                                size: a.zxk.Sizes.NONE,
                                onClick: () => o(),
                                children: O.NW.string(O.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
