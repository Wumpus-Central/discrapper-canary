r.d(n, {
    Z: function () {
        return F;
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
    T = r(510659),
    b = r(287954),
    y = r(810097),
    S = r(64621),
    A = r(913002),
    N = r(228168),
    C = r(388032),
    R = r(376296);
let O = 18,
    D = 1.25,
    L = 36,
    x = 144,
    w = 150,
    P = 150,
    M = 300;
function k(e) {
    let { profileType: n, onCloseProfile: i } = e,
        { analyticsLocations: s } = (0, m.ZP)(),
        { trackUserProfileAction: o } = (0, I.KZ)(),
        u = {
            [R.biteSize]: n === N.y0.BITE_SIZE,
            [R.fullSize]: n === N.y0.FULL_SIZE,
            [R.panel]: n === N.y0.PANEL
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
        className: l()(R.container, R.editable, u),
        'aria-label': C.intl.string(C.t['zrpF/f']),
        onClick: c,
        focusProps: { ringClassName: R.ring },
        children: (0, a.jsx)('div', {
            className: l()(R.outer, u),
            children: (0, a.jsxs)('span', {
                className: l()(R.inner, R.clickable),
                children: [
                    (0, a.jsx)(f.CirclePlusIcon, {
                        size: 'xs',
                        className: R.addStatusIcon,
                        colorClass: R.addStatusIconColor
                    }),
                    (0, a.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        className: R.addStatusPrompt,
                        children: C.intl.string(C.t.evw0o6)
                    })
                ]
            })
        })
    });
}
function U(e) {
    var n, r;
    let { emoji: i, text: o, profileType: p, animate: m, className: g, renderToolbar: E, onShowToolbar: v, hasEntered: T = !0 } = e,
        { trackUserProfileAction: b } = (0, I.KZ)(),
        y = {
            [R.biteSize]: p === N.y0.BITE_SIZE,
            [R.fullSize]: p === N.y0.FULL_SIZE,
            [R.panel]: p === N.y0.PANEL
        },
        S = null != i ? D : 0,
        A = L + S,
        O = x + S,
        k = s.useRef(null),
        U = s.useRef(null),
        B = s.useRef(null),
        G = s.useRef(A),
        F = s.useRef(O),
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
                duration: w
            }
        })),
        $ = (e) => {
            if (!!W)
                e
                    ? J({
                          maxHeight: ''.concat(Math.min(F.current, O), 'px'),
                          delay: q ? 0 : M,
                          config: {
                              clamp: !0,
                              duration: q ? 0 : w
                          }
                      })
                    : J({
                          maxHeight: ''.concat(Math.min(G.current, A), 'px'),
                          delay: 0
                      }),
                    q ? Y(!e) : Q.start(e ? M : P, () => Y(!e));
        },
        ee =
            null != i
                ? (0, a.jsx)(_.Iv, {
                      emoji: i,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: N.vB,
                      className: R.statusEmoji
                  })
                : null,
        et =
            null != o
                ? (0, a.jsx)(f.Text, {
                      variant: 'text-sm/normal',
                      className: R.statusText,
                      children: o
                  })
                : null,
        en = (0, a.jsx)('div', {
            className: l()(R.referenceContainer, y),
            children: (0, a.jsx)('div', {
                className: l()(R.outer, y),
                children: (0, a.jsxs)('span', {
                    className: R.inner,
                    children: [
                        (0, a.jsxs)('div', {
                            ref: U,
                            className: l()(R.content, y),
                            children: [ee, et]
                        }),
                        (0, a.jsxs)('div', {
                            ref: B,
                            className: l()(R.content, R.unclamped, y),
                            children: [ee, et]
                        })
                    ]
                })
            })
        }),
        er = (0, a.jsx)('div', {
            className: l()(R.outer, y),
            children: (0, a.jsx)('span', {
                className: R.inner,
                children: (0, a.jsxs)(u.animated.div, {
                    style: X,
                    className: l()(R.content, { [R.unclamped]: !H }),
                    children: [ee, et]
                })
            })
        });
    return null == v
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  en,
                  (0, a.jsx)(f.FocusRing, {
                      ringClassName: R.ring,
                      children: (0, a.jsxs)('div', {
                          ref: k,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: l()(R.container, y, g),
                          'aria-label': C.intl.formatToPlainString(C.t.UpF5QU, {
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
                      ringClassName: R.ring,
                      children: (0, a.jsxs)('div', {
                          ref: k,
                          role: 'tooltip',
                          tabIndex: 0,
                          className: l()(R.container, y, g),
                          'aria-label': C.intl.formatToPlainString(C.t.UpF5QU, {
                              emoji: null !== (r = null == i ? void 0 : i.name) && void 0 !== r ? r : '',
                              status: o
                          }),
                          onFocus: () => {
                              v(!0), $(!0);
                          },
                          onBlur: (e) => {
                              var n;
                              !(null === (n = k.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && (v(!1), $(!1));
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
function B(e) {
    let { emoji: n, text: r, onCloseProfile: i, ...o } = e,
        [l, u] = s.useState(!1);
    return (0, a.jsx)(U, {
        ...o,
        emoji: n,
        text: r,
        className: R.editable,
        onShowToolbar: u,
        renderToolbar: (e) =>
            (0, a.jsx)(A.Z, {
                isVisible: l,
                isExpandable: e,
                onCloseProfile: i
            })
    });
}
function G(e) {
    let { emoji: n, text: r, user: i, guildId: o, channelId: l, profileType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, I.KZ)(),
        { interactionType: f, interactionSource: _, resetInteraction: h } = (0, T.Xo)(),
        p = _ === N.n_.STATUS && f === N.P.REACT,
        m = _ === N.n_.STATUS && f === N.P.REPLY,
        g = p || m,
        v = s.useRef(n),
        A = s.useRef(r);
    s.useEffect(() => {
        if (_ === N.n_.STATUS) (v.current !== n || A.current !== r) && h(), (v.current = n), (A.current = r);
    }, [_, h, n, r]);
    let [C, O] = s.useState(!1),
        D = s.useCallback(
            (e) => {
                if (!!e || !g) O(e);
            },
            [g]
        ),
        L = () => {
            if (null == n) return r;
            let e = null != n.id ? '`' + ':'.concat(n.name, ':') + '`' : E.ZP.translateSurrogatesToInlineEmoji(n.name);
            return null == r ? e : ''.concat(e, ' ').concat(r);
        };
    return (0, a.jsx)(b.Z, {
        user: i,
        guildId: o,
        channelId: l,
        profileType: u,
        sourceDetails: L(),
        sourceType: N.n_.STATUS,
        onAction: d,
        onClose: () => O(!1),
        children: () =>
            (0, a.jsx)(S.Z, {
                sourceType: N.n_.STATUS,
                user: i,
                children: (0, a.jsx)(U, {
                    ...c,
                    emoji: n,
                    text: r,
                    profileType: u,
                    className: g ? R.hoisted : void 0,
                    onShowToolbar: D,
                    renderToolbar: (e) =>
                        (0, a.jsx)(y.ZP, {
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
    let { user: i, onCloseProfile: s, reactReplyEnabled: o = !1, ...l } = e,
        u = (0, c.e7)([v.default], () => v.default.getId() === i.id),
        d = (0, g.Z)(i.id),
        { analyticsLocations: f } = (0, m.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        _ = null !== (n = null == d ? void 0 : d.emoji) && void 0 !== n ? n : null,
        h = null !== (r = null == d ? void 0 : d.state) && void 0 !== r ? r : null,
        E = null != h && '' !== h ? h : null;
    return null != _ || null != E || u
        ? null == _ && null == E
            ? (0, a.jsx)(m.Gt, {
                  value: f,
                  children: (0, a.jsx)(k, {
                      onCloseProfile: s,
                      ...l
                  })
              })
            : o
              ? (0, a.jsx)(m.Gt, {
                    value: f,
                    children: (0, a.jsx)(G, {
                        user: i,
                        emoji: _,
                        text: E,
                        ...l
                    })
                })
              : u
                ? (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(B, {
                          emoji: _,
                          text: E,
                          onCloseProfile: s,
                          ...l
                      })
                  })
                : (0, a.jsx)(m.Gt, {
                      value: f,
                      children: (0, a.jsx)(U, {
                          emoji: _,
                          text: E,
                          ...l
                      })
                  })
        : null;
}
