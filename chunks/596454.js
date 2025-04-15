n.d(t, { Z: () => C }), n(388685), n(415506);
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
function y(e) {
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
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
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
n(477526);
let T = __OVERLAY__ ? () => (0, s.e7)([p.default], () => p.default.isInstanceFocused()) : g.n;
function N(e) {
    var t,
        n,
        { src: o, alt: s, className: c, emojiId: f, emojiName: p, channelId: g, messageId: b, animated: v, size: S = 'default', isInteracting: N = !1, shouldAnimate: A, onMouseEnter: C, onMouseLeave: R, canSelect: P = !0, autoplay: w, registerAnimatedElementRef: D, registerInnerRef: L } = e,
        x = I(e, ['src', 'alt', 'className', 'emojiId', 'emojiName', 'channelId', 'messageId', 'animated', 'size', 'isInteracting', 'shouldAnimate', 'onMouseEnter', 'onMouseLeave', 'canSelect', 'autoplay', 'registerAnimatedElementRef', 'registerInnerRef']);
    let [M, k] = i.useState(!1),
        [j, U] = i.useState(void 0),
        G = i.useRef(void 0),
        { triggerAnimation: B, untriggerAnimation: F } = i.useContext(u.Rm),
        V = _.Yk.useSetting(),
        Z = T(),
        H = null == w ? V : w,
        W = E.kV[S],
        Y = i.useRef(null),
        K = i.useMemo(() => {
            if (null != o) return o;
            if (null != f) {
                let e = !0 === A && H;
                return h.ZP.getEmojiURL({
                    id: f,
                    animated: Z && !0 === v && (e || M || !0 === N),
                    size: W
                });
            }
            if (null != p) return m.ZP.getURL(p);
            throw Error('Unknown Src for Emoji');
        }, [v, H, f, p, W, Z, M, N, A, o]),
        z = i.useCallback(() => {
            null != K &&
                (G.current = (0, d.po)(K, (e) => {
                    e || U(Date.now());
                }));
        }, [K]),
        q = i.useCallback(
            (e) => {
                v && k(!0), null == f && B(p), null == C || C(e);
            },
            [v, p, C, B, f]
        ),
        Q = i.useCallback(
            (e) => {
                v && k(!1), null == f && F(p), null == R || R(e);
            },
            [v, f, p, R, F]
        ),
        X = i.useMemo(() => {
            let e = null != f && '' !== f ? { 'data-id': f } : { 'data-name': p };
            return y(
                O(y({}, x), {
                    className: a()('emoji', c, {
                        jumboable: 'jumbo' === S,
                        reactionLarge: 'reactionLarge' === S
                    }),
                    onError: z,
                    onMouseEnter: q,
                    onMouseLeave: Q,
                    'data-type': 'emoji'
                }),
                e
            );
        }, [c, f, p, q, Q, z, x, S]);
    i.useEffect(
        () => () => {
            var e;
            return null == (e = G.current) ? void 0 : e.call(G);
        },
        []
    );
    let J = i.useCallback(
            (e) => {
                (Y.current = e), null == D || D(e);
            },
            [D]
        ),
        $ = (0, l.Z)(Y);
    return null == K || '' === K
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
                      disable: !1 === H || !1 === V,
                      emojiRef: $
                  }),
                  P
                      ? (0, r.jsx)(
                            'img',
                            O(y({}, X), {
                                ref: J,
                                src: K,
                                alt: null != (t = null != s ? s : p) ? t : void 0,
                                draggable: !1
                            }),
                            j
                        )
                      : (0, r.jsx)(
                            'div',
                            O(y({}, X), {
                                ref: J,
                                role: 'img',
                                'aria-label': null != (n = null != s ? s : p) ? n : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(K, ')'),
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center'
                                }
                            }),
                            j
                        )
              ]
          });
}
function A(e) {
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
        N,
        O(y({}, n), {
            registerAnimatedElementRef: u,
            shouldAnimate: a && !l
        })
    );
}
function C(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(A, y({}, e)) : (0, r.jsx)(N, y({}, e));
}
