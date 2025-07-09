n.d(t, { Z: () => T });
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    o = n(442837),
    a = n(780384),
    c = n(755721),
    u = n(481060),
    p = n(100527),
    d = n(906732),
    E = n(600164),
    m = n(963249),
    P = n(639119),
    h = n(165583),
    _ = n(263954),
    S = n(706454),
    y = n(709586),
    f = n(626135),
    I = n(930153),
    N = n(74538),
    g = n(937615),
    O = n(981631),
    b = n(474936),
    x = n(388032),
    M = n(231788);
function L(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, o.e7)([S.default], () => S.default.locale);
    return (0, l.jsxs)('div', {
        className: M.perksList,
        children: [
            (0, l.jsx)(_.Z, {
                icon: y.Z,
                iconClassName: M.perkIconGuild,
                description: x.intl.formatToPlainString(x.t.sQBgs7, { numFreeGuildSubscriptions: b.cb })
            }),
            (0, l.jsx)(_.Z, {
                icon: y.Z,
                iconClassName: M.perkIconGuild,
                description: x.intl.formatToPlainString(x.t['1A6vXl'], { percent: (0, I.T3)(n, b.Rr / 100) })
            }),
            t
                ? (0, l.jsx)(_.Z, {
                      icon: u.EO4,
                      iconClassName: M.perkIconChatPerks,
                      description: x.intl.string(x.t.Z9b2x8)
                  })
                : null,
            (0, l.jsx)(_.Z, {
                icon: u.hGI,
                iconClassName: M.perkIconStream,
                description: x.intl.string(x.t['8dqG5O'])
            }),
            (0, l.jsx)(_.Z, {
                icon: u.rG2,
                iconClassName: M.perkIconUpload,
                description: x.intl.string(x.t.cBorIy)
            })
        ]
    });
}
function T(e) {
    var t;
    let { premiumSubscriptionPlan: n, onClose: r, onBack: o, onSkip: _, onSubscriptionConfirmation: S, analyticsLocation: y, analyticsSourceLocation: I, priceOptions: T } = e,
        { analyticsLocations: j, sourceAnalyticsLocations: C } = (0, d.ZP)(p.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, u.TCT)(),
        k = (0, a.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        R = null == n || null == n.premiumSubscriptionType,
        v = N.ZP.getPrice(b.Xh.PREMIUM_MONTH_TIER_2, !1, !1, T),
        D = (0, g.T4)(v.amount, v.currency),
        Z = (0, P.N)(),
        w = null == Z ? void 0 : Z.trial_id,
        U = (null == Z || null == (t = Z.subscription_trial) ? void 0 : t.sku_id) === b.Si.TIER_2;
    return (
        i.useEffect(() => {
            f.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                type: b.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: C
            });
        }, [C]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(u.hzk, {
                    className: M.content,
                    children: [
                        (0, l.jsx)(u.olH, {
                            onClick: r,
                            className: M.closeButton
                        }),
                        U && (0, l.jsx)(h.dz, { className: M.premiumTrialBadge }),
                        (0, l.jsx)('div', { className: s()(M.upsellImage, { [M.upsellImageWithTrialOffer]: U }) }),
                        (0, l.jsx)('div', {
                            className: M.bodyText,
                            children: null != w ? x.intl.string(x.t.AoSzEh) : x.intl.format(x.t['7vePZW'], { monthlyPrice: D })
                        }),
                        (0, l.jsx)(L, { shouldUpsellFromNoneTier: R })
                    ]
                }),
                (0, l.jsxs)(u.mzw, {
                    align: E.Z.Align.CENTER,
                    justify: E.Z.Justify.END,
                    children: [
                        (0, l.jsxs)('div', {
                            className: M.footerRight,
                            children: [
                                (0, l.jsx)(c.zx, {
                                    look: c.zx.Looks.LINK,
                                    color: k,
                                    onClick: _,
                                    children: x.intl.string(x.t['SI/adn'])
                                }),
                                (0, l.jsx)(u.zxk, {
                                    variant: 'active',
                                    text: null != w ? x.intl.string(x.t['Gd/XHB']) : x.intl.string(x.t.p2moio),
                                    type: 'submit',
                                    onClick: () => {
                                        var e, t;
                                        (r(),
                                            (0, m.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: b.Si.TIER_2,
                                                analyticsLocations: j,
                                                analyticsObject:
                                                    ((e = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                l = Object.keys(n);
                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (t) {
                                                                    var l;
                                                                    ((l = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = l));
                                                                }));
                                                        }
                                                        return e;
                                                    })({}, y)),
                                                    (t = t = { section: O.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
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
                                                analyticsSourceLocation: I,
                                                onSubscriptionConfirmation: S,
                                                trialId: w
                                            }));
                                    }
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: M.backStep,
                            children: (0, l.jsx)(c.zx, {
                                color: k,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
                                onClick: () => o(),
                                children: x.intl.string(x.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
