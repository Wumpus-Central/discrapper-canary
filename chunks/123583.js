"use strict";
n.d(t, { A: () => en }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(607399),
    r = n(17928),
    a = n(155718),
    o = n(775602),
    u = n(861382),
    c = n(136722),
    d = n(406704),
    h = n(696451),
    m = n(576705),
    f = n(287809),
    p = n(652215),
    g = n(86379),
    x = n(503698),
    A = n.n(x),
    C = n(939249),
    E = n(697744),
    I = n(795816),
    y = n(211401),
    v = n(989837),
    S = n(500049),
    N = n(598071),
    _ = n(60809),
    T = n(375708),
    j = n(431008);
let b = i.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            a = (0, r.bG)(
                [v.A],
                () => v.A.shouldShowPopup() && v.A.activeViewType() === n && v.A.activeChannelId() === s,
            ),
            { Component: o, events: u, play: c } = (0, E.c)(),
            d = i.useContext(N.Ay);
        i.useEffect(() => {
            function e() {
                u.onMouseEnter();
            }
            return (
                d.on("command-sentinel-typed", e),
                () => {
                    d.off("command-sentinel-typed", e);
                }
            );
        }, [d, u]);
        let h = i.useCallback(() => {
                a ? y.k(S.Se.DISMISSED) : (y.R(S.s4.TEXT, n, void 0, s), I.LK()), c();
            }, [a, n, s, c]),
            m = (0, l.jsx)(o, { size: "refresh_sm", color: "currentColor" });
        return (0, l.jsx)("div", {
            className: A()(j.UD, _.KG),
            ref: t,
            children: (0, l.jsx)(C.D, {
                tabIndex: 0,
                className: A()(j.x6, { [j.rK]: a }),
                onClick: h,
                "aria-label": T.intl.string(T.t.erHFxI),
                "aria-expanded": a,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...u,
                children: m,
            }),
        });
    }),
    R = i.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, l.jsx)(b, { type: t, channelId: n });
    });
var O = n(931664),
    M = n(951260),
    w = n(522602),
    L = n(158045),
    k = n(462180),
    P = n(375499),
    D = n(151271),
    U = n(355622),
    G = n(698279),
    V = n(857983);
let F = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: r } = e,
            [a, o, u, c] = (0, D.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], k.x),
            d = s === U.oU.NORMAL,
            h = i.useCallback(() => {
                (0, D.r$)(G.kx.EMOJI, s, r);
            }, [s, r]);
        return n
            ? null
            : (0, l.jsx)("div", {
                  className: A()(G.VQ, V.UD),
                  ref: t,
                  children: (0, l.jsx)(P.A, {
                      className: V.Z8,
                      onClick: h,
                      active: a === G.kx.EMOJI && o === s && c === r,
                      "aria-controls": u,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: d,
                  }),
              });
    }),
);
var H = n(530134),
    B = n(3203),
    W = n(866665),
    K = n(617617),
    z = n(234320),
    Z = n(767089);
