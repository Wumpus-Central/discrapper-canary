n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(264738),
    s = n(990547),
    c = n(873546),
    u = n(755721),
    d = n(481060),
    p = n(906732),
    h = n(213609),
    f = n(963249),
    g = n(579185),
    m = n(752048),
    b = n(626135),
    _ = n(479446),
    E = n(522558),
    O = n(441623),
    y = n(317271),
    I = n(674701),
    v = n(474936),
    C = n(981631),
    S = n(388032),
    N = n(26725),
    T = n(114959);
let P = {
    width: 14,
    height: 14
};
function j(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: l, shouldHighlight: j } = e,
        { analyticsLocations: A } = (0, p.ZP)(),
        { isHovered: Z, setIsHovered: x, onMouseEnter: w, onMouseLeave: L } = (0, g.Z)(200, 300),
        { enableEmojiCTA: R } = E.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 });
    i.useEffect(() => {
        let e = m.Z.getUserAffinity(t.id);
        (0, h.h)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: n,
                affinity: null == e ? void 0 : e.communicationProbability
            }
        });
    }, [t, n]);
    let D = i.useCallback(
            (e) => {
                'focus' !== e.type && w();
            },
            [w]
        ),
        k = (e) => {
            e.stopPropagation();
            let r = m.Z.getUserAffinity(t.id);
            (b.default.track(C.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: n,
                affinity: null == r ? void 0 : r.communicationProbability
            }),
                (0, f.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, y.F)(n).actionButton,
                    analyticsLocations: A,
                    analyticsObject: {
                        page: l,
                        section: C.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: C.qAy.BUTTON_CTA,
                        objectType: C.Qqv.GIFT
                    },
                    giftMessage: M()
                }));
        },
        M = () => (n === v.hX.FRIEND_ANNIVERSARY ? S.intl.formatToPlainString(S.t['L2s/Nz'], { numberOfYears: O.Z.getFriendAnniversaryYears(t.id) }) : (0, _.Ou)(n)),
        U = () => (n === v.hX.FRIEND_ANNIVERSARY ? S.intl.string(S.t['4LohBA']) : (0, _.Ou)(n)),
        G = i.useRef(null),
        B = () =>
            R
                ? (0, r.jsx)(d.P3F, {
                      innerRef: G,
                      'aria-label': U(),
                      onClick: k,
                      className: a()(T.actionButton, N.popoutButton, {
                          [T.highlight]: j,
                          [T.actionButtonMobile]: c.tq
                      }),
                      onMouseEnter: D,
                      onMouseLeave: L,
                      children: (0, r.jsx)(o.animated.div, {
                          className: N.spriteContainer,
                          children: (0, r.jsx)('div', { className: N.sprite })
                      })
                  })
                : (0, r.jsx)(u.zx, {
                      buttonRef: G,
                      onClick: k,
                      onMouseEnter: D,
                      onMouseLeave: L,
                      children: (0, r.jsxs)('div', {
                          className: N.pillContentContainer,
                          children: [
                              (0, r.jsx)(d.OgN, {
                                  size: 'custom',
                                  width: P.width,
                                  height: P.height,
                                  color: 'currentColor'
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: N.pillButtonText,
                                  children: U()
                              })
                          ]
                      })
                  });
    return (0, r.jsx)(d.yRy, {
        targetElementRef: G,
        animation: d.yRy.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: Z,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            x(!1);
        },
        renderPopout: (e) =>
            (0, r.jsx)(I.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: I.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: w,
                onMouseLeave: L,
                popoutPosition: e.position,
                analyticsPage: l,
                analyticsSection: C.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: v.X2.SEND_MESSAGE,
                glow: !0
            }),
        children: () => B()
    });
}
