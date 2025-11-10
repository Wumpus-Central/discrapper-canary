n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(509442),
    o = n(990547),
    c = n(755721),
    u = n(481060),
    d = n(906732),
    p = n(213609),
    f = n(963249),
    h = n(579185),
    g = n(752048),
    m = n(626135),
    _ = n(479446),
    b = n(522558),
    E = n(441623),
    O = n(317271),
    y = n(674701),
    v = n(474936),
    I = n(981631),
    C = n(388032),
    S = n(427954),
    T = n(286389);
function N(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: l, shouldHighlight: N } = e,
        { analyticsLocations: j } = (0, d.ZP)(),
        { isHovered: P, setIsHovered: x, onMouseEnter: A, onMouseLeave: Z } = (0, h.Z)(200, 300),
        { enableEmojiCTA: w } = b.w.useExperiment({ location: "GiftIntentActionButton" }, { autoTrackExposure: !1 });
    i.useEffect(() => {
        let e = g.Z.getUserAffinity(t.id);
        (0, p.h)({
            name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: o.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: n,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [t, n]);
    let L = i.useCallback(
            (e) => {
                "focus" !== e.type && A();
            },
            [A],
        ),
        R = (e) => {
            e.stopPropagation();
            let r = g.Z.getUserAffinity(t.id);
            m.default.track(I.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: n,
                affinity: null == r ? void 0 : r.communicationProbability,
            }),
                (0, f.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, O.F)(n).actionButton,
                    analyticsLocations: j,
                    analyticsObject: {
                        page: l,
                        section: I.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: I.qAy.BUTTON_CTA,
                        objectType: I.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: D(),
                });
        },
        D = () =>
            n === v.hX.FRIEND_ANNIVERSARY
                ? C.intl.formatToPlainString(C.t["L2s/N3"], { numberOfYears: E.Z.getFriendAnniversaryYears(t.id) })
                : (0, _.Ou)(n),
        M = () => (n === v.hX.FRIEND_ANNIVERSARY ? C.intl.string(C.t["4LohBA"]) : (0, _.Ou)(n)),
        k = i.useRef(null);
    return (0, r.jsx)(u.yRy, {
        targetElementRef: k,
        animation: u.yRy.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        scrollBehavior: "close",
        shouldShow: P,
        position: "right",
        align: "top",
        spacing: 9,
        onRequestClose: () => {
            x(!1);
        },
        renderPopout: (e) =>
            (0, r.jsx)(y.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: y.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: A,
                onMouseLeave: Z,
                popoutPosition: e.position,
                analyticsPage: l,
                analyticsSection: I.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: v.X2.SEND_MESSAGE,
                glow: !0,
            }),
        children: () =>
            w
                ? (0, r.jsx)(u.P3F, {
                      innerRef: k,
                      "aria-label": M(),
                      onClick: R,
                      className: a()(T.actionButton, S.popoutButton, { [T.highlight]: N }),
                      onMouseEnter: L,
                      onMouseLeave: Z,
                      children: (0, r.jsx)(s.animated.div, {
                          className: S.spriteContainer,
                          children: (0, r.jsx)("div", { className: S.sprite }),
                      }),
                  })
                : (0, r.jsx)(c.zx, {
                      "data-migration-pending": !0,
                      buttonRef: k,
                      onClick: R,
                      onMouseEnter: L,
                      onMouseLeave: Z,
                      children: (0, r.jsxs)("div", {
                          className: S.pillContentContainer,
                          children: [
                              (0, r.jsx)(u.OgN, {
                                  size: "custom",
                                  width: 14,
                                  height: 14,
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  color: "always-white",
                                  className: S.pillButtonText,
                                  children: M(),
                              }),
                          ],
                      }),
                  }),
    });
}
