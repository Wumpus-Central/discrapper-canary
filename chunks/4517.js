(n.d(t, { Z: () => H }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(66546),
    l = n(442837),
    c = n(846519),
    u = n(481060),
    d = n(607070),
    f = n(584973),
    _ = n(100527),
    p = n(906732),
    h = n(368326),
    m = n(74340),
    g = n(19391),
    E = n(8454),
    b = n(346565),
    y = n(633302),
    O = n(314897),
    v = n(785717),
    I = n(81570),
    T = n(510659),
    S = n(287954),
    A = n(810097),
    N = n(64621),
    C = n(913002),
    w = n(228168),
    R = n(244096),
    P = n(388032),
    D = n(484822);
function L(e, t, n) {
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = U(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function G(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(D.referenceContainer, n),
        children: (0, r.jsx)('div', {
            className: D.outer,
            children: (0, r.jsx)('span', {
                className: D.inner,
                children: t
            })
        })
    });
}
let B = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a } = e,
            { analyticsLocations: s } = (0, p.ZP)(),
            { trackUserProfileAction: l } = (0, v.KZ)(),
            c = () => {
                (l({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                    null == i || i(),
                    (0, u.ZDy)(async () => {
                        let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                j(x({}, t), {
                                    sourceAnalyticsLocations: s,
                                    location: 'UserProfileCustomStatusBubble',
                                    prompt: a
                                })
                            );
                    }));
            },
            d = null != a ? a.label() : P.intl.string(P.t.evw0o6),
            f = (0, r.jsxs)('div', {
                className: D.content,
                children: [
                    (0, r.jsx)(u.oFk, {
                        size: 'xs',
                        className: D.addStatusIcon,
                        colorClass: D.addStatusIconColor
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        className: o()(D.addStatusPrompt, null != a && D.italicPrompt),
                        children: d
                    })
                ]
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(G, { children: f }),
                (0, r.jsx)(u.tEY, {
                    ringClassName: D.ring,
                    children: (0, r.jsx)('div', {
                        className: o()(D.container, D.editable),
                        ref: t,
                        children: (0, r.jsx)(u.P3F, {
                            className: D.outer,
                            'aria-label': P.intl.string(P.t['zrpF/f']),
                            onClick: c,
                            focusProps: { ringClassName: D.ring },
                            children: (0, r.jsxs)('span', {
                                className: o()(D.inner, D.clickable),
                                children: [
                                    (0, r.jsx)(u.oFk, {
                                        size: 'xs',
                                        className: D.addStatusIcon,
                                        colorClass: D.addStatusIconColor
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        className: o()(D.addStatusPrompt, null != a && D.italicPrompt),
                                        children: d
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        });
    }),
    Z = i.forwardRef(function (e, t) {
        var n, a;
        let { emoji: _, text: p, animate: m, className: E, renderToolbar: y, onShowToolbar: O, placeholderText: I, label: S, hasEntered: A = !0 } = e,
            N = (0, T.yi)(),
            { trackUserProfileAction: C } = (0, v.KZ)(),
            L = (0, h.p)({ location: 'CustomStatusBubble' }),
            [x, k] = i.useState(!1);
        i.useEffect(() => {
            null != W.current ? k(W.current.getBoundingClientRect().height > R.Ow + R.P) : k(!1);
        }, [S, x]);
        let j = null != _ ? R.Hp : 0,
            M = null != S ? R.du : 0,
            U = (x && (null == _ || null != p) ? R._v : R.hT) + j + M,
            B = R.YF + j + M,
            Z = i.useRef(null),
            F = i.useRef(null),
            V = i.useRef(null),
            H = i.useRef(U),
            Y = i.useRef(B),
            W = i.useRef(null),
            K = null != _ && null == p && null == S,
            [z, q] = i.useState(!1),
            [$, X] = i.useState(!0),
            [Q, J] = i.useState(!K && A),
            ee = A && z,
            et = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            [en] = i.useState(() => new c.V7());
        (i.useEffect(() => () => en.stop(), [en]),
            i.useEffect(() => {
                null == N || N.onInteractionPopoutTargetRefChange(Z);
            }, [N]));
        let [er, ei] = (0, u.q_F)(() => ({
            maxHeight: ''.concat(H.current, 'px'),
            config: {
                clamp: !0,
                duration: R.R1
            }
        }));
        i.useLayoutEffect(() => {
            if ((q(!0), null == F.current || null == V.current || !ee)) return;
            let e = F.current.getBoundingClientRect().height,
                t = V.current.getBoundingClientRect().height;
            (J(t > e), (H.current = e), (Y.current = t), ei({ maxHeight: ''.concat(Math.min($ ? H.current : Y.current, $ ? U : B), 'px') }));
        }, [ee, p, _, S, ei, $, U, B]);
        let ea = (e) => {
                Q &&
                    (e
                        ? ei({
                              maxHeight: ''.concat(Math.min(Y.current, B), 'px'),
                              delay: et ? 0 : R.zS,
                              config: {
                                  clamp: !0,
                                  duration: et ? 0 : R.R1
                              }
                          })
                        : ei({
                              maxHeight: ''.concat(Math.min(H.current, U), 'px'),
                              delay: 0
                          }),
                    et ? X(!e) : en.start(e ? R.zS : R.Sq, () => X(!e)));
            },
            eo =
                null != S
                    ? (0, r.jsx)('div', {
                          ref: W,
                          className: D.labelRow,
                          children: (0, r.jsx)(b.Z, { label: S })
                      })
                    : null,
            es =
                null != _
                    ? (0, r.jsx)(f.Z, {
                          emoji: _,
                          animate: m,
                          hideTooltip: !1,
                          tooltipDelay: w.vB,
                          className: D.statusEmoji
                      })
                    : null,
            el =
                null != p
                    ? (0, r.jsx)(u.Text, {
                          variant: 'text-sm/normal',
                          className: D.statusText,
                          children: p
                      })
                    : null,
            ec =
                void 0 === I || (null != _ && L)
                    ? null
                    : (0, r.jsx)(u.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          'aria-label': ''.concat(P.intl.string(P.t.EVV6ub), ': ').concat(I),
                          className: o()(D.statusText, L && D.italicPrompt),
                          children: null != I ? I : ''
                      }),
            eu = null == el || '' === p ? ec : el,
            ed = (0, r.jsxs)('div', {
                ref: F,
                className: o()(D.content, x && D.singleLineTextClamp),
                children: [eo, es, eu]
            }),
            ef = (0, r.jsxs)('div', {
                ref: V,
                className: o()(D.content, D.unclamped),
                children: [eo, es, eu]
            }),
            e_ = (0, r.jsx)('div', {
                ref: t,
                className: D.outer,
                children: (0, r.jsx)('span', {
                    className: D.inner,
                    children: (0, r.jsxs)(s.animated.div, {
                        style: er,
                        className: o()(D.content, {
                            [D.singleLineTextClamp]: x,
                            [D.unclamped]: !$
                        }),
                        children: [eo, es, eu]
                    })
                })
            }),
            ep = (0, r.jsxs)(G, {
                className: null != eo ? D.withLabel : void 0,
                children: [eo, ed, ef]
            });
        return null == O
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      ep,
                      (0, r.jsx)(u.tEY, {
                          ringClassName: D.ring,
                          children: (0, r.jsxs)('div', {
                              ref: Z,
                              role: 'tooltip',
                              tabIndex: 0,
                              className: o()(D.container, E),
                              'aria-label': P.intl.formatToPlainString(P.t.xRGqo6, {
                                  emoji: null != (n = null == _ ? void 0 : _.name) ? n : '',
                                  status: p,
                                  label: null != S ? ''.concat((0, g.Z)(S), ':') : ''
                              }),
                              onMouseEnter: () => {
                                  (C({ action: 'HOVER_CUSTOM_STATUS' }), ea(!0));
                              },
                              onMouseLeave: () => {
                                  ea(!1);
                              },
                              onFocus: () => ea(!0),
                              onBlur: () => ea(!1),
                              children: [e_, null == y ? void 0 : y(Q)]
                          })
                      })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      ep,
                      (0, r.jsx)(u.tEY, {
                          ringClassName: D.ring,
                          children: (0, r.jsxs)('div', {
                              ref: Z,
                              role: 'tooltip',
                              tabIndex: 0,
                              className: o()(D.container, E),
                              'aria-label': P.intl.formatToPlainString(P.t.xRGqo6, {
                                  emoji: null != (a = null == _ ? void 0 : _.name) ? a : '',
                                  status: p,
                                  label: null != S ? ''.concat((0, g.Z)(S), ':') : ''
                              }),
                              onFocus: () => {
                                  (O(!0), ea(!0));
                              },
                              onBlur: (e) => {
                                  var t;
                                  (null == (t = Z.current) ? void 0 : t.contains(e.relatedTarget)) || (O(!1), ea(!1));
                              },
                              onMouseEnter: () => {
                                  (C({ action: 'HOVER_CUSTOM_STATUS' }), O(!0), ea(!0));
                              },
                              onMouseLeave: () => {
                                  (O(!1), ea(!1));
                              },
                              children: [e_, null == y ? void 0 : y(Q)]
                          })
                      })
                  ]
              });
    }),
    F = i.forwardRef(function (e, t) {
        var { emoji: n, text: a, label: o, onCloseProfile: s } = e,
            l = M(e, ['emoji', 'text', 'label', 'onCloseProfile']);
        let [c, u] = i.useState(!1);
        return (0, r.jsx)(
            Z,
            j(x({}, l), {
                ref: t,
                emoji: n,
                text: a,
                label: o,
                className: D.editable,
                onShowToolbar: u,
                renderToolbar: (e) =>
                    (0, r.jsx)(C.Z, {
                        isVisible: c,
                        isExpandable: e,
                        onCloseProfile: s
                    })
            })
        );
    });
function V(e) {
    var { emoji: t, text: n, label: a, user: o, guildId: s, channelId: l, themeType: c } = e,
        u = M(e, ['emoji', 'text', 'label', 'user', 'guildId', 'channelId', 'themeType']);
    let { trackUserProfileAction: d } = (0, v.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: p } = (0, T.Xo)(),
        h = _ === w.n_.STATUS && f === w.P.REACT,
        m = _ === w.n_.STATUS && f === w.P.REPLY,
        E = h || m,
        b = i.useRef(null),
        O = i.useRef(t),
        I = i.useRef(n);
    i.useEffect(() => {
        _ === w.n_.STATUS && ((O.current !== t || I.current !== n) && p(), (O.current = t), (I.current = n));
    }, [_, p, t, n]);
    let [C, R] = i.useState(!1),
        P = i.useCallback(
            (e) => {
                (e || !E) && R(e);
            },
            [E]
        ),
        L = (e) => (null == e ? null : null != e.id ? '`' + ':'.concat(e.name, ':') + '`' : y.ZP.translateSurrogatesToInlineEmoji(e.name)),
        k = (e, t) => (null == e ? t : ''.concat(e, ' ').concat(t)),
        U = () => {
            let e = L(t),
                r = null == n ? e : k(e, n);
            return null != a ? ''.concat((0, g.Z)(a), ':\n> ').concat(r) : r;
        };
    return (0, r.jsx)(S.Z, {
        user: o,
        guildId: s,
        channelId: l,
        themeType: c,
        sourceDetails: U(),
        sourceType: w.n_.STATUS,
        onAction: d,
        onClose: () => R(!1),
        children: () =>
            (0, r.jsx)(N.Z, {
                targetElementRef: b,
                sourceType: w.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    Z,
                    j(x({}, u), {
                        ref: b,
                        emoji: t,
                        text: n,
                        label: a,
                        themeType: c,
                        className: E ? D.hoisted : void 0,
                        onShowToolbar: P,
                        renderToolbar: (e) =>
                            (0, r.jsx)(A.ZP, {
                                targetRef: b,
                                user: o,
                                sourceType: w.n_.STATUS,
                                isVisible: C && !E,
                                isExpandable: e,
                                onAction: d
                            })
                    })
                )
            })
    });
}
let H = i.forwardRef(function (e, t) {
    var n, i;
    let { location: a, user: o, onCloseProfile: s, previewText: c, previewEmoji: u, previewLabel: d, placeholderText: f, prompt: h, disableToolbar: g = !1 } = e,
        b = M(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'previewLabel', 'placeholderText', 'prompt', 'disableToolbar']),
        y = (0, E.Z)(o.id),
        { analyticsLocations: v } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        T = (0, l.e7)([O.default], () => O.default.getId() === o.id),
        S = T && !g,
        A = (0, I.T)({ location: a }),
        N = !T && !o.bot && !g && A;
    if (null != c || null != u) {
        let e = null != u ? u : null,
            n = null != c && '' !== c ? c : null,
            i = null != d ? d : null;
        return (0, r.jsx)(p.Gt, {
            value: v,
            children: (0, r.jsx)(
                Z,
                x(
                    {
                        emoji: e,
                        text: n,
                        placeholderText: f,
                        label: i,
                        ref: t
                    },
                    b
                )
            )
        });
    }
    let C = null != (n = null == y ? void 0 : y.emoji) ? n : null,
        w = null != (i = null == y ? void 0 : y.state) ? i : null,
        R = null != w && '' !== w ? w : null,
        P = null != y ? (0, m.Z)(y) : null;
    return null != C || null != R || S
        ? null == C && null == R
            ? (0, r.jsx)(p.Gt, {
                  value: v,
                  children: (0, r.jsx)(
                      B,
                      x(
                          {
                              onCloseProfile: s,
                              prompt: h,
                              ref: t
                          },
                          b
                      )
                  )
              })
            : N
              ? (0, r.jsx)(p.Gt, {
                    value: v,
                    children: (0, r.jsx)(
                        V,
                        x(
                            {
                                user: o,
                                emoji: C,
                                text: R,
                                label: P
                            },
                            b
                        )
                    )
                })
              : S
                ? (0, r.jsx)(p.Gt, {
                      value: v,
                      children: (0, r.jsx)(
                          F,
                          x(
                              {
                                  emoji: C,
                                  text: R,
                                  label: P,
                                  onCloseProfile: s,
                                  ref: t
                              },
                              b
                          )
                      )
                  })
                : (0, r.jsx)(p.Gt, {
                      value: v,
                      children: (0, r.jsx)(
                          Z,
                          x(
                              {
                                  emoji: C,
                                  text: R,
                                  label: P,
                                  ref: t
                              },
                              b
                          )
                      )
                  })
        : null;
});
