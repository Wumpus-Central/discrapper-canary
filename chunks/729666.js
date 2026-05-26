"use strict";
n.d(t, { A: () => eR }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(607399),
    a = n(17928),
    o = n(155718),
    l = n(775602),
    u = n(861382),
    c = n(136722),
    d = n(406704),
    _ = n(696451),
    f = n(576705),
    h = n(287809),
    p = n(652215),
    E = n(86379),
    m = n(503698),
    g = n.n(m),
    A = n(939249),
    I = n(697744),
    T = n(795816),
    S = n(211401),
    N = n(989837),
    y = n(500049),
    C = n(598071),
    v = n(60809),
    O = n(375708),
    R = n(224840);
let b = r.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            o = (0, a.bG)(
                [N.A],
                () => N.A.shouldShowPopup() && N.A.activeViewType() === n && N.A.activeChannelId() === s,
            ),
            { Component: l, events: u, play: c } = (0, I.c)(),
            d = r.useContext(C.Ay);
        r.useEffect(() => {
            let e = () => {
                u.onMouseEnter();
            };
            return (
                d.on("command-sentinel-typed", e),
                () => {
                    d.off("command-sentinel-typed", e);
                }
            );
        }, [d, u]);
        let _ = r.useCallback(() => {
                o ? S.k(y.Se.DISMISSED) : (S.R(y.s4.TEXT, n, void 0, s), T.LK()), c();
            }, [o, n, s, c]),
            f = (0, i.jsx)(l, { size: "refresh_sm", color: "currentColor" });
        return (0, i.jsx)("div", {
            className: g()(R.UD, v.KG),
            ref: t,
            children: (0, i.jsx)(A.D, {
                tabIndex: 0,
                className: g()(R.x6, { [R.rK]: o }),
                onClick: _,
                "aria-label": O.intl.string(O.t.erHFxI),
                "aria-expanded": o,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...u,
                children: f,
            }),
        });
    }),
    D = r.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, i.jsx)(b, { type: t, channelId: n });
    });
var L = n(374200),
    w = n(852218),
    M = n(931664),
    P = n(522602),
    x = n(428262),
    U = n(942381),
    k = n(375499),
    G = n(151271),
    F = n(355622),
    V = n(698279),
    B = n(266599);
let H = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: a } = e,
            [o, l, u, c] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], U.x),
            d = s === F.oU.NORMAL,
            _ = r.useCallback(() => {
                (0, G.r$)(V.kx.EMOJI, s, a);
            }, [s, a]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: g()(V.VQ, B.UD),
                  ref: t,
                  children: (0, i.jsx)(k.A, {
                      className: B.Z8,
                      onClick: _,
                      active: o === V.kx.EMOJI && l === s && c === a,
                      "aria-controls": u,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: d,
                  }),
              });
    }),
);
var j = n(3203),
    Y = n(990078),
    W = n(617617),
    K = n(234320),
    z = n(767089);
