n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(790519),
    l = n(442837),
    c = n(846519),
    u = n(481060),
    d = n(607070),
    f = n(584973),
    _ = n(100527),
    p = n(906732),
    h = n(313201),
    m = n(368326),
    g = n(8454),
    E = n(633302),
    b = n(314897),
    y = n(785717),
    O = n(510659),
    v = n(287954),
    I = n(810097),
    T = n(913002),
    S = n(228168),
    A = n(244096),
    C = n(388032),
    N = n(516089);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function M(e) {
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
let k = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a } = e,
            s = (0, h.Dt)(),
            { analyticsLocations: l } = (0, p.ZP)(),
            { trackUserProfileAction: c } = (0, y.KZ)(),
            d = () => {
                c({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    null == i || i(),
                    (0, u.ZDy)(async () => {
                        let { default: e } = await n.e("76215").then(n.bind(n, 66630));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                w(P({}, t), {
                                    sourceAnalyticsLocations: l,
                                    prompt: a,
                                }),
                            );
                    });
            },
            f = null != a ? a.label() : C.intl.string(C.t.evw0oz),
            _ = (0, r.jsxs)("div", {
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
                (0, r.jsx)(M, { children: _ }),
                (0, r.jsx)("div", {
                    className: o()(N.container, N.editable),
                    ref: t,
                    children: (0, r.jsx)(u.P3F, {
                        className: N.outer,
                        "aria-label": C.intl.string(C.t["zrpF/b"]),
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
                                    children: [C.intl.string(C.t.EVV6uZ), ": ", f],
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
    j = i.forwardRef(function (e, t) {
        var n, a;
        let {
                emoji: _,
                text: p,
                animate: h,
                className: g,
                renderToolbar: E,
                onShowToolbar: b,
                placeholderText: v,
                hasEntered: I = !0,
            } = e,
            T = (0, O.yi)(),
            { trackUserProfileAction: R } = (0, y.KZ)(),
            P = (0, m.p)({ location: "CustomStatusBubble" }),
            D = null != _ ? A.Hp : 0,
            w = A.hT + D,
            L = A.YF + D,
            x = i.useRef(null),
            k = i.useRef(null),
            j = i.useRef(null),
            U = i.useRef(w),
            G = i.useRef(L),
            B = null != _ && null == p,
            [Z, F] = i.useState(!1),
            [V, H] = i.useState(!0),
            [Y, W] = i.useState(!B && I),
            K = I && Z,
            z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            [q] = i.useState(() => new c.V7());
        i.useEffect(() => () => q.stop(), [q]),
            i.useEffect(() => {
                null == T || T.onInteractionPopoutTargetRefChange(x);
            }, [T]);
        let [X, Q] = (0, u.q_F)(() => ({
            maxHeight: "".concat(U.current, "px"),
            config: {
                clamp: !0,
                duration: A.R1,
            },
        }));
        i.useLayoutEffect(() => {
            if ((F(!0), null == k.current || null == j.current || !K)) return;
            let e = k.current.getBoundingClientRect().height,
                t = j.current.getBoundingClientRect().height;
            W(t > e),
                (U.current = e),
                (G.current = t),
                Q({ maxHeight: "".concat(Math.min(V ? U.current : G.current, V ? w : L), "px") });
        }, [K, p, _, Q, V, w, L]);
        let J = (e) => {
                Y &&
                    (e
                        ? Q({
                              maxHeight: "".concat(Math.min(G.current, L), "px"),
                              delay: z ? 0 : A.zS,
                              config: {
                                  clamp: !0,
                                  duration: z ? 0 : A.R1,
                              },
                          })
                        : Q({
                              maxHeight: "".concat(Math.min(U.current, w), "px"),
                              delay: 0,
                          }),
                    z ? H(!e) : q.start(e ? A.zS : A.Sq, () => H(!e)));
            },
            $ =
                null != _
                    ? (0, r.jsx)(f.Z, {
                          emoji: _,
                          animate: h,
                          hideTooltip: !1,
                          tooltipDelay: S.vB,
                          className: N.statusEmoji,
                      })
                    : null,
            ee =
                null != p
                    ? (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          className: N.statusText,
                          children: p,
                      })
                    : null,
            et =
                void 0 === v || (null != _ && P)
                    ? null
                    : (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": "".concat(C.intl.string(C.t.EVV6uZ), ": ").concat(v),
                          className: o()(N.statusText, P && N.italicPrompt),
                          children: null != v ? v : "",
                      }),
            en = null == ee || "" === p ? et : ee,
            er = (0, r.jsxs)("div", {
                ref: k,
                className: N.content,
                children: [$, en],
            }),
            ei = (0, r.jsxs)("div", {
                ref: j,
                className: o()(N.content, N.unclamped),
                children: [$, en],
            }),
            ea = (0, r.jsx)("div", {
                ref: t,
                className: N.outer,
                children: (0, r.jsx)("span", {
                    className: N.inner,
                    children: (0, r.jsxs)(s.animated.div, {
                        style: X,
                        className: o()(N.content, { [N.unclamped]: !V }),
                        children: [$, en],
                    }),
                }),
            }),
            eo = (0, r.jsxs)(M, {
                children: [er, ei],
            });
        return null == b
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eo,
                      (0, r.jsxs)("div", {
                          ref: x,
                          className: o()(N.container, g),
                          onMouseEnter: () => {
                              R({ action: "HOVER_CUSTOM_STATUS" }), J(!0);
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
                                      "aria-label": C.intl.formatToPlainString(C.t.UpF5Qa, {
                                          emoji: null != (n = null == _ ? void 0 : _.name) ? n : "",
                                          status: p,
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
                          ref: x,
                          className: o()(N.container, g),
                          onFocus: () => {
                              b(!0), J(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = x.current) ? void 0 : t.contains(e.relatedTarget)) || (b(!1), J(!1));
                          },
                          onMouseEnter: () => {
                              R({ action: "HOVER_CUSTOM_STATUS" }), b(!0), J(!0);
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
                                      "aria-label": C.intl.formatToPlainString(C.t.UpF5Qa, {
                                          emoji: null != (a = null == _ ? void 0 : _.name) ? a : "",
                                          status: p,
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
            s = L(e, ["emoji", "text", "onCloseProfile"]);
        let [l, c] = i.useState(!1);
        return (0, r.jsx)(
            j,
            w(P({}, s), {
                ref: t,
                emoji: n,
                text: a,
                className: N.editable,
                onShowToolbar: c,
                renderToolbar: (e) =>
                    (0, r.jsx)(T.Z, {
                        isVisible: l,
                        isExpandable: e,
                        onCloseProfile: o,
                    }),
            }),
        );
    });
function G(e) {
    var { emoji: t, text: n, user: a, guildId: o, channelId: s, themeType: l } = e,
        c = L(e, ["emoji", "text", "user", "guildId", "channelId", "themeType"]);
    let { trackUserProfileAction: u } = (0, y.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, O.Xo)(),
        p = f === S.n_.STATUS && d === S.P.REACT,
        h = f === S.n_.STATUS && d === S.P.REPLY,
        m = p || h,
        g = i.useRef(null),
        b = i.useRef(t),
        T = i.useRef(n);
    i.useEffect(() => {
        f === S.n_.STATUS && ((b.current !== t || T.current !== n) && _(), (b.current = t), (T.current = n));
    }, [f, _, t, n]);
    let [A, C] = i.useState(!1),
        R = i.useCallback(
            (e) => {
                (e || !m) && C(e);
            },
            [m],
        ),
        D = (e) =>
            null == e
                ? null
                : null != e.id
                  ? "`" + ":".concat(e.name, ":") + "`"
                  : E.ZP.translateSurrogatesToInlineEmoji(e.name),
        x = (e, t) => (null == e ? t : "".concat(e, " ").concat(t)),
        M = () => {
            let e = D(t);
            return null == n ? e : x(e, n);
        };
    return (0, r.jsx)(v.Z, {
        user: a,
        guildId: o,
        channelId: s,
        themeType: l,
        sourceDetails: M(),
        sourceType: S.n_.STATUS,
        onAction: u,
        onClose: () => C(!1),
        children: () =>
            (0, r.jsx)(
                j,
                w(P({}, c), {
                    ref: g,
                    emoji: t,
                    text: n,
                    themeType: l,
                    className: m ? N.hoisted : void 0,
                    onShowToolbar: R,
                    renderToolbar: (e) =>
                        (0, r.jsx)(I.ZP, {
                            targetRef: g,
                            user: a,
                            sourceType: S.n_.STATUS,
                            isVisible: A && !m,
                            isExpandable: e,
                            onAction: u,
                        }),
                }),
            ),
    });
}
let B = i.forwardRef(function (e, t) {
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
        h = L(e, [
            "user",
            "onCloseProfile",
            "previewText",
            "previewEmoji",
            "placeholderText",
            "prompt",
            "disableToolbar",
        ]),
        m = (0, g.Z)(a.id),
        { analyticsLocations: E } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        y = (0, l.e7)([b.default], () => b.default.getId() === a.id),
        O = y && !f,
        v = !y && !a.bot && !f;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            n = null != s && "" !== s ? s : null;
        return (0, r.jsx)(p.Gt, {
            value: E,
            children: (0, r.jsx)(
                j,
                P(
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
    let I = null != (n = null == m ? void 0 : m.emoji) ? n : null,
        T = null != (i = null == m ? void 0 : m.state) ? i : null,
        S = null != T && "" !== T ? T : null;
    return null != I || null != S || O
        ? null == I && null == S
            ? (0, r.jsx)(p.Gt, {
                  value: E,
                  children: (0, r.jsx)(
                      k,
                      P(
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
              ? (0, r.jsx)(p.Gt, {
                    value: E,
                    children: (0, r.jsx)(
                        G,
                        P(
                            {
                                user: a,
                                emoji: I,
                                text: S,
                            },
                            h,
                        ),
                    ),
                })
              : O
                ? (0, r.jsx)(p.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          U,
                          P(
                              {
                                  emoji: I,
                                  text: S,
                                  onCloseProfile: o,
                                  ref: t,
                              },
                              h,
                          ),
                      ),
                  })
                : (0, r.jsx)(p.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          j,
                          P(
                              {
                                  emoji: I,
                                  text: S,
                                  ref: t,
                              },
                              h,
                          ),
                      ),
                  })
        : null;
});
