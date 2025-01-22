r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(442837),
    d = r(990169),
    f = r(249458),
    p = r(146128),
    h = r(134432),
    _ = r(959258),
    m = r(695346),
    g = r(237997),
    E = r(768581),
    v = r(176354),
    y = r(506071),
    b = r(149203);
r(200960);
let I = __OVERLAY__ ? () => (0, c.e7)([g.Z], () => g.Z.isInstanceFocused()) : y.n;
function T(e) {
    var n, r;
    let { src: i, alt: a, className: l, emojiId: c, emojiName: f, channelId: _, messageId: g, animated: y, size: T = 'default', isInteracting: S = !1, shouldAnimate: A, onMouseEnter: C, onMouseLeave: N, canSelect: R = !0, autoplay: O, registerAnimatedElementRef: D, ...x } = e,
        [L, w] = s.useState(!1),
        [P, M] = s.useState(void 0),
        k = s.useRef(),
        { triggerAnimation: U, untriggerAnimation: B } = s.useContext(p.Rm),
        G = m.Yk.useSetting(),
        Z = I(),
        F = null == O ? G : O,
        V = b.kV[T],
        j = s.useRef(null),
        H = s.useMemo(() => {
            if (null != i) return i;
            if (null != c) {
                let e = !0 === A && F;
                return E.ZP.getEmojiURL({
                    id: c,
                    animated: Z && !0 === y && (e || L || !0 === S),
                    size: V
                });
            }
            if (null != f) return v.ZP.getURL(f);
            throw Error('Unknown Src for Emoji');
        }, [y, F, c, f, V, Z, L, S, A, i]),
        Y = s.useCallback(() => {
            null != H &&
                (k.current = (0, h.po)(H, (e) => {
                    !e && M(Date.now());
                }));
        }, [H]),
        W = s.useCallback(
            (e) => {
                y && w(!0), null == c && U(f), null == C || C(e);
            },
            [y, f, C, U, c]
        ),
        K = s.useCallback(
            (e) => {
                y && w(!1), null == c && B(f), null == N || N(e);
            },
            [y, c, f, N, B]
        ),
        z = s.useMemo(() => {
            let e = null != c && '' !== c ? { 'data-id': c } : { 'data-name': f };
            return {
                ...x,
                className: u()('emoji', l, {
                    jumboable: 'jumbo' === T,
                    reactionLarge: 'reactionLarge' === T
                }),
                onError: Y,
                onMouseEnter: W,
                onMouseLeave: K,
                'data-type': 'emoji',
                ...e
            };
        }, [l, c, f, W, K, Y, x, T]);
    s.useEffect(
        () => () => {
            var e;
            return null === (e = k.current) || void 0 === e ? void 0 : e.call(k);
        },
        []
    );
    let q = s.useCallback(
            (e) => {
                (j.current = e), null == D || D(e);
            },
            [D]
        ),
        Q = (0, d.Z)(j);
    return null == H || '' === H
        ? (0, o.jsx)('span', {
              className: u()('emoji', 'emoji-text'),
              children: f
          })
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(p.aO, {
                      channelId: _,
                      messageId: g,
                      emojiName: f,
                      disable: !1 === F || !1 === G,
                      emojiRef: Q
                  }),
                  R
                      ? (0, o.jsx)(
                            'img',
                            {
                                ...z,
                                ref: q,
                                src: H,
                                alt: null !== (n = null != a ? a : f) && void 0 !== n ? n : void 0,
                                draggable: !1
                            },
                            P
                        )
                      : (0, o.jsx)(
                            'div',
                            {
                                ...z,
                                ref: q,
                                role: 'img',
                                'aria-label': null !== (r = null != a ? a : f) && void 0 !== r ? r : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(H, ')'),
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
function S(e) {
    let { useThoughtfullyAnimated: n } = s.useContext(_.q),
        { animate: r, registerRef: i } = n(),
        { disableAnimations: a } = s.useContext(f.G);
    return (0, o.jsx)(T, {
        ...e,
        registerAnimatedElementRef: i,
        shouldAnimate: r && !a
    });
}
function A(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, o.jsx)(S, { ...e }) : (0, o.jsx)(T, { ...e });
}
