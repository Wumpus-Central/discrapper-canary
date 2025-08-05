n.d(t, {
    U: () => L,
    Z: () => x
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(692547),
    u = n(755721),
    d = n(481060),
    f = n(493683),
    _ = n(529103),
    p = n(700582),
    h = n(906732),
    m = n(213609),
    g = n(541716),
    E = n(28546),
    b = n(963249),
    y = n(594174),
    O = n(626135),
    v = n(51144),
    I = n(479446),
    T = n(795448),
    S = n(441623),
    A = n(317271),
    N = n(474936),
    C = n(981631),
    w = n(182294),
    R = n(957825),
    P = n(388032),
    D = n(587862),
    L = (function (e) {
        return ((e.SYSTEM_MESSAGE = 'system_message'), (e.COACHMARK = 'coachmark'), e);
    })({});
function x(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: a, onMouseEnter: L, onMouseLeave: x, popoutPosition: k, analyticsPage: j, analyticsSection: M, glow: U, giftIntentSecondaryAction: G } = e,
        B = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        { analyticsLocations: Z } = (0, h.ZP)(),
        F = (0, l.e7)([S.Z], () => S.Z.getFriendAnniversaryYears(a.id));
    i.useEffect(() => {
        (0, m.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: S.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let V = () => (t === N.hX.FRIEND_ANNIVERSARY ? P.intl.formatToPlainString(P.t.BWJvAA, { friendUserName: v.ZP.getName(a) }) : (0, I.Ou)(t)),
        H = () => (t === N.hX.FRIEND_ANNIVERSARY ? P.intl.formatToPlainString(P.t.S3fdq6, { numberOfYears: F }) : (0, I.Ou)(t)),
        Y = () => {
            switch (G) {
                case N.X2.VIEW_ALL:
                    return P.intl.string(P.t.WkxniI);
                case N.X2.SEND_MESSAGE:
                    return P.intl.string(P.t.I61IsL);
                default:
                    return;
            }
        },
        W = () => (t === N.hX.FRIEND_ANNIVERSARY ? P.intl.formatToPlainString(P.t['L2s/Nz'], { numberOfYears: F }) : (0, I.Ou)(t)),
        K = (e) => {
            e.stopPropagation();
            let r = (0, A.F)(t);
            (0, b.Z)({
                isGift: !0,
                initialPlanId: null,
                giftRecipient: a,
                analyticsLocation: 'system_message' === n ? r.chat : r.actionButtonCoachmark,
                analyticsLocations: Z,
                analyticsObject: {
                    page: j,
                    section: M,
                    object: C.qAy.BUTTON_CTA,
                    objectType: C.Qqv.GIFT
                },
                giftMessage: W()
            });
        },
        z = (e) => {
            (e.stopPropagation(),
                O.default.track(C.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                    gift_intent_type: t,
                    cta_type: G
                }),
                G === N.X2.VIEW_ALL
                    ? _.Z.transitionToSection(C.pJs.ALL, { explicit: !0 })
                    : G === N.X2.SEND_MESSAGE &&
                      ((0, T.PV)(a.id),
                      f.Z.openPrivateChannel({ recipientIds: a.id }).then(() => {
                          setTimeout(() => {
                              ((0, E.PG)(R.X1.GIF, g.Ie.NORMAL),
                                  setTimeout(() => {
                                      (0, E.ql)(P.intl.string(P.t.jrtJi4), !0);
                                  }, 50));
                          }, 100);
                      })));
        },
        q = 'coachmark' === n,
        $ = q ? D.innerContentCoachmark : D.innerContent,
        X = q ? D.recipientUserAvatarCoachmark : D.recipientUserAvatar,
        Q = q ? D.currentUserAvatarCoachmark : D.currentUserAvatar,
        J = q ? 'header-primary' : 'always-white',
        ee = q ? D.subHeaderTextCoachmark : D.subHeaderText,
        et = q ? u.zx.Colors.BRAND : u.zx.Colors.WHITE,
        en = q ? c.Z.colors.WHITE : c.Z.colors.BG_BRAND,
        er = q ? D.buttonTextPrimaryCoachmark : D.buttonTextPrimary,
        ei = q ? D.buttonSecondaryCoachmark : D.buttonSecondary,
        ea = q ? D.buttonTextSecondaryCoachmark : D.buttonTextSecondary;
    return (0, r.jsx)('div', {
        className: o()(D.content, {
            [D.outerGlow]: U,
            [D.contentCoachmark]: q
        }),
        onMouseEnter: L,
        onMouseLeave: x,
        children: (0, r.jsxs)('div', {
            className: o()($, { [D.innerGlow]: U }),
            children: [
                (0, r.jsxs)('div', {
                    className: D.subContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: D.avatars,
                            children: [
                                (0, r.jsx)(p.Z, {
                                    className: X,
                                    user: a,
                                    'aria-label': a.username,
                                    size: w.EF.SIZE_56
                                }),
                                null != B &&
                                    (0, r.jsx)(p.Z, {
                                        className: Q,
                                        user: B,
                                        'aria-label': a.username,
                                        size: w.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: D.textContainer,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: J,
                                    lineClamp: 3,
                                    children: V()
                                }),
                                (0, r.jsx)(d.Text, {
                                    className: ee,
                                    variant: 'text-sm/normal',
                                    children: H()
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: D.buttonContainer,
                    children: [
                        null != G &&
                            (0, r.jsx)(u.zx, {
                                className: o()(D.button, ei),
                                onClick: z,
                                size: u.zx.Sizes.MEDIUM,
                                color: u.zx.Colors.CUSTOM,
                                look: u.zx.Looks.OUTLINED,
                                children: (0, r.jsx)('div', {
                                    className: D.buttonContentContainer,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(D.buttonText, ea),
                                        children: Y()
                                    })
                                })
                            }),
                        (0, r.jsx)(u.zx, {
                            className: D.button,
                            onClick: K,
                            size: u.zx.Sizes.MEDIUM,
                            color: et,
                            children: (0, r.jsxs)('div', {
                                className: D.buttonContentContainer,
                                children: [
                                    (0, r.jsx)(d.OgN, {
                                        color: en,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(D.buttonText, er),
                                        children: P.intl.string(P.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != k &&
                    (0, r.jsx)('div', {
                        className: o()(D.connector, {
                            [D.leftPopoutConnector]: 'left' === k,
                            [D.rightPopoutConnector]: 'right' === k
                        })
                    })
            ]
        })
    });
}
