n.d(t, {
    A: () => x,
    B: () => w,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(311907),
    c = n(554146),
    u = n(435371),
    d = n(397927),
    f = n(775602),
    p = n(379848),
    _ = n(189551),
    h = n(526292),
    m = n(821589),
    g = n(49999),
    E = n(307731),
    b = n(985018),
    y = n(767091);

function O(e, t, n) {
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

function A(e) {
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
                O(e, t, n[t]);
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

function S(e, t) {
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let C = 20,
    N = 18,
    R = 77,
    w = {
        tension: 800,
        friction: 24,
    };

function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
    return {
        "--custom-emoji-sprite-size": "".concat(t, "px"),
        "--custom-emoji-sprite-row": Math.floor(e / C),
        "--custom-emoji-sprite-col": e % C,
    };
}

function D(e) {
    let {
            className: t,
            renderButtonContents: n,
            active: a,
            onMouseEnter: c,
            onMouseLeave: u,
            onContextMenu: p,
            onFocus: h,
            spriteClassName: g,
            spriteSize: b,
            ref: O,
        } = e,
        v = I(e, [
            "className",
            "renderButtonContents",
            "active",
            "onMouseEnter",
            "onMouseLeave",
            "onContextMenu",
            "onFocus",
            "spriteClassName",
            "spriteSize",
            "ref",
        ]),
        [T, C] = i.useState(!1),
        [N, D] = i.useState(50),
        x = T || a,
        L = (0, m.t)(y, "emojiButton", x ? "Hovered" : "Normal"),
        j = P(N, b),
        M = i.useCallback(() => {
            if (x) return;
            let e = Math.floor(Math.random() * R);
            C(!0), D(e), (0, _.K)(E.Vl.EmojiButtonMouseEntered);
        }, [x, C, D]),
        k = i.useCallback(() => {
            C(!1);
        }, [C]),
        U = i.useCallback(() => (0, _.K)(E.Vl.EmojiButtonFocused), []),
        G = (0, l.bG)([f.A], () => f.A.useReducedMotion);
    return (0, r.jsx)(
        d.DUT,
        S(
            A(
                {
                    innerRef: O,
                    className: s()(L, t),
                    "aria-expanded": a,
                    onMouseEnter: () => {
                        M(), null == c || c();
                    },
                    onMouseOver: M,
                    onMouseLeave: () => {
                        k(), null == u || u();
                    },
                    onFocus: () => {
                        U(), null == h || h();
                    },
                    onContextMenu: p,
                },
                v,
            ),
            {
                children:
                    null != n
                        ? n()
                        : (0, r.jsx)(d.c7X, {
                              config: w,
                              to: {
                                  value: +!!x,
                              },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(o.animated.div, {
                                      className: y.spriteContainer,
                                      style: S(A({}, j), {
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                                      }),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: s()(y.sprite, y.spriteColored, x ? y.active : y.inactive),
                                          }),
                                          (0, r.jsx)("div", {
                                              className: s()(
                                                  y.sprite,
                                                  y.spriteGreyscale,
                                                  x ? y.inactive : y.active,
                                                  {
                                                      [y.reducedMotion]: G,
                                                  },
                                                  g,
                                              ),
                                          }),
                                      ],
                                  });
                              },
                          }),
            },
        ),
    );
}

function x(e) {
    let {
            "aria-label": t = b.intl.string(b.t.lPHwuQ),
            tooltipText: a,
            active: o,
            onClick: _,
            "aria-controls": m,
            ref: E,
            keyboardShortcut: O,
            canShowNUXPremiumTooltip: v = !1,
        } = e,
        S = I(e, [
            "aria-label",
            "tooltipText",
            "active",
            "onClick",
            "aria-controls",
            "ref",
            "keyboardShortcut",
            "canShowNUXPremiumTooltip",
        ]),
        T = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        C = (0, h.k0)(),
        [N, R] = (0, p.kn)(C ? [c.M.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        w = v && N === c.M.TRIAL_NUX_EMOJI_BUTTON,
        P = !o && w,
        x = i.useRef(null),
        L = null != E ? E : x,
        j = () =>
            (0, r.jsx)(
                D,
                A(
                    {
                        ref: L,
                        onMouseLeave: () => {
                            w && R(g.i.USER_DISMISS);
                        },
                        onClick: (e) => {
                            null == _ || _(e);
                        },
                        "aria-label": t,
                        "aria-controls": m,
                        active: o,
                        spriteClassName: w ? y.spritePremiumColored : void 0,
                    },
                    S,
                ),
            );
    return null == a
        ? j()
        : P
          ? (0, r.jsx)(u.un, {
                targetElementRef: L,
                body: b.intl.format(b.t["/7R4q4"], {}),
                asset: (0, r.jsx)(d.akl, {
                    className: s()(y.premiumUnlockAnimation, {
                        [y.reducedMotion]: T,
                    }),
                    loop: !1,
                    shouldAnimate: !T,
                    pauseAtFrame: T ? 149 : void 0,
                    importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: j(),
            })
          : (0, r.jsx)(u.m_, {
                targetElementRef: L,
                shouldShow: !0,
                text: a,
                keyboardShortcut: O,
                children: j(),
            });
}
