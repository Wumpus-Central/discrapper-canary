n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(621956),
    o = n(265872),
    c = n(442433),
    u = n(688810),
    d = n(384059),
    f = n(480890),
    p = n(160761),
    h = n(421773),
    b = n(536432),
    g = n(674168),
    m = n(989799),
    A = n(173660),
    y = n(430452),
    O = n(246356),
    j = n(709562),
    v = n(376086),
    x = n(985018);

function E(e) {
    let { channel: t, themeable: E, whichPopoutIsOpen: _, setWhichPopoutIsOpen: C } = e,
        { parentAnalyticsLocation: S } = (0, u.Ay)(),
        {
            Component: I,
            play: N,
            events: { onMouseEnter: T, onMouseLeave: P },
        } = (0, s.E)(),
        w = t.getGuildId(),
        { mute: R, suppress: D } = (0, A.A)(t),
        M = (0, i.bG)([y.A], () => y.A.isDeaf()),
        L = R || D || M,
        G = (0, b.VE)({
            isSoundboardButtonDisabled: L,
        }),
        [k, U] = (0, p.DP)(G),
        { analyticsLocations: V } = (0, u.Ay)(),
        { isHovered: F, setIsHovered: H, onMouseEnter: B, onMouseLeave: K } = (0, h.A)(200, 300);

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
                                sourceAnalyticsLocations: V,
                            },
                            t,
                        )),
                        (l = l =
                            {
                                onInteraction: (0, f.s)("SoundboardContextMenu", S),
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
            _ === v.P.SOUNDBOARD
                ? (null == C || C(void 0), K())
                : (null != _ ? (N(), B()) : N(), null == C || C(v.P.SOUNDBOARD));
    }
    let Y = l.useRef(null);
    return (0, r.jsx)(o.Y, {
        targetElementRef: Y,
        shouldShow: (F && (_ === v.P.SOUNDBOARD || null == _)) || _ === v.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            H(!1), null == C || C(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return L
                ? null
                : (0, r.jsx)(O.A, {
                      children: (0, r.jsx)("div", {
                          onMouseEnter: B,
                          onMouseLeave: K,
                          children: (0, r.jsx)(m.A, {
                              guildId: w,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  k === a.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(g.m, {
                                      onClose: n,
                                      markAsDismissed: U,
                                  }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, r.jsx)(j.l, {
                ref: Y,
                isTrayButton: !0,
                themeable: E,
                label: R
                    ? x.intl.string(x.t["Ox4/zU"])
                    : D
                      ? x.intl.string(x.t["+YBKYI"])
                      : M
                        ? x.intl.string(x.t.X1lQli)
                        : void 0,
                iconComponent: I,
                disabled: L,
                onContextMenu: W,
                onClick: z,
                onMouseEnter: () => {
                    B(), T();
                },
                onMouseLeave: () => {
                    null == _ && (K(), P());
                },
                isActive: F || _ === v.P.SOUNDBOARD,
                color: F || _ === v.P.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
