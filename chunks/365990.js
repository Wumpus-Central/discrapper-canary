n.d(t, { A: () => J });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(877624),
    o = n(17928),
    u = n(554146),
    c = n(744682);
let d = { all: { name: "all", start: 0, duration: 66 } };
function h() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        s = i.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        r = i.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        a = i.useCallback(
            (t) =>
                (0, l.jsx)(c.P, { ...t, src: () => n.e("556591").then(n.t.bind(n, 640114, 19)), ref: e, markers: d }),
            [],
        );
    return {
        events: { onMouseEnter: s, onMouseLeave: r },
        play: t,
        getDuration: i.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: a,
    };
}
var m = n(604121),
    f = n(597770),
    p = n(866665),
    g = n(942857),
    x = n(775602),
    A = n(793574),
    C = n(688810),
    E = n(131607),
    I = n(580194),
    y = n(70283),
    S = n(682618),
    v = n(982240),
    N = n(611881),
    _ = n(788833),
    j = n(40493),
    T = n(43105),
    b = n(402860),
    R = n(287809),
    O = n(427262),
    L = n(652215),
    M = n(49999),
    k = n(556427),
    w = n(375708);
function P(e) {
    let { currentTier: t, giftCount: n, onComplete: s, markAsDismissed: r, children: a } = e,
        u = i.useRef(null),
        c = (0, o.bG)([R.default], () => R.default.getCurrentUser());
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: u, children: a }),
            (0, l.jsx)(T.A, {
                targetElementRef: u,
                shouldShow: !0,
                position: "top",
                title: w.intl.format(k.default["a+jfuy"], { tierName: t.name ?? "" }),
                body: w.intl.formatToPlainString(k.default.QxRA6w, { giftCount: n ?? 0 }),
                graphic: null != t.simple_icon_url ? { type: "image", src: t.simple_icon_url } : void 0,
                actions: [
                    {
                        text: w.intl.string(w.t.RzWDqY),
                        onClick: () => {
                            null != c && (0, b.openUserProfileModal)({ userId: c.id }), s?.(), r(M.i.TAKE_ACTION);
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    s?.(), r(M.i.USER_DISMISS);
                },
            }),
        ],
    });
}
function D(e) {
    let { channel: t, onComplete: n, markAsDismissed: s, children: r } = e,
        a = i.useRef(null),
        { analyticsLocations: o } = (0, C.Ay)(A.A.GIFTING_BADGE_COACHMARK),
        u = (0, O.R1)(t),
        { openGiftModal: c } = (0, _.$)({
            giftRecipient: u,
            analyticsLocations: o,
            analyticsObject: { object: L.ZSU.BUTTON_CTA, objectType: L.AnalyticsObjectTypes.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: a, children: r }),
            (0, l.jsx)(T.A, {
                targetElementRef: a,
                shouldShow: !0,
                position: "top",
                title: w.intl.string(k.default.Q2RQka),
                body: w.intl.string(k.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: w.intl.string(k.default.DZnomS),
                        icon: f.GiftIcon,
                        onClick: () => {
                            c(), n?.(), s(M.i.TAKE_ACTION);
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    n?.(), s(M.i.USER_DISMISS);
                },
            }),
        ],
    });
}
function U(e) {
    let { channel: t, onComplete: n, markAsDismissed: i, children: s } = e,
        { currentTier: r, giftCount: a } = (0, o.cf)([v.Ay], () => ({
            currentTier: v.Ay.getCurrentTier(y.$.GIFTING),
            giftCount: v.Ay.getSingleRequirementProgress(y.$.GIFTING)?.current,
        }));
    return null != r
        ? (0, l.jsx)(P, { currentTier: r, giftCount: a, onComplete: n, markAsDismissed: i, children: s })
        : (0, l.jsx)(D, { channel: t, onComplete: n, markAsDismissed: i, children: s });
}
var G = n(412260),
    V = n(927813),
    F = n(935208),
    H = n(240248),
    B = n(767089),
    W = n(621255),
    K = n(495088);
