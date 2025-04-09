n.d(t, { Z: () => J }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    E = n(19391),
    b = n(8454),
    y = n(600243),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let G = 1.25,
    B = 36,
    V = 144,
    F = 150,
    Z = 150,
    H = 300,
    W = 14;
function Y(e) {
    let { profileType: t, children: n, className: i } = e,
        o = {
            [D.biteSize]: t === P.y0.BITE_SIZE,
            [D.fullSize]: t === P.y0.FULL_SIZE,
            [D.panel]: t === P.y0.PANEL
        };
    return (0, r.jsx)('div', {
        className: a()(D.referenceContainer, o, i),
        children: (0, r.jsx)('div', {
            className: a()(D.outer, o),
            children: (0, r.jsx)('span', {
                className: D.inner,
                children: n
            })
        })
    });
}
function K(e) {
    let { profileType: t, onCloseProfile: i, prompt: o } = e,
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
                                prompt: o
                            })
                        );
                });
        },
        p = u
            ? (0, r.jsxs)('div', {
                  className: D.labelIconsRow,
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
        g = null != o ? o.label() : w.NW.string(w.t.evw0o6),
        E = (0, r.jsxs)('div', {
            className: a()(D.content, f, null != p && D.withLabel),
            children: [
                p,
                (0, r.jsx)(d.oFk, {
                    size: 'xs',
                    className: D.addStatusIcon,
                    colorClass: D.addStatusIconColor
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    className: a()(D.addStatusPrompt, null != o && D.italicPrompt),
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
                className: a()(D.container, D.editable, f),
                'aria-label': w.NW.string(w.t['zrpF/f']),
                onClick: _,
                focusProps: { ringClassName: D.ring },
                children: (0, r.jsx)('div', {
                    className: a()(D.outer, f),
                    children: (0, r.jsxs)('span', {
                        className: a()(D.inner, D.clickable),
                        children: [
                            p,
                            (0, r.jsx)(d.oFk, {
                                size: 'xs',
                                className: D.addStatusIcon,
                                colorClass: D.addStatusIconColor
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                className: a()(D.addStatusPrompt, null != o && D.italicPrompt),
                                children: g
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function z(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: D.labelContent,
        children: [
            (0, r.jsx)(y.Z, {
                label: t,
                size: 'xxs'
            }),
            (0, r.jsx)(d.Text, {
                variant: 'text-xxs/semibold',
                color: 'text-muted',
                className: D.labelText,
                children: (0, E.Z)(t)
            })
        ]
    });
}
let q = i.forwardRef(function (e, t) {
    var n, o;
    let { emoji: l, text: p, profileType: h, animate: m, className: E, renderToolbar: b, onShowToolbar: y, placeholderText: v, label: O, hasEntered: S = !0 } = e,
        N = (0, T.yi)(),
        { trackUserProfileAction: A } = (0, I.KZ)(),
        C = {
            [D.biteSize]: h === P.y0.BITE_SIZE,
            [D.fullSize]: h === P.y0.FULL_SIZE,
            [D.panel]: h === P.y0.PANEL
        },
        R = (0, g.p)({ location: 'CustomStatusBubble' }),
        L = null != l ? G : 0,
        x = null != O ? W : 0,
        M = B + L + x,
        k = V + L + x,
        j = i.useRef(null),
        U = i.useRef(null),
        K = i.useRef(null),
        q = i.useRef(M),
        Q = i.useRef(k),
        X = null != l && null == p,
        [J, $] = i.useState(!1),
        [ee, et] = i.useState(!0),
        [en, er] = i.useState(!X && S),
        ei = !X && S && J;
    i.useLayoutEffect(() => {
        if (($(!0), null == U.current || null == K.current || !ei)) return;
        let e = U.current.getBoundingClientRect().height,
            t = K.current.getBoundingClientRect().height;
        er(t > e), (q.current = e), (Q.current = t);
    }, [ei, p, l]);
    let eo = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        [ea] = i.useState(() => new u.V7());
    i.useEffect(() => () => ea.stop(), [ea]),
        i.useEffect(() => {
            null == N || N.onInteractionPopoutTargetRefChange(j);
        }, [N]);
    let [es, el] = (0, d.q_F)(() => ({
            maxHeight: ''.concat(q.current, 'px'),
            config: {
                clamp: !0,
                duration: F
            }
        })),
        ec = (e) => {
            en &&
                (e
                    ? el({
                          maxHeight: ''.concat(Math.min(Q.current, k), 'px'),
                          delay: eo ? 0 : H,
                          config: {
                              clamp: !0,
                              duration: eo ? 0 : F
                          }
                      })
                    : el({
                          maxHeight: ''.concat(Math.min(q.current, M), 'px'),
                          delay: 0
                      }),
                eo ? et(!e) : ea.start(e ? H : Z, () => et(!e)));
        },
        eu = null != O ? (0, r.jsx)(z, { label: O }) : null,
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
            void 0 === v || (null != l && R)
                ? null
                : (0, r.jsx)(d.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(w.NW.string(w.t.EVV6ub), ': ').concat(v),
                      className: a()(D.statusText, R && D.italicPrompt),
                      children: null != v ? v : ''
                  }),
        ep = null == ef || '' === p ? e_ : ef,
        eh = (0, r.jsxs)('div', {
            ref: U,
            className: a()(D.content, C),
            children: [eu, ed, ep]
        }),
        em = (0, r.jsxs)('div', {
            ref: K,
            className: a()(D.content, D.unclamped, C),
            children: [eu, ed, ep]
        }),
        eg = (0, r.jsx)('div', {
            ref: t,
            className: a()(D.outer, C),
            children: (0, r.jsx)('span', {
                className: D.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: es,
                    className: a()(D.content, { [D.unclamped]: !ee }),
                    children: [eu, ed, ep]
                })
            })
        }),
        eE = (0, r.jsxs)(Y, {
            profileType: h,
            className: D.withLabel,
            children: [eu, eh, em]
        });
    return null == y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  eE,
                  (0, r.jsx)(d.tEY, {
                      ringClassName: D.ring,
                      children: (0, r.jsxs)('div', {
                          ref: j,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(D.container, C, E),
                          'aria-label': w.NW.formatToPlainString(w.t.UpF5QU, {
                              emoji: null != (n = null == l ? void 0 : l.name) ? n : '',
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
                  (0, r.jsx)(d.tEY, {
                      ringClassName: D.ring,
                      children: (0, r.jsxs)('div', {
                          ref: j,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(D.container, C, E),
                          'aria-label': w.NW.formatToPlainString(w.t.UpF5QU, {
                              emoji: null != (o = null == l ? void 0 : l.name) ? o : '',
                              status: p
                          }),
                          onFocus: () => {
                              y(!0), ec(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = j.current) ? void 0 : t.contains(e.relatedTarget)) || (y(!1), ec(!1));
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
function Q(e) {
    var { emoji: t, text: n, onCloseProfile: o } = e,
        a = j(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        q,
        k(x({}, a), {
            emoji: t,
            text: n,
            className: D.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(R.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function X(e) {
    var { emoji: t, text: n, user: o, guildId: a, channelId: s, profileType: l } = e,
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
        user: o,
        guildId: a,
        channelId: s,
        profileType: l,
        sourceDetails: R(),
        sourceType: P.n_.STATUS,
        onAction: u,
        onClose: () => O(!1),
        children: () =>
            (0, r.jsx)(C.Z, {
                sourceType: P.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    q,
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
                                user: o,
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
function J(e) {
    var t,
        n,
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: l, placeholderText: u, prompt: d, disableEdit: f = !1 } = e,
        _ = j(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'placeholderText', 'prompt', 'disableEdit']);
    let m = (0, b.Z)(o.id),
        { analyticsLocations: g } = (0, h.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        E = (0, c.e7)([O.default], () => O.default.getId() === o.id),
        y = E && !f,
        v = (0, S.T)({ location: i }),
        I = !E && !o.bot && v;
    if (null != s || null != l) {
        let e = null != l ? l : null,
            t = null != s && '' !== s ? s : null;
        return (0, r.jsx)(h.Gt, {
            value: g,
            children: (0, r.jsx)(
                q,
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
                              onCloseProfile: a,
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
                        X,
                        x(
                            {
                                user: o,
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
                          Q,
                          x(
                              {
                                  emoji: T,
                                  text: A,
                                  onCloseProfile: a
                              },
                              _
                          )
                      )
                  })
                : (0, r.jsx)(h.Gt, {
                      value: g,
                      children: (0, r.jsx)(
                          q,
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
