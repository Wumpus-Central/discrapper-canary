n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(442837),
    a = n(481060),
    s = n(230711),
    c = n(2052),
    u = n(906732),
    E = n(963249),
    d = n(594174),
    _ = n(626135),
    N = n(74538),
    I = n(163684),
    T = n(748770),
    O = n(474936),
    S = n(981631),
    P = n(388032),
    p = n(895513);
function A() {
    let e = (0, o.e7)([d.default], () => N.ZP.isPremiumExactly(d.default.getCurrentUser(), O.p9.TIER_2)),
        { enabled: t, getNitroCTA: n } = I.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: e
            }
        ),
        { location: A } = (0, c.O)(),
        { analyticsLocations: R } = (0, u.ZP)(),
        C = i.useCallback(() => {
            var e, t;
            (0, E.Z)({
                subscriptionTier: N.ZP.getSkuIdForPremiumType(O.p9.TIER_2),
                analyticsLocations: R,
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
                    })({}, A)),
                    (t = t =
                        {
                            object: S.qAy.BUTTON_CTA,
                            objectType: S.Qqv.TIER_2
                        }),
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
                    e)
            });
        }, [R, A]),
        f = i.useCallback(() => {
            s.Z.open(S.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
        }, []),
        D = i.useCallback(() => {
            _.default.track(S.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? C() : f();
        }, [n, C, f]);
    return (0, r.jsxs)(a.qXd, {
        color: a.DM8.PREMIUM_TIER_2,
        children: [
            (0, r.jsx)(a.RyX, {
                noticeType: S.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    T.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, r.jsx)(a.SrA, {
                size: 'md',
                color: 'currentColor',
                className: p.premiumIcon
            }),
            t
                ? n
                    ? (0, r.jsxs)(l.xv, {
                          variant: 'text-sm/normal',
                          className: p.text,
                          children: [P.NW.string(P.t['5JMiOj']), ' ', P.NW.format(P.t.fjSvsL, { onClick: f })]
                      })
                    : P.NW.string(P.t['B3a/cH'])
                : P.NW.string(P.t['Pzh+Gx']),
            (0, r.jsx)(a.NoS, {
                noticeType: S.kVF.OUTBOUND_PROMOTION,
                onClick: D,
                children: n ? P.NW.string(P.t.pj0XBA) : P.NW.string(P.t.jVcuVV)
            })
        ]
    });
}
