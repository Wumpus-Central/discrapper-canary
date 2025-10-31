n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(704215),
    o = n(582019),
    s = n(235874),
    c = n(239091),
    u = n(906732),
    d = n(522651),
    p = n(795318),
    f = n(706140),
    h = n(579185),
    m = n(242291),
    g = n(792165),
    b = n(603074),
    _ = n(294629),
    y = n(131951),
    C = n(390322),
    v = n(871499),
    O = n(127379),
    x = n(388032);
function E(e) {
    let { channel: t, themeable: E, whichPopoutIsOpen: j, setWhichPopoutIsOpen: S } = e,
        { parentAnalyticsLocation: P } = (0, u.ZP)(),
        {
            Component: I,
            play: Z,
            events: { onMouseEnter: T, onMouseLeave: N },
        } = (0, o.j)(),
        A = t.getGuildId(),
        { mute: w, suppress: M } = (0, _.Z)(t),
        R = (0, l.e7)([y.Z], () => y.Z.isDeaf()),
        D = w || M || R,
        L = (0, m.sR)({ isSoundboardButtonDisabled: D }),
        [k, U] = (0, f.cv)(L),
        { analyticsLocations: B } = (0, u.ZP)(),
        { isHovered: F, setIsHovered: V, onMouseEnter: H, onMouseLeave: G } = (0, h.Z)(200, 300);
    function W(e) {
        null != A &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                return (t) => {
                    var n, i;
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
                                guildId: A,
                                sourceAnalyticsLocations: B,
                            },
                            t,
                        )),
                        (i = i = { onInteraction: (0, p.u)("SoundboardContextMenu", P) }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    );
                };
            });
    }
    function z() {
        (0, d.v)(P, d.d.SOUNDBOARD),
            j === O.D.SOUNDBOARD
                ? (null == S || S(void 0), G())
                : (null != j ? (Z(), H()) : Z(), null == S || S(O.D.SOUNDBOARD));
    }
    let q = i.useRef(null);
    return (0, r.jsx)(s.y, {
        targetElementRef: q,
        shouldShow: (F && (j === O.D.SOUNDBOARD || null == j)) || j === O.D.SOUNDBOARD,
        animation: s.y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            V(!1), null == S || S(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return D
                ? null
                : (0, r.jsx)(C.Z, {
                      children: (0, r.jsx)("div", {
                          onMouseEnter: H,
                          onMouseLeave: G,
                          children: (0, r.jsx)(b.Z, {
                              guildId: A,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  k === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(g.o, {
                                      onClose: n,
                                      markAsDismissed: U,
                                  }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, r.jsx)(v.d, {
                ref: q,
                isTrayButton: !0,
                themeable: E,
                label: w
                    ? x.intl.string(x.t["Ox4/zU"])
                    : M
                      ? x.intl.string(x.t["+YBKYI"])
                      : R
                        ? x.intl.string(x.t.X1lQli)
                        : void 0,
                iconComponent: I,
                disabled: D,
                onContextMenu: W,
                onClick: z,
                onMouseEnter: () => {
                    H(), T();
                },
                onMouseLeave: () => {
                    null == j && (G(), N());
                },
                isActive: F || j === O.D.SOUNDBOARD,
                color: F || j === O.D.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
