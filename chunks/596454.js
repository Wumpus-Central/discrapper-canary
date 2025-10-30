n.d(t, { Z: () => N }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(521510);
let S = __OVERLAY__ ? () => (0, s.e7)([p.default], () => p.default.isInstanceFocused()) : g.n;
function A(e) {
    var t,
        n,
        {
            src: a,
            alt: s,
            className: c,
            emojiId: f,
            emojiName: p,
            channelId: g,
            messageId: b,
            animated: O,
            size: T = "default",
            isInteracting: A = !1,
            shouldAnimate: C,
            onMouseEnter: N,
            onMouseLeave: R,
            canSelect: P = !0,
            autoplay: w,
            registerInnerRef: D,
            registerAnimatedElementRef: x,
            surrogate: L,
        } = e,
        M = I(e, [
            "src",
            "alt",
            "className",
            "emojiId",
            "emojiName",
            "channelId",
            "messageId",
            "animated",
            "size",
            "isInteracting",
            "shouldAnimate",
            "onMouseEnter",
            "onMouseLeave",
            "canSelect",
            "autoplay",
            "registerInnerRef",
            "registerAnimatedElementRef",
            "surrogate",
        ]);
    let [k, j] = i.useState(!1),
        [U, G] = i.useState(void 0),
        B = i.useRef(void 0),
        { triggerAnimation: Z, untriggerAnimation: F } = i.useContext(u.Rm),
        V = _.Yk.useSetting(),
        H = S(),
        Y = null == w ? V : w,
        W = E.kV[T],
        K = i.useRef(null),
        z = i.useMemo(() => {
            if (null != a) return a;
            if (null != f) {
                let e = !0 === C && Y;
                return h.ZP.getEmojiURL({
                    id: f,
                    animated: H && !0 === O && (e || k || !0 === A),
                    size: W,
                });
            }
            if (null != p) return m.ZP.getURL(p);
            throw Error("Unknown Src for Emoji");
        }, [O, Y, f, p, W, H, k, A, C, a]),
        q = i.useCallback(() => {
            null != z &&
                (B.current = (0, d.po)(z, (e) => {
                    e || G(Date.now());
                }));
        }, [z]),
        X = i.useCallback(
            (e) => {
                O && j(!0), null == f && Z(p), null == N || N(e);
            },
            [O, p, N, Z, f],
        ),
        Q = i.useCallback(
            (e) => {
                O && j(!1), null == f && F(p), null == R || R(e);
            },
            [O, f, p, R, F],
        ),
        J = i.useMemo(() => {
            let e = null != f && "" !== f ? { "data-id": f } : { "data-name": p };
            return y(
                v(y({}, M), {
                    className: o()("emoji", c, { jumboable: "jumbo" === T }),
                    onError: q,
                    onMouseEnter: X,
                    onMouseLeave: Q,
                    "data-type": "emoji",
                }),
                e,
            );
        }, [c, f, p, X, Q, q, M, T]);
    i.useEffect(
        () => () => {
            var e;
            return null == (e = B.current) ? void 0 : e.call(B);
        },
        [],
    );
    let $ = i.useCallback(
            (e) => {
                (K.current = e), null == D || D(e), null == x || x(e);
            },
            [D, x],
        ),
        ee = (0, l.Z)(K);
    return null == z || "" === z
        ? (0, r.jsx)(
              "span",
              v(y({}, J), {
                  ref: $,
                  className: o()("emoji", "emoji-text"),
                  children: null != L ? L : p,
              }),
          )
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.aO, {
                      channelId: g,
                      messageId: b,
                      emojiName: p,
                      disable: !1 === Y || !1 === V,
                      emojiRef: ee,
                  }),
                  P
                      ? (0, r.jsx)(
                            "img",
                            v(y({}, J), {
                                ref: $,
                                src: z,
                                alt: null != (t = null != s ? s : p) ? t : void 0,
                                draggable: !1,
                            }),
                            U,
                        )
                      : (0, r.jsx)(
                            "div",
                            v(y({}, J), {
                                ref: $,
                                role: "img",
                                "aria-label": null != (n = null != s ? s : p) ? n : void 0,
                                style: {
                                    backgroundImage: "url(".concat(z, ")"),
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                },
                            }),
                            U,
                        ),
              ],
          });
}
function C(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(f.q),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: o } = i.useContext(c.G);
    return (0, r.jsx)(
        A,
        v(y({}, e), {
            registerAnimatedElementRef: a,
            shouldAnimate: n && !o,
        }),
    );
}
function N(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
        ? null
        : e.animated && void 0 === e.shouldAnimate
          ? (0, r.jsx)(C, y({}, e))
          : (0, r.jsx)(A, y({}, e));
}
