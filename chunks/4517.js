n.d(t, { Z: () => Y }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(442837),
    c = n(846519),
    u = n(481060),
    d = n(607070),
    f = n(584973),
    _ = n(100527),
    p = n(906732),
    h = n(368326),
    m = n(8454),
    g = n(633302),
    E = n(314897),
    b = n(785717),
    y = n(81570),
    v = n(510659),
    O = n(287954),
    I = n(810097),
    S = n(64621),
    T = n(913002),
    N = n(228168),
    A = n(388032),
    C = n(484822);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let M = 1.25,
    k = 36,
    j = 144,
    U = 150,
    G = 150,
    B = 300;
function F(e) {
    let { profileType: t, children: n } = e,
        i = {
            [C.biteSize]: t === N.y0.BITE_SIZE,
            [C.fullSize]: t === N.y0.FULL_SIZE,
            [C.panel]: t === N.y0.PANEL
        };
    return (0, r.jsx)('div', {
        className: a()(C.referenceContainer, i),
        children: (0, r.jsx)('div', {
            className: a()(C.outer, i),
            children: (0, r.jsx)('span', {
                className: C.inner,
                children: n
            })
        })
    });
}
function V(e) {
    let { profileType: t, onCloseProfile: i, prompt: o } = e,
        { analyticsLocations: s } = (0, p.ZP)(),
        { trackUserProfileAction: l } = (0, b.KZ)(),
        c = {
            [C.biteSize]: t === N.y0.BITE_SIZE,
            [C.fullSize]: t === N.y0.FULL_SIZE,
            [C.panel]: t === N.y0.PANEL
        },
        d = () => {
            l({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            D(P({}, t), {
                                sourceAnalyticsLocations: s,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: o
                            })
                        );
                });
        },
        f = null != o ? o.label() : A.NW.string(A.t.evw0o6),
        _ = (0, r.jsxs)('div', {
            className: a()(C.content, c),
            children: [
                (0, r.jsx)(u.oFk, {
                    size: 'xs',
                    className: C.addStatusIcon,
                    colorClass: C.addStatusIconColor
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: a()(C.addStatusPrompt, null != o && C.italicPrompt),
                    children: f
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(F, {
                profileType: t,
                children: _
            }),
            (0, r.jsx)(u.P3F, {
                className: a()(C.container, C.editable, c),
                'aria-label': A.NW.string(A.t['zrpF/f']),
                onClick: d,
                focusProps: { ringClassName: C.ring },
                children: (0, r.jsx)('div', {
                    className: a()(C.outer, c),
                    children: (0, r.jsxs)('span', {
                        className: a()(C.inner, C.clickable),
                        children: [
                            (0, r.jsx)(u.oFk, {
                                size: 'xs',
                                className: C.addStatusIcon,
                                colorClass: C.addStatusIconColor
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                className: a()(C.addStatusPrompt, null != o && C.italicPrompt),
                                children: f
                            })
                        ]
                    })
                })
            })
        ]
    });
}
let Z = i.forwardRef(function (e, t) {
    var n, o;
    let { emoji: _, text: p, profileType: m, animate: g, className: E, renderToolbar: y, onShowToolbar: O, hasEntered: I = !0, placeholderText: S } = e,
        T = (0, v.yi)(),
        { trackUserProfileAction: R } = (0, b.KZ)(),
        P = {
            [C.biteSize]: m === N.y0.BITE_SIZE,
            [C.fullSize]: m === N.y0.FULL_SIZE,
            [C.panel]: m === N.y0.PANEL
        },
        w = (0, h.p)({ location: 'CustomStatusBubble' }),
        D = null != _ ? M : 0,
        L = k + D,
        x = j + D,
        V = i.useRef(null),
        Z = i.useRef(null),
        H = i.useRef(null),
        W = i.useRef(L),
        Y = i.useRef(x),
        K = null != _ && null == p,
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(!0),
        [J, $] = i.useState(!K && I),
        ee = !K && I && z;
    i.useLayoutEffect(() => {
        if ((q(!0), null == Z.current || null == H.current || !ee)) return;
        let e = Z.current.getBoundingClientRect().height,
            t = H.current.getBoundingClientRect().height;
        $(t > e), (W.current = e), (Y.current = t);
    }, [ee, p, _]);
    let et = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [en] = i.useState(() => new c.V7());
    i.useEffect(() => () => en.stop(), [en]),
        i.useEffect(() => {
            null == T || T.onInteractionPopoutTargetRefChange(V);
        }, [T]);
    let [er, ei] = (0, u.q_F)(() => ({
            maxHeight: ''.concat(W.current, 'px'),
            config: {
                clamp: !0,
                duration: U
            }
        })),
        eo = (e) => {
            J &&
                (e
                    ? ei({
                          maxHeight: ''.concat(Math.min(Y.current, x), 'px'),
                          delay: et ? 0 : B,
                          config: {
                              clamp: !0,
                              duration: et ? 0 : U
                          }
                      })
                    : ei({
                          maxHeight: ''.concat(Math.min(W.current, L), 'px'),
                          delay: 0
                      }),
                et ? X(!e) : en.start(e ? B : G, () => X(!e)));
        },
        ea =
            null != _
                ? (0, r.jsx)(f.Z, {
                      emoji: _,
                      animate: g,
                      hideTooltip: !1,
                      tooltipDelay: N.vB,
                      className: C.statusEmoji
                  })
                : null,
        es =
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: C.statusText,
                      children: p
                  })
                : null,
        el =
            void 0 === S || (null != _ && w)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(A.NW.string(A.t.EVV6ub), ': ').concat(S),
                      className: a()(C.statusText, w && C.italicPrompt),
                      children: null != S ? S : ''
                  }),
        ec = null == es || '' === p ? el : es,
        eu = (0, r.jsxs)('div', {
            ref: Z,
            className: a()(C.content, P),
            children: [ea, ec]
        }),
        ed = (0, r.jsxs)('div', {
            ref: H,
            className: a()(C.content, C.unclamped, P),
            children: [ea, ec]
        }),
        ef = (0, r.jsx)('div', {
            ref: t,
            className: a()(C.outer, P),
            children: (0, r.jsx)('span', {
                className: C.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: er,
                    className: a()(C.content, { [C.unclamped]: !Q }),
                    children: [ea, ec]
                })
            })
        }),
        e_ = (0, r.jsxs)(F, {
            profileType: m,
            children: [eu, ed]
        });
    return null == O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  e_,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: C.ring,
                      children: (0, r.jsxs)('div', {
                          ref: V,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(C.container, P, E),
                          'aria-label': A.NW.formatToPlainString(A.t.UpF5QU, {
                              emoji: null != (n = null == _ ? void 0 : _.name) ? n : '',
                              status: p
                          }),
                          onMouseEnter: () => {
                              R({ action: 'HOVER_CUSTOM_STATUS' }), eo(!0);
                          },
                          onMouseLeave: () => {
                              eo(!1);
                          },
                          onFocus: () => eo(!0),
                          onBlur: () => eo(!1),
                          children: [ef, null == y ? void 0 : y(J)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  e_,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: C.ring,
                      children: (0, r.jsxs)('div', {
                          ref: V,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(C.container, P, E),
                          'aria-label': A.NW.formatToPlainString(A.t.UpF5QU, {
                              emoji: null != (o = null == _ ? void 0 : _.name) ? o : '',
                              status: p
                          }),
                          onFocus: () => {
                              O(!0), eo(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = V.current) ? void 0 : t.contains(e.relatedTarget)) || (O(!1), eo(!1));
                          },
                          onMouseEnter: () => {
                              R({ action: 'HOVER_CUSTOM_STATUS' }), O(!0), eo(!0);
                          },
                          onMouseLeave: () => {
                              O(!1), eo(!1);
                          },
                          children: [ef, null == y ? void 0 : y(J)]
                      })
                  })
              ]
          });
});
function H(e) {
    var { emoji: t, text: n, onCloseProfile: o } = e,
        a = L(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        Z,
        D(P({}, a), {
            emoji: t,
            text: n,
            className: C.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(T.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function W(e) {
    var { emoji: t, text: n, user: o, guildId: a, channelId: s, profileType: l } = e,
        c = L(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'profileType']);
    let { trackUserProfileAction: u } = (0, b.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, v.Xo)(),
        p = f === N.n_.STATUS && d === N.P.REACT,
        h = f === N.n_.STATUS && d === N.P.REPLY,
        m = p || h,
        E = i.useRef(null),
        y = i.useRef(t),
        T = i.useRef(n);
    i.useEffect(() => {
        f === N.n_.STATUS && ((y.current !== t || T.current !== n) && _(), (y.current = t), (T.current = n));
    }, [f, _, t, n]);
    let [A, R] = i.useState(!1),
        w = i.useCallback(
            (e) => {
                (e || !m) && R(e);
            },
            [m]
        ),
        x = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : g.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(O.Z, {
        user: o,
        guildId: a,
        channelId: s,
        profileType: l,
        sourceDetails: x(),
        sourceType: N.n_.STATUS,
        onAction: u,
        onClose: () => R(!1),
        children: () =>
            (0, r.jsx)(S.Z, {
                sourceType: N.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    Z,
                    D(P({}, c), {
                        ref: E,
                        emoji: t,
                        text: n,
                        profileType: l,
                        className: m ? C.hoisted : void 0,
                        onShowToolbar: w,
                        renderToolbar: (e) =>
                            (0, r.jsx)(I.ZP, {
                                targetRef: E,
                                user: o,
                                sourceType: N.n_.STATUS,
                                isVisible: A && !m,
                                isExpandable: e,
                                onAction: u
                            })
                    })
                )
            })
    });
}
function Y(e) {
    var t,
        n,
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: c, placeholderText: u, prompt: d, disableEdit: f = !1 } = e,
        h = L(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'placeholderText', 'prompt', 'disableEdit']);
    let g = (0, m.Z)(o.id),
        { analyticsLocations: b } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        v = (0, l.e7)([E.default], () => E.default.getId() === o.id),
        O = v && !f,
        I = (0, y.T)({ location: i }),
        S = !v && !o.bot && I;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null;
        return (0, r.jsx)(p.Gt, {
            value: b,
            children: (0, r.jsx)(
                Z,
                P(
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
    let T = null != (t = null == g ? void 0 : g.emoji) ? t : null,
        N = null != (n = null == g ? void 0 : g.state) ? n : null,
        A = null != N && '' !== N ? N : null;
    return null != T || null != A || O
        ? null == T && null == A
            ? (0, r.jsx)(p.Gt, {
                  value: b,
                  children: (0, r.jsx)(
                      V,
                      P(
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
                    value: b,
                    children: (0, r.jsx)(
                        W,
                        P(
                            {
                                user: o,
                                emoji: T,
                                text: A
                            },
                            h
                        )
                    )
                })
              : O
                ? (0, r.jsx)(p.Gt, {
                      value: b,
                      children: (0, r.jsx)(
                          H,
                          P(
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
                      value: b,
                      children: (0, r.jsx)(
                          Z,
                          P(
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
