r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(442837),
    d = r(990169),
    f = r(249458),
    _ = r(146128),
    h = r(134432),
    p = r(959258),
    m = r(695346),
    g = r(237997),
    E = r(768581),
    v = r(176354),
    I = r(506071),
    T = r(149203);
r(161732);
let b = __OVERLAY__ ? () => (0, c.e7)([g.Z], () => g.Z.isInstanceFocused()) : I.n;
function y(e) {
    var n, r;
    let { src: i, alt: a, className: l, emojiId: c, emojiName: f, channelId: p, messageId: g, animated: I, size: y = 'default', isInteracting: S = !1, shouldAnimate: A, onMouseEnter: N, onMouseLeave: C, canSelect: R = !0, autoplay: O, registerAnimatedElementRef: D, ...L } = e,
        [x, w] = o.useState(!1),
        [P, M] = o.useState(void 0),
        k = o.useRef(),
        { triggerAnimation: U, untriggerAnimation: B } = o.useContext(_.Rm),
        G = m.Yk.useSetting(),
        F = b(),
        Z = null == O ? G : O,
        V = T.kV[y],
        j = o.useRef(null),
        H = o.useMemo(() => {
            if (null != i) return i;
            if (null != c) {
                let e = !0 === A && Z;
                return E.ZP.getEmojiURL({
                    id: c,
                    animated: F && !0 === I && (e || x || !0 === S),
                    size: V
                });
            }
            if (null != f) return v.ZP.getURL(f);
            throw Error('Unknown Src for Emoji');
        }, [I, Z, c, f, V, F, x, S, A, i]),
        Y = o.useCallback(() => {
            null != H &&
                (k.current = (0, h.po)(H, (e) => {
                    !e && M(Date.now());
                }));
        }, [H]),
        W = o.useCallback(
            (e) => {
                I && w(!0), null == c && U(f), null == N || N(e);
            },
            [I, f, N, U, c]
        ),
        K = o.useCallback(
            (e) => {
                I && w(!1), null == c && B(f), null == C || C(e);
            },
            [I, c, f, C, B]
        ),
        z = o.useMemo(() => {
            let e = null != c && '' !== c ? { 'data-id': c } : { 'data-name': f };
            return {
                ...L,
                className: u()('emoji', l, {
                    jumboable: 'jumbo' === y,
                    reactionLarge: 'reactionLarge' === y
                }),
                onError: Y,
                onMouseEnter: W,
                onMouseLeave: K,
                'data-type': 'emoji',
                ...e
            };
        }, [l, c, f, W, K, Y, L, y]);
    o.useEffect(
        () => () => {
            var e;
            return null === (e = k.current) || void 0 === e ? void 0 : e.call(k);
        },
        []
    );
    let q = o.useCallback(
            (e) => {
                (j.current = e), null == D || D(e);
            },
            [D]
        ),
        Q = (0, d.Z)(j);
    return null == H || '' === H
        ? (0, s.jsx)('span', {
              className: u()('emoji', 'emoji-text'),
              children: f
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(_.aO, {
                      channelId: p,
                      messageId: g,
                      emojiName: f,
                      disable: !1 === Z || !1 === G,
                      emojiRef: Q
                  }),
                  R
                      ? (0, s.jsx)(
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
                      : (0, s.jsx)(
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
    let { useThoughtfullyAnimated: n } = o.useContext(p.q),
        { animate: r, registerRef: i } = n(),
        { disableAnimations: a } = o.useContext(f.G);
    return (0, s.jsx)(y, {
        ...e,
        registerAnimatedElementRef: i,
        shouldAnimate: r && !a
    });
}
function A(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, s.jsx)(S, { ...e }) : (0, s.jsx)(y, { ...e });
}
