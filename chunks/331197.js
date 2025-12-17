n.d(t, { Z: () => j }), n(388685);
var i = n(54381),
    r = n(473749),
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
    C = n(294629),
    y = n(131951),
    v = n(390322),
    x = n(871499),
    O = n(127379),
    E = n(388032);
function j(e) {
    let { channel: t, themeable: j, whichPopoutIsOpen: S, setWhichPopoutIsOpen: _ } = e,
        { parentAnalyticsLocation: P } = (0, u.ZP)(),
        {
            Component: I,
            play: Z,
            events: { onMouseEnter: T, onMouseLeave: N },
        } = (0, o.j)(),
        A = t.getGuildId(),
        { mute: w, suppress: M } = (0, C.Z)(t),
        R = (0, l.e7)([y.Z], () => y.Z.isDeaf()),
        L = w || M || R,
        D = (0, m.sR)({ isSoundboardButtonDisabled: L }),
        [k, U] = (0, f.cv)(D),
        { analyticsLocations: V } = (0, u.ZP)(),
        { isHovered: F, setIsHovered: H, onMouseEnter: B, onMouseLeave: G } = (0, h.Z)(200, 300);
    function z(e) {
        null != A &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                return (t) => {
                    var n, r;
                    return (0, i.jsx)(
                        e,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                guildId: A,
                                sourceAnalyticsLocations: V,
                            },
                            t,
                        )),
                        (r = r = { onInteraction: (0, p.u)("SoundboardContextMenu", P) }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    );
                };
            });
    }
    function W() {
        (0, d.v)(P, d.d.SOUNDBOARD),
            S === O.D.SOUNDBOARD
                ? (null == _ || _(void 0), G())
                : (null != S ? (Z(), B()) : Z(), null == _ || _(O.D.SOUNDBOARD));
    }
    let q = r.useRef(null);
    return (0, i.jsx)(s.y, {
        targetElementRef: q,
        shouldShow: (F && (S === O.D.SOUNDBOARD || null == S)) || S === O.D.SOUNDBOARD,
        animation: s.y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            H(!1), null == _ || _(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return L
                ? null
                : (0, i.jsx)(v.Z, {
                      children: (0, i.jsx)("div", {
                          onMouseEnter: B,
                          onMouseLeave: G,
                          children: (0, i.jsx)(b.Z, {
                              guildId: A,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  k === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(g.o, {
                                      onClose: n,
                                      markAsDismissed: U,
                                  }),
                              analyticsSource: "action bar button",
                          }),
                      }),
                  });
        },
        children: () =>
            (0, i.jsx)(x.d, {
                ref: q,
                isTrayButton: !0,
                themeable: j,
                label: w
                    ? E.intl.string(E.t["Ox4/zU"])
                    : M
                      ? E.intl.string(E.t["+YBKYI"])
                      : R
                        ? E.intl.string(E.t.X1lQli)
                        : void 0,
                iconComponent: I,
                disabled: L,
                onContextMenu: z,
                onClick: W,
                onMouseEnter: () => {
                    B(), T();
                },
                onMouseLeave: () => {
                    null == S && (G(), N());
                },
                isActive: F || S === O.D.SOUNDBOARD,
                color: F || S === O.D.SOUNDBOARD ? "primaryDark" : void 0,
            }),
    });
}
