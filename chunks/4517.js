n.d(t, { Z: () => W }), n(47120);
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
    N = n(228168),
    A = n(388032),
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
        f = null != o ? o : A.NW.string(A.t.evw0o6);
    return (0, r.jsx)(u.P3F, {
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
    });
}
function V(e) {
    var t, n;
    let { emoji: o, text: _, profileType: p, animate: m, className: g, renderToolbar: E, onShowToolbar: v, hasEntered: y = !0, placeholderText: O } = e,
        { trackUserProfileAction: I } = (0, b.KZ)(),
        S = {
            [C.biteSize]: p === N.y0.BITE_SIZE,
            [C.fullSize]: p === N.y0.FULL_SIZE,
            [C.panel]: p === N.y0.PANEL
        },
        T = (0, h.p)({ location: 'CustomStatusBubble' }),
        R = null != o ? M : 0,
        P = k + R,
        w = j + R,
        D = i.useRef(null),
        L = i.useRef(null),
        x = i.useRef(null),
        F = i.useRef(P),
        V = i.useRef(w),
        Z = null != o && null == _,
        [H, W] = i.useState(!1),
        [Y, K] = i.useState(!0),
        [z, q] = i.useState(!Z && y),
        Q = !Z && y && H;
    i.useLayoutEffect(() => {
        if ((W(!0), null == L.current || null == x.current || !Q)) return;
        let e = L.current.getBoundingClientRect().height,
            t = x.current.getBoundingClientRect().height;
        q(t > e), (F.current = e), (V.current = t);
    }, [Q, _, o]);
    let X = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [J] = i.useState(() => new c.V7());
    i.useEffect(() => () => J.stop(), [J]);
    let [$, ee] = (0, u.q_F)(() => ({
            maxHeight: ''.concat(F.current, 'px'),
            config: {
                clamp: !0,
                duration: U
            }
        })),
        et = (e) => {
            z &&
                (e
                    ? ee({
                          maxHeight: ''.concat(Math.min(V.current, w), 'px'),
                          delay: X ? 0 : B,
                          config: {
                              clamp: !0,
                              duration: X ? 0 : U
                          }
                      })
                    : ee({
                          maxHeight: ''.concat(Math.min(F.current, P), 'px'),
                          delay: 0
                      }),
                X ? K(!e) : J.start(e ? B : G, () => K(!e)));
        },
        en =
            null != o
                ? (0, r.jsx)(f.Z, {
                      emoji: o,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: N.vB,
                      className: C.statusEmoji
                  })
                : null,
        er =
            null != _
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: C.statusText,
                      children: _
                  })
                : null,
        ei =
            void 0 !== O
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      className: a()(C.statusText, T && C.italicPrompt),
                      children: null != O ? O : ''
                  })
                : null,
        eo = null == er || '' === _ ? ei : er,
        ea = (0, r.jsx)('div', {
            className: a()(C.referenceContainer, S),
            children: (0, r.jsx)('div', {
                className: a()(C.outer, S),
                children: (0, r.jsxs)('span', {
                    className: C.inner,
                    children: [
                        (0, r.jsxs)('div', {
                            ref: L,
                            className: a()(C.content, S),
                            children: [en, eo]
                        }),
                        (0, r.jsxs)('div', {
                            ref: x,
                            className: a()(C.content, C.unclamped, S),
                            children: [en, eo]
                        })
                    ]
                })
            })
        }),
        es = (0, r.jsx)('div', {
            className: a()(C.outer, S),
            children: (0, r.jsx)('span', {
                className: C.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: $,
                    className: a()(C.content, { [C.unclamped]: !Y }),
                    children: [en, eo]
                })
            })
        });
    return null == v
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  ea,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: C.ring,
                      children: (0, r.jsxs)('div', {
                          ref: D,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(C.container, S, g),
                          'aria-label': A.NW.formatToPlainString(A.t.UpF5QU, {
                              emoji: null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : '',
                              status: _
                          }),
                          onMouseEnter: () => {
                              I({ action: 'HOVER_CUSTOM_STATUS' }), et(!0);
                          },
                          onMouseLeave: () => {
                              et(!1);
                          },
                          onFocus: () => et(!0),
                          onBlur: () => et(!1),
                          children: [es, null == E ? void 0 : E(z)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  ea,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: C.ring,
                      children: (0, r.jsxs)('div', {
                          ref: D,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(C.container, S, g),
                          'aria-label': A.NW.formatToPlainString(A.t.UpF5QU, {
                              emoji: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : '',
                              status: _
                          }),
                          onFocus: () => {
                              v(!0), et(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null === (t = D.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (v(!1), et(!1));
                          },
                          onMouseEnter: () => {
                              I({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), et(!0);
                          },
                          onMouseLeave: () => {
                              v(!1), et(!1);
                          },
                          children: [es, null == E ? void 0 : E(z)]
                      })
                  })
              ]
          });
}
function Z(e) {
    var { emoji: t, text: n, onCloseProfile: o } = e,
        a = L(e, ['emoji', 'text', 'onCloseProfile']);
    let [s, l] = i.useState(!1);
    return (0, r.jsx)(
        V,
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
function H(e) {
    var { emoji: t, text: n, user: o, guildId: a, channelId: s, profileType: l } = e,
        c = L(e, ['emoji', 'text', 'user', 'guildId', 'channelId', 'profileType']);
    let { trackUserProfileAction: u } = (0, b.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, y.Xo)(),
        p = f === N.n_.STATUS && d === N.P.REACT,
        h = f === N.n_.STATUS && d === N.P.REPLY,
        m = p || h,
        E = i.useRef(t),
        v = i.useRef(n);
    i.useEffect(() => {
        f === N.n_.STATUS && ((E.current !== t || v.current !== n) && _(), (E.current = t), (v.current = n));
    }, [f, _, t, n]);
    let [T, A] = i.useState(!1),
        R = i.useCallback(
            (e) => {
                (e || !m) && A(e);
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
        sourceType: N.n_.STATUS,
        onAction: u,
        onClose: () => A(!1),
        children: () =>
            (0, r.jsx)(S.Z, {
                sourceType: N.n_.STATUS,
                user: o,
                children: (0, r.jsx)(
                    V,
                    D(P({}, c), {
                        emoji: t,
                        text: n,
                        profileType: l,
                        className: m ? C.hoisted : void 0,
                        onShowToolbar: R,
                        renderToolbar: (e) =>
                            (0, r.jsx)(I.ZP, {
                                user: o,
                                sourceType: N.n_.STATUS,
                                isVisible: T && !m,
                                isExpandable: e,
                                onAction: u
                            })
                    })
                )
            })
    });
}
function W(e) {
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
                V,
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
                      F,
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
                        H,
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
                          Z,
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
                          V,
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
