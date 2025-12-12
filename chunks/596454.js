n.d(t, { Z: () => N }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(990169),
    c = n(249458),
    u = n(146128),
    d = n(134432),
    f = n(959258),
    p = n(695346),
    _ = n(237997),
    m = n(768581),
    h = n(176354),
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
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(626105);
let T = __OVERLAY__ ? () => (0, s.e7)([_.default], () => _.default.isInstanceFocused()) : g.n;
function C(e) {
    var t,
        n,
        {
            src: a,
            alt: s,
            className: c,
            emojiId: f,
            emojiName: _,
            channelId: g,
            messageId: b,
            animated: O,
            size: I = "default",
            isInteracting: C = !1,
            shouldAnimate: A,
            onMouseEnter: N,
            onMouseLeave: P,
            canSelect: R = !0,
            autoplay: w,
            registerInnerRef: D,
            registerAnimatedElementRef: x,
            surrogate: L,
        } = e,
        j = S(e, [
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
    let [M, k] = i.useState(!1),
        [U, G] = i.useState(void 0),
        Z = i.useRef(void 0),
        { triggerAnimation: F, untriggerAnimation: B } = i.useContext(u.Rm),
        V = p.Yk.useSetting(),
        H = T(),
        Y = null == w ? V : w,
        W = E.kV[I],
        K = i.useRef(null),
        z = i.useMemo(() => {
            if (null != a) return a;
            if (null != f) {
                let e = !0 === A && Y;
                return m.ZP.getEmojiURL({
                    id: f,
                    animated: H && !0 === O && (e || M || !0 === C),
                    size: W,
                });
            }
            if (null != _) return h.ZP.getURL(_);
            throw Error("Unknown Src for Emoji");
        }, [O, Y, f, _, W, H, M, C, A, a]),
        q = i.useCallback(() => {
            null != z &&
                (Z.current = (0, d.po)(z, (e) => {
                    e || G(Date.now());
                }));
        }, [z]),
        Q = i.useCallback(
            (e) => {
                O && k(!0), null == f && F(_), null == N || N(e);
            },
            [O, _, N, F, f],
        ),
        X = i.useCallback(
            (e) => {
                O && k(!1), null == f && B(_), null == P || P(e);
            },
            [O, f, _, P, B],
        ),
        J = i.useMemo(() => {
            let e = null != f && "" !== f ? { "data-id": f } : { "data-name": _ };
            return y(
                v(y({}, j), {
                    className: o()("emoji", c, { jumboable: "jumbo" === I }),
                    onError: q,
                    onMouseEnter: Q,
                    onMouseLeave: X,
                    "data-type": "emoji",
                }),
                e,
            );
        }, [c, f, _, Q, X, q, j, I]);
    i.useEffect(
        () => () => {
            var e;
            return null == (e = Z.current) ? void 0 : e.call(Z);
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
                  children: null != L ? L : _,
              }),
          )
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.aO, {
                      channelId: g,
                      messageId: b,
                      emojiName: _,
                      disable: !1 === Y || !1 === V,
                      emojiRef: ee,
                  }),
                  R
                      ? (0, r.jsx)(
                            "img",
                            v(y({}, J), {
                                ref: $,
                                src: z,
                                alt: null != (t = null != s ? s : _) ? t : void 0,
                                draggable: !1,
                            }),
                            U,
                        )
                      : (0, r.jsx)(
                            "div",
                            v(y({}, J), {
                                ref: $,
                                role: "img",
                                "aria-label": null != (n = null != s ? s : _) ? n : void 0,
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
function A(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(f.q),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: o } = i.useContext(c.G);
    return (0, r.jsx)(
        C,
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
          ? (0, r.jsx)(A, y({}, e))
          : (0, r.jsx)(C, y({}, e));
}
