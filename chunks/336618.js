n.d(t, { A: () => U });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(877624),
    s = n(17928),
    c = n(554146),
    u = n(533781),
    d = n(604121),
    C = n(597770),
    A = n(793574),
    g = n(688810),
    f = n(131607),
    N = n(380619),
    m = n(751188),
    p = n(40493),
    T = n(374200),
    _ = n(186111),
    I = n(287809),
    h = n(927813),
    b = n(935208),
    R = n(240248),
    O = n(427262),
    M = n(743477),
    E = n(767089),
    v = n(652215),
    k = n(49999),
    y = n(375708),
    j = n(849353),
    x = n(266599);
function G(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, l.jsx)(E.A, {
        className: x.x6,
        "aria-label": y.intl.string(y.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, l.jsx)("div", {
            className: j.zc,
            children: e.hovered ? (0, l.jsx)(d.a, { className: j.Hl, importData: t }) : (0, l.jsx)(C.o, {}),
        }),
    });
}
function L(e) {
    let { Component: t, events: n, play: i } = (0, u.T)();
    return (0, l.jsxs)(E.A, {
        className: x.x6,
        "aria-label": y.intl.string(y.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: () => {
            i(), e.onClick?.();
        },
        ...n,
        children: [
            (0, l.jsx)("div", { className: j.zc, children: (0, l.jsx)(t, { className: j.is, color: "currentColor" }) }),
            e.hovered && (0, l.jsx)("img", { className: j.rY, src: e.trinketAnimationUrl, alt: "" }),
        ],
    });
}
let P = h.A.Millis.DAYS_30,
    U = i.memo(function (e) {
        let { disabled: t, channel: n } = e,
            { analyticsLocations: a } = (0, g.Ay)(A.A.GIFT_BUTTON),
            [u, d] = i.useState(!1),
            C = (0, s.bG)([_.A], () => !_.A?.hasLayers()),
            h = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
            E = null != h ? b.default.age(h.id) : 0,
            y = (0, s.bG)([T.A], () => {
                let e = T.A.getMarketingComponentByType(o.C.GIFT_ICON);
                return null == e || "giftIcon" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIcon;
            }),
            x = (0, s.bG)([T.A], () => {
                let e = T.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
                return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIconCoachmark;
            }),
            U = y?.gradient,
            B =
                null != U && null != U.colors && U.colors.length >= 2
                    ? (0, N.K5)({ gradient: U.colors, angle: U.angle ?? void 0 }, { defaultAngle: 180 })
                    : void 0,
            D = i.useMemo(() => {
                if (B?.background != null) return { "--custom-promotion-gradient": B.background };
            }, [B]),
            S = !(0, R.uJ)(y?.boxAnimationUrl),
            F = !(0, R.uJ)(y?.trinketAnimationUrl) && !S,
            H = (0, s.bG)([T.A], () => T.A.getGiftPromotion()?.id),
            w = null != x && !t && C && E >= P && null != H,
            [K, Z] = (0, f.Cc)(w ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, H ?? ""),
            $ = null != K,
            z = u || $,
            J = (0, O.R1)(n),
            { openGiftModal: V } = (0, m.$)({
                giftRecipient: J,
                analyticsLocations: a,
                analyticsObject: {
                    page: n.isPrivate() ? v.liQ.DM_CHANNEL : v.liQ.GUILD_CHANNEL,
                    section: v.JJy.CHANNEL_TEXT_AREA,
                    object: v.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: v.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? v.liQ.DM_CHANNEL : v.liQ.GUILD_CHANNEL,
                    section: v.JJy.CHANNEL_TEXT_AREA,
                    object: v.ZSU.BUTTON_ICON,
                    objectType: v.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        let Q = () => {
                d(!1), Z(k.i.TAKE_ACTION), V();
            },
            W =
                S && y?.boxAnimationUrl != null
                    ? (0, l.jsx)(G, { boxAnimationUrl: y.boxAnimationUrl, hovered: z, onClick: Q })
                    : F && y?.trinketAnimationUrl != null
                      ? (0, l.jsx)(L, { trinketAnimationUrl: y.trinketAnimationUrl, hovered: z, onClick: Q })
                      : (0, l.jsx)(M.A, { disabled: t, channel: n });
        return (0, l.jsx)("div", {
            className: r()(j.kL, { [j.DM]: z }),
            style: D,
            onMouseEnter: () => {
                u || d(!0);
            },
            onMouseLeave: () => {
                d(!1);
            },
            children: $
                ? (0, l.jsx)(p.A, {
                      onComplete: () => d(!1),
                      onCheckItOutClick: V,
                      markAsDismissed: Z,
                      coachmarkConfig: x,
                      children: W,
                  })
                : W,
        });
    });