let z = V.A.Millis.DAYS_30;
function Z(e) {
    let { boxAnimationUrl: t, hovered: n, onClick: s } = e,
        r = i.useCallback(() => Promise.resolve({ default: t }), [t]);
    return (0, l.jsx)(B.A, {
        className: K.x6,
        "aria-label": w.intl.string(w.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: s,
        children: (0, l.jsx)("div", {
            className: W.zc,
            children: n ? (0, l.jsx)(m.a, { className: W.Hl, importData: r }) : (0, l.jsx)(f.GiftIcon, {}),
        }),
    });
}
function Y(e) {
    let { trinketAnimationUrl: t, hovered: n, onClick: i } = e,
        { Component: s, events: r, play: a } = h(),
        u = (0, o.bG)([x.Ay], () => x.Ay.useReducedMotion);
    return (0, l.jsxs)(B.A, {
        className: K.x6,
        "aria-label": w.intl.string(w.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            a(), i();
        },
        ...r,
        children: [
            (0, l.jsx)("div", { className: W.zc, children: (0, l.jsx)(s, { className: W.is, color: "currentColor" }) }),
            n && !u && (0, l.jsx)("img", { className: W.rY, src: t, alt: "" }),
        ],
    });
}
function q(e) {
    let { giftIcon: t, hovered: n, isGenericGift: i, onClick: s } = e,
        { Component: r, events: a, play: o } = h(),
        u = t?.boxAnimationUrl;
    if (!(0, H.uJ)(u)) return (0, l.jsx)(Z, { boxAnimationUrl: u, hovered: n, onClick: s });
    let c = t?.trinketAnimationUrl;
    return (0, H.uJ)(c)
        ? (0, l.jsx)(p.m, {
              ariaHidden: i,
              text: w.intl.string(i ? w.t.TW4JV0 : w.t.sWtWDX),
              children: (0, l.jsx)(B.A, {
                  className: K.x6,
                  isActive: !1,
                  "aria-label": w.intl.string(i ? w.t.TW4JV0 : w.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      s(), o();
                  },
                  ...a,
                  children: (0, l.jsx)(r, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : (0, l.jsx)(Y, { trinketAnimationUrl: c, hovered: n, onClick: s });
}
let J = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, C.Ay)(A.A.GIFT_BUTTON),
        [c, d] = i.useState(!1),
        h = (0, g.A)(),
        m = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        f = null != m ? F.default.age(m.id) : 0,
        p = (0, O.R1)(n),
        x = (0, o.bG)([G.A], () => {
            let e = G.A.getMarketingComponentByType(a.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        T = (0, o.bG)([G.A], () => {
            let e = G.A.getMarketingComponentByType(a.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        b = x?.gradient,
        k =
            null != b && null != b.colors && b.colors.length >= 2
                ? (0, I.K5)({ gradient: b.colors, angle: b.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        w = i.useMemo(() => {
            if (k?.background != null) return { "--custom-promotion-gradient": k.background };
        }, [k]),
        P = !(0, H.uJ)(x?.boxAnimationUrl) || !(0, H.uJ)(x?.trinketAnimationUrl),
        D = (0, o.bG)([G.A], () => G.A.getGiftPromotion()?.id),
        V = null != T && !t && !h && f >= z && null != D,
        [B, K] = (0, E.Cc)(V ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, D ?? ""),
        Z = null != B,
        { showGiftingBadgeCoachmark: Y, markGiftingBadgeCoachmarkAsDismissed: J } = (function (e) {
            let { location: t, enabled: n } = e,
                l = (0, g.A)(),
                s = (0, N.Ls)({ platform: "web", location: t }) && n;
            i.useEffect(() => {
                s && (0, S.o0)(y.$.GIFTING);
            }, [s]);
            let r = (0, o.bG)([v.Ay], () => null != v.Ay.getBadgeById(y.$.GIFTING)),
                a = s && r && !l,
                [c, d] = (0, E.kn)(a ? [u.M.NEW_GIFTING_BADGES_COACHMARK] : []);
            return { showGiftingBadgeCoachmark: null != c, markGiftingBadgeCoachmarkAsDismissed: d };
        })({ location: "ChannelPremiumGiftButton", enabled: !t && !Z }),
        $ = c || Z || Y,
        {
            openGiftModal: X,
            shouldShowWishlistModal: Q,
            shouldShowGiftSelectionModal: ee,
        } = (0, _.$)({
            giftRecipient: p,
            analyticsLocations: s,
            analyticsObject: {
                page: n.isPrivate() ? L.liQ.DM_CHANNEL : L.liQ.GUILD_CHANNEL,
                section: L.JJy.CHANNEL_TEXT_AREA,
                object: P ? L.ZSU.GIFTING_PROMOTION_BUTTON : L.ZSU.BUTTON_ICON,
                objectType: L.AnalyticsObjectTypes.GIFT,
            },
            wishlistAnalyticsObject: P
                ? {
                      page: n.isPrivate() ? L.liQ.DM_CHANNEL : L.liQ.GUILD_CHANNEL,
                      section: L.JJy.CHANNEL_TEXT_AREA,
                      object: L.ZSU.BUTTON_ICON,
                      objectType: L.AnalyticsObjectTypes.GIFT,
                  }
                : void 0,
            location: P ? "gift-promotion-button" : "gift-button",
        });
    if (t) return null;
    let et = (0, l.jsx)(q, {
        giftIcon: x,
        hovered: $,
        isGenericGift: Q || ee,
        onClick: function () {
            d(!1), K(M.i.TAKE_ACTION), J(M.i.TAKE_ACTION), X();
        },
    });
    return (0, l.jsx)("div", {
        className: r()(W.kL, { [W.DM]: $ }),
        style: w,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: Z
            ? (0, l.jsx)(j.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: X,
                  markAsDismissed: K,
                  coachmarkConfig: T,
                  children: et,
              })
            : Y
              ? (0, l.jsx)(U, { channel: n, onComplete: () => d(!1), markAsDismissed: J, children: et })
              : et,
    });
});
