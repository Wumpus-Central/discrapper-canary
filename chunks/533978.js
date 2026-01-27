n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(621956),
    o = n(265872),
    c = n(442433),
    u = n(688810),
    d = n(384059),
    p = n(480890),
    h = n(160761),
    f = n(421773),
    g = n(536432),
    m = n(674168),
    b = n(989799),
    A = n(173660),
    y = n(430452),
    _ = n(246356),
    O = n(709562),
    j = n(376086),
    v = n(985018);

function x(e) {
    let { channel: t, themeable: x, whichPopoutIsOpen: E, setWhichPopoutIsOpen: C } = e,
        { parentAnalyticsLocation: S } = (0, u.Ay)(),
        {
            Component: I,
            play: N,
            events: { onMouseEnter: T, onMouseLeave: P },
        } = (0, a.E)(),
        w = t.getGuildId(),
        { mute: R, suppress: D } = (0, A.A)(t),
        M = (0, i.bG)([y.A], () => y.A.isDeaf()),
        L = R || D || M,
        k = (0, g.VE)({
            isSoundboardButtonDisabled: L,
        }),
        [G, U] = (0, h.DP)(k),
        { analyticsLocations: B } = (0, u.Ay)(),
        { isHovered: V, setIsHovered: F, onMouseEnter: H, onMouseLeave: K } = (0, f.A)(200, 300);

    function W(e) {
        null != w &&
            (0, c.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) => {
                    var n, l;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                guildId: w,
                                sourceAnalyticsLocations: B,
                            },
                            t,
                        )),
                        (l = l =
                            {
                                onInteraction: (0, p.s)("SoundboardContextMenu", S),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                };
            });
    }

    function z() {
        (0, d.X)(S, d.O.SOUNDBOARD),
            E === j.P.SOUNDBOARD
                ? (null == C || C(void 0), K())
                : (null != E ? (N(), H()) : N(), null == C || C(j.P.SOUNDBOARD));
    }
    let Y = l.useRef(null);
    return (0, r.jsx)(o.Y, {
        targetElementRef: Y,
        shouldShow: (V && (E === j.P.SOUNDBOARD || null == E)) || E === j.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            F(!1), null == C || C(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return L
                ? null
                : (0, r.jsx)(_.A, {
                      children: (0, r.jsx)("div", {
                          onMouseEnter: H,
                          onMouseLeave: K,
                          children: (0, r.jsx)(b.A, {
                              guildId: w,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  G === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(m.m, {
                                      onClose: n,
                                      markAsDismissed: U,
                                  }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, r.jsx)(O.l, {
                ref: Y,
                isTrayButton: !0,
                themeable: x,
                label: R
                    ? v.intl.string(v.t["Ox4/zU"])
                    : D
                      ? v.intl.string(v.t["+YBKYI"])
                      : M
                        ? v.intl.string(v.t.X1lQli)
                        : void 0,
                iconComponent: I,
                disabled: L,
                onContextMenu: W,
                onClick: z,
                onMouseEnter: (e) => {
                    T(), "focus" !== e.type && H();
                },
                onMouseLeave: () => {
                    null == E && (K(), P());
                },
                isActive: V || E === j.P.SOUNDBOARD,
                color: V || E === j.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
