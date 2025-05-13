n.d(t, { Z: () => er }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(683305),
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
    P = n(287954),
    R = n(810097),
    w = n(64621),
    D = n(913002),
    L = n(228168),
    x = n(981631),
    k = n(388032),
    M = n(484822);
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
function F(e, t) {
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
let X = 200,
    J = 3000;
function $(e) {
    let { onCloseProfile: t, prompt: a } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        { trackUserProfileAction: l } = (0, A.KZ)(),
        [c, f] = i.useState(!1),
        [_, p] = i.useState(!1),
        g = i.useRef(null),
        E = i.useRef(!1),
        { isEligibleForCustomStatusLabels: b } = (0, m.Z)({ location: 'AddCustomStatusBubble' });
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
        S = null != a ? a.label() : k.intl.string(k.t.evw0o6),
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
                    children: S
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Q, { children: N }),
            (0, r.jsx)(u.tEY, {
                ringClassName: M.ring,
                children: (0, r.jsxs)('div', {
                    ref: g,
                    className: o()(M.container, M.editable),
                    onMouseEnter: () => {
                        (E.current = !0), O(!0);
                    },
                    onMouseLeave: () => {
                        (E.current = !1), I();
                    },
                    onFocus: () => {
                        (E.current = !0), O(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        (null == (t = g.current) ? void 0 : t.contains(e.relatedTarget)) || ((E.current = !1), I());
                    },
                    children: [
                        (0, r.jsx)(u.P3F, {
                            className: M.outer,
                            'aria-label': k.intl.string(k.t['zrpF/f']),
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
                                        children: S
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
let ee = i.forwardRef(function (e, t) {
    var n, a;
    let { emoji: d, text: p, animate: h, className: m, renderToolbar: E, onShowToolbar: b, placeholderText: y, label: v, hasEntered: I = !0 } = e,
        S = (0, C.yi)(),
        { trackUserProfileAction: T } = (0, A.KZ)(),
        N = (0, g.p)({ location: 'CustomStatusBubble' }),
        P = null != d ? Z : 0,
        R = null != v ? q : 0,
        w = H + P + R,
        D = Y + P + R,
        x = i.useRef(null),
        j = i.useRef(null),
        U = i.useRef(null),
        G = i.useRef(w),
        B = i.useRef(D),
        F = null != d && null == p && null == v,
        [V, X] = i.useState(!1),
        [J, $] = i.useState(!0),
        [ee, et] = i.useState(!F && I),
        en = I && V,
        er = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [ei] = i.useState(() => new c.V7());
    i.useEffect(() => () => ei.stop(), [ei]),
        i.useEffect(() => {
            null == S || S.onInteractionPopoutTargetRefChange(x);
        }, [S]);
    let [ea, eo] = (0, u.q_F)(() => ({
        maxHeight: ''.concat(G.current, 'px'),
        config: {
            clamp: !0,
            duration: W
        }
    }));
    i.useLayoutEffect(() => {
        if ((X(!0), null == j.current || null == U.current || !en)) return;
        let e = j.current.getBoundingClientRect().height,
            t = U.current.getBoundingClientRect().height;
        et(t > e),
            (G.current = e),
            (B.current = t),
            eo({
                maxHeight: ''.concat(Math.min(J ? G.current : B.current, J ? w : D), 'px'),
                immediate: !0
            });
    }, [en, p, d, v, eo, J, w, D]);
    let es = (e) => {
            ee &&
                (e
                    ? eo({
                          maxHeight: ''.concat(Math.min(B.current, D), 'px'),
                          delay: er ? 0 : z,
                          config: {
                              clamp: !0,
                              duration: er ? 0 : W
                          }
                      })
                    : eo({
                          maxHeight: ''.concat(Math.min(G.current, w), 'px'),
                          delay: 0
                      }),
                er ? $(!e) : ei.start(e ? z : K, () => $(!e)));
        },
        el =
            null != v
                ? (0, r.jsx)(O.Z, {
                      label: v,
                      className: M.labelRow
                  })
                : null,
        ec =
            null != d
                ? (0, r.jsx)(_.Z, {
                      emoji: d,
                      animate: h,
                      hideTooltip: !1,
                      tooltipDelay: L.vB,
                      className: M.statusEmoji
                  })
                : null,
        eu =
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: M.statusText,
                      children: p
                  })
                : null,
        ed =
            void 0 === y || (null != d && N)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(k.intl.string(k.t.EVV6ub), ': ').concat(y),
                      className: o()(M.statusText, N && M.italicPrompt),
                      children: null != y ? y : ''
                  }),
        ef = null == eu || '' === p ? ed : eu,
        e_ = (0, r.jsxs)('div', {
            ref: j,
            className: M.content,
            children: [el, ec, ef]
        }),
        ep = (0, r.jsxs)('div', {
            ref: U,
            className: o()(M.content, M.unclamped),
            children: [el, ec, ef]
        }),
        eh = (0, r.jsx)('div', {
            ref: t,
            className: M.outer,
            children: (0, r.jsx)('span', {
                className: M.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: ea,
                    className: o()(M.content, { [M.unclamped]: !J }),
                    children: [el, ec, ef]
                })
            })
        }),
        em = (0, r.jsxs)(Q, {
            className: null != el ? M.withLabel : void 0,
            children: [el, e_, ep]
        });
    return null == b
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  em,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: M.ring,
                      children: (0, r.jsxs)('div', {
                          ref: x,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(M.container, m),
                          'aria-label': k.intl.formatToPlainString(k.t.UpF5QU, {
                              emoji: null != (n = null == d ? void 0 : d.name) ? n : '',
                              status: p
                          }),
                          onMouseEnter: () => {
                              T({ action: 'HOVER_CUSTOM_STATUS' }), es(!0);
                          },
                          onMouseLeave: () => {
                              es(!1);
                          },
                          onFocus: () => es(!0),
                          onBlur: () => es(!1),
                          children: [eh, null == E ? void 0 : E(ee)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  em,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: M.ring,
                      children: (0, r.jsxs)('div', {
                          ref: x,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(M.container, m),
                          'aria-label': k.intl.formatToPlainString(k.t.UpF5QU, {
                              emoji: null != (a = null == d ? void 0 : d.name) ? a : '',
                              status: p
                          }),
                          onFocus: () => {
                              b(!0), es(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = x.current) ? void 0 : t.contains(e.relatedTarget)) || (b(!1), es(!1));
                          },
                          onMouseEnter: () => {
                              T({ action: 'HOVER_CUSTOM_STATUS' }), b(!0), es(!0);
                          },
                          onMouseLeave: () => {
                              b(!1), es(!1);
                          },
                          children: [eh, null == E ? void 0 : E(ee)]
                      })
                  })
              ]
          });
});
function et(e) {
    var { emoji: t, text: n, label: a, onCloseProfile: o } = e,
        s = F(e, ['emoji', 'text', 'label', 'onCloseProfile']);
    let [l, c] = i.useState(!1);
    return (0, r.jsx)(
        ee,
        B(U({}, s), {
            emoji: t,
            text: n,
            label: a,
            className: M.editable,
            onShowToolbar: c,
            renderToolbar: (e) =>
                (0, r.jsx)(D.Z, {
                    isVisible: l,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function en(e) {
    var { emoji: t, text: n, label: a, user: o, guildId: s, channelId: l, themeType: c } = e,
        u = F(e, ['emoji', 'text', 'label', 'user', 'guildId', 'channelId', 'themeType']);
    let { trackUserProfileAction: d } = (0, A.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: p } = (0, C.Xo)(),
        h = _ === L.n_.STATUS && f === L.P.REACT,
        m = _ === L.n_.STATUS && f === L.P.REPLY,
        g = h || m,
        E = i.useRef(null),
        y = i.useRef(t),
        O = i.useRef(n);
    i.useEffect(() => {
        _ === L.n_.STATUS && ((y.current !== t || O.current !== n) && p(), (y.current = t), (O.current = n));
    }, [_, p, t, n]);
    let [v, S] = i.useState(!1),
        T = i.useCallback(
            (e) => {
                (e || !g) && S(e);
            },
            [g]
        ),
        N = (e) => (null == e ? null : null != e.id ? '`' + ':'.concat(e.name, ':') + '`' : I.ZP.translateSurrogatesToInlineEmoji(e.name)),
        D = (e, t) => (null == e ? t : ''.concat(e, ' ').concat(t)),
        x = () => {
            let e = N(t),
                r = null == n ? e : D(e, n);
            return null != a ? ''.concat((0, b.Z)(a), ':\n> ').concat(r) : r;
        };
    return (0, r.jsx)(P.Z, {
        user: o,
        guildId: s,
        channelId: l,
        themeType: c,
        sourceDetails: x(),
        sourceType: L.n_.STATUS,
        onAction: d,
        onClose: () => S(!1),
        children: () =>
            (0, r.jsx)(w.Z, {
                targetElementRef: E,
                sourceType: L.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    ee,
                    B(U({}, u), {
                        ref: E,
                        emoji: t,
                        text: n,
                        label: a,
                        themeType: c,
                        className: g ? M.hoisted : void 0,
                        onShowToolbar: T,
                        renderToolbar: (e) =>
                            (0, r.jsx)(R.ZP, {
                                targetRef: E,
                                user: o,
                                sourceType: L.n_.STATUS,
                                isVisible: v && !g,
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
        { location: i, user: a, onCloseProfile: o, previewText: s, previewEmoji: c, previewLabel: u, placeholderText: d, prompt: f, disableEdit: _ = !1 } = e,
        m = F(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'previewLabel', 'placeholderText', 'prompt', 'disableEdit']);
    let g = (0, y.Z)(a.id),
        { analyticsLocations: b } = (0, h.ZP)(p.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        O = (0, l.e7)([S.default], () => S.default.getId() === a.id),
        v = O && !_,
        I = (0, N.T)({ location: i }),
        T = !O && !a.bot && I;
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
        P = null != C && '' !== C ? C : null,
        R = null != g ? (0, E.Z)(g) : null;
    return null != A || null != P || v
        ? null == A && null == P
            ? (0, r.jsx)(h.Gt, {
                  value: b,
                  children: (0, r.jsx)(
                      $,
                      U(
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
                    value: b,
                    children: (0, r.jsx)(
                        en,
                        U(
                            {
                                user: a,
                                emoji: A,
                                text: P,
                                label: R
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
                                  text: P,
                                  label: R,
                                  onCloseProfile: o
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
                                  text: P,
                                  label: R
                              },
                              m
                          )
                      )
                  })
        : null;
}
