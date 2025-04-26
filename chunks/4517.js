n.d(t, { Z: () => en }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(272573),
    l = n(442837),
    c = n(846519),
    u = n(481060),
    d = n(493773),
    f = n(607070),
    _ = n(584973),
    p = n(100527),
    h = n(906732),
    m = n(359588),
    g = n(368326),
    E = n(74340),
    b = n(8454),
    y = n(346565),
    v = n(451306),
    O = n(633302),
    I = n(314897),
    S = n(626135),
    T = n(785717),
    A = n(81570),
    N = n(510659),
    C = n(287954),
    R = n(810097),
    P = n(64621),
    w = n(913002),
    D = n(228168),
    L = n(981631),
    x = n(388032),
    M = n(484822);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let F = 1.25,
    Z = 36,
    H = 144,
    Y = 150,
    W = 150,
    K = 300,
    z = 14;
function q(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(M.referenceContainer, n),
        children: (0, r.jsx)('div', {
            className: M.outer,
            children: (0, r.jsx)('span', {
                className: M.inner,
                children: t
            })
        })
    });
}
let Q = 200,
    X = 2000;
function J(e) {
    let { onCloseProfile: t, prompt: a } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        { trackUserProfileAction: l } = (0, T.KZ)(),
        [c, f] = i.useState(!1),
        [_, p] = i.useState(!1),
        g = i.useRef(null),
        E = i.useRef(!1),
        b = (0, m.Z)({ location: 'AddCustomStatusBubble' });
    (0, d.ZP)(() => {
        if (!b) return;
        let e = setTimeout(() => {
                E.current || f(!0);
            }, Q),
            t = setTimeout(I, X);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    });
    let y = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            null != e
                ? l({ action: 'PRESS_ADD_CUSTOM_STATUS' })
                : S.default.track(L.rMx.CUSTOM_STATUS_TOOLBAR_CLICKED, {
                      label: e,
                      location_stack: s
                  }),
                null == t || t(),
                (0, u.ZDy)(async () => {
                    let { default: t } = await n.e('31649').then(n.bind(n, 475613));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            G(j({}, n), {
                                sourceAnalyticsLocations: s,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: a,
                                label: e
                            })
                        );
                });
        },
        O = (e) => {
            f(e), e && p(!1);
        },
        I = () => {
            E.current || (p(!0), f(!1));
        },
        A = null != a ? a.label() : x.intl.string(x.t.evw0o6),
        N = (0, r.jsxs)('div', {
            className: M.content,
            children: [
                (0, r.jsx)(u.oFk, {
                    size: 'xs',
                    className: M.addStatusIcon,
                    colorClass: M.addStatusIconColor
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: o()(M.addStatusPrompt, null != a && M.italicPrompt),
                    children: A
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(q, { children: N }),
            (0, r.jsx)(u.tEY, {
                ringClassName: M.ring,
                children: (0, r.jsxs)('div', {
                    ref: g,
                    className: o()(M.container, M.editable),
                    onMouseEnter: () => {
                        (E.current = !0), O(!0);
                    },
                    onMouseLeave: () => {
                        (E.current = !1), O(!1);
                    },
                    onFocus: () => {
                        (E.current = !0), O(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        (null == (t = g.current) ? void 0 : t.contains(e.relatedTarget)) || ((E.current = !1), O(!1));
                    },
                    children: [
                        (0, r.jsx)(u.P3F, {
                            className: M.outer,
                            'aria-label': x.intl.string(x.t['zrpF/f']),
                            onClick: () => y(),
                            focusProps: { ringClassName: M.ring },
                            children: (0, r.jsxs)('span', {
                                className: M.inner,
                                children: [
                                    (0, r.jsx)(u.oFk, {
                                        size: 'xs',
                                        className: M.addStatusIcon,
                                        colorClass: M.addStatusIconColor
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        className: o()(M.addStatusPrompt, null != a && M.italicPrompt),
                                        children: A
                                    })
                                ]
                            })
                        }),
                        b &&
                            (c || _) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', { className: M.labelToolbarHoverGap }),
                                    (0, r.jsx)('div', {
                                        className: o()(M.labelToolbar, {
                                            [M.labelToolbarVisible]: c && !_,
                                            [M.labelToolbarFadingOut]: _
                                        }),
                                        children: (0, r.jsx)(v.Z, {
                                            onSelect: y,
                                            className: M.customStatusLabelToolbar
                                        })
                                    })
                                ]
                            })
                    ]
                })
            })
        ]
    });
}
let $ = i.forwardRef(function (e, t) {
    var n, a;
    let { emoji: d, text: p, animate: h, className: E, renderToolbar: b, onShowToolbar: v, placeholderText: O, label: I, hasEntered: S = !0 } = e,
        A = (0, N.yi)(),
        { trackUserProfileAction: C } = (0, T.KZ)(),
        R = (0, g.p)({ location: 'CustomStatusBubble' }),
        P = (0, m.Z)({ location: 'UserProfileCustomStatusBubble' }),
        w = null != d ? F : 0,
        L = null != I && P ? z : 0,
        k = Z + w + L,
        j = H + w + L,
        U = i.useRef(null),
        G = i.useRef(null),
        B = i.useRef(null),
        V = i.useRef(k),
        Q = i.useRef(j),
        X = null != d && null == p && null == I,
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!0),
        [en, er] = i.useState(!X && S),
        ei = S && J;
    i.useLayoutEffect(() => {
        if (($(!0), null == G.current || null == B.current || !ei)) return;
        let e = G.current.getBoundingClientRect().height,
            t = B.current.getBoundingClientRect().height;
        er(t > e), (V.current = e), (Q.current = t);
    }, [ei, p, d, I]);
    let ea = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [eo] = i.useState(() => new c.V7());
    i.useEffect(() => () => eo.stop(), [eo]),
        i.useEffect(() => {
            null == A || A.onInteractionPopoutTargetRefChange(U);
        }, [A]);
    let [es, el] = (0, u.q_F)(() => ({
        maxHeight: ''.concat(V.current, 'px'),
        config: {
            clamp: !0,
            duration: Y
        }
    }));
    i.useEffect(() => {
        J &&
            el({
                maxHeight: ''.concat(Math.min(V.current, k), 'px'),
                immediate: !0
            });
    }, [J, I, el, k]);
    let ec = (e) => {
            en &&
                (e
                    ? el({
                          maxHeight: ''.concat(Math.min(Q.current, j), 'px'),
                          delay: ea ? 0 : K,
                          config: {
                              clamp: !0,
                              duration: ea ? 0 : Y
                          }
                      })
                    : el({
                          maxHeight: ''.concat(Math.min(V.current, k), 'px'),
                          delay: 0
                      }),
                ea ? et(!e) : eo.start(e ? K : W, () => et(!e)));
        },
        eu =
            null != I && P
                ? (0, r.jsx)(y.Z, {
                      label: I,
                      className: M.labelRow
                  })
                : null,
        ed =
            null != d
                ? (0, r.jsx)(_.Z, {
                      emoji: d,
                      animate: h,
                      hideTooltip: !1,
                      tooltipDelay: D.vB,
                      className: M.statusEmoji
                  })
                : null,
        ef =
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: M.statusText,
                      children: p
                  })
                : null,
        e_ =
            void 0 === O || (null != d && R)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(x.intl.string(x.t.EVV6ub), ': ').concat(O),
                      className: o()(M.statusText, R && M.italicPrompt),
                      children: null != O ? O : ''
                  }),
        ep = null == ef || '' === p ? e_ : ef,
        eh = (0, r.jsxs)('div', {
            ref: G,
            className: M.content,
            children: [eu, ed, ep]
        }),
        em = (0, r.jsxs)('div', {
            ref: B,
            className: o()(M.content, M.unclamped),
            children: [eu, ed, ep]
        }),
        eg = (0, r.jsx)('div', {
            ref: t,
            className: M.outer,
            children: (0, r.jsx)('span', {
                className: M.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: es,
                    className: o()(M.content, { [M.unclamped]: !ee }),
                    children: [eu, ed, ep]
                })
            })
        }),
        eE = (0, r.jsxs)(q, {
            className: null != eu ? M.withLabel : void 0,
            children: [eu, eh, em]
        });
    return null == v
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  eE,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: M.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(M.container, E),
                          'aria-label': x.intl.formatToPlainString(x.t.UpF5QU, {
                              emoji: null != (n = null == d ? void 0 : d.name) ? n : '',
                              status: p
                          }),
                          onMouseEnter: () => {
                              C({ action: 'HOVER_CUSTOM_STATUS' }), ec(!0);
                          },
                          onMouseLeave: () => {
                              ec(!1);
                          },
                          onFocus: () => ec(!0),
                          onBlur: () => ec(!1),
                          children: [eg, null == b ? void 0 : b(en)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  eE,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: M.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(M.container, E),
                          'aria-label': x.intl.formatToPlainString(x.t.UpF5QU, {
                              emoji: null != (a = null == d ? void 0 : d.name) ? a : '',
                              status: p
                          }),
                          onFocus: () => {
                              v(!0), ec(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = U.current) ? void 0 : t.contains(e.relatedTarget)) || (v(!1), ec(!1));
                          },
                          onMouseEnter: () => {
                              C({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), ec(!0);
                          },
                          onMouseLeave: () => {
                              v(!1), ec(!1);
                          },
                          children: [eg, null == b ? void 0 : b(en)]
                      })
                  })
              ]
          });
});
function ee(e) {
    var { emoji: t, text: n, onCloseProfile: a } = e,
        o = B(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        $,
        G(j({}, o), {
            emoji: t,
            text: n,
            className: M.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(w.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: a
                })
        })
    );
}
function et(e) {
    var { emoji: t, text: n, user: a, guildId: o, channelId: s, themeType: l } = e,
        c = B(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'themeType']);
    let { trackUserProfileAction: u } = (0, T.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, N.Xo)(),
        p = f === D.n_.STATUS && d === D.P.REACT,
        h = f === D.n_.STATUS && d === D.P.REPLY,
        m = p || h,
        g = i.useRef(null),
        E = i.useRef(t),
        b = i.useRef(n);
    i.useEffect(() => {
        f === D.n_.STATUS && ((E.current !== t || b.current !== n) && _(), (E.current = t), (b.current = n));
    }, [f, _, t, n]);
    let [y, v] = i.useState(!1),
        I = i.useCallback(
            (e) => {
                (e || !m) && v(e);
            },
            [m]
        ),
        S = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : O.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(C.Z, {
        user: a,
        guildId: o,
        channelId: s,
        themeType: l,
        sourceDetails: S(),
        sourceType: D.n_.STATUS,
        onAction: u,
        onClose: () => v(!1),
        children: () =>
            (0, r.jsx)(P.Z, {
                targetElementRef: g,
                sourceType: D.n_.STATUS,
                user: a,
                children: (0, r.jsx)(
                    $,
                    G(j({}, c), {
                        ref: g,
                        emoji: t,
                        text: n,
                        themeType: l,
                        className: m ? M.hoisted : void 0,
                        onShowToolbar: I,
                        renderToolbar: (e) =>
                            (0, r.jsx)(R.ZP, {
                                targetRef: g,
                                user: a,
                                sourceType: D.n_.STATUS,
                                isVisible: y && !m,
                                isExpandable: e,
                                onAction: u
                            })
                    })
                )
            })
    });
}
function en(e) {
    var t,
        n,
        { location: i, user: a, onCloseProfile: o, previewText: s, previewEmoji: c, previewLabel: u, placeholderText: d, prompt: f, disableEdit: _ = !1 } = e,
        m = B(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'previewLabel', 'placeholderText', 'prompt', 'disableEdit']);
    let g = (0, b.Z)(a.id),
        { analyticsLocations: y } = (0, h.ZP)(p.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        v = (0, l.e7)([I.default], () => I.default.getId() === a.id),
        O = v && !_,
        S = (0, A.T)({ location: i }),
        T = !v && !a.bot && S;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null,
            n = null != u ? u : null;
        return (0, r.jsx)(h.Gt, {
            value: y,
            children: (0, r.jsx)(
                $,
                j(
                    {
                        emoji: e,
                        text: t,
                        placeholderText: d,
                        label: n
                    },
                    m
                )
            )
        });
    }
    let N = null != (t = null == g ? void 0 : g.emoji) ? t : null,
        C = null != (n = null == g ? void 0 : g.state) ? n : null,
        R = null != C && '' !== C ? C : null,
        P = null != g ? (0, E.Z)(g) : null;
    return null != N || null != R || O
        ? null == N && null == R
            ? (0, r.jsx)(h.Gt, {
                  value: y,
                  children: (0, r.jsx)(
                      J,
                      j(
                          {
                              onCloseProfile: o,
                              prompt: f
                          },
                          m
                      )
                  )
              })
            : T
              ? (0, r.jsx)(h.Gt, {
                    value: y,
                    children: (0, r.jsx)(
                        et,
                        j(
                            {
                                user: a,
                                emoji: N,
                                text: R,
                                label: P
                            },
                            m
                        )
                    )
                })
              : O
                ? (0, r.jsx)(h.Gt, {
                      value: y,
                      children: (0, r.jsx)(
                          ee,
                          j(
                              {
                                  emoji: N,
                                  text: R,
                                  label: P,
                                  onCloseProfile: o
                              },
                              m
                          )
                      )
                  })
                : (0, r.jsx)(h.Gt, {
                      value: y,
                      children: (0, r.jsx)(
                          $,
                          j(
                              {
                                  emoji: N,
                                  text: R,
                                  label: P
                              },
                              m
                          )
                      )
                  })
        : null;
}
