n.d(t, {
    A: () => G,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(311907),
    c = n(451988),
    u = n(397927),
    d = n(775602),
    f = n(51183),
    p = n(793574),
    _ = n(688810),
    h = n(915089),
    m = n(576241),
    g = n(410540),
    E = n(7584),
    y = n(961350),
    b = n(183555),
    O = n(679492),
    v = n(563437),
    A = n(8925),
    I = n(933639),
    S = n(518477);
n(745541);
var T = n(985018),
    C = n(178740);

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
                N(e, t, n[t]);
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

function P(e, t) {
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

function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = L(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function x(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: o()(C.nL, n),
        children: (0, r.jsx)("div", {
            className: C.A7,
            children: (0, r.jsx)("span", {
                className: C.vW,
                children: t,
            }),
        }),
    });
}
let M = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a } = e,
            s = (0, h.GV)(),
            { analyticsLocations: l } = (0, _.Ay)(),
            { trackUserProfileAction: c } = (0, b.NJ)(),
            d = () => {
                c({
                    action: "PRESS_ADD_CUSTOM_STATUS",
                }),
                    null == i || i(),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                P(w({}, t), {
                                    sourceAnalyticsLocations: l,
                                    prompt: a,
                                }),
                            );
                    });
            },
            f = null != a ? a.label() : T.intl.string(T.t.evw0oz),
            p = (0, r.jsxs)("div", {
                className: C.Qs,
                children: [
                    (0, r.jsx)(u.U1e, {
                        size: "xs",
                        className: C.Tw,
                        colorClass: C.qv,
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        className: o()(C.ch, null != a && C.R9),
                        children: f,
                    }),
                ],
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x, {
                    children: p,
                }),
                (0, r.jsx)("div", {
                    className: o()(C.kL, C.LL),
                    ref: t,
                    children: (0, r.jsx)(u.DUT, {
                        className: C.A7,
                        "aria-label": T.intl.string(T.t["zrpF/b"]),
                        "aria-describedby": s,
                        onClick: d,
                        focusProps: {
                            ringClassName: C.hN,
                        },
                        children: (0, r.jsxs)("span", {
                            className: o()(C.vW, C.vk),
                            children: [
                                (0, r.jsx)(u.U1e, {
                                    size: "xs",
                                    className: C.Tw,
                                    colorClass: C.qv,
                                }),
                                (0, r.jsxs)(u.AC4, {
                                    id: s,
                                    children: [T.intl.string(T.t.EVV6uZ), ": ", f],
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: o()(C.ch, null != a && C.R9),
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
                emoji: p,
                text: _,
                animate: h,
                className: g,
                renderToolbar: E,
                onShowToolbar: y,
                placeholderText: v,
                hasEntered: A = !0,
            } = e,
            I = (0, O.NR)(),
            { trackUserProfileAction: N } = (0, b.NJ)(),
            w = (0, m.h)({
                location: "CustomStatusBubble",
            }),
            R = 1.25 * (null != p),
            P = 36 + R,
            D = 144 + R,
            L = i.useRef(null),
            M = i.useRef(null),
            j = i.useRef(null),
            k = i.useRef(P),
            U = i.useRef(D),
            G = null != p && null == _,
            [V, F] = i.useState(!1),
            [B, H] = i.useState(!0),
            [Y, W] = i.useState(!G && A),
            K = A && V,
            z = (0, l.bG)([d.A], () => d.A.useReducedMotion),
            [q] = i.useState(() => new c.Ep());
        i.useEffect(() => () => q.stop(), [q]),
            i.useEffect(() => {
                null == I || I.onInteractionPopoutTargetRefChange(L);
            }, [I]);
        let [Z, Q] = (0, u.zhh)(() => ({
            maxHeight: "".concat(k.current, "px"),
            config: {
                clamp: !0,
                duration: 150,
            },
        }));
        i.useLayoutEffect(() => {
            if ((F(!0), null == M.current || null == j.current || !K)) return;
            let e = M.current.getBoundingClientRect().height,
                t = j.current.getBoundingClientRect().height;
            W(t > e),
                (k.current = e),
                (U.current = t),
                Q({
                    maxHeight: "".concat(Math.min(B ? k.current : U.current, B ? P : D), "px"),
                });
        }, [K, _, p, Q, B, P, D]);
        let X = (e) => {
                Y &&
                    (e
                        ? Q({
                              maxHeight: "".concat(Math.min(U.current, D), "px"),
                              delay: 300 * !z,
                              config: {
                                  clamp: !0,
                                  duration: 150 * !z,
                              },
                          })
                        : Q({
                              maxHeight: "".concat(Math.min(k.current, P), "px"),
                              delay: 0,
                          }),
                    z ? H(!e) : q.start(e ? 300 : 150, () => H(!e)));
            },
            J =
                null != p
                    ? (0, r.jsx)(f.A, {
                          emoji: p,
                          animate: h,
                          hideTooltip: !1,
                          tooltipDelay: S.In,
                          className: C.H0,
                      })
                    : null,
            $ =
                null != _
                    ? (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          className: C.qS,
                          children: _,
                      })
                    : null,
            ee =
                void 0 === v || (null != p && w)
                    ? null
                    : (0, r.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": "".concat(T.intl.string(T.t.EVV6uZ), ": ").concat(v),
                          className: o()(C.qS, w && C.R9),
                          children: null != v ? v : "",
                      }),
            et = null == $ || "" === _ ? ee : $,
            en = (0, r.jsxs)("div", {
                ref: M,
                className: C.Qs,
                children: [J, et],
            }),
            er = (0, r.jsxs)("div", {
                ref: j,
                className: o()(C.Qs, C.m2),
                children: [J, et],
            }),
            ei = (0, r.jsx)("div", {
                ref: t,
                className: C.A7,
                children: (0, r.jsx)("span", {
                    className: C.vW,
                    children: (0, r.jsxs)(s.animated.div, {
                        style: Z,
                        className: o()(C.Qs, {
                            [C.m2]: !B,
                        }),
                        children: [J, et],
                    }),
                }),
            }),
            ea = (0, r.jsxs)(x, {
                children: [en, er],
            });
        return null == y
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      ea,
                      (0, r.jsxs)("div", {
                          ref: L,
                          className: o()(C.kL, g),
                          onMouseEnter: () => {
                              N({
                                  action: "HOVER_CUSTOM_STATUS",
                              }),
                                  X(!0);
                          },
                          onMouseLeave: () => {
                              X(!1);
                          },
                          onFocus: () => X(!0),
                          onBlur: () => X(!1),
                          children: [
                              (0, r.jsx)(u.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: C.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": T.intl.formatToPlainString(T.t.UpF5Qa, {
                                          emoji: null != (a = null == p ? void 0 : p.name) ? a : "",
                                          status: _,
                                      }),
                                      children: ei,
                                  }),
                              }),
                              null == E ? void 0 : E(Y),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      ea,
                      (0, r.jsxs)("div", {
                          ref: L,
                          className: o()(C.kL, g),
                          onFocus: () => {
                              y(!0), X(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = L.current) ? void 0 : t.contains(e.relatedTarget)) || (y(!1), X(!1));
                          },
                          onMouseEnter: () => {
                              N({
                                  action: "HOVER_CUSTOM_STATUS",
                              }),
                                  y(!0),
                                  X(!0);
                          },
                          onMouseLeave: () => {
                              y(!1), X(!1);
                          },
                          children: [
                              (0, r.jsx)(u.vN3, {
                                  children: (0, r.jsx)("div", {
                                      className: C.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": T.intl.formatToPlainString(T.t.UpF5Qa, {
                                          emoji: null != (n = null == p ? void 0 : p.name) ? n : "",
                                          status: _,
                                      }),
                                      children: ei,
                                  }),
                              }),
                              null == E ? void 0 : E(Y),
                          ],
                      }),
                  ],
              });
    }),
    k = i.forwardRef(function (e, t) {
        let [n, ...a] = [e, t],
            { emoji: o, text: s, onCloseProfile: l } = n,
            c = D(n, ["emoji", "text", "onCloseProfile"]),
            [u] = a,
            [d, f] = i.useState(!1);
        return (0, r.jsx)(
            j,
            P(w({}, c), {
                ref: u,
                emoji: o,
                text: s,
                className: C.LL,
                onShowToolbar: f,
                renderToolbar: (e) =>
                    (0, r.jsx)(I.A, {
                        isVisible: d,
                        isExpandable: e,
                        onCloseProfile: l,
                    }),
            }),
        );
    });

