"use strict";
n.d(t, { A: () => en }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(607399),
    s = n(17928),
    l = n(155718),
    o = n(775602),
    d = n(861382),
    c = n(136722),
    u = n(406704),
    _ = n(696451),
    E = n(576705),
    A = n(287809),
    h = n(652215),
    I = n(86379),
    f = n(503698),
    p = n.n(f),
    T = n(939249),
    m = n(697744),
    g = n(795816),
    S = n(211401),
    N = n(989837),
    C = n(500049),
    R = n(598071),
    O = n(60809),
    L = n(375708),
    D = n(224840);
let y = r.forwardRef(function (e, t) {
        let { type: n, channelId: a } = e,
            l = (0, s.bG)(
                [N.A],
                () => N.A.shouldShowPopup() && N.A.activeViewType() === n && N.A.activeChannelId() === a,
            ),
            { Component: o, events: d, play: c } = (0, m.c)(),
            u = r.useContext(R.Ay);
        r.useEffect(() => {
            function e() {
                d.onMouseEnter();
            }
            return (
                u.on("command-sentinel-typed", e),
                () => {
                    u.off("command-sentinel-typed", e);
                }
            );
        }, [u, d]);
        let _ = r.useCallback(() => {
                l ? S.k(C.Se.DISMISSED) : (S.R(C.s4.TEXT, n, void 0, a), g.LK()), c();
            }, [l, n, a, c]),
            E = (0, i.jsx)(o, { size: "refresh_sm", color: "currentColor" });
        return (0, i.jsx)("div", {
            className: p()(D.UD, O.KG),
            ref: t,
            children: (0, i.jsx)(T.D, {
                tabIndex: 0,
                className: p()(D.x6, { [D.rK]: l }),
                onClick: _,
                "aria-label": L.intl.string(L.t.erHFxI),
                "aria-expanded": l,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...d,
                children: E,
            }),
        });
    }),
    v = r.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, i.jsx)(y, { type: t, channelId: n });
    });
var b = n(931664),
    M = n(951260),
    P = n(522602),
    U = n(428262),
    w = n(942381),
    G = n(375499),
    x = n(151271),
    k = n(355622),
    F = n(698279),
    V = n(266599);
let B = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: a, channelId: s } = e,
            [l, o, d, c] = (0, x.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], w.x),
            u = a === k.oU.NORMAL,
            _ = r.useCallback(() => {
                (0, x.r$)(F.kx.EMOJI, a, s);
            }, [a, s]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: p()(F.VQ, V.UD),
                  ref: t,
                  children: (0, i.jsx)(G.A, {
                      className: V.Z8,
                      onClick: _,
                      active: l === F.kx.EMOJI && o === a && c === s,
                      "aria-controls": d,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: u,
                  }),
              });
    }),
);
var H = n(530134),
    j = n(3203),
    W = n(990078),
    Y = n(617617),
    K = n(234320),
    $ = n(767089);
