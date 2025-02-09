n.d(t, { Z: () => b });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(990547),
    c = n(873546),
    d = n(481060),
    u = n(906732),
    h = n(213609),
    m = n(963249),
    p = n(579185),
    g = n(814443),
    _ = n(626135),
    f = n(479446),
    E = n(522558),
    I = n(441623),
    C = n(317271),
    v = n(674701),
    N = n(474936),
    T = n(981631),
    S = n(388032),
    A = n(810294),
    Z = n(304899);
let x = {
    width: 14,
    height: 14
};
function b(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: r, shouldHighlight: b } = e,
        { analyticsLocations: L } = (0, u.ZP)(),
        { isHovered: y, setIsHovered: P, onMouseEnter: O, onMouseLeave: R } = (0, p.Z)(200, 300),
        { enableEmojiCTA: j } = E.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 });
    l.useEffect(() => {
        let e = g.Z.getUserAffinity(t.id);
        (0, h.h)({
            name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: o.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: n,
                affinity: null == e ? void 0 : e.affinity
            }
        });
    }, [t, n]);
    let D = l.useCallback(
            (e) => {
                'focus' !== e.type && O();
            },
            [O]
        ),
        w = (e) => {
            e.stopPropagation();
            let i = g.Z.getUserAffinity(t.id);
            _.default.track(T.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: n,
                affinity: null == i ? void 0 : i.affinity
            }),
                (0, m.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, C.F)(n).actionButton,
                    analyticsLocations: L,
                    analyticsObject: {
                        page: r,
                        section: T.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: T.qAy.BUTTON_CTA,
                        objectType: T.Qqv.GIFT
                    },
                    giftMessage: M()
                });
        },
        M = () => (n === N.hX.FRIEND_ANNIVERSARY ? S.intl.formatToPlainString(S.t['L2s/Nz'], { numberOfYears: I.Z.getFriendAnniversaryYears(t.id) }) : (0, f.Ou)(n)),
        k = () => (n === N.hX.FRIEND_ANNIVERSARY ? S.intl.string(S.t['4LohBA']) : (0, f.Ou)(n)),
        U = () =>
            j
                ? (0, i.jsx)(d.P3F, {
                      'aria-label': k(),
                      onClick: w,
                      className: a()(Z.actionButton, A.popoutButton, {
                          [Z.highlight]: b,
                          [Z.actionButtonMobile]: c.tq
                      }),
                      onMouseEnter: D,
                      onMouseLeave: R,
                      children: (0, i.jsx)(s.animated.div, {
                          className: A.spriteContainer,
                          children: (0, i.jsx)('div', { className: A.sprite })
                      })
                  })
                : (0, i.jsx)(d.zxk, {
                      onClick: w,
                      onMouseEnter: D,
                      onMouseLeave: R,
                      children: (0, i.jsxs)('div', {
                          className: A.pillContentContainer,
                          children: [
                              (0, i.jsx)(d.OgN, {
                                  size: 'custom',
                                  width: x.width,
                                  height: x.height,
                                  color: 'currentColor'
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: A.pillButtonText,
                                  children: k()
                              })
                          ]
                      })
                  });
    return (0, i.jsx)(d.yRy, {
        animation: d.yRy.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: y,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            P(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(v.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: v.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: O,
                onMouseLeave: R,
                popoutPosition: e.position,
                analyticsPage: r,
                analyticsSection: T.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: N.X2.SEND_MESSAGE,
                glow: !0
            }),
        children: () => U()
    });
}
