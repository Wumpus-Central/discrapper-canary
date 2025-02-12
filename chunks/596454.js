n.d(t, { Z: () => T }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(990169),
    u = n(249458),
    c = n(146128),
    d = n(134432),
    f = n(959258),
    _ = n(695346),
    p = n(237997),
    h = n(768581),
    m = n(176354),
    g = n(506071),
    E = n(149203);
n(256466);
let v = __OVERLAY__ ? () => (0, o.e7)([p.Z], () => p.Z.isInstanceFocused()) : g.n;
function y(e) {
    var t, n;
    let { src: a, alt: o, className: u, emojiId: f, emojiName: p, channelId: g, messageId: y, animated: I, size: T = 'default', isInteracting: b = !1, shouldAnimate: S, onMouseEnter: A, onMouseLeave: N, canSelect: C = !0, autoplay: R, registerAnimatedElementRef: O, ...D } = e,
        [L, x] = r.useState(!1),
        [P, w] = r.useState(void 0),
        M = r.useRef(),
        { triggerAnimation: k, untriggerAnimation: U } = r.useContext(c.Rm),
        G = _.Yk.useSetting(),
        B = v(),
        Z = null == R ? G : R,
        F = E.kV[T],
        V = r.useRef(null),
        j = r.useMemo(() => {
            if (null != a) return a;
            if (null != f) {
                let e = !0 === S && Z;
                return h.ZP.getEmojiURL({
                    id: f,
                    animated: B && !0 === I && (e || L || !0 === b),
                    size: F
                });
            }
            if (null != p) return m.ZP.getURL(p);
            throw Error('Unknown Src for Emoji');
        }, [I, Z, f, p, F, B, L, b, S, a]),
        H = r.useCallback(() => {
            null != j &&
                (M.current = (0, d.po)(j, (e) => {
                    e || w(Date.now());
                }));
        }, [j]),
        Y = r.useCallback(
            (e) => {
                I && x(!0), null == f && k(p), null == A || A(e);
            },
            [I, p, A, k, f]
        ),
        W = r.useCallback(
            (e) => {
                I && x(!1), null == f && U(p), null == N || N(e);
            },
            [I, f, p, N, U]
        ),
        K = r.useMemo(() => {
            let e = null != f && '' !== f ? { 'data-id': f } : { 'data-name': p };
            return {
                ...D,
                className: s()('emoji', u, {
                    jumboable: 'jumbo' === T,
                    reactionLarge: 'reactionLarge' === T
                }),
                onError: H,
                onMouseEnter: Y,
                onMouseLeave: W,
                'data-type': 'emoji',
                ...e
            };
        }, [u, f, p, Y, W, H, D, T]);
    r.useEffect(
        () => () => {
            var e;
            return null === (e = M.current) || void 0 === e ? void 0 : e.call(M);
        },
        []
    );
    let z = r.useCallback(
            (e) => {
                (V.current = e), null == O || O(e);
            },
            [O]
        ),
        q = (0, l.Z)(V);
    return null == j || '' === j
        ? (0, i.jsx)('span', {
              className: s()('emoji', 'emoji-text'),
              children: p
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.aO, {
                      channelId: g,
                      messageId: y,
                      emojiName: p,
                      disable: !1 === Z || !1 === G,
                      emojiRef: q
                  }),
                  C
                      ? (0, i.jsx)(
                            'img',
                            {
                                ...K,
                                ref: z,
                                src: j,
                                alt: null !== (t = null != o ? o : p) && void 0 !== t ? t : void 0,
                                draggable: !1
                            },
                            P
                        )
                      : (0, i.jsx)(
                            'div',
                            {
                                ...K,
                                ref: z,
                                role: 'img',
                                'aria-label': null !== (n = null != o ? o : p) && void 0 !== n ? n : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(j, ')'),
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center'
                                }
                            },
                            P
                        )
              ]
          });
}
function I(e) {
    let { useThoughtfullyAnimated: t } = r.useContext(f.q),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: s } = r.useContext(u.G);
    return (0, i.jsx)(y, {
        ...e,
        registerAnimatedElementRef: a,
        shouldAnimate: n && !s
    });
}
function T(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, i.jsx)(I, { ...e }) : (0, i.jsx)(y, { ...e });
}
