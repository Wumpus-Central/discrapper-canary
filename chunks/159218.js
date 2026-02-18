"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(522160),
    l = n(311907),
    u = n(451988),
    c = n(397927),
    d = n(775602),
    _ = n(51183),
    f = n(793574),
    p = n(688810),
    h = n(915089),
    m = n(576241),
    E = n(410540),
    g = n(7584),
    A = n(961350),
    I = n(183555),
    T = n(679492),
    S = n(563437),
    y = n(8925),
    v = n(933639),
    N = n(518477);
n(745541);
var C = n(985018),
    b = n(178740);
function R(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(b.nL, n),
        children: (0, r.jsx)("div", {
            className: b.A7,
            children: (0, r.jsx)("span", { className: b.vW, children: t }),
        }),
    });
}
let O = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: s } = e,
            o = (0, h.GV)(),
            { analyticsLocations: l } = (0, p.Ay)(),
            { trackUserProfileAction: u } = (0, I.NJ)(),
            d = () => {
                u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    i?.(),
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                        return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: s });
                    });
            },
            _ = null != s ? s.label() : C.intl.string(C.t.evw0oz),
            f = (0, r.jsxs)("div", {
                className: b.Qs,
                children: [
                    (0, r.jsx)(c.U1e, { size: "xs", className: b.Tw, colorClass: b.qv }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: a()(b.ch, null != s && b.R9),
                        children: _,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(R, { children: f }),
                (0, r.jsx)("div", {
                    className: a()(b.kL, b.LL),
                    ref: t,
                    children: (0, r.jsx)(c.DUT, {
                        className: b.A7,
                        "aria-label": C.intl.string(C.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: d,
                        focusProps: { ringClassName: b.hN },
                        children: (0, r.jsxs)("span", {
                            className: a()(b.vW, b.vk),
                            children: [
                                (0, r.jsx)(c.U1e, { size: "xs", className: b.Tw, colorClass: b.qv }),
                                (0, r.jsxs)(c.AC4, { id: o, children: [C.intl.string(C.t.EVV6uZ), ": ", _] }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: a()(b.ch, null != s && b.R9),
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
                text: s,
                animate: f,
                className: p,
                renderToolbar: h,
                onShowToolbar: E,
                placeholderText: g,
                hasEntered: A = !0,
            } = e,
            S = (0, T.NR)(),
            { trackUserProfileAction: y } = (0, I.NJ)(),
            v = (0, m.h)({ location: "CustomStatusBubble" }),
            O = 1.25 * (null != n),
            D = 36 + O,
            L = 144 + O,
            w = i.useRef(null),
            x = i.useRef(null),
            M = i.useRef(null),
            P = i.useRef(D),
            k = i.useRef(L),
            U = null != n && null == s,
            [G, F] = i.useState(!1),
            [V, B] = i.useState(!0),
            [H, j] = i.useState(!U && A),
            Y = A && G,
            W = (0, l.bG)([d.A], () => d.A.useReducedMotion),
            [K] = i.useState(() => new u.Ep());
        i.useEffect(() => () => K.stop(), [K]),
            i.useEffect(() => {
                S?.onInteractionPopoutTargetRefChange(w);
            }, [S]);
        let [z, $] = (0, c.zhh)(() => ({ maxHeight: `${P.current}px`, config: { clamp: !0, duration: 150 } }));
        i.useLayoutEffect(() => {
            if ((F(!0), null == x.current || null == M.current || !Y)) return;
            let e = x.current.getBoundingClientRect().height,
                t = M.current.getBoundingClientRect().height;
            j(t > e),
                (P.current = e),
                (k.current = t),
                $({ maxHeight: `${Math.min(V ? P.current : k.current, V ? D : L)}px` });
        }, [Y, s, n, $, V, D, L]);
        let q = (e) => {
                H &&
                    (e
                        ? $({
                              maxHeight: `${Math.min(k.current, L)}px`,
                              delay: 300 * !W,
                              config: { clamp: !0, duration: 150 * !W },
                          })
                        : $({ maxHeight: `${Math.min(P.current, D)}px`, delay: 0 }),
                    W ? B(!e) : K.start(e ? 300 : 150, () => B(!e)));
            },
            Z =
                null != n
                    ? (0, r.jsx)(_.A, { emoji: n, animate: f, hideTooltip: !1, tooltipDelay: N.In, className: b.H0 })
                    : null,
            X = null != s ? (0, r.jsx)(c.Text, { variant: "text-sm/normal", className: b.qS, children: s }) : null,
            Q =
                void 0 === g || (null != n && v)
                    ? null
                    : (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${C.intl.string(C.t.EVV6uZ)}: ${g}`,
                          className: a()(b.qS, v && b.R9),
                          children: g ?? "",
                      }),
            J = null == X || "" === s ? Q : X,
            ee = (0, r.jsxs)("div", { ref: x, className: b.Qs, children: [Z, J] }),
            et = (0, r.jsxs)("div", { ref: M, className: a()(b.Qs, b.m2), children: [Z, J] }),
            en = (0, r.jsx)("div", {
                ref: t,
                className: b.A7,
                children: (0, r.jsx)("span", {
                    className: b.vW,
                    children: (0, r.jsxs)(o.animated.div, {
                        style: z,
                        className: a()(b.Qs, { [b.m2]: !V }),
                        children: [Z, J],
                    }),
                }),
            }),
            er = (0, r.jsxs)(R, { children: [ee, et] });
        return null == E
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      er,
                      (0, r.jsxs)("div", {
                          ref: w,
                          className: a()(b.kL, p),
                          onMouseEnter: () => {
                              y({ action: "HOVER_CUSTOM_STATUS" }), q(!0);
                          },
                          onMouseLeave: () => {
                              q(!1);
                          },
                          onFocus: () => q(!0),
                          onBlur: () => q(!1),
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: b.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": C.intl.formatToPlainString(C.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: en,
                                  }),
                              }),
                              h?.(H),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      er,
                      (0, r.jsxs)("div", {
                          ref: w,
                          className: a()(b.kL, p),
                          onFocus: () => {
                              E(!0), q(!0);
                          },
                          onBlur: (e) => {
                              w.current?.contains(e.relatedTarget) || (E(!1), q(!1));
                          },
                          onMouseEnter: () => {
                              y({ action: "HOVER_CUSTOM_STATUS" }), E(!0), q(!0);
                          },
                          onMouseLeave: () => {
                              E(!1), q(!1);
                          },
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: b.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": C.intl.formatToPlainString(C.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: en,
                                  }),
                              }),
                              h?.(H),
                          ],
                      }),
                  ],
              });
    }),
    L = i.forwardRef(function (e, t) {
        let { emoji: n, text: s, onCloseProfile: a, ...o } = e,
            [l, u] = i.useState(!1);
        return (0, r.jsx)(D, {
            ...o,
            ref: t,
            emoji: n,
            text: s,
            className: b.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, r.jsx)(v.A, { isVisible: l, isExpandable: e, onCloseProfile: a }),
        });
    });
function w(e) {
    let { emoji: t, text: n, user: s, guildId: a, channelId: o, themeType: l, ...u } = e,
        { trackUserProfileAction: c } = (0, I.NJ)(),
        { interactionType: d, interactionSource: _, resetInteraction: f } = (0, T.Pq)(),
        p = _ === N.dS.STATUS && d === N.AQ.REACT,
        h = _ === N.dS.STATUS && d === N.AQ.REPLY,
        m = p || h,
        E = i.useRef(null),
        A = i.useRef(t),
        v = i.useRef(n);
    i.useEffect(() => {
        _ === N.dS.STATUS && ((A.current !== t || v.current !== n) && f(), (A.current = t), (v.current = n));
    }, [_, f, t, n]);
    let [C, R] = i.useState(!1),
        O = i.useCallback(
            (e) => {
                (e || !m) && R(e);
            },
            [m],
        ),
        L = (e) =>
            null == e ? null : null != e.id ? `\`:${e.name}:\`` : g.Ay.translateSurrogatesToInlineEmoji(e.name),
        w = (e, t) => (null == e ? t : `${e} ${t}`),
        x = () => {
            let e = L(t);
            return null == n ? e : w(e, n);
        };
    return (0, r.jsx)(S.A, {
        user: s,
        guildId: a,
        channelId: o,
        themeType: l,
        sourceDetails: x(),
        sourceType: N.dS.STATUS,
        onAction: c,
        onClose: () => R(!1),
        children: () =>
            (0, r.jsx)(D, {
                ...u,
                ref: E,
                emoji: t,
                text: n,
                themeType: l,
                className: m ? b.zf : void 0,
                onShowToolbar: O,
                renderToolbar: (e) =>
                    (0, r.jsx)(y.Ay, {
                        targetRef: E,
                        user: s,
                        sourceType: N.dS.STATUS,
                        isVisible: C && !m,
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
            previewText: s,
            previewEmoji: a,
            placeholderText: o,
            prompt: u,
            disableToolbar: c = !1,
            ...d
        } = e,
        _ = (0, E.A)(n.id),
        { analyticsLocations: h } = (0, p.Ay)(f.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        m = (0, l.bG)([A.default], () => A.default.getId() === n.id),
        g = m && !c,
        I = !m && !n.bot && !c;
    if (null != s || null != a) {
        let e = a ?? null,
            n = null != s && "" !== s ? s : null;
        return (0, r.jsx)(p.f5, {
            value: h,
            children: (0, r.jsx)(D, { emoji: e, text: n, placeholderText: o, ref: t, ...d }),
        });
    }
    let T = _?.emoji ?? null,
        S = _?.state ?? null,
        y = null != S && "" !== S ? S : null;
    return null != T || null != y || g
        ? null == T && null == y
            ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(O, { onCloseProfile: i, prompt: u, ref: t, ...d }) })
            : I
              ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(w, { user: n, emoji: T, text: y, ...d }) })
              : g
                ? (0, r.jsx)(p.f5, {
                      value: h,
                      children: (0, r.jsx)(L, { emoji: T, text: y, onCloseProfile: i, ref: t, ...d }),
                  })
                : (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(D, { emoji: T, text: y, ref: t, ...d }) })
        : null;
});
