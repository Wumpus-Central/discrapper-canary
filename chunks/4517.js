r.d(n, {
    Z: function () {
        return x;
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
    E = r(314897),
    v = r(785717),
    I = r(913002),
    T = r(228168),
    b = r(388032),
    y = r(759951);
let S = 'text-sm/medium',
    A = 18,
    N = 1.25,
    C = 36,
    R = 144,
    O = 150,
    D = 150,
    L = 300;
function x(e) {
    let { user: n, profileType: i, hasEntered: o = !0, animate: x = !0, onCloseProfile: w } = e,
        P = (0, c.e7)([E.default], () => E.default.getId() === n.id),
        M = (0, g.Z)(n.id),
        { analyticsLocations: k } = (0, m.ZP)(p.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: U } = (0, v.KZ)(),
        B = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [G] = s.useState(() => new d.V7()),
        [Z, F] = s.useState(!0),
        V = s.useRef(null),
        j = s.useRef(null),
        H = s.useRef(null),
        Y = s.useRef(null),
        { emoji: W, state: K } = null != M ? M : {},
        z = null != K && '' !== K ? K : null,
        q = null != z && z.length > 0,
        Q = null != W,
        X = Q && !q,
        J = Q ? N : 0,
        $ = A + J,
        ee = R + J,
        et = C + J,
        en = Q || q,
        er = P && !en,
        ei = P && en,
        [ea, es] = s.useState(X),
        [eo, el] = s.useState(!X),
        [eu, ec] = s.useState(!1),
        ed = s.useRef(null);
    s.useLayoutEffect(() => {
        if (null == V.current || X) return;
        let e = V.current.getBoundingClientRect().height;
        if ((es(X || e <= $), o)) {
            var n, r, i, a;
            let e = null !== (i = null === (n = V.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : ee,
                s = null !== (a = null === (r = H.current) || void 0 === r ? void 0 : r.getBoundingClientRect().height) && void 0 !== a ? a : et;
            el(!X && e > s), (j.current = e), (Y.current = s);
        }
    }, [o, X, $, ee, et]);
    let [ef, e_] = (0, f.useSpring)(() => ({
        maxHeight: ''.concat(et, 'px'),
        config: {
            clamp: !0,
            duration: O
        }
    }));
    if ((s.useEffect(() => () => G.stop(), [G]), !en && !er)) return null;
    let eh = (e) => {
            var n, r;
            if (!eo) return;
            if (e) {
                let e = Math.min(null !== (n = j.current) && void 0 !== n ? n : ee, ee);
                e_({
                    maxHeight: ''.concat(e, 'px'),
                    delay: B ? 0 : L,
                    config: {
                        clamp: !0,
                        duration: B ? 0 : O
                    }
                });
            } else {
                let e = Math.min(null !== (r = Y.current) && void 0 !== r ? r : et, et);
                e_({
                    maxHeight: ''.concat(e, 'px'),
                    delay: 0
                });
            }
            if (B) {
                F(!e);
                return;
            }
            let i = e ? L : D;
            G.start(i, () => {
                F(!e);
            });
        },
        ep = () =>
            Q
                ? (0, a.jsx)(_.Iv, {
                      className: q ? y.statusEmojiInline : y.statusEmojiOnly,
                      emoji: W,
                      animate: x,
                      hideTooltip: !1,
                      tooltipDelay: T.vB
                  })
                : null,
        em = () =>
            q
                ? (0, a.jsx)(f.Text, {
                      variant: S,
                      className: y.statusText,
                      children: z
                  })
                : null,
        eg = () => {
            let e = l()(y.content, {
                [y.clamp]: Z,
                [y.unclamp]: !Z,
                [y.singleLineAlign]: ea
            });
            return (0, a.jsxs)(u.animated.div, {
                style: ef,
                className: e,
                children: [ep(), em()]
            });
        },
        eE = () =>
            (0, a.jsxs)('div', {
                className: l()(y.content, y.clamp, y.placeholderWidth, { [y.panel]: i === T.y0.PANEL }),
                ref: H,
                children: [ep(), em()]
            }),
        ev = () =>
            (0, a.jsxs)('div', {
                className: l()(y.content, y.unclamp, y.placeholderWidth, y.incorporeal, { [y.panel]: i === T.y0.PANEL }),
                ref: V,
                children: [ep(), em()]
            }),
        eI = () => {
            U({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == w || w(),
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await r.e('51714').then(r.bind(r, 211065));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            sourceAnalyticsLocations: k
                        });
                });
        },
        eT = {
            [y.biteSize]: i === T.y0.BITE_SIZE,
            [y.fullSize]: i === T.y0.FULL_SIZE,
            [y.panel]: i === T.y0.PANEL
        },
        eb = l()(y.background, { [y.editable]: ei }),
        ey = l()({
            [y.statusBubbleShape]: (!q && Q) || !ea,
            [y.statusBubbleSingleLineWithTextShape]: (ea && q) || er
        }),
        eS = l()(y.statusBubbleOuter, eT, ey, { [y.statusBubbleOuterAddStatusCursor]: er }),
        eA = l()(y.statusBubble, ey, {
            [y.statusBubbleEmojiOnlyPadding]: X,
            [y.statusBubbleWithTextPadding]: q || er,
            [y.statusBubbleWithTextMinWidth]: q,
            [y.statusBubbleCopyStatusCursor]: en
        }),
        eN = () =>
            (0, a.jsx)(f.Clickable, {
                'aria-label': b.intl.string(b.t['zrpF/f']),
                onClick: eI,
                className: l()(y.addCustomStatusButtonBubble, eT, eb),
                focusProps: { ringClassName: ey },
                children: (0, a.jsx)('div', {
                    className: eS,
                    children: (0, a.jsx)('span', {
                        className: eA,
                        children: (0, a.jsxs)('div', {
                            className: y.content,
                            children: [
                                (0, a.jsx)(f.CirclePlusIcon, {
                                    className: y.addStatusIcon,
                                    colorClass: y.addStatusIconColor
                                }),
                                (0, a.jsx)(f.Text, {
                                    variant: S,
                                    className: y.addStatusPrompt,
                                    children: b.intl.string(b.t.evw0o6)
                                })
                            ]
                        })
                    })
                })
            }),
        eC = () =>
            (0, a.jsx)('div', {
                className: l()(y.invisibleContainer, eT),
                children: (0, a.jsx)('div', {
                    className: eS,
                    children: (0, a.jsxs)('span', {
                        className: eA,
                        children: [eE(), ev()]
                    })
                })
            }),
        eR = () => {
            var e;
            return (0, a.jsx)(f.FocusRing, {
                ringClassName: ey,
                children: (0, a.jsxs)('div', {
                    ref: ed,
                    className: l()(y.visibleContainer, eT, eb),
                    role: 'tooltip',
                    'aria-label': b.intl.formatToPlainString(b.t.UpF5QU, {
                        emoji: null !== (e = null == W ? void 0 : W.name) && void 0 !== e ? e : '',
                        status: K
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        ec(!0), eh(!0);
                    },
                    onBlur: (e) => {
                        var n;
                        !(null === (n = ed.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && (ec(!1), eh(!1));
                    },
                    onMouseOver: () => {
                        U({ action: 'HOVER_CUSTOM_STATUS' }), ec(!0), eh(!0);
                    },
                    onMouseLeave: () => {
                        ec(!1), eh(!1);
                    },
                    children: [
                        (0, a.jsx)('div', {
                            className: eS,
                            children: (0, a.jsx)('span', {
                                className: eA,
                                children: eg()
                            })
                        }),
                        ei &&
                            (0, a.jsx)(I.Z, {
                                isVisible: eu,
                                isExpandable: eo,
                                onCloseProfile: w
                            })
                    ]
                })
            });
        };
    return (0, a.jsx)(m.Gt, {
        value: k,
        children: (0, a.jsx)('div', {
            children: er
                ? eN()
                : (0, a.jsxs)(a.Fragment, {
                      children: [eC(), eR()]
                  })
        })
    });
}
