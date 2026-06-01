"use strict";
n.d(t, { A: () => er }), n(321073);
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
    N = n(500049),
    v = n(598071),
    C = n(60809),
    R = n(375708),
    O = n(224840);
let b = r.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            o = (0, a.bG)(
                [y.A],
                () => y.A.shouldShowPopup() && y.A.activeViewType() === n && y.A.activeChannelId() === s,
            ),
            { Component: l, events: u, play: c } = (0, I.c)(),
            d = r.useContext(v.Ay);
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
                o ? S.k(N.Se.DISMISSED) : (S.R(N.s4.TEXT, n, void 0, s), T.LK()), c();
            }, [o, n, s, c]),
            h = (0, i.jsx)(l, { size: "refresh_sm", color: "currentColor" });
        return (0, i.jsx)("div", {
            className: g()(O.UD, C.KG),
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
    P = n(522602),
    x = n(428262),
    k = n(942381),
    U = n(375499),
    G = n(151271),
    F = n(355622),
    V = n(698279),
    B = n(266599);
let H = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: a } = e,
            [o, l, u, c] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], k.x),
            d = s === F.oU.NORMAL,
            _ = r.useCallback(() => {
                (0, G.r$)(V.kx.EMOJI, s, a);
            }, [s, a]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: g()(V.VQ, B.UD),
                  ref: t,
                  children: (0, i.jsx)(U.A, {
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
    $ = n(767089);
let z = r.memo(
    r.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: o } = e,
            [l, u] = r.useState(!1),
            c = (0, a.bG)(
                [W.A],
                () => l && Object.values(W.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [d, _, h, f] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], k.x),
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
        let y = d === V.kx.GIF && _ === s && f === o.id;
        return (0, i.jsx)(Y.m, {
            text: R.intl.string(c ? R.t.mE2e8A : R.t.nffuyb),
            shouldShow: c,
            forceOpen: c,
            children: (0, i.jsx)("div", {
                ref: t,
                className: g()(V.VQ, B.UD),
                children: (0, i.jsx)($.A, {
                    className: B.x6,
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
var q = n(743477),
    X = n(336618),
    Z = n(559647),
    Q = n(10388);
let J = r.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: Q.me }),
            (0, i.jsx)("div", {
                className: Q.kL,
                children: (0, i.jsx)("div", {
                    className: Q.UD,
                    children: (0, i.jsx)($.A, {
                        className: Q.x6,
                        childClassName: g()(Q.Z4, { [Q.r9]: n, [Q.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": R.intl.string(R.t.oeb1vg),
                        children: (0, i.jsx)(Z.l, { size: "xs", color: "currentColor", className: Q.AO }),
                    }),
                }),
            }),
        ],
    });
});
var ee = n(744682);
let et = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    en = r.memo(
        r.forwardRef(function (e, t) {
            let s,
                a,
                o,
                l,
                u,
                { disabled: c, type: d, channel: _ } = e,
                [h, f, p, E] = (0, G.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], k.x),
                m = h === V.kx.STICKER && E === d && p === _.id,
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
                        (0, i.jsx)(ee.P, {
                            ...e,
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: s,
                            markers: et,
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
                      children: (0, i.jsx)($.A, {
                          className: g()(B.x6, B.KE),
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
function ei(e) {
    let { disabled: t, channel: n } = e;
    return (0, a.bG)([L.A], () => Object.keys(L.A.promotionsByType[w.pt.GIFT_PROMOTION]).length > 0)
        ? (0, i.jsx)(X.A, { disabled: t, channel: n })
        : (0, i.jsx)(q.A, { disabled: t, channel: n });
}
let er = r.memo(function (e) {
    var t, n, r;
    let { type: m, disabled: g, channel: A, handleSubmit: I, isEmpty: T, showAllButtons: S } = e,
        y = (0, a.bG)([l.A], () => l.A.isSubmitButtonEnabled),
        N =
            ((t = A.id),
            (n = m),
            (r = T),
            (0, a.bG)([M.A, P.A], () => {
                let e = M.A.getStickerPreview(t, n.drafts.type),
                    i = null != e && e.length > 0;
                return 0 === P.A.getUploads(t, n.drafts.type).length && r && !i;
            })),
        { activeCommand: v, activeCommandOption: C } = (0, a.cf)([u.A], () => ({
            activeCommand: u.A.getActiveCommand(A.id),
            activeCommandOption: u.A.getActiveOption(A.id),
        })),
        R = (0, E.dw)(),
        O = [],
        b = !A.isDM() || void 0 === A.recipients || A.recipients.length > 1,
        L = (0, a.bG)([f.default], () => (b ? null : f.default.getUser(A.recipients[0]))),
        w = (function (e) {
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
        k = m.submit?.button != null && (m.submit?.ignorePreference || y);
    return (!s.Fr &&
        (m.gifts?.button != null &&
            null == v &&
            !R &&
            (null == L || x.Ay.isPremiumEligible(L)) &&
            O.push((0, i.jsx)(ei, { disabled: g, channel: A }, "gift")),
        m.gifs?.button != null && null == v && S && O.push((0, i.jsx)(z, { disabled: g, type: m, channel: A }, "gif")),
        m.stickers?.button != null &&
            null == v &&
            S &&
            O.push((0, i.jsx)(en, { disabled: g, type: m, channel: A }, "sticker"))),
    m.emojis?.button != null &&
        (null == v || (null != C && C.type !== o.n4.ATTACHMENT)) &&
        O.push((0, i.jsx)(H, { disabled: g, type: m, channelId: A.id }, "emoji")),
    w && O.push((0, i.jsx)(D, { channelId: A.id, type: m }, "appLauncher")),
    k && O.push((0, i.jsx)(J, { onClick: I, disabled: g || N }, "submit")),
    0 === O.length)
        ? null
        : (0, i.jsx)("div", { className: B.Uo, children: O });
});
