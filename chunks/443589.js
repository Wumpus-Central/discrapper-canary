n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(258536),
    s = n(990547),
    c = n(755721),
    u = n(481060),
    d = n(906732),
    p = n(213609),
    f = n(963249),
    h = n(579185),
    g = n(752048),
    m = n(626135),
    b = n(479446),
    _ = n(522558),
    E = n(441623),
    O = n(317271),
    v = n(674701),
    y = n(474936),
    I = n(981631),
    C = n(388032),
    S = n(427954),
    N = n(286389);
function T(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: l, shouldHighlight: T } = e,
        { analyticsLocations: P } = (0, d.ZP)(),
        { isHovered: j, setIsHovered: x, onMouseEnter: A, onMouseLeave: Z } = (0, h.Z)(200, 300),
        { enableEmojiCTA: w } = _.w.useExperiment({ location: "GiftIntentActionButton" }, { autoTrackExposure: !1 });
    i.useEffect(() => {
        let e = g.Z.getUserAffinity(t.id);
        (0, p.h)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
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
                    analyticsLocations: P,
                    analyticsObject: {
                        page: l,
                        section: I.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: I.qAy.BUTTON_CTA,
                        objectType: I.Qqv.GIFT,
                    },
                    giftMessage: D(),
                });
        },
        D = () =>
            n === y.hX.FRIEND_ANNIVERSARY
                ? C.intl.formatToPlainString(C.t["L2s/Nz"], { numberOfYears: E.Z.getFriendAnniversaryYears(t.id) })
                : (0, b.Ou)(n),
        M = () => (n === y.hX.FRIEND_ANNIVERSARY ? C.intl.string(C.t["4LohBA"]) : (0, b.Ou)(n)),
        k = i.useRef(null);
    return (0, r.jsx)(u.yRy, {
        targetElementRef: k,
        animation: u.yRy.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        scrollBehavior: "close",
        shouldShow: j,
        position: "right",
        align: "top",
        spacing: 9,
        onRequestClose: () => {
            x(!1);
        },
        renderPopout: (e) =>
            (0, r.jsx)(v.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: v.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: A,
                onMouseLeave: Z,
                popoutPosition: e.position,
                analyticsPage: l,
                analyticsSection: I.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: y.X2.SEND_MESSAGE,
                glow: !0,
            }),
        children: () =>
            w
                ? (0, r.jsx)(u.P3F, {
                      innerRef: k,
                      "aria-label": M(),
                      onClick: R,
                      className: a()(N.actionButton, S.popoutButton, { [N.highlight]: T }),
                      onMouseEnter: L,
                      onMouseLeave: Z,
                      children: (0, r.jsx)(o.animated.div, {
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
