(n.d(t, { A: () => ed }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(607399),
    s = n(855986),
    a = n(155718),
    o = n(775602),
    u = n(861382),
    c = n(167074),
    d = n(86379),
    h = n(503698),
    m = n.n(h),
    f = n(697744),
    p = n(939249),
    g = n(795816),
    x = n(211401),
    E = n(989837),
    y = n(500049),
    S = n(598071),
    A = n(60809),
    C = n(792996),
    I = n(215837);
let b = function (e) {
        let { type: t, channelId: n, ref: r } = e,
            a = (0, s.bG)(
                [E.A],
                () => E.A.shouldShowPopup() && E.A.activeViewType() === t && E.A.activeChannelId() === n,
            ),
            { Component: o, events: u, play: c } = (0, f.c)(),
            d = i.useContext(S.Ay);
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
                (a ? x.k(y.Se.DISMISSED) : (x.R(y.s4.TEXT, t, void 0, n), g.LK()), c());
            }, [a, t, n, c]),
            b = (0, l.jsx)(o, { size: "refresh_sm", color: "currentColor" });
        return (0, l.jsx)("div", {
            className: m()(I.UD, A.KG),
            ref: r,
            children: (0, l.jsx)(p.D, {
                tabIndex: 0,
                className: m()(I.x6, { [I.rK]: a }),
                onClick: h,
                "aria-label": C.intl.string(C.t.erHFxI),
                "aria-expanded": a,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...u,
                children: b,
            }),
        });
    },
    v = i.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, l.jsx)(b, { type: t, channelId: n });
    });
var N = n(931664),
    j = n(951260),
    T = n(87207),
    k = n(188567),
    _ = n(709372),
    O = n(841817),
    R = n(652215),
    w = n(522602),
    M = n(287809),
    L = n(448645),
    P = n(462180),
    D = n(375499),
    U = n(554146),
    V = n(43105),
    F = n(263775),
    W = n(151271),
    B = n(490035),
    G = n(49999),
    K = n(698279),
    H = n(236432),
    z = n(298079);
function q(e) {
    let { targetElementRef: t, type: n, channelId: r } = e,
        a = (0, s.bG)([o.Ay], () => o.Ay.useReducedMotion),
        u = (0, B.H)("DefaultEmojisPopover"),
        c = (0, W.RQ)((e) => null != e.activeView),
        [d, h] = (0, F.kn)(u && !c ? [U.M.DEFAULT_EMOJIS_POPOVER] : []),
        m = d === U.M.DEFAULT_EMOJIS_POPOVER,
        f = i.useCallback(() => {
            (h(G.i.TAKE_ACTION), (0, W.bf)(K.kx.EMOJI, n, r, { showEmojiPacks: !0 }));
        }, [h, n, r]),
        p = i.useCallback(() => {
            h(G.i.USER_DISMISS);
        }, [h]);
    return m
        ? (0, l.jsx)(V.A, {
              targetElementRef: t,
              graphic: {
                  type: "image",
                  src: a
                      ? z.A
                      : "https://cdn.discordapp.com/assets/content/31005fc3700808e96f5863cc2e9396930e592fdffcd85e1ec942d10c8b3fc2c9.webp",
                  aspectRatio: "6/4",
              },
              badge: { type: "beta", variant: "expressive" },
              position: "top",
              alignmentStrategy: "trigger-center",
              caretConfig: { align: "end" },
              title: C.intl.string(H.default["6mcVBm"]),
              body: C.intl.string(H.default.RhpNnh),
              gradientColor: "nitro-pink",
              onRequestClose: p,
              actions: [{ text: C.intl.string(H.default.HtUpwy), onClick: f }],
          })
        : null;
}
var $ = n(355622),
    J = n(495088);
let Z = i.memo(function (e) {
    let { disabled: t, type: n, channelId: r, ref: s } = e,
        [a, o, u, c] = (0, W.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], P.x),
        d = n === $.oU.NORMAL,
        h = i.useRef(null),
        f = i.useCallback(() => {
            (0, W.r$)(K.kx.EMOJI, n, r);
        }, [n, r]);
    return t
        ? null
        : (0, l.jsxs)("div", {
              className: m()(K.VQ, J.UD),
              ref: s,
              children: [
                  (0, l.jsx)(D.A, {
                      ref: h,
                      className: J.Z8,
                      onClick: f,
                      active: a === K.kx.EMOJI && o === n && c === r,
                      "aria-controls": u,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: d,
                  }),
                  d && (0, l.jsx)(q, { targetElementRef: h, type: n, channelId: r }),
              ],
          });
});
var Q = n(530134),
    X = n(3203),
    Y = n(866665),
    ee = n(617617),
    et = n(234320),
    en = n(243185);
