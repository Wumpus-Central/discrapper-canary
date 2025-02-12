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
    C = n(953100);
let R = 1.25,
    O = 36,
    D = 144,
    L = 150,
    x = 150,
    P = 300;
function w(e) {
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
    let { emoji: a, text: _, profileType: p, animate: h, className: m, renderToolbar: g, onShowToolbar: v, hasEntered: y = !0, placeholderText: I } = e,
        { trackUserProfileAction: T } = (0, E.KZ)(),
        b = {
            [C.biteSize]: p === A.y0.BITE_SIZE,
            [C.fullSize]: p === A.y0.FULL_SIZE,
            [C.panel]: p === A.y0.PANEL
        },
        S = null != a ? R : 0,
        w = O + S,
        M = D + S,
        k = r.useRef(null),
        U = r.useRef(null),
        G = r.useRef(null),
        B = r.useRef(w),
        Z = r.useRef(M),
        F = null != a && null == _,
        [V, j] = r.useState(!1),
        [H, Y] = r.useState(!0),
        [W, K] = r.useState(!F && y),
        z = !F && y && V;
    r.useLayoutEffect(() => {
        if ((j(!0), null == U.current || null == G.current || !z)) return;
        let e = U.current.getBoundingClientRect().height,
            t = G.current.getBoundingClientRect().height;
        K(t > e), (B.current = e), (Z.current = t);
    }, [z]);
    let q = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [Q] = r.useState(() => new u.V7());
    r.useEffect(() => () => Q.stop(), [Q]);
    let [X, J] = (0, c.q_F)(() => ({
            maxHeight: ''.concat(B.current, 'px'),
            config: {
                clamp: !0,
                duration: L
            }
        })),
        $ = (e) => {
            W &&
                (e
                    ? J({
                          maxHeight: ''.concat(Math.min(Z.current, M), 'px'),
                          delay: q ? 0 : P,
                          config: {
                              clamp: !0,
                              duration: q ? 0 : L
                          }
                      })
                    : J({
                          maxHeight: ''.concat(Math.min(B.current, w), 'px'),
                          delay: 0
                      }),
                q ? Y(!e) : Q.start(e ? P : x, () => Y(!e)));
        },
        ee =
            null != a
                ? (0, i.jsx)(f.Z, {
                      emoji: a,
                      animate: h,
                      hideTooltip: !1,
                      tooltipDelay: A.vB,
                      className: C.statusEmoji
                  })
                : null,
        et =
            null != _
                ? (0, i.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      className: C.statusText,
                      children: _
                  })
                : null,
        en =
            void 0 !== I
                ? (0, i.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      className: C.statusText,
                      children: null != I ? I : ''
                  })
                : null,
        ei = null == et || '' === _ ? en : et,
        er = (0, i.jsx)('div', {
            className: s()(C.referenceContainer, b),
            children: (0, i.jsx)('div', {
                className: s()(C.outer, b),
                children: (0, i.jsxs)('span', {
                    className: C.inner,
                    children: [
                        (0, i.jsxs)('div', {
                            ref: U,
                            className: s()(C.content, b),
                            children: [ee, ei]
                        }),
                        (0, i.jsxs)('div', {
                            ref: G,
                            className: s()(C.content, C.unclamped, b),
                            children: [ee, ei]
                        })
                    ]
                })
            })
        }),
        ea = (0, i.jsx)('div', {
            className: s()(C.outer, b),
            children: (0, i.jsx)('span', {
                className: C.inner,
                children: (0, i.jsxs)(o.animated.div, {
                    style: X,
                    className: s()(C.content, { [C.unclamped]: !H }),
                    children: [ee, ei]
                })
            })
        });
    return null == v
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  er,
                  (0, i.jsx)(c.tEY, {
                      ringClassName: C.ring,
                      children: (0, i.jsxs)('div', {
                          ref: k,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: s()(C.container, b, m),
                          'aria-label': N.intl.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : '',
                              status: _
                          }),
                          onMouseEnter: () => {
                              T({ action: 'HOVER_CUSTOM_STATUS' }), $(!0);
                          },
                          onMouseLeave: () => {
                              $(!1);
                          },
                          onFocus: () => $(!0),
                          onBlur: () => $(!1),
                          children: [ea, null == g ? void 0 : g(W)]
                      })
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  er,
                  (0, i.jsx)(c.tEY, {
                      ringClassName: C.ring,
                      children: (0, i.jsxs)('div', {
                          ref: k,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: s()(C.container, b, m),
                          'aria-label': N.intl.formatToPlainString(N.t.UpF5QU, {
                              emoji: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : '',
                              status: _
                          }),
                          onFocus: () => {
                              v(!0), $(!0);
                          },
                          onBlur: (e) => {
                              var t;
                              (null === (t = k.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (v(!1), $(!1));
                          },
                          onMouseEnter: () => {
                              T({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), $(!0);
                          },
                          onMouseLeave: () => {
                              v(!1), $(!1);
                          },
                          children: [ea, null == g ? void 0 : g(W)]
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
    let { location: r, user: a, onCloseProfile: s, previewText: o, previewEmoji: u, placeholderText: c, ...d } = e,
        f = (0, l.e7)([g.default], () => g.default.getId() === a.id),
        m = (0, h.Z)(a.id),
        { analyticsLocations: E } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { allProfileReactReplyEnabled: y } = (0, v.i)({ location: r }),
        I = !f && !a.bot && y,
        T = null !== (t = null == m ? void 0 : m.emoji) && void 0 !== t ? t : null,
        b = null !== (n = null == m ? void 0 : m.state) && void 0 !== n ? n : null,
        S = null != b && '' !== b ? b : null;
    if (null != o || null != u) {
        let e = null != u ? u : null,
            t = null != o ? o : null;
        return (0, i.jsx)(p.Gt, {
            value: E,
            children: (0, i.jsx)(M, {
                emoji: e,
                text: t,
                placeholderText: c,
                ...d
            })
        });
    }
    return null != T || null != S || f
        ? null == T && null == S
            ? (0, i.jsx)(p.Gt, {
                  value: E,
                  children: (0, i.jsx)(w, {
                      onCloseProfile: s,
                      ...d
                  })
              })
            : I
              ? (0, i.jsx)(p.Gt, {
                    value: E,
                    children: (0, i.jsx)(U, {
                        user: a,
                        emoji: T,
                        text: S,
                        ...d
                    })
                })
              : f
                ? (0, i.jsx)(p.Gt, {
                      value: E,
                      children: (0, i.jsx)(k, {
                          emoji: T,
                          text: S,
                          onCloseProfile: s,
                          ...d
                      })
                  })
                : (0, i.jsx)(p.Gt, {
                      value: E,
                      children: (0, i.jsx)(M, {
                          emoji: T,
                          text: S,
                          ...d
                      })
                  })
        : null;
}
