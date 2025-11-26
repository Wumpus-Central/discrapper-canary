n.d(t, {
    Z: () => x,
    u: () => P,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(790519),
    l = n(442837),
    c = n(704215),
    u = n(681715),
    d = n(481060),
    f = n(607070),
    _ = n(243778),
    p = n(255963),
    h = n(140465),
    m = n(153066),
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
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
    R = 77,
    P = {
        tension: 800,
        friction: 24,
    },
    D = () => {
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
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
    return {
        "--custom-emoji-sprite-size": "".concat(t, "px"),
        "--custom-emoji-sprite-row": Math.floor(e / C),
        "--custom-emoji-sprite-col": e % C,
    };
}
function L(e) {
    var {
            className: t,
            renderButtonContents: n,
            active: a,
            onMouseEnter: c,
            onMouseLeave: u,
            onContextMenu: _,
            onFocus: h,
            spriteClassName: g,
            spriteSize: b,
            ref: O,
        } = e,
        I = S(e, [
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
        [N, D] = i.useState(50),
        L = A || a,
        x = (0, m.l)(y, "emojiButton", L ? "Hovered" : "Normal"),
        M = w(N, b),
        k = i.useCallback(() => {
            if (L) return;
            let e = Math.floor(Math.random() * R);
            C(!0), D(e), (0, p.x)(E.qR.EmojiButtonMouseEntered);
        }, [L, C, D]),
        j = i.useCallback(() => {
            C(!1);
        }, [C]),
        U = i.useCallback(() => (0, p.x)(E.qR.EmojiButtonFocused), []),
        G = (0, l.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsx)(
        d.P3F,
        T(
            v(
                {
                    innerRef: O,
                    className: o()(x, t),
                    "aria-expanded": a,
                    onMouseEnter: () => {
                        k(), null == c || c();
                    },
                    onMouseOver: k,
                    onMouseLeave: () => {
                        j(), null == u || u();
                    },
                    onFocus: () => {
                        U(), null == h || h();
                    },
                    onContextMenu: _,
                },
                I,
            ),
            {
                children:
                    null != n
                        ? n()
                        : (0, r.jsx)(d.AMe, {
                              config: P,
                              to: { value: +!!L },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(s.animated.div, {
                                      className: y.spriteContainer,
                                      style: T(v({}, M), {
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                                      }),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: o()(y.sprite, y.spriteColored, L ? y.active : y.inactive),
                                          }),
                                          (0, r.jsx)("div", {
                                              className: o()(
                                                  y.sprite,
                                                  y.spriteGreyscale,
                                                  L ? y.inactive : y.active,
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
            tooltipText: n,
            active: a,
            onClick: o,
            "aria-controls": s,
            ref: l,
            keyboardShortcut: f,
            canShowNUXPremiumTooltip: p = !1,
        } = e,
        m = S(e, [
            "aria-label",
            "tooltipText",
            "active",
            "onClick",
            "aria-controls",
            "ref",
            "keyboardShortcut",
            "canShowNUXPremiumTooltip",
        ]);
    let E = (0, h.B4)(),
        [O, I] = (0, _.US)(E ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        T = p && O === c.z.TRIAL_NUX_EMOJI_BUTTON,
        A = !a && T,
        C = i.useRef(null),
        N = null != l ? l : C,
        R = (e) =>
            (0, r.jsx)(
                L,
                v(
                    {
                        ref: N,
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: () => {
                            var t;
                            T && I(g.L.USER_DISMISS), null == (t = e.onMouseLeave) || t.call(e);
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
                        spriteClassName: T ? y.spritePremiumColored : void 0,
                    },
                    m,
                ),
            );
    return null == n
        ? R({})
        : A
          ? (0, r.jsx)(d.aML, {
                "data-migration-pending": !0,
                targetElementRef: N,
                text: () => (0, r.jsx)(D, {}),
                "aria-label": b.intl.formatToMarkdownString(b.t["/7R4q4"], {}),
                position: "top",
                shouldShow: !0,
                tooltipClassName: y.premiumTooltip,
                tooltipContentClassName: y.premiumTooltipContainer,
                children: (e) => R(e),
            })
          : (0, r.jsx)(u.u, {
                targetElementRef: N,
                shouldShow: !0,
                text: n,
                keyboardShortcut: f,
                children: R({}),
            });
}
