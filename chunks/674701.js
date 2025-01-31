n.d(t, {
    U: () => k,
    Z: () => M
});
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(990547),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(493683),
    h = n(529103),
    _ = n(700582),
    p = n(906732),
    g = n(213609),
    f = n(541716),
    x = n(28546),
    E = n(963249),
    C = n(703656),
    v = n(594174),
    I = n(626135),
    N = n(51144),
    S = n(479446),
    T = n(795448),
    b = n(441623),
    A = n(317271),
    j = n(474936),
    y = n(981631),
    Z = n(182294),
    R = n(957825),
    L = n(388032),
    P = n(981125),
    k = (((i = {}).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark'), i);
function M(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: r, onMouseLeave: k, popoutPosition: M, analyticsPage: O, analyticsSection: D, glow: w, giftIntentSecondaryAction: F } = e,
        U = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: B } = (0, p.ZP)(),
        G = (0, c.e7)([b.Z], () => b.Z.getFriendAnniversaryYears(i.id));
    a.useEffect(() => {
        (0, g.h)({
            name: o.ImpressionNames.GIFT_INTENT_CARD,
            type: o.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: b.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let H = () => (t === j.hX.FRIEND_ANNIVERSARY ? L.intl.formatToPlainString(L.t['L2s/Nz'], { numberOfYears: G }) : (0, S.Ou)(t)),
        V = 'coachmark' === n,
        z = V ? P.innerContentCoachmark : P.innerContent,
        W = V ? P.recipientUserAvatarCoachmark : P.recipientUserAvatar,
        K = V ? P.currentUserAvatarCoachmark : P.currentUserAvatar,
        Y = V ? P.subHeaderTextCoachmark : P.subHeaderText,
        X = V ? u.zxk.Colors.BRAND : u.zxk.Colors.WHITE,
        q = V ? d.Z.colors.WHITE : d.Z.colors.BG_BRAND,
        Q = V ? P.buttonTextPrimaryCoachmark : P.buttonTextPrimary,
        J = V ? P.buttonSecondaryCoachmark : P.buttonSecondary,
        $ = V ? P.buttonTextSecondaryCoachmark : P.buttonTextSecondary;
    return (0, l.jsx)('div', {
        className: s()(P.content, {
            [P.outerGlow]: w,
            [P.contentCoachmark]: V
        }),
        onMouseEnter: r,
        onMouseLeave: k,
        children: (0, l.jsxs)('div', {
            className: s()(z, { [P.innerGlow]: w }),
            children: [
                (0, l.jsxs)('div', {
                    className: P.subContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: P.avatars,
                            children: [
                                (0, l.jsx)(_.Z, {
                                    className: W,
                                    user: i,
                                    'aria-label': i.username,
                                    size: Z.EF.SIZE_56
                                }),
                                null != U &&
                                    (0, l.jsx)(_.Z, {
                                        className: K,
                                        user: U,
                                        'aria-label': i.username,
                                        size: Z.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: P.textContainer,
                            children: [
                                (0, l.jsx)(u.Text, {
                                    variant: 'text-md/medium',
                                    color: V ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: t === j.hX.FRIEND_ANNIVERSARY ? L.intl.formatToPlainString(L.t.BWJvAA, { friendUserName: N.ZP.getName(i) }) : (0, S.Ou)(t)
                                }),
                                (0, l.jsx)(u.Text, {
                                    className: Y,
                                    variant: 'text-sm/normal',
                                    children: t === j.hX.FRIEND_ANNIVERSARY ? L.intl.formatToPlainString(L.t.S3fdq6, { numberOfYears: G }) : (0, S.Ou)(t)
                                })
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: P.buttonContainer,
                    children: [
                        null != F &&
                            (0, l.jsx)(u.zxk, {
                                className: s()(P.button, J),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        I.default.track(y.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: F
                                        }),
                                        F === j.X2.VIEW_ALL
                                            ? ((0, C.uL)(y.Z5c.FRIENDS), h.Z.setSection(y.pJs.ALL))
                                            : F === j.X2.SEND_MESSAGE &&
                                              ((0, T.PV)(i.id),
                                              m.Z.openPrivateChannel(i.id).then(() => {
                                                  setTimeout(() => {
                                                      (0, x.PG)(R.X1.GIF, f.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, x.ql)(L.intl.string(L.t.jrtJi4), !0);
                                                          }, 50);
                                                  }, 100);
                                              }));
                                },
                                size: u.zxk.Sizes.MEDIUM,
                                color: u.zxk.Colors.CUSTOM,
                                look: u.zxk.Looks.OUTLINED,
                                children: (0, l.jsx)('div', {
                                    className: P.buttonContentContainer,
                                    children: (0, l.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(P.buttonText, $),
                                        children: (() => {
                                            switch (F) {
                                                case j.X2.VIEW_ALL:
                                                    return L.intl.string(L.t.WkxniI);
                                                case j.X2.SEND_MESSAGE:
                                                    return L.intl.string(L.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, l.jsx)(u.zxk, {
                            className: P.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let l = (0, A.F)(t);
                                (0, E.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? l.chat : l.actionButtonCoachmark,
                                    analyticsLocations: B,
                                    analyticsObject: {
                                        page: O,
                                        section: D,
                                        object: y.qAy.BUTTON_CTA,
                                        objectType: y.Qqv.GIFT
                                    },
                                    giftMessage: H()
                                });
                            },
                            size: u.zxk.Sizes.MEDIUM,
                            color: X,
                            children: (0, l.jsxs)('div', {
                                className: P.buttonContentContainer,
                                children: [
                                    (0, l.jsx)(u.OgN, {
                                        color: q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, l.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(P.buttonText, Q),
                                        children: L.intl.string(L.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != M &&
                    (0, l.jsx)('div', {
                        className: s()(P.connector, {
                            [P.leftPopoutConnector]: 'left' === M,
                            [P.rightPopoutConnector]: 'right' === M
                        })
                    })
            ]
        })
    });
}
