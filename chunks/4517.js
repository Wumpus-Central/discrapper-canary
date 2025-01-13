r.d(n, {
    Z: function () {
        return Z;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(208404),
    c = r(442837),
    d = r(846519),
    f = r(481060),
    _ = r(788307),
    h = r(607070),
    p = r(100527),
    m = r(906732),
    g = r(8454),
    E = r(633302),
    v = r(314897),
    I = r(785717),
    T = r(456644),
    b = r(510659),
    y = r(287954),
    S = r(810097),
    A = r(64621),
    N = r(913002),
    C = r(228168),
    R = r(388032),
    O = r(759951);
let D = 18,
    L = 1.25,
    x = 36,
    w = 144,
    P = 150,
    M = 150,
    k = 300;
function U(e) {
    let { profileType: n, onCloseProfile: i } = e,
        { analyticsLocations: s } = (0, m.ZP)(),
        { trackUserProfileAction: o } = (0, I.KZ)(),
        u = {
            [O.biteSize]: n === C.y0.BITE_SIZE,
            [O.fullSize]: n === C.y0.FULL_SIZE,
            [O.panel]: n === C.y0.PANEL
        },
        c = () => {
            o({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await r.e('51714').then(r.bind(r, 211065));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            sourceAnalyticsLocations: s
                        });
                });
        };
    return (0, a.jsx)(f.Clickable, {
        className: l()(O.container, O.editable, u),
        'aria-label': R.intl.string(R.t['zrpF/f']),
        onClick: c,
        focusProps: { ringClassName: O.ring },
        children: (0, a.jsx)('div', {
            className: l()(O.outer, u),
            children: (0, a.jsxs)('span', {
                className: l()(O.inner, O.clickable),
                children: [
                    (0, a.jsx)(f.CirclePlusIcon, {
                        size: 'xs',
                        className: O.addStatusIcon,
                        colorClass: O.addStatusIconColor
                    }),
                    (0, a.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        className: O.addStatusPrompt,
                        children: R.intl.string(R.t.evw0o6)
                    })
                ]
            })
        })
    });
}
function B(e) {
    var n, r;
    let { emoji: i, text: o, profileType: p, animate: m, className: g, renderToolbar: E, onShowToolbar: v, hasEntered: T = !0 } = e,
        { trackUserProfileAction: b } = (0, I.KZ)(),
        y = {
            [O.biteSize]: p === C.y0.BITE_SIZE,
            [O.fullSize]: p === C.y0.FULL_SIZE,
            [O.panel]: p === C.y0.PANEL
        },
        S = null != i ? L : 0,
        A = x + S,
        N = w + S,
        D = s.useRef(null),
        U = s.useRef(null),
        B = s.useRef(null),
        G = s.useRef(A),
        F = s.useRef(N),
        Z = null != i && null == o,
        [V, j] = s.useState(!1),
        [H, Y] = s.useState(!0),
        [W, K] = s.useState(!Z && T),
        z = !Z && T && V;
    s.useLayoutEffect(() => {
        if ((j(!0), null == U.current || null == B.current || !z)) return;
        let e = U.current.getBoundingClientRect().height,
            n = B.current.getBoundingClientRect().height;
        K(n > e), (G.current = e), (F.current = n);
    }, [z]);
    let q = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [Q] = s.useState(() => new d.V7());
    s.useEffect(() => () => Q.stop(), [Q]);
    let [X, J] = (0, f.useSpring)(() => ({
            maxHeight: ''.concat(G.current, 'px'),
            config: {
                clamp: !0,
                duration: P
            }
        })),
        $ = (e) => {
            if (!!W)
                e
                    ? J({
                          maxHeight: ''.concat(Math.min(F.current, N), 'px'),
                          delay: q ? 0 : k,
                          config: {
                              clamp: !0,
                              duration: q ? 0 : P
                          }
                      })
                    : J({
                          maxHeight: ''.concat(Math.min(G.current, A), 'px'),
                          delay: 0
                      }),
                    q ? Y(!e) : Q.start(e ? k : M, () => Y(!e));
        },
        ee =
            null != i
                ? (0, a.jsx)(_.Iv, {
                      emoji: i,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: C.vB,
                      className: O.statusEmoji
                  })
                : null,
        et =
            null != o
                ? (0, a.jsx)(f.Text, {
                      variant: 'text-sm/normal',
                      className: O.statusText,
                      children: o
                  })
                : null,
        en = (0, a.jsx)('div', {
            className: l()(O.referenceContainer, y),
            children: (0, a.jsx)('div', {
                className: l()(O.outer, y),
                children: (0, a.jsxs)('span', {
                    className: O.inner,
                    children: [
                        (0, a.jsxs)('div', {
                            ref: U,
                            className: l()(O.content, y),
                            children: [ee, et]
                        }),
                        (0, a.jsxs)('div', {
                            ref: B,
                            className: l()(O.content, O.unclamped, y),
                            children: [ee, et]
                        })
                    ]
                })
            })
        }),
        er = (0, a.jsx)('div', {
            className: l()(O.outer, y),
            children: (0, a.jsx)('span', {
                className: O.inner,
                children: (0, a.jsxs)(u.animated.div, {
                    style: X,
                    className: l()(O.content, { [O.unclamped]: !H }),
                    children: [ee, et]
                })
            })
        });
    return null == v
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  en,
                  (0, a.jsx)(f.FocusRing, {
                      ringClassName: O.ring,
                      children: (0, a.jsxs)('div', {
                          ref: D,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: l()(O.container, y, g),
                          'aria-label': R.intl.formatToPlainString(R.t.UpF5QU, {
                              emoji: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : '',
                              status: o
                          }),
                          onMouseEnter: () => b({ action: 'HOVER_CUSTOM_STATUS' }),
                          children: [er, null == E ? void 0 : E(W)]
                      })
                  })
              ]
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  en,
                  (0, a.jsx)(f.FocusRing, {
                      ringClassName: O.ring,
                      children: (0, a.jsxs)('div', {
                          ref: D,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: l()(O.container, y, g),
                          'aria-label': R.intl.formatToPlainString(R.t.UpF5QU, {
                              emoji: null !== (r = null == i ? void 0 : i.name) && void 0 !== r ? r : '',
                              status: o
                          }),
                          onFocus: () => {
                              v(!0), $(!0);
                          },
                          onBlur: (e) => {
                              var n;
                              !(null === (n = D.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && (v(!1), $(!1));
                          },
                          onMouseEnter: () => {
                              b({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), $(!0);
                          },
                          onMouseLeave: () => {
                              v(!1), $(!1);
                          },
                          children: [er, null == E ? void 0 : E(W)]
                      })
                  })
              ]
          });
}
function G(e) {
    let { emoji: n, text: r, onCloseProfile: i, ...o } = e,
        [l, u] = s.useState(!1);
    return (0, a.jsx)(B, {
        ...o,
        emoji: n,
        text: r,
        className: O.editable,
        onShowToolbar: u,
        renderToolbar: (e) =>
            (0, a.jsx)(N.Z, {
                isVisible: l,
                isExpandable: e,
                onCloseProfile: i
            })
    });
}
function F(e) {
    let { emoji: n, text: r, user: i, guildId: o, channelId: l, profileType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, I.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: h } = (0, b.Xo)(),
        p = _ === C.n_.STATUS && f === C.P.REACT,
        m = _ === C.n_.STATUS && f === C.P.REPLY,
        g = p || m,
        v = s.useRef(n),
        T = s.useRef(r);
    s.useEffect(() => {
        if (_ === C.n_.STATUS) (v.current !== n || T.current !== r) && h(), (v.current = n), (T.current = r);
    }, [_, h, n, r]);
    let [N, R] = s.useState(!1),
        D = s.useCallback(
            (e) => {
                if (!!e || !g) R(e);
            },
            [g]
        ),
        L = () => {
            if (null == n) return r;
            let e = null != n.id ? '`' + ':'.concat(n.name, ':') + '`' : E.ZP.translateSurrogatesToInlineEmoji(n.name);
            return null == r ? e : ''.concat(e, ' ').concat(r);
        };
    return (0, a.jsx)(y.Z, {
        user: i,
        guildId: o,
        channelId: l,
        profileType: u,
        sourceDetails: L(),
        sourceType: C.n_.STATUS,
        onAction: d,
        onClose: () => R(!1),
        children: () =>
            (0, a.jsx)(A.Z, {
                sourceType: C.n_.STATUS,
                user: i,
                children: (0, a.jsx)(B, {
                    ...c,
                    emoji: n,
                    text: r,
                    profileType: u,
                    className: g ? O.hoisted : void 0,
                    onShowToolbar: D,
                    renderToolbar: (e) =>
                        (0, a.jsx)(S.ZP, {
                            user: i,
                            sourceType: C.n_.STATUS,
                            isVisible: N && !g,
                            isExpandable: e,
                            onAction: d
                        })
                })
            })
    });
}
function Z(e) {
    var n, r;
    let { location: i, user: s, onCloseProfile: o, ...l } = e,
        u = (0, c.e7)([v.default], () => v.default.getId() === s.id),
        d = (0, g.Z)(s.id),
        { analyticsLocations: f } = (0, m.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        { allProfileReactReplyEnabled: _ } = (0, T.i)({ location: i }),
        h = !u && !s.bot && _,
        E = null !== (n = null == d ? void 0 : d.emoji) && void 0 !== n ? n : null,
        I = null !== (r = null == d ? void 0 : d.state) && void 0 !== r ? r : null,
        b = null != I && '' !== I ? I : null;
    return null != E || null != b || u
        ? null == E && null == b
            ? (0, a.jsx)(m.Gt, {
                  value: f,
                  children: (0, a.jsx)(U, {
                      onCloseProfile: o,
                      ...l
                  })
              })
            : h
              ? (0, a.jsx)(m.Gt, {
                    value: f,
                    children: (0, a.jsx)(F, {
                        user: s,
                        emoji: E,
                        text: b,
                        ...l
                    })
                })
              : u
                ? (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(G, {
                          emoji: E,
                          text: b,
                          onCloseProfile: o,
                          ...l
                      })
                  })
                : (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(B, {
                          emoji: E,
                          text: b,
                          ...l
                      })
                  })
        : null;
}
