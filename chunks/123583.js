"use strict";
n.d(t, { A: () => ea }), n(321073);
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
    h = n(576705),
    f = n(287809),
    p = n(652215),
    E = n(86379),
    m = n(503698),
    g = n.n(m),
    A = n(939249),
    I = n(697744),
    T = n(795816),
    S = n(211401),
    y = n(989837),
    C = n(500049),
    N = n(598071),
    v = n(60809),
    R = n(375708),
    O = n(224840);
let b = r.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            o = (0, a.bG)(
                [y.A],
                () => y.A.shouldShowPopup() && y.A.activeViewType() === n && y.A.activeChannelId() === s,
            ),
            { Component: l, events: u, play: c } = (0, I.c)(),
            d = r.useContext(N.Ay);
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
                o ? S.k(C.Se.DISMISSED) : (S.R(C.s4.TEXT, n, void 0, s), T.LK()), c();
            }, [o, n, s, c]),
            h = (0, i.jsx)(l, { size: "refresh_sm", color: "currentColor" });
        return (0, i.jsx)("div", {
            className: g()(O.UD, v.KG),
            ref: t,
            children: (0, i.jsx)(A.D, {
                tabIndex: 0,
                className: g()(O.x6, { [O.rK]: o }),
                onClick: _,
                "aria-label": R.intl.string(R.t.erHFxI),
                "aria-expanded": o,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...u,
                children: h,
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
    P = n(951260),
    x = n(522602),
    k = n(428262),
    U = n(942381),
    G = n(375499),
    F = n(151271),
    V = n(355622),
    B = n(698279),
    j = n(266599);
let H = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: a } = e,
            [o, l, u, c] = (0, F.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], U.x),
            d = s === V.oU.NORMAL,
            _ = r.useCallback(() => {
                (0, F.r$)(B.kx.EMOJI, s, a);
            }, [s, a]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: g()(B.VQ, j.UD),
                  ref: t,
                  children: (0, i.jsx)(G.A, {
                      className: j.Z8,
                      onClick: _,
                      active: o === B.kx.EMOJI && l === s && c === a,
                      "aria-controls": u,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: d,
                  }),
              });
    }),
);
var Y = n(530134),
    W = n(3203),
    K = n(990078),
    $ = n(617617),
    z = n(11939),
    q = n(767089);
