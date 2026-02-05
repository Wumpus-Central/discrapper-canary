"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(311907),
    u = n(451988),
    c = n(397927),
    d = n(775602),
    _ = n(51183),
    f = n(793574),
    p = n(688810),
    h = n(915089),
    m = n(576241),
    g = n(410540),
    E = n(7584),
    A = n(961350),
    I = n(183555),
    T = n(679492),
    y = n(563437),
    S = n(8925),
    v = n(933639),
    C = n(518477);
n(745541);
var b = n(985018),
    N = n(178740);
function R(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: s()(N.nL, n),
        children: (0, r.jsx)("div", {
            className: N.A7,
            children: (0, r.jsx)("span", { className: N.vW, children: t }),
        }),
    });
}
let O = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a } = e,
            o = (0, h.GV)(),
            { analyticsLocations: l } = (0, p.Ay)(),
            { trackUserProfileAction: u } = (0, I.NJ)(),
            d = () => {
                u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    i?.(),
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                        return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: a });
                    });
            },
            _ = null != a ? a.label() : b.intl.string(b.t.evw0oz),
            f = (0, r.jsxs)("div", {
                className: N.Qs,
                children: [
                    (0, r.jsx)(c.U1e, { size: "xs", className: N.Tw, colorClass: N.qv }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: s()(N.ch, null != a && N.R9),
                        children: _,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(R, { children: f }),
                (0, r.jsx)("div", {
                    className: s()(N.kL, N.LL),
                    ref: t,
                    children: (0, r.jsx)(c.DUT, {
                        className: N.A7,
                        "aria-label": b.intl.string(b.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: d,
                        focusProps: { ringClassName: N.hN },
                        children: (0, r.jsxs)("span", {
                            className: s()(N.vW, N.vk),
                            children: [
                                (0, r.jsx)(c.U1e, { size: "xs", className: N.Tw, colorClass: N.qv }),
                                (0, r.jsxs)(c.AC4, { id: o, children: [b.intl.string(b.t.EVV6uZ), ": ", _] }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: s()(N.ch, null != a && N.R9),
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
    D = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: a,
                animate: f,
                className: p,
                renderToolbar: h,
                onShowToolbar: g,
                placeholderText: E,
                hasEntered: A = !0,
            } = e,
            y = (0, T.NR)(),
            { trackUserProfileAction: S } = (0, I.NJ)(),
            v = (0, m.h)({ location: "CustomStatusBubble" }),
            O = 1.25 * (null != n),
            D = 36 + O,
            L = 144 + O,
            w = i.useRef(null),
            x = i.useRef(null),
            P = i.useRef(null),
            M = i.useRef(D),
            k = i.useRef(L),
            U = null != n && null == a,
            [G, V] = i.useState(!1),
            [F, B] = i.useState(!0),
            [j, H] = i.useState(!U && A),
            Y = A && G,
            W = (0, l.bG)([d.A], () => d.A.useReducedMotion),
            [K] = i.useState(() => new u.Ep());
        i.useEffect(() => () => K.stop(), [K]),
            i.useEffect(() => {
                y?.onInteractionPopoutTargetRefChange(w);
            }, [y]);
        let [z, $] = (0, c.zhh)(() => ({ maxHeight: `${M.current}px`, config: { clamp: !0, duration: 150 } }));
        i.useLayoutEffect(() => {
            if ((V(!0), null == x.current || null == P.current || !Y)) return;
            let e = x.current.getBoundingClientRect().height,
                t = P.current.getBoundingClientRect().height;
            H(t > e),
                (M.current = e),
                (k.current = t),
                $({ maxHeight: `${Math.min(F ? M.current : k.current, F ? D : L)}px` });
        }, [Y, a, n, $, F, D, L]);
        let q = (e) => {
                j &&
                    (e
                        ? $({
                              maxHeight: `${Math.min(k.current, L)}px`,
                              delay: 300 * !W,
                              config: { clamp: !0, duration: 150 * !W },
                          })
                        : $({ maxHeight: `${Math.min(M.current, D)}px`, delay: 0 }),
                    W ? B(!e) : K.start(e ? 300 : 150, () => B(!e)));
            },
            Z =
                null != n
                    ? (0, r.jsx)(_.A, { emoji: n, animate: f, hideTooltip: !1, tooltipDelay: C.In, className: N.H0 })
                    : null,
            Q = null != a ? (0, r.jsx)(c.Text, { variant: "text-sm/normal", className: N.qS, children: a }) : null,
            X =
                void 0 === E || (null != n && v)
                    ? null
                    : (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${b.intl.string(b.t.EVV6uZ)}: ${E}`,
                          className: s()(N.qS, v && N.R9),
                          children: E ?? "",
                      }),
            J = null == Q || "" === a ? X : Q,
            ee = (0, r.jsxs)("div", { ref: x, className: N.Qs, children: [Z, J] }),
            et = (0, r.jsxs)("div", { ref: P, className: s()(N.Qs, N.m2), children: [Z, J] }),
            en = (0, r.jsx)("div", {
                ref: t,
                className: N.A7,
                children: (0, r.jsx)("span", {
                    className: N.vW,
                    children: (0, r.jsxs)(o.animated.div, {
                        style: z,
                        className: s()(N.Qs, { [N.m2]: !F }),
                        children: [Z, J],
                    }),
                }),
            }),
            er = (0, r.jsxs)(R, { children: [ee, et] });
        return null == g
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      er,
                      (0, r.jsxs)("div", {
                          ref: w,
                          className: s()(N.kL, p),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), q(!0);
                          },
                          onMouseLeave: () => {
                              q(!1);
                          },
                          onFocus: () => q(!0),
                          onBlur: () => q(!1),
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: N.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": b.intl.formatToPlainString(b.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: en,
                                  }),
                              }),
                              h?.(j),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      er,
                      (0, r.jsxs)("div", {
                          ref: w,
                          className: s()(N.kL, p),
                          onFocus: () => {
                              g(!0), q(!0);
                          },
                          onBlur: (e) => {
                              w.current?.contains(e.relatedTarget) || (g(!1), q(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), g(!0), q(!0);
                          },
                          onMouseLeave: () => {
                              g(!1), q(!1);
                          },
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: N.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": b.intl.formatToPlainString(b.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: en,
                                  }),
                              }),
                              h?.(j),
                          ],
                      }),
                  ],
              });
    }),
    L = i.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: s, ...o } = e,
            [l, u] = i.useState(!1);
        return (0, r.jsx)(D, {
            ...o,
            ref: t,
            emoji: n,
            text: a,
            className: N.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, r.jsx)(v.A, { isVisible: l, isExpandable: e, onCloseProfile: s }),
        });
    });
function w(e) {
    let { emoji: t, text: n, user: a, guildId: s, channelId: o, themeType: l, ...u } = e,
        { trackUserProfileAction: c } = (0, I.NJ)(),
        { interactionType: d, interactionSource: _, resetInteraction: f } = (0, T.Pq)(),
        p = _ === C.dS.STATUS && d === C.AQ.REACT,
        h = _ === C.dS.STATUS && d === C.AQ.REPLY,
        m = p || h,
        g = i.useRef(null),
        A = i.useRef(t),
        v = i.useRef(n);
    i.useEffect(() => {
        _ === C.dS.STATUS && ((A.current !== t || v.current !== n) && f(), (A.current = t), (v.current = n));
    }, [_, f, t, n]);
    let [b, R] = i.useState(!1),
        O = i.useCallback(
            (e) => {
                (e || !m) && R(e);
            },
            [m],
        ),
        L = (e) =>
            null == e ? null : null != e.id ? `\`:${e.name}:\`` : E.Ay.translateSurrogatesToInlineEmoji(e.name),
        w = (e, t) => (null == e ? t : `${e} ${t}`),
        x = () => {
            let e = L(t);
            return null == n ? e : w(e, n);
        };
    return (0, r.jsx)(y.A, {
        user: a,
        guildId: s,
        channelId: o,
        themeType: l,
        sourceDetails: x(),
        sourceType: C.dS.STATUS,
        onAction: c,
        onClose: () => R(!1),
        children: () =>
            (0, r.jsx)(D, {
                ...u,
                ref: g,
                emoji: t,
                text: n,
                themeType: l,
                className: m ? N.zf : void 0,
                onShowToolbar: O,
                renderToolbar: (e) =>
                    (0, r.jsx)(S.Ay, {
                        targetRef: g,
                        user: a,
                        sourceType: C.dS.STATUS,
                        isVisible: b && !m,
                        isExpandable: e,
                        onAction: c,
                    }),
            }),
    });
}
let x = i.forwardRef(function (e, t) {
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
        _ = (0, g.A)(n.id),
        { analyticsLocations: h } = (0, p.Ay)(f.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        m = (0, l.bG)([A.default], () => A.default.getId() === n.id),
        E = m && !c,
        I = !m && !n.bot && !c;
    if (null != a || null != s) {
        let e = s ?? null,
            n = null != a && "" !== a ? a : null;
        return (0, r.jsx)(p.f5, {
            value: h,
            children: (0, r.jsx)(D, { emoji: e, text: n, placeholderText: o, ref: t, ...d }),
        });
    }
    let T = _?.emoji ?? null,
        y = _?.state ?? null,
        S = null != y && "" !== y ? y : null;
    return null != T || null != S || E
        ? null == T && null == S
            ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(O, { onCloseProfile: i, prompt: u, ref: t, ...d }) })
            : I
              ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(w, { user: n, emoji: T, text: S, ...d }) })
              : E
                ? (0, r.jsx)(p.f5, {
                      value: h,
                      children: (0, r.jsx)(L, { emoji: T, text: S, onCloseProfile: i, ref: t, ...d }),
                  })
                : (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(D, { emoji: T, text: S, ref: t, ...d }) })
        : null;
});