let el = i.memo(function (e) {
    let { disabled: t, type: n, channel: r, ref: a } = e,
        [o, u] = i.useState(!1),
        c = (0, s.bG)(
            [ee.A],
            () => o && Object.values(ee.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
        ),
        [d, h, f, p] = (0, W.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], P.x),
        g = i.useRef(0),
        x = i.useCallback(() => {
            (u(!0),
                clearTimeout(g.current),
                (g.current = setTimeout(() => {
                    (u(!1), (g.current = 0));
                }, 2e3)));
        }, []);
    (0, et.Vo)({ event: R.jej.FAVORITE_GIF, handler: x });
    let E = i.useCallback(() => {
            (0, W.r$)(K.kx.GIF, n, r.id);
        }, [n, r.id]),
        { Component: y, events: S, play: A } = (0, X.V)();
    if (t) return null;
    let I = d === K.kx.GIF && h === n && p === r.id;
    return (0, l.jsx)(Y.m, {
        text: C.intl.string(c ? C.t.mE2e8A : C.t.nffuyb),
        shouldShow: c,
        forceOpen: c,
        children: (0, l.jsx)("div", {
            ref: a,
            className: m()(K.VQ, J.UD),
            children: (0, l.jsx)(en.A, {
                className: J.x6,
                onMouseEnter: S.onMouseEnter,
                onMouseLeave: S.onMouseLeave,
                onClick: () => {
                    (E(), A());
                },
                isActive: I,
                pulse: o,
                "aria-label": C.intl.string(C.t.PtVpk2),
                "aria-expanded": I,
                "aria-haspopup": "dialog",
                "aria-controls": f,
                children: (0, l.jsx)(y, { size: "refresh_sm", color: "currentColor" }),
            }),
        }),
    });
});
var ei = n(307069),
    er = n(559647),
    es = n(757261);
