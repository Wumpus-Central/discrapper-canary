n.d(t, { A: () => F });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    o = n(517738),
    s = n(311907),
    c = n(451988),
    u = n(192308),
    d = n(245604),
    f = n(834730),
    _ = n(939249),
    h = n(140735),
    A = n(717421),
    p = n(187322),
    m = n(775602),
    S = n(51183),
    g = n(793574),
    b = n(688810),
    x = n(915089),
    T = n(410540),
    E = n(7584),
    R = n(961350),
    v = n(183555),
    C = n(679492),
    y = n(563437),
    j = n(8925),
    I = n(939496),
    L = n(933639),
    P = n(518477);
n(745541);
var N = n(996988),
    U = n(985018),
    w = n(713305);
function k(e) {
    let { children: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: i()(w.nL, n),
        children: (0, a.jsx)("div", {
            className: w.A7,
            children: (0, a.jsx)("span", { className: w.vW, children: t }),
        }),
    });
}
let M = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: l } = e,
            o = (0, x.GV)(),
            { analyticsLocations: s } = (0, b.Ay)(),
            { trackUserProfileAction: c } = (0, v.NJ)(),
            { themeType: A } = (0, I.E)(),
            p = null != l ? l.label() : U.intl.string(U.t.evw0oz),
            m = (0, a.jsxs)("div", {
                className: w.Qs,
                children: [
                    (0, a.jsx)(d.U, { size: "xs", className: w.Tw, colorClass: w.qv }),
                    (0, a.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: i()(w.ch, null != l && w.R9),
                        children: p,
                    }),
                ],
            });
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(k, { children: m }),
                (0, a.jsx)("div", {
                    className: i()(w.kL, w.LL),
                    ref: t,
                    children: (0, a.jsx)(_.D, {
                        className: w.A7,
                        "aria-label": U.intl.string(U.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: () => {
                            c({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, u.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("28367"),
                                            n.e("27411"),
                                            n.e("82166"),
                                        ]).then(n.bind(n, 431374));
                                        return (t) => (0, a.jsx)(e, { ...t, sourceAnalyticsLocations: s, prompt: l });
                                    },
                                    A === N.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: w.hN },
                        children: (0, a.jsxs)("span", {
                            className: i()(w.vW, w.vk),
                            children: [
                                (0, a.jsx)(d.U, { size: "xs", className: w.Tw, colorClass: w.qv }),
                                (0, a.jsxs)(h.A, { id: o, children: [U.intl.string(U.t.EVV6uZ), ": ", p] }),
                                (0, a.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: i()(w.ch, null != l && w.R9),
                                    "aria-hidden": "true",
                                    children: p,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    O = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: l,
                animate: u,
                className: d,
                renderToolbar: _,
                onShowToolbar: h,
                placeholderText: g,
                hasEntered: b = !0,
            } = e,
            x = (0, C.NR)(),
            { trackUserProfileAction: T } = (0, v.NJ)(),
            E = 1.25 * (null != n),
            R = 36 + E,
            y = 144 + E,
            j = r.useRef(null),
            I = r.useRef(null),
            L = r.useRef(null),
            N = r.useRef(R),
            M = r.useRef(y),
            O = null != n && null == l,
            [V, $] = r.useState(!1),
            [F, D] = r.useState(!0),
            [G, B] = r.useState(!O && b),
            H = b && V,
            Y = (0, s.bG)([m.A], () => m.A.useReducedMotion),
            [K] = r.useState(() => new c.Ep());
        r.useEffect(() => () => K.stop(), [K]),
            r.useEffect(() => {
                x?.onInteractionPopoutTargetRefChange(j);
            }, [x]);
        let [z, Q] = (0, A.z)(() => ({ maxHeight: `${N.current}px`, config: { clamp: !0, duration: 150 } }));
        r.useLayoutEffect(() => {
            if (($(!0), null == I.current || null == L.current || !H)) return;
            let e = I.current.getBoundingClientRect().height,
                t = L.current.getBoundingClientRect().height;
            B(t > e),
                (N.current = e),
                (M.current = t),
                Q({ maxHeight: `${Math.min(F ? N.current : M.current, F ? R : y)}px` });
        }, [H, l, n, Q, F, R, y]);
        let W = (e) => {
                G &&
                    (e
                        ? Q({
                              maxHeight: `${Math.min(M.current, y)}px`,
                              delay: 300 * !Y,
                              config: { clamp: !0, duration: 150 * !Y },
                          })
                        : Q({ maxHeight: `${Math.min(N.current, R)}px`, delay: 0 }),
                    Y ? D(!e) : K.start(e ? 300 : 150, () => D(!e)));
            },
            q =
                null != n
                    ? (0, a.jsx)(S.A, { emoji: n, animate: u, hideTooltip: !1, tooltipDelay: P.In, className: w.H0 })
                    : null,
            X = null != l ? (0, a.jsx)(f.E, { variant: "text-sm/normal", className: w.qS, children: l }) : null,
            J =
                void 0 !== g && null == n
                    ? (0, a.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${U.intl.string(U.t.EVV6uZ)}: ${g}`,
                          className: i()(w.qS, w.R9),
                          children: g ?? "",
                      })
                    : null,
            Z = null == X || "" === l ? J : X,
            ee = (0, a.jsxs)("div", { ref: I, className: w.Qs, children: [q, Z] }),
            et = (0, a.jsxs)("div", { ref: L, className: i()(w.Qs, w.m2), children: [q, Z] }),
            en = (0, a.jsx)("div", {
                ref: t,
                className: w.A7,
                children: (0, a.jsx)("span", {
                    className: w.vW,
                    children: (0, a.jsxs)(o.animated.div, {
                        style: z,
                        className: i()(w.Qs, { [w.m2]: !F }),
                        children: [q, Z],
                    }),
                }),
            }),
            ea = (0, a.jsxs)(k, { children: [ee, et] });
        return null == h
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      ea,
                      (0, a.jsxs)("div", {
                          ref: j,
                          className: i()(w.kL, d),
                          onMouseEnter: () => {
                              T({ action: "HOVER_CUSTOM_STATUS" }), W(!0);
                          },
                          onMouseLeave: () => {
                              W(!1);
                          },
                          onFocus: () => W(!0),
                          onBlur: () => W(!1),
                          children: [
                              (0, a.jsx)(p.vN, {
                                  children: (0, a.jsx)("div", {
                                      className: w.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": U.intl.formatToPlainString(U.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: l,
                                      }),
                                      children: en,
                                  }),
                              }),
                              _?.(G),
                          ],
                      }),
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      ea,
                      (0, a.jsxs)("div", {
                          ref: j,
                          className: i()(w.kL, d),
                          onFocus: () => {
                              h(!0), W(!0);
                          },
                          onBlur: (e) => {
                              j.current?.contains(e.relatedTarget) || (h(!1), W(!1));
                          },
                          onMouseEnter: () => {
                              T({ action: "HOVER_CUSTOM_STATUS" }), h(!0), W(!0);
                          },
                          onMouseLeave: () => {
                              h(!1), W(!1);
                          },
                          children: [
                              (0, a.jsx)(p.vN, {
                                  children: (0, a.jsx)("div", {
                                      className: w.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": U.intl.formatToPlainString(U.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: l,
                                      }),
                                      children: en,
                                  }),
                              }),
                              _?.(G),
                          ],
                      }),
                  ],
              });
    }),
    V = r.forwardRef(function (e, t) {
        let { emoji: n, text: l, onCloseProfile: i, ...o } = e,
            [s, c] = r.useState(!1);
        return (0, a.jsx)(O, {
            ...o,
            ref: t,
            emoji: n,
            text: l,
            className: w.LL,
            onShowToolbar: c,
            renderToolbar: (e) => (0, a.jsx)(L.A, { isVisible: s, isExpandable: e, onCloseProfile: i }),
        });
    });
function $(e) {
    let t,
        { emoji: n, text: l, user: i, guildId: o, channelId: s, themeType: c, ...u } = e,
        { trackUserProfileAction: d } = (0, v.NJ)(),
        { interactionType: f, interactionSource: _, resetInteraction: h } = (0, C.Pq)(),
        A = _ === P.dS.STATUS && f === P.AQ.REACT,
        p = _ === P.dS.STATUS && f === P.AQ.REPLY,
        m = A || p,
        S = r.useRef(null),
        g = r.useRef(n),
        b = r.useRef(l);
    r.useEffect(() => {
        _ === P.dS.STATUS && ((g.current !== n || b.current !== l) && h(), (g.current = n), (b.current = l));
    }, [_, h, n, l]);
    let [x, T] = r.useState(!1),
        R = r.useCallback(
            (e) => {
                (e || !m) && T(e);
            },
            [m],
        );
    return (0, a.jsx)(y.A, {
        user: i,
        guildId: o,
        channelId: s,
        themeType: c,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : E.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == l ? t : null == t ? l : `${t} ${l}`),
        sourceType: P.dS.STATUS,
        onAction: d,
        onClose: () => T(!1),
        children: () =>
            (0, a.jsx)(O, {
                ...u,
                ref: S,
                emoji: n,
                text: l,
                themeType: c,
                className: m ? w.zf : void 0,
                onShowToolbar: R,
                renderToolbar: (e) =>
                    (0, a.jsx)(j.Ay, {
                        targetRef: S,
                        user: i,
                        sourceType: P.dS.STATUS,
                        isVisible: x && !m,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let F = r.forwardRef(function (e, t) {
    let {
            user: n,
            onCloseProfile: r,
            previewText: l,
            previewEmoji: i,
            placeholderText: o,
            prompt: c,
            disableToolbar: u = !1,
            ...d
        } = e,
        f = (0, T.A)(n.id),
        { analyticsLocations: _ } = (0, b.Ay)(g.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        h = (0, s.bG)([R.default], () => R.default.getId() === n.id),
        A = h && !u,
        p = !h && !n.bot && !u;
    if (null != l || null != i)
        return (0, a.jsx)(b.f5, {
            value: _,
            children: (0, a.jsx)(O, {
                emoji: i ?? null,
                text: null != l && "" !== l ? l : null,
                placeholderText: o,
                ref: t,
                ...d,
            }),
        });
    let m = f?.emoji ?? null,
        S = f?.state ?? null,
        x = null != S && "" !== S ? S : null;
    return null != m || null != x || A
        ? null == m && null == x
            ? (0, a.jsx)(b.f5, { value: _, children: (0, a.jsx)(M, { onCloseProfile: r, prompt: c, ref: t, ...d }) })
            : p
              ? (0, a.jsx)(b.f5, { value: _, children: (0, a.jsx)($, { user: n, emoji: m, text: x, ...d }) })
              : A
                ? (0, a.jsx)(b.f5, {
                      value: _,
                      children: (0, a.jsx)(V, { emoji: m, text: x, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, a.jsx)(b.f5, { value: _, children: (0, a.jsx)(O, { emoji: m, text: x, ref: t, ...d }) })
        : null;
});
