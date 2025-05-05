n.d(t, {
    U: () => R,
    Z: () => k
});
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    p = n(493683),
    m = n(529103),
    f = n(700582),
    h = n(906732),
    g = n(213609),
    _ = n(541716),
    b = n(28546),
    x = n(963249),
    y = n(703656),
    E = n(594174),
    v = n(626135),
    O = n(51144),
    j = n(479446),
    C = n(795448),
    S = n(441623),
    I = n(317271),
    N = n(474936),
    T = n(981631),
    P = n(182294),
    A = n(957825),
    w = n(388032),
    Z = n(587862),
    R = (((r = {}).SYSTEM_MESSAGE = 'system_message'), (r.COACHMARK = 'coachmark'), r);
function k(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: r, onMouseEnter: a, onMouseLeave: R, popoutPosition: k, analyticsPage: D, analyticsSection: L, glow: M, giftIntentSecondaryAction: U } = e,
        F = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: B } = (0, h.ZP)(),
        G = (0, c.e7)([S.Z], () => S.Z.getFriendAnniversaryYears(r.id));
    l.useEffect(() => {
        (0, g.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: S.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let H = () => (t === N.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t['L2s/Nz'], { numberOfYears: G }) : (0, j.Ou)(t)),
        V = 'coachmark' === n,
        z = V ? Z.innerContentCoachmark : Z.innerContent,
        W = V ? Z.recipientUserAvatarCoachmark : Z.recipientUserAvatar,
        K = V ? Z.currentUserAvatarCoachmark : Z.currentUserAvatar,
        Y = V ? Z.subHeaderTextCoachmark : Z.subHeaderText,
        X = V ? d.zxk.Colors.BRAND : d.zxk.Colors.WHITE,
        q = V ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        Q = V ? Z.buttonTextPrimaryCoachmark : Z.buttonTextPrimary,
        J = V ? Z.buttonSecondaryCoachmark : Z.buttonSecondary,
        $ = V ? Z.buttonTextSecondaryCoachmark : Z.buttonTextSecondary;
    return (0, i.jsx)('div', {
        className: o()(Z.content, {
            [Z.outerGlow]: M,
            [Z.contentCoachmark]: V
        }),
        onMouseEnter: a,
        onMouseLeave: R,
        children: (0, i.jsxs)('div', {
            className: o()(z, { [Z.innerGlow]: M }),
            children: [
                (0, i.jsxs)('div', {
                    className: Z.subContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.avatars,
                            children: [
                                (0, i.jsx)(f.Z, {
                                    className: W,
                                    user: r,
                                    'aria-label': r.username,
                                    size: P.EF.SIZE_56
                                }),
                                null != F &&
                                    (0, i.jsx)(f.Z, {
                                        className: K,
                                        user: F,
                                        'aria-label': r.username,
                                        size: P.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.textContainer,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: V ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: t === N.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.BWJvAA, { friendUserName: O.ZP.getName(r) }) : (0, j.Ou)(t)
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: Y,
                                    variant: 'text-sm/normal',
                                    children: t === N.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.S3fdq6, { numberOfYears: G }) : (0, j.Ou)(t)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Z.buttonContainer,
                    children: [
                        null != U &&
                            (0, i.jsx)(d.zxk, {
                                className: o()(Z.button, J),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        v.default.track(T.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: U
                                        }),
                                        U === N.X2.VIEW_ALL
                                            ? ((0, y.uL)(T.Z5c.FRIENDS), m.Z.setSection(T.pJs.ALL))
                                            : U === N.X2.SEND_MESSAGE &&
                                              ((0, C.PV)(r.id),
                                              p.Z.openPrivateChannel({ recipientIds: r.id }).then(() => {
                                                  setTimeout(() => {
                                                      (0, b.PG)(A.X1.GIF, _.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, b.ql)(w.intl.string(w.t.jrtJi4), !0);
                                                          }, 50);
                                                  }, 100);
                                              }));
                                },
                                size: d.zxk.Sizes.MEDIUM,
                                color: d.zxk.Colors.CUSTOM,
                                look: d.zxk.Looks.OUTLINED,
                                children: (0, i.jsx)('div', {
                                    className: Z.buttonContentContainer,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(Z.buttonText, $),
                                        children: (() => {
                                            switch (U) {
                                                case N.X2.VIEW_ALL:
                                                    return w.intl.string(w.t.WkxniI);
                                                case N.X2.SEND_MESSAGE:
                                                    return w.intl.string(w.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, i.jsx)(d.zxk, {
                            className: Z.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let i = (0, I.F)(t);
                                (0, x.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: r,
                                    analyticsLocation: 'system_message' === n ? i.chat : i.actionButtonCoachmark,
                                    analyticsLocations: B,
                                    analyticsObject: {
                                        page: D,
                                        section: L,
                                        object: T.qAy.BUTTON_CTA,
                                        objectType: T.Qqv.GIFT
                                    },
                                    giftMessage: H()
                                });
                            },
                            size: d.zxk.Sizes.MEDIUM,
                            color: X,
                            children: (0, i.jsxs)('div', {
                                className: Z.buttonContentContainer,
                                children: [
                                    (0, i.jsx)(d.OgN, {
                                        color: q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(Z.buttonText, Q),
                                        children: w.intl.string(w.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != k &&
                    (0, i.jsx)('div', {
                        className: o()(Z.connector, {
                            [Z.leftPopoutConnector]: 'left' === k,
                            [Z.rightPopoutConnector]: 'right' === k
                        })
                    })
            ]
        })
    });
}
