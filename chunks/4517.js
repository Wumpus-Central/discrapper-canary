n.d(t, { Z: () => Q }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(386230),
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
    S = n(510659),
    T = n(287954),
    A = n(810097),
    N = n(64621),
    C = n(913002),
    P = n(228168),
    R = n(388032),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let U = 1.25,
    G = 36,
    B = 144,
    F = 150,
    V = 150,
    Z = 300,
    H = 14;
function Y(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: a()(w.referenceContainer, n),
        children: (0, r.jsx)('div', {
            className: w.outer,
            children: (0, r.jsx)('span', {
                className: w.inner,
                children: t
            })
        })
    });
}
function W(e) {
    let { onCloseProfile: t, prompt: i } = e,
        { analyticsLocations: o } = (0, p.ZP)(),
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
                                sourceAnalyticsLocations: o,
                                location: 'UserProfileCustomStatusBubble',
                                prompt: i
                            })
                        );
                });
        },
        c = null != i ? i.label() : R.intl.string(R.t.evw0o6),
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
                    className: a()(w.addStatusPrompt, null != i && w.italicPrompt),
                    children: c
                })
            ]
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Y, { children: d }),
            (0, r.jsx)(u.tEY, {
                ringClassName: w.ring,
                children: (0, r.jsx)('div', {
                    className: a()(w.container, w.editable),
                    children: (0, r.jsx)(u.P3F, {
                        className: w.outer,
                        'aria-label': R.intl.string(R.t['zrpF/f']),
                        onClick: l,
                        focusProps: { ringClassName: w.ring },
                        children: (0, r.jsxs)('span', {
                            className: a()(w.inner, w.clickable),
                            children: [
                                (0, r.jsx)(u.oFk, {
                                    size: 'xs',
                                    className: w.addStatusIcon,
                                    colorClass: w.addStatusIconColor
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    className: a()(w.addStatusPrompt, null != i && w.italicPrompt),
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
let K = i.forwardRef(function (e, t) {
    var n, o;
    let { emoji: _, text: p, animate: m, className: g, renderToolbar: E, onShowToolbar: y, placeholderText: O, label: I, hasEntered: T = !0 } = e,
        A = (0, S.yi)(),
        { trackUserProfileAction: N } = (0, v.KZ)(),
        C = (0, h.p)({ location: 'CustomStatusBubble' }),
        D = null != _ ? U : 0,
        L = null != I ? H : 0,
        x = G + D + L,
        k = B + D + L,
        M = i.useRef(null),
        j = i.useRef(null),
        W = i.useRef(null),
        K = i.useRef(x),
        z = i.useRef(k),
        q = null != _ && null == p && null == I,
        [Q, X] = i.useState(!1),
        [J, $] = i.useState(!0),
        [ee, et] = i.useState(!q && T),
        en = T && Q,
        er = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [ei] = i.useState(() => new c.V7());
    i.useEffect(() => () => ei.stop(), [ei]),
        i.useEffect(() => {
            null == A || A.onInteractionPopoutTargetRefChange(M);
        }, [A]);
    let [eo, ea] = (0, u.q_F)(() => ({
        maxHeight: ''.concat(K.current, 'px'),
        config: {
            clamp: !0,
            duration: F
        }
    }));
    i.useLayoutEffect(() => {
        if ((X(!0), null == j.current || null == W.current || !en)) return;
        let e = j.current.getBoundingClientRect().height,
            t = W.current.getBoundingClientRect().height;
        et(t > e),
            (K.current = e),
            (z.current = t),
            ea({
                maxHeight: ''.concat(Math.min(J ? K.current : z.current, J ? x : k), 'px'),
                immediate: !0
            });
    }, [en, p, _, I, ea, J, x, k]);
    let es = (e) => {
            ee &&
                (e
                    ? ea({
                          maxHeight: ''.concat(Math.min(z.current, k), 'px'),
                          delay: er ? 0 : Z,
                          config: {
                              clamp: !0,
                              duration: er ? 0 : F
                          }
                      })
                    : ea({
                          maxHeight: ''.concat(Math.min(K.current, x), 'px'),
                          delay: 0
                      }),
                er ? $(!e) : ei.start(e ? Z : V, () => $(!e)));
        },
        el =
            null != I
                ? (0, r.jsx)(b.Z, {
                      label: I,
                      className: w.labelRow
                  })
                : null,
        ec =
            null != _
                ? (0, r.jsx)(f.Z, {
                      emoji: _,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: P.vB,
                      className: w.statusEmoji
                  })
                : null,
        eu =
            null != p
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      className: w.statusText,
                      children: p
                  })
                : null,
        ed =
            void 0 === O || (null != _ && C)
                ? null
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      'aria-label': ''.concat(R.intl.string(R.t.EVV6ub), ': ').concat(O),
                      className: a()(w.statusText, C && w.italicPrompt),
                      children: null != O ? O : ''
                  }),
        ef = null == eu || '' === p ? ed : eu,
        e_ = (0, r.jsxs)('div', {
            ref: j,
            className: w.content,
            children: [el, ec, ef]
        }),
        ep = (0, r.jsxs)('div', {
            ref: W,
            className: a()(w.content, w.unclamped),
            children: [el, ec, ef]
        }),
        eh = (0, r.jsx)('div', {
            ref: t,
            className: w.outer,
            children: (0, r.jsx)('span', {
                className: w.inner,
                children: (0, r.jsxs)(s.animated.div, {
                    style: eo,
                    className: a()(w.content, { [w.unclamped]: !J }),
                    children: [el, ec, ef]
                })
            })
        }),
        em = (0, r.jsxs)(Y, {
            className: null != el ? w.withLabel : void 0,
            children: [el, e_, ep]
        });
    return null == y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  em,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: w.ring,
                      children: (0, r.jsxs)('div', {
                          ref: M,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(w.container, g),
                          'aria-label': R.intl.formatToPlainString(R.t.UpF5QU, {
                              emoji: null != (n = null == _ ? void 0 : _.name) ? n : '',
                              status: p
                          }),
                          onMouseEnter: () => {
                              N({ action: 'HOVER_CUSTOM_STATUS' }), es(!0);
                          },
                          onMouseLeave: () => {
                              es(!1);
                          },
                          onFocus: () => es(!0),
                          onBlur: () => es(!1),
                          children: [eh, null == E ? void 0 : E(ee)]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  em,
                  (0, r.jsx)(u.tEY, {
                      ringClassName: w.ring,
                      children: (0, r.jsxs)('div', {
                          ref: M,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: a()(w.container, g),
                          'aria-label': R.intl.formatToPlainString(R.t.UpF5QU, {
                              emoji: null != (o = null == _ ? void 0 : _.name) ? o : '',
                              status: p
                          }),
                          onFocus: () => {
                              y(!0), es(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null == (t = M.current) ? void 0 : t.contains(e.relatedTarget)) || (y(!1), es(!1));
                          },
                          onMouseEnter: () => {
                              N({ action: 'HOVER_CUSTOM_STATUS' }), y(!0), es(!0);
                          },
                          onMouseLeave: () => {
                              y(!1), es(!1);
                          },
                          children: [eh, null == E ? void 0 : E(ee)]
                      })
                  })
              ]
          });
});
function z(e) {
    var { emoji: t, text: n, label: o, onCloseProfile: a } = e,
        s = M(e, ['emoji', 'text', 'label', 'onCloseProfile']);
    let [l, c] = i.useState(!1);
    return (0, r.jsx)(
        K,
        k(L({}, s), {
            emoji: t,
            text: n,
            label: o,
            className: w.editable,
            onShowToolbar: c,
            renderToolbar: (e) =>
                (0, r.jsx)(C.Z, {
                    isVisible: l,
                    isExpandable: e,
                    onCloseProfile: a
                })
        })
    );
}
function q(e) {
    var { emoji: t, text: n, label: o, user: a, guildId: s, channelId: l, themeType: c } = e,
        u = M(e, ['emoji', 'text', 'label', 'user', 'guildId', 'channelId', 'themeType']);
    let { trackUserProfileAction: d } = (0, v.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: p } = (0, S.Xo)(),
        h = _ === P.n_.STATUS && f === P.P.REACT,
        m = _ === P.n_.STATUS && f === P.P.REPLY,
        E = h || m,
        b = i.useRef(null),
        O = i.useRef(t),
        I = i.useRef(n);
    i.useEffect(() => {
        _ === P.n_.STATUS && ((O.current !== t || I.current !== n) && p(), (O.current = t), (I.current = n));
    }, [_, p, t, n]);
    let [C, R] = i.useState(!1),
        D = i.useCallback(
            (e) => {
                (e || !E) && R(e);
            },
            [E]
        ),
        x = (e) => (null == e ? null : null != e.id ? '`' + ':'.concat(e.name, ':') + '`' : y.ZP.translateSurrogatesToInlineEmoji(e.name)),
        j = (e, t) => (null == e ? t : ''.concat(e, ' ').concat(t)),
        U = () => {
            let e = x(t),
                r = null == n ? e : j(e, n);
            return null != o ? ''.concat((0, g.Z)(o), ':\n> ').concat(r) : r;
        };
    return (0, r.jsx)(T.Z, {
        user: a,
        guildId: s,
        channelId: l,
        themeType: c,
        sourceDetails: U(),
        sourceType: P.n_.STATUS,
        onAction: d,
        onClose: () => R(!1),
        children: () =>
            (0, r.jsx)(N.Z, {
                targetElementRef: b,
                sourceType: P.n_.STATUS,
                user: a,
                children: (0, r.jsx)(
                    K,
                    k(L({}, u), {
                        ref: b,
                        emoji: t,
                        text: n,
                        label: o,
                        themeType: c,
                        className: E ? w.hoisted : void 0,
                        onShowToolbar: D,
                        renderToolbar: (e) =>
                            (0, r.jsx)(A.ZP, {
                                targetRef: b,
                                user: a,
                                sourceType: P.n_.STATUS,
                                isVisible: C && !E,
                                isExpandable: e,
                                onAction: d
                            })
                    })
                )
            })
    });
}
function Q(e) {
    var t,
        n,
        { location: i, user: o, onCloseProfile: a, previewText: s, previewEmoji: c, previewLabel: u, placeholderText: d, prompt: f, disableToolbar: h = !1 } = e,
        g = M(e, ['location', 'user', 'onCloseProfile', 'previewText', 'previewEmoji', 'previewLabel', 'placeholderText', 'prompt', 'disableToolbar']);
    let b = (0, E.Z)(o.id),
        { analyticsLocations: y } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        v = (0, l.e7)([O.default], () => O.default.getId() === o.id),
        S = v && !h,
        T = (0, I.T)({ location: i }),
        A = !v && !o.bot && !h && T;
    if (null != s || null != c) {
        let e = null != c ? c : null,
            t = null != s && '' !== s ? s : null,
            n = null != u ? u : null;
        return (0, r.jsx)(p.Gt, {
            value: y,
            children: (0, r.jsx)(
                K,
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
        P = null != C && '' !== C ? C : null,
        R = null != b ? (0, m.Z)(b) : null;
    return null != N || null != P || S
        ? null == N && null == P
            ? (0, r.jsx)(p.Gt, {
                  value: y,
                  children: (0, r.jsx)(
                      W,
                      L(
                          {
                              onCloseProfile: a,
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
                        q,
                        L(
                            {
                                user: o,
                                emoji: N,
                                text: P,
                                label: R
                            },
                            g
                        )
                    )
                })
              : S
                ? (0, r.jsx)(p.Gt, {
                      value: y,
                      children: (0, r.jsx)(
                          z,
                          L(
                              {
                                  emoji: N,
                                  text: P,
                                  label: R,
                                  onCloseProfile: a
                              },
                              g
                          )
                      )
                  })
                : (0, r.jsx)(p.Gt, {
                      value: y,
                      children: (0, r.jsx)(
                          K,
                          L(
                              {
                                  emoji: N,
                                  text: P,
                                  label: R
                              },
                              g
                          )
                      )
                  })
        : null;
}
