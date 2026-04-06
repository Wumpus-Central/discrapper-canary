"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(687498),
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
    y = n(939496),
    v = n(933639),
    N = n(518477);
n(745541);
var C = n(996988),
    R = n(985018),
    O = n(905897);
function b(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(O.nL, n),
        children: (0, r.jsx)("div", {
            className: O.A7,
            children: (0, r.jsx)("span", { className: O.vW, children: t }),
        }),
    });
}
let D = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: s } = e,
            o = (0, h.GV)(),
            { analyticsLocations: l } = (0, p.Ay)(),
            { trackUserProfileAction: u } = (0, A.NJ)(),
            { themeType: d } = (0, y.E)(),
            _ = () => {
                u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    i?.(),
                    (0, c.mMO)(
                        async () => {
                            let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                            return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: s });
                        },
                        d === C.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                    );
            },
            f = null != s ? s.label() : R.intl.string(R.t.evw0oz),
            m = (0, r.jsxs)("div", {
                className: O.Qs,
                children: [
                    (0, r.jsx)(c.U1e, { size: "xs", className: O.Tw, colorClass: O.qv }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: a()(O.ch, null != s && O.R9),
                        children: f,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b, { children: m }),
                (0, r.jsx)("div", {
                    className: a()(O.kL, O.LL),
                    ref: t,
                    children: (0, r.jsx)(c.DUT, {
                        className: O.A7,
                        "aria-label": R.intl.string(R.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: _,
                        focusProps: { ringClassName: O.hN },
                        children: (0, r.jsxs)("span", {
                            className: a()(O.vW, O.vk),
                            children: [
                                (0, r.jsx)(c.U1e, { size: "xs", className: O.Tw, colorClass: O.qv }),
                                (0, r.jsxs)(c.AC4, { id: o, children: [R.intl.string(R.t.EVV6uZ), ": ", f] }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: a()(O.ch, null != s && O.R9),
                                    "aria-hidden": "true",
                                    children: f,
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
            v = 36 + y,
            C = 144 + y,
            D = i.useRef(null),
            L = i.useRef(null),
            w = i.useRef(null),
            M = i.useRef(v),
            x = i.useRef(C),
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
        let [W, K] = (0, c.zhh)(() => ({ maxHeight: `${M.current}px`, config: { clamp: !0, duration: 150 } }));
        i.useLayoutEffect(() => {
            if ((U(!0), null == L.current || null == w.current || !H)) return;
            let e = L.current.getBoundingClientRect().height,
                t = w.current.getBoundingClientRect().height;
            B(t > e),
                (M.current = e),
                (x.current = t),
                K({ maxHeight: `${Math.min(G ? M.current : x.current, G ? v : C)}px` });
        }, [H, s, n, K, G, v, C]);
        let $ = (e) => {
                V &&
                    (e
                        ? K({
                              maxHeight: `${Math.min(x.current, C)}px`,
                              delay: 300 * !j,
                              config: { clamp: !0, duration: 150 * !j },
                          })
                        : K({ maxHeight: `${Math.min(M.current, v)}px`, delay: 0 }),
                    j ? F(!e) : Y.start(e ? 300 : 150, () => F(!e)));
            },
            z =
                null != n
                    ? (0, r.jsx)(_.A, { emoji: n, animate: f, hideTooltip: !1, tooltipDelay: N.In, className: O.H0 })
                    : null,
            q = null != s ? (0, r.jsx)(c.Text, { variant: "text-sm/normal", className: O.qS, children: s }) : null,
            Z =
                void 0 !== E && null == n
                    ? (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${R.intl.string(R.t.EVV6uZ)}: ${E}`,
                          className: a()(O.qS, O.R9),
                          children: E ?? "",
                      })
                    : null,
            X = null == q || "" === s ? Z : q,
            Q = (0, r.jsxs)("div", { ref: L, className: O.Qs, children: [z, X] }),
            J = (0, r.jsxs)("div", { ref: w, className: a()(O.Qs, O.m2), children: [z, X] }),
            ee = (0, r.jsx)("div", {
                ref: t,
                className: O.A7,
                children: (0, r.jsx)("span", {
                    className: O.vW,
                    children: (0, r.jsxs)(o.animated.div, {
                        style: W,
                        className: a()(O.Qs, { [O.m2]: !G }),
                        children: [z, X],
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
                          className: a()(O.kL, p),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), $(!0);
                          },
                          onMouseLeave: () => {
                              $(!1);
                          },
                          onFocus: () => $(!0),
                          onBlur: () => $(!1),
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: O.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": R.intl.formatToPlainString(R.t.UpF5Qa, {
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
                          className: a()(O.kL, p),
                          onFocus: () => {
                              m(!0), $(!0);
                          },
                          onBlur: (e) => {
                              D.current?.contains(e.relatedTarget) || (m(!1), $(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), m(!0), $(!0);
                          },
                          onMouseLeave: () => {
                              m(!1), $(!1);
                          },
                          children: [
                              (0, r.jsx)(c.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: O.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": R.intl.formatToPlainString(R.t.UpF5Qa, {
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
    w = i.forwardRef(function (e, t) {
        let { emoji: n, text: s, onCloseProfile: a, ...o } = e,
            [l, u] = i.useState(!1);
        return (0, r.jsx)(L, {
            ...o,
            ref: t,
            emoji: n,
            text: s,
            className: O.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, r.jsx)(v.A, { isVisible: l, isExpandable: e, onCloseProfile: a }),
        });
    });
function M(e) {
    let { emoji: t, text: n, user: s, guildId: a, channelId: o, themeType: l, ...u } = e,
        { trackUserProfileAction: c } = (0, A.NJ)(),
        { interactionType: d, interactionSource: _, resetInteraction: f } = (0, I.Pq)(),
        p = _ === N.dS.STATUS && d === N.AQ.REACT,
        h = _ === N.dS.STATUS && d === N.AQ.REPLY,
        m = p || h,
        g = i.useRef(null),
        y = i.useRef(t),
        v = i.useRef(n);
    i.useEffect(() => {
        _ === N.dS.STATUS && ((y.current !== t || v.current !== n) && f(), (y.current = t), (v.current = n));
    }, [_, f, t, n]);
    let [C, R] = i.useState(!1),
        b = i.useCallback(
            (e) => {
                (e || !m) && R(e);
            },
            [m],
        ),
        D = (e) =>
            null == e ? null : null != e.id ? `\`:${e.name}:\`` : E.Ay.translateSurrogatesToInlineEmoji(e.name),
        w = (e, t) => (null == e ? t : `${e} ${t}`),
        M = () => {
            let e = D(t);
            return null == n ? e : w(e, n);
        };
    return (0, r.jsx)(T.A, {
        user: s,
        guildId: a,
        channelId: o,
        themeType: l,
        sourceDetails: M(),
        sourceType: N.dS.STATUS,
        onAction: c,
        onClose: () => R(!1),
        children: () =>
            (0, r.jsx)(L, {
                ...u,
                ref: g,
                emoji: t,
                text: n,
                themeType: l,
                className: m ? O.zf : void 0,
                onShowToolbar: b,
                renderToolbar: (e) =>
                    (0, r.jsx)(S.Ay, {
                        targetRef: g,
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
            children: (0, r.jsx)(L, { emoji: e, text: n, placeholderText: o, ref: t, ...d }),
        });
    }
    let T = _?.emoji ?? null,
        S = _?.state ?? null,
        y = null != S && "" !== S ? S : null;
    return null != T || null != y || A
        ? null == T && null == y
            ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(D, { onCloseProfile: i, prompt: u, ref: t, ...d }) })
            : I
              ? (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(M, { user: n, emoji: T, text: y, ...d }) })
              : A
                ? (0, r.jsx)(p.f5, {
                      value: h,
                      children: (0, r.jsx)(w, { emoji: T, text: y, onCloseProfile: i, ref: t, ...d }),
                  })
                : (0, r.jsx)(p.f5, { value: h, children: (0, r.jsx)(L, { emoji: T, text: y, ref: t, ...d }) })
        : null;
});
