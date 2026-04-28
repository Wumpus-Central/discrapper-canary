"use strict";
n.d(t, { A: () => ej }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(607399),
    a = n(17928),
    r = n(155718),
    o = n(775602),
    c = n(861382),
    u = n(136722),
    d = n(406704),
    h = n(696451),
    m = n(576705),
    p = n(287809),
    f = n(652215),
    g = n(86379),
    _ = n(503698),
    x = n.n(_),
    C = n(939249),
    A = n(697744),
    E = n(795816),
    I = n(211401),
    v = n(989837),
    y = n(500049),
    b = n(598071),
    S = n(60809),
    N = n(985018),
    j = n(224840);
let T = i.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            r = (0, a.bG)(
                [v.A],
                () => v.A.shouldShowPopup() && v.A.activeViewType() === n && v.A.activeChannelId() === s,
            ),
            { Component: o, events: c, play: u } = (0, A.c)(),
            d = i.useContext(b.Ay);
        i.useEffect(() => {
            let e = () => {
                c.onMouseEnter();
            };
            return (
                d.on("command-sentinel-typed", e),
                () => {
                    d.off("command-sentinel-typed", e);
                }
            );
        }, [d, c]);
        let h = i.useCallback(() => {
                r ? I.k(y.Se.DISMISSED) : (I.R(y.s4.TEXT, n, void 0, s), E.LK()), u();
            }, [r, n, s, u]),
            m = (0, l.jsx)(o, { size: "refresh_sm", color: "currentColor" });
        return (0, l.jsx)("div", {
            className: x()(j.UD, S.KG),
            ref: t,
            children: (0, l.jsx)(C.D, {
                tabIndex: 0,
                className: x()(j.x6, { [j.rK]: r }),
                onClick: h,
                "aria-label": N.intl.string(N.t.erHFxI),
                "aria-expanded": r,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...c,
                children: m,
            }),
        });
    }),
    w = i.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, l.jsx)(T, { type: t, channelId: n });
    });
var R = n(374200),
    L = n(852218),
    k = n(931664),
    O = n(522602),
    M = n(927578),
    P = n(942381),
    D = n(375499),
    U = n(151271),
    V = n(355622),
    G = n(698279),
    F = n(266599);
let B = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: a } = e,
            [r, o, c, u] = (0, U.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], P.x),
            d = s === V.oU.NORMAL,
            h = i.useCallback(() => {
                (0, U.r$)(G.kx.EMOJI, s, a);
            }, [s, a]);
        return n
            ? null
            : (0, l.jsx)("div", {
                  className: x()(G.VQ, F.UD),
                  ref: t,
                  children: (0, l.jsx)(D.A, {
                      className: F.Z8,
                      onClick: h,
                      active: r === G.kx.EMOJI && o === s && u === a,
                      "aria-controls": c,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: d,
                  }),
              });
    }),
);
var H = n(3203),
    W = n(990078),
    K = n(617617),
    z = n(234320),
    Z = n(767089);
