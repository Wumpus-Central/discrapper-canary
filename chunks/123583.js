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
    E = n(939249),
    C = n(697744),
    I = n(795816),
    y = n(211401),
    S = n(989837),
    N = n(500049),
    v = n(598071),
    _ = n(60809),
    T = n(375708),
    j = n(215837);
let b = i.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            a = (0, r.bG)(
                [S.A],
                () => S.A.shouldShowPopup() && S.A.activeViewType() === n && S.A.activeChannelId() === s,
            ),
            { Component: o, events: u, play: c } = (0, C.c)(),
            d = i.useContext(v.Ay);
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
                a ? y.k(N.Se.DISMISSED) : (y.R(N.s4.TEXT, n, void 0, s), I.LK()), c();
            }, [a, n, s, c]),
            m = (0, l.jsx)(o, { size: "refresh_sm", color: "currentColor" });
        return (0, l.jsx)("div", {
            className: A()(j.UD, _.KG),
            ref: t,
            children: (0, l.jsx)(E.D, {
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
    L = n(522602),
    k = n(158045),
    w = n(462180),
    P = n(375499),
    D = n(151271),
    U = n(355622),
    G = n(698279),
    V = n(495088);
let F = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: r } = e,
            [a, o, u, c] = (0, D.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], w.x),
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
            [d, h, m, f] = (0, D.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], w.x),
            g = i.useRef(0),
            x = i.useCallback(() => {
                u(!0),
                    clearTimeout(g.current),
                    (g.current = setTimeout(() => {
                        u(!1), (g.current = 0);
                    }, 2e3));
            }, []);
        (0, z.Vo)({ event: p.jej.FAVORITE_GIF, handler: x });
        let E = i.useCallback(() => {
                (0, D.r$)(G.kx.GIF, s, a.id);
            }, [s, a.id]),
            { Component: C, events: I, play: y } = (0, B.V)();
        if (n) return null;
        let S = d === G.kx.GIF && h === s && f === a.id;
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
                        E(), y();
                    },
                    isActive: S,
                    pulse: o,
                    "aria-label": T.intl.string(T.t.PtVpk2),
                    "aria-expanded": S,
                    "aria-haspopup": "dialog",
                    "aria-controls": m,
                    children: (0, l.jsx)(C, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
var q = n(365990),
    J = n(559647),
    $ = n(757261);
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
                [m, f, p, g] = (0, D.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], w.x),
                x = m === G.kx.STICKER && g === d && p === h.id,
                E = i.useCallback(() => {
                    (0, D.r$)(G.kx.STICKER, d, h.id);
                }, [d, h.id]),
                {
                    Component: C,
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
                              E(), y();
                          },
                          isActive: x,
                          "aria-label": T.intl.string(T.t.rZpidU),
                          "aria-expanded": x,
                          "aria-haspopup": "dialog",
                          "aria-controls": f,
                          sparkle: !1,
                          children: (0, l.jsx)(C, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  });
        }),
    ),
    en = i.memo(function (e) {
        var t, n, i;
        let {
                type: x,
                disabled: A,
                channel: E,
                handleSubmit: C,
                isEmpty: I,
                showAllButtons: y,
                expressionButtonsHidden: S,
            } = e,
            N = (0, M.n)("ChannelTextAreaButtons"),
            v = (0, r.cf)([o.Ay], () => ({
                isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
                isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
                isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
                isGifButtonEnabled: o.Ay.isGifButtonEnabled,
                isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
            })),
            _ = v.isSubmitButtonEnabled,
            T = !N || v.isAppsButtonEnabled,
            j = !N || v.isEmojiButtonEnabled,
            b = !N || v.isGifButtonEnabled,
            w = !N || v.isStickerButtonEnabled,
            P =
                ((t = E.id),
                (n = x),
                (i = I),
                (0, r.bG)([O.A, L.A], () => {
                    let e = O.A.getStickerPreview(t, n.drafts.type),
                        l = null != e && e.length > 0;
                    return 0 === L.A.getUploads(t, n.drafts.type).length && i && !l;
                })),
            { activeCommand: D, activeCommandOption: U } = (0, r.cf)([u.A], () => ({
                activeCommand: u.A.getActiveCommand(E.id),
                activeCommandOption: u.A.getActiveOption(E.id),
            })),
            G = (0, g.dw)(),
            B = [],
            W = !E.isDM() || void 0 === E.recipients || E.recipients.length > 1,
            K = (0, r.bG)([f.default], () => (W ? null : f.default.getUser(E.recipients[0]))),
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
            })({ channel: E, chatInputType: x }),
            Z = x.submit?.button != null && (x.submit?.ignorePreference || _),
            J = null == D || (null != U && U.type !== a.n4.ATTACHMENT);
        return (!s.Fr &&
            (x.gifts?.button != null &&
                null == D &&
                !G &&
                (null == K || k.Ay.isPremiumEligible(K)) &&
                B.push((0, l.jsx)(q.A, { disabled: A, channel: E }, "gift")),
            x.gifs?.button != null &&
                null == D &&
                y &&
                b &&
                !S &&
                B.push((0, l.jsx)(Y, { disabled: A, type: x, channel: E }, "gif")),
            x.stickers?.button != null &&
                null == D &&
                y &&
                w &&
                !S &&
                B.push((0, l.jsx)(et, { disabled: A, type: x, channel: E }, "sticker"))),
        x.emojis?.button != null &&
            !S &&
            J &&
            (y || S
                ? j && B.push((0, l.jsx)(F, { disabled: A, type: x, channelId: E.id }, "emoji"))
                : B.push((0, l.jsx)(H.A, { disabled: A, type: x, channel: E }, "expression"))),
        z && T && B.push((0, l.jsx)(R, { channelId: E.id, type: x }, "appLauncher")),
        Z && B.push((0, l.jsx)(X, { onClick: C, disabled: A || P }, "submit")),
        0 === B.length)
            ? null
            : (0, l.jsx)("div", { className: V.Uo, children: B });
    });
