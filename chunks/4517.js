n.d(t, { Z: () => $ }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(524979),
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
    R = n(228168),
    P = n(388032),
    w = n(484822);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let U = 1.25,
    G = 36,
    B = 18,
    V = 144,
    F = 150,
    Z = 150,
    H = 300,
    Y = 12,
    W = 2,
    K = 26;
function z(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(w.referenceContainer, n),
        children: (0, r.jsx)('div', {
            className: w.outer,
            children: (0, r.jsx)('span', {
                className: w.inner,
                children: t
            })
        })
    });
}
function q(e) {
    let { onCloseProfile: t, prompt: i } = e,
        { analyticsLocations: a } = (0, p.ZP)(),
        { trackUserProfileAction: s } = (0, v.KZ)(),
        l = () => {
            s({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == t || t(),
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            k(L({}, t), {
                                sourceAnalyticsLocations: a,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: i
                            })
                        );
                });
        },
        c = null != i ? i.label() : P.intl.string(P.t.evw0o6),
        d = (0, r.jsxs)('div', {
            className: w.content,
            children: [
                (0, r.jsx)(u.oFk, {
                    size: 'xs',
                    className: w.addStatusIcon,
                    colorClass: w.addStatusIconColor
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: o()(w.addStatusPrompt, null != i && w.italicPrompt),
                    children: c
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(z, { children: d }),
            (0, r.jsx)(u.tEY, {
                ringClassName: w.ring,
                children: (0, r.jsx)('div', {
                    className: o()(w.container, w.editable),
                    children: (0, r.jsx)(u.P3F, {
                        className: w.outer,
                        'aria-label': P.intl.string(P.t['zrpF/f']),
                        onClick: l,
                        focusProps: { ringClassName: w.ring },
                        children: (0, r.jsxs)('span', {
                            className: o()(w.inner, w.clickable),
                            children: [
                                (0, r.jsx)(u.oFk, {
                                    size: 'xs',
                                    className: w.addStatusIcon,
                                    colorClass: w.addStatusIconColor
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    className: o()(w.addStatusPrompt, null != i && w.italicPrompt),
                                    children: c
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
let X = i.forwardRef(function (e, t) {
    var n, a;
    let { emoji: _, text: p, animate: m, className: g, renderToolbar: E, onShowToolbar: y, placeholderText: O, label: I, hasEntered: S = !0 } = e,
        A = (0, T.yi)(),
        { trackUserProfileAction: N } = (0, v.KZ)(),
        C = (0, h.p)({ location: 'CustomStatusBubble' }),
        [D, L] = i.useState(!1);
    i.useEffect(() => {
        null != ee.current ? L(ee.current.getBoundingClientRect().height > Y + W) : L(!1);
    }, [I, D]);
    let x = null != _ ? U : 0,
        k = null != I ? K : 0,
        M = (D && (null == _ || null != p) ? B : G) + x + k,
        j = V + x + k,
        q = i.useRef(null),
        X = i.useRef(null),
        Q = i.useRef(null),
        J = i.useRef(M),
        $ = i.useRef(j),
        ee = i.useRef(null),
        et = null != _ && null == p && null == I,
        [en, er] = i.useState(!1),
        [ei, ea] = i.useState(!0),
        [eo, es] = i.useState(!et && S),
        el = S && en,
        ec = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [eu] = i.useState(() => new c.V7());
    i.useEffect(() => () => eu.stop(), [eu]),
        i.useEffect(() => {
            null == A || A.onInteractionPopoutTargetRefChange(q);
        }, [A]);
    let [ed, ef] = (0, u.q_F)(() => ({
        maxHeight: ''.concat(J.current, 'px'),
        config: {
            clamp: !0,
            duration: F
        }
    }));
    i.useLayoutEffect(() => {
        if ((er(!0), null == X.current || null == Q.current || !el)) return;
        let e = X.current.getBoundingClientRect().height,
            t = Q.current.getBoundingClientRect().height;
        es(t > e), (J.current = e), ($.current = t), ef({ maxHeight: ''.concat(Math.min(ei ? J.current : $.current, ei ? M : j), 'px') });
    }, [el, p, _, I, ef, ei, M, j]);
    let e_ = (e) => {
            eo &&
                (e
                    ? ef({
                          maxHeight: ''.concat(Math.min($.current, j), 'px'),
                          delay: ec ? 0 : H,
                          config: {
                              clamp: !0,
                              duration: ec ? 0 : F
                          }
                      })
                    : ef({
                          maxHeight: ''.concat(Math.min(J.current, M), 'px'),
                          delay: 0
                      }),
                ec ? ea(!e) : eu.start(e ? H : Z, () => ea(!e)));
        },
        ep =
            null != I
                ? (0, r.jsx)('div', {
                      ref: ee,
                      className: w.labelRow,
                      children: (0, r.jsx)(b.Z, { label: I })
                  })
                : null,
        eh =
            null != _
                ? (0, r.jsx)(f.Z, {
                      emoji: _,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: R.vB,
                      className: w.statusEmoji
                  })
                : null,
        em =
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: w.statusText,
                      children: p
                  })
                : null,
        eg =
            void 0 === O || (null != _ && C)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(P.intl.string(P.t.EVV6ub), ': ').concat(O),
                      className: o()(w.statusText, C && w.italicPrompt),
                      children: null != O ? O : ''
                  }),
        eE = null == em || '' === p ? eg : em,
        eb = (0, r.jsxs)('div', {
            ref: X,
            className: o()(w.content, D && w.singleLineTextClamp),
            children: [ep, eh, eE]
        }),
        ey = (0, r.jsxs)('div', {
            ref: Q,
            className: o()(w.content, w.unclamped),
            children: [ep, eh, eE]
        }),
        eO = (0, r.jsx)('div', {
            ref: t,
            className: w.outer,
            children: (0, r.jsx)('span', {
                className: w.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: ed,
                    className: o()(w.content, {
                        [w.singleLineTextClamp]: D,
                        [w.unclamped]: !ei
                    }),
                    children: [ep, eh, eE]
                })
            })
        }),
        ev = (0, r.jsxs)(z, {
            className: null != ep ? w.withLabel : void 0,
            children: [ep, eb, ey]
        });
    return null == y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  ev,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: w.ring,
                      children: (0, r.jsxs)('div', {
                          ref: q,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(w.container, g),
                          'aria-label': P.intl.formatToPlainString(P.t.UpF5QU, {
                              emoji: null != (n = null == _ ? void 0 : _.name) ? n : '',
                              status: p
                          }),
                          onMouseEnter: () => {
                              N({ action: 'HOVER_CUSTOM_STATUS' }), e_(!0);
                          },
                          onMouseLeave: () => {
                              e_(!1);
                          },
                          onFocus: () => e_(!0),
                          onBlur: () => e_(!1),
                          children: [eO, null == E ? void 0 : E(eo)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  ev,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: w.ring,
                      children: (0, r.jsxs)('div', {
                          ref: q,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(w.container, g),
                          'aria-label': P.intl.formatToPlainString(P.t.UpF5QU, {
                              emoji: null != (a = null == _ ? void 0 : _.name) ? a : '',
                              status: p
                          }),
                          onFocus: () => {
                              y(!0), e_(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = q.current) ? void 0 : t.contains(e.relatedTarget)) || (y(!1), e_(!1));
                          },
                          onMouseEnter: () => {
                              N({ action: 'HOVER_CUSTOM_STATUS' }), y(!0), e_(!0);
                          },
                          onMouseLeave: () => {
                              y(!1), e_(!1);
                          },
                          children: [eO, null == E ? void 0 : E(eo)]
                      })
                  })
              ]
          });
});
function Q(e) {
    var { emoji: t, text: n, label: a, onCloseProfile: o } = e,
        s = M(e, ['emoji', 'text', 'label', 'onCloseProfile']);
    let [l, c] = i.useState(!1);
    return (0, r.jsx)(
        X,
        k(L({}, s), {
            emoji: t,
            text: n,
            label: a,
            className: w.editable,
            onShowToolbar: c,
            renderToolbar: (e) =>
                (0, r.jsx)(C.Z, {
                    isVisible: l,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function J(e) {
    var { emoji: t, text: n, label: a, user: o, guildId: s, channelId: l, themeType: c } = e,
        u = M(e, ['emoji', 'text', 'label', 'user', 'guildId', 'channelId', 'themeType']);
    let { trackUserProfileAction: d } = (0, v.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: p } = (0, T.Xo)(),
        h = _ === R.n_.STATUS && f === R.P.REACT,
        m = _ === R.n_.STATUS && f === R.P.REPLY,
        E = h || m,
        b = i.useRef(null),
        O = i.useRef(t),
        I = i.useRef(n);
    i.useEffect(() => {
        _ === R.n_.STATUS && ((O.current !== t || I.current !== n) && p(), (O.current = t), (I.current = n));
    }, [_, p, t, n]);
    let [C, P] = i.useState(!1),
        D = i.useCallback(
            (e) => {
                (e || !E) && P(e);
            },
            [E]
        ),
        x = (e) => (null == e ? null : null != e.id ? '`' + ':'.concat(e.name, ':') + '`' : y.ZP.translateSurrogatesToInlineEmoji(e.name)),
        j = (e, t) => (null == e ? t : ''.concat(e, ' ').concat(t)),
        U = () => {
            let e = x(t),
                r = null == n ? e : j(e, n);
            return null != a ? ''.concat((0, g.Z)(a), ':\n> ').concat(r) : r;
        };
    return (0, r.jsx)(S.Z, {
        user: o,
        guildId: s,
        channelId: l,
        themeType: c,
        sourceDetails: U(),
        sourceType: R.n_.STATUS,
        onAction: d,
        onClose: () => P(!1),
        children: () =>
            (0, r.jsx)(N.Z, {
                targetElementRef: b,
                sourceType: R.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    X,
                    k(L({}, u), {
                        ref: b,
                        emoji: t,
                        text: n,
                        label: a,
                        themeType: c,
                        className: E ? w.hoisted : void 0,
                        onShowToolbar: D,
                        renderToolbar: (e) =>
                            (0, r.jsx)(A.ZP, {
                                targetRef: b,
                                user: o,
                                sourceType: R.n_.STATUS,
                                isVisible: C && !E,
                                isExpandable: e,
                                onAction: d
                            })
                    })
                )
            })
    });
}
function $(e) {
    var t,
        n,
        { location: i, user: a, onCloseProfile: o, previewText: s, previewEmoji: c, previewLabel: u, placeholderText: d, prompt: f, disableToolbar: h = !1 } = e,
        g = M(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'previewLabel', 'placeholderText', 'prompt', 'disableToolbar']);
    let b = (0, E.Z)(a.id),
        { analyticsLocations: y } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        v = (0, l.e7)([O.default], () => O.default.getId() === a.id),
        T = v && !h,
        S = (0, I.T)({ location: i }),
        A = !v && !a.bot && !h && S;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null,
            n = null != u ? u : null;
        return (0, r.jsx)(p.Gt, {
            value: y,
            children: (0, r.jsx)(
                X,
                L(
                    {
                        emoji: e,
                        text: t,
                        placeholderText: d,
                        label: n
                    },
                    g
                )
            )
        });
    }
    let N = null != (t = null == b ? void 0 : b.emoji) ? t : null,
        C = null != (n = null == b ? void 0 : b.state) ? n : null,
        R = null != C && '' !== C ? C : null,
        P = null != b ? (0, m.Z)(b) : null;
    return null != N || null != R || T
        ? null == N && null == R
            ? (0, r.jsx)(p.Gt, {
                  value: y,
                  children: (0, r.jsx)(
                      q,
                      L(
                          {
                              onCloseProfile: o,
                              prompt: f
                          },
                          g
                      )
                  )
              })
            : A
              ? (0, r.jsx)(p.Gt, {
                    value: y,
                    children: (0, r.jsx)(
                        J,
                        L(
                            {
                                user: a,
                                emoji: N,
                                text: R,
                                label: P
                            },
                            g
                        )
                    )
                })
              : T
                ? (0, r.jsx)(p.Gt, {
                      value: y,
                      children: (0, r.jsx)(
                          Q,
                          L(
                              {
                                  emoji: N,
                                  text: R,
                                  label: P,
                                  onCloseProfile: o
                              },
                              g
                          )
                      )
                  })
                : (0, r.jsx)(p.Gt, {
                      value: y,
                      children: (0, r.jsx)(
                          X,
                          L(
                              {
                                  emoji: N,
                                  text: R,
                                  label: P
                              },
                              g
                          )
                      )
                  })
        : null;
}
