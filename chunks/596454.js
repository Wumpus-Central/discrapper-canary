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
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
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
function A(e) {
    var t,
        n,
        { src: o, alt: s, className: c, emojiId: f, emojiName: p, channelId: g, messageId: b, animated: O, size: S = 'default', isInteracting: A = !1, shouldAnimate: N, onMouseEnter: C, onMouseLeave: R, canSelect: P = !0, autoplay: w, registerInnerRef: D, registerAnimatedElementRef: L } = e,
        x = I(e, ['src', 'alt', 'className', 'emojiId', 'emojiName', 'channelId', 'messageId', 'animated', 'size', 'isInteracting', 'shouldAnimate', 'onMouseEnter', 'onMouseLeave', 'canSelect', 'autoplay', 'registerInnerRef', 'registerAnimatedElementRef']);
    let [M, k] = i.useState(!1),
        [j, U] = i.useState(void 0),
        G = i.useRef(void 0),
        { triggerAnimation: B, untriggerAnimation: V } = i.useContext(u.Rm),
        F = _.Yk.useSetting(),
        Z = T(),
        H = null == w ? F : w,
        Y = E.kV[S],
        W = i.useRef(null),
        K = i.useMemo(() => {
            if (null != o) return o;
            if (null != f) {
                let e = !0 === N && H;
                return h.ZP.getEmojiURL({
                    id: f,
                    animated: Z && !0 === O && (e || M || !0 === A),
                    size: Y
                });
            }
            if (null != p) return m.ZP.getURL(p);
            throw Error('Unknown Src for Emoji');
        }, [O, H, f, p, Y, Z, M, A, N, o]),
        z = i.useCallback(() => {
            null != K &&
                (G.current = (0, d.po)(K, (e) => {
                    e || U(Date.now());
                }));
        }, [K]),
        q = i.useCallback(
            (e) => {
                O && k(!0), null == f && B(p), null == C || C(e);
            },
            [O, p, C, B, f]
        ),
        Q = i.useCallback(
            (e) => {
                O && k(!1), null == f && V(p), null == R || R(e);
            },
            [O, f, p, R, V]
        ),
        X = i.useMemo(() => {
            let e = null != f && '' !== f ? { 'data-id': f } : { 'data-name': p };
            return y(
                v(y({}, x), {
                    className: a()('emoji', c, { jumboable: 'jumbo' === S }),
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
                (W.current = e), null == D || D(e), null == L || L(e);
            },
            [D, L]
        ),
        $ = (0, l.Z)(W);
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
                      disable: !1 === H || !1 === F,
                      emojiRef: $
                  }),
                  P
                      ? (0, r.jsx)(
                            'img',
                            v(y({}, X), {
                                ref: J,
                                src: K,
                                alt: null != (t = null != s ? s : p) ? t : void 0,
                                draggable: !1
                            }),
                            j
                        )
                      : (0, r.jsx)(
                            'div',
                            v(y({}, X), {
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
function N(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(f.q),
        { animate: n, registerRef: o } = t(),
        { disableAnimations: a } = i.useContext(c.G);
    return (0, r.jsx)(
        A,
        v(y({}, e), {
            registerAnimatedElementRef: o,
            shouldAnimate: n && !a
        })
    );
}
function C(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(N, y({}, e)) : (0, r.jsx)(A, y({}, e));
}
