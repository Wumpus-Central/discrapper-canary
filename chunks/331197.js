(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(704215),
    s = n(582019),
    l = n(235874),
    c = n(239091),
    u = n(906732),
    d = n(522651),
    f = n(795318),
    _ = n(706140),
    p = n(579185),
    h = n(242291),
    m = n(792165),
    g = n(603074),
    E = n(294629),
    b = n(131951),
    y = n(390322),
    O = n(871499),
    v = n(127379),
    I = n(388032);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 300,
    R = 200;
function P(e) {
    let { channel: t, themeable: T, whichPopoutIsOpen: A, setWhichPopoutIsOpen: P } = e,
        { parentAnalyticsLocation: w } = (0, u.ZP)(),
        {
            Component: D,
            play: L,
            events: { onMouseEnter: x, onMouseLeave: M }
        } = (0, s.j)(),
        k = t.getGuildId(),
        { mute: j, suppress: U } = (0, E.Z)(t),
        G = (0, o.e7)([b.Z], () => b.Z.isDeaf()),
        B = j || U || G,
        Z = (0, h.sR)({ isSoundboardButtonDisabled: B }),
        [F, V] = (0, _.cv)(Z),
        { analyticsLocations: H } = (0, u.ZP)(),
        { isHovered: Y, setIsHovered: W, onMouseEnter: K, onMouseLeave: z } = (0, p.Z)(R, C);
    function q() {
        return j ? I.intl.string(I.t['Ox4/zc']) : U ? I.intl.string(I.t['+YBKYG']) : G ? I.intl.string(I.t.X1lQlp) : void 0;
    }
    function X(e) {
        null != k &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        N(
                            S(
                                {
                                    guildId: k,
                                    sourceAnalyticsLocations: H
                                },
                                t
                            ),
                            { onInteraction: (0, f.u)('SoundboardContextMenu', w) }
                        )
                    );
            });
    }
    function Q() {
        ((0, d.v)(w, d.d.SOUNDBOARD), A === v.D.SOUNDBOARD ? (null == P || P(void 0), z()) : (null != A ? (L(), K()) : L(), null == P || P(v.D.SOUNDBOARD)));
    }
    let J = i.useRef(null);
    return (0, r.jsx)(l.y, {
        targetElementRef: J,
        shouldShow: (Y && (A === v.D.SOUNDBOARD || null == A)) || A === v.D.SOUNDBOARD,
        animation: l.y.Animation.FADE,
        animationPosition: 'top',
        position: 'top',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            (W(!1), null == P || P(void 0));
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return B
                ? null
                : (0, r.jsx)(y.Z, {
                      children: (0, r.jsx)('div', {
                          onMouseEnter: K,
                          onMouseLeave: z,
                          children: (0, r.jsx)(g.Z, {
                              guildId: k,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  F === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(m.o, {
                                      onClose: n,
                                      markAsDismissed: V
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      })
                  });
        },
        children: () =>
            (0, r.jsx)(O.d, {
                ref: J,
                isTrayButton: !0,
                themeable: T,
                label: q(),
                iconComponent: D,
                disabled: B,
                onContextMenu: X,
                onClick: Q,
                onMouseEnter: () => {
                    (K(), x());
                },
                onMouseLeave: () => {
                    null == A && (z(), M());
                },
                isActive: Y || A === v.D.SOUNDBOARD,
                color: Y || A === v.D.SOUNDBOARD ? 'primaryDark' : void 0
            })
    });
}