let z = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: a, channel: l } = e,
            [o, d] = r.useState(!1),
            c = (0, s.bG)(
                [Y.A],
                () => o && Object.values(Y.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [u, _, E, A] = (0, x.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], w.x),
            I = r.useRef(0),
            f = r.useCallback(() => {
                d(!0),
                    clearTimeout(I.current),
                    (I.current = setTimeout(() => {
                        d(!1), (I.current = 0);
                    }, 2e3));
            }, []);
        (0, K.Vo)({ event: h.jej.FAVORITE_GIF, handler: f });
        let T = r.useCallback(() => {
                (0, x.r$)(F.kx.GIF, a, l.id);
            }, [a, l.id]),
            { Component: m, events: g, play: S } = (0, j.V)();
        if (n) return null;
        let N = u === F.kx.GIF && _ === a && A === l.id;
        return (0, i.jsx)(W.m, {
            text: L.intl.string(c ? L.t.mE2e8A : L.t.nffuyb),
            shouldShow: c,
            forceOpen: c,
            children: (0, i.jsx)("div", {
                ref: t,
                className: p()(F.VQ, V.UD),
                children: (0, i.jsx)($.A, {
                    className: V.x6,
                    onMouseEnter: g.onMouseEnter,
                    onMouseLeave: g.onMouseLeave,
                    onClick: () => {
                        T(), S();
                    },
                    isActive: N,
                    pulse: o,
                    "aria-label": L.intl.string(L.t.PtVpk2),
                    "aria-expanded": N,
                    "aria-haspopup": "dialog",
                    "aria-controls": E,
                    children: (0, i.jsx)(m, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
var q = n(365990),
    Z = n(559647),
    X = n(10388);
let Q = r.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: X.me }),
            (0, i.jsx)("div", {
                className: X.kL,
                children: (0, i.jsx)("div", {
                    className: X.UD,
                    children: (0, i.jsx)($.A, {
                        className: X.x6,
                        childClassName: p()(X.Z4, { [X.r9]: n, [X.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": L.intl.string(L.t.oeb1vg),
                        children: (0, i.jsx)(Z.l, { size: "xs", color: "currentColor", className: X.AO }),
                    }),
                }),
            }),
        ],
    });
});
var J = n(744682);
let ee = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    et = r.memo(
        r.forwardRef(function (e, t) {
            let a,
                s,
                l,
                o,
                d,
                { disabled: c, type: u, channel: _ } = e,
                [E, A, h, I] = (0, x.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], w.x),
                f = E === F.kx.STICKER && I === u && h === _.id,
                T = r.useCallback(() => {
                    (0, x.r$)(F.kx.STICKER, u, _.id);
                }, [u, _.id]),
                {
                    Component: m,
                    events: g,
                    play: S,
                } = ((a = r.useRef(null)),
                (s = r.useCallback(() => {
                    null != a.current && a.current.play("click");
                }, [])),
                (l = r.useCallback(() => {
                    null != a.current && a.current.play("hover");
                }, [])),
                (o = r.useCallback(() => {
                    null != a.current && a.current.stopIfPlaying("hover");
                }, [])),
                (d = r.useCallback(
                    (e) =>
                        (0, i.jsx)(J.P, {
                            ...e,
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: a,
                            markers: ee,
                        }),
                    [],
                )),
                {
                    events: { onMouseEnter: l, onMouseLeave: o },
                    play: s,
                    getDuration: r.useCallback(() => a.current?.getDuration(), []),
                    getCurrentFrame: r.useCallback(() => a.current?.getCurrentFrame() ?? null, []),
                    Component: d,
                });
            return c
                ? null
                : (0, i.jsx)("div", {
                      className: p()(F.VQ, V.UD),
                      ref: t,
                      children: (0, i.jsx)($.A, {
                          className: p()(V.x6, V.KE),
                          ...g,
                          onClick: () => {
                              T(), S();
                          },
                          isActive: f,
                          "aria-label": L.intl.string(L.t.rZpidU),
                          "aria-expanded": f,
                          "aria-haspopup": "dialog",
                          "aria-controls": A,
                          sparkle: !1,
                          children: (0, i.jsx)(m, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  });
        }),
    ),
    en = r.memo(function (e) {
        var t, n, r;
        let {
                type: f,
                disabled: p,
                channel: T,
                handleSubmit: m,
                isEmpty: g,
                showAllButtons: S,
                expressionButtonsHidden: N,
            } = e,
            C = (0, M.n)("ChannelTextAreaButtons"),
            R = (0, s.cf)([o.Ay], () => ({
                isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
                isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
                isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
                isGifButtonEnabled: o.Ay.isGifButtonEnabled,
                isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
            })),
            O = R.isSubmitButtonEnabled,
            L = !C || R.isAppsButtonEnabled,
            D = !C || R.isEmojiButtonEnabled,
            y = !C || R.isGifButtonEnabled,
            w = !C || R.isStickerButtonEnabled,
            G =
                ((t = T.id),
                (n = f),
                (r = g),
                (0, s.bG)([b.A, P.A], () => {
                    let e = b.A.getStickerPreview(t, n.drafts.type),
                        i = null != e && e.length > 0;
                    return 0 === P.A.getUploads(t, n.drafts.type).length && r && !i;
                })),
            { activeCommand: x, activeCommandOption: k } = (0, s.cf)([d.A], () => ({
                activeCommand: d.A.getActiveCommand(T.id),
                activeCommandOption: d.A.getActiveOption(T.id),
            })),
            F = (0, I.dw)(),
            j = [],
            W = !T.isDM() || void 0 === T.recipients || T.recipients.length > 1,
            Y = (0, s.bG)([A.default], () => (W ? null : A.default.getUser(T.recipients[0]))),
            K = (function (e) {
                let { channel: t, chatInputType: n } = e,
                    i = n.commands?.enabled ?? !1,
                    r = (function (e) {
                        let t = e.getGuildId(),
                            n = (0, s.bG)([_.Ay, A.default], () => {
                                let e = A.default.getCurrentUser();
                                return (null != t && null != e ? _.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                            }),
                            { messagesDisabled: i } = (0, s.cf)([E.A], () => {
                                let t = e.isPrivate(),
                                    i = E.A.computePermissions(e),
                                    r = c.zy(i, h.xBc.SEND_MESSAGES),
                                    a = (0, u.UJ)(e);
                                return { messagesDisabled: n || (!t && !r) || a };
                            }, [e, n]);
                        return !i;
                    })(t),
                    { activeCommand: a } = (0, s.cf)([d.A], () => ({
                        activeCommand: i ? d.A.getActiveCommand(t.id) : null,
                    }));
                return i && r && null == a;
            })({ channel: T, chatInputType: f }),
            $ = f.submit?.button != null && (f.submit?.ignorePreference || O),
            Z = null == x || (null != k && k.type !== l.n4.ATTACHMENT);
        return (!a.Fr &&
            (f.gifts?.button != null &&
                null == x &&
                !F &&
                (null == Y || U.Ay.isPremiumEligible(Y)) &&
                j.push((0, i.jsx)(q.A, { disabled: p, channel: T }, "gift")),
            f.gifs?.button != null &&
                null == x &&
                S &&
                y &&
                !N &&
                j.push((0, i.jsx)(z, { disabled: p, type: f, channel: T }, "gif")),
            f.stickers?.button != null &&
                null == x &&
                S &&
                w &&
                !N &&
                j.push((0, i.jsx)(et, { disabled: p, type: f, channel: T }, "sticker"))),
        f.emojis?.button != null &&
            !N &&
            Z &&
            (S || N
                ? D && j.push((0, i.jsx)(B, { disabled: p, type: f, channelId: T.id }, "emoji"))
                : j.push((0, i.jsx)(H.A, { disabled: p, type: f, channel: T }, "expression"))),
        K && L && j.push((0, i.jsx)(v, { channelId: T.id, type: f }, "appLauncher")),
        $ && j.push((0, i.jsx)(Q, { onClick: m, disabled: p || G }, "submit")),
        0 === j.length)
            ? null
            : (0, i.jsx)("div", { className: V.Uo, children: j });
    });
