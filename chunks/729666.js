"use strict";
n.d(t, { A: () => ev }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(607399),
    a = n(17928),
    o = n(155718),
    l = n(775602),
    d = n(861382),
    _ = n(136722),
    u = n(406704),
    c = n(696451),
    E = n(576705),
    h = n(287809),
    m = n(652215),
    f = n(86379),
    g = n(503698),
    p = n.n(g),
    A = n(939249),
    I = n(697744),
    T = n(795816),
    S = n(211401),
    N = n(989837),
    C = n(500049),
    R = n(598071),
    O = n(60809),
    y = n(985018),
    v = n(224840);
let D = r.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            o = (0, a.bG)(
                [N.A],
                () => N.A.shouldShowPopup() && N.A.activeViewType() === n && N.A.activeChannelId() === s,
            ),
            { Component: l, events: d, play: _ } = (0, I.c)(),
            u = r.useContext(R.Ay);
        r.useEffect(() => {
            let e = () => {
                d.onMouseEnter();
            };
            return (
                u.on("command-sentinel-typed", e),
                () => {
                    u.off("command-sentinel-typed", e);
                }
            );
        }, [u, d]);
        let c = r.useCallback(() => {
                o ? S.k(C.Se.DISMISSED) : (S.R(C.s4.TEXT, n, void 0, s), T.LK()), _();
            }, [o, n, s, _]),
            E = (0, i.jsx)(l, { size: "refresh_sm", color: "currentColor" });
        return (0, i.jsx)("div", {
            className: p()(v.UD, O.KG),
            ref: t,
            children: (0, i.jsx)(A.D, {
                tabIndex: 0,
                className: p()(v.x6, { [v.rK]: o }),
                onClick: c,
                "aria-label": y.intl.string(y.t.erHFxI),
                "aria-expanded": o,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...d,
                children: E,
            }),
        });
    }),
    L = r.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, i.jsx)(D, { type: t, channelId: n });
    });
var b = n(374200),
    w = n(852218),
    P = n(931664),
    k = n(522602),
    M = n(927578),
    U = n(942381),
    x = n(375499),
    G = n(151271),
    V = n(355622),
    F = n(698279),
    B = n(266599);
let H = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: a } = e,
            [o, l, d, _] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], U.x),
            u = s === V.oU.NORMAL,
            c = r.useCallback(() => {
                (0, G.r$)(F.kx.EMOJI, s, a);
            }, [s, a]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: p()(F.VQ, B.UD),
                  ref: t,
                  children: (0, i.jsx)(x.A, {
                      className: B.Z8,
                      onClick: c,
                      active: o === F.kx.EMOJI && l === s && _ === a,
                      "aria-controls": d,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: u,
                  }),
              });
    }),
);
var j = n(3203),
    W = n(990078),
    Y = n(617617),
    K = n(234320),
    z = n(767089);
