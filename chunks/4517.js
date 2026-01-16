n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(81239),
    l = n(442837),
    c = n(846519),
    u = n(481060),
    d = n(607070),
    f = n(584973),
    p = n(100527),
    _ = n(906732),
    h = n(313201),
    m = n(368326),
    g = n(8454),
    E = n(633302),
    b = n(314897),
    y = n(785717),
    O = n(510659),
    v = n(287954),
    S = n(810097),
    I = n(913002),
    T = n(228168),
    C = n(244096),
    A = n(388032),
    N = n(553996);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function j(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: o()(N.referenceContainer, n),
        children: (0, r.jsx)("div", {
            className: N.outer,
            children: (0, r.jsx)("span", {
                className: N.inner,
                children: t,
            }),
        }),
    });
}
let M = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a } = e,
            s = (0, h.Dt)(),
            { analyticsLocations: l } = (0, _.ZP)(),
            { trackUserProfileAction: c } = (0, y.KZ)(),
            d = () => {
                c({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    null == i || i(),
                    (0, u.ZDy)(async () => {
                        let { default: e } = await n.e("76215").then(n.bind(n, 66630));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                D(w({}, t), {
                                    sourceAnalyticsLocations: l,
                                    prompt: a,
                                }),
                            );
                    });
            },
            f = null != a ? a.label() : A.intl.string(A.t.evw0oz),
            p = (0, r.jsxs)("div", {
                className: N.content,
                children: [
                    (0, r.jsx)(u.oFk, {
                        size: "xs",
                        className: N.addStatusIcon,
                        colorClass: N.addStatusIconColor,
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        className: o()(N.addStatusPrompt, null != a && N.italicPrompt),
                        children: f,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j, { children: p }),
                (0, r.jsx)("div", {
                    className: o()(N.container, N.editable),
                    ref: t,
                    children: (0, r.jsx)(u.P3F, {
                        className: N.outer,
                        "aria-label": A.intl.string(A.t["zrpF/b"]),
                        "aria-describedby": s,
                        onClick: d,
                        focusProps: { ringClassName: N.ring },
                        children: (0, r.jsxs)("span", {
                            className: o()(N.inner, N.clickable),
                            children: [
                                (0, r.jsx)(u.oFk, {
                                    size: "xs",
                                    className: N.addStatusIcon,
                                    colorClass: N.addStatusIconColor,
                                }),
                                (0, r.jsxs)(u.nn4, {
                                    id: s,
                                    children: [A.intl.string(A.t.EVV6uZ), ": ", f],
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: o()(N.addStatusPrompt, null != a && N.italicPrompt),
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
    k = i.forwardRef(function (e, t) {
        var n, a;
        let {
                emoji: p,
                text: _,
                animate: h,
                className: g,
                renderToolbar: E,
                onShowToolbar: b,
                placeholderText: v,
                hasEntered: S = !0,
            } = e,
            I = (0, O.yi)(),
            { trackUserProfileAction: P } = (0, y.KZ)(),
            w = (0, m.p)({ location: "CustomStatusBubble" }),
            R = null != p ? C.Hp : 0,
            D = C.hT + R,
            x = C.YF + R,
            L = i.useRef(null),
            M = i.useRef(null),
            k = i.useRef(null),
            U = i.useRef(D),
            G = i.useRef(x),
            Z = null != p && null == _,
            [F, B] = i.useState(!1),
            [V, H] = i.useState(!0),
            [Y, W] = i.useState(!Z && S),
            K = S && F,
            z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            [q] = i.useState(() => new c.V7());
        i.useEffect(() => () => q.stop(), [q]),
            i.useEffect(() => {
                null == I || I.onInteractionPopoutTargetRefChange(L);
            }, [I]);
        let [Q, X] = (0, u.q_F)(() => ({
            maxHeight: "".concat(U.current, "px"),
            config: {
                clamp: !0,
                duration: C.R1,
            },
        }));
        i.useLayoutEffect(() => {
            if ((B(!0), null == M.current || null == k.current || !K)) return;
            let e = M.current.getBoundingClientRect().height,
                t = k.current.getBoundingClientRect().height;
            W(t > e),
                (U.current = e),
                (G.current = t),
                X({ maxHeight: "".concat(Math.min(V ? U.current : G.current, V ? D : x), "px") });
        }, [K, _, p, X, V, D, x]);
        let J = (e) => {
                Y &&
                    (e
                        ? X({
                              maxHeight: "".concat(Math.min(G.current, x), "px"),
                              delay: z ? 0 : C.zS,
                              config: {
                                  clamp: !0,
                                  duration: z ? 0 : C.R1,
                              },
                          })
                        : X({
                              maxHeight: "".concat(Math.min(U.current, D), "px"),
                              delay: 0,
                          }),
                    z ? H(!e) : q.start(e ? C.zS : C.Sq, () => H(!e)));
            },
            $ =
                null != p
                    ? (0, r.jsx)(f.Z, {
                          emoji: p,
                          animate: h,
                          hideTooltip: !1,
                          tooltipDelay: T.vB,
                          className: N.statusEmoji,
                      })
                    : null,
            ee =
                null != _
                    ? (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          className: N.statusText,
                          children: _,
                      })
                    : null,
            et =
                void 0 === v || (null != p && w)
                    ? null
                    : (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": "".concat(A.intl.string(A.t.EVV6uZ), ": ").concat(v),
                          className: o()(N.statusText, w && N.italicPrompt),
                          children: null != v ? v : "",
                      }),
            en = null == ee || "" === _ ? et : ee,
            er = (0, r.jsxs)("div", {
                ref: M,
                className: N.content,
                children: [$, en],
            }),
            ei = (0, r.jsxs)("div", {
                ref: k,
                className: o()(N.content, N.unclamped),
                children: [$, en],
            }),
            ea = (0, r.jsx)("div", {
                ref: t,
                className: N.outer,
                children: (0, r.jsx)("span", {
                    className: N.inner,
                    children: (0, r.jsxs)(s.animated.div, {
                        style: Q,
                        className: o()(N.content, { [N.unclamped]: !V }),
                        children: [$, en],
                    }),
                }),
            }),
            eo = (0, r.jsxs)(j, {
                children: [er, ei],
            });
        return null == b
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eo,
                      (0, r.jsxs)("div", {
                          ref: L,
                          className: o()(N.container, g),
                          onMouseEnter: () => {
                              P({ action: "HOVER_CUSTOM_STATUS" }), J(!0);
                          },
                          onMouseLeave: () => {
                              J(!1);
                          },
                          onFocus: () => J(!0),
                          onBlur: () => J(!1),
                          children: [
                              (0, r.jsx)(u.tEY, {
                                  children: (0, r.jsx)("div", {
                                      className: N.ring,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": A.intl.formatToPlainString(A.t.UpF5Qa, {
                                          emoji: null != (n = null == p ? void 0 : p.name) ? n : "",
                                          status: _,
                                      }),
                                      children: ea,
                                  }),
                              }),
                              null == E ? void 0 : E(Y),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      eo,
                      (0, r.jsxs)("div", {
                          ref: L,
                          className: o()(N.container, g),
                          onFocus: () => {
                              b(!0), J(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = L.current) ? void 0 : t.contains(e.relatedTarget)) || (b(!1), J(!1));
                          },
                          onMouseEnter: () => {
                              P({ action: "HOVER_CUSTOM_STATUS" }), b(!0), J(!0);
                          },
                          onMouseLeave: () => {
                              b(!1), J(!1);
                          },
                          children: [
                              (0, r.jsx)(u.tEY, {
                                  children: (0, r.jsx)("div", {
                                      className: N.ring,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": A.intl.formatToPlainString(A.t.UpF5Qa, {
                                          emoji: null != (a = null == p ? void 0 : p.name) ? a : "",
                                          status: _,
                                      }),
                                      children: ea,
                                  }),
                              }),
                              null == E ? void 0 : E(Y),
                          ],
                      }),
                  ],
              });
    }),
    U = i.forwardRef(function (e, t) {
        var { emoji: n, text: a, onCloseProfile: o } = e,
            s = x(e, ["emoji", "text", "onCloseProfile"]);
        let [l, c] = i.useState(!1);
        return (0, r.jsx)(
            k,
            D(w({}, s), {
                ref: t,
                emoji: n,
                text: a,
                className: N.editable,
                onShowToolbar: c,
                renderToolbar: (e) =>
                    (0, r.jsx)(I.Z, {
                        isVisible: l,
                        isExpandable: e,
                        onCloseProfile: o,
                    }),
            }),
        );
    });
function G(e) {
    var { emoji: t, text: n, user: a, guildId: o, channelId: s, themeType: l } = e,
        c = x(e, ["emoji", "text", "user", "guildId", "channelId", "themeType"]);
    let { trackUserProfileAction: u } = (0, y.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: p } = (0, O.Xo)(),
        _ = f === T.n_.STATUS && d === T.P.REACT,
        h = f === T.n_.STATUS && d === T.P.REPLY,
        m = _ || h,
        g = i.useRef(null),
        b = i.useRef(t),
        I = i.useRef(n);
    i.useEffect(() => {
        f === T.n_.STATUS && ((b.current !== t || I.current !== n) && p(), (b.current = t), (I.current = n));
    }, [f, p, t, n]);
    let [C, A] = i.useState(!1),
        P = i.useCallback(
            (e) => {
                (e || !m) && A(e);
            },
            [m],
        ),
        R = (e) =>
            null == e
                ? null
                : null != e.id
                  ? "`" + ":".concat(e.name, ":") + "`"
                  : E.ZP.translateSurrogatesToInlineEmoji(e.name),
        L = (e, t) => (null == e ? t : "".concat(e, " ").concat(t)),
        j = () => {
            let e = R(t);
            return null == n ? e : L(e, n);
        };
    return (0, r.jsx)(v.Z, {
        user: a,
        guildId: o,
        channelId: s,
        themeType: l,
        sourceDetails: j(),
        sourceType: T.n_.STATUS,
        onAction: u,
        onClose: () => A(!1),
        children: () =>
            (0, r.jsx)(
                k,
                D(w({}, c), {
                    ref: g,
                    emoji: t,
                    text: n,
                    themeType: l,
                    className: m ? N.hoisted : void 0,
                    onShowToolbar: P,
                    renderToolbar: (e) =>
                        (0, r.jsx)(S.ZP, {
                            targetRef: g,
                            user: a,
                            sourceType: T.n_.STATUS,
                            isVisible: C && !m,
                            isExpandable: e,
                            onAction: u,
                        }),
                }),
            ),
    });
}
let Z = i.forwardRef(function (e, t) {
    var n, i;
    let {
            user: a,
            onCloseProfile: o,
            previewText: s,
            previewEmoji: c,
            placeholderText: u,
            prompt: d,
            disableToolbar: f = !1,
        } = e,
        h = x(e, [
            "user",
            "onCloseProfile",
            "previewText",
            "previewEmoji",
            "placeholderText",
            "prompt",
            "disableToolbar",
        ]),
        m = (0, g.Z)(a.id),
        { analyticsLocations: E } = (0, _.ZP)(p.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        y = (0, l.e7)([b.default], () => b.default.getId() === a.id),
        O = y && !f,
        v = !y && !a.bot && !f;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            n = null != s && "" !== s ? s : null;
        return (0, r.jsx)(_.Gt, {
            value: E,
            children: (0, r.jsx)(
                k,
                w(
                    {
                        emoji: e,
                        text: n,
                        placeholderText: u,
                        ref: t,
                    },
                    h,
                ),
            ),
        });
    }
    let S = null != (n = null == m ? void 0 : m.emoji) ? n : null,
        I = null != (i = null == m ? void 0 : m.state) ? i : null,
        T = null != I && "" !== I ? I : null;
    return null != S || null != T || O
        ? null == S && null == T
            ? (0, r.jsx)(_.Gt, {
                  value: E,
                  children: (0, r.jsx)(
                      M,
                      w(
                          {
                              onCloseProfile: o,
                              prompt: d,
                              ref: t,
                          },
                          h,
                      ),
                  ),
              })
            : v
              ? (0, r.jsx)(_.Gt, {
                    value: E,
                    children: (0, r.jsx)(
                        G,
                        w(
                            {
                                user: a,
                                emoji: S,
                                text: T,
                            },
                            h,
                        ),
                    ),
                })
              : O
                ? (0, r.jsx)(_.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          U,
                          w(
                              {
                                  emoji: S,
                                  text: T,
                                  onCloseProfile: o,
                                  ref: t,
                              },
                              h,
                          ),
                      ),
                  })
                : (0, r.jsx)(_.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          k,
                          w(
                              {
                                  emoji: S,
                                  text: T,
                                  ref: t,
                              },
                              h,
                          ),
                      ),
                  })
        : null;
});