let Y = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: a } = e,
            [o, u] = i.useState(!1),
            c = (0, r.bG)(
                [K.A],
                () => o && Object.values(K.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [d, h, m, f] = (0, D.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], k.x),
            g = i.useRef(0),
            x = i.useCallback(() => {
                u(!0),
                    clearTimeout(g.current),
                    (g.current = setTimeout(() => {
                        u(!1), (g.current = 0);
                    }, 2e3));
            }, []);
        (0, z.Vo)({ event: p.jej.FAVORITE_GIF, handler: x });
        let C = i.useCallback(() => {
                (0, D.r$)(G.kx.GIF, s, a.id);
            }, [s, a.id]),
            { Component: E, events: I, play: y } = (0, B.V)();
        if (n) return null;
        let v = d === G.kx.GIF && h === s && f === a.id;
        return (0, l.jsx)(W.m, {
            text: T.intl.string(c ? T.t.mE2e8A : T.t.nffuyb),
            shouldShow: c,
            forceOpen: c,
            children: (0, l.jsx)("div", {
                ref: t,
                className: A()(G.VQ, V.UD),
                children: (0, l.jsx)(Z.A, {
                    className: V.x6,
                    onMouseEnter: I.onMouseEnter,
                    onMouseLeave: I.onMouseLeave,
                    onClick: () => {
                        C(), y();
                    },
                    isActive: v,
                    pulse: o,
                    "aria-label": T.intl.string(T.t.PtVpk2),
                    "aria-expanded": v,
                    "aria-haspopup": "dialog",
                    "aria-controls": m,
                    children: (0, l.jsx)(E, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
var q = n(365990),
    J = n(559647),
    $ = n(773548);
let X = i.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: $.me }),
            (0, l.jsx)("div", {
                className: $.kL,
                children: (0, l.jsx)("div", {
                    className: $.UD,
                    children: (0, l.jsx)(Z.A, {
                        className: $.x6,
                        childClassName: A()($.Z4, { [$.r9]: n, [$.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": T.intl.string(T.t.oeb1vg),
                        children: (0, l.jsx)(J.SendMessageIcon, { size: "xs", color: "currentColor", className: $.AO }),
                    }),
                }),
            }),
        ],
    });
});
var Q = n(744682);
let ee = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    et = i.memo(
        i.forwardRef(function (e, t) {
            let s,
                r,
                a,
                o,
                u,
                { disabled: c, type: d, channel: h } = e,
                [m, f, p, g] = (0, D.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], k.x),
                x = m === G.kx.STICKER && g === d && p === h.id,
                C = i.useCallback(() => {
                    (0, D.r$)(G.kx.STICKER, d, h.id);
                }, [d, h.id]),
                {
                    Component: E,
                    events: I,
                    play: y,
                } = ((s = i.useRef(null)),
                (r = i.useCallback(() => {
                    null != s.current && s.current.play("click");
                }, [])),
                (a = i.useCallback(() => {
                    null != s.current && s.current.play("hover");
                }, [])),
                (o = i.useCallback(() => {
                    null != s.current && s.current.stopIfPlaying("hover");
                }, [])),
                (u = i.useCallback(
                    (e) =>
                        (0, l.jsx)(Q.P, {
                            ...e,
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: s,
                            markers: ee,
                        }),
                    [],
                )),
                {
                    events: { onMouseEnter: a, onMouseLeave: o },
                    play: r,
                    getDuration: i.useCallback(() => s.current?.getDuration(), []),
                    getCurrentFrame: i.useCallback(() => s.current?.getCurrentFrame() ?? null, []),
                    Component: u,
                });
            return c
                ? null
                : (0, l.jsx)("div", {
                      className: A()(G.VQ, V.UD),
                      ref: t,
                      children: (0, l.jsx)(Z.A, {
                          className: A()(V.x6, V.KE),
                          ...I,
                          onClick: () => {
                              C(), y();
                          },
                          isActive: x,
                          "aria-label": T.intl.string(T.t.rZpidU),
                          "aria-expanded": x,
                          "aria-haspopup": "dialog",
                          "aria-controls": f,
                          sparkle: !1,
                          children: (0, l.jsx)(E, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  });
        }),
    ),
    en = i.memo(function (e) {
        var t, n, i;
        let {
                type: x,
                disabled: A,
                channel: C,
                handleSubmit: E,
                isEmpty: I,
                showAllButtons: y,
                expressionButtonsHidden: v,
            } = e,
            S = (0, M.n)("ChannelTextAreaButtons"),
            N = (0, r.cf)([o.Ay], () => ({
                isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
                isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
                isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
                isGifButtonEnabled: o.Ay.isGifButtonEnabled,
                isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
            })),
            _ = N.isSubmitButtonEnabled,
            T = !S || N.isAppsButtonEnabled,
            j = !S || N.isEmojiButtonEnabled,
            b = !S || N.isGifButtonEnabled,
            k = !S || N.isStickerButtonEnabled,
            P =
                ((t = C.id),
                (n = x),
                (i = I),
                (0, r.bG)([O.A, w.A], () => {
                    let e = O.A.getStickerPreview(t, n.drafts.type),
                        l = null != e && e.length > 0;
                    return 0 === w.A.getUploads(t, n.drafts.type).length && i && !l;
                })),
            { activeCommand: D, activeCommandOption: U } = (0, r.cf)([u.A], () => ({
                activeCommand: u.A.getActiveCommand(C.id),
                activeCommandOption: u.A.getActiveOption(C.id),
            })),
            G = (0, g.dw)(),
            B = [],
            W = !C.isDM() || void 0 === C.recipients || C.recipients.length > 1,
            K = (0, r.bG)([f.default], () => (W ? null : f.default.getUser(C.recipients[0]))),
            z = (function (e) {
                let { channel: t, chatInputType: n } = e,
                    l = n.commands?.enabled ?? !1,
                    i = (function (e) {
                        let t = e.getGuildId(),
                            n = (0, r.bG)([h.Ay, f.default], () => {
                                let e = f.default.getCurrentUser();
                                return (null != t && null != e ? h.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                            }),
                            { messagesDisabled: l } = (0, r.cf)([m.A], () => {
                                let t = e.isPrivate(),
                                    l = m.A.computePermissions(e),
                                    i = c.zy(l, p.xBc.SEND_MESSAGES),
                                    s = (0, d.UJ)(e);
                                return { messagesDisabled: n || (!t && !i) || s };
                            }, [e, n]);
                        return !l;
                    })(t),
                    { activeCommand: s } = (0, r.cf)([u.A], () => ({
                        activeCommand: l ? u.A.getActiveCommand(t.id) : null,
                    }));
                return l && i && null == s;
            })({ channel: C, chatInputType: x }),
            Z = x.submit?.button != null && (x.submit?.ignorePreference || _),
            J = null == D || (null != U && U.type !== a.n4.ATTACHMENT);
        return (!s.Fr &&
            (x.gifts?.button != null &&
                null == D &&
                !G &&
                (null == K || L.Ay.isPremiumEligible(K)) &&
                B.push((0, l.jsx)(q.A, { disabled: A, channel: C }, "gift")),
            x.gifs?.button != null &&
                null == D &&
                y &&
                b &&
                !v &&
                B.push((0, l.jsx)(Y, { disabled: A, type: x, channel: C }, "gif")),
            x.stickers?.button != null &&
                null == D &&
                y &&
                k &&
                !v &&
                B.push((0, l.jsx)(et, { disabled: A, type: x, channel: C }, "sticker"))),
        x.emojis?.button != null &&
            !v &&
            J &&
            (y || v
                ? j && B.push((0, l.jsx)(F, { disabled: A, type: x, channelId: C.id }, "emoji"))
                : B.push((0, l.jsx)(H.A, { disabled: A, type: x, channel: C }, "expression"))),
        z && T && B.push((0, l.jsx)(R, { channelId: C.id, type: x }, "appLauncher")),
        Z && B.push((0, l.jsx)(X, { onClick: E, disabled: A || P }, "submit")),
        0 === B.length)
            ? null
            : (0, l.jsx)("div", { className: V.Uo, children: B });
    });