let Z = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: o } = e,
            [l, u] = r.useState(!1),
            c = (0, a.bG)(
                [$.A],
                () => l && Object.values($.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [d, _, h, f] = (0, F.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], U.x),
            E = r.useRef(0),
            m = r.useCallback(() => {
                u(!0),
                    clearTimeout(E.current),
                    (E.current = setTimeout(() => {
                        u(!1), (E.current = 0);
                    }, 2e3));
            }, []);
        (0, z.Vo)({ event: p.jej.FAVORITE_GIF, handler: m });
        let A = r.useCallback(() => {
                (0, F.r$)(B.kx.GIF, s, o.id);
            }, [s, o.id]),
            { Component: I, events: T, play: S } = (0, W.V)();
        if (n) return null;
        let y = d === B.kx.GIF && _ === s && f === o.id;
        return (0, i.jsx)(K.m, {
            text: R.intl.string(c ? R.t.mE2e8A : R.t.nffuyb),
            shouldShow: c,
            forceOpen: c,
            children: (0, i.jsx)("div", {
                ref: t,
                className: g()(B.VQ, j.UD),
                children: (0, i.jsx)(q.A, {
                    className: j.x6,
                    onMouseEnter: T.onMouseEnter,
                    onMouseLeave: T.onMouseLeave,
                    onClick: () => {
                        A(), S();
                    },
                    isActive: y,
                    pulse: l,
                    "aria-label": R.intl.string(R.t.PtVpk2),
                    "aria-expanded": y,
                    "aria-haspopup": "dialog",
                    "aria-controls": h,
                    children: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
var X = n(743477),
    Q = n(336618),
    J = n(559647),
    ee = n(10388);
let et = r.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: ee.me }),
            (0, i.jsx)("div", {
                className: ee.kL,
                children: (0, i.jsx)("div", {
                    className: ee.UD,
                    children: (0, i.jsx)(q.A, {
                        className: ee.x6,
                        childClassName: g()(ee.Z4, { [ee.r9]: n, [ee.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": R.intl.string(R.t.oeb1vg),
                        children: (0, i.jsx)(J.l, { size: "xs", color: "currentColor", className: ee.AO }),
                    }),
                }),
            }),
        ],
    });
});
var en = n(744682);
let ei = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    er = r.memo(
        r.forwardRef(function (e, t) {
            let s,
                a,
                o,
                l,
                u,
                { disabled: c, type: d, channel: _ } = e,
                [h, f, p, E] = (0, F.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], U.x),
                m = h === B.kx.STICKER && E === d && p === _.id,
                A = r.useCallback(() => {
                    (0, F.r$)(B.kx.STICKER, d, _.id);
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
                        (0, i.jsx)(en.P, {
                            ...e,
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: s,
                            markers: ei,
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
                      className: g()(B.VQ, j.UD),
                      ref: t,
                      children: (0, i.jsx)(q.A, {
                          className: g()(j.x6, j.KE),
                          ...T,
                          onClick: () => {
                              A(), S();
                          },
                          isActive: m,
                          "aria-label": R.intl.string(R.t.rZpidU),
                          "aria-expanded": m,
                          "aria-haspopup": "dialog",
                          "aria-controls": f,
                          sparkle: !1,
                          children: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  });
        }),
    );
function es(e) {
    let { disabled: t, channel: n } = e;
    return (0, a.bG)([L.A], () => Object.keys(L.A.promotionsByType[w.pt.GIFT_PROMOTION]).length > 0)
        ? (0, i.jsx)(Q.A, { disabled: t, channel: n })
        : (0, i.jsx)(X.A, { disabled: t, channel: n });
}
let ea = r.memo(function (e) {
    var t, n, r;
    let {
            type: m,
            disabled: g,
            channel: A,
            handleSubmit: I,
            isEmpty: T,
            showAllButtons: S,
            expressionButtonsHidden: y,
        } = e,
        C = (0, P.n)("ChannelTextAreaButtons"),
        N = (0, a.cf)([l.Ay], () => ({
            isSubmitButtonEnabled: l.Ay.isSubmitButtonEnabled,
            isAppsButtonEnabled: l.Ay.isAppsButtonEnabled,
            isEmojiButtonEnabled: l.Ay.isEmojiButtonEnabled,
            isGifButtonEnabled: l.Ay.isGifButtonEnabled,
            isStickerButtonEnabled: l.Ay.isStickerButtonEnabled,
        })),
        v = N.isSubmitButtonEnabled,
        R = !C || N.isAppsButtonEnabled,
        O = !C || N.isEmojiButtonEnabled,
        b = !C || N.isGifButtonEnabled,
        L = !C || N.isStickerButtonEnabled,
        w =
            ((t = A.id),
            (n = m),
            (r = T),
            (0, a.bG)([M.A, x.A], () => {
                let e = M.A.getStickerPreview(t, n.drafts.type),
                    i = null != e && e.length > 0;
                return 0 === x.A.getUploads(t, n.drafts.type).length && r && !i;
            })),
        { activeCommand: U, activeCommandOption: G } = (0, a.cf)([u.A], () => ({
            activeCommand: u.A.getActiveCommand(A.id),
            activeCommandOption: u.A.getActiveOption(A.id),
        })),
        F = (0, E.dw)(),
        V = [],
        B = !A.isDM() || void 0 === A.recipients || A.recipients.length > 1,
        W = (0, a.bG)([f.default], () => (B ? null : f.default.getUser(A.recipients[0]))),
        K = (function (e) {
            let { channel: t, chatInputType: n } = e,
                i = n.commands?.enabled ?? !1,
                r = (function (e) {
                    let t = e.getGuildId(),
                        n = (0, a.bG)([_.Ay, f.default], () => {
                            let e = f.default.getCurrentUser();
                            return (null != t && null != e ? _.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                        }),
                        { messagesDisabled: i } = (0, a.cf)([h.A], () => {
                            let t = e.isPrivate(),
                                i = h.A.computePermissions(e),
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
        $ = m.submit?.button != null && (m.submit?.ignorePreference || v),
        z = null == U || (null != G && G.type !== o.n4.ATTACHMENT);
    return (!s.Fr &&
        (m.gifts?.button != null &&
            null == U &&
            !F &&
            (null == W || k.Ay.isPremiumEligible(W)) &&
            V.push((0, i.jsx)(es, { disabled: g, channel: A }, "gift")),
        m.gifs?.button != null &&
            null == U &&
            S &&
            b &&
            !y &&
            V.push((0, i.jsx)(Z, { disabled: g, type: m, channel: A }, "gif")),
        m.stickers?.button != null &&
            null == U &&
            S &&
            L &&
            !y &&
            V.push((0, i.jsx)(er, { disabled: g, type: m, channel: A }, "sticker"))),
    m.emojis?.button != null &&
        !y &&
        z &&
        (S || y
            ? O && V.push((0, i.jsx)(H, { disabled: g, type: m, channelId: A.id }, "emoji"))
            : V.push((0, i.jsx)(Y.A, { disabled: g, type: m, channel: A }, "expression"))),
    K && R && V.push((0, i.jsx)(D, { channelId: A.id, type: m }, "appLauncher")),
    $ && V.push((0, i.jsx)(et, { onClick: I, disabled: g || w }, "submit")),
    0 === V.length)
        ? null
        : (0, i.jsx)("div", { className: j.Uo, children: V });
});
