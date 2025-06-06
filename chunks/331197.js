n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(582019),
    s = n(235874),
    c = n(239091),
    u = n(906732),
    d = n(522651),
    p = n(795318),
    h = n(706140),
    f = n(579185),
    m = n(242291),
    g = n(792165),
    b = n(603074),
    _ = n(294629),
    y = n(131951),
    x = n(390322),
    C = n(871499),
    v = n(127379),
    j = n(388032);
function O(e) {
    let { channel: t, themeable: O, whichPopoutIsOpen: E, setWhichPopoutIsOpen: I } = e,
        { parentAnalyticsLocation: P } = (0, u.ZP)(),
        {
            Component: S,
            play: Z,
            events: { onMouseEnter: N, onMouseLeave: T }
        } = (0, o.j)(),
        A = t.getGuildId(),
        { mute: w, suppress: R } = (0, _.Z)(t),
        M = (0, l.e7)([y.Z], () => y.Z.isDeaf()),
        k = w || R || M,
        L = (0, m.sR)({ isSoundboardButtonDisabled: k }),
        [D, U] = (0, h.cv)(L),
        { analyticsLocations: B } = (0, u.ZP)(),
        { isHovered: F, setIsHovered: G, onMouseEnter: H, onMouseLeave: V } = (0, f.Z)(200, 300);
    function z(e) {
        null != A &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                guildId: A,
                                sourceAnalyticsLocations: B
                            },
                            t
                        )),
                        (i = i = { onInteraction: (0, p.u)('SoundboardContextMenu', P) }),
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
                        n)
                    );
                };
            });
    }
    function W() {
        (0, d.v)(P, d.d.SOUNDBOARD), E === v.D.SOUNDBOARD ? (null == I || I(void 0), V()) : (null != E ? (Z(), H()) : Z(), null == I || I(v.D.SOUNDBOARD));
    }
    let Y = i.useRef(null);
    return (0, r.jsx)(s.y, {
        targetElementRef: Y,
        shouldShow: (F && (E === v.D.SOUNDBOARD || null == E)) || E === v.D.SOUNDBOARD,
        animation: s.y.Animation.FADE,
        animationPosition: 'top',
        position: 'top',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            G(!1), null == I || I(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return k
                ? null
                : (0, r.jsx)(x.Z, {
                      children: (0, r.jsx)('div', {
                          onMouseEnter: H,
                          onMouseLeave: V,
                          children: (0, r.jsx)(b.Z, {
                              guildId: A,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  D === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(g.o, {
                                      onClose: n,
                                      markAsDismissed: U
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      })
                  });
        },
        children: () =>
            (0, r.jsx)(C.d, {
                ref: Y,
                isTrayButton: !0,
                themeable: O,
                label: w ? j.intl.string(j.t['Ox4/zc']) : R ? j.intl.string(j.t['+YBKYG']) : M ? j.intl.string(j.t.X1lQlp) : void 0,
                iconComponent: S,
                disabled: k,
                onContextMenu: z,
                onClick: W,
                onMouseEnter: () => {
                    H(), N();
                },
                onMouseLeave: () => {
                    null == E && (V(), T());
                },
                isActive: F || E === v.D.SOUNDBOARD,
                color: F || E === v.D.SOUNDBOARD ? 'primaryDark' : void 0
            })
    });
}
