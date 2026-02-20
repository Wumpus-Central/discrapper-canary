"use strict";
n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(475539),
    l = n(311907),
    u = n(451988),
    c = n(397927),
    d = n(775602),
    _ = n(51183),
    f = n(793574),
    p = n(688810),
    h = n(915089),
    m = n(410540),
    E = n(7584),
    g = n(961350),
    A = n(183555),
    I = n(679492),
    T = n(563437),
    S = n(8925),
    y = n(933639),
    v = n(518477);
n(745541);
var N = n(985018),
    C = n(178740);
function b(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(C.nL, n),
        children: (0, r.jsx)("div", {
            className: C.A7,
            children: (0, r.jsx)("span", { className: C.vW, children: t }),
        }),
    });
}
let R = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: s } = e,
            o = (0, h.GV)(),
            { analyticsLocations: l } = (0, p.Ay)(),
            { trackUserProfileAction: u } = (0, A.NJ)(),
            d = () => {
                u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    i?.(),
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                        return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: s });
                    });
            },
            _ = null != s ? s.label() : N.intl.string(N.t.evw0oz),
            f = (0, r.jsxs)("div", {
                className: C.Qs,
                children: [
                    (0, r.jsx)(c.U1e, { size: "xs", className: C.Tw, colorClass: C.qv }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: a()(C.ch, null != s && C.R9),
                        children: _,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b, { children: f }),
                (0, r.jsx)("div", {
                    className: a()(C.kL, C.LL),
                    ref: t,
                    children: (0, r.jsx)(c.DUT, {
                        className: C.A7,
                        "aria-label": N.intl.string(N.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: d,
                        focusProps: { ringClassName: C.hN },
                        children: (0, r.jsxs)("span", {
                            className: a()(C.vW, C.vk),
                            children: [
                                (0, r.jsx)(c.U1e, { size: "xs", className: C.Tw, colorClass: C.qv }),
                                (0, r.jsxs)(c.AC4, { id: o, children: [N.intl.string(N.t.EVV6uZ), ": ", _] }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: a()(C.ch, null != s && C.R9),
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
    O = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: s,
                animate: f,
                className: p,
                renderToolbar: h,
                onShowToolbar: m,
                placeholderText: E,
                hasEntered: g = !0,
            } = e,
            T = (0, I.NR)(),
            { trackUserProfileAction: S } = (0, A.NJ)(),
            y = 1.25 * (null != n),
            R = 36 + y,
            O = 144 + y,
            D = i.useRef(null),
            L = i.useRef(null),
            w = i.useRef(null),
            x = i.useRef(R),
            M = i.useRef(O),
            P = null != n && null == s,
            [k, U] = i.useState(!1),
            [G, F] = i.useState(!0),
            [V, B] = i.useState(!P && g),
            H = g && k,
            j = (0, l.bG)([d.A], () => d.A.useReducedMotion),
            [Y] = i.useState(() => new u.Ep());
        i.useEffect(() => () => Y.stop(), [Y]),
            i.useEffect(() => {
                T?.onInteractionPopoutTargetRefChange(D);
            }, [T]);
        let [W, K] = (0, c.zhh)(() => ({ maxHeight: `${x.current}px`, config: { clamp: !0, duration: 150 } }));
        i.useLayoutEffect(() => {
            if ((U(!0), null == L.current || null == w.current || !H)) return;
            let e = L.current.getBoundingClientRect().height,
                t = w.current.getBoundingClientRect().height;
            B(t > e),
                (x.current = e),
                (M.current = t),
                K({ maxHeight: `${Math.min(G ? x.current : M.current, G ? R : O)}px` });
        }, [H, s, n, K, G, R, O]);
        let z = (e) => {
                V &&
                    (e
                        ? K({
                              maxHeight: `${Math.min(M.current, O)}px`,
                              delay: 300 * !j,
                              config: { clamp: !0, duration: 150 * !j },
                          })
                        : K({ maxHeight: `${Math.min(x.current, R)}px`, delay: 0 }),
                    j ? F(!e) : Y.start(e ? 300 : 150, () => F(!e)));
            },
            $ =
                null != n
                    ? (0, r.jsx)(_.A, { emoji: n, animate: f, hideTooltip: !1, tooltipDelay: v.In, className: C.H0 })
                    : null,
            q = null != s ? (0, r.jsx)(c.Text, { variant: "text-sm/normal", className: C.qS, children: s }) : null,
            Z =
                void 0 !== E && null == n
                    ? (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${N.intl.string(N.t.EVV6uZ)}: ${E}`,
                          className: a()(C.qS, C.R9),
                          children: E ?? "",
                      })
                    : null,
            X = null == q || "" === s ? Z : q,
            Q = (0, r.jsxs)("div", { ref: L, className: C.Qs, children: [$, X] }),
            J = (0, r.jsxs)("div", { ref: w, className: a()(C.Qs, C.m2), children: [$, X] }),
            ee = (0, r.jsx)("div", {
                ref: t,
                className: C.A7,
                children: (0, r.jsx)("span", {
                    className: C.vW,
                    children: (0, r.jsxs)(o.animated.div, {
                        style: W,
                        className: a()(C.Qs, { [C.m2]: !G }),
                        children: [$, X],
                    }),
                }),
            }),
            et = (0, r.jsxs)(b, { children: [Q, J] });
        return null == m
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      et,
                      (0, r.jsxs)("div", {
                          ref: D,
                          className: a()(C.kL, p),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), z(!0);
                          },
                          onMouseLeave: () => {
                              z(!1);
                          },
                          onFocus: () => z(!0),
                          onBlur: () => z(!1),
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: C.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": N.intl.formatToPlainString(N.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(V),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      et,
                      (0, r.jsxs)("div", {
                          ref: D,
                          className: a()(C.kL, p),
                          onFocus: () => {
                              m(!0), z(!0);
                          },
                          onBlur: (e) => {
                              D.current?.contains(e.relatedTarget) || (m(!1), z(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), m(!0), z(!0);
                          },
                          onMouseLeave: () => {
                              m(!1), z(!1);
                          },
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: C.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": N.intl.formatToPlainString(N.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(V),
                          ],
                      }),
                  ],
              });
    }),
    D = i.forwardRef(function (e, t) {
        let { emoji: n, text: s, onCloseProfile: a, ...o } = e,
            [l, u] = i.useState(!1);
        return (0, r.jsx)(O, {
            ...o,
            ref: t,
            emoji: n,
            text: s,
            className: C.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, r.jsx)(y.A, { isVisible: l, isExpandable: e, onCloseProfile: a }),
        });
    });
function L(e) {
    let { emoji: t, text: n, user: s, guildId: a, channelId: o, themeType: l, ...u } = e,
        { trackUserProfileAction: c } = (0, A.NJ)(),
        { interactionType: d, interactionSource: _, resetInteraction: f } = (0, I.Pq)(),
        p = _ === v.dS.STATUS && d === v.AQ.REACT,
        h = _ === v.dS.STATUS && d === v.AQ.REPLY,
        m = p || h,
        g = i.useRef(null),
        y = i.useRef(t),
        N = i.useRef(n);
    i.useEffect(() => {
        _ === v.dS.STATUS && ((y.current !== t || N.current !== n) && f(), (y.current = t), (N.current = n));
    }, [_, f, t, n]);
    let [b, R] = i.useState(!1),
        D = i.useCallback(
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
    return (0, r.jsx)(T.A, {
        user: s,
        guildId: a,
        channelId: o,
        themeType: l,
        sourceDetails: x(),
        sourceType: v.dS.STATUS,
        onAction: c,
        onClose: () => R(!1),
        children: () =>
            (0, r.jsx)(O, {
                ...u,
                ref: g,
                emoji: t,
                text: n,
                themeType: l,
                className: m ? C.zf : void 0,
                onShowToolbar: D,
                renderToolbar: (e) =>
                    (0, r.jsx)(S.Ay, {
                        targetRef: g,
                        user: s,
                        sourceType: v.dS.STATUS,
                        isVisible: b && !m,
                        isExpandable: e,
                        onAction: c,
                    }),
            }),
    });
}
let w = i.forwardRef(function (e, t) {
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
        _ = (0, m.A)(n.id),
        { analyticsLocations: h } = (0, p.Ay)(f.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        E = (0, l.bG)([g.default], () => g.default.getId() === n.id),
        A = E && !c,
        I = !E && !n.bot && !c;
    if (null != s || null != a) {
        let e = a ?? null,
            n = null != s && "" !== s ? s : null;
        return (0, r.jsx)(p.f5, {
            value: h,
            children: (0, r.jsx)(O, { emoji: e, text: n, placeholderText: o, ref: t, ...d }),
        });
    }
    let T = _?.emoji ?? null,
        S = _?.state ?? null,
        y = null != S && "" !== S ? S : null;
    return null != T || null != y || A
        ? null == T && null == y
            ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(R, { onCloseProfile: i, prompt: u, ref: t, ...d }) })
            : I
              ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(L, { user: n, emoji: T, text: y, ...d }) })
              : A
                ? (0, r.jsx)(p.f5, {
                      value: h,
                      children: (0, r.jsx)(D, { emoji: T, text: y, onCloseProfile: i, ref: t, ...d }),
                  })
                : (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(O, { emoji: T, text: y, ref: t, ...d }) })
        : null;
});
