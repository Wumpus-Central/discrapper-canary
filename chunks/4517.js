n.d(t, { Z: () => er }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    b = n(19391),
    y = n(8454),
    O = n(346565),
    v = n(451306),
    I = n(633302),
    S = n(314897),
    T = n(626135),
    A = n(785717),
    N = n(81570),
    C = n(510659),
    R = n(287954),
    P = n(810097),
    w = n(64621),
    D = n(913002),
    L = n(228168),
    x = n(981631),
    M = n(388032),
    k = n(484822);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let Z = 1.25,
    H = 36,
    Y = 144,
    W = 150,
    K = 150,
    z = 300,
    q = 14;
function Q(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: a()(k.referenceContainer, n),
        children: (0, r.jsx)('div', {
            className: k.outer,
            children: (0, r.jsx)('span', {
                className: k.inner,
                children: t
            })
        })
    });
}
let X = 200,
    J = 2000;
function $(e) {
    let { onCloseProfile: t, prompt: o } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        { trackUserProfileAction: l } = (0, A.KZ)(),
        [c, f] = i.useState(!1),
        [_, p] = i.useState(!1),
        g = i.useRef(null),
        E = i.useRef(!1),
        b = (0, m.Z)({ location: 'AddCustomStatusBubble' });
    (0, d.ZP)(() => {
        if (!b) return;
        let e = setTimeout(() => {
                E.current || f(!0);
            }, X),
            t = setTimeout(I, J);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    });
    let y = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            null != e
                ? l({ action: 'PRESS_ADD_CUSTOM_STATUS' })
                : T.default.track(x.rMx.CUSTOM_STATUS_TOOLBAR_CLICKED, {
                      label: e,
                      location_stack: s
                  }),
                null == t || t(),
                (0, u.ZDy)(async () => {
                    let { default: t } = await n.e('31649').then(n.bind(n, 475613));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            B(U({}, n), {
                                sourceAnalyticsLocations: s,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: o,
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
        S = null != o ? o.label() : M.intl.string(M.t.evw0o6),
        N = (0, r.jsxs)('div', {
            className: k.content,
            children: [
                (0, r.jsx)(u.oFk, {
                    size: 'xs',
                    className: k.addStatusIcon,
                    colorClass: k.addStatusIconColor
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: a()(k.addStatusPrompt, null != o && k.italicPrompt),
                    children: S
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Q, { children: N }),
            (0, r.jsx)(u.tEY, {
                ringClassName: k.ring,
                children: (0, r.jsxs)('div', {
                    ref: g,
                    className: a()(k.container, k.editable),
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
                            className: k.outer,
                            'aria-label': M.intl.string(M.t['zrpF/f']),
                            onClick: () => y(),
                            focusProps: { ringClassName: k.ring },
                            children: (0, r.jsxs)('span', {
                                className: k.inner,
                                children: [
                                    (0, r.jsx)(u.oFk, {
                                        size: 'xs',
                                        className: k.addStatusIcon,
                                        colorClass: k.addStatusIconColor
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        className: a()(k.addStatusPrompt, null != o && k.italicPrompt),
                                        children: S
                                    })
                                ]
                            })
                        }),
                        b &&
                            (c || _) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', { className: k.labelToolbarHoverGap }),
                                    (0, r.jsx)('div', {
                                        className: a()(k.labelToolbar, {
                                            [k.labelToolbarVisible]: c && !_,
                                            [k.labelToolbarFadingOut]: _
                                        }),
                                        children: (0, r.jsx)(v.Z, {
                                            onSelect: y,
                                            className: k.customStatusLabelToolbar
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
let ee = i.forwardRef(function (e, t) {
    var n, o;
    let { emoji: d, text: p, animate: h, className: E, renderToolbar: b, onShowToolbar: y, placeholderText: v, label: I, hasEntered: S = !0 } = e,
        T = (0, C.yi)(),
        { trackUserProfileAction: N } = (0, A.KZ)(),
        R = (0, g.p)({ location: 'CustomStatusBubble' }),
        P = (0, m.Z)({ location: 'UserProfileCustomStatusBubble' }),
        w = null != d ? Z : 0,
        D = null != I && P ? q : 0,
        x = H + w + D,
        j = Y + w + D,
        U = i.useRef(null),
        G = i.useRef(null),
        B = i.useRef(null),
        V = i.useRef(x),
        F = i.useRef(j),
        X = null != d && null == p && null == I,
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!0),
        [en, er] = i.useState(!X && S),
        ei = S && J;
    i.useLayoutEffect(() => {
        if (($(!0), null == G.current || null == B.current || !ei)) return;
        let e = G.current.getBoundingClientRect().height,
            t = B.current.getBoundingClientRect().height;
        er(t > e), (V.current = e), (F.current = t);
    }, [ei, p, d, I]);
    let eo = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [ea] = i.useState(() => new c.V7());
    i.useEffect(() => () => ea.stop(), [ea]),
        i.useEffect(() => {
            null == T || T.onInteractionPopoutTargetRefChange(U);
        }, [T]);
    let [es, el] = (0, u.q_F)(() => ({
        maxHeight: ''.concat(V.current, 'px'),
        config: {
            clamp: !0,
            duration: W
        }
    }));
    i.useEffect(() => {
        J &&
            el({
                maxHeight: ''.concat(Math.min(V.current, x), 'px'),
                immediate: !0
            });
    }, [J, I, el, x]);
    let ec = (e) => {
            en &&
                (e
                    ? el({
                          maxHeight: ''.concat(Math.min(F.current, j), 'px'),
                          delay: eo ? 0 : z,
                          config: {
                              clamp: !0,
                              duration: eo ? 0 : W
                          }
                      })
                    : el({
                          maxHeight: ''.concat(Math.min(V.current, x), 'px'),
                          delay: 0
                      }),
                eo ? et(!e) : ea.start(e ? z : K, () => et(!e)));
        },
        eu =
            null != I && P
                ? (0, r.jsx)(O.Z, {
                      label: I,
                      className: k.labelRow
                  })
                : null,
        ed =
            null != d
                ? (0, r.jsx)(_.Z, {
                      emoji: d,
                      animate: h,
                      hideTooltip: !1,
                      tooltipDelay: L.vB,
                      className: k.statusEmoji
                  })
                : null,
        ef =
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: k.statusText,
                      children: p
                  })
                : null,
        e_ =
            void 0 === v || (null != d && R)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(M.intl.string(M.t.EVV6ub), ': ').concat(v),
                      className: a()(k.statusText, R && k.italicPrompt),
                      children: null != v ? v : ''
                  }),
        ep = null == ef || '' === p ? e_ : ef,
        eh = (0, r.jsxs)('div', {
            ref: G,
            className: k.content,
            children: [eu, ed, ep]
        }),
        em = (0, r.jsxs)('div', {
            ref: B,
            className: a()(k.content, k.unclamped),
            children: [eu, ed, ep]
        }),
        eg = (0, r.jsx)('div', {
            ref: t,
            className: k.outer,
            children: (0, r.jsx)('span', {
                className: k.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: es,
                    className: a()(k.content, { [k.unclamped]: !ee }),
                    children: [eu, ed, ep]
                })
            })
        }),
        eE = (0, r.jsxs)(Q, {
            className: null != eu ? k.withLabel : void 0,
            children: [eu, eh, em]
        });
    return null == y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  eE,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: k.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(k.container, E),
                          'aria-label': M.intl.formatToPlainString(M.t.UpF5QU, {
                              emoji: null != (n = null == d ? void 0 : d.name) ? n : '',
                              status: p
                          }),
                          onMouseEnter: () => {
                              N({ action: 'HOVER_CUSTOM_STATUS' }), ec(!0);
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
                      ringClassName: k.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(k.container, E),
                          'aria-label': M.intl.formatToPlainString(M.t.UpF5QU, {
                              emoji: null != (o = null == d ? void 0 : d.name) ? o : '',
                              status: p
                          }),
                          onFocus: () => {
                              y(!0), ec(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = U.current) ? void 0 : t.contains(e.relatedTarget)) || (y(!1), ec(!1));
                          },
                          onMouseEnter: () => {
                              N({ action: 'HOVER_CUSTOM_STATUS' }), y(!0), ec(!0);
                          },
                          onMouseLeave: () => {
                              y(!1), ec(!1);
                          },
                          children: [eg, null == b ? void 0 : b(en)]
                      })
                  })
              ]
          });
});
function et(e) {
    var { emoji: t, text: n, onCloseProfile: o } = e,
        a = V(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        ee,
        B(U({}, a), {
            emoji: t,
            text: n,
            className: k.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(D.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function en(e) {
    var { emoji: t, text: n, label: o, user: a, guildId: s, channelId: l, themeType: c } = e,
        u = V(e, ['emoji', 'text', 'label', 'user', 'guildId', 'channelId', 'themeType']);
    let { trackUserProfileAction: d } = (0, A.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: p } = (0, C.Xo)(),
        h = _ === L.n_.STATUS && f === L.P.REACT,
        g = _ === L.n_.STATUS && f === L.P.REPLY,
        E = h || g,
        y = i.useRef(null),
        O = i.useRef(t),
        v = i.useRef(n),
        S = (0, m.Z)({ location: 'CustomStatusBubbleWithInteractionToolbar' });
    i.useEffect(() => {
        _ === L.n_.STATUS && ((O.current !== t || v.current !== n) && p(), (O.current = t), (v.current = n));
    }, [_, p, t, n]);
    let [T, N] = i.useState(!1),
        D = i.useCallback(
            (e) => {
                (e || !E) && N(e);
            },
            [E]
        ),
        x = (e) => (null == e ? null : null != e.id ? '`' + ':'.concat(e.name, ':') + '`' : I.ZP.translateSurrogatesToInlineEmoji(e.name)),
        M = () => {
            let e = x(t),
                r = null == n ? e : ''.concat(e, ' ').concat(n);
            return null != o && S ? ''.concat((0, b.Z)(o), ':\n> ').concat(r) : r;
        };
    return (0, r.jsx)(R.Z, {
        user: a,
        guildId: s,
        channelId: l,
        themeType: c,
        sourceDetails: M(),
        sourceType: L.n_.STATUS,
        onAction: d,
        onClose: () => N(!1),
        children: () =>
            (0, r.jsx)(w.Z, {
                targetElementRef: y,
                sourceType: L.n_.STATUS,
                user: a,
                children: (0, r.jsx)(
                    ee,
                    B(U({}, u), {
                        ref: y,
                        emoji: t,
                        text: n,
                        themeType: c,
                        className: E ? k.hoisted : void 0,
                        onShowToolbar: D,
                        renderToolbar: (e) =>
                            (0, r.jsx)(P.ZP, {
                                targetRef: y,
                                user: a,
                                sourceType: L.n_.STATUS,
                                isVisible: T && !E,
                                isExpandable: e,
                                onAction: d
                            })
                    })
                )
            })
    });
}
function er(e) {
    var t,
        n,
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: c, previewLabel: u, placeholderText: d, prompt: f, disableEdit: _ = !1 } = e,
        m = V(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'previewLabel', 'placeholderText', 'prompt', 'disableEdit']);
    let g = (0, y.Z)(o.id),
        { analyticsLocations: b } = (0, h.ZP)(p.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        O = (0, l.e7)([S.default], () => S.default.getId() === o.id),
        v = O && !_,
        I = (0, N.T)({ location: i }),
        T = !O && !o.bot && I;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null,
            n = null != u ? u : null;
        return (0, r.jsx)(h.Gt, {
            value: b,
            children: (0, r.jsx)(
                ee,
                U(
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
    let A = null != (t = null == g ? void 0 : g.emoji) ? t : null,
        C = null != (n = null == g ? void 0 : g.state) ? n : null,
        R = null != C && '' !== C ? C : null,
        P = null != g ? (0, E.Z)(g) : null;
    return null != A || null != R || v
        ? null == A && null == R
            ? (0, r.jsx)(h.Gt, {
                  value: b,
                  children: (0, r.jsx)(
                      $,
                      U(
                          {
                              onCloseProfile: a,
                              prompt: f
                          },
                          m
                      )
                  )
              })
            : T
              ? (0, r.jsx)(h.Gt, {
                    value: b,
                    children: (0, r.jsx)(
                        en,
                        U(
                            {
                                user: o,
                                emoji: A,
                                text: R,
                                label: P
                            },
                            m
                        )
                    )
                })
              : v
                ? (0, r.jsx)(h.Gt, {
                      value: b,
                      children: (0, r.jsx)(
                          et,
                          U(
                              {
                                  emoji: A,
                                  text: R,
                                  label: P,
                                  onCloseProfile: a
                              },
                              m
                          )
                      )
                  })
                : (0, r.jsx)(h.Gt, {
                      value: b,
                      children: (0, r.jsx)(
                          ee,
                          U(
                              {
                                  emoji: A,
                                  text: R,
                                  label: P
                              },
                              m
                          )
                      )
                  })
        : null;
}
