"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(311907),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    _ = n(834730),
    f = n(939249),
    p = n(140735),
    h = n(717421),
    E = n(187322),
    m = n(775602),
    g = n(51183),
    A = n(793574),
    I = n(688810),
    T = n(915089),
    S = n(410540),
    y = n(7584),
    N = n(961350),
    v = n(183555),
    C = n(679492),
    O = n(563437),
    R = n(8925),
    b = n(939496),
    D = n(933639),
    L = n(518477);
n(745541);
var w = n(996988),
    M = n(985018),
    P = n(713305);
function x(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(P.nL, n),
        children: (0, r.jsx)("div", {
            className: P.A7,
            children: (0, r.jsx)("span", { className: P.vW, children: t }),
        }),
    });
}
let k = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: s } = e,
            o = (0, T.GV)(),
            { analyticsLocations: l } = (0, I.Ay)(),
            { trackUserProfileAction: u } = (0, v.NJ)(),
            { themeType: h } = (0, b.E)(),
            E = null != s ? s.label() : M.intl.string(M.t.evw0oz),
            m = (0, r.jsxs)("div", {
                className: P.Qs,
                children: [
                    (0, r.jsx)(d.U, { size: "xs", className: P.Tw, colorClass: P.qv }),
                    (0, r.jsx)(_.E, {
                        variant: "text-sm/normal",
                        className: a()(P.ch, null != s && P.R9),
                        children: E,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x, { children: m }),
                (0, r.jsx)("div", {
                    className: a()(P.kL, P.LL),
                    ref: t,
                    children: (0, r.jsx)(f.D, {
                        className: P.A7,
                        "aria-label": M.intl.string(M.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: () => {
                            u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                i?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                                        return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: s });
                                    },
                                    h === w.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: P.hN },
                        children: (0, r.jsxs)("span", {
                            className: a()(P.vW, P.vk),
                            children: [
                                (0, r.jsx)(d.U, { size: "xs", className: P.Tw, colorClass: P.qv }),
                                (0, r.jsxs)(p.A, { id: o, children: [M.intl.string(M.t.EVV6uZ), ": ", E] }),
                                (0, r.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    className: a()(P.ch, null != s && P.R9),
                                    "aria-hidden": "true",
                                    children: E,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    U = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: s,
                animate: c,
                className: d,
                renderToolbar: f,
                onShowToolbar: p,
                placeholderText: A,
                hasEntered: I = !0,
            } = e,
            T = (0, C.NR)(),
            { trackUserProfileAction: S } = (0, v.NJ)(),
            y = 1.25 * (null != n),
            N = 36 + y,
            O = 144 + y,
            R = i.useRef(null),
            b = i.useRef(null),
            D = i.useRef(null),
            w = i.useRef(N),
            k = i.useRef(O),
            U = null != n && null == s,
            [G, F] = i.useState(!1),
            [V, B] = i.useState(!0),
            [H, j] = i.useState(!U && I),
            Y = I && G,
            W = (0, l.bG)([m.A], () => m.A.useReducedMotion),
            [K] = i.useState(() => new u.Ep());
        i.useEffect(() => () => K.stop(), [K]),
            i.useEffect(() => {
                T?.onInteractionPopoutTargetRefChange(R);
            }, [T]);
        let [$, z] = (0, h.z)(() => ({ maxHeight: `${w.current}px`, config: { clamp: !0, duration: 150 } }));
        i.useLayoutEffect(() => {
            if ((F(!0), null == b.current || null == D.current || !Y)) return;
            let e = b.current.getBoundingClientRect().height,
                t = D.current.getBoundingClientRect().height;
            j(t > e),
                (w.current = e),
                (k.current = t),
                z({ maxHeight: `${Math.min(V ? w.current : k.current, V ? N : O)}px` });
        }, [Y, s, n, z, V, N, O]);
        let q = (e) => {
                H &&
                    (e
                        ? z({
                              maxHeight: `${Math.min(k.current, O)}px`,
                              delay: 300 * !W,
                              config: { clamp: !0, duration: 150 * !W },
                          })
                        : z({ maxHeight: `${Math.min(w.current, N)}px`, delay: 0 }),
                    W ? B(!e) : K.start(e ? 300 : 150, () => B(!e)));
            },
            X =
                null != n
                    ? (0, r.jsx)(g.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: L.In, className: P.H0 })
                    : null,
            Q = null != s ? (0, r.jsx)(_.E, { variant: "text-sm/normal", className: P.qS, children: s }) : null,
            Z =
                void 0 !== A && null == n
                    ? (0, r.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${M.intl.string(M.t.EVV6uZ)}: ${A}`,
                          className: a()(P.qS, P.R9),
                          children: A ?? "",
                      })
                    : null,
            J = null == Q || "" === s ? Z : Q,
            ee = (0, r.jsxs)("div", { ref: b, className: P.Qs, children: [X, J] }),
            et = (0, r.jsxs)("div", { ref: D, className: a()(P.Qs, P.m2), children: [X, J] }),
            en = (0, r.jsx)("div", {
                ref: t,
                className: P.A7,
                children: (0, r.jsx)("span", {
                    className: P.vW,
                    children: (0, r.jsxs)(o.animated.div, {
                        style: $,
                        className: a()(P.Qs, { [P.m2]: !V }),
                        children: [X, J],
                    }),
                }),
            }),
            er = (0, r.jsxs)(x, { children: [ee, et] });
        return null == p
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      er,
                      (0, r.jsxs)("div", {
                          ref: R,
                          className: a()(P.kL, d),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), q(!0);
                          },
                          onMouseLeave: () => {
                              q(!1);
                          },
                          onFocus: () => q(!0),
                          onBlur: () => q(!1),
                          children: [
                              (0, r.jsx)(E.vN, {
                                  children: (0, r.jsx)("div", {
                                      className: P.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": M.intl.formatToPlainString(M.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: en,
                                  }),
                              }),
                              f?.(H),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      er,
                      (0, r.jsxs)("div", {
                          ref: R,
                          className: a()(P.kL, d),
                          onFocus: () => {
                              p(!0), q(!0);
                          },
                          onBlur: (e) => {
                              R.current?.contains(e.relatedTarget) || (p(!1), q(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), p(!0), q(!0);
                          },
                          onMouseLeave: () => {
                              p(!1), q(!1);
                          },
                          children: [
                              (0, r.jsx)(E.vN, {
                                  children: (0, r.jsx)("div", {
                                      className: P.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": M.intl.formatToPlainString(M.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: en,
                                  }),
                              }),
                              f?.(H),
                          ],
                      }),
                  ],
              });
    }),
    G = i.forwardRef(function (e, t) {
        let { emoji: n, text: s, onCloseProfile: a, ...o } = e,
            [l, u] = i.useState(!1);
        return (0, r.jsx)(U, {
            ...o,
            ref: t,
            emoji: n,
            text: s,
            className: P.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, r.jsx)(D.A, { isVisible: l, isExpandable: e, onCloseProfile: a }),
        });
    });
function F(e) {
    let t,
        { emoji: n, text: s, user: a, guildId: o, channelId: l, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, v.NJ)(),
        { interactionType: _, interactionSource: f, resetInteraction: p } = (0, C.Pq)(),
        h = f === L.dS.STATUS && _ === L.AQ.REACT,
        E = f === L.dS.STATUS && _ === L.AQ.REPLY,
        m = h || E,
        g = i.useRef(null),
        A = i.useRef(n),
        I = i.useRef(s);
    i.useEffect(() => {
        f === L.dS.STATUS && ((A.current !== n || I.current !== s) && p(), (A.current = n), (I.current = s));
    }, [f, p, n, s]);
    let [T, S] = i.useState(!1),
        N = i.useCallback(
            (e) => {
                (e || !m) && S(e);
            },
            [m],
        );
    return (0, r.jsx)(O.A, {
        user: a,
        guildId: o,
        channelId: l,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : y.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == s ? t : null == t ? s : `${t} ${s}`),
        sourceType: L.dS.STATUS,
        onAction: d,
        onClose: () => S(!1),
        children: () =>
            (0, r.jsx)(U, {
                ...c,
                ref: g,
                emoji: n,
                text: s,
                themeType: u,
                className: m ? P.zf : void 0,
                onShowToolbar: N,
                renderToolbar: (e) =>
                    (0, r.jsx)(R.Ay, {
                        targetRef: g,
                        user: a,
                        sourceType: L.dS.STATUS,
                        isVisible: T && !m,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let V = i.forwardRef(function (e, t) {
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
        _ = (0, S.A)(n.id),
        { analyticsLocations: f } = (0, I.Ay)(A.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        p = (0, l.bG)([N.default], () => N.default.getId() === n.id),
        h = p && !c,
        E = !p && !n.bot && !c;
    if (null != s || null != a)
        return (0, r.jsx)(I.f5, {
            value: f,
            children: (0, r.jsx)(U, {
                emoji: a ?? null,
                text: null != s && "" !== s ? s : null,
                placeholderText: o,
                ref: t,
                ...d,
            }),
        });
    let m = _?.emoji ?? null,
        g = _?.state ?? null,
        T = null != g && "" !== g ? g : null;
    return null != m || null != T || h
        ? null == m && null == T
            ? (0, r.jsx)(I.f5, { value: f, children: (0, r.jsx)(k, { onCloseProfile: i, prompt: u, ref: t, ...d }) })
            : E
              ? (0, r.jsx)(I.f5, { value: f, children: (0, r.jsx)(F, { user: n, emoji: m, text: T, ...d }) })
              : h
                ? (0, r.jsx)(I.f5, {
                      value: f,
                      children: (0, r.jsx)(G, { emoji: m, text: T, onCloseProfile: i, ref: t, ...d }),
                  })
                : (0, r.jsx)(I.f5, { value: f, children: (0, r.jsx)(U, { emoji: m, text: T, ref: t, ...d }) })
        : null;
});
