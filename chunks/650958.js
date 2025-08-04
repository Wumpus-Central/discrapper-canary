(n.d(t, { M: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(846027),
    s = n(626135),
    l = n(72897),
    c = n(981631),
    u = n(65154),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    return {
        [u.h7.AUDIO_INPUT]: {
            setDevice: o.Z.setInputDevice,
            getLabel: () => d.intl.string(d.t.ElbIXF),
            getLocation: (e) => ''.concat(e, '.useInputDeviceMenuItems')
        },
        [u.h7.AUDIO_OUTPUT]: {
            setDevice: o.Z.setOutputDevice,
            getLabel: () => d.intl.string(d.t['6Ww0iI']),
            getLocation: (e) => ''.concat(e, '.useOutputDeviceMenuItems')
        },
        [u.h7.VIDEO_INPUT]: {
            setDevice: o.Z.setVideoDevice,
            getLabel: () => d.intl.string(d.t.F122Gx),
            getLocation: (e) => ''.concat(e, '.useVideoDeviceMenuItems')
        }
    }[e];
}
function g(e) {
    let { deviceType: t, analyticsLocations: n, asSubmenu: o = !1, onDeviceSelect: u, showAllDevices: f = !1, selectedDeviceId: p, menuGroupOverrideProps: g, menuItemOverrideProps: E, computeMenuRadioItemOverrideProps: b } = e,
        { setDevice: y, getLabel: O, getLocation: v } = m(t),
        [I, T] = i.useState(f),
        S = v(n[n.length - 1]),
        [A, N] = (0, l.L)(t, { location: S }),
        C = I ? A.concat(N) : A,
        { id: R, name: P } = (0, l.p)(t),
        w = null != p ? p : R,
        D = C.map((e) => {
            let { id: i, disabled: o, name: s } = e;
            return (0, r.jsx)(
                a.k5B,
                _(
                    {
                        id: ''.concat(t, '-').concat(i),
                        group: ''.concat(t, '-devices'),
                        disabled: o,
                        label: s,
                        checked: i === w,
                        action: () => {
                            var e;
                            (null == (e = null == u ? void 0 : u(i)) || e) && y(i, { analyticsLocations: n });
                        }
                    },
                    null == b ? void 0 : b(i)
                ),
                ''.concat(t, '-').concat(i)
            );
        }),
        L = (0, r.jsx)(a.sNh, {
            id: 'SHOW_MORE',
            label: d.intl.string(d.t.E99UMj),
            dontCloseOnAction: !0,
            action: () => {
                (T(!0),
                    s.default.track(c.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                        device_type: t,
                        location: S,
                        shown_device_count: A.length,
                        hidden_device_count: N.length,
                        location_stack: n
                    }));
            }
        }),
        x = !I && (null == N ? void 0 : N.length) > 0;
    return o
        ? (0, r.jsxs)(
              a.sNh,
              h(
                  _(
                      {
                          id: ''.concat(t, '-devices'),
                          label: O(),
                          subtext: P
                      },
                      E
                  ),
                  {
                      children: [D, x && L]
                  }
              )
          )
        : (0, r.jsxs)(
              a.kSQ,
              h(_({ label: O() }, g), {
                  children: [D, x && L]
              })
          );
}
