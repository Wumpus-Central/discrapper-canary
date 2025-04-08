n.d(t, { Z: () => Q }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(200100),
    l = n(442837),
    c = n(846519),
    u = n(481060),
    d = n(607070),
    f = n(584973),
    _ = n(100527),
    p = n(906732),
    h = n(368326),
    m = n(19391),
    g = n(8454),
    E = n(600243),
    b = n(633302),
    y = n(314897),
    v = n(785717),
    O = n(81570),
    I = n(510659),
    S = n(287954),
    T = n(810097),
    N = n(64621),
    A = n(913002),
    C = n(228168),
    R = n(388032),
    P = n(484822);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let j = 1.25,
    U = 36,
    G = 144,
    B = 150,
    V = 150,
    F = 300,
    Z = 14;
function H(e) {
    let { profileType: t, children: n, className: i } = e,
        o = {
            [P.biteSize]: t === C.y0.BITE_SIZE,
            [P.fullSize]: t === C.y0.FULL_SIZE,
            [P.panel]: t === C.y0.PANEL
        };
    return (0, r.jsx)('div', {
        className: a()(P.referenceContainer, o, i),
        children: (0, r.jsx)('div', {
            className: a()(P.outer, o),
            children: (0, r.jsx)('span', {
                className: P.inner,
                children: n
            })
        })
    });
}
function W(e) {
    let { profileType: t, onCloseProfile: i, prompt: o } = e,
        { analyticsLocations: s } = (0, p.ZP)(),
        { trackUserProfileAction: l } = (0, v.KZ)(),
        c = {
            [P.biteSize]: t === C.y0.BITE_SIZE,
            [P.fullSize]: t === C.y0.FULL_SIZE,
            [P.panel]: t === C.y0.PANEL
        },
        d = () => {
            l({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            x(D({}, t), {
                                sourceAnalyticsLocations: s,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: o
                            })
                        );
                });
        },
        f = null != o ? o.label() : R.NW.string(R.t.evw0o6),
        _ = (0, r.jsxs)('div', {
            className: a()(P.content, c),
            children: [
                (0, r.jsx)(u.oFk, {
                    size: 'xs',
                    className: P.addStatusIcon,
                    colorClass: P.addStatusIconColor
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: a()(P.addStatusPrompt, null != o && P.italicPrompt),
                    children: f
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(H, {
                profileType: t,
                children: _
            }),
            (0, r.jsx)(u.P3F, {
                className: a()(P.container, P.editable, c),
                'aria-label': R.NW.string(R.t['zrpF/f']),
                onClick: d,
                focusProps: { ringClassName: P.ring },
                children: (0, r.jsx)('div', {
                    className: a()(P.outer, c),
                    children: (0, r.jsxs)('span', {
                        className: a()(P.inner, P.clickable),
                        children: [
                            (0, r.jsx)(u.oFk, {
                                size: 'xs',
                                className: P.addStatusIcon,
                                colorClass: P.addStatusIconColor
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                className: a()(P.addStatusPrompt, null != o && P.italicPrompt),
                                children: f
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function Y(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: P.labelContent,
        children: [
            (0, r.jsx)(E.Z, {
                label: t,
                size: 'xxs'
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-xxs/semibold',
                color: 'text-muted',
                className: P.labelText,
                children: (0, m.Z)(t)
            })
        ]
    });
}
let K = i.forwardRef(function (e, t) {
    var n, o;
    let { emoji: _, text: p, profileType: m, animate: g, className: E, renderToolbar: b, onShowToolbar: y, placeholderText: O, label: S, hasEntered: T = !0 } = e,
        N = (0, I.yi)(),
        { trackUserProfileAction: A } = (0, v.KZ)(),
        w = {
            [P.biteSize]: m === C.y0.BITE_SIZE,
            [P.fullSize]: m === C.y0.FULL_SIZE,
            [P.panel]: m === C.y0.PANEL
        },
        D = (0, h.p)({ location: 'CustomStatusBubble' }),
        L = null != _ ? j : 0,
        x = null != S ? Z : 0,
        M = U + L + x,
        k = G + L + x,
        W = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(M),
        Q = i.useRef(k),
        X = null != _ && null == p,
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!0),
        [en, er] = i.useState(!X && T),
        ei = !X && T && J;
    i.useLayoutEffect(() => {
        if (($(!0), null == K.current || null == z.current || !ei)) return;
        let e = K.current.getBoundingClientRect().height,
            t = z.current.getBoundingClientRect().height;
        er(t > e), (q.current = e), (Q.current = t);
    }, [ei, p, _]);
    let eo = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [ea] = i.useState(() => new c.V7());
    i.useEffect(() => () => ea.stop(), [ea]),
        i.useEffect(() => {
            null == N || N.onInteractionPopoutTargetRefChange(W);
        }, [N]);
    let [es, el] = (0, u.q_F)(() => ({
            maxHeight: ''.concat(q.current, 'px'),
            config: {
                clamp: !0,
                duration: B
            }
        })),
        ec = (e) => {
            en &&
                (e
                    ? el({
                          maxHeight: ''.concat(Math.min(Q.current, k), 'px'),
                          delay: eo ? 0 : F,
                          config: {
                              clamp: !0,
                              duration: eo ? 0 : B
                          }
                      })
                    : el({
                          maxHeight: ''.concat(Math.min(q.current, M), 'px'),
                          delay: 0
                      }),
                eo ? et(!e) : ea.start(e ? F : V, () => et(!e)));
        },
        eu = null != S ? (0, r.jsx)(Y, { label: S }) : null,
        ed =
            null != _
                ? (0, r.jsx)(f.Z, {
                      emoji: _,
                      animate: g,
                      hideTooltip: !1,
                      tooltipDelay: C.vB,
                      className: P.statusEmoji
                  })
                : null,
        ef =
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: P.statusText,
                      children: p
                  })
                : null,
        e_ =
            void 0 === O || (null != _ && D)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(R.NW.string(R.t.EVV6ub), ': ').concat(O),
                      className: a()(P.statusText, D && P.italicPrompt),
                      children: null != O ? O : ''
                  }),
        ep = null == ef || '' === p ? e_ : ef,
        eh = (0, r.jsxs)('div', {
            ref: K,
            className: a()(P.content, w),
            children: [eu, ed, ep]
        }),
        em = (0, r.jsxs)('div', {
            ref: z,
            className: a()(P.content, P.unclamped, w),
            children: [eu, ed, ep]
        }),
        eg = (0, r.jsx)('div', {
            ref: t,
            className: a()(P.outer, w),
            children: (0, r.jsx)('span', {
                className: P.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: es,
                    className: a()(P.content, { [P.unclamped]: !ee }),
                    children: [eu, ed, ep]
                })
            })
        }),
        eE = (0, r.jsxs)(H, {
            profileType: m,
            className: P.withLabel,
            children: [eu, eh, em]
        });
    return null == y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  eE,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: P.ring,
                      children: (0, r.jsxs)('div', {
                          ref: W,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(P.container, w, E),
                          'aria-label': R.NW.formatToPlainString(R.t.UpF5QU, {
                              emoji: null != (n = null == _ ? void 0 : _.name) ? n : '',
                              status: p
                          }),
                          onMouseEnter: () => {
                              A({ action: 'HOVER_CUSTOM_STATUS' }), ec(!0);
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
                      ringClassName: P.ring,
                      children: (0, r.jsxs)('div', {
                          ref: W,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(P.container, w, E),
                          'aria-label': R.NW.formatToPlainString(R.t.UpF5QU, {
                              emoji: null != (o = null == _ ? void 0 : _.name) ? o : '',
                              status: p
                          }),
                          onFocus: () => {
                              y(!0), ec(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = W.current) ? void 0 : t.contains(e.relatedTarget)) || (y(!1), ec(!1));
                          },
                          onMouseEnter: () => {
                              A({ action: 'HOVER_CUSTOM_STATUS' }), y(!0), ec(!0);
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
function z(e) {
    var { emoji: t, text: n, onCloseProfile: o } = e,
        a = M(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        K,
        x(D({}, a), {
            emoji: t,
            text: n,
            className: P.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(A.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function q(e) {
    var { emoji: t, text: n, user: o, guildId: a, channelId: s, profileType: l } = e,
        c = M(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'profileType']);
    let { trackUserProfileAction: u } = (0, v.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, I.Xo)(),
        p = f === C.n_.STATUS && d === C.P.REACT,
        h = f === C.n_.STATUS && d === C.P.REPLY,
        m = p || h,
        g = i.useRef(null),
        E = i.useRef(t),
        y = i.useRef(n);
    i.useEffect(() => {
        f === C.n_.STATUS && ((E.current !== t || y.current !== n) && _(), (E.current = t), (y.current = n));
    }, [f, _, t, n]);
    let [O, A] = i.useState(!1),
        R = i.useCallback(
            (e) => {
                (e || !m) && A(e);
            },
            [m]
        ),
        w = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : b.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(S.Z, {
        user: o,
        guildId: a,
        channelId: s,
        profileType: l,
        sourceDetails: w(),
        sourceType: C.n_.STATUS,
        onAction: u,
        onClose: () => A(!1),
        children: () =>
            (0, r.jsx)(N.Z, {
                sourceType: C.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    K,
                    x(D({}, c), {
                        ref: g,
                        emoji: t,
                        text: n,
                        profileType: l,
                        className: m ? P.hoisted : void 0,
                        onShowToolbar: R,
                        renderToolbar: (e) =>
                            (0, r.jsx)(T.ZP, {
                                targetRef: g,
                                user: o,
                                sourceType: C.n_.STATUS,
                                isVisible: O && !m,
                                isExpandable: e,
                                onAction: u
                            })
                    })
                )
            })
    });
}
function Q(e) {
    var t,
        n,
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: c, placeholderText: u, prompt: d, disableEdit: f = !1 } = e,
        h = M(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'placeholderText', 'prompt', 'disableEdit']);
    let m = (0, g.Z)(o.id),
        { analyticsLocations: E } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        b = (0, l.e7)([y.default], () => y.default.getId() === o.id),
        v = b && !f,
        I = (0, O.T)({ location: i }),
        S = !b && !o.bot && I;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null;
        return (0, r.jsx)(p.Gt, {
            value: E,
            children: (0, r.jsx)(
                K,
                D(
                    {
                        emoji: e,
                        text: t,
                        placeholderText: u
                    },
                    h
                )
            )
        });
    }
    let T = null != (t = null == m ? void 0 : m.emoji) ? t : null,
        N = null != (n = null == m ? void 0 : m.state) ? n : null,
        A = null != N && '' !== N ? N : null;
    return null != T || null != A || v
        ? null == T && null == A
            ? (0, r.jsx)(p.Gt, {
                  value: E,
                  children: (0, r.jsx)(
                      W,
                      D(
                          {
                              onCloseProfile: a,
                              prompt: d
                          },
                          h
                      )
                  )
              })
            : S
              ? (0, r.jsx)(p.Gt, {
                    value: E,
                    children: (0, r.jsx)(
                        q,
                        D(
                            {
                                user: o,
                                emoji: T,
                                text: A
                            },
                            h
                        )
                    )
                })
              : v
                ? (0, r.jsx)(p.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          z,
                          D(
                              {
                                  emoji: T,
                                  text: A,
                                  onCloseProfile: a
                              },
                              h
                          )
                      )
                  })
                : (0, r.jsx)(p.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          K,
                          D(
                              {
                                  emoji: T,
                                  text: A
                              },
                              h
                          )
                      )
                  })
        : null;
}
