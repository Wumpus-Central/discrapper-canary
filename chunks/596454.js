r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(442837),
    d = r(249458),
    f = r(146128),
    _ = r(134432),
    h = r(959258),
    p = r(695346),
    m = r(237997),
    g = r(768581),
    E = r(176354),
    v = r(506071),
    I = r(149203);
r(200960);
let T = __OVERLAY__ ? () => (0, c.e7)([m.Z], () => m.Z.isInstanceFocused()) : v.n;
function b(e) {
    var n, r;
    let { src: i, alt: a, className: l, emojiId: c, emojiName: d, channelId: h, messageId: m, animated: v, size: b = 'default', isInteracting: y = !1, shouldAnimate: S, onMouseEnter: A, onMouseLeave: N, canSelect: C = !0, autoplay: R, registerAnimatedElementRef: O, ...D } = e,
        [L, x] = o.useState(!1),
        [w, P] = o.useState(void 0),
        M = o.useRef(),
        { triggerAnimation: k, untriggerAnimation: U } = o.useContext(f.Rm),
        B = p.Yk.useSetting(),
        G = T(),
        F = null == R ? B : R,
        Z = I.kV[b],
        V = o.useRef(null),
        j = o.useMemo(() => {
            if (null != i) return i;
            if (null != c) {
                let e = !0 === S && F;
                return g.ZP.getEmojiURL({
                    id: c,
                    animated: G && !0 === v && (e || L || !0 === y),
                    size: Z
                });
            }
            if (null != d) return E.ZP.getURL(d);
            throw Error('Unknown Src for Emoji');
        }, [v, F, c, d, Z, G, L, y, S, i]),
        H = o.useCallback(() => {
            null != j &&
                (M.current = (0, _.po)(j, (e) => {
                    !e && P(Date.now());
                }));
        }, [j]),
        Y = o.useCallback(
            (e) => {
                v && x(!0), null == c && k(d), null == A || A(e);
            },
            [v, d, A, k, c]
        ),
        W = o.useCallback(
            (e) => {
                v && x(!1), null == c && U(d), null == N || N(e);
            },
            [v, c, d, N, U]
        ),
        K = o.useMemo(() => {
            let e = null != c && '' !== c ? { 'data-id': c } : { 'data-name': d };
            return {
                ...D,
                className: u()('emoji', l, {
                    jumboable: 'jumbo' === b,
                    reactionLarge: 'reactionLarge' === b
                }),
                onError: H,
                onMouseEnter: Y,
                onMouseLeave: W,
                'data-type': 'emoji',
                ...e
            };
        }, [l, c, d, Y, W, H, D, b]);
    o.useEffect(
        () => () => {
            var e;
            return null === (e = M.current) || void 0 === e ? void 0 : e.call(M);
        },
        []
    );
    let z = o.useCallback(
        (e) => {
            (V.current = e), null == O || O(e);
        },
        [O]
    );
    return null == j || '' === j
        ? (0, s.jsx)('span', {
              className: u()('emoji', 'emoji-text'),
              children: d
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(f.aO, {
                      channelId: h,
                      messageId: m,
                      emojiName: d,
                      disable: !1 === F || !1 === B,
                      emojiRef: V.current
                  }),
                  C
                      ? (0, s.jsx)(
                            'img',
                            {
                                ...K,
                                ref: z,
                                src: j,
                                alt: null !== (n = null != a ? a : d) && void 0 !== n ? n : void 0,
                                draggable: !1
                            },
                            w
                        )
                      : (0, s.jsx)(
                            'div',
                            {
                                ...K,
                                ref: z,
                                role: 'img',
                                'aria-label': null !== (r = null != a ? a : d) && void 0 !== r ? r : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(j, ')'),
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center'
                                }
                            },
                            w
                        )
              ]
          });
}
function y(e) {
    let { useThoughtfullyAnimated: n } = o.useContext(h.q),
        { animate: r, registerRef: i } = n(),
        { disableAnimations: a } = o.useContext(d.G);
    return (0, s.jsx)(b, {
        ...e,
        registerAnimatedElementRef: i,
        shouldAnimate: r && !a
    });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, s.jsx)(y, { ...e }) : (0, s.jsx)(b, { ...e });
}