let q = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: r } = e,
            [o, c] = i.useState(!1),
            u = (0, a.bG)(
                [K.A],
                () => o && Object.values(K.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [d, h, m, p] = (0, U.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], P.x),
            g = i.useRef(0),
            _ = i.useCallback(() => {
                c(!0),
                    clearTimeout(g.current),
                    (g.current = setTimeout(() => {
                        c(!1), (g.current = 0);
                    }, 2e3));
            }, []);
        (0, z.Vo)({ event: f.jej.FAVORITE_GIF, handler: _ });
        let C = i.useCallback(() => {
                (0, U.r$)(G.kx.GIF, s, r.id);
            }, [s, r.id]),
            { Component: A, events: E, play: I } = (0, H.V)();
        if (n) return null;
        let v = d === G.kx.GIF && h === s && p === r.id;
        return (0, l.jsx)(W.m, {
            text: N.intl.string(u ? N.t.mE2e8A : N.t.nffuyb),
            shouldShow: u,
            forceOpen: u,
            children: (0, l.jsx)("div", {
                ref: t,
                className: x()(G.VQ, F.UD),
                children: (0, l.jsx)(Z.A, {
                    className: F.x6,
                    onMouseEnter: E.onMouseEnter,
                    onMouseLeave: E.onMouseLeave,
                    onClick: () => {
                        C(), I();
                    },
                    isActive: v,
                    pulse: o,
                    "aria-label": N.intl.string(N.t.PtVpk2),
                    "aria-expanded": v,
                    "aria-haspopup": "dialog",
                    "aria-controls": m,
                    children: (0, l.jsx)(A, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
var J = n(744682);
let Y = { all: { name: "all", start: 0, duration: 66 } },
    $ = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            s = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            a = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            r = i.useCallback(
                (t) =>
                    (0, l.jsx)(J.P, {
                        ...t,
                        src: () => n.e("56591").then(n.t.bind(n, 640114, 19)),
                        ref: e,
                        markers: Y,
                    }),
                [],
            );
        return {
            events: { onMouseEnter: s, onMouseLeave: a },
            play: t,
            getDuration: i.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: r,
        };
    };
var X = n(793574),
    Q = n(688810),
    ee = n(751188),
    et = n(427262);
let en = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: i } = (0, Q.Ay)(X.A.GIFT_BUTTON),
        s = (0, et.R1)(n),
        { Component: a, events: r, play: o } = $(),
        {
            openGiftModal: c,
            shouldShowWishlistModal: u,
            shouldShowGiftSelectionModal: d,
        } = (0, ee.$)({
            giftRecipient: s,
            analyticsLocations: i,
            analyticsObject: {
                page: n.isPrivate() ? f.liQ.DM_CHANNEL : f.liQ.GUILD_CHANNEL,
                section: f.JJy.CHANNEL_TEXT_AREA,
                object: f.ZSU.BUTTON_ICON,
                objectType: f.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button",
        });
    return t
        ? null
        : (0, l.jsx)(W.m, {
              ariaHidden: u || d,
              text: N.intl.string(u || d ? N.t.TW4JV0 : N.t.sWtWDX),
              children: (0, l.jsx)(Z.A, {
                  className: F.x6,
                  isActive: !1,
                  "aria-label": N.intl.string(u || d ? N.t.TW4JV0 : N.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      c(), o();
                  },
                  ...r,
                  children: (0, l.jsx)(a, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
});
var el = n(877624),
    ei = n(554146),
    es = n(604121),
    ea = n(597770),
    er = n(932001),
    eo = n(810498),
    ec = n(338854),
    eu = n(807098),
    ed = n(49999);
function eh(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: s, coachmarkConfig: a, children: r } = e,
        o = (0, eu.T)(a?.asset),
        c = i.useRef(null),
        u = i.useRef(null),
        [d, h] = i.useState(0);
    i.useEffect(() => {
        let e = () => {
                let e = c.current,
                    t = u.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    l = t.getBoundingClientRect();
                h(n.left + n.width / 2 - (l.left + l.width / 2));
            },
            t = new ResizeObserver(e),
            n = c.current,
            l = u.current;
        return null != n && t.observe(n), null != l && (t.observe(l), e()), () => t.disconnect();
    }, []);
    let m = {
        text: N.intl.string(N.t.RzWDqY),
        onClick: () => {
            n(), t(), s(ed.i.TAKE_ACTION);
        },
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: c, children: r }),
            (0, l.jsx)(ec.H, {
                targetElementRef: c,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: a?.header ?? "",
                body: a?.body ?? "",
                assetUrl: o ?? "",
                action: m,
                caretConfig: { align: "custom", customOffset: d },
                onRequestClose: () => {
                    t(), s(ed.i.USER_DISMISS);
                },
                popoverRef: u,
            }),
        ],
    });
}
var em = n(186111),
    ep = n(927813),
    ef = n(935208),
    eg = n(240248),
    e_ = n(849353);
function ex(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, l.jsx)(Z.A, {
        className: F.x6,
        "aria-label": N.intl.string(N.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, l.jsx)("div", {
            className: e_.zc,
            children: e.hovered ? (0, l.jsx)(es.a, { className: e_.Hl, importData: t }) : (0, l.jsx)(ea.o, {}),
        }),
    });
}
function eC(e) {
    let { Component: t, events: n, play: s } = $(),
        a = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        r = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]);
    return (0, l.jsx)(Z.A, {
        className: F.x6,
        "aria-label": N.intl.string(N.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: () => {
            s(), e.onClick?.();
        },
        ...n,
        children: (0, l.jsxs)("div", {
            className: e_.zc,
            children: [
                (0, l.jsx)(t, { className: e_.is, color: "currentColor" }),
                e.hovered &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, l.jsx)(es.a, { className: e_.rY, importData: a }),
                            null != e.trinketGlowAnimationUrl && (0, l.jsx)(es.a, { className: e_.c5, importData: r }),
                        ],
                    }),
            ],
        }),
    });
}
let eA = ep.A.Millis.DAYS_30,
    eE = i.memo(function (e) {
        let { disabled: t, channel: n } = e,
            { analyticsLocations: s } = (0, Q.Ay)(X.A.GIFT_BUTTON),
            [r, o] = i.useState(!1),
            c = (0, a.bG)([em.A], () => !em.A?.hasLayers()),
            u = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
            d = null != u ? ef.default.age(u.id) : 0,
            h = (0, a.bG)([R.A], () => {
                let e = R.A.getMarketingComponentByType(el.C.GIFT_ICON);
                return null == e || "giftIcon" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIcon;
            }),
            m = (0, a.bG)([R.A], () => {
                let e = R.A.getMarketingComponentByType(el.C.GIFT_ICON_COACHMARK);
                return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIconCoachmark;
            }),
            g = h?.gradient,
            _ =
                null != g && null != g.colors && g.colors.length >= 2
                    ? (0, eo.K5)({ gradient: g.colors, angle: g.angle ?? void 0 }, { defaultAngle: 180 })
                    : void 0,
            C = i.useMemo(() => {
                if (_?.background != null) return { "--custom-promotion-gradient": _.background };
            }, [_]),
            A = !(0, eg.uJ)(h?.boxAnimationUrl),
            E = (!(0, eg.uJ)(h?.trinketAnimationUrl) || !(0, eg.uJ)(h?.trinketGlowAnimationUrl)) && !A,
            I = (0, a.bG)([R.A], () => R.A.getGiftPromotion()?.id),
            v = null != m && !t && c && d >= eA && null != I,
            [y, b] = (0, er.Cc)(v ? ei.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, I ?? ""),
            S = null != y,
            N = r || S,
            j = (0, et.R1)(n),
            { openGiftModal: T } = (0, ee.$)({
                giftRecipient: j,
                analyticsLocations: s,
                analyticsObject: {
                    page: n.isPrivate() ? f.liQ.DM_CHANNEL : f.liQ.GUILD_CHANNEL,
                    section: f.JJy.CHANNEL_TEXT_AREA,
                    object: f.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: f.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? f.liQ.DM_CHANNEL : f.liQ.GUILD_CHANNEL,
                    section: f.JJy.CHANNEL_TEXT_AREA,
                    object: f.ZSU.BUTTON_ICON,
                    objectType: f.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        let w = () => {
                o(!1), b(ed.i.TAKE_ACTION), T();
            },
            L =
                A && h?.boxAnimationUrl != null
                    ? (0, l.jsx)(ex, { boxAnimationUrl: h.boxAnimationUrl, hovered: N, onClick: w })
                    : E
                      ? (0, l.jsx)(eC, {
                            trinketAnimationUrl: h?.trinketAnimationUrl ?? null,
                            trinketGlowAnimationUrl: h?.trinketGlowAnimationUrl ?? null,
                            hovered: N,
                            onClick: w,
                        })
                      : (0, l.jsx)(en, { disabled: t, channel: n });
        return (0, l.jsx)("div", {
            className: x()(e_.kL, { [e_.DM]: N }),
            style: C,
            onMouseEnter: () => {
                r || o(!0);
            },
            onMouseLeave: () => {
                o(!1);
            },
            children: S
                ? (0, l.jsx)(eh, {
                      onComplete: () => o(!1),
                      onCheckItOutClick: T,
                      markAsDismissed: b,
                      coachmarkConfig: m,
                      children: L,
                  })
                : L,
        });
    });
var eI = n(559647),
    ev = n(10388);
let ey = i.memo(function (e) {
        let { onClick: t, disabled: n = !1 } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", { className: ev.me }),
                (0, l.jsx)("div", {
                    className: ev.kL,
                    children: (0, l.jsx)("div", {
                        className: ev.UD,
                        children: (0, l.jsx)(Z.A, {
                            className: ev.x6,
                            childClassName: x()(ev.Z4, { [ev.r9]: n, [ev.xb]: !n }),
                            onClick: t,
                            disabled: n,
                            isActive: !1,
                            noHover: n,
                            "aria-label": N.intl.string(N.t.oeb1vg),
                            children: (0, l.jsx)(eI.l, { size: "xs", color: "currentColor", className: ev.AO }),
                        }),
                    }),
                }),
            ],
        });
    }),
    eb = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    eS = i.memo(
        i.forwardRef(function (e, t) {
            let s,
                a,
                r,
                o,
                c,
                { disabled: u, type: d, channel: h } = e,
                [m, p, f, g] = (0, U.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], P.x),
                _ = m === G.kx.STICKER && g === d && f === h.id,
                C = i.useCallback(() => {
                    (0, U.r$)(G.kx.STICKER, d, h.id);
                }, [d, h.id]),
                {
                    Component: A,
                    events: E,
                    play: I,
                } = ((s = i.useRef(null)),
                (a = i.useCallback(() => {
                    null != s.current && s.current.play("click");
                }, [])),
                (r = i.useCallback(() => {
                    null != s.current && s.current.play("hover");
                }, [])),
                (o = i.useCallback(() => {
                    null != s.current && s.current.stopIfPlaying("hover");
                }, [])),
                (c = i.useCallback(
                    (e) =>
                        (0, l.jsx)(J.P, {
                            ...e,
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: s,
                            markers: eb,
                        }),
                    [],
                )),
                {
                    events: { onMouseEnter: r, onMouseLeave: o },
                    play: a,
                    getDuration: i.useCallback(() => s.current?.getDuration(), []),
                    getCurrentFrame: i.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                    Component: c,
                });
            return u
                ? null
                : (0, l.jsx)("div", {
                      className: x()(G.VQ, F.UD),
                      ref: t,
                      children: (0, l.jsx)(Z.A, {
                          className: x()(F.x6, F.KE),
                          ...E,
                          onClick: () => {
                              C(), I();
                          },
                          isActive: _,
                          "aria-label": N.intl.string(N.t.rZpidU),
                          "aria-expanded": _,
                          "aria-haspopup": "dialog",
                          "aria-controls": p,
                          sparkle: !1,
                          children: (0, l.jsx)(A, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  });
        }),
    );
function eN(e) {
    let { disabled: t, channel: n } = e;
    return (0, a.bG)([R.A], () => Object.keys(R.A.promotionsByType[L.pt.GIFT_PROMOTION]).length > 0)
        ? (0, l.jsx)(eE, { disabled: t, channel: n })
        : (0, l.jsx)(en, { disabled: t, channel: n });
}
let ej = i.memo(function (e) {
    var t, n, i;
    let { type: _, disabled: x, channel: C, handleSubmit: A, isEmpty: E, showAllButtons: I } = e,
        v = (0, a.bG)([o.A], () => o.A.isSubmitButtonEnabled),
        y =
            ((t = C.id),
            (n = _),
            (i = E),
            (0, a.bG)([k.A, O.A], () => {
                let e = k.A.getStickerPreview(t, n.drafts.type),
                    l = null != e && e.length > 0;
                return 0 === O.A.getUploads(t, n.drafts.type).length && i && !l;
            })),
        { activeCommand: b, activeCommandOption: S } = (0, a.cf)([c.A], () => ({
            activeCommand: c.A.getActiveCommand(C.id),
            activeCommandOption: c.A.getActiveOption(C.id),
        })),
        N = (0, g.dw)(),
        j = [],
        T = !C.isDM() || void 0 === C.recipients || C.recipients.length > 1,
        R = (0, a.bG)([p.default], () => (T ? null : p.default.getUser(C.recipients[0]))),
        L = (function (e) {
            let { channel: t, chatInputType: n } = e,
                l = n.commands?.enabled ?? !1,
                i = (function (e) {
                    let t = e.getGuildId(),
                        n = (0, a.bG)([h.Ay, p.default], () => {
                            let e = p.default.getCurrentUser();
                            return (null != t && null != e ? h.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                        }),
                        { messagesDisabled: l } = (0, a.cf)([m.A], () => {
                            let t = e.isPrivate(),
                                l = m.A.computePermissions(e),
                                i = u.zy(l, f.xBc.SEND_MESSAGES),
                                s = (0, d.UJ)(e);
                            return { messagesDisabled: n || (!t && !i) || s };
                        }, [e, n]);
                    return !l;
                })(t),
                { activeCommand: s } = (0, a.cf)([c.A], () => ({
                    activeCommand: l ? c.A.getActiveCommand(t.id) : null,
                }));
            return l && i && null == s;
        })({ channel: C, chatInputType: _ }),
        P = _.submit?.button != null && (_.submit?.ignorePreference || v);
    return (!s.Fr &&
        (_.gifts?.button != null &&
            null == b &&
            !N &&
            (null == R || M.Ay.isPremiumEligible(R)) &&
            j.push((0, l.jsx)(eN, { disabled: x, channel: C }, "gift")),
        _.gifs?.button != null && null == b && I && j.push((0, l.jsx)(q, { disabled: x, type: _, channel: C }, "gif")),
        _.stickers?.button != null &&
            null == b &&
            I &&
            j.push((0, l.jsx)(eS, { disabled: x, type: _, channel: C }, "sticker"))),
    _.emojis?.button != null &&
        (null == b || (null != S && S.type !== r.n4.ATTACHMENT)) &&
        j.push((0, l.jsx)(B, { disabled: x, type: _, channelId: C.id }, "emoji")),
    L && j.push((0, l.jsx)(w, { channelId: C.id, type: _ }, "appLauncher")),
    P && j.push((0, l.jsx)(ey, { onClick: A, disabled: x || y }, "submit")),
    0 === j.length)
        ? null
        : (0, l.jsx)("div", { className: F.Uo, children: j });
});
