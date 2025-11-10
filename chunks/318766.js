n.d(t, {
    Z: () => x,
    u: () => P,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(509442),
    l = n(442837),
    c = n(704215),
    u = n(681715),
    d = n(481060),
    f = n(679080),
    _ = n(607070),
    p = n(713913),
    h = n(243778),
    m = n(255963),
    g = n(140465),
    E = n(153066),
    b = n(921944),
    y = n(185923),
    O = n(388032),
    v = n(162600);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 20,
    N = 18,
    R = 77,
    P = {
        tension: 800,
        friction: 24,
    },
    w = () => {
        let e = (0, l.e7)([_.Z], () => _.Z.useReducedMotion);
        return (0, r.jsxs)("div", {
            className: v.premiumTooltipContainer,
            children: [
                (0, r.jsx)(d.Fmz, {
                    className: o()(v.premiumUnlockAnimation, { [v.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    className: v.premiumTooltipText,
                    children: O.intl.format(O.t["/7R4q4"], {}),
                }),
            ],
        });
    };
function D(e) {
    return {
        "--custom-emoji-sprite-size": "".concat(N, "px"),
        "--custom-emoji-sprite-row": Math.floor(e / C),
        "--custom-emoji-sprite-col": e % C,
    };
}
let x = function (e) {
    let {
            tabIndex: t,
            className: n,
            renderButtonContents: a,
            active: I,
            onClick: T,
            "aria-controls": C,
            focusProps: N,
            ref: x,
            allowKeybindHint: L,
        } = e,
        [M, j] = i.useState(!1),
        [k, U] = i.useState(50),
        G = M || I,
        B = (0, E.l)(v, "emojiButton", G ? "Hovered" : "Normal"),
        Z = D(k),
        F = i.useCallback(() => {
            if (G) return;
            let e = Math.floor(Math.random() * R);
            j(!0), U(e), (0, m.x)(y.qR.EmojiButtonMouseEntered);
        }, [G, j, U]),
        V = i.useCallback(() => {
            j(!1);
        }, [j]),
        H = i.useCallback(() => (0, m.x)(y.qR.EmojiButtonFocused), []),
        Y = (0, g.B4)(),
        [W, K] = (0, h.US)(Y ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], void 0, !0),
        z = W === c.z.TRIAL_NUX_EMOJI_BUTTON,
        q = !I && z,
        X = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        Q = i.useRef(null),
        J = null != x ? x : Q,
        $ = (0, p.v)(f.S),
        { tooltipsWithKeybinds: ee, expressionsCombinedIntoEmojiButton: et } = p.n.useConfig({
            location: "EmojiButton",
        }),
        en = ee ? O.intl.string(et ? O.t.DSBQ6F : O.t.lPHwuQ) : null,
        er = (e) =>
            (0, r.jsx)(d.P3F, {
                innerRef: J,
                tabIndex: t,
                className: o()(B, n),
                onMouseEnter: () => {
                    var t;
                    F(), null == (t = e.onMouseEnter) || t.call(e);
                },
                onMouseOver: F,
                onMouseLeave: () => {
                    var t;
                    V(), null == (t = e.onMouseLeave) || t.call(e), z && K(b.L.USER_DISMISS);
                },
                onFocus: H,
                onClick: (t) => {
                    var n;
                    null == T || T(t), null == (n = e.onClick) || n.call(e);
                },
                "aria-label": O.intl.string(O.t["59QgaD"]),
                "aria-controls": C,
                "aria-expanded": I,
                "aria-haspopup": "dialog",
                focusProps: N,
                onContextMenu: e.onContextMenu,
                children:
                    null != a
                        ? a()
                        : (0, r.jsx)(d.AMe, {
                              config: P,
                              to: { value: +!!G },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(s.animated.div, {
                                      className: v.spriteContainer,
                                      style: A(S({}, Z), {
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                                      }),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: o()(v.sprite, v.spriteColored, G ? v.active : v.inactive),
                                          }),
                                          (0, r.jsx)("div", {
                                              className: o()(
                                                  v.sprite,
                                                  z ? v.spritePremiumColored : v.spriteGreyscale,
                                                  G ? v.inactive : v.active,
                                                  { [v.reducedMotion]: X },
                                              ),
                                          }),
                                      ],
                                  });
                              },
                          }),
            });
    return q
        ? (0, r.jsx)(d.aML, {
              "data-migration-pending": !0,
              targetElementRef: J,
              text: () => (0, r.jsx)(w, {}),
              "aria-label": O.intl.formatToMarkdownString(O.t["/7R4q4"], {}),
              position: "top",
              shouldShow: !0,
              tooltipClassName: v.premiumTooltip,
              tooltipContentClassName: v.premiumTooltipContainer,
              children: (e) => er(e),
          })
        : null != en
          ? (0, r.jsx)(u.u, {
                targetElementRef: J,
                shouldShow: !0,
                text: en,
                keyboardShortcut: et ? void 0 : L ? $ : void 0,
                children: er({}),
            })
          : er({});
};
