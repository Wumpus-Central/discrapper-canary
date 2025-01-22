r.d(n, {
    Z: function () {
        return F;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(442837),
    d = r(846519),
    f = r(481060),
    p = r(607070),
    h = r(584973),
    _ = r(100527),
    m = r(906732),
    g = r(8454),
    E = r(633302),
    v = r(314897),
    y = r(785717),
    b = r(456644),
    I = r(510659),
    T = r(287954),
    S = r(810097),
    A = r(64621),
    C = r(913002),
    N = r(228168),
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
        { analyticsLocations: o } = (0, m.ZP)(),
        { trackUserProfileAction: s } = (0, y.KZ)(),
        u = {
            [O.biteSize]: n === N.y0.BITE_SIZE,
            [O.fullSize]: n === N.y0.FULL_SIZE,
            [O.panel]: n === N.y0.PANEL
        },
        c = () => {
            s({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await r.e('51714').then(r.bind(r, 211065));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            sourceAnalyticsLocations: o
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
    let { emoji: i, text: s, profileType: _, animate: m, className: g, renderToolbar: E, onShowToolbar: v, hasEntered: b = !0 } = e,
        { trackUserProfileAction: I } = (0, y.KZ)(),
        T = {
            [O.biteSize]: _ === N.y0.BITE_SIZE,
            [O.fullSize]: _ === N.y0.FULL_SIZE,
            [O.panel]: _ === N.y0.PANEL
        },
        S = null != i ? L : 0,
        A = x + S,
        C = w + S,
        D = o.useRef(null),
        U = o.useRef(null),
        B = o.useRef(null),
        G = o.useRef(A),
        Z = o.useRef(C),
        F = null != i && null == s,
        [V, j] = o.useState(!1),
        [H, Y] = o.useState(!0),
        [W, K] = o.useState(!F && b),
        z = !F && b && V;
    o.useLayoutEffect(() => {
        if ((j(!0), null == U.current || null == B.current || !z)) return;
        let e = U.current.getBoundingClientRect().height,
            n = B.current.getBoundingClientRect().height;
        K(n > e), (G.current = e), (Z.current = n);
    }, [z]);
    let q = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [Q] = o.useState(() => new d.V7());
    o.useEffect(() => () => Q.stop(), [Q]);
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
                          maxHeight: ''.concat(Math.min(Z.current, C), 'px'),
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
                ? (0, a.jsx)(h.Z, {
                      emoji: i,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: N.vB,
                      className: O.statusEmoji
                  })
                : null,
        et =
            null != s
                ? (0, a.jsx)(f.Text, {
                      variant: 'text-sm/normal',
                      className: O.statusText,
                      children: s
                  })
                : null,
        en = (0, a.jsx)('div', {
            className: l()(O.referenceContainer, T),
            children: (0, a.jsx)('div', {
                className: l()(O.outer, T),
                children: (0, a.jsxs)('span', {
                    className: O.inner,
                    children: [
                        (0, a.jsxs)('div', {
                            ref: U,
                            className: l()(O.content, T),
                            children: [ee, et]
                        }),
                        (0, a.jsxs)('div', {
                            ref: B,
                            className: l()(O.content, O.unclamped, T),
                            children: [ee, et]
                        })
                    ]
                })
            })
        }),
        er = (0, a.jsx)('div', {
            className: l()(O.outer, T),
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
                          className: l()(O.container, T, g),
                          'aria-label': R.intl.formatToPlainString(R.t.UpF5QU, {
                              emoji: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : '',
                              status: s
                          }),
                          onMouseEnter: () => I({ action: 'HOVER_CUSTOM_STATUS' }),
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
                          className: l()(O.container, T, g),
                          'aria-label': R.intl.formatToPlainString(R.t.UpF5QU, {
                              emoji: null !== (r = null == i ? void 0 : i.name) && void 0 !== r ? r : '',
                              status: s
                          }),
                          onFocus: () => {
                              v(!0), $(!0);
                          },
                          onBlur: (e) => {
                              var n;
                              !(null === (n = D.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && (v(!1), $(!1));
                          },
                          onMouseEnter: () => {
                              I({ action: 'HOVER_CUSTOM_STATUS' }), v(!0), $(!0);
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
    let { emoji: n, text: r, onCloseProfile: i, ...s } = e,
        [l, u] = o.useState(!1);
    return (0, a.jsx)(B, {
        ...s,
        emoji: n,
        text: r,
        className: O.editable,
        onShowToolbar: u,
        renderToolbar: (e) =>
            (0, a.jsx)(C.Z, {
                isVisible: l,
                isExpandable: e,
                onCloseProfile: i
            })
    });
}
function Z(e) {
    let { emoji: n, text: r, user: i, guildId: s, channelId: l, profileType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, y.KZ)(),
        { interactionType: f, interactionSource: p, resetInteraction: h } = (0, I.Xo)(),
        _ = p === N.n_.STATUS && f === N.P.REACT,
        m = p === N.n_.STATUS && f === N.P.REPLY,
        g = _ || m,
        v = o.useRef(n),
        b = o.useRef(r);
    o.useEffect(() => {
        if (p === N.n_.STATUS) (v.current !== n || b.current !== r) && h(), (v.current = n), (b.current = r);
    }, [p, h, n, r]);
    let [C, R] = o.useState(!1),
        D = o.useCallback(
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
    return (0, a.jsx)(T.Z, {
        user: i,
        guildId: s,
        channelId: l,
        profileType: u,
        sourceDetails: L(),
        sourceType: N.n_.STATUS,
        onAction: d,
        onClose: () => R(!1),
        children: () =>
            (0, a.jsx)(A.Z, {
                sourceType: N.n_.STATUS,
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
                            sourceType: N.n_.STATUS,
                            isVisible: C && !g,
                            isExpandable: e,
                            onAction: d
                        })
                })
            })
    });
}
function F(e) {
    var n, r;
    let { location: i, user: o, onCloseProfile: s, ...l } = e,
        u = (0, c.e7)([v.default], () => v.default.getId() === o.id),
        d = (0, g.Z)(o.id),
        { analyticsLocations: f } = (0, m.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { allProfileReactReplyEnabled: p } = (0, b.i)({ location: i }),
        h = !u && !o.bot && p,
        E = null !== (n = null == d ? void 0 : d.emoji) && void 0 !== n ? n : null,
        y = null !== (r = null == d ? void 0 : d.state) && void 0 !== r ? r : null,
        I = null != y && '' !== y ? y : null;
    return null != E || null != I || u
        ? null == E && null == I
            ? (0, a.jsx)(m.Gt, {
                  value: f,
                  children: (0, a.jsx)(U, {
                      onCloseProfile: s,
                      ...l
                  })
              })
            : h
              ? (0, a.jsx)(m.Gt, {
                    value: f,
                    children: (0, a.jsx)(Z, {
                        user: o,
                        emoji: E,
                        text: I,
                        ...l
                    })
                })
              : u
                ? (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(G, {
                          emoji: E,
                          text: I,
                          onCloseProfile: s,
                          ...l
                      })
                  })
                : (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(B, {
                          emoji: E,
                          text: I,
                          ...l
                      })
                  })
        : null;
}
