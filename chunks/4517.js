n.d(t, { Z: () => G }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(509442),
    l = n(442837),
    c = n(846519),
    u = n(481060),
    d = n(607070),
    f = n(584973),
    _ = n(100527),
    p = n(906732),
    h = n(368326),
    m = n(8454),
    g = n(633302),
    E = n(314897),
    b = n(785717),
    y = n(510659),
    O = n(287954),
    v = n(810097),
    I = n(913002),
    T = n(228168),
    S = n(244096),
    A = n(388032),
    C = n(516089);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
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
function L(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: o()(C.referenceContainer, n),
        children: (0, r.jsx)("div", {
            className: C.outer,
            children: (0, r.jsx)("span", {
                className: C.inner,
                children: t,
            }),
        }),
    });
}
let M = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a } = e,
            { analyticsLocations: s } = (0, p.ZP)(),
            { trackUserProfileAction: l } = (0, b.KZ)(),
            c = () => {
                l({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                    null == i || i(),
                    (0, u.ZDy)(async () => {
                        let { default: e } = await n.e("76215").then(n.bind(n, 66630));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                D(R({}, t), {
                                    sourceAnalyticsLocations: s,
                                    prompt: a,
                                }),
                            );
                    });
            },
            d = null != a ? a.label() : A.intl.string(A.t.evw0oz),
            f = (0, r.jsxs)("div", {
                className: C.content,
                children: [
                    (0, r.jsx)(u.oFk, {
                        size: "xs",
                        className: C.addStatusIcon,
                        colorClass: C.addStatusIconColor,
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        className: o()(C.addStatusPrompt, null != a && C.italicPrompt),
                        children: d,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(L, { children: f }),
                (0, r.jsx)(u.tEY, {
                    ringClassName: C.ring,
                    children: (0, r.jsx)("div", {
                        className: o()(C.container, C.editable),
                        ref: t,
                        children: (0, r.jsx)(u.P3F, {
                            className: C.outer,
                            "aria-label": A.intl.string(A.t["zrpF/b"]),
                            onClick: c,
                            focusProps: { ringClassName: C.ring },
                            children: (0, r.jsxs)("span", {
                                className: o()(C.inner, C.clickable),
                                children: [
                                    (0, r.jsx)(u.oFk, {
                                        size: "xs",
                                        className: C.addStatusIcon,
                                        colorClass: C.addStatusIconColor,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        className: o()(C.addStatusPrompt, null != a && C.italicPrompt),
                                        children: d,
                                    }),
                                ],
                            }),
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
                animate: m,
                className: g,
                renderToolbar: E,
                onShowToolbar: O,
                placeholderText: v,
                hasEntered: I = !0,
            } = e,
            N = (0, y.yi)(),
            { trackUserProfileAction: R } = (0, b.KZ)(),
            P = (0, h.p)({ location: "CustomStatusBubble" }),
            D = null != _ ? S.Hp : 0,
            w = S.hT + D,
            x = S.YF + D,
            M = i.useRef(null),
            j = i.useRef(null),
            k = i.useRef(null),
            U = i.useRef(w),
            G = i.useRef(x),
            B = null != _ && null == p,
            [Z, F] = i.useState(!1),
            [V, H] = i.useState(!0),
            [Y, W] = i.useState(!B && I),
            K = I && Z,
            z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            [q] = i.useState(() => new c.V7());
        i.useEffect(() => () => q.stop(), [q]),
            i.useEffect(() => {
                null == N || N.onInteractionPopoutTargetRefChange(M);
            }, [N]);
        let [X, Q] = (0, u.q_F)(() => ({
            maxHeight: "".concat(U.current, "px"),
            config: {
                clamp: !0,
                duration: S.R1,
            },
        }));
        i.useLayoutEffect(() => {
            if ((F(!0), null == j.current || null == k.current || !K)) return;
            let e = j.current.getBoundingClientRect().height,
                t = k.current.getBoundingClientRect().height;
            W(t > e),
                (U.current = e),
                (G.current = t),
                Q({ maxHeight: "".concat(Math.min(V ? U.current : G.current, V ? w : x), "px") });
        }, [K, p, _, Q, V, w, x]);
        let J = (e) => {
                Y &&
                    (e
                        ? Q({
                              maxHeight: "".concat(Math.min(G.current, x), "px"),
                              delay: z ? 0 : S.zS,
                              config: {
                                  clamp: !0,
                                  duration: z ? 0 : S.R1,
                              },
                          })
                        : Q({
                              maxHeight: "".concat(Math.min(U.current, w), "px"),
                              delay: 0,
                          }),
                    z ? H(!e) : q.start(e ? S.zS : S.Sq, () => H(!e)));
            },
            $ =
                null != _
                    ? (0, r.jsx)(f.Z, {
                          emoji: _,
                          animate: m,
                          hideTooltip: !1,
                          tooltipDelay: T.vB,
                          className: C.statusEmoji,
                      })
                    : null,
            ee =
                null != p
                    ? (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          className: C.statusText,
                          children: p,
                      })
                    : null,
            et =
                void 0 === v || (null != _ && P)
                    ? null
                    : (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": "".concat(A.intl.string(A.t.EVV6uZ), ": ").concat(v),
                          className: o()(C.statusText, P && C.italicPrompt),
                          children: null != v ? v : "",
                      }),
            en = null == ee || "" === p ? et : ee,
            er = (0, r.jsxs)("div", {
                ref: j,
                className: C.content,
                children: [$, en],
            }),
            ei = (0, r.jsxs)("div", {
                ref: k,
                className: o()(C.content, C.unclamped),
                children: [$, en],
            }),
            ea = (0, r.jsx)("div", {
                ref: t,
                className: C.outer,
                children: (0, r.jsx)("span", {
                    className: C.inner,
                    children: (0, r.jsxs)(s.animated.div, {
                        style: X,
                        className: o()(C.content, { [C.unclamped]: !V }),
                        children: [$, en],
                    }),
                }),
            }),
            eo = (0, r.jsxs)(L, {
                children: [er, ei],
            });
        return null == O
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eo,
                      (0, r.jsx)(u.tEY, {
                          ringClassName: C.ring,
                          children: (0, r.jsxs)("div", {
                              ref: M,
                              role: "tooltip",
                              tabIndex: 0,
                              className: o()(C.container, g),
                              "aria-label": A.intl.formatToPlainString(A.t.xRGqow, {
                                  emoji: null != (n = null == _ ? void 0 : _.name) ? n : "",
                                  status: p,
                                  label: "",
                              }),
                              onMouseEnter: () => {
                                  R({ action: "HOVER_CUSTOM_STATUS" }), J(!0);
                              },
                              onMouseLeave: () => {
                                  J(!1);
                              },
                              onFocus: () => J(!0),
                              onBlur: () => J(!1),
                              children: [ea, null == E ? void 0 : E(Y)],
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      eo,
                      (0, r.jsx)(u.tEY, {
                          ringClassName: C.ring,
                          children: (0, r.jsxs)("div", {
                              ref: M,
                              role: "tooltip",
                              tabIndex: 0,
                              className: o()(C.container, g),
                              "aria-label": A.intl.formatToPlainString(A.t.xRGqow, {
                                  emoji: null != (a = null == _ ? void 0 : _.name) ? a : "",
                                  label: "",
                                  status: p,
                              }),
                              onFocus: () => {
                                  O(!0), J(!0);
                              },
                              onBlur: (e) => {
                                  var t;
                                  (null == (t = M.current) ? void 0 : t.contains(e.relatedTarget)) || (O(!1), J(!1));
                              },
                              onMouseEnter: () => {
                                  R({ action: "HOVER_CUSTOM_STATUS" }), O(!0), J(!0);
                              },
                              onMouseLeave: () => {
                                  O(!1), J(!1);
                              },
                              children: [ea, null == E ? void 0 : E(Y)],
                          }),
                      }),
                  ],
              });
    }),
    k = i.forwardRef(function (e, t) {
        var { emoji: n, text: a, onCloseProfile: o } = e,
            s = w(e, ["emoji", "text", "onCloseProfile"]);
        let [l, c] = i.useState(!1);
        return (0, r.jsx)(
            j,
            D(R({}, s), {
                ref: t,
                emoji: n,
                text: a,
                className: C.editable,
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
function U(e) {
    var { emoji: t, text: n, user: a, guildId: o, channelId: s, themeType: l } = e,
        c = w(e, ["emoji", "text", "user", "guildId", "channelId", "themeType"]);
    let { trackUserProfileAction: u } = (0, b.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, y.Xo)(),
        p = f === T.n_.STATUS && d === T.P.REACT,
        h = f === T.n_.STATUS && d === T.P.REPLY,
        m = p || h,
        E = i.useRef(null),
        I = i.useRef(t),
        S = i.useRef(n);
    i.useEffect(() => {
        f === T.n_.STATUS && ((I.current !== t || S.current !== n) && _(), (I.current = t), (S.current = n));
    }, [f, _, t, n]);
    let [A, N] = i.useState(!1),
        P = i.useCallback(
            (e) => {
                (e || !m) && N(e);
            },
            [m],
        ),
        x = (e) =>
            null == e
                ? null
                : null != e.id
                  ? "`" + ":".concat(e.name, ":") + "`"
                  : g.ZP.translateSurrogatesToInlineEmoji(e.name),
        L = (e, t) => (null == e ? t : "".concat(e, " ").concat(t)),
        M = () => {
            let e = x(t);
            return null == n ? e : L(e, n);
        };
    return (0, r.jsx)(O.Z, {
        user: a,
        guildId: o,
        channelId: s,
        themeType: l,
        sourceDetails: M(),
        sourceType: T.n_.STATUS,
        onAction: u,
        onClose: () => N(!1),
        children: () =>
            (0, r.jsx)(
                j,
                D(R({}, c), {
                    ref: E,
                    emoji: t,
                    text: n,
                    themeType: l,
                    className: m ? C.hoisted : void 0,
                    onShowToolbar: P,
                    renderToolbar: (e) =>
                        (0, r.jsx)(v.ZP, {
                            targetRef: E,
                            user: a,
                            sourceType: T.n_.STATUS,
                            isVisible: A && !m,
                            isExpandable: e,
                            onAction: u,
                        }),
                }),
            ),
    });
}
let G = i.forwardRef(function (e, t) {
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
        h = w(e, [
            "user",
            "onCloseProfile",
            "previewText",
            "previewEmoji",
            "placeholderText",
            "prompt",
            "disableToolbar",
        ]),
        g = (0, m.Z)(a.id),
        { analyticsLocations: b } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        y = (0, l.e7)([E.default], () => E.default.getId() === a.id),
        O = y && !f,
        v = !y && !a.bot && !f;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            n = null != s && "" !== s ? s : null;
        return (0, r.jsx)(p.Gt, {
            value: b,
            children: (0, r.jsx)(
                j,
                R(
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
    let I = null != (n = null == g ? void 0 : g.emoji) ? n : null,
        T = null != (i = null == g ? void 0 : g.state) ? i : null,
        S = null != T && "" !== T ? T : null;
    return null != I || null != S || O
        ? null == I && null == S
            ? (0, r.jsx)(p.Gt, {
                  value: b,
                  children: (0, r.jsx)(
                      M,
                      R(
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
                    value: b,
                    children: (0, r.jsx)(
                        U,
                        R(
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
                      value: b,
                      children: (0, r.jsx)(
                          k,
                          R(
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
                      value: b,
                      children: (0, r.jsx)(
                          j,
                          R(
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