let $ = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: o } = e,
            [l, d] = r.useState(!1),
            _ = (0, a.bG)(
                [Y.A],
                () => l && Object.values(Y.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [u, c, E, h] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], U.x),
            f = r.useRef(0),
            g = r.useCallback(() => {
                d(!0),
                    clearTimeout(f.current),
                    (f.current = setTimeout(() => {
                        d(!1), (f.current = 0);
                    }, 2e3));
            }, []);
        (0, K.Vo)({ event: m.jej.FAVORITE_GIF, handler: g });
        let A = r.useCallback(() => {
                (0, G.r$)(F.kx.GIF, s, o.id);
            }, [s, o.id]),
            { Component: I, events: T, play: S } = (0, j.V)();
        if (n) return null;
        let N = u === F.kx.GIF && c === s && h === o.id;
        return (0, i.jsx)(W.m, {
            text: y.intl.string(_ ? y.t.mE2e8A : y.t.nffuyb),
            shouldShow: _,
            forceOpen: _,
            children: (0, i.jsx)("div", {
                ref: t,
                className: p()(F.VQ, B.UD),
                children: (0, i.jsx)(z.A, {
                    className: B.x6,
                    onMouseEnter: T.onMouseEnter,
                    onMouseLeave: T.onMouseLeave,
                    onClick: () => {
                        A(), S();
                    },
                    isActive: N,
                    pulse: l,
                    "aria-label": y.intl.string(y.t.PtVpk2),
                    "aria-expanded": N,
                    "aria-haspopup": "dialog",
                    "aria-controls": E,
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
            openGiftModal: d,
            shouldShowWishlistModal: _,
            shouldShowGiftSelectionModal: u,
        } = (0, ee.$)({
            giftRecipient: s,
            analyticsLocations: r,
            analyticsObject: {
                page: n.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
                section: m.JJy.CHANNEL_TEXT_AREA,
                object: m.ZSU.BUTTON_ICON,
                objectType: m.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button",
        });
    return t
        ? null
        : (0, i.jsx)(W.m, {
              ariaHidden: _ || u,
              text: y.intl.string(_ || u ? y.t.TW4JV0 : y.t.sWtWDX),
              children: (0, i.jsx)(z.A, {
                  className: B.x6,
                  isActive: !1,
                  "aria-label": y.intl.string(_ || u ? y.t.TW4JV0 : y.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      d(), l();
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
    eo = n(932001),
    el = n(810498),
    ed = n(338854),
    e_ = n(807098),
    eu = n(49999);
function ec(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: s, coachmarkConfig: a, children: o } = e,
        l = (0, e_.T)(a?.asset),
        d = r.useRef(null),
        _ = r.useRef(null),
        [u, c] = r.useState(0);
    r.useEffect(() => {
        let e = () => {
                let e = d.current,
                    t = _.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    i = t.getBoundingClientRect();
                c(n.left + n.width / 2 - (i.left + i.width / 2));
            },
            t = new ResizeObserver(e),
            n = d.current,
            i = _.current;
        return null != n && t.observe(n), null != i && (t.observe(i), e()), () => t.disconnect();
    }, []);
    let E = {
        text: y.intl.string(y.t.RzWDqY),
        onClick: () => {
            n(), t(), s(eu.i.TAKE_ACTION);
        },
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: d, children: o }),
            (0, i.jsx)(ed.H, {
                targetElementRef: d,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: a?.header ?? "",
                body: a?.body ?? "",
                assetUrl: l ?? "",
                action: E,
                caretConfig: { align: "custom", customOffset: u },
                onRequestClose: () => {
                    t(), s(eu.i.USER_DISMISS);
                },
                popoverRef: _,
            }),
        ],
    });
}
var eE = n(186111),
    eh = n(927813),
    em = n(935208),
    ef = n(240248),
    eg = n(849353);
function ep(e) {
    let t = r.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, i.jsx)(z.A, {
        className: B.x6,
        "aria-label": y.intl.string(y.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, i.jsx)("div", {
            className: eg.zc,
            children: e.hovered ? (0, i.jsx)(es.a, { className: eg.Hl, importData: t }) : (0, i.jsx)(ea.o, {}),
        }),
    });
}
function eA(e) {
    let { Component: t, events: n, play: s } = Z(),
        a = r.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        o = r.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]);
    return (0, i.jsx)(z.A, {
        className: B.x6,
        "aria-label": y.intl.string(y.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: () => {
            s(), e.onClick?.();
        },
        ...n,
        children: (0, i.jsxs)("div", {
            className: eg.zc,
            children: [
                (0, i.jsx)(t, { className: eg.is, color: "currentColor" }),
                e.hovered &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, i.jsx)(es.a, { className: eg.rY, importData: a }),
                            null != e.trinketGlowAnimationUrl && (0, i.jsx)(es.a, { className: eg.c5, importData: o }),
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
            d = (0, a.bG)([eE.A], () => !eE.A?.hasLayers()),
            _ = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
            u = null != _ ? em.default.age(_.id) : 0,
            c = (0, a.bG)([b.A], () => {
                let e = b.A.getMarketingComponentByType(ei.C.GIFT_ICON);
                return null == e || "giftIcon" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIcon;
            }),
            E = (0, a.bG)([b.A], () => {
                let e = b.A.getMarketingComponentByType(ei.C.GIFT_ICON_COACHMARK);
                return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIconCoachmark;
            }),
            f = c?.gradient,
            g =
                null != f && null != f.colors && f.colors.length >= 2
                    ? (0, el.K5)({ gradient: f.colors, angle: f.angle ?? void 0 }, { defaultAngle: 180 })
                    : void 0,
            A = r.useMemo(() => {
                if (g?.background != null) return { "--custom-promotion-gradient": g.background };
            }, [g]),
            I = !(0, ef.uJ)(c?.boxAnimationUrl),
            T = (!(0, ef.uJ)(c?.trinketAnimationUrl) || !(0, ef.uJ)(c?.trinketGlowAnimationUrl)) && !I,
            S = (0, a.bG)([b.A], () => b.A.getGiftPromotion()?.id),
            N = null != E && !t && d && u >= eI && null != S,
            [C, R] = (0, eo.Cc)(N ? er.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, S ?? ""),
            O = null != C,
            y = o || O,
            v = (0, et.R1)(n),
            { openGiftModal: D } = (0, ee.$)({
                giftRecipient: v,
                analyticsLocations: s,
                analyticsObject: {
                    page: n.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
                    section: m.JJy.CHANNEL_TEXT_AREA,
                    object: m.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: m.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
                    section: m.JJy.CHANNEL_TEXT_AREA,
                    object: m.ZSU.BUTTON_ICON,
                    objectType: m.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        let L = () => {
                l(!1), R(eu.i.TAKE_ACTION), D();
            },
            w =
                I && c?.boxAnimationUrl != null
                    ? (0, i.jsx)(ep, { boxAnimationUrl: c.boxAnimationUrl, hovered: y, onClick: L })
                    : T
                      ? (0, i.jsx)(eA, {
                            trinketAnimationUrl: c?.trinketAnimationUrl ?? null,
                            trinketGlowAnimationUrl: c?.trinketGlowAnimationUrl ?? null,
                            hovered: y,
                            onClick: L,
                        })
                      : (0, i.jsx)(en, { disabled: t, channel: n });
        return (0, i.jsx)("div", {
            className: p()(eg.kL, { [eg.DM]: y }),
            style: A,
            onMouseEnter: () => {
                o || l(!0);
            },
            onMouseLeave: () => {
                l(!1);
            },
            children: O
                ? (0, i.jsx)(ec, {
                      onComplete: () => l(!1),
                      onCheckItOutClick: D,
                      markAsDismissed: R,
                      coachmarkConfig: E,
                      children: w,
                  })
                : w,
        });
    });
var eS = n(559647),
    eN = n(10388);
let eC = r.memo(function (e) {
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
                            childClassName: p()(eN.Z4, { [eN.r9]: n, [eN.xb]: !n }),
                            onClick: t,
                            disabled: n,
                            isActive: !1,
                            noHover: n,
                            "aria-label": y.intl.string(y.t.oeb1vg),
                            children: (0, i.jsx)(eS.l, { size: "xs", color: "currentColor", className: eN.AO }),
                        }),
                    }),
                }),
            ],
        });
    }),
    eR = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    eO = r.memo(
        r.forwardRef(function (e, t) {
            let s,
                a,
                o,
                l,
                d,
                { disabled: _, type: u, channel: c } = e,
                [E, h, m, f] = (0, G.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], U.x),
                g = E === F.kx.STICKER && f === u && m === c.id,
                A = r.useCallback(() => {
                    (0, G.r$)(F.kx.STICKER, u, c.id);
                }, [u, c.id]),
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
                (d = r.useCallback(
                    (e) =>
                        (0, i.jsx)(q.P, {
                            ...e,
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: s,
                            markers: eR,
                        }),
                    [],
                )),
                {
                    events: { onMouseEnter: o, onMouseLeave: l },
                    play: a,
                    getDuration: r.useCallback(() => s.current?.getDuration(), []),
                    getCurrentFrame: r.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                    Component: d,
                });
            return _
                ? null
                : (0, i.jsx)("div", {
                      className: p()(F.VQ, B.UD),
                      ref: t,
                      children: (0, i.jsx)(z.A, {
                          className: p()(B.x6, B.KE),
                          ...T,
                          onClick: () => {
                              A(), S();
                          },
                          isActive: g,
                          "aria-label": y.intl.string(y.t.rZpidU),
                          "aria-expanded": g,
                          "aria-haspopup": "dialog",
                          "aria-controls": h,
                          sparkle: !1,
                          children: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  });
        }),
    );
function ey(e) {
    let { disabled: t, channel: n } = e;
    return (0, a.bG)([b.A], () => Object.keys(b.A.promotionsByType[w.pt.GIFT_PROMOTION]).length > 0)
        ? (0, i.jsx)(eT, { disabled: t, channel: n })
        : (0, i.jsx)(en, { disabled: t, channel: n });
}
let ev = r.memo(function (e) {
    var t, n, r;
    let { type: g, disabled: p, channel: A, handleSubmit: I, isEmpty: T, showAllButtons: S } = e,
        N = (0, a.bG)([l.A], () => l.A.isSubmitButtonEnabled),
        C =
            ((t = A.id),
            (n = g),
            (r = T),
            (0, a.bG)([P.A, k.A], () => {
                let e = P.A.getStickerPreview(t, n.drafts.type),
                    i = null != e && e.length > 0;
                return 0 === k.A.getUploads(t, n.drafts.type).length && r && !i;
            })),
        { activeCommand: R, activeCommandOption: O } = (0, a.cf)([d.A], () => ({
            activeCommand: d.A.getActiveCommand(A.id),
            activeCommandOption: d.A.getActiveOption(A.id),
        })),
        y = (0, f.dw)(),
        v = [],
        D = !A.isDM() || void 0 === A.recipients || A.recipients.length > 1,
        b = (0, a.bG)([h.default], () => (D ? null : h.default.getUser(A.recipients[0]))),
        w = (function (e) {
            let { channel: t, chatInputType: n } = e,
                i = n.commands?.enabled ?? !1,
                r = (function (e) {
                    let t = e.getGuildId(),
                        n = (0, a.bG)([c.Ay, h.default], () => {
                            let e = h.default.getCurrentUser();
                            return (null != t && null != e ? c.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                        }),
                        { messagesDisabled: i } = (0, a.cf)([E.A], () => {
                            let t = e.isPrivate(),
                                i = E.A.computePermissions(e),
                                r = _.zy(i, m.xBc.SEND_MESSAGES),
                                s = (0, u.UJ)(e);
                            return { messagesDisabled: n || (!t && !r) || s };
                        }, [e, n]);
                    return !i;
                })(t),
                { activeCommand: s } = (0, a.cf)([d.A], () => ({
                    activeCommand: i ? d.A.getActiveCommand(t.id) : null,
                }));
            return i && r && null == s;
        })({ channel: A, chatInputType: g }),
        U = g.submit?.button != null && (g.submit?.ignorePreference || N);
    return (!s.Fr &&
        (g.gifts?.button != null &&
            null == R &&
            !y &&
            (null == b || M.Ay.isPremiumEligible(b)) &&
            v.push((0, i.jsx)(ey, { disabled: p, channel: A }, "gift")),
        g.gifs?.button != null && null == R && S && v.push((0, i.jsx)($, { disabled: p, type: g, channel: A }, "gif")),
        g.stickers?.button != null &&
            null == R &&
            S &&
            v.push((0, i.jsx)(eO, { disabled: p, type: g, channel: A }, "sticker"))),
    g.emojis?.button != null &&
        (null == R || (null != O && O.type !== o.n4.ATTACHMENT)) &&
        v.push((0, i.jsx)(H, { disabled: p, type: g, channelId: A.id }, "emoji")),
    w && v.push((0, i.jsx)(L, { channelId: A.id, type: g }, "appLauncher")),
    U && v.push((0, i.jsx)(eC, { onClick: I, disabled: p || C }, "submit")),
    0 === v.length)
        ? null
        : (0, i.jsx)("div", { className: B.Uo, children: v });
});
