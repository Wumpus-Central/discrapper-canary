r.d(n, {
    Z: function () {
        return V;
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
    T = r(490231),
    b = r(456644),
    y = r(510659),
    S = r(287954),
    A = r(810097),
    N = r(64621),
    C = r(913002),
    R = r(228168),
    O = r(388032),
    D = r(759951);
let L = 18,
    x = 1.25,
    w = 36,
    P = 144,
    M = 150,
    k = 150,
    U = 300;
function B(e) {
    let { profileType: n, onCloseProfile: i } = e,
        { analyticsLocations: s } = (0, m.ZP)(),
        { trackUserProfileAction: o } = (0, I.KZ)(),
        u = {
            [D.biteSize]: n === R.y0.BITE_SIZE,
            [D.fullSize]: n === R.y0.FULL_SIZE,
            [D.panel]: n === R.y0.PANEL
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
        className: l()(D.container, D.editable, u),
        'aria-label': O.intl.string(O.t['zrpF/f']),
        onClick: c,
        focusProps: { ringClassName: D.ring },
        children: (0, a.jsx)('div', {
            className: l()(D.outer, u),
            children: (0, a.jsxs)('span', {
                className: l()(D.inner, D.clickable),
                children: [
                    (0, a.jsx)(f.CirclePlusIcon, {
                        size: 'xs',
                        className: D.addStatusIcon,
                        colorClass: D.addStatusIconColor
                    }),
                    (0, a.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        className: D.addStatusPrompt,
                        children: O.intl.string(O.t.evw0o6)
                    })
                ]
            })
        })
    });
}
function G(e) {
    var n, r;
    let { emoji: i, text: o, profileType: p, animate: m, className: g, renderToolbar: E, onShowToolbar: v, hasEntered: T = !0 } = e,
        { trackUserProfileAction: b } = (0, I.KZ)(),
        y = {
            [D.biteSize]: p === R.y0.BITE_SIZE,
            [D.fullSize]: p === R.y0.FULL_SIZE,
            [D.panel]: p === R.y0.PANEL
        },
        S = null != i ? x : 0,
        A = w + S,
        N = P + S,
        C = s.useRef(null),
        L = s.useRef(null),
        B = s.useRef(null),
        G = s.useRef(A),
        F = s.useRef(N),
        Z = null != i && null == o,
        [V, j] = s.useState(!1),
        [H, Y] = s.useState(!0),
        [W, K] = s.useState(!Z && T),
        z = !Z && T && V;
    s.useLayoutEffect(() => {
        if ((j(!0), null == L.current || null == B.current || !z)) return;
        let e = L.current.getBoundingClientRect().height,
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
                duration: M
            }
        })),
        $ = (e) => {
            if (!!W)
                e
                    ? J({
                          maxHeight: ''.concat(Math.min(F.current, N), 'px'),
                          delay: q ? 0 : U,
                          config: {
                              clamp: !0,
                              duration: q ? 0 : M
                          }
                      })
                    : J({
                          maxHeight: ''.concat(Math.min(G.current, A), 'px'),
                          delay: 0
                      }),
                    q ? Y(!e) : Q.start(e ? U : k, () => Y(!e));
        },
        ee =
            null != i
                ? (0, a.jsx)(_.Iv, {
                      emoji: i,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: R.vB,
                      className: D.statusEmoji
                  })
                : null,
        et =
            null != o
                ? (0, a.jsx)(f.Text, {
                      variant: 'text-sm/normal',
                      className: D.statusText,
                      children: o
                  })
                : null,
        en = (0, a.jsx)('div', {
            className: l()(D.referenceContainer, y),
            children: (0, a.jsx)('div', {
                className: l()(D.outer, y),
                children: (0, a.jsxs)('span', {
                    className: D.inner,
                    children: [
                        (0, a.jsxs)('div', {
                            ref: L,
                            className: l()(D.content, y),
                            children: [ee, et]
                        }),
                        (0, a.jsxs)('div', {
                            ref: B,
                            className: l()(D.content, D.unclamped, y),
                            children: [ee, et]
                        })
                    ]
                })
            })
        }),
        er = (0, a.jsx)('div', {
            className: l()(D.outer, y),
            children: (0, a.jsx)('span', {
                className: D.inner,
                children: (0, a.jsxs)(u.animated.div, {
                    style: X,
                    className: l()(D.content, { [D.unclamped]: !H }),
                    children: [ee, et]
                })
            })
        });
    return null == v
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  en,
                  (0, a.jsx)(f.FocusRing, {
                      ringClassName: D.ring,
                      children: (0, a.jsxs)('div', {
                          ref: C,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: l()(D.container, y, g),
                          'aria-label': O.intl.formatToPlainString(O.t.UpF5QU, {
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
                      ringClassName: D.ring,
                      children: (0, a.jsxs)('div', {
                          ref: C,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: l()(D.container, y, g),
                          'aria-label': O.intl.formatToPlainString(O.t.UpF5QU, {
                              emoji: null !== (r = null == i ? void 0 : i.name) && void 0 !== r ? r : '',
                              status: o
                          }),
                          onFocus: () => {
                              v(!0), $(!0);
                          },
                          onBlur: (e) => {
                              var n;
                              !(null === (n = C.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && (v(!1), $(!1));
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
function F(e) {
    let { emoji: n, text: r, onCloseProfile: i, ...o } = e,
        [l, u] = s.useState(!1);
    return (0, a.jsx)(G, {
        ...o,
        emoji: n,
        text: r,
        className: D.editable,
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
    let { emoji: n, text: r, user: i, guildId: o, channelId: l, profileType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, I.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: h } = (0, y.Xo)(),
        p = _ === R.n_.STATUS && f === R.P.REACT,
        m = _ === R.n_.STATUS && f === R.P.REPLY,
        g = p || m,
        v = s.useRef(n),
        T = s.useRef(r);
    s.useEffect(() => {
        if (_ === R.n_.STATUS) (v.current !== n || T.current !== r) && h(), (v.current = n), (T.current = r);
    }, [_, h, n, r]);
    let [b, C] = s.useState(!1),
        O = s.useCallback(
            (e) => {
                if (!!e || !g) C(e);
            },
            [g]
        ),
        L = () => {
            if (null == n) return r;
            let e = null != n.id ? '`' + ':'.concat(n.name, ':') + '`' : E.ZP.translateSurrogatesToInlineEmoji(n.name);
            return null == r ? e : ''.concat(e, ' ').concat(r);
        };
    return (0, a.jsx)(S.Z, {
        user: i,
        guildId: o,
        channelId: l,
        profileType: u,
        sourceDetails: L(),
        sourceType: R.n_.STATUS,
        onAction: d,
        onClose: () => C(!1),
        children: () =>
            (0, a.jsx)(N.Z, {
                sourceType: R.n_.STATUS,
                user: i,
                children: (0, a.jsx)(G, {
                    ...c,
                    emoji: n,
                    text: r,
                    profileType: u,
                    className: g ? D.hoisted : void 0,
                    onShowToolbar: O,
                    renderToolbar: (e) =>
                        (0, a.jsx)(A.ZP, {
                            user: i,
                            sourceType: R.n_.STATUS,
                            isVisible: b && !g,
                            isExpandable: e,
                            onAction: d
                        })
                })
            })
    });
}
function V(e) {
    var n, r;
    let { location: i, user: s, onCloseProfile: o, ...l } = e,
        u = (0, c.e7)([v.default], () => v.default.getId() === s.id),
        d = (0, g.Z)(s.id),
        { analyticsLocations: f } = (0, m.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        { fadeInAndOutEnabled: _ } = (0, T.o)({ location: i }),
        { allProfileReactReplyEnabled: h } = (0, b.i)({ location: i }),
        E = !u && !s.bot && (_ || h),
        I = null !== (n = null == d ? void 0 : d.emoji) && void 0 !== n ? n : null,
        y = null !== (r = null == d ? void 0 : d.state) && void 0 !== r ? r : null,
        S = null != y && '' !== y ? y : null;
    return null != I || null != S || u
        ? null == I && null == S
            ? (0, a.jsx)(m.Gt, {
                  value: f,
                  children: (0, a.jsx)(B, {
                      onCloseProfile: o,
                      ...l
                  })
              })
            : E
              ? (0, a.jsx)(m.Gt, {
                    value: f,
                    children: (0, a.jsx)(Z, {
                        user: s,
                        emoji: I,
                        text: S,
                        ...l
                    })
                })
              : u
                ? (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(F, {
                          emoji: I,
                          text: S,
                          onCloseProfile: o,
                          ...l
                      })
                  })
                : (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(G, {
                          emoji: I,
                          text: S,
                          ...l
                      })
                  })
        : null;
}
