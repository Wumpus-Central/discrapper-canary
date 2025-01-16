n.d(t, {
    U: function () {
        return r;
    },
    Z: function () {
        return M;
    }
});
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(990547),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(493683),
    f = n(529103),
    p = n(700582),
    _ = n(906732),
    g = n(213609),
    E = n(541716),
    C = n(28546),
    I = n(963249),
    x = n(703656),
    N = n(594174),
    v = n(626135),
    T = n(51144),
    S = n(479446),
    A = n(795448),
    b = n(441623),
    j = n(317271),
    R = n(474936),
    Z = n(981631),
    P = n(182294),
    L = n(957825),
    y = n(388032),
    O = n(981125);
function M(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: r, onMouseLeave: o, popoutPosition: M, analyticsPage: D, analyticsSection: k, glow: U, giftIntentSecondaryAction: B } = e,
        w = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        { analyticsLocations: F } = (0, _.ZP)(),
        G = (0, d.e7)([b.Z], () => b.Z.getFriendAnniversaryYears(i.id));
    a.useEffect(() => {
        (0, g.h)({
            name: c.ImpressionNames.GIFT_INTENT_CARD,
            type: c.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: b.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let V = () => {
            if (t === R.hX.FRIEND_ANNIVERSARY) return y.intl.formatToPlainString(y.t['L2s/Nz'], { numberOfYears: G });
            return (0, S.Ou)(t);
        },
        H = 'coachmark' === n,
        z = H ? O.innerContentCoachmark : O.innerContent,
        W = H ? O.recipientUserAvatarCoachmark : O.recipientUserAvatar,
        K = H ? O.currentUserAvatarCoachmark : O.currentUserAvatar,
        Y = H ? O.subHeaderTextCoachmark : O.subHeaderText,
        X = H ? m.Button.Colors.BRAND : m.Button.Colors.WHITE,
        Q = H ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        q = H ? O.buttonTextPrimaryCoachmark : O.buttonTextPrimary,
        J = H ? O.buttonSecondaryCoachmark : O.buttonSecondary,
        $ = H ? O.buttonTextSecondaryCoachmark : O.buttonTextSecondary;
    return (0, l.jsx)('div', {
        className: s()(O.content, {
            [O.outerGlow]: U,
            [O.contentCoachmark]: H
        }),
        onMouseEnter: r,
        onMouseLeave: o,
        children: (0, l.jsxs)('div', {
            className: s()(z, { [O.innerGlow]: U }),
            children: [
                (0, l.jsxs)('div', {
                    className: O.subContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: O.avatars,
                            children: [
                                (0, l.jsx)(p.Z, {
                                    className: W,
                                    user: i,
                                    'aria-label': i.username,
                                    size: P.EF.SIZE_56
                                }),
                                null != w &&
                                    (0, l.jsx)(p.Z, {
                                        className: K,
                                        user: w,
                                        'aria-label': i.username,
                                        size: P.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: O.textContainer,
                            children: [
                                (0, l.jsx)(m.Text, {
                                    variant: 'text-md/medium',
                                    color: H ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: (() => {
                                        if (t === R.hX.FRIEND_ANNIVERSARY) return y.intl.formatToPlainString(y.t.BWJvAA, { friendUserName: T.ZP.getName(i) });
                                        return (0, S.Ou)(t);
                                    })()
                                }),
                                (0, l.jsx)(m.Text, {
                                    className: Y,
                                    variant: 'text-sm/normal',
                                    children: (() => {
                                        if (t === R.hX.FRIEND_ANNIVERSARY) return y.intl.formatToPlainString(y.t.S3fdq6, { numberOfYears: G });
                                        return (0, S.Ou)(t);
                                    })()
                                })
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: O.buttonContainer,
                    children: [
                        null != B &&
                            (0, l.jsx)(m.Button, {
                                className: s()(O.button, J),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        v.default.track(Z.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: B
                                        }),
                                        B === R.X2.VIEW_ALL
                                            ? ((0, x.uL)(Z.Z5c.FRIENDS), f.Z.setSection(Z.pJs.ALL))
                                            : B === R.X2.SEND_MESSAGE &&
                                              ((0, A.PV)(i.id),
                                              h.Z.openPrivateChannel(i.id).then(() => {
                                                  setTimeout(() => {
                                                      (0, C.PG)(L.X1.GIF, E.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, C.ql)(y.intl.string(y.t.jrtJi4), !0);
                                                          }, 50);
                                                  }, 100);
                                              }));
                                },
                                size: m.Button.Sizes.MEDIUM,
                                color: m.Button.Colors.CUSTOM,
                                look: m.Button.Looks.OUTLINED,
                                children: (0, l.jsx)('div', {
                                    className: O.buttonContentContainer,
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(O.buttonText, $),
                                        children: (() => {
                                            switch (B) {
                                                case R.X2.VIEW_ALL:
                                                    return y.intl.string(y.t.WkxniI);
                                                case R.X2.SEND_MESSAGE:
                                                    return y.intl.string(y.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, l.jsx)(m.Button, {
                            className: O.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let r = (0, j.F)(t);
                                (0, I.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? r.chat : r.actionButtonCoachmark,
                                    analyticsLocations: F,
                                    analyticsObject: {
                                        page: D,
                                        section: k,
                                        object: Z.qAy.BUTTON_CTA,
                                        objectType: Z.Qqv.GIFT
                                    },
                                    giftMessage: V()
                                });
                            },
                            size: m.Button.Sizes.MEDIUM,
                            color: X,
                            children: (0, l.jsxs)('div', {
                                className: O.buttonContentContainer,
                                children: [
                                    (0, l.jsx)(m.GiftIcon, {
                                        color: Q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, l.jsx)(m.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(O.buttonText, q),
                                        children: y.intl.string(y.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != M &&
                    (0, l.jsx)('div', {
                        className: s()(O.connector, {
                            [O.leftPopoutConnector]: 'left' === M,
                            [O.rightPopoutConnector]: 'right' === M
                        })
                    })
            ]
        })
    });
}
((i = r || (r = {})).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark');