let $ = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: o } = e,
            [l, u] = r.useState(!1),
            c = (0, a.bG)(
                [W.A],
                () => l && Object.values(W.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [d, _, f, h] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], U.x),
            E = r.useRef(0),
            m = r.useCallback(() => {
                u(!0),
                    clearTimeout(E.current),
                    (E.current = setTimeout(() => {
                        u(!1), (E.current = 0);
                    }, 2e3));
            }, []);
        (0, K.Vo)({ event: p.jej.FAVORITE_GIF, handler: m });
        let A = r.useCallback(() => {
                (0, G.r$)(V.kx.GIF, s, o.id);
            }, [s, o.id]),
            { Component: I, events: T, play: S } = (0, j.V)();
        if (n) return null;
        let N = d === V.kx.GIF && _ === s && h === o.id;
        return (0, i.jsx)(Y.m, {
            text: O.intl.string(c ? O.t.mE2e8A : O.t.nffuyb),
            shouldShow: c,
            forceOpen: c,
            children: (0, i.jsx)("div", {
                ref: t,
                className: g()(V.VQ, B.UD),
                children: (0, i.jsx)(z.A, {
                    className: B.x6,
                    onMouseEnter: T.onMouseEnter,
                    onMouseLeave: T.onMouseLeave,
                    onClick: () => {
                        A(), S();
                    },
                    isActive: N,
                    pulse: l,
                    "aria-label": O.intl.string(O.t.PtVpk2),
                    "aria-expanded": N,
                    "aria-haspopup": "dialog",
                    "aria-controls": f,
                    children: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
var q = n(744682);
let X = { all: { name: "all", start: 0, duration: 66 } },
    Z = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            s = r.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            a = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            o = r.useCallback(
                (t) =>
                    (0, i.jsx)(q.P, {
                        ...t,
                        src: () => n.e("56591").then(n.t.bind(n, 640114, 19)),
                        ref: e,
                        markers: X,
                    }),
                [],
            );
        return {
            events: { onMouseEnter: s, onMouseLeave: a },
            play: t,
            getDuration: r.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: o,
        };
    };
var Q = n(793574),
    J = n(688810),
    ee = n(751188),
    et = n(427262);
let en = r.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: r } = (0, J.Ay)(Q.A.GIFT_BUTTON),
        s = (0, et.R1)(n),
        { Component: a, events: o, play: l } = Z(),
        {
            openGiftModal: u,
            shouldShowWishlistModal: c,
            shouldShowGiftSelectionModal: d,
        } = (0, ee.$)({
            giftRecipient: s,
            analyticsLocations: r,
            analyticsObject: {
                page: n.isPrivate() ? p.liQ.DM_CHANNEL : p.liQ.GUILD_CHANNEL,
                section: p.JJy.CHANNEL_TEXT_AREA,
                object: p.ZSU.BUTTON_ICON,
                objectType: p.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button",
        });
    return t
        ? null
        : (0, i.jsx)(Y.m, {
              ariaHidden: c || d,
              text: O.intl.string(c || d ? O.t.TW4JV0 : O.t.sWtWDX),
              children: (0, i.jsx)(z.A, {
                  className: B.x6,
                  isActive: !1,
                  "aria-label": O.intl.string(c || d ? O.t.TW4JV0 : O.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      u(), l();
                  },
                  ...o,
                  children: (0, i.jsx)(a, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
});
var ei = n(877624),
    er = n(554146),
    es = n(604121),
    ea = n(597770),
    eo = n(131607),
    el = n(380619),
    eu = n(338854),
    ec = n(807098),
    ed = n(49999);
function e_(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: s, coachmarkConfig: a, children: o } = e,
        l = (0, ec.T)(a?.asset),
        u = r.useRef(null),
        c = r.useRef(null),
        [d, _] = r.useState(0);
    r.useEffect(() => {
        let e = () => {
                let e = u.current,
                    t = c.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    i = t.getBoundingClientRect();
                _(n.left + n.width / 2 - (i.left + i.width / 2));
            },
            t = new ResizeObserver(e),
            n = u.current,
            i = c.current;
        return null != n && t.observe(n), null != i && (t.observe(i), e()), () => t.disconnect();
    }, []);
    let f = {
        text: O.intl.string(O.t.RzWDqY),
        onClick: () => {
            n(), t(), s(ed.i.TAKE_ACTION);
        },
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: u, children: o }),
            (0, i.jsx)(eu.H, {
                targetElementRef: u,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: a?.header ?? "",
                body: a?.body ?? "",
                assetUrl: l ?? "",
                action: f,
                caretConfig: { align: "custom", customOffset: d },
                onRequestClose: () => {
                    t(), s(ed.i.USER_DISMISS);
                },
                popoverRef: c,
            }),
        ],
    });
}
var ef = n(186111),
    eh = n(927813),
    ep = n(935208),
    eE = n(240248),
    em = n(849353);
function eg(e) {
    let t = r.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, i.jsx)(z.A, {
        className: B.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, i.jsx)("div", {
            className: em.zc,
            children: e.hovered ? (0, i.jsx)(es.a, { className: em.Hl, importData: t }) : (0, i.jsx)(ea.o, {}),
        }),
    });
}
function eA(e) {
    let { Component: t, events: n, play: s } = Z(),
        a = r.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        o = r.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]);
    return (0, i.jsx)(z.A, {
        className: B.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: () => {
            s(), e.onClick?.();
        },
        ...n,
        children: (0, i.jsxs)("div", {
            className: em.zc,
            children: [
                (0, i.jsx)(t, { className: em.is, color: "currentColor" }),
                e.hovered &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, i.jsx)(es.a, { className: em.rY, importData: a }),
                            null != e.trinketGlowAnimationUrl && (0, i.jsx)(es.a, { className: em.c5, importData: o }),
                        ],
                    }),
            ],
        }),
    });
}
let eI = eh.A.Millis.DAYS_30,
    eT = r.memo(function (e) {
        let { disabled: t, channel: n } = e,
            { analyticsLocations: s } = (0, J.Ay)(Q.A.GIFT_BUTTON),
            [o, l] = r.useState(!1),
            u = (0, a.bG)([ef.A], () => !ef.A?.hasLayers()),
            c = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
            d = null != c ? ep.default.age(c.id) : 0,
            _ = (0, a.bG)([L.A], () => {
                let e = L.A.getMarketingComponentByType(ei.C.GIFT_ICON);
                return null == e || "giftIcon" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIcon;
            }),
            f = (0, a.bG)([L.A], () => {
                let e = L.A.getMarketingComponentByType(ei.C.GIFT_ICON_COACHMARK);
                return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIconCoachmark;
            }),
            E = _?.gradient,
            m =
                null != E && null != E.colors && E.colors.length >= 2
                    ? (0, el.K5)({ gradient: E.colors, angle: E.angle ?? void 0 }, { defaultAngle: 180 })
                    : void 0,
            A = r.useMemo(() => {
                if (m?.background != null) return { "--custom-promotion-gradient": m.background };
            }, [m]),
            I = !(0, eE.uJ)(_?.boxAnimationUrl),
            T = (!(0, eE.uJ)(_?.trinketAnimationUrl) || !(0, eE.uJ)(_?.trinketGlowAnimationUrl)) && !I,
            S = (0, a.bG)([L.A], () => L.A.getGiftPromotion()?.id),
            N = null != f && !t && u && d >= eI && null != S,
            [y, C] = (0, eo.Cc)(N ? er.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, S ?? ""),
            v = null != y,
            O = o || v,
            R = (0, et.R1)(n),
            { openGiftModal: b } = (0, ee.$)({
                giftRecipient: R,
                analyticsLocations: s,
                analyticsObject: {
                    page: n.isPrivate() ? p.liQ.DM_CHANNEL : p.liQ.GUILD_CHANNEL,
                    section: p.JJy.CHANNEL_TEXT_AREA,
                    object: p.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: p.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? p.liQ.DM_CHANNEL : p.liQ.GUILD_CHANNEL,
                    section: p.JJy.CHANNEL_TEXT_AREA,
                    object: p.ZSU.BUTTON_ICON,
                    objectType: p.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        let D = () => {
                l(!1), C(ed.i.TAKE_ACTION), b();
            },
            w =
                I && _?.boxAnimationUrl != null
                    ? (0, i.jsx)(eg, { boxAnimationUrl: _.boxAnimationUrl, hovered: O, onClick: D })
                    : T
                      ? (0, i.jsx)(eA, {
                            trinketAnimationUrl: _?.trinketAnimationUrl ?? null,
                            trinketGlowAnimationUrl: _?.trinketGlowAnimationUrl ?? null,
                            hovered: O,
                            onClick: D,
                        })
                      : (0, i.jsx)(en, { disabled: t, channel: n });
        return (0, i.jsx)("div", {
            className: g()(em.kL, { [em.DM]: O }),
            style: A,
            onMouseEnter: () => {
                o || l(!0);
            },
            onMouseLeave: () => {
                l(!1);
            },
            children: v
                ? (0, i.jsx)(e_, {
                      onComplete: () => l(!1),
                      onCheckItOutClick: b,
                      markAsDismissed: C,
                      coachmarkConfig: f,
                      children: w,
                  })
                : w,
        });
    });
var eS = n(559647),
    eN = n(10388);
let ey = r.memo(function (e) {
        let { onClick: t, disabled: n = !1 } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eN.me }),
                (0, i.jsx)("div", {
                    className: eN.kL,
                    children: (0, i.jsx)("div", {
                        className: eN.UD,
                        children: (0, i.jsx)(z.A, {
                            className: eN.x6,
                            childClassName: g()(eN.Z4, { [eN.r9]: n, [eN.xb]: !n }),
                            onClick: t,
                            disabled: n,
                            isActive: !1,
                            noHover: n,
                            "aria-label": O.intl.string(O.t.oeb1vg),
                            children: (0, i.jsx)(eS.l, { size: "xs", color: "currentColor", className: eN.AO }),
                        }),
                    }),
                }),
            ],
        });
    }),
    eC = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    ev = r.memo(
        r.forwardRef(function (e, t) {
            let s,
                a,
                o,
                l,
                u,
                { disabled: c, type: d, channel: _ } = e,
                [f, h, p, E] = (0, G.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], U.x),
                m = f === V.kx.STICKER && E === d && p === _.id,
                A = r.useCallback(() => {
                    (0, G.r$)(V.kx.STICKER, d, _.id);
                }, [d, _.id]),
                {
                    Component: I,
                    events: T,
                    play: S,
                } = ((s = r.useRef(null)),
                (a = r.useCallback(() => {
                    null != s.current && s.current.play("click");
                }, [])),
                (o = r.useCallback(() => {
                    null != s.current && s.current.play("hover");
                }, [])),
                (l = r.useCallback(() => {
                    null != s.current && s.current.stopIfPlaying("hover");
                }, [])),
                (u = r.useCallback(
                    (e) =>
                        (0, i.jsx)(q.P, {
                            ...e,
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: s,
                            markers: eC,
                        }),
                    [],
                )),
                {
                    events: { onMouseEnter: o, onMouseLeave: l },
                    play: a,
                    getDuration: r.useCallback(() => s.current?.getDuration(), []),
                    getCurrentFrame: r.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                    Component: u,
                });
            return c
                ? null
                : (0, i.jsx)("div", {
                      className: g()(V.VQ, B.UD),
                      ref: t,
                      children: (0, i.jsx)(z.A, {
                          className: g()(B.x6, B.KE),
                          ...T,
                          onClick: () => {
                              A(), S();
                          },
                          isActive: m,
                          "aria-label": O.intl.string(O.t.rZpidU),
                          "aria-expanded": m,
                          "aria-haspopup": "dialog",
                          "aria-controls": h,
                          sparkle: !1,
                          children: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  });
        }),
    );
function eO(e) {
    let { disabled: t, channel: n } = e;
    return (0, a.bG)([L.A], () => Object.keys(L.A.promotionsByType[w.pt.GIFT_PROMOTION]).length > 0)
        ? (0, i.jsx)(eT, { disabled: t, channel: n })
        : (0, i.jsx)(en, { disabled: t, channel: n });
}
let eR = r.memo(function (e) {
    var t, n, r;
    let { type: m, disabled: g, channel: A, handleSubmit: I, isEmpty: T, showAllButtons: S } = e,
        N = (0, a.bG)([l.A], () => l.A.isSubmitButtonEnabled),
        y =
            ((t = A.id),
            (n = m),
            (r = T),
            (0, a.bG)([M.A, P.A], () => {
                let e = M.A.getStickerPreview(t, n.drafts.type),
                    i = null != e && e.length > 0;
                return 0 === P.A.getUploads(t, n.drafts.type).length && r && !i;
            })),
        { activeCommand: C, activeCommandOption: v } = (0, a.cf)([u.A], () => ({
            activeCommand: u.A.getActiveCommand(A.id),
            activeCommandOption: u.A.getActiveOption(A.id),
        })),
        O = (0, E.dw)(),
        R = [],
        b = !A.isDM() || void 0 === A.recipients || A.recipients.length > 1,
        L = (0, a.bG)([h.default], () => (b ? null : h.default.getUser(A.recipients[0]))),
        w = (function (e) {
            let { channel: t, chatInputType: n } = e,
                i = n.commands?.enabled ?? !1,
                r = (function (e) {
                    let t = e.getGuildId(),
                        n = (0, a.bG)([_.Ay, h.default], () => {
                            let e = h.default.getCurrentUser();
                            return (null != t && null != e ? _.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                        }),
                        { messagesDisabled: i } = (0, a.cf)([f.A], () => {
                            let t = e.isPrivate(),
                                i = f.A.computePermissions(e),
                                r = c.zy(i, p.xBc.SEND_MESSAGES),
                                s = (0, d.UJ)(e);
                            return { messagesDisabled: n || (!t && !r) || s };
                        }, [e, n]);
                    return !i;
                })(t),
                { activeCommand: s } = (0, a.cf)([u.A], () => ({
                    activeCommand: i ? u.A.getActiveCommand(t.id) : null,
                }));
            return i && r && null == s;
        })({ channel: A, chatInputType: m }),
        U = m.submit?.button != null && (m.submit?.ignorePreference || N);
    return (!s.Fr &&
        (m.gifts?.button != null &&
            null == C &&
            !O &&
            (null == L || x.Ay.isPremiumEligible(L)) &&
            R.push((0, i.jsx)(eO, { disabled: g, channel: A }, "gift")),
        m.gifs?.button != null && null == C && S && R.push((0, i.jsx)($, { disabled: g, type: m, channel: A }, "gif")),
        m.stickers?.button != null &&
            null == C &&
            S &&
            R.push((0, i.jsx)(ev, { disabled: g, type: m, channel: A }, "sticker"))),
    m.emojis?.button != null &&
        (null == C || (null != v && v.type !== o.n4.ATTACHMENT)) &&
        R.push((0, i.jsx)(H, { disabled: g, type: m, channelId: A.id }, "emoji")),
    w && R.push((0, i.jsx)(D, { channelId: A.id, type: m }, "appLauncher")),
    U && R.push((0, i.jsx)(ey, { onClick: I, disabled: g || y }, "submit")),
    0 === R.length)
        ? null
        : (0, i.jsx)("div", { className: B.Uo, children: R });
});
