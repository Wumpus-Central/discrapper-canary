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
    p = n(100527),
    _ = n(906732),
    h = n(8454),
    m = n(633302),
    g = n(314897),
    E = n(785717),
    v = n(456644),
    b = n(510659),
    y = n(287954),
    O = n(810097),
    S = n(64621),
    I = n(913002),
    T = n(228168),
    N = n(388032),
    A = n(819811);
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
let L = 1.25,
    M = 36,
    k = 144,
    j = 150,
    U = 150,
    G = 300;
function B(e) {
    let { profileType: t, onCloseProfile: i } = e,
        { analyticsLocations: o } = (0, _.ZP)(),
        { trackUserProfileAction: s } = (0, E.KZ)(),
        l = {
            [A.biteSize]: t === T.y0.BITE_SIZE,
            [A.fullSize]: t === T.y0.FULL_SIZE,
            [A.panel]: t === T.y0.PANEL
        },
        c = () => {
            s({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            w(R({}, t), {
                                sourceAnalyticsLocations: o,
                                location: 'UserProfileCustomStatusBubble'
                            })
                        );
                });
        };
    return (0, r.jsx)(u.P3F, {
        className: a()(A.container, A.editable, l),
        'aria-label': N.NW.string(N.t['zrpF/f']),
        onClick: c,
        focusProps: { ringClassName: A.ring },
        children: (0, r.jsx)('div', {
            className: a()(A.outer, l),
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
                        children: N.NW.string(N.t.evw0o6)
                    })
                ]
            })
        })
    });
}
function Z(e) {
    var t, n;
    let { emoji: o, text: p, profileType: _, animate: h, className: m, renderToolbar: g, onShowToolbar: v, hasEntered: b = !0, placeholderText: y } = e,
        { trackUserProfileAction: O } = (0, E.KZ)(),
        S = {
            [A.biteSize]: _ === T.y0.BITE_SIZE,
            [A.fullSize]: _ === T.y0.FULL_SIZE,
            [A.panel]: _ === T.y0.PANEL
        },
        I = null != o ? L : 0,
        C = M + I,
        R = k + I,
        P = i.useRef(null),
        w = i.useRef(null),
        D = i.useRef(null),
        x = i.useRef(C),
        B = i.useRef(R),
        Z = null != o && null == p,
        [F, V] = i.useState(!1),
        [H, W] = i.useState(!0),
        [Y, K] = i.useState(!Z && b),
        z = !Z && b && F;
    i.useLayoutEffect(() => {
        if ((V(!0), null == w.current || null == D.current || !z)) return;
        let e = w.current.getBoundingClientRect().height,
            t = D.current.getBoundingClientRect().height;
        K(t > e), (x.current = e), (B.current = t);
    }, [z, p, o]);
    let q = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [Q] = i.useState(() => new c.V7());
    i.useEffect(() => () => Q.stop(), [Q]);
    let [X, J] = (0, u.q_F)(() => ({
            maxHeight: ''.concat(x.current, 'px'),
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
                          maxHeight: ''.concat(Math.min(x.current, C), 'px'),
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
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: A.statusText,
                      children: p
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
        er = null == et || '' === p ? en : et,
        ei = (0, r.jsx)('div', {
            className: a()(A.referenceContainer, S),
            children: (0, r.jsx)('div', {
                className: a()(A.outer, S),
                children: (0, r.jsxs)('span', {
                    className: A.inner,
                    children: [
                        (0, r.jsxs)('div', {
                            ref: w,
                            className: a()(A.content, S),
                            children: [ee, er]
                        }),
                        (0, r.jsxs)('div', {
                            ref: D,
                            className: a()(A.content, A.unclamped, S),
                            children: [ee, er]
                        })
                    ]
                })
            })
        }),
        eo = (0, r.jsx)('div', {
            className: a()(A.outer, S),
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
                          className: a()(A.container, S, m),
                          'aria-label': N.NW.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : '',
                              status: p
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
                          className: a()(A.container, S, m),
                          'aria-label': N.NW.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : '',
                              status: p
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
        Z,
        w(R({}, a), {
            emoji: t,
            text: n,
            className: A.editable,
            onShowToolbar: l,
            renderToolbar: (e) =>
                (0, r.jsx)(I.Z, {
                    isVisible: s,
                    isExpandable: e,
                    onCloseProfile: o
                })
        })
    );
}
function V(e) {
    var { emoji: t, text: n, user: o, guildId: a, channelId: s, profileType: l } = e,
        c = D(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'profileType']);
    let { trackUserProfileAction: u } = (0, E.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: p } = (0, b.Xo)(),
        _ = f === T.n_.STATUS && d === T.P.REACT,
        h = f === T.n_.STATUS && d === T.P.REPLY,
        g = _ || h,
        v = i.useRef(t),
        I = i.useRef(n);
    i.useEffect(() => {
        f === T.n_.STATUS && ((v.current !== t || I.current !== n) && p(), (v.current = t), (I.current = n));
    }, [f, p, t, n]);
    let [N, C] = i.useState(!1),
        P = i.useCallback(
            (e) => {
                (e || !g) && C(e);
            },
            [g]
        ),
        x = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : m.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(y.Z, {
        user: o,
        guildId: a,
        channelId: s,
        profileType: l,
        sourceDetails: x(),
        sourceType: T.n_.STATUS,
        onAction: u,
        onClose: () => C(!1),
        children: () =>
            (0, r.jsx)(S.Z, {
                sourceType: T.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    Z,
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
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: c, placeholderText: u } = e,
        d = D(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'placeholderText']);
    let f = (0, l.e7)([g.default], () => g.default.getId() === o.id),
        m = (0, h.Z)(o.id),
        { analyticsLocations: E } = (0, _.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        { allProfileReactReplyEnabled: b } = (0, v.i)({ location: i }),
        y = !f && !o.bot && b;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null;
        return (0, r.jsx)(_.Gt, {
            value: E,
            children: (0, r.jsx)(
                Z,
                R(
                    {
                        emoji: e,
                        text: t,
                        placeholderText: u
                    },
                    d
                )
            )
        });
    }
    let O = null !== (t = null == m ? void 0 : m.emoji) && void 0 !== t ? t : null,
        S = null !== (n = null == m ? void 0 : m.state) && void 0 !== n ? n : null,
        I = null != S && '' !== S ? S : null;
    return null != O || null != I || f
        ? null == O && null == I
            ? (0, r.jsx)(_.Gt, {
                  value: E,
                  children: (0, r.jsx)(B, R({ onCloseProfile: a }, d))
              })
            : y
              ? (0, r.jsx)(_.Gt, {
                    value: E,
                    children: (0, r.jsx)(
                        V,
                        R(
                            {
                                user: o,
                                emoji: O,
                                text: I
                            },
                            d
                        )
                    )
                })
              : f
                ? (0, r.jsx)(_.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          F,
                          R(
                              {
                                  emoji: O,
                                  text: I,
                                  onCloseProfile: a
                              },
                              d
                          )
                      )
                  })
                : (0, r.jsx)(_.Gt, {
                      value: E,
                      children: (0, r.jsx)(
                          Z,
                          R(
                              {
                                  emoji: O,
                                  text: I
                              },
                              d
                          )
                      )
                  })
        : null;
}
