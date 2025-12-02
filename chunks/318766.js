n.d(t, {
    Z: () => L,
    u: () => R,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
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
    y = n(345857);
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
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = 20,
    N = 18,
    P = 77,
    R = {
        tension: 800,
        friction: 24,
    },
    w = () => {
        let e = (0, l.e7)([f.Z], () => f.Z.useReducedMotion);
        return (0, r.jsxs)("div", {
            className: y.premiumTooltipContainer,
            children: [
                (0, r.jsx)(d.Fmz, {
                    className: o()(y.premiumUnlockAnimation, { [y.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    className: y.premiumTooltipText,
                    children: b.intl.format(b.t["/7R4q4"], {}),
                }),
            ],
        });
    };
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
    return {
        "--custom-emoji-sprite-size": "".concat(t, "px"),
        "--custom-emoji-sprite-row": Math.floor(e / C),
        "--custom-emoji-sprite-col": e % C,
    };
}
function x(e) {
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
    let [A, C] = i.useState(!1),
        [N, w] = i.useState(50),
        x = A || a,
        L = (0, h.l)(y, "emojiButton", x ? "Hovered" : "Normal"),
        j = D(N, b),
        M = i.useCallback(() => {
            if (x) return;
            let e = Math.floor(Math.random() * P);
            C(!0), w(e), (0, _.x)(E.qR.EmojiButtonMouseEntered);
        }, [x, C, w]),
        k = i.useCallback(() => {
            C(!1);
        }, [C]),
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
function L(e) {
    var {
            "aria-label": t = b.intl.string(b.t.lPHwuQ),
            tooltipText: n,
            active: a,
            onClick: o,
            "aria-controls": s,
            ref: l,
            keyboardShortcut: f,
            canShowNUXPremiumTooltip: _ = !1,
        } = e,
        h = T(e, [
            "aria-label",
            "tooltipText",
            "active",
            "onClick",
            "aria-controls",
            "ref",
            "keyboardShortcut",
            "canShowNUXPremiumTooltip",
        ]);
    let E = (0, m.B4)(),
        [O, S] = (0, p.US)(E ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        I = _ && O === c.z.TRIAL_NUX_EMOJI_BUTTON,
        A = !a && I,
        C = i.useRef(null),
        N = null != l ? l : C,
        P = (e) =>
            (0, r.jsx)(
                x,
                v(
                    {
                        ref: N,
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: () => {
                            var t;
                            I && S(g.L.USER_DISMISS), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: e.onFocus,
                        onBlur: e.onBlur,
                        onClick: (t) => {
                            var n;
                            null == o || o(t), null == (n = e.onClick) || n.call(e);
                        },
                        "aria-label": t,
                        "aria-controls": s,
                        active: a,
                        onContextMenu: e.onContextMenu,
                        spriteClassName: I ? y.spritePremiumColored : void 0,
                    },
                    h,
                ),
            );
    return null == n
        ? P({})
        : A
          ? (0, r.jsx)(d.aML, {
                "data-migration-pending": !0,
                targetElementRef: N,
                text: () => (0, r.jsx)(w, {}),
                "aria-label": b.intl.formatToMarkdownString(b.t["/7R4q4"], {}),
                position: "top",
                shouldShow: !0,
                tooltipClassName: y.premiumTooltip,
                tooltipContentClassName: y.premiumTooltipContainer,
                children: (e) => P(e),
            })
          : (0, r.jsx)(u.u, {
                targetElementRef: N,
                shouldShow: !0,
                text: n,
                keyboardShortcut: f,
                children: P({}),
            });
}
