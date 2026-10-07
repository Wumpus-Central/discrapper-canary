(n.d(t, { A: () => en }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(607399),
    s = n(17928),
    a = n(155718),
    o = n(775602),
    u = n(861382),
    c = n(136722),
    d = n(406704),
    h = n(696451),
    m = n(576705),
    p = n(287809),
    f = n(652215),
    g = n(86379),
    x = n(503698),
    E = n.n(x),
    S = n(697744),
    y = n(939249),
    C = n(795816),
    A = n(211401),
    b = n(989837),
    I = n(500049),
    N = n(598071),
    v = n(60809),
    T = n(660183),
    j = n(215837);
let k = function (e) {
        let { type: t, channelId: n, ref: r } = e,
            a = (0, s.bG)(
                [b.A],
                () => b.A.shouldShowPopup() && b.A.activeViewType() === t && b.A.activeChannelId() === n,
            ),
            { Component: o, events: u, play: c } = (0, S.c)(),
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
                (a ? A.k(I.Se.DISMISSED) : (A.R(I.s4.TEXT, t, void 0, n), C.LK()), c());
            }, [a, t, n, c]),
            m = (0, l.jsx)(o, { size: "refresh_sm", color: "currentColor" });
        return (0, l.jsx)("div", {
            className: E()(j.UD, v.KG),
            ref: r,
            children: (0, l.jsx)(y.D, {
                tabIndex: 0,
                className: E()(j.x6, { [j.rK]: a }),
                onClick: h,
                "aria-label": T.intl.string(T.t.erHFxI),
                "aria-expanded": a,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...u,
                children: m,
            }),
        });
    },
    _ = i.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, l.jsx)(k, { type: t, channelId: n });
    });
var R = n(931664),
    O = n(951260),
    L = n(522602),
    w = n(158045),
    M = n(462180),
    P = n(375499),
    D = n(151271),
    U = n(355622),
    V = n(698279),
    W = n(495088);
let F = i.memo(function (e) {
    let { disabled: t, type: n, channelId: r, ref: s } = e,
        [a, o, u, c] = (0, D.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], M.x),
        d = n === U.oU.NORMAL,
        h = i.useCallback(() => {
            (0, D.r$)(V.kx.EMOJI, n, r);
        }, [n, r]);
    return t
        ? null
        : (0, l.jsx)("div", {
              className: E()(V.VQ, W.UD),
              ref: s,
              children: (0, l.jsx)(P.A, {
                  className: W.Z8,
                  onClick: h,
                  active: a === V.kx.EMOJI && o === n && c === r,
                  "aria-controls": u,
                  tabIndex: 0,
                  focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  canShowNUXPremiumTooltip: d,
              }),
          });
});
var B = n(530134),
    K = n(3203),
    G = n(866665),
    H = n(617617),
    z = n(234320),
    q = n(767089);
let $ = i.memo(function (e) {
    let { disabled: t, type: n, channel: r, ref: a } = e,
        [o, u] = i.useState(!1),
        c = (0, s.bG)(
            [H.A],
            () => o && Object.values(H.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
        ),
        [d, h, m, p] = (0, D.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], M.x),
        g = i.useRef(0),
        x = i.useCallback(() => {
            (u(!0),
                clearTimeout(g.current),
                (g.current = setTimeout(() => {
                    (u(!1), (g.current = 0));
                }, 2e3)));
        }, []);
    (0, z.Vo)({ event: f.jej.FAVORITE_GIF, handler: x });
    let S = i.useCallback(() => {
            (0, D.r$)(V.kx.GIF, n, r.id);
        }, [n, r.id]),
        { Component: y, events: C, play: A } = (0, K.V)();
    if (t) return null;
    let b = d === V.kx.GIF && h === n && p === r.id;
    return (0, l.jsx)(G.m, {
        text: T.intl.string(c ? T.t.mE2e8A : T.t.nffuyb),
        shouldShow: c,
        forceOpen: c,
        children: (0, l.jsx)("div", {
            ref: a,
            className: E()(V.VQ, W.UD),
            children: (0, l.jsx)(q.A, {
                className: W.x6,
                onMouseEnter: C.onMouseEnter,
                onMouseLeave: C.onMouseLeave,
                onClick: () => {
                    (S(), A());
                },
                isActive: b,
                pulse: o,
                "aria-label": T.intl.string(T.t.PtVpk2),
                "aria-expanded": b,
                "aria-haspopup": "dialog",
                "aria-controls": m,
                children: (0, l.jsx)(y, { size: "refresh_sm", color: "currentColor" }),
            }),
        }),
    });
});
var Q = n(365990),
    Z = n(559647),
    X = n(757261);
