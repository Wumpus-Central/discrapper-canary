n.d(t, { Z: () => C }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(990169),
    c = n(249458),
    u = n(146128),
    d = n(134432),
    f = n(959258),
    p = n(695346),
    _ = n(237997),
    h = n(768581),
    m = n(176354),
    g = n(506071),
    E = n(149203);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(848300);
let T = __OVERLAY__ ? () => (0, s.e7)([_.Z], () => _.Z.isInstanceFocused()) : g.n;
function N(e) {
    var t,
        n,
        { src: o, alt: s, className: c, emojiId: f, emojiName: _, channelId: g, messageId: v, animated: y, size: I = 'default', isInteracting: N = !1, shouldAnimate: A, onMouseEnter: C, onMouseLeave: R, canSelect: P = !0, autoplay: w, registerAnimatedElementRef: D } = e,
        x = S(e, ['src', 'alt', 'className', 'emojiId', 'emojiName', 'channelId', 'messageId', 'animated', 'size', 'isInteracting', 'shouldAnimate', 'onMouseEnter', 'onMouseLeave', 'canSelect', 'autoplay', 'registerAnimatedElementRef']);
    let [L, M] = i.useState(!1),
        [k, j] = i.useState(void 0),
        U = i.useRef(),
        { triggerAnimation: G, untriggerAnimation: B } = i.useContext(u.Rm),
        Z = p.Yk.useSetting(),
        F = T(),
        V = null == w ? Z : w,
        H = E.kV[I],
        W = i.useRef(null),
        Y = i.useMemo(() => {
            if (null != o) return o;
            if (null != f) {
                let e = !0 === A && V;
                return h.ZP.getEmojiURL({
                    id: f,
                    animated: F && !0 === y && (e || L || !0 === N),
                    size: H
                });
            }
            if (null != _) return m.ZP.getURL(_);
            throw Error('Unknown Src for Emoji');
        }, [y, V, f, _, H, F, L, N, A, o]),
        K = i.useCallback(() => {
            null != Y &&
                (U.current = (0, d.po)(Y, (e) => {
                    e || j(Date.now());
                }));
        }, [Y]),
        z = i.useCallback(
            (e) => {
                y && M(!0), null == f && G(_), null == C || C(e);
            },
            [y, _, C, G, f]
        ),
        q = i.useCallback(
            (e) => {
                y && M(!1), null == f && B(_), null == R || R(e);
            },
            [y, f, _, R, B]
        ),
        Q = i.useMemo(() => {
            let e = null != f && '' !== f ? { 'data-id': f } : { 'data-name': _ };
            return b(
                O(b({}, x), {
                    className: a()('emoji', c, {
                        jumboable: 'jumbo' === I,
                        reactionLarge: 'reactionLarge' === I
                    }),
                    onError: K,
                    onMouseEnter: z,
                    onMouseLeave: q,
                    'data-type': 'emoji'
                }),
                e
            );
        }, [c, f, _, z, q, K, x, I]);
    i.useEffect(
        () => () => {
            var e;
            return null === (e = U.current) || void 0 === e ? void 0 : e.call(U);
        },
        []
    );
    let X = i.useCallback(
            (e) => {
                (W.current = e), null == D || D(e);
            },
            [D]
        ),
        J = (0, l.Z)(W);
    return null == Y || '' === Y
        ? (0, r.jsx)('span', {
              className: a()('emoji', 'emoji-text'),
              children: _
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.aO, {
                      channelId: g,
                      messageId: v,
                      emojiName: _,
                      disable: !1 === V || !1 === Z,
                      emojiRef: J
                  }),
                  P
                      ? (0, r.jsx)(
                            'img',
                            O(b({}, Q), {
                                ref: X,
                                src: Y,
                                alt: null !== (t = null != s ? s : _) && void 0 !== t ? t : void 0,
                                draggable: !1
                            }),
                            k
                        )
                      : (0, r.jsx)(
                            'div',
                            O(b({}, Q), {
                                ref: X,
                                role: 'img',
                                'aria-label': null !== (n = null != s ? s : _) && void 0 !== n ? n : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(Y, ')'),
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center'
                                }
                            }),
                            k
                        )
              ]
          });
}
function A(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(f.q),
        { animate: n, registerRef: o } = t(),
        { disableAnimations: a } = i.useContext(c.G);
    return (0, r.jsx)(
        N,
        O(b({}, e), {
            registerAnimatedElementRef: o,
            shouldAnimate: n && !a
        })
    );
}
function C(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(A, b({}, e)) : (0, r.jsx)(N, b({}, e));
}