let ea = i.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: es.me }),
            (0, l.jsx)("div", {
                className: es.kL,
                children: (0, l.jsx)("div", {
                    className: es.UD,
                    children: (0, l.jsx)(en.A, {
                        className: es.x6,
                        childClassName: m()(es.Z4, { [es.r9]: n, [es.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": C.intl.string(C.t.oeb1vg),
                        children: (0, l.jsx)(er.SendMessageIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: es.AO,
                        }),
                    }),
                }),
            }),
        ],
    });
});
var eo = n(744682);
let eu = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    ec = i.memo(function (e) {
        let t,
            r,
            s,
            a,
            o,
            { disabled: u, type: c, channel: d, ref: h } = e,
            [f, p, g, x] = (0, W.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], P.x),
            E = f === K.kx.STICKER && x === c && g === d.id,
            y = i.useCallback(() => {
                (0, W.r$)(K.kx.STICKER, c, d.id);
            }, [c, d.id]),
            {
                Component: S,
                events: A,
                play: I,
            } = ((t = i.useRef(null)),
            (r = i.useCallback(() => {
                null != t.current && t.current.play("click");
            }, [])),
            (s = i.useCallback(() => {
                null != t.current && t.current.play("hover");
            }, [])),
            (a = i.useCallback(() => {
                null != t.current && t.current.stopIfPlaying("hover");
            }, [])),
            (o = i.useCallback(
                (e) =>
                    (0, l.jsx)(eo.P, { ...e, src: () => n.e(2890).then(n.t.bind(n, 279825, 19)), ref: t, markers: eu }),
                [],
            )),
            {
                events: { onMouseEnter: s, onMouseLeave: a },
                play: r,
                getDuration: i.useCallback(() => t.current?.getDuration(), []),
                getCurrentFrame: i.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
                Component: o,
            });
        return u
            ? null
            : (0, l.jsx)("div", {
                  className: m()(K.VQ, J.UD),
                  ref: h,
                  children: (0, l.jsx)(en.A, {
                      className: m()(J.x6, J.KE),
                      ...A,
                      onClick: () => {
                          (y(), I());
                      },
                      isActive: E,
                      "aria-label": C.intl.string(C.t.rZpidU),
                      "aria-expanded": E,
                      "aria-haspopup": "dialog",
                      "aria-controls": p,
                      sparkle: !1,
                      children: (0, l.jsx)(S, { size: "refresh_sm", color: "currentColor" }),
                  }),
              });
    }),
    ed = i.memo(function (e) {
        var t, n, h, m;
        let f,
            {
                type: p,
                disabled: g,
                channel: x,
                handleSubmit: E,
                isEmpty: y,
                showAllButtons: S,
                expressionButtonsHidden: A,
            } = e,
            C = (0, j.n)("ChannelTextAreaButtons"),
            I = (0, s.cf)([o.Ay], () => ({
                isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
                isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
                isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
                isGifButtonEnabled: o.Ay.isGifButtonEnabled,
                isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
            })),
            b = I.isSubmitButtonEnabled,
            P = !C || I.isAppsButtonEnabled,
            D = !C || I.isEmojiButtonEnabled,
            U = !C || I.isGifButtonEnabled,
            V = !C || I.isStickerButtonEnabled,
            F =
                ((n = x.id),
                (h = p),
                (m = y),
                (0, s.bG)([N.A, w.A], () => {
                    let e = N.A.getStickerPreview(n, h.drafts.type),
                        t = null != e && e.length > 0;
                    return 0 === w.A.getUploads(n, h.drafts.type).length && m && !t;
                })),
            { activeCommand: W, activeCommandOption: B } = (0, s.cf)([u.A], () => ({
                activeCommand: u.A.getActiveCommand(x.id),
                activeCommandOption: u.A.getActiveOption(x.id),
            })),
            G = (0, d.dw)(),
            K = [],
            H = !x.isDM() || void 0 === x.recipients || x.recipients.length > 1,
            z = (0, s.bG)([M.default], () => (H ? null : M.default.getUser(x.recipients[0]))),
            q = (function (e) {
                let { channel: t, chatInputType: n } = e,
                    l = n.commands?.enabled ?? !1,
                    i = (0, c.f)(t),
                    { activeCommand: r } = (0, s.cf)([u.A], () => ({
                        activeCommand: l ? u.A.getActiveCommand(t.id) : null,
                    }));
                return l && i && null == r;
            })({ channel: x, chatInputType: p }),
            $ = p.submit?.button != null && (p.submit?.ignorePreference || b),
            X = (0, T.A)(x, p);
        ((t = x.id),
            (f = (0, _.wX)()),
            i.useEffect(() => {
                if (X && !f)
                    return (
                        k._.subscribe(R.jej.RECORD_VOICE_MESSAGE, e),
                        () => {
                            k._.unsubscribe(R.jej.RECORD_VOICE_MESSAGE, e);
                        }
                    );
                function e() {
                    (0, O.K3)(t);
                }
            }, [t, X, f]));
        let Y = null == W || (null != B && B.type !== a.n4.ATTACHMENT);
        return (!r.Fr &&
            (p.gifts?.button != null &&
                null == W &&
                !G &&
                (null == z || L.Ay.isPremiumEligible(z)) &&
                K.push((0, l.jsx)(ei.A, { disabled: g, channel: x }, "gift")),
            p.gifs?.button != null &&
                null == W &&
                S &&
                U &&
                !A &&
                K.push((0, l.jsx)(el, { disabled: g, type: p, channel: x }, "gif")),
            p.stickers?.button != null &&
                null == W &&
                S &&
                V &&
                !A &&
                K.push((0, l.jsx)(ec, { disabled: g, type: p, channel: x }, "sticker"))),
        p.emojis?.button != null &&
            !A &&
            Y &&
            (S || A
                ? D && K.push((0, l.jsx)(Z, { disabled: g, type: p, channelId: x.id }, "emoji"))
                : K.push((0, l.jsx)(Q.A, { disabled: g, type: p, channel: x }, "expression"))),
        q && P && K.push((0, l.jsx)(v, { channelId: x.id, type: p }, "appLauncher")),
        $ && K.push((0, l.jsx)(ea, { onClick: E, disabled: g || F }, "submit")),
        0 === K.length)
            ? null
            : (0, l.jsx)("div", { className: J.Uo, children: K });
    });
