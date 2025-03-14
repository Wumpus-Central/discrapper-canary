n.d(t, { Z: () => H }), n(47120);
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
    h = n(8454),
    m = n(633302),
    g = n(314897),
    E = n(785717),
    v = n(81570),
    b = n(510659),
    y = n(287954),
    O = n(810097),
    I = n(64621),
    S = n(913002),
    T = n(228168),
    N = n(388032),
    A = n(735405);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = 1.25,
    M = 36,
    k = 144,
    j = 150,
    U = 150,
    G = 300;
function B(e) {
    let { profileType: t, onCloseProfile: i, prompt: o } = e,
        { analyticsLocations: s } = (0, p.ZP)(),
        { trackUserProfileAction: l } = (0, E.KZ)(),
        c = {
            [A.biteSize]: t === T.y0.BITE_SIZE,
            [A.fullSize]: t === T.y0.FULL_SIZE,
            [A.panel]: t === T.y0.PANEL
        },
        d = () => {
            l({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            w(R({}, t), {
                                sourceAnalyticsLocations: s,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: o
                            })
                        );
                });
        },
        f = null != o ? o : N.NW.string(N.t.evw0o6);
    return (0, r.jsx)(u.P3F, {
        className: a()(A.container, A.editable, c),
        'aria-label': N.NW.string(N.t['zrpF/f']),
        onClick: d,
        focusProps: { ringClassName: A.ring },
        children: (0, r.jsx)('div', {
            className: a()(A.outer, c),
            children: (0, r.jsxs)('span', {
                className: a()(A.inner, A.clickable),
                children: [
                    (0, r.jsx)(u.oFk, {
                        size: 'xs',
                        className: A.addStatusIcon,
                        colorClass: A.addStatusIconColor
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        className: A.addStatusPrompt,
                        children: f
                    })
                ]
            })
        })
    });
}
function V(e) {
    var t, n;
    let { emoji: o, text: _, profileType: p, animate: h, className: m, renderToolbar: g, onShowToolbar: v, hasEntered: b = !0, placeholderText: y } = e,
        { trackUserProfileAction: O } = (0, E.KZ)(),
        I = {
            [A.biteSize]: p === T.y0.BITE_SIZE,
            [A.fullSize]: p === T.y0.FULL_SIZE,
            [A.panel]: p === T.y0.PANEL
        },
        S = null != o ? x : 0,
        C = M + S,
        R = k + S,
        P = i.useRef(null),
        w = i.useRef(null),
        D = i.useRef(null),
        L = i.useRef(C),
        B = i.useRef(R),
        V = null != o && null == _,
        [F, Z] = i.useState(!1),
        [H, W] = i.useState(!0),
        [Y, K] = i.useState(!V && b),
        z = !V && b && F;
    i.useLayoutEffect(() => {
        if ((Z(!0), null == w.current || null == D.current || !z)) return;
        let e = w.current.getBoundingClientRect().height,
            t = D.current.getBoundingClientRect().height;
        K(t > e), (L.current = e), (B.current = t);
    }, [z, _, o]);
    let q = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [Q] = i.useState(() => new c.V7());
    i.useEffect(() => () => Q.stop(), [Q]);
    let [X, J] = (0, u.q_F)(() => ({
            maxHeight: ''.concat(L.current, 'px'),
            config: {
                clamp: !0,
                duration: j
            }
        })),
        $ = (e) => {
            Y &&
                (e
                    ? J({
                          maxHeight: ''.concat(Math.min(B.current, R), 'px'),
                          delay: q ? 0 : G,
                          config: {
                              clamp: !0,
                              duration: q ? 0 : j
                          }
                      })
                    : J({
                          maxHeight: ''.concat(Math.min(L.current, C), 'px'),
                          delay: 0
                      }),
                q ? W(!e) : Q.start(e ? G : U, () => W(!e)));
        },
        ee =
            null != o
                ? (0, r.jsx)(f.Z, {
                      emoji: o,
                      animate: h,
                      hideTooltip: !1,
                      tooltipDelay: T.vB,
                      className: A.statusEmoji
                  })
                : null,
        et =
            null != _
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: A.statusText,
                      children: _
                  })
                : null,
        en =
            void 0 !== y
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      className: A.statusText,
                      children: null != y ? y : ''
                  })
                : null,
        er = null == et || '' === _ ? en : et,
        ei = (0, r.jsx)('div', {
            className: a()(A.referenceContainer, I),
            children: (0, r.jsx)('div', {
                className: a()(A.outer, I),
                children: (0, r.jsxs)('span', {
                    className: A.inner,
                    children: [
                        (0, r.jsxs)('div', {
                            ref: w,
                            className: a()(A.content, I),
                            children: [ee, er]
                        }),
                        (0, r.jsxs)('div', {
                            ref: D,
                            className: a()(A.content, A.unclamped, I),
                            children: [ee, er]
                        })
                    ]
                })
            })
        }),
        eo = (0, r.jsx)('div', {
            className: a()(A.outer, I),
            children: (0, r.jsx)('span', {
                className: A.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: X,
                    className: a()(A.content, { [A.unclamped]: !H }),
                    children: [ee, er]
                })
            })
        });
    return null == v
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  ei,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: A.ring,
                      children: (0, r.jsxs)('div', {
                          ref: P,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(A.container, I, m),
                          'aria-label': N.NW.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : '',
                              status: _
                          }),
                          onMouseEnter: () => {
                              O({ action: 'HOVER_CUSTOM_STATUS' }), $(!0);
                          },
                          onMouseLeave: () => {
                              $(!1);
                          },
                          onFocus: () => $(!0),
                          onBlur: () => $(!1),
                          children: [eo, null == g ? void 0 : g(Y)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  ei,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: A.ring,
                      children: (0, r.jsxs)('div', {
                          ref: P,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(A.container, I, m),
                          'aria-label': N.NW.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : '',
                              status: _
                          }),
                          onFocus: () => {
                              v(!0), $(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null === (t = P.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (v(!1), $(!1));
                          },
                          onMouseEnter: () => {
                              O({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), $(!0);
                          },
                          onMouseLeave: () => {
                              v(!1), $(!1);
                          },
                          children: [eo, null == g ? void 0 : g(Y)]
                      })
                  })
              ]
          });
}
function F(e) {
    var { emoji: t, text: n, onCloseProfile: o } = e,
        a = D(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        V,
        w(R({}, a), {
            emoji: t,
            text: n,
            className: A.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(S.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function Z(e) {
    var { emoji: t, text: n, user: o, guildId: a, channelId: s, profileType: l } = e,
        c = D(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'profileType']);
    let { trackUserProfileAction: u } = (0, E.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, b.Xo)(),
        p = f === T.n_.STATUS && d === T.P.REACT,
        h = f === T.n_.STATUS && d === T.P.REPLY,
        g = p || h,
        v = i.useRef(t),
        S = i.useRef(n);
    i.useEffect(() => {
        f === T.n_.STATUS && ((v.current !== t || S.current !== n) && _(), (v.current = t), (S.current = n));
    }, [f, _, t, n]);
    let [N, C] = i.useState(!1),
        P = i.useCallback(
            (e) => {
                (e || !g) && C(e);
            },
            [g]
        ),
        L = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : m.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(y.Z, {
        user: o,
        guildId: a,
        channelId: s,
        profileType: l,
        sourceDetails: L(),
        sourceType: T.n_.STATUS,
        onAction: u,
        onClose: () => C(!1),
        children: () =>
            (0, r.jsx)(I.Z, {
                sourceType: T.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    V,
                    w(R({}, c), {
                        emoji: t,
                        text: n,
                        profileType: l,
                        className: g ? A.hoisted : void 0,
                        onShowToolbar: P,
                        renderToolbar: (e) =>
                            (0, r.jsx)(O.ZP, {
                                user: o,
                                sourceType: T.n_.STATUS,
                                isVisible: N && !g,
                                isExpandable: e,
                                onAction: u
                            })
                    })
                )
            })
    });
}
function H(e) {
    var t,
        n,
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: c, placeholderText: u, prompt: d } = e,
        f = D(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'placeholderText', 'prompt']);
    let m = (0, l.e7)([g.default], () => g.default.getId() === o.id),
        E = (0, h.Z)(o.id),
        { analyticsLocations: b } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        y = (0, v.T)({ location: i }),
        O = !m && !o.bot && y;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null;
        return (0, r.jsx)(p.Gt, {
            value: b,
            children: (0, r.jsx)(
                V,
                R(
                    {
                        emoji: e,
                        text: t,
                        placeholderText: u
                    },
                    f
                )
            )
        });
    }
    let I = null !== (t = null == E ? void 0 : E.emoji) && void 0 !== t ? t : null,
        S = null !== (n = null == E ? void 0 : E.state) && void 0 !== n ? n : null,
        T = null != S && '' !== S ? S : null;
    return null != I || null != T || m
        ? null == I && null == T
            ? (0, r.jsx)(p.Gt, {
                  value: b,
                  children: (0, r.jsx)(
                      B,
                      R(
                          {
                              onCloseProfile: a,
                              prompt: d
                          },
                          f
                      )
                  )
              })
            : O
              ? (0, r.jsx)(p.Gt, {
                    value: b,
                    children: (0, r.jsx)(
                        Z,
                        R(
                            {
                                user: o,
                                emoji: I,
                                text: T
                            },
                            f
                        )
                    )
                })
              : m
                ? (0, r.jsx)(p.Gt, {
                      value: b,
                      children: (0, r.jsx)(
                          F,
                          R(
                              {
                                  emoji: I,
                                  text: T,
                                  onCloseProfile: a
                              },
                              f
                          )
                      )
                  })
                : (0, r.jsx)(p.Gt, {
                      value: b,
                      children: (0, r.jsx)(
                          V,
                          R(
                              {
                                  emoji: I,
                                  text: T
                              },
                              f
                          )
                      )
                  })
        : null;
}
