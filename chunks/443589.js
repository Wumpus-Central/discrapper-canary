n.d(t, { Z: () => P });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
    s = n(990547),
    c = n(873546),
    u = n(481060),
    d = n(906732),
    p = n(213609),
    h = n(963249),
    g = n(579185),
    f = n(814443),
    m = n(626135),
    b = n(479446),
    _ = n(522558),
    E = n(441623),
    O = n(317271),
    N = n(674701),
    v = n(474936),
    y = n(981631),
    I = n(388032),
    C = n(668914),
    S = n(581904);
let T = {
    width: 14,
    height: 14
};
function P(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: l, shouldHighlight: P } = e,
        { analyticsLocations: j } = (0, d.ZP)(),
        { isHovered: A, setIsHovered: Z, onMouseEnter: x, onMouseLeave: L } = (0, g.Z)(200, 300),
        { enableEmojiCTA: w } = _.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 });
    i.useEffect(() => {
        let e = f.Z.getUserAffinity(t.id);
        (0, p.h)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: n,
                affinity: null == e ? void 0 : e.affinity
            }
        });
    }, [t, n]);
    let R = i.useCallback(
            (e) => {
                'focus' !== e.type && x();
            },
            [x]
        ),
        D = (e) => {
            e.stopPropagation();
            let r = f.Z.getUserAffinity(t.id);
            m.default.track(y.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: n,
                affinity: null == r ? void 0 : r.affinity
            }),
                (0, h.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, O.F)(n).actionButton,
                    analyticsLocations: j,
                    analyticsObject: {
                        page: l,
                        section: y.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: y.qAy.BUTTON_CTA,
                        objectType: y.Qqv.GIFT
                    },
                    giftMessage: k()
                });
        },
        k = () => (n === v.hX.FRIEND_ANNIVERSARY ? I.NW.formatToPlainString(I.t['L2s/Nz'], { numberOfYears: E.Z.getFriendAnniversaryYears(t.id) }) : (0, b.Ou)(n)),
        M = () => (n === v.hX.FRIEND_ANNIVERSARY ? I.NW.string(I.t['4LohBA']) : (0, b.Ou)(n)),
        U = () =>
            w
                ? (0, r.jsx)(u.P3F, {
                      'aria-label': M(),
                      onClick: D,
                      className: o()(S.actionButton, C.popoutButton, {
                          [S.highlight]: P,
                          [S.actionButtonMobile]: c.tq
                      }),
                      onMouseEnter: R,
                      onMouseLeave: L,
                      children: (0, r.jsx)(a.animated.div, {
                          className: C.spriteContainer,
                          children: (0, r.jsx)('div', { className: C.sprite })
                      })
                  })
                : (0, r.jsx)(u.zxk, {
                      onClick: D,
                      onMouseEnter: R,
                      onMouseLeave: L,
                      children: (0, r.jsxs)('div', {
                          className: C.pillContentContainer,
                          children: [
                              (0, r.jsx)(u.OgN, {
                                  size: 'custom',
                                  width: T.width,
                                  height: T.height,
                                  color: 'currentColor'
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: C.pillButtonText,
                                  children: M()
                              })
                          ]
                      })
                  });
    return (0, r.jsx)(u.yRy, {
        animation: u.yRy.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: A,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            Z(!1);
        },
        renderPopout: (e) =>
            (0, r.jsx)(N.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: N.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: x,
                onMouseLeave: L,
                popoutPosition: e.position,
                analyticsPage: l,
                analyticsSection: y.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: v.X2.SEND_MESSAGE,
                glow: !0
            }),
        children: () => U()
    });
}
