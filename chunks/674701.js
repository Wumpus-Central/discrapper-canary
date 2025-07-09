n.d(t, {
    U: () => L,
    Z: () => D
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
    _ = n(700582),
    g = n(906732),
    h = n(213609),
    b = n(541716),
    E = n(28546),
    y = n(963249),
    C = n(703656),
    x = n(594174),
    v = n(626135),
    O = n(51144),
    j = n(479446),
    I = n(795448),
    S = n(441623),
    T = n(317271),
    N = n(474936),
    P = n(981631),
    A = n(182294),
    w = n(957825),
    Z = n(388032),
    R = n(587862),
    L = (((r = {}).SYSTEM_MESSAGE = 'system_message'), (r.COACHMARK = 'coachmark'), r);
function D(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: r, onMouseEnter: a, onMouseLeave: L, popoutPosition: D, analyticsPage: M, analyticsSection: k, glow: U, giftIntentSecondaryAction: F } = e,
        B = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: G } = (0, g.ZP)(),
        H = (0, c.e7)([S.Z], () => S.Z.getFriendAnniversaryYears(r.id));
    l.useEffect(() => {
        (0, h.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: S.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let V = () => (t === N.hX.FRIEND_ANNIVERSARY ? Z.intl.formatToPlainString(Z.t['L2s/Nz'], { numberOfYears: H }) : (0, j.Ou)(t)),
        z = 'coachmark' === n,
        W = z ? R.innerContentCoachmark : R.innerContent,
        K = z ? R.recipientUserAvatarCoachmark : R.recipientUserAvatar,
        Y = z ? R.currentUserAvatarCoachmark : R.currentUserAvatar,
        X = z ? R.subHeaderTextCoachmark : R.subHeaderText,
        q = z ? d.zx.Colors.BRAND : d.zx.Colors.WHITE,
        Q = z ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        J = z ? R.buttonTextPrimaryCoachmark : R.buttonTextPrimary,
        $ = z ? R.buttonSecondaryCoachmark : R.buttonSecondary,
        ee = z ? R.buttonTextSecondaryCoachmark : R.buttonTextSecondary;
    return (0, i.jsx)('div', {
        className: o()(R.content, {
            [R.outerGlow]: U,
            [R.contentCoachmark]: z
        }),
        onMouseEnter: a,
        onMouseLeave: L,
        children: (0, i.jsxs)('div', {
            className: o()(W, { [R.innerGlow]: U }),
            children: [
                (0, i.jsxs)('div', {
                    className: R.subContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.avatars,
                            children: [
                                (0, i.jsx)(_.Z, {
                                    className: K,
                                    user: r,
                                    'aria-label': r.username,
                                    size: A.EF.SIZE_56
                                }),
                                null != B &&
                                    (0, i.jsx)(_.Z, {
                                        className: Y,
                                        user: B,
                                        'aria-label': r.username,
                                        size: A.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: R.textContainer,
                            children: [
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-md/medium',
                                    color: z ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: t === N.hX.FRIEND_ANNIVERSARY ? Z.intl.formatToPlainString(Z.t.BWJvAA, { friendUserName: O.ZP.getName(r) }) : (0, j.Ou)(t)
                                }),
                                (0, i.jsx)(p.Text, {
                                    className: X,
                                    variant: 'text-sm/normal',
                                    children: t === N.hX.FRIEND_ANNIVERSARY ? Z.intl.formatToPlainString(Z.t.S3fdq6, { numberOfYears: H }) : (0, j.Ou)(t)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: R.buttonContainer,
                    children: [
                        null != F &&
                            (0, i.jsx)(d.zx, {
                                className: o()(R.button, $),
                                onClick: (e) => {
                                    (e.stopPropagation(),
                                        v.default.track(P.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: F
                                        }),
                                        F === N.X2.VIEW_ALL
                                            ? ((0, C.uL)(P.Z5c.FRIENDS), f.Z.setSection(P.pJs.ALL))
                                            : F === N.X2.SEND_MESSAGE &&
                                              ((0, I.PV)(r.id),
                                              m.Z.openPrivateChannel({ recipientIds: r.id }).then(() => {
                                                  setTimeout(() => {
                                                      ((0, E.PG)(w.X1.GIF, b.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, E.ql)(Z.intl.string(Z.t.jrtJi4), !0);
                                                          }, 50));
                                                  }, 100);
                                              })));
                                },
                                size: d.zx.Sizes.MEDIUM,
                                color: d.zx.Colors.CUSTOM,
                                look: d.zx.Looks.OUTLINED,
                                children: (0, i.jsx)('div', {
                                    className: R.buttonContentContainer,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(R.buttonText, ee),
                                        children: (() => {
                                            switch (F) {
                                                case N.X2.VIEW_ALL:
                                                    return Z.intl.string(Z.t.WkxniI);
                                                case N.X2.SEND_MESSAGE:
                                                    return Z.intl.string(Z.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, i.jsx)(d.zx, {
                            className: R.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let i = (0, T.F)(t);
                                (0, y.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: r,
                                    analyticsLocation: 'system_message' === n ? i.chat : i.actionButtonCoachmark,
                                    analyticsLocations: G,
                                    analyticsObject: {
                                        page: M,
                                        section: k,
                                        object: P.qAy.BUTTON_CTA,
                                        objectType: P.Qqv.GIFT
                                    },
                                    giftMessage: V()
                                });
                            },
                            size: d.zx.Sizes.MEDIUM,
                            color: q,
                            children: (0, i.jsxs)('div', {
                                className: R.buttonContentContainer,
                                children: [
                                    (0, i.jsx)(p.OgN, {
                                        color: Q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, i.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(R.buttonText, J),
                                        children: Z.intl.string(Z.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != D &&
                    (0, i.jsx)('div', {
                        className: o()(R.connector, {
                            [R.leftPopoutConnector]: 'left' === D,
                            [R.rightPopoutConnector]: 'right' === D
                        })
                    })
            ]
        })
    });
}
