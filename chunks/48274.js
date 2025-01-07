r.d(n, {
    Z: function () {
        return U;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
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
    R = r(387984);
let O = 'text-sm/medium',
    D = 18,
    L = 1.25,
    x = 36,
    w = 144,
    P = 150,
    M = 150,
    k = 300;
function U(e) {
    let { user: n, guildId: i, channelId: o, profileType: U, hasEntered: B = !0, animate: G = !0, onCloseProfile: Z } = e,
        F = (0, c.e7)([v.default], () => v.default.getId() === n.id),
        V = (0, g.Z)(n.id),
        { analyticsLocations: j } = (0, m.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: H } = (0, I.KZ)(),
        Y = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [W] = s.useState(() => new d.V7()),
        [K, z] = s.useState(!0),
        q = s.useRef(null),
        Q = s.useRef(null),
        X = s.useRef(null),
        J = s.useRef(null),
        { emoji: $, state: ee } = null != V ? V : {},
        et = null != ee && '' !== ee ? ee : null,
        en = null != et && et.length > 0,
        er = null != $,
        ei = er && !en,
        ea = er ? L : 0,
        es = D + ea,
        eo = w + ea,
        el = x + ea,
        eu = er || en,
        { interactionType: ec, interactionSource: ed, resetInteraction: ef } = (0, T.Xo)(),
        e_ = ed === N.n_.STATUS && ec === N.P.REACT,
        eh = ed === N.n_.STATUS && ec === N.P.REPLY,
        ep = e_ || eh,
        em = F && !eu,
        eg = F && eu,
        [eE, ev] = s.useState(ei),
        [eI, eT] = s.useState(!ei),
        [eb, ey] = s.useState(!1),
        eS = s.useRef(null);
    s.useLayoutEffect(() => {
        if (null == q.current || ei) return;
        let e = q.current.getBoundingClientRect().height;
        if ((ev(ei || e <= es), B)) {
            var n, r, i, a;
            let e = null !== (i = null === (n = q.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : eo,
                s = null !== (a = null === (r = X.current) || void 0 === r ? void 0 : r.getBoundingClientRect().height) && void 0 !== a ? a : el;
            eT(!ei && e > s), (Q.current = e), (J.current = s);
        }
    }, [B, ei, es, eo, el]);
    let [eA, eN] = (0, f.useSpring)(() => ({
        maxHeight: ''.concat(el, 'px'),
        config: {
            clamp: !0,
            duration: P
        }
    }));
    s.useEffect(() => () => W.stop(), [W]);
    let eC = s.useRef(V);
    if (
        (s.useEffect(() => {
            ed === N.n_.STATUS && (null == V || eC.current !== V) && ef(), (eC.current = V);
        }, [V, ed, ef]),
        !eu && !em)
    )
        return null;
    let eR = (e) => {
            var n, r;
            if (!eI) return;
            if (e) {
                let e = Math.min(null !== (n = Q.current) && void 0 !== n ? n : eo, eo);
                eN({
                    maxHeight: ''.concat(e, 'px'),
                    delay: Y ? 0 : k,
                    config: {
                        clamp: !0,
                        duration: Y ? 0 : P
                    }
                });
            } else {
                let e = Math.min(null !== (r = J.current) && void 0 !== r ? r : el, el);
                eN({
                    maxHeight: ''.concat(e, 'px'),
                    delay: 0
                });
            }
            if (Y) {
                z(!e);
                return;
            }
            let i = e ? k : M;
            W.start(i, () => {
                z(!e);
            });
        },
        eO = () =>
            er
                ? (0, a.jsx)(_.Iv, {
                      className: en ? R.statusEmojiInline : R.statusEmojiOnly,
                      emoji: $,
                      animate: G,
                      hideTooltip: !1,
                      tooltipDelay: N.vB
                  })
                : null,
        eD = () =>
            en
                ? (0, a.jsx)(f.Text, {
                      variant: O,
                      className: R.statusText,
                      children: et
                  })
                : null,
        eL = () => {
            let e = l()(R.content, {
                [R.clamp]: K,
                [R.unclamp]: !K,
                [R.singleLineAlign]: eE
            });
            return (0, a.jsxs)(u.animated.div, {
                style: eA,
                className: e,
                children: [eO(), eD()]
            });
        },
        ex = () =>
            (0, a.jsxs)('div', {
                className: l()(R.content, R.clamp, R.placeholderWidth, { [R.panel]: U === N.y0.PANEL }),
                ref: X,
                children: [eO(), eD()]
            }),
        ew = () =>
            (0, a.jsxs)('div', {
                className: l()(R.content, R.unclamp, R.placeholderWidth, R.incorporeal, { [R.panel]: U === N.y0.PANEL }),
                ref: q,
                children: [eO(), eD()]
            }),
        eP = () => {
            H({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == Z || Z(),
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await r.e('51714').then(r.bind(r, 211065));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            sourceAnalyticsLocations: j
                        });
                });
        },
        eM = {
            [R.biteSize]: U === N.y0.BITE_SIZE,
            [R.fullSize]: U === N.y0.FULL_SIZE,
            [R.panel]: U === N.y0.PANEL
        },
        ek = l()(R.background, { [R.editable]: eg }),
        eU = { [R.hoisted]: ep },
        eB = l()({
            [R.statusBubbleShape]: (!en && er) || !eE,
            [R.statusBubbleSingleLineWithTextShape]: (eE && en) || em
        }),
        eG = l()(R.statusBubbleOuter, eM, eB, { [R.statusBubbleOuterAddStatusCursor]: em }),
        eZ = l()(R.statusBubble, eB, {
            [R.statusBubbleEmojiOnlyPadding]: ei,
            [R.statusBubbleWithTextPadding]: en || em,
            [R.statusBubbleWithTextMinWidth]: en,
            [R.statusBubbleCopyStatusCursor]: eu
        }),
        eF = () => {
            if (er) {
                let e = null != $.id ? '`' + ':'.concat($.name, ':') + '`' : E.ZP.translateSurrogatesToInlineEmoji($.name);
                return ei ? ''.concat(e) : ''.concat(e, ' ').concat(ee);
            }
            if (!ei) return ''.concat(ee);
        },
        eV = () =>
            (0, a.jsx)(f.Clickable, {
                'aria-label': C.intl.string(C.t['zrpF/f']),
                onClick: eP,
                className: l()(R.addCustomStatusButtonBubble, eM, ek),
                focusProps: { ringClassName: eB },
                children: (0, a.jsx)('div', {
                    className: eG,
                    children: (0, a.jsx)('span', {
                        className: eZ,
                        children: (0, a.jsxs)('div', {
                            className: R.content,
                            children: [
                                (0, a.jsx)(f.CirclePlusIcon, {
                                    className: R.addStatusIcon,
                                    colorClass: R.addStatusIconColor
                                }),
                                (0, a.jsx)(f.Text, {
                                    variant: O,
                                    className: R.addStatusPrompt,
                                    children: C.intl.string(C.t.evw0o6)
                                })
                            ]
                        })
                    })
                })
            }),
        ej = () => {
            let e = (0, a.jsxs)('span', {
                className: eZ,
                children: [eu && ex(), eu && ew()]
            });
            return (0, a.jsxs)('div', {
                className: l()(R.invisibleContainer, eM, eG),
                children: [
                    (0, a.jsx)(S.Z, {
                        sourceType: N.n_.STATUS,
                        user: n,
                        children: (0, a.jsx)('div', {
                            className: R.coachmarkAnchor,
                            children: e
                        })
                    }),
                    e
                ]
            });
        },
        eH = () => {
            var e;
            return (0, a.jsx)(f.FocusRing, {
                ringClassName: eB,
                children: (0, a.jsxs)('div', {
                    ref: eS,
                    className: l()(R.visibleContainer, eM, ek, eU),
                    role: 'tooltip',
                    'aria-label': C.intl.formatToPlainString(C.t.UpF5QU, {
                        emoji: null !== (e = null == $ ? void 0 : $.name) && void 0 !== e ? e : '',
                        status: ee
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        ey(!0), eR(!0);
                    },
                    onBlur: (e) => {
                        var n;
                        !(null === (n = eS.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && !ep && (ey(!1), eR(!1));
                    },
                    onMouseOver: () => {
                        H({ action: 'HOVER_CUSTOM_STATUS' }), ey(!0), eR(!0);
                    },
                    onMouseLeave: () => {
                        !ep && (ey(!1), eR(!1));
                    },
                    children: [
                        (0, a.jsx)('div', {
                            className: eG,
                            children: (0, a.jsx)('span', {
                                className: eZ,
                                children: eu && eL()
                            })
                        }),
                        eg
                            ? (0, a.jsx)(A.Z, {
                                  isVisible: eb,
                                  isExpandable: eI,
                                  onCloseProfile: Z
                              })
                            : (0, a.jsx)(y.ZP, {
                                  user: n,
                                  sourceType: N.n_.STATUS,
                                  isVisible: eb && !ep,
                                  isExpandable: eI,
                                  onAction: H
                              })
                    ]
                })
            });
        };
    return (0, a.jsx)(m.Gt, {
        value: j,
        children: em
            ? eV()
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      ej(),
                      (0, a.jsx)(b.Z, {
                          user: n,
                          guildId: i,
                          channelId: o,
                          profileType: U,
                          sourceDetails: eF(),
                          sourceType: N.n_.STATUS,
                          onAction: H,
                          onClose: () => {
                              ey(!1), eR(!1);
                          },
                          children: () => eH()
                      })
                  ]
              })
    });
}
