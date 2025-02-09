n.d(t, { Z: () => G }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(607070),
    f = n(584973),
    _ = n(100527),
    p = n(906732),
    h = n(8454),
    m = n(633302),
    g = n(314897),
    E = n(785717),
    v = n(456644),
    y = n(510659),
    I = n(287954),
    T = n(810097),
    b = n(64621),
    S = n(913002),
    A = n(228168),
    N = n(388032),
    C = n(232282);
let R = 1.25,
    O = 36,
    D = 144,
    L = 150,
    x = 150,
    w = 300;
function P(e) {
    let { profileType: t, onCloseProfile: r } = e,
        { analyticsLocations: a } = (0, p.ZP)(),
        { trackUserProfileAction: o } = (0, E.KZ)(),
        l = {
            [C.biteSize]: t === A.y0.BITE_SIZE,
            [C.fullSize]: t === A.y0.FULL_SIZE,
            [C.panel]: t === A.y0.PANEL
        },
        u = () => {
            o({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == r || r(),
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: a,
                            location: 'UserProfileCustomStatusBubble'
                        });
                });
        };
    return (0, i.jsx)(c.P3F, {
        className: s()(C.container, C.editable, l),
        'aria-label': N.intl.string(N.t['zrpF/f']),
        onClick: u,
        focusProps: { ringClassName: C.ring },
        children: (0, i.jsx)('div', {
            className: s()(C.outer, l),
            children: (0, i.jsxs)('span', {
                className: s()(C.inner, C.clickable),
                children: [
                    (0, i.jsx)(c.oFk, {
                        size: 'xs',
                        className: C.addStatusIcon,
                        colorClass: C.addStatusIconColor
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        className: C.addStatusPrompt,
                        children: N.intl.string(N.t.evw0o6)
                    })
                ]
            })
        })
    });
}
function M(e) {
    var t, n;
    let { emoji: a, text: _, profileType: p, animate: h, className: m, renderToolbar: g, onShowToolbar: v, hasEntered: y = !0 } = e,
        { trackUserProfileAction: I } = (0, E.KZ)(),
        T = {
            [C.biteSize]: p === A.y0.BITE_SIZE,
            [C.fullSize]: p === A.y0.FULL_SIZE,
            [C.panel]: p === A.y0.PANEL
        },
        b = null != a ? R : 0,
        S = O + b,
        P = D + b,
        M = r.useRef(null),
        k = r.useRef(null),
        U = r.useRef(null),
        G = r.useRef(S),
        B = r.useRef(P),
        Z = null != a && null == _,
        [F, V] = r.useState(!1),
        [j, H] = r.useState(!0),
        [Y, W] = r.useState(!Z && y),
        K = !Z && y && F;
    r.useLayoutEffect(() => {
        if ((V(!0), null == k.current || null == U.current || !K)) return;
        let e = k.current.getBoundingClientRect().height,
            t = U.current.getBoundingClientRect().height;
        W(t > e), (G.current = e), (B.current = t);
    }, [K]);
    let z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [q] = r.useState(() => new u.V7());
    r.useEffect(() => () => q.stop(), [q]);
    let [Q, X] = (0, c.q_F)(() => ({
            maxHeight: ''.concat(G.current, 'px'),
            config: {
                clamp: !0,
                duration: L
            }
        })),
        J = (e) => {
            Y &&
                (e
                    ? X({
                          maxHeight: ''.concat(Math.min(B.current, P), 'px'),
                          delay: z ? 0 : w,
                          config: {
                              clamp: !0,
                              duration: z ? 0 : L
                          }
                      })
                    : X({
                          maxHeight: ''.concat(Math.min(G.current, S), 'px'),
                          delay: 0
                      }),
                z ? H(!e) : q.start(e ? w : x, () => H(!e)));
        },
        $ =
            null != a
                ? (0, i.jsx)(f.Z, {
                      emoji: a,
                      animate: h,
                      hideTooltip: !1,
                      tooltipDelay: A.vB,
                      className: C.statusEmoji
                  })
                : null,
        ee =
            null != _
                ? (0, i.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      className: C.statusText,
                      children: _
                  })
                : null,
        et = (0, i.jsx)('div', {
            className: s()(C.referenceContainer, T),
            children: (0, i.jsx)('div', {
                className: s()(C.outer, T),
                children: (0, i.jsxs)('span', {
                    className: C.inner,
                    children: [
                        (0, i.jsxs)('div', {
                            ref: k,
                            className: s()(C.content, T),
                            children: [$, ee]
                        }),
                        (0, i.jsxs)('div', {
                            ref: U,
                            className: s()(C.content, C.unclamped, T),
                            children: [$, ee]
                        })
                    ]
                })
            })
        }),
        en = (0, i.jsx)('div', {
            className: s()(C.outer, T),
            children: (0, i.jsx)('span', {
                className: C.inner,
                children: (0, i.jsxs)(o.animated.div, {
                    style: Q,
                    className: s()(C.content, { [C.unclamped]: !j }),
                    children: [$, ee]
                })
            })
        });
    return null == v
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  et,
                  (0, i.jsx)(c.tEY, {
                      ringClassName: C.ring,
                      children: (0, i.jsxs)('div', {
                          ref: M,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: s()(C.container, T, m),
                          'aria-label': N.intl.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : '',
                              status: _
                          }),
                          onMouseEnter: () => {
                              I({ action: 'HOVER_CUSTOM_STATUS' }), J(!0);
                          },
                          onMouseLeave: () => {
                              J(!1);
                          },
                          onFocus: () => J(!0),
                          onBlur: () => J(!1),
                          children: [en, null == g ? void 0 : g(Y)]
                      })
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  et,
                  (0, i.jsx)(c.tEY, {
                      ringClassName: C.ring,
                      children: (0, i.jsxs)('div', {
                          ref: M,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: s()(C.container, T, m),
                          'aria-label': N.intl.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : '',
                              status: _
                          }),
                          onFocus: () => {
                              v(!0), J(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null === (t = M.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (v(!1), J(!1));
                          },
                          onMouseEnter: () => {
                              I({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), J(!0);
                          },
                          onMouseLeave: () => {
                              v(!1), J(!1);
                          },
                          children: [en, null == g ? void 0 : g(Y)]
                      })
                  })
              ]
          });
}
function k(e) {
    let { emoji: t, text: n, onCloseProfile: a, ...s } = e,
        [o, l] = r.useState(!1);
    return (0, i.jsx)(M, {
        ...s,
        emoji: t,
        text: n,
        className: C.editable,
        onShowToolbar: l,
        renderToolbar: (e) =>
            (0, i.jsx)(S.Z, {
                isVisible: o,
                isExpandable: e,
                onCloseProfile: a
            })
    });
}
function U(e) {
    let { emoji: t, text: n, user: a, guildId: s, channelId: o, profileType: l, ...u } = e,
        { trackUserProfileAction: c } = (0, E.KZ)(),
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, y.Xo)(),
        p = f === A.n_.STATUS && d === A.P.REACT,
        h = f === A.n_.STATUS && d === A.P.REPLY,
        g = p || h,
        v = r.useRef(t),
        S = r.useRef(n);
    r.useEffect(() => {
        f === A.n_.STATUS && ((v.current !== t || S.current !== n) && _(), (v.current = t), (S.current = n));
    }, [f, _, t, n]);
    let [N, R] = r.useState(!1),
        O = r.useCallback(
            (e) => {
                (e || !g) && R(e);
            },
            [g]
        ),
        D = () => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : m.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        };
    return (0, i.jsx)(I.Z, {
        user: a,
        guildId: s,
        channelId: o,
        profileType: l,
        sourceDetails: D(),
        sourceType: A.n_.STATUS,
        onAction: c,
        onClose: () => R(!1),
        children: () =>
            (0, i.jsx)(b.Z, {
                sourceType: A.n_.STATUS,
                user: a,
                children: (0, i.jsx)(M, {
                    ...u,
                    emoji: t,
                    text: n,
                    profileType: l,
                    className: g ? C.hoisted : void 0,
                    onShowToolbar: O,
                    renderToolbar: (e) =>
                        (0, i.jsx)(T.ZP, {
                            user: a,
                            sourceType: A.n_.STATUS,
                            isVisible: N && !g,
                            isExpandable: e,
                            onAction: c
                        })
                })
            })
    });
}
function G(e) {
    var t, n;
    let { location: r, user: a, onCloseProfile: s, ...o } = e,
        u = (0, l.e7)([g.default], () => g.default.getId() === a.id),
        c = (0, h.Z)(a.id),
        { analyticsLocations: d } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { allProfileReactReplyEnabled: f } = (0, v.i)({ location: r }),
        m = !u && !a.bot && f,
        E = null !== (t = null == c ? void 0 : c.emoji) && void 0 !== t ? t : null,
        y = null !== (n = null == c ? void 0 : c.state) && void 0 !== n ? n : null,
        I = null != y && '' !== y ? y : null;
    return null != E || null != I || u
        ? null == E && null == I
            ? (0, i.jsx)(p.Gt, {
                  value: d,
                  children: (0, i.jsx)(P, {
                      onCloseProfile: s,
                      ...o
                  })
              })
            : m
              ? (0, i.jsx)(p.Gt, {
                    value: d,
                    children: (0, i.jsx)(U, {
                        user: a,
                        emoji: E,
                        text: I,
                        ...o
                    })
                })
              : u
                ? (0, i.jsx)(p.Gt, {
                      value: d,
                      children: (0, i.jsx)(k, {
                          emoji: E,
                          text: I,
                          onCloseProfile: s,
                          ...o
                      })
                  })
                : (0, i.jsx)(p.Gt, {
                      value: d,
                      children: (0, i.jsx)(M, {
                          emoji: E,
                          text: I,
                          ...o
                      })
                  })
        : null;
}
