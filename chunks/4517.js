n.d(t, { Z: () => J }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(200100),
    l = n(134632),
    c = n(442837),
    u = n(846519),
    d = n(481060),
    f = n(607070),
    _ = n(584973),
    p = n(100527),
    h = n(906732),
    m = n(359588),
    g = n(368326),
    E = n(74340),
    b = n(8454),
    y = n(600243),
    v = n(346565),
    O = n(633302),
    I = n(314897),
    S = n(785717),
    T = n(81570),
    A = n(510659),
    N = n(287954),
    C = n(810097),
    R = n(64621),
    P = n(913002),
    w = n(228168),
    D = n(388032),
    L = n(484822);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let B = 1.25,
    V = 36,
    F = 144,
    Z = 150,
    H = 150,
    Y = 300,
    W = 14;
function K(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(L.referenceContainer, n),
        children: (0, r.jsx)('div', {
            className: L.outer,
            children: (0, r.jsx)('span', {
                className: L.inner,
                children: t
            })
        })
    });
}
function z(e) {
    let { onCloseProfile: t, prompt: i } = e,
        { analyticsLocations: a } = (0, h.ZP)(),
        { trackUserProfileAction: s } = (0, S.KZ)(),
        c = (0, m.Z)({ location: 'AddCustomStatusBubble' }),
        u = () => {
            s({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == t || t(),
                (0, d.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            j(M({}, t), {
                                sourceAnalyticsLocations: a,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: i
                            })
                        );
                });
        },
        f = c
            ? (0, r.jsxs)('div', {
                  className: L.labelIconsRow,
                  children: [
                      (0, r.jsx)(y.Z, {
                          label: l.w.LISTEN,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(y.Z, {
                          label: l.w.WATCH,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(y.Z, {
                          label: l.w.PLAY,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(y.Z, {
                          label: l.w.THINK,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(y.Z, {
                          label: l.w.LOVE,
                          size: 'xxs'
                      })
                  ]
              })
            : null,
        _ = null != i ? i.label() : D.intl.string(D.t.evw0o6),
        p = (0, r.jsxs)('div', {
            className: o()(L.content, null != f && L.withLabel),
            children: [
                f,
                (0, r.jsx)(d.oFk, {
                    size: 'xs',
                    className: L.addStatusIcon,
                    colorClass: L.addStatusIconColor
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    className: o()(L.addStatusPrompt, null != i && L.italicPrompt),
                    children: _
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(K, { children: p }),
            (0, r.jsx)(d.P3F, {
                className: o()(L.container, L.editable),
                'aria-label': D.intl.string(D.t['zrpF/f']),
                onClick: u,
                focusProps: { ringClassName: L.ring },
                children: (0, r.jsx)('div', {
                    className: L.outer,
                    children: (0, r.jsxs)('span', {
                        className: o()(L.inner, L.clickable),
                        children: [
                            f,
                            (0, r.jsx)(d.oFk, {
                                size: 'xs',
                                className: L.addStatusIcon,
                                colorClass: L.addStatusIconColor
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                className: o()(L.addStatusPrompt, null != i && L.italicPrompt),
                                children: _
                            })
                        ]
                    })
                })
            })
        ]
    });
}
let q = i.forwardRef(function (e, t) {
    var n, a;
    let { emoji: l, text: p, animate: h, className: E, renderToolbar: b, onShowToolbar: y, placeholderText: O, label: I, hasEntered: T = !0 } = e,
        N = (0, A.yi)(),
        { trackUserProfileAction: C } = (0, S.KZ)(),
        R = (0, g.p)({ location: 'CustomStatusBubble' }),
        P = (0, m.Z)({ location: 'UserProfileCustomStatusBubble' }),
        x = null != l ? B : 0,
        M = null != I && P ? W : 0,
        k = V + x + M,
        j = F + x + M,
        U = i.useRef(null),
        G = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(k),
        Q = i.useRef(j),
        X = null != l && null == p && null == I,
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!0),
        [en, er] = i.useState(!X && T),
        ei = T && J;
    i.useLayoutEffect(() => {
        if (($(!0), null == G.current || null == z.current || !ei)) return;
        let e = G.current.getBoundingClientRect().height,
            t = z.current.getBoundingClientRect().height;
        er(t > e), (q.current = e), (Q.current = t);
    }, [ei, p, l, I]);
    let ea = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        [eo] = i.useState(() => new u.V7());
    i.useEffect(() => () => eo.stop(), [eo]),
        i.useEffect(() => {
            null == N || N.onInteractionPopoutTargetRefChange(U);
        }, [N]);
    let [es, el] = (0, d.q_F)(() => ({
        maxHeight: ''.concat(q.current, 'px'),
        config: {
            clamp: !0,
            duration: Z
        }
    }));
    i.useEffect(() => {
        J &&
            el({
                maxHeight: ''.concat(Math.min(q.current, k), 'px'),
                immediate: !0
            });
    }, [J, I, el, k]);
    let ec = (e) => {
            en &&
                (e
                    ? el({
                          maxHeight: ''.concat(Math.min(Q.current, j), 'px'),
                          delay: ea ? 0 : Y,
                          config: {
                              clamp: !0,
                              duration: ea ? 0 : Z
                          }
                      })
                    : el({
                          maxHeight: ''.concat(Math.min(q.current, k), 'px'),
                          delay: 0
                      }),
                ea ? et(!e) : eo.start(e ? Y : H, () => et(!e)));
        },
        eu =
            null != I && P
                ? (0, r.jsx)(v.Z, {
                      label: I,
                      className: L.labelRow
                  })
                : null,
        ed =
            null != l
                ? (0, r.jsx)(_.Z, {
                      emoji: l,
                      animate: h,
                      hideTooltip: !1,
                      tooltipDelay: w.vB,
                      className: L.statusEmoji
                  })
                : null,
        ef =
            null != p
                ? (0, r.jsx)(d.Text, {
                      variant: 'text-sm/normal',
                      className: L.statusText,
                      children: p
                  })
                : null,
        e_ =
            void 0 === O || (null != l && R)
                ? null
                : (0, r.jsx)(d.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(D.intl.string(D.t.EVV6ub), ': ').concat(O),
                      className: o()(L.statusText, R && L.italicPrompt),
                      children: null != O ? O : ''
                  }),
        ep = null == ef || '' === p ? e_ : ef,
        eh = (0, r.jsxs)('div', {
            ref: G,
            className: L.content,
            children: [eu, ed, ep]
        }),
        em = (0, r.jsxs)('div', {
            ref: z,
            className: o()(L.content, L.unclamped),
            children: [eu, ed, ep]
        }),
        eg = (0, r.jsx)('div', {
            ref: t,
            className: L.outer,
            children: (0, r.jsx)('span', {
                className: L.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: es,
                    className: o()(L.content, { [L.unclamped]: !ee }),
                    children: [eu, ed, ep]
                })
            })
        }),
        eE = (0, r.jsxs)(K, {
            className: null != eu ? L.withLabel : void 0,
            children: [eu, eh, em]
        });
    return null == y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  eE,
                  (0, r.jsx)(d.tEY, {
                      ringClassName: L.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(L.container, E),
                          'aria-label': D.intl.formatToPlainString(D.t.UpF5QU, {
                              emoji: null != (n = null == l ? void 0 : l.name) ? n : '',
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
                  (0, r.jsx)(d.tEY, {
                      ringClassName: L.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(L.container, E),
                          'aria-label': D.intl.formatToPlainString(D.t.UpF5QU, {
                              emoji: null != (a = null == l ? void 0 : l.name) ? a : '',
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
                              C({ action: 'HOVER_CUSTOM_STATUS' }), y(!0), ec(!0);
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
function Q(e) {
    var { emoji: t, text: n, onCloseProfile: a } = e,
        o = U(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        q,
        j(M({}, o), {
            emoji: t,
            text: n,
            className: L.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(P.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: a
                })
        })
    );
}
function X(e) {
    var { emoji: t, text: n, user: a, guildId: o, channelId: s, themeType: l } = e,
        c = U(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'themeType']);
    let { trackUserProfileAction: u } = (0, S.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, A.Xo)(),
        p = f === w.n_.STATUS && d === w.P.REACT,
        h = f === w.n_.STATUS && d === w.P.REPLY,
        m = p || h,
        g = i.useRef(null),
        E = i.useRef(t),
        b = i.useRef(n);
    i.useEffect(() => {
        f === w.n_.STATUS && ((E.current !== t || b.current !== n) && _(), (E.current = t), (b.current = n));
    }, [f, _, t, n]);
    let [y, v] = i.useState(!1),
        I = i.useCallback(
            (e) => {
                (e || !m) && v(e);
            },
            [m]
        ),
        T = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : O.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(N.Z, {
        user: a,
        guildId: o,
        channelId: s,
        themeType: l,
        sourceDetails: T(),
        sourceType: w.n_.STATUS,
        onAction: u,
        onClose: () => v(!1),
        children: () =>
            (0, r.jsx)(R.Z, {
                targetElementRef: g,
                sourceType: w.n_.STATUS,
                user: a,
                children: (0, r.jsx)(
                    q,
                    j(M({}, c), {
                        ref: g,
                        emoji: t,
                        text: n,
                        themeType: l,
                        className: m ? L.hoisted : void 0,
                        onShowToolbar: I,
                        renderToolbar: (e) =>
                            (0, r.jsx)(C.ZP, {
                                targetRef: g,
                                user: a,
                                sourceType: w.n_.STATUS,
                                isVisible: y && !m,
                                isExpandable: e,
                                onAction: u
                            })
                    })
                )
            })
    });
}
function J(e) {
    var t,
        n,
        { location: i, user: a, onCloseProfile: o, previewText: s, previewEmoji: l, previewLabel: u, placeholderText: d, prompt: f, disableEdit: _ = !1 } = e,
        m = U(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'previewLabel', 'placeholderText', 'prompt', 'disableEdit']);
    let g = (0, b.Z)(a.id),
        { analyticsLocations: y } = (0, h.ZP)(p.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        v = (0, c.e7)([I.default], () => I.default.getId() === a.id),
        O = v && !_,
        S = (0, T.T)({ location: i }),
        A = !v && !a.bot && S;
    if (null != s || null != l) {
        let e = null != l ? l : null,
            t = null != s && '' !== s ? s : null,
            n = null != u ? u : null;
        return (0, r.jsx)(h.Gt, {
            value: y,
            children: (0, r.jsx)(
                q,
                M(
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
                      z,
                      M(
                          {
                              onCloseProfile: o,
                              prompt: f
                          },
                          m
                      )
                  )
              })
            : A
              ? (0, r.jsx)(h.Gt, {
                    value: y,
                    children: (0, r.jsx)(
                        X,
                        M(
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
                          Q,
                          M(
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
                          q,
                          M(
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
