n.d(t, {
    Z: () => x,
    u: () => R,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    l = n(442837),
    c = n(704215),
    u = n(681715),
    d = n(481060),
    f = n(607070),
    p = n(243778),
    _ = n(255963),
    m = n(140465),
    h = n(153066),
    g = n(921944),
    E = n(185923),
    b = n(388032),
    y = n(940003);
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
function v(e) {
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
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = 20,
    N = 18,
    P = 77,
    R = {
        tension: 800,
        friction: 24,
    };
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
    return {
        "--custom-emoji-sprite-size": "".concat(t, "px"),
        "--custom-emoji-sprite-row": Math.floor(e / A),
        "--custom-emoji-sprite-col": e % A,
    };
}
function D(e) {
    var {
            className: t,
            renderButtonContents: n,
            active: a,
            onMouseEnter: c,
            onMouseLeave: u,
            onContextMenu: p,
            onFocus: m,
            spriteClassName: g,
            spriteSize: b,
            ref: O,
        } = e,
        S = T(e, [
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
        ]);
    let [C, A] = i.useState(!1),
        [N, D] = i.useState(50),
        x = C || a,
        L = (0, h.l)(y, "emojiButton", x ? "Hovered" : "Normal"),
        j = w(N, b),
        M = i.useCallback(() => {
            if (x) return;
            let e = Math.floor(Math.random() * P);
            A(!0), D(e), (0, _.x)(E.qR.EmojiButtonMouseEntered);
        }, [x, A, D]),
        k = i.useCallback(() => {
            A(!1);
        }, [A]),
        U = i.useCallback(() => (0, _.x)(E.qR.EmojiButtonFocused), []),
        G = (0, l.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsx)(
        d.P3F,
        I(
            v(
                {
                    innerRef: O,
                    className: o()(L, t),
                    "aria-expanded": a,
                    onMouseEnter: () => {
                        M(), null == c || c();
                    },
                    onMouseOver: M,
                    onMouseLeave: () => {
                        k(), null == u || u();
                    },
                    onFocus: () => {
                        U(), null == m || m();
                    },
                    onContextMenu: p,
                },
                S,
            ),
            {
                children:
                    null != n
                        ? n()
                        : (0, r.jsx)(d.AMe, {
                              config: R,
                              to: { value: +!!x },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(s.animated.div, {
                                      className: y.spriteContainer,
                                      style: I(v({}, j), {
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                                      }),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: o()(y.sprite, y.spriteColored, x ? y.active : y.inactive),
                                          }),
                                          (0, r.jsx)("div", {
                                              className: o()(
                                                  y.sprite,
                                                  y.spriteGreyscale,
                                                  x ? y.inactive : y.active,
                                                  { [y.reducedMotion]: G },
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
    var {
            "aria-label": t = b.intl.string(b.t.lPHwuQ),
            tooltipText: a,
            active: s,
            onClick: _,
            "aria-controls": h,
            ref: E,
            keyboardShortcut: O,
            canShowNUXPremiumTooltip: S = !1,
        } = e,
        I = T(e, [
            "aria-label",
            "tooltipText",
            "active",
            "onClick",
            "aria-controls",
            "ref",
            "keyboardShortcut",
            "canShowNUXPremiumTooltip",
        ]);
    let C = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        A = (0, m.B4)(),
        [N, P] = (0, p.US)(A ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        R = S && N === c.z.TRIAL_NUX_EMOJI_BUTTON,
        w = !s && R,
        x = i.useRef(null),
        L = null != E ? E : x,
        j = () =>
            (0, r.jsx)(
                D,
                v(
                    {
                        ref: L,
                        onMouseLeave: () => {
                            R && P(g.L.USER_DISMISS);
                        },
                        onClick: (e) => {
                            null == _ || _(e);
                        },
                        "aria-label": t,
                        "aria-controls": h,
                        active: s,
                        spriteClassName: R ? y.spritePremiumColored : void 0,
                    },
                    I,
                ),
            );
    return null == a
        ? j()
        : w
          ? (0, r.jsx)(u.i_, {
                targetElementRef: L,
                body: b.intl.format(b.t["/7R4q4"], {}),
                asset: (0, r.jsx)(d.Fmz, {
                    className: o()(y.premiumUnlockAnimation, { [y.reducedMotion]: C }),
                    loop: !1,
                    shouldAnimate: !C,
                    pauseAtFrame: C ? 149 : void 0,
                    importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
                }),
                position: "top",
                shouldShow: !0,
                children: j(),
            })
          : (0, r.jsx)(u.u, {
                targetElementRef: L,
                shouldShow: !0,
                text: a,
                keyboardShortcut: O,
                children: j(),
            });
}
