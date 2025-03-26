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
    _ = n(695346),
    p = n(237997),
    h = n(768581),
    m = n(176354),
    g = n(506071),
    E = n(149203);
function b(e, t, n) {
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
function v(e) {
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
                b(e, t, n[t]);
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
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(624074);
let T = __OVERLAY__ ? () => (0, s.e7)([p.default], () => p.default.isInstanceFocused()) : g.n;
function A(e) {
    var t,
        n,
        { src: o, alt: s, className: c, emojiId: f, emojiName: p, channelId: g, messageId: b, animated: y, size: S = 'default', isInteracting: A = !1, shouldAnimate: N, onMouseEnter: C, onMouseLeave: R, canSelect: P = !0, autoplay: w, registerAnimatedElementRef: D } = e,
        L = I(e, ['src', 'alt', 'className', 'emojiId', 'emojiName', 'channelId', 'messageId', 'animated', 'size', 'isInteracting', 'shouldAnimate', 'onMouseEnter', 'onMouseLeave', 'canSelect', 'autoplay', 'registerAnimatedElementRef']);
    let [x, M] = i.useState(!1),
        [k, j] = i.useState(void 0),
        U = i.useRef(),
        { triggerAnimation: G, untriggerAnimation: B } = i.useContext(u.Rm),
        F = _.Yk.useSetting(),
        V = T(),
        Z = null == w ? F : w,
        H = E.kV[S],
        W = i.useRef(null),
        Y = i.useMemo(() => {
            if (null != o) return o;
            if (null != f) {
                let e = !0 === N && Z;
                return h.ZP.getEmojiURL({
                    id: f,
                    animated: V && !0 === y && (e || x || !0 === A),
                    size: H
                });
            }
            if (null != p) return m.ZP.getURL(p);
            throw Error('Unknown Src for Emoji');
        }, [y, Z, f, p, H, V, x, A, N, o]),
        K = i.useCallback(() => {
            null != Y &&
                (U.current = (0, d.po)(Y, (e) => {
                    e || j(Date.now());
                }));
        }, [Y]),
        z = i.useCallback(
            (e) => {
                y && M(!0), null == f && G(p), null == C || C(e);
            },
            [y, p, C, G, f]
        ),
        q = i.useCallback(
            (e) => {
                y && M(!1), null == f && B(p), null == R || R(e);
            },
            [y, f, p, R, B]
        ),
        Q = i.useMemo(() => {
            let e = null != f && '' !== f ? { 'data-id': f } : { 'data-name': p };
            return v(
                O(v({}, L), {
                    className: a()('emoji', c, {
                        jumboable: 'jumbo' === S,
                        reactionLarge: 'reactionLarge' === S
                    }),
                    onError: K,
                    onMouseEnter: z,
                    onMouseLeave: q,
                    'data-type': 'emoji'
                }),
                e
            );
        }, [c, f, p, z, q, K, L, S]);
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
              children: p
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.aO, {
                      channelId: g,
                      messageId: b,
                      emojiName: p,
                      disable: !1 === Z || !1 === F,
                      emojiRef: J
                  }),
                  P
                      ? (0, r.jsx)(
                            'img',
                            O(v({}, Q), {
                                ref: X,
                                src: Y,
                                alt: null !== (t = null != s ? s : p) && void 0 !== t ? t : void 0,
                                draggable: !1
                            }),
                            k
                        )
                      : (0, r.jsx)(
                            'div',
                            O(v({}, Q), {
                                ref: X,
                                role: 'img',
                                'aria-label': null !== (n = null != s ? s : p) && void 0 !== n ? n : void 0,
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
function N(e) {
    var { registerInnerRef: t } = e,
        n = I(e, ['registerInnerRef']);
    let { useThoughtfullyAnimated: o } = i.useContext(f.q),
        { animate: a, registerRef: s } = o(),
        { disableAnimations: l } = i.useContext(c.G),
        u = i.useCallback(
            (e) => {
                s(e), null == t || t(e);
            },
            [t, s]
        );
    return (0, r.jsx)(
        A,
        O(v({}, n), {
            registerAnimatedElementRef: u,
            shouldAnimate: a && !l
        })
    );
}
function C(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(N, v({}, e)) : (0, r.jsx)(A, v({}, e));
}
