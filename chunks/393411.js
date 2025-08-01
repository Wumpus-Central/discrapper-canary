(n.d(t, {
    R: () => z,
    Z: () => Y
}),
    n(415506));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(366939),
    m = n(100527),
    p = n(906732),
    g = n(975298),
    h = n(710845),
    f = n(963249),
    b = n(301766),
    x = n(594174),
    _ = n(509545),
    j = n(931331),
    C = n(754347),
    O = n(122289),
    E = n(74538),
    v = n(212895),
    S = n(296848),
    T = n(140465),
    N = n(695349),
    I = n(404380),
    y = n(879463),
    A = n(104494),
    P = n(382791),
    R = n(987997),
    D = n(45474),
    Z = n(474936),
    w = n(981631),
    k = n(388032),
    L = n(4856);
function B(e) {
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
function M(e, t) {
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
let U = new h.Z('SubscriptionHeader.tsx'),
    V = {
        page: w.ZY5.USER_SETTINGS,
        section: w.jXE.SETTINGS_PREMIUM,
        object: w.qAy.CARD
    },
    G = [w.O0b.PAUSED, w.O0b.PAUSE_PENDING, w.O0b.BILLING_RETRY];
function F(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: r, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(L.banner, a),
        children: [
            (0, i.jsx)('div', { className: L.bannerBackgroundImage }),
            (0, i.jsxs)('div', {
                className: L.detailsContainer,
                children: [
                    (0, i.jsx)('div', { className: L.image }),
                    (0, i.jsxs)('div', {
                        className: L.details,
                        children: [
                            (0, i.jsxs)('div', {
                                className: L.headerLabel,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(P.Cy, {
                                            text: k.intl.formatToPlainString(k.t.iiLbvr, { percent: o }),
                                            className: L.discountPill,
                                            colorOptions: P.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        })
                                ]
                            }),
                            n
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: L.buttons,
                children: r
            })
        ]
    });
}
function H(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: r, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(L.banner, a, L.repositioned),
        children: [
            (0, i.jsx)('div', { className: L.bannerBackgroundImage }),
            (0, i.jsx)('div', {
                className: L.detailsContainer,
                children: (0, i.jsx)('div', {
                    className: L.details,
                    children: (0, i.jsxs)('div', {
                        className: L.headerLabel,
                        children: [
                            (0, i.jsx)('div', { className: L.image }),
                            (0, i.jsxs)('div', {
                                className: L.headerColumnB,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(P.Cy, {
                                            text: k.intl.formatToPlainString(k.t.iiLbvr, { percent: o }),
                                            className: L.discountPill,
                                            colorOptions: P.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        }),
                                    n
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: L.buttons,
                children: r
            })
        ]
    });
}
function W() {
    return (0, i.jsxs)('div', {
        className: L.wordMark,
        children: [
            (0, i.jsx)(C.Z, {
                className: L.discordWordmark,
                'aria-label': k.intl.string(k.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: L.classicWordmark })
        ]
    });
}
function z() {
    let { analyticsLocations: e } = (0, p.ZP)(m.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(F, {
        wordMark: (0, i.jsx)(W, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: L.planInfo,
            children: k.intl.string(k.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(R.Z, {
            className: L.toolsButton,
            onClick: () =>
                (0, f.Z)({
                    subscriptionTier: Z.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: V
                }),
            children: k.intl.string(k.t['/ygMUV'])
        }),
        statusClasses: { [L.tier1]: !0 }
    });
}
let Y = function (e) {
    var t;
    let { subscription: r, renewalInvoicePreview: a, paymentSource: h, busy: P, analyticsLocation: z } = e,
        Y = 'subscription_header',
        { analyticsLocations: K } = (0, p.ZP)(m.Z.SUBSCRIPTION_HEADER),
        q = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        { fractionalState: X } = (0, g.Z)({ forceFetch: !1 }),
        J = X === Z.a$.FP_SUB_PAUSED,
        { enabled: Q } = (0, y.ZP)({ location: Y });
    (Z.pj.has(r.planId) && w.JwP.ALL_PAUSEABLE.has(r.status) && !J) || (Q = !1);
    let $ = (0, A.Ng)(),
        ee = null == $ || null == (t = $.discount) ? void 0 : t.amount,
        et = (0, T.t7)(),
        en = (0, T.lr)(),
        ei = (0, N.W)(),
        er = () => {
            (r.status === w.O0b.ACTIVE || r.status === w.O0b.PAST_DUE || r.status === w.O0b.PAUSED) && el(D.R.PAUSE_SELECT);
        },
        es = () => {
            (r.status === w.O0b.ACTIVE || r.status === w.O0b.PAST_DUE || r.status === w.O0b.PAUSE_PENDING || J) && el();
        },
        ea = () => {
            r.status === w.O0b.BILLING_RETRY && el(D.R.CONFIRM);
        },
        el = (e) => {
            (0, d.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e('17938'), n.e('86181')]).then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        M(B({}, n), {
                            premiumSubscription: r,
                            analyticsLocation: z,
                            analyticsLocations: K,
                            initialStep: e
                        })
                    );
            });
        },
        eo = () => {
            if (null != r && null != r.premiumPlanIdFromItems) {
                let e = _.Z.get(r.premiumPlanIdFromItems);
                if (null == e) return void U.info('Plan not fetched for plan id: '.concat(r.premiumPlanIdFromItems));
                let t = (0, v.DE)(e, null == h ? void 0 : h.id, !1),
                    n = t.length > 0 ? t[0] : r.currency,
                    i = !1;
                (1 === t.length && (null == h ? void 0 : h.id) === r.paymentSourceId && (0, v.tD)(e.id, n, null == h ? void 0 : h.id) && (i = !0),
                    i
                        ? u.O5(r, K)
                        : (0, f.Z)({
                              initialPlanId: r.premiumPlanIdFromItems,
                              analyticsLocations: K,
                              analyticsLocation: z,
                              analyticsObject: V,
                              subscription: r
                          }));
            }
        },
        ec = () => {
            if (!G.includes(r.status) || null == r.pauseEndsAt)
                return void (0, O.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: r.id,
                        status: r.status,
                        pauseEndsAt: r.pauseEndsAt
                    }
                });
            r.status === w.O0b.PAUSED
                ? (0, f.Z)({
                      initialPlanId: r.premiumPlanIdFromItems,
                      analyticsLocations: K,
                      analyticsLocation: z,
                      analyticsObject: V,
                      subscription: r,
                      skipConfirm: !0
                  })
                : u.v4(r, K);
        },
        ed = () => {
            r.status === w.O0b.PAUSED && el(D.R.PAUSE_SELECT);
        },
        eu = () => {
            el(D.R.WHAT_YOU_LOSE);
        },
        em = E.ZP.getPlanIdFromInvoice(r, a);
    if ((0, b.Q0)(em)) return null;
    let ep = E.ZP.getStatusFromInvoice(r, a),
        eg = E.ZP.getPremiumType(em),
        eh = {
            [L.tier0]: eg === Z.p9.TIER_0,
            [L.tier1]: eg === Z.p9.TIER_1,
            [L.tier2]: eg === Z.p9.TIER_2,
            [L.canceled]: ep === w.O0b.CANCELED,
            [L.pausePending]: ep === w.O0b.PAUSE_PENDING,
            [L.paused]: ep === w.O0b.PAUSED && !J,
            [L.failedPayment]: (0, E.zV)(ep)
        },
        ef = null;
    switch (eg) {
        case Z.p9.TIER_0:
            ef = (0, i.jsxs)('div', {
                className: L.wordMark,
                children: [
                    (0, i.jsx)(C.Z, {
                        className: L.discordWordmark,
                        'aria-label': k.intl.string(k.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: L.basicWordmark })
                ]
            });
            break;
        case Z.p9.TIER_1:
            ef = (0, i.jsx)(W, {});
            break;
        case Z.p9.TIER_2:
            ef = (0, i.jsx)(j.Z, {
                className: L.planName,
                'aria-label': k.intl.string(k.t.lpNrPj)
            });
    }
    let eb = G.includes(r.status) && !J ? H : F;
    return (0, i.jsx)(eb, {
        wordMark: ef,
        subscriptionInfo:
            (l()(null != a, 'Expected renewalInvoicePreview'),
            (0, i.jsx)('div', {
                className: L.planInfo,
                children: ei
                    ? k.intl.format(k.t['/SfHws'], { weeks: 1 })
                    : (0, E.qV)({
                          planId: em,
                          subscription: r,
                          renewalInvoicePreview: a,
                          hasDiscountApplied: et,
                          activeDiscountInfo: en,
                          hasFractionalPremiumWithSub: J
                      })
            })),
        buttons: (() => {
            let { status: e } = r;
            if (r.isPurchasedExternally) {
                let e = (0, E.JE)(r.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(d.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.zx, {
                        className: s()(L.toolsButton, L.externalButton),
                        size: c.zx.Sizes.SMALL,
                        look: c.iL.OUTLINED,
                        color: c.Tt.WHITE,
                        submitting: P,
                        children: k.intl.string(k.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = E.ZP.isSwitchingPlansDisabled(r) || (0, I.o)(Y, q, X),
                    t = E.ZP.getSwitchingPlansDisabledMessage(r);
                return (0, i.jsxs)('div', {
                    className: L.toolsButtons,
                    children: [
                        Q
                            ? (0, i.jsx)(c.zx, {
                                  className: L.toolsButton,
                                  size: c.zx.Sizes.SMALL,
                                  look: c.iL.LINK,
                                  color: c.Tt.WHITE,
                                  submitting: P,
                                  onClick: er,
                                  children: k.intl.string(k.t.eFlYVF)
                              })
                            : (0, i.jsx)(c.zx, {
                                  className: L.toolsButton,
                                  size: c.zx.Sizes.SMALL,
                                  look: c.iL.LINK,
                                  color: c.Tt.WHITE,
                                  submitting: P,
                                  onClick: es,
                                  children: k.intl.string(k.t['ETE/oK'])
                              }),
                        (0, i.jsx)(d.ua7, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(
                                    R.Z,
                                    M(B({}, t), {
                                        disabled: e,
                                        className: L.toolsButton,
                                        onClick: () => {
                                            (0, f.Z)({
                                                analyticsLocations: K,
                                                analyticsLocation: z,
                                                analyticsObject: V,
                                                subscription: r
                                            });
                                        },
                                        children: k.intl.string(k.t['dylp//'])
                                    })
                                )
                        })
                    ]
                });
            }
            if (E.ZP.isBaseSubscriptionCanceled(r))
                return (0, i.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: L.toolsButton,
                    children: (0, i.jsx)(d.zxk, {
                        variant: 'overlay-primary',
                        size: 'sm',
                        text: k.intl.string(k.t.iIvF29),
                        loading: P,
                        onClick: eo
                    })
                });
            switch (e) {
                case w.O0b.BILLING_RETRY:
                    return (0, i.jsx)(c.zx, {
                        className: L.billingRetryCancel,
                        size: c.zx.Sizes.SMALL,
                        color: c.Tt.CUSTOM,
                        submitting: P,
                        onClick: ea,
                        children: k.intl.string(k.t['ETE/oK'])
                    });
                case w.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: L.toolsButtons,
                        children: [
                            (0, i.jsx)(c.zx, {
                                className: L.toolsButton,
                                size: c.zx.Sizes.SMALL,
                                look: c.iL.LINK,
                                color: c.Tt.WHITE,
                                submitting: P,
                                onClick: es,
                                children: k.intl.string(k.t.cM1H0N)
                            }),
                            (0, i.jsx)('div', {
                                'data-button-hoisted-classname-wrapper': !0,
                                className: L.toolsButton,
                                children: (0, i.jsx)(d.zxk, {
                                    variant: 'overlay-primary',
                                    size: 'sm',
                                    text: k.intl.string(k.t.TgV5QU),
                                    loading: P,
                                    onClick: ec
                                })
                            })
                        ]
                    });
                case w.O0b.PAUSED:
                    if (J) return t();
                    let { durations: n } = (0, S.AT)(r);
                    return (0, i.jsxs)('div', {
                        className: L.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(c.zx, {
                                      className: L.linkButton,
                                      size: c.zx.Sizes.SMALL,
                                      look: c.iL.LINK,
                                      color: c.Tt.WHITE,
                                      submitting: P,
                                      onClick: ed,
                                      children: k.intl.string(k.t.jNHWt7)
                                  })
                                : (0, i.jsx)(c.zx, {
                                      className: L.linkButton,
                                      size: c.zx.Sizes.SMALL,
                                      look: c.iL.LINK,
                                      color: c.Tt.WHITE,
                                      submitting: P,
                                      onClick: eu,
                                      children: k.intl.string(k.t.cM1H0N)
                                  }),
                            (0, i.jsx)('div', {
                                'data-button-hoisted-classname-wrapper': !0,
                                className: L.toolsButton,
                                children: (0, i.jsx)(d.zxk, {
                                    variant: 'overlay-primary',
                                    size: 'sm',
                                    text: k.intl.string(k.t.zpi5pq),
                                    loading: P,
                                    onClick: ec
                                })
                            })
                        ]
                    });
                case w.O0b.ACTIVE:
                case w.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: eh,
        shouldUseDiscountMarketing: et,
        discountAmount: ee
    });
};
