n.d(t, {
    U: () => k,
    Z: () => R
});
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(990547),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(493683),
    m = n(529103),
    f = n(700582),
    h = n(906732),
    g = n(213609),
    _ = n(541716),
    b = n(28546),
    v = n(963249),
    y = n(703656),
    x = n(594174),
    O = n(626135),
    E = n(51144),
    j = n(479446),
    N = n(795448),
    C = n(441623),
    I = n(317271),
    S = n(474936),
    P = n(981631),
    T = n(182294),
    A = n(957825),
    w = n(388032),
    Z = n(431811),
    k = (((r = {}).SYSTEM_MESSAGE = 'system_message'), (r.COACHMARK = 'coachmark'), r);
function R(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: r, onMouseEnter: o, onMouseLeave: k, popoutPosition: R, analyticsPage: L, analyticsSection: D, glow: M, giftIntentSecondaryAction: W } = e,
        F = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: U } = (0, h.ZP)(),
        B = (0, c.e7)([C.Z], () => C.Z.getFriendAnniversaryYears(r.id));
    a.useEffect(() => {
        (0, g.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: C.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let G = () => (t === S.hX.FRIEND_ANNIVERSARY ? w.NW.formatToPlainString(w.t['L2s/Nz'], { numberOfYears: B }) : (0, j.Ou)(t)),
        H = 'coachmark' === n,
        V = H ? Z.innerContentCoachmark : Z.innerContent,
        z = H ? Z.recipientUserAvatarCoachmark : Z.recipientUserAvatar,
        K = H ? Z.currentUserAvatarCoachmark : Z.currentUserAvatar,
        Y = H ? Z.subHeaderTextCoachmark : Z.subHeaderText,
        X = H ? u.zxk.Colors.BRAND : u.zxk.Colors.WHITE,
        q = H ? d.Z.colors.WHITE : d.Z.colors.BG_BRAND,
        Q = H ? Z.buttonTextPrimaryCoachmark : Z.buttonTextPrimary,
        J = H ? Z.buttonSecondaryCoachmark : Z.buttonSecondary,
        $ = H ? Z.buttonTextSecondaryCoachmark : Z.buttonTextSecondary;
    return (0, i.jsx)('div', {
        className: l()(Z.content, {
            [Z.outerGlow]: M,
            [Z.contentCoachmark]: H
        }),
        onMouseEnter: o,
        onMouseLeave: k,
        children: (0, i.jsxs)('div', {
            className: l()(V, { [Z.innerGlow]: M }),
            children: [
                (0, i.jsxs)('div', {
                    className: Z.subContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.avatars,
                            children: [
                                (0, i.jsx)(f.Z, {
                                    className: z,
                                    user: r,
                                    'aria-label': r.username,
                                    size: T.EF.SIZE_56
                                }),
                                null != F &&
                                    (0, i.jsx)(f.Z, {
                                        className: K,
                                        user: F,
                                        'aria-label': r.username,
                                        size: T.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.textContainer,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/medium',
                                    color: H ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: t === S.hX.FRIEND_ANNIVERSARY ? w.NW.formatToPlainString(w.t.BWJvAA, { friendUserName: E.ZP.getName(r) }) : (0, j.Ou)(t)
                                }),
                                (0, i.jsx)(u.Text, {
                                    className: Y,
                                    variant: 'text-sm/normal',
                                    children: t === S.hX.FRIEND_ANNIVERSARY ? w.NW.formatToPlainString(w.t.S3fdq6, { numberOfYears: B }) : (0, j.Ou)(t)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Z.buttonContainer,
                    children: [
                        null != W &&
                            (0, i.jsx)(u.zxk, {
                                className: l()(Z.button, J),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        O.default.track(P.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: W
                                        }),
                                        W === S.X2.VIEW_ALL
                                            ? ((0, y.uL)(P.Z5c.FRIENDS), m.Z.setSection(P.pJs.ALL))
                                            : W === S.X2.SEND_MESSAGE &&
                                              ((0, N.PV)(r.id),
                                              p.Z.openPrivateChannel(r.id).then(() => {
                                                  setTimeout(() => {
                                                      (0, b.PG)(A.X1.GIF, _.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, b.ql)(w.NW.string(w.t.jrtJi4), !0);
                                                          }, 50);
                                                  }, 100);
                                              }));
                                },
                                size: u.zxk.Sizes.MEDIUM,
                                color: u.zxk.Colors.CUSTOM,
                                look: u.zxk.Looks.OUTLINED,
                                children: (0, i.jsx)('div', {
                                    className: Z.buttonContentContainer,
                                    children: (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        className: l()(Z.buttonText, $),
                                        children: (() => {
                                            switch (W) {
                                                case S.X2.VIEW_ALL:
                                                    return w.NW.string(w.t.WkxniI);
                                                case S.X2.SEND_MESSAGE:
                                                    return w.NW.string(w.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, i.jsx)(u.zxk, {
                            className: Z.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let i = (0, I.F)(t);
                                (0, v.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: r,
                                    analyticsLocation: 'system_message' === n ? i.chat : i.actionButtonCoachmark,
                                    analyticsLocations: U,
                                    analyticsObject: {
                                        page: L,
                                        section: D,
                                        object: P.qAy.BUTTON_CTA,
                                        objectType: P.Qqv.GIFT
                                    },
                                    giftMessage: G()
                                });
                            },
                            size: u.zxk.Sizes.MEDIUM,
                            color: X,
                            children: (0, i.jsxs)('div', {
                                className: Z.buttonContentContainer,
                                children: [
                                    (0, i.jsx)(u.OgN, {
                                        color: q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        className: l()(Z.buttonText, Q),
                                        children: w.NW.string(w.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != R &&
                    (0, i.jsx)('div', {
                        className: l()(Z.connector, {
                            [Z.leftPopoutConnector]: 'left' === R,
                            [Z.rightPopoutConnector]: 'right' === R
                        })
                    })
            ]
        })
    });
}
