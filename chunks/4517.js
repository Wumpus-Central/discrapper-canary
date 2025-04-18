n.d(t, { Z: () => X }), n(388685);
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
    E = n(8454),
    b = n(600243),
    y = n(346565),
    v = n(633302),
    O = n(314897),
    I = n(785717),
    S = n(81570),
    T = n(510659),
    N = n(287954),
    A = n(810097),
    C = n(64621),
    R = n(913002),
    P = n(228168),
    w = n(388032),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = U(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let G = 1.25,
    B = 36,
    F = 144,
    V = 150,
    Z = 150,
    H = 300,
    W = 14;
function Y(e) {
    let { profileType: t, children: n, className: i } = e,
        a = {
            [D.biteSize]: t === P.y0.BITE_SIZE,
            [D.fullSize]: t === P.y0.FULL_SIZE,
            [D.panel]: t === P.y0.PANEL
        };
    return (0, r.jsx)('div', {
        className: o()(D.referenceContainer, a, i),
        children: (0, r.jsx)('div', {
            className: o()(D.outer, a),
            children: (0, r.jsx)('span', {
                className: D.inner,
                children: n
            })
        })
    });
}
function K(e) {
    let { profileType: t, onCloseProfile: i, prompt: a } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        { trackUserProfileAction: c } = (0, I.KZ)(),
        u = (0, m.Z)({ location: 'AddCustomStatusBubble' }),
        f = {
            [D.biteSize]: t === P.y0.BITE_SIZE,
            [D.fullSize]: t === P.y0.FULL_SIZE,
            [D.panel]: t === P.y0.PANEL
        },
        _ = () => {
            c({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, d.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            k(x({}, t), {
                                sourceAnalyticsLocations: s,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: a
                            })
                        );
                });
        },
        p = u
            ? (0, r.jsxs)('div', {
                  className: D.labelIconsRow,
                  children: [
                      (0, r.jsx)(b.Z, {
                          label: l.w.LISTEN,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(b.Z, {
                          label: l.w.WATCH,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(b.Z, {
                          label: l.w.PLAY,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(b.Z, {
                          label: l.w.THINK,
                          size: 'xxs'
                      }),
                      (0, r.jsx)(b.Z, {
                          label: l.w.LOVE,
                          size: 'xxs'
                      })
                  ]
              })
            : null,
        g = null != a ? a.label() : w.NW.string(w.t.evw0o6),
        E = (0, r.jsxs)('div', {
            className: o()(D.content, f, null != p && D.withLabel),
            children: [
                p,
                (0, r.jsx)(d.oFk, {
                    size: 'xs',
                    className: D.addStatusIcon,
                    colorClass: D.addStatusIconColor
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    className: o()(D.addStatusPrompt, null != a && D.italicPrompt),
                    children: g
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Y, {
                profileType: t,
                children: E
            }),
            (0, r.jsx)(d.P3F, {
                className: o()(D.container, D.editable, f),
                'aria-label': w.NW.string(w.t['zrpF/f']),
                onClick: _,
                focusProps: { ringClassName: D.ring },
                children: (0, r.jsx)('div', {
                    className: o()(D.outer, f),
                    children: (0, r.jsxs)('span', {
                        className: o()(D.inner, D.clickable),
                        children: [
                            p,
                            (0, r.jsx)(d.oFk, {
                                size: 'xs',
                                className: D.addStatusIcon,
                                colorClass: D.addStatusIconColor
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                className: o()(D.addStatusPrompt, null != a && D.italicPrompt),
                                children: g
                            })
                        ]
                    })
                })
            })
        ]
    });
}
let z = i.forwardRef(function (e, t) {
    var n, a;
    let { emoji: l, text: p, profileType: h, animate: m, className: E, renderToolbar: b, onShowToolbar: v, placeholderText: O, label: S, hasEntered: N = !0 } = e,
        A = (0, T.yi)(),
        { trackUserProfileAction: C } = (0, I.KZ)(),
        R = {
            [D.biteSize]: h === P.y0.BITE_SIZE,
            [D.fullSize]: h === P.y0.FULL_SIZE,
            [D.panel]: h === P.y0.PANEL
        },
        L = (0, g.p)({ location: 'CustomStatusBubble' }),
        x = null != l ? G : 0,
        M = null != S ? W : 0,
        k = B + x + M,
        j = F + x + M,
        U = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(k),
        Q = i.useRef(j),
        X = null != l && null == p,
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!0),
        [en, er] = i.useState(!X && N),
        ei = !X && N && J;
    i.useLayoutEffect(() => {
        if (($(!0), null == K.current || null == z.current || !ei)) return;
        let e = K.current.getBoundingClientRect().height,
            t = z.current.getBoundingClientRect().height;
        er(t > e), (q.current = e), (Q.current = t);
    }, [ei, p, l]);
    let ea = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        [eo] = i.useState(() => new u.V7());
    i.useEffect(() => () => eo.stop(), [eo]),
        i.useEffect(() => {
            null == A || A.onInteractionPopoutTargetRefChange(U);
        }, [A]);
    let [es, el] = (0, d.q_F)(() => ({
            maxHeight: ''.concat(q.current, 'px'),
            config: {
                clamp: !0,
                duration: V
            }
        })),
        ec = (e) => {
            en &&
                (e
                    ? el({
                          maxHeight: ''.concat(Math.min(Q.current, j), 'px'),
                          delay: ea ? 0 : H,
                          config: {
                              clamp: !0,
                              duration: ea ? 0 : V
                          }
                      })
                    : el({
                          maxHeight: ''.concat(Math.min(q.current, k), 'px'),
                          delay: 0
                      }),
                ea ? et(!e) : eo.start(e ? H : Z, () => et(!e)));
        },
        eu =
            null != S
                ? (0, r.jsx)(y.Z, {
                      label: S,
                      className: D.labelRow
                  })
                : null,
        ed =
            null != l
                ? (0, r.jsx)(_.Z, {
                      emoji: l,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: P.vB,
                      className: D.statusEmoji
                  })
                : null,
        ef =
            null != p
                ? (0, r.jsx)(d.Text, {
                      variant: 'text-sm/normal',
                      className: D.statusText,
                      children: p
                  })
                : null,
        e_ =
            void 0 === O || (null != l && L)
                ? null
                : (0, r.jsx)(d.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(w.NW.string(w.t.EVV6ub), ': ').concat(O),
                      className: o()(D.statusText, L && D.italicPrompt),
                      children: null != O ? O : ''
                  }),
        ep = null == ef || '' === p ? e_ : ef,
        eh = (0, r.jsxs)('div', {
            ref: K,
            className: o()(D.content, R),
            children: [eu, ed, ep]
        }),
        em = (0, r.jsxs)('div', {
            ref: z,
            className: o()(D.content, D.unclamped, R),
            children: [eu, ed, ep]
        }),
        eg = (0, r.jsx)('div', {
            ref: t,
            className: o()(D.outer, R),
            children: (0, r.jsx)('span', {
                className: D.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: es,
                    className: o()(D.content, { [D.unclamped]: !ee }),
                    children: [eu, ed, ep]
                })
            })
        }),
        eE = (0, r.jsxs)(Y, {
            profileType: h,
            className: null != S ? D.withLabel : void 0,
            children: [eu, eh, em]
        });
    return null == v
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  eE,
                  (0, r.jsx)(d.tEY, {
                      ringClassName: D.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(D.container, R, E),
                          'aria-label': w.NW.formatToPlainString(w.t.UpF5QU, {
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
                      ringClassName: D.ring,
                      children: (0, r.jsxs)('div', {
                          ref: U,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: o()(D.container, R, E),
                          'aria-label': w.NW.formatToPlainString(w.t.UpF5QU, {
                              emoji: null != (a = null == l ? void 0 : l.name) ? a : '',
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
function q(e) {
    var { emoji: t, text: n, onCloseProfile: a } = e,
        o = j(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        z,
        k(x({}, o), {
            emoji: t,
            text: n,
            className: D.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(R.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: a
                })
        })
    );
}
function Q(e) {
    var { emoji: t, text: n, user: a, guildId: o, channelId: s, profileType: l } = e,
        c = j(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'profileType']);
    let { trackUserProfileAction: u } = (0, I.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, T.Xo)(),
        p = f === P.n_.STATUS && d === P.P.REACT,
        h = f === P.n_.STATUS && d === P.P.REPLY,
        m = p || h,
        g = i.useRef(null),
        E = i.useRef(t),
        b = i.useRef(n);
    i.useEffect(() => {
        f === P.n_.STATUS && ((E.current !== t || b.current !== n) && _(), (E.current = t), (b.current = n));
    }, [f, _, t, n]);
    let [y, O] = i.useState(!1),
        S = i.useCallback(
            (e) => {
                (e || !m) && O(e);
            },
            [m]
        ),
        R = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : v.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(N.Z, {
        user: a,
        guildId: o,
        channelId: s,
        profileType: l,
        sourceDetails: R(),
        sourceType: P.n_.STATUS,
        onAction: u,
        onClose: () => O(!1),
        children: () =>
            (0, r.jsx)(C.Z, {
                targetElementRef: g,
                sourceType: P.n_.STATUS,
                user: a,
                children: (0, r.jsx)(
                    z,
                    k(x({}, c), {
                        ref: g,
                        emoji: t,
                        text: n,
                        profileType: l,
                        className: m ? D.hoisted : void 0,
                        onShowToolbar: S,
                        renderToolbar: (e) =>
                            (0, r.jsx)(A.ZP, {
                                targetRef: g,
                                user: a,
                                sourceType: P.n_.STATUS,
                                isVisible: y && !m,
                                isExpandable: e,
                                onAction: u
                            })
                    })
                )
            })
    });
}
function X(e) {
    var t,
        n,
        { location: i, user: a, onCloseProfile: o, previewText: s, previewEmoji: l, placeholderText: u, prompt: d, disableEdit: f = !1 } = e,
        _ = j(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'placeholderText', 'prompt', 'disableEdit']);
    let m = (0, E.Z)(a.id),
        { analyticsLocations: g } = (0, h.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        b = (0, c.e7)([O.default], () => O.default.getId() === a.id),
        y = b && !f,
        v = (0, S.T)({ location: i }),
        I = !b && !a.bot && v;
    if (null != s || null != l) {
        let e = null != l ? l : null,
            t = null != s && '' !== s ? s : null;
        return (0, r.jsx)(h.Gt, {
            value: g,
            children: (0, r.jsx)(
                z,
                x(
                    {
                        emoji: e,
                        text: t,
                        placeholderText: u
                    },
                    _
                )
            )
        });
    }
    let T = null != (t = null == m ? void 0 : m.emoji) ? t : null,
        N = null != (n = null == m ? void 0 : m.state) ? n : null,
        A = null != N && '' !== N ? N : null;
    return null != T || null != A || y
        ? null == T && null == A
            ? (0, r.jsx)(h.Gt, {
                  value: g,
                  children: (0, r.jsx)(
                      K,
                      x(
                          {
                              onCloseProfile: o,
                              prompt: d
                          },
                          _
                      )
                  )
              })
            : I
              ? (0, r.jsx)(h.Gt, {
                    value: g,
                    children: (0, r.jsx)(
                        Q,
                        x(
                            {
                                user: a,
                                emoji: T,
                                text: A
                            },
                            _
                        )
                    )
                })
              : y
                ? (0, r.jsx)(h.Gt, {
                      value: g,
                      children: (0, r.jsx)(
                          q,
                          x(
                              {
                                  emoji: T,
                                  text: A,
                                  onCloseProfile: o
                              },
                              _
                          )
                      )
                  })
                : (0, r.jsx)(h.Gt, {
                      value: g,
                      children: (0, r.jsx)(
                          z,
                          x(
                              {
                                  emoji: T,
                                  text: A
                              },
                              _
                          )
                      )
                  })
        : null;
}