let J = i.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: X.me }),
            (0, l.jsx)("div", {
                className: X.kL,
                children: (0, l.jsx)("div", {
                    className: X.UD,
                    children: (0, l.jsx)(q.A, {
                        className: X.x6,
                        childClassName: E()(X.Z4, { [X.r9]: n, [X.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": T.intl.string(T.t.oeb1vg),
                        children: (0, l.jsx)(Z.SendMessageIcon, { size: "xs", color: "currentColor", className: X.AO }),
                    }),
                }),
            }),
        ],
    });
});
var Y = n(744682);
let ee = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    et = i.memo(function (e) {
        let t,
            r,
            s,
            a,
            o,
            { disabled: u, type: c, channel: d, ref: h } = e,
            [m, p, f, g] = (0, D.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], M.x),
            x = m === V.kx.STICKER && g === c && f === d.id,
            S = i.useCallback(() => {
                (0, D.r$)(V.kx.STICKER, c, d.id);
            }, [c, d.id]),
            {
                Component: y,
                events: C,
                play: A,
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
                    (0, l.jsx)(Y.P, {
                        ...e,
                        src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                        ref: t,
                        markers: ee,
                    }),
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
                  className: E()(V.VQ, W.UD),
                  ref: h,
                  children: (0, l.jsx)(q.A, {
                      className: E()(W.x6, W.KE),
                      ...C,
                      onClick: () => {
                          (S(), A());
                      },
                      isActive: x,
                      "aria-label": T.intl.string(T.t.rZpidU),
                      "aria-expanded": x,
                      "aria-haspopup": "dialog",
                      "aria-controls": p,
                      sparkle: !1,
                      children: (0, l.jsx)(y, { size: "refresh_sm", color: "currentColor" }),
                  }),
              });
    }),
    en = i.memo(function (e) {
        var t, n, i;
        let {
                type: x,
                disabled: E,
                channel: S,
                handleSubmit: y,
                isEmpty: C,
                showAllButtons: A,
                expressionButtonsHidden: b,
            } = e,
            I = (0, O.n)("ChannelTextAreaButtons"),
            N = (0, s.cf)([o.Ay], () => ({
                isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
                isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
                isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
                isGifButtonEnabled: o.Ay.isGifButtonEnabled,
                isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
            })),
            v = N.isSubmitButtonEnabled,
            T = !I || N.isAppsButtonEnabled,
            j = !I || N.isEmojiButtonEnabled,
            k = !I || N.isGifButtonEnabled,
            M = !I || N.isStickerButtonEnabled,
            P =
                ((t = S.id),
                (n = x),
                (i = C),
                (0, s.bG)([R.A, L.A], () => {
                    let e = R.A.getStickerPreview(t, n.drafts.type),
                        l = null != e && e.length > 0;
                    return 0 === L.A.getUploads(t, n.drafts.type).length && i && !l;
                })),
            { activeCommand: D, activeCommandOption: U } = (0, s.cf)([u.A], () => ({
                activeCommand: u.A.getActiveCommand(S.id),
                activeCommandOption: u.A.getActiveOption(S.id),
            })),
            V = (0, g.dw)(),
            K = [],
            G = !S.isDM() || void 0 === S.recipients || S.recipients.length > 1,
            H = (0, s.bG)([p.default], () => (G ? null : p.default.getUser(S.recipients[0]))),
            z = (function (e) {
                let { channel: t, chatInputType: n } = e,
                    l = n.commands?.enabled ?? !1,
                    i = (function (e) {
                        let t = e.getGuildId(),
                            n = (0, s.bG)([h.Ay, p.default], () => {
                                let e = p.default.getCurrentUser();
                                return (null != t && null != e ? h.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                            }),
                            { messagesDisabled: l } = (0, s.cf)(
                                [m.A],
                                () => {
                                    let t = e.isPrivate(),
                                        l = m.A.computePermissions(e),
                                        i = c.zy(l, f.xBc.SEND_MESSAGES),
                                        r = (0, d.UJ)(e);
                                    return { messagesDisabled: n || (!t && !i) || r };
                                },
                                [e, n],
                            );
                        return !l;
                    })(t),
                    { activeCommand: r } = (0, s.cf)([u.A], () => ({
                        activeCommand: l ? u.A.getActiveCommand(t.id) : null,
                    }));
                return l && i && null == r;
            })({ channel: S, chatInputType: x }),
            q = x.submit?.button != null && (x.submit?.ignorePreference || v),
            Z = null == D || (null != U && U.type !== a.n4.ATTACHMENT);
        return (!r.Fr &&
            (x.gifts?.button != null &&
                null == D &&
                !V &&
                (null == H || w.Ay.isPremiumEligible(H)) &&
                K.push((0, l.jsx)(Q.A, { disabled: E, channel: S }, "gift")),
            x.gifs?.button != null &&
                null == D &&
                A &&
                k &&
                !b &&
                K.push((0, l.jsx)($, { disabled: E, type: x, channel: S }, "gif")),
            x.stickers?.button != null &&
                null == D &&
                A &&
                M &&
                !b &&
                K.push((0, l.jsx)(et, { disabled: E, type: x, channel: S }, "sticker"))),
        x.emojis?.button != null &&
            !b &&
            Z &&
            (A || b
                ? j && K.push((0, l.jsx)(F, { disabled: E, type: x, channelId: S.id }, "emoji"))
                : K.push((0, l.jsx)(B.A, { disabled: E, type: x, channel: S }, "expression"))),
        z && T && K.push((0, l.jsx)(_, { channelId: S.id, type: x }, "appLauncher")),
        q && K.push((0, l.jsx)(J, { onClick: y, disabled: E || P }, "submit")),
        0 === K.length)
            ? null
            : (0, l.jsx)("div", { className: W.Uo, children: K });
    });
