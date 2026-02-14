"use strict";
n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(311907),
    u = n(451988),
    c = n(397927),
    d = n(775602),
    _ = n(51183),
    f = n(793574),
    h = n(688810),
    p = n(915089),
    g = n(576241),
    E = n(410540),
    A = n(7584),
    I = n(961350),
    T = n(183555),
    y = n(679492),
    S = n(563437),
    v = n(8925),
    C = n(933639),
    b = n(518477);
n(745541);
var N = n(985018),
    R = n(178740);
function O(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: s()(R.nL, n),
        children: (0, r.jsx)("div", {
            className: R.A7,
            children: (0, r.jsx)("span", { className: R.vW, children: t }),
        }),
    });
}
let D = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a } = e,
            o = (0, p.GV)(),
            { analyticsLocations: l } = (0, h.Ay)(),
            { trackUserProfileAction: u } = (0, T.NJ)(),
            d = () => {
                u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    i?.(),
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                        return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: a });
                    });
            },
            _ = null != a ? a.label() : N.intl.string(N.t.evw0oz),
            f = (0, r.jsxs)("div", {
                className: R.Qs,
                children: [
                    (0, r.jsx)(c.U1e, { size: "xs", className: R.Tw, colorClass: R.qv }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: s()(R.ch, null != a && R.R9),
                        children: _,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(O, { children: f }),
                (0, r.jsx)("div", {
                    className: s()(R.kL, R.LL),
                    ref: t,
                    children: (0, r.jsx)(c.DUT, {
                        className: R.A7,
                        "aria-label": N.intl.string(N.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: d,
                        focusProps: { ringClassName: R.hN },
                        children: (0, r.jsxs)("span", {
                            className: s()(R.vW, R.vk),
                            children: [
                                (0, r.jsx)(c.U1e, { size: "xs", className: R.Tw, colorClass: R.qv }),
                                (0, r.jsxs)(c.AC4, { id: o, children: [N.intl.string(N.t.EVV6uZ), ": ", _] }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: s()(R.ch, null != a && R.R9),
                                    "aria-hidden": "true",
                                    children: _,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    L = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: a,
                animate: f,
                className: h,
                renderToolbar: p,
                onShowToolbar: E,
                placeholderText: A,
                hasEntered: I = !0,
            } = e,
            S = (0, y.NR)(),
            { trackUserProfileAction: v } = (0, T.NJ)(),
            C = (0, g.h)({ location: "CustomStatusBubble" }),
            D = 1.25 * (null != n),
            L = 36 + D,
            w = 144 + D,
            x = i.useRef(null),
            P = i.useRef(null),
            M = i.useRef(null),
            k = i.useRef(L),
            U = i.useRef(w),
            G = null != n && null == a,
            [F, V] = i.useState(!1),
            [B, j] = i.useState(!0),
            [H, Y] = i.useState(!G && I),
            W = I && F,
            K = (0, l.bG)([d.A], () => d.A.useReducedMotion),
            [$] = i.useState(() => new u.Ep());
        i.useEffect(() => () => $.stop(), [$]),
            i.useEffect(() => {
                S?.onInteractionPopoutTargetRefChange(x);
            }, [S]);
        let [z, q] = (0, c.zhh)(() => ({ maxHeight: `${k.current}px`, config: { clamp: !0, duration: 150 } }));
        i.useLayoutEffect(() => {
            if ((V(!0), null == P.current || null == M.current || !W)) return;
            let e = P.current.getBoundingClientRect().height,
                t = M.current.getBoundingClientRect().height;
            Y(t > e),
                (k.current = e),
                (U.current = t),
                q({ maxHeight: `${Math.min(B ? k.current : U.current, B ? L : w)}px` });
        }, [W, a, n, q, B, L, w]);
        let X = (e) => {
                H &&
                    (e
                        ? q({
                              maxHeight: `${Math.min(U.current, w)}px`,
                              delay: 300 * !K,
                              config: { clamp: !0, duration: 150 * !K },
                          })
                        : q({ maxHeight: `${Math.min(k.current, L)}px`, delay: 0 }),
                    K ? j(!e) : $.start(e ? 300 : 150, () => j(!e)));
            },
            Z =
                null != n
                    ? (0, r.jsx)(_.A, { emoji: n, animate: f, hideTooltip: !1, tooltipDelay: b.In, className: R.H0 })
                    : null,
            Q = null != a ? (0, r.jsx)(c.Text, { variant: "text-sm/normal", className: R.qS, children: a }) : null,
            J =
                void 0 === A || (null != n && C)
                    ? null
                    : (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${N.intl.string(N.t.EVV6uZ)}: ${A}`,
                          className: s()(R.qS, C && R.R9),
                          children: A ?? "",
                      }),
            ee = null == Q || "" === a ? J : Q,
            et = (0, r.jsxs)("div", { ref: P, className: R.Qs, children: [Z, ee] }),
            en = (0, r.jsxs)("div", { ref: M, className: s()(R.Qs, R.m2), children: [Z, ee] }),
            er = (0, r.jsx)("div", {
                ref: t,
                className: R.A7,
                children: (0, r.jsx)("span", {
                    className: R.vW,
                    children: (0, r.jsxs)(o.animated.div, {
                        style: z,
                        className: s()(R.Qs, { [R.m2]: !B }),
                        children: [Z, ee],
                    }),
                }),
            }),
            ei = (0, r.jsxs)(O, { children: [et, en] });
        return null == E
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      ei,
                      (0, r.jsxs)("div", {
                          ref: x,
                          className: s()(R.kL, h),
                          onMouseEnter: () => {
                              v({ action: "HOVER_CUSTOM_STATUS" }), X(!0);
                          },
                          onMouseLeave: () => {
                              X(!1);
                          },
                          onFocus: () => X(!0),
                          onBlur: () => X(!1),
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: R.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": N.intl.formatToPlainString(N.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: er,
                                  }),
                              }),
                              p?.(H),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      ei,
                      (0, r.jsxs)("div", {
                          ref: x,
                          className: s()(R.kL, h),
                          onFocus: () => {
                              E(!0), X(!0);
                          },
                          onBlur: (e) => {
                              x.current?.contains(e.relatedTarget) || (E(!1), X(!1));
                          },
                          onMouseEnter: () => {
                              v({ action: "HOVER_CUSTOM_STATUS" }), E(!0), X(!0);
                          },
                          onMouseLeave: () => {
                              E(!1), X(!1);
                          },
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: R.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": N.intl.formatToPlainString(N.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: er,
                                  }),
                              }),
                              p?.(H),
                          ],
                      }),
                  ],
              });
    }),
    w = i.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: s, ...o } = e,
            [l, u] = i.useState(!1);
        return (0, r.jsx)(L, {
            ...o,
            ref: t,
            emoji: n,
            text: a,
            className: R.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, r.jsx)(C.A, { isVisible: l, isExpandable: e, onCloseProfile: s }),
        });
    });
function x(e) {
    let { emoji: t, text: n, user: a, guildId: s, channelId: o, themeType: l, ...u } = e,
        { trackUserProfileAction: c } = (0, T.NJ)(),
        { interactionType: d, interactionSource: _, resetInteraction: f } = (0, y.Pq)(),
        h = _ === b.dS.STATUS && d === b.AQ.REACT,
        p = _ === b.dS.STATUS && d === b.AQ.REPLY,
        g = h || p,
        E = i.useRef(null),
        I = i.useRef(t),
        C = i.useRef(n);
    i.useEffect(() => {
        _ === b.dS.STATUS && ((I.current !== t || C.current !== n) && f(), (I.current = t), (C.current = n));
    }, [_, f, t, n]);
    let [N, O] = i.useState(!1),
        D = i.useCallback(
            (e) => {
                (e || !g) && O(e);
            },
            [g],
        ),
        w = (e) =>
            null == e ? null : null != e.id ? `\`:${e.name}:\`` : A.Ay.translateSurrogatesToInlineEmoji(e.name),
        x = (e, t) => (null == e ? t : `${e} ${t}`),
        P = () => {
            let e = w(t);
            return null == n ? e : x(e, n);
        };
    return (0, r.jsx)(S.A, {
        user: a,
        guildId: s,
        channelId: o,
        themeType: l,
        sourceDetails: P(),
        sourceType: b.dS.STATUS,
        onAction: c,
        onClose: () => O(!1),
        children: () =>
            (0, r.jsx)(L, {
                ...u,
                ref: E,
                emoji: t,
                text: n,
                themeType: l,
                className: g ? R.zf : void 0,
                onShowToolbar: D,
                renderToolbar: (e) =>
                    (0, r.jsx)(v.Ay, {
                        targetRef: E,
                        user: a,
                        sourceType: b.dS.STATUS,
                        isVisible: N && !g,
                        isExpandable: e,
                        onAction: c,
                    }),
            }),
    });
}
let P = i.forwardRef(function (e, t) {
    let {
            user: n,
            onCloseProfile: i,
            previewText: a,
            previewEmoji: s,
            placeholderText: o,
            prompt: u,
            disableToolbar: c = !1,
            ...d
        } = e,
        _ = (0, E.A)(n.id),
        { analyticsLocations: p } = (0, h.Ay)(f.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        g = (0, l.bG)([I.default], () => I.default.getId() === n.id),
        A = g && !c,
        T = !g && !n.bot && !c;
    if (null != a || null != s) {
        let e = s ?? null,
            n = null != a && "" !== a ? a : null;
        return (0, r.jsx)(h.f5, {
            value: p,
            children: (0, r.jsx)(L, { emoji: e, text: n, placeholderText: o, ref: t, ...d }),
        });
    }
    let y = _?.emoji ?? null,
        S = _?.state ?? null,
        v = null != S && "" !== S ? S : null;
    return null != y || null != v || A
        ? null == y && null == v
            ? (0, r.jsx)(h.f5, { value: p, children: (0, r.jsx)(D, { onCloseProfile: i, prompt: u, ref: t, ...d }) })
            : T
              ? (0, r.jsx)(h.f5, { value: p, children: (0, r.jsx)(x, { user: n, emoji: y, text: v, ...d }) })
              : A
                ? (0, r.jsx)(h.f5, {
                      value: p,
                      children: (0, r.jsx)(w, { emoji: y, text: v, onCloseProfile: i, ref: t, ...d }),
                  })
                : (0, r.jsx)(h.f5, { value: p, children: (0, r.jsx)(L, { emoji: y, text: v, ref: t, ...d }) })
        : null;
});
