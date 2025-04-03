n.d(t, {
    U: () => k,
    Z: () => R
});
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
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
    N = n(479446),
    j = n(795448),
    C = n(441623),
    I = n(317271),
    S = n(474936),
    T = n(981631),
    P = n(182294),
    A = n(957825),
    w = n(388032),
    Z = n(587862),
    k = (((r = {}).SYSTEM_MESSAGE = 'system_message'), (r.COACHMARK = 'coachmark'), r);
function R(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: r, onMouseEnter: l, onMouseLeave: k, popoutPosition: R, analyticsPage: D, analyticsSection: L, glow: M, giftIntentSecondaryAction: W } = e,
        U = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: F } = (0, h.ZP)(),
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
    let G = () => (t === S.hX.FRIEND_ANNIVERSARY ? w.NW.formatToPlainString(w.t['L2s/Nz'], { numberOfYears: B }) : (0, N.Ou)(t)),
        H = 'coachmark' === n,
        V = H ? Z.innerContentCoachmark : Z.innerContent,
        z = H ? Z.recipientUserAvatarCoachmark : Z.recipientUserAvatar,
        K = H ? Z.currentUserAvatarCoachmark : Z.currentUserAvatar,
        Y = H ? Z.subHeaderTextCoachmark : Z.subHeaderText,
        X = H ? d.zxk.Colors.BRAND : d.zxk.Colors.WHITE,
        q = H ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        Q = H ? Z.buttonTextPrimaryCoachmark : Z.buttonTextPrimary,
        J = H ? Z.buttonSecondaryCoachmark : Z.buttonSecondary,
        $ = H ? Z.buttonTextSecondaryCoachmark : Z.buttonTextSecondary;
    return (0, i.jsx)('div', {
        className: o()(Z.content, {
            [Z.outerGlow]: M,
            [Z.contentCoachmark]: H
        }),
        onMouseEnter: l,
        onMouseLeave: k,
        children: (0, i.jsxs)('div', {
            className: o()(V, { [Z.innerGlow]: M }),
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
                                    size: P.EF.SIZE_56
                                }),
                                null != U &&
                                    (0, i.jsx)(f.Z, {
                                        className: K,
                                        user: U,
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
                                    color: H ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: t === S.hX.FRIEND_ANNIVERSARY ? w.NW.formatToPlainString(w.t.BWJvAA, { friendUserName: O.ZP.getName(r) }) : (0, N.Ou)(t)
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: Y,
                                    variant: 'text-sm/normal',
                                    children: t === S.hX.FRIEND_ANNIVERSARY ? w.NW.formatToPlainString(w.t.S3fdq6, { numberOfYears: B }) : (0, N.Ou)(t)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Z.buttonContainer,
                    children: [
                        null != W &&
                            (0, i.jsx)(d.zxk, {
                                className: o()(Z.button, J),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        v.default.track(T.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: W
                                        }),
                                        W === S.X2.VIEW_ALL
                                            ? ((0, y.uL)(T.Z5c.FRIENDS), m.Z.setSection(T.pJs.ALL))
                                            : W === S.X2.SEND_MESSAGE &&
                                              ((0, j.PV)(r.id),
                                              p.Z.openPrivateChannel(r.id).then(() => {
                                                  setTimeout(() => {
                                                      (0, b.PG)(A.X1.GIF, _.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, b.ql)(w.NW.string(w.t.jrtJi4), !0);
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
                                    analyticsLocations: F,
                                    analyticsObject: {
                                        page: D,
                                        section: L,
                                        object: T.qAy.BUTTON_CTA,
                                        objectType: T.Qqv.GIFT
                                    },
                                    giftMessage: G()
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
                                        children: w.NW.string(w.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != R &&
                    (0, i.jsx)('div', {
                        className: o()(Z.connector, {
                            [Z.leftPopoutConnector]: 'left' === R,
                            [Z.rightPopoutConnector]: 'right' === R
                        })
                    })
            ]
        })
    });
}