function U(e) {
    let { emoji: t, text: n, user: a, guildId: o, channelId: s, themeType: l } = e,
        c = D(e, ["emoji", "text", "user", "guildId", "channelId", "themeType"]),
        { trackUserProfileAction: u } = (0, b.NJ)(),
        { interactionType: d, interactionSource: f, resetInteraction: p } = (0, O.Pq)(),
        _ = f === S.dS.STATUS && d === S.AQ.REACT,
        h = f === S.dS.STATUS && d === S.AQ.REPLY,
        m = _ || h,
        g = i.useRef(null),
        y = i.useRef(t),
        I = i.useRef(n);
    i.useEffect(() => {
        f === S.dS.STATUS && ((y.current !== t || I.current !== n) && p(), (y.current = t), (I.current = n));
    }, [f, p, t, n]);
    let [T, N] = i.useState(!1),
        R = i.useCallback(
            (e) => {
                (e || !m) && N(e);
            },
            [m],
        ),
        L = (e) =>
            null == e
                ? null
                : null != e.id
                  ? "`" + ":".concat(e.name, ":") + "`"
                  : E.Ay.translateSurrogatesToInlineEmoji(e.name),
        x = (e, t) => (null == e ? t : "".concat(e, " ").concat(t)),
        M = () => {
            let e = L(t);
            return null == n ? e : x(e, n);
        };
    return (0, r.jsx)(v.A, {
        user: a,
        guildId: o,
        channelId: s,
        themeType: l,
        sourceDetails: M(),
        sourceType: S.dS.STATUS,
        onAction: u,
        onClose: () => N(!1),
        children: () =>
            (0, r.jsx)(
                j,
                P(w({}, c), {
                    ref: g,
                    emoji: t,
                    text: n,
                    themeType: l,
                    className: m ? C.zf : void 0,
                    onShowToolbar: R,
                    renderToolbar: (e) =>
                        (0, r.jsx)(A.Ay, {
                            targetRef: g,
                            user: a,
                            sourceType: S.dS.STATUS,
                            isVisible: T && !m,
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
        h = D(e, [
            "user",
            "onCloseProfile",
            "previewText",
            "previewEmoji",
            "placeholderText",
            "prompt",
            "disableToolbar",
        ]),
        m = (0, g.A)(a.id),
        { analyticsLocations: E } = (0, _.Ay)(p.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        b = (0, l.bG)([y.default], () => y.default.getId() === a.id),
        O = b && !f,
        v = !b && !a.bot && !f;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            n = null != s && "" !== s ? s : null;
        return (0, r.jsx)(_.f5, {
            value: E,
            children: (0, r.jsx)(
                j,
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
    let A = null != (n = null == m ? void 0 : m.emoji) ? n : null,
        I = null != (i = null == m ? void 0 : m.state) ? i : null,
        S = null != I && "" !== I ? I : null;
    return null != A || null != S || O
        ? null == A && null == S
            ? (0, r.jsx)(_.f5, {
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
              ? (0, r.jsx)(_.f5, {
                    value: E,
                    children: (0, r.jsx)(
                        U,
                        w(
                            {
                                user: a,
                                emoji: A,
                                text: S,
                            },
                            h,
                        ),
                    ),
                })
              : O
                ? (0, r.jsx)(_.f5, {
                      value: E,
                      children: (0, r.jsx)(
                          k,
                          w(
                              {
                                  emoji: A,
                                  text: S,
                                  onCloseProfile: o,
                                  ref: t,
                              },
                              h,
                          ),
                      ),
                  })
                : (0, r.jsx)(_.f5, {
                      value: E,
                      children: (0, r.jsx)(
                          j,
                          w(
                              {
                                  emoji: A,
                                  text: S,
                                  ref: t,
                              },
                              h,
                          ),
                      ),
                  })
        : null;
});
