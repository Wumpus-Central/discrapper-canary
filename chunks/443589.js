n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(990547),
    a = n(481060),
    s = n(906732),
    o = n(213609),
    c = n(963249),
    u = n(579185),
    d = n(752048),
    p = n(626135),
    f = n(479446),
    h = n(441623),
    g = n(317271),
    m = n(674701),
    _ = n(474936),
    b = n(981631),
    E = n(388032);
function O(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: O } = e,
        { analyticsLocations: y } = (0, s.ZP)(),
        { isHovered: v, setIsHovered: I, onMouseEnter: C, onMouseLeave: S } = (0, u.Z)(200, 300);
    i.useEffect(() => {
        let e = d.Z.getUserAffinity(t.id);
        (0, o.h)({
            name: l.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: n,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [t, n]);
    let T = (e) => {
            e.stopPropagation();
            let r = d.Z.getUserAffinity(t.id);
            p.default.track(b.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: n,
                affinity: null == r ? void 0 : r.communicationProbability,
            }),
                (0, c.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, g.F)(n).actionButton,
                    analyticsLocations: y,
                    analyticsObject: {
                        page: O,
                        section: b.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: b.qAy.BUTTON_CTA,
                        objectType: b.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: N(),
                });
        },
        N = () =>
            n === _.hX.FRIEND_ANNIVERSARY
                ? E.intl.formatToPlainString(E.t["L2s/N3"], { numberOfYears: h.Z.getFriendAnniversaryYears(t.id) })
                : (0, f.Ou)(n),
        j = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: j,
        animation: a.yRy.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        scrollBehavior: "close",
        shouldShow: v,
        position: "right",
        align: "top",
        spacing: 9,
        onRequestClose: () => {
            I(!1);
        },
        renderPopout: (e) =>
            (0, r.jsx)(m.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: m.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: C,
                onMouseLeave: S,
                popoutPosition: e.position,
                analyticsPage: O,
                analyticsSection: b.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: _.X2.SEND_MESSAGE,
                glow: !0,
            }),
        children: () =>
            (0, r.jsx)(a.hU, {
                icon: a.OgN,
                "aria-label": n === _.hX.FRIEND_ANNIVERSARY ? E.intl.string(E.t["4LohBA"]) : (0, f.Ou)(n),
                onClick: T,
            }),
    });
}
