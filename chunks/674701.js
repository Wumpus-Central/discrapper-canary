n.d(t, {
    U: () => R,
    Z: () => L
});
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    c = n(442837),
    u = n(692547),
    d = n(755721),
    p = n(481060),
    m = n(493683),
    f = n(529103),
    g = n(700582),
    _ = n(906732),
    h = n(213609),
    b = n(541716),
    E = n(28546),
    C = n(963249),
    x = n(594174),
    v = n(626135),
    O = n(51144),
    y = n(479446),
    j = n(795448),
    I = n(441623),
    S = n(317271),
    T = n(474936),
    N = n(981631),
    P = n(182294),
    A = n(957825),
    w = n(388032),
    Z = n(587862),
    R = (((r = {}).SYSTEM_MESSAGE = 'system_message'), (r.COACHMARK = 'coachmark'), r);
function L(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: r, onMouseEnter: a, onMouseLeave: R, popoutPosition: L, analyticsPage: D, analyticsSection: k, glow: M, giftIntentSecondaryAction: U } = e,
        F = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: B } = (0, _.ZP)(),
        G = (0, c.e7)([I.Z], () => I.Z.getFriendAnniversaryYears(r.id));
    l.useEffect(() => {
        (0, h.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: I.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let H = () => (t === T.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t['L2s/Nz'], { numberOfYears: G }) : (0, y.Ou)(t)),
        V = 'coachmark' === n,
        z = V ? Z.innerContentCoachmark : Z.innerContent,
        W = V ? Z.recipientUserAvatarCoachmark : Z.recipientUserAvatar,
        K = V ? Z.currentUserAvatarCoachmark : Z.currentUserAvatar,
        Y = V ? Z.subHeaderTextCoachmark : Z.subHeaderText,
        X = V ? d.zx.Colors.BRAND : d.zx.Colors.WHITE,
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
                                (0, i.jsx)(g.Z, {
                                    className: W,
                                    user: r,
                                    'aria-label': r.username,
                                    size: P.EF.SIZE_56
                                }),
                                null != F &&
                                    (0, i.jsx)(g.Z, {
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
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-md/medium',
                                    color: V ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: t === T.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.BWJvAA, { friendUserName: O.ZP.getName(r) }) : (0, y.Ou)(t)
                                }),
                                (0, i.jsx)(p.Text, {
                                    className: Y,
                                    variant: 'text-sm/normal',
                                    children: t === T.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.S3fdq6, { numberOfYears: G }) : (0, y.Ou)(t)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Z.buttonContainer,
                    children: [
                        null != U &&
                            (0, i.jsx)(d.zx, {
                                className: o()(Z.button, J),
                                onClick: (e) => {
                                    (e.stopPropagation(),
                                        v.default.track(N.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: U
                                        }),
                                        U === T.X2.VIEW_ALL
                                            ? f.Z.transitionToSection(N.pJs.ALL, { explicit: !0 })
                                            : U === T.X2.SEND_MESSAGE &&
                                              ((0, j.PV)(r.id),
                                              m.Z.openPrivateChannel({ recipientIds: r.id }).then(() => {
                                                  setTimeout(() => {
                                                      ((0, E.PG)(A.X1.GIF, b.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, E.ql)(w.intl.string(w.t.jrtJi4), !0);
                                                          }, 50));
                                                  }, 100);
                                              })));
                                },
                                size: d.zx.Sizes.MEDIUM,
                                color: d.zx.Colors.CUSTOM,
                                look: d.zx.Looks.OUTLINED,
                                children: (0, i.jsx)('div', {
                                    className: Z.buttonContentContainer,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(Z.buttonText, $),
                                        children: (() => {
                                            switch (U) {
                                                case T.X2.VIEW_ALL:
                                                    return w.intl.string(w.t.WkxniI);
                                                case T.X2.SEND_MESSAGE:
                                                    return w.intl.string(w.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, i.jsx)(d.zx, {
                            className: Z.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let i = (0, S.F)(t);
                                (0, C.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: r,
                                    analyticsLocation: 'system_message' === n ? i.chat : i.actionButtonCoachmark,
                                    analyticsLocations: B,
                                    analyticsObject: {
                                        page: D,
                                        section: k,
                                        object: N.qAy.BUTTON_CTA,
                                        objectType: N.Qqv.GIFT
                                    },
                                    giftMessage: H()
                                });
                            },
                            size: d.zx.Sizes.MEDIUM,
                            color: X,
                            children: (0, i.jsxs)('div', {
                                className: Z.buttonContentContainer,
                                children: [
                                    (0, i.jsx)(p.OgN, {
                                        color: q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, i.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(Z.buttonText, Q),
                                        children: w.intl.string(w.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != L &&
                    (0, i.jsx)('div', {
                        className: o()(Z.connector, {
                            [Z.leftPopoutConnector]: 'left' === L,
                            [Z.rightPopoutConnector]: 'right' === L
                        })
                    })
            ]
        })
    });
}
