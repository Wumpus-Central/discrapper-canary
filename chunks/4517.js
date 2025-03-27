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
    v = n(81570),
    y = n(510659),
    O = n(287954),
    I = n(810097),
    S = n(64621),
    T = n(913002),
    A = n(228168),
    N = n(388032),
    C = n(735405);
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
            [C.biteSize]: t === A.y0.BITE_SIZE,
            [C.fullSize]: t === A.y0.FULL_SIZE,
            [C.panel]: t === A.y0.PANEL
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
            [C.biteSize]: t === A.y0.BITE_SIZE,
            [C.fullSize]: t === A.y0.FULL_SIZE,
            [C.panel]: t === A.y0.PANEL
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
        f = null != o ? o.label() : N.NW.string(N.t.evw0o6),
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
                'aria-label': N.NW.string(N.t['zrpF/f']),
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
function Z(e) {
    var t, n;
    let { emoji: o, text: _, profileType: p, animate: m, className: g, renderToolbar: E, onShowToolbar: v, hasEntered: y = !0, placeholderText: O } = e,
        { trackUserProfileAction: I } = (0, b.KZ)(),
        S = {
            [C.biteSize]: p === A.y0.BITE_SIZE,
            [C.fullSize]: p === A.y0.FULL_SIZE,
            [C.panel]: p === A.y0.PANEL
        },
        T = (0, h.p)({ location: 'CustomStatusBubble' }),
        R = null != o ? M : 0,
        P = k + R,
        w = j + R,
        D = i.useRef(null),
        L = i.useRef(null),
        x = i.useRef(null),
        V = i.useRef(P),
        Z = i.useRef(w),
        H = null != o && null == _,
        [W, Y] = i.useState(!1),
        [K, z] = i.useState(!0),
        [q, Q] = i.useState(!H && y),
        X = !H && y && W;
    i.useLayoutEffect(() => {
        if ((Y(!0), null == L.current || null == x.current || !X)) return;
        let e = L.current.getBoundingClientRect().height,
            t = x.current.getBoundingClientRect().height;
        Q(t > e), (V.current = e), (Z.current = t);
    }, [X, _, o]);
    let J = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [$] = i.useState(() => new c.V7());
    i.useEffect(() => () => $.stop(), [$]);
    let [ee, et] = (0, u.q_F)(() => ({
            maxHeight: ''.concat(V.current, 'px'),
            config: {
                clamp: !0,
                duration: U
            }
        })),
        en = (e) => {
            q &&
                (e
                    ? et({
                          maxHeight: ''.concat(Math.min(Z.current, w), 'px'),
                          delay: J ? 0 : B,
                          config: {
                              clamp: !0,
                              duration: J ? 0 : U
                          }
                      })
                    : et({
                          maxHeight: ''.concat(Math.min(V.current, P), 'px'),
                          delay: 0
                      }),
                J ? z(!e) : $.start(e ? B : G, () => z(!e)));
        },
        er =
            null != o
                ? (0, r.jsx)(f.Z, {
                      emoji: o,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: A.vB,
                      className: C.statusEmoji
                  })
                : null,
        ei =
            null != _
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: C.statusText,
                      children: _
                  })
                : null,
        eo =
            void 0 === O || (null != o && T)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(N.NW.string(N.t.EVV6ub), ': ').concat(O),
                      className: a()(C.statusText, T && C.italicPrompt),
                      children: null != O ? O : ''
                  }),
        ea = null == ei || '' === _ ? eo : ei,
        es = (0, r.jsxs)('div', {
            ref: L,
            className: a()(C.content, S),
            children: [er, ea]
        }),
        el = (0, r.jsxs)('div', {
            ref: x,
            className: a()(C.content, C.unclamped, S),
            children: [er, ea]
        }),
        ec = (0, r.jsx)('div', {
            className: a()(C.outer, S),
            children: (0, r.jsx)('span', {
                className: C.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: ee,
                    className: a()(C.content, { [C.unclamped]: !K }),
                    children: [er, ea]
                })
            })
        }),
        eu = (0, r.jsxs)(F, {
            profileType: p,
            children: [es, el]
        });
    return null == v
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  eu,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: C.ring,
                      children: (0, r.jsxs)('div', {
                          ref: D,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(C.container, S, g),
                          'aria-label': N.NW.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : '',
                              status: _
                          }),
                          onMouseEnter: () => {
                              I({ action: 'HOVER_CUSTOM_STATUS' }), en(!0);
                          },
                          onMouseLeave: () => {
                              en(!1);
                          },
                          onFocus: () => en(!0),
                          onBlur: () => en(!1),
                          children: [ec, null == E ? void 0 : E(q)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  eu,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: C.ring,
                      children: (0, r.jsxs)('div', {
                          ref: D,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(C.container, S, g),
                          'aria-label': N.NW.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : '',
                              status: _
                          }),
                          onFocus: () => {
                              v(!0), en(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null === (t = D.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (v(!1), en(!1));
                          },
                          onMouseEnter: () => {
                              I({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), en(!0);
                          },
                          onMouseLeave: () => {
                              v(!1), en(!1);
                          },
                          children: [ec, null == E ? void 0 : E(q)]
                      })
                  })
              ]
          });
}
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
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, y.Xo)(),
        p = f === A.n_.STATUS && d === A.P.REACT,
        h = f === A.n_.STATUS && d === A.P.REPLY,
        m = p || h,
        E = i.useRef(t),
        v = i.useRef(n);
    i.useEffect(() => {
        f === A.n_.STATUS && ((E.current !== t || v.current !== n) && _(), (E.current = t), (v.current = n));
    }, [f, _, t, n]);
    let [T, N] = i.useState(!1),
        R = i.useCallback(
            (e) => {
                (e || !m) && N(e);
            },
            [m]
        ),
        w = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : g.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, r.jsx)(O.Z, {
        user: o,
        guildId: a,
        channelId: s,
        profileType: l,
        sourceDetails: w(),
        sourceType: A.n_.STATUS,
        onAction: u,
        onClose: () => N(!1),
        children: () =>
            (0, r.jsx)(S.Z, {
                sourceType: A.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    Z,
                    D(P({}, c), {
                        emoji: t,
                        text: n,
                        profileType: l,
                        className: m ? C.hoisted : void 0,
                        onShowToolbar: R,
                        renderToolbar: (e) =>
                            (0, r.jsx)(I.ZP, {
                                user: o,
                                sourceType: A.n_.STATUS,
                                isVisible: T && !m,
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
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: c, placeholderText: u, prompt: d } = e,
        f = L(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'placeholderText', 'prompt']);
    let h = (0, l.e7)([E.default], () => E.default.getId() === o.id),
        g = (0, m.Z)(o.id),
        { analyticsLocations: b } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        y = (0, v.T)({ location: i }),
        O = !h && !o.bot && y;
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
                    f
                )
            )
        });
    }
    let I = null !== (t = null == g ? void 0 : g.emoji) && void 0 !== t ? t : null,
        S = null !== (n = null == g ? void 0 : g.state) && void 0 !== n ? n : null,
        T = null != S && '' !== S ? S : null;
    return null != I || null != T || h
        ? null == I && null == T
            ? (0, r.jsx)(p.Gt, {
                  value: b,
                  children: (0, r.jsx)(
                      V,
                      P(
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
                        W,
                        P(
                            {
                                user: o,
                                emoji: I,
                                text: T
                            },
                            f
                        )
                    )
                })
              : h
                ? (0, r.jsx)(p.Gt, {
                      value: b,
                      children: (0, r.jsx)(
                          H,
                          P(
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
                          Z,
                          P(
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
