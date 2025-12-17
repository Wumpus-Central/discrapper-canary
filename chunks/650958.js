n.d(t, { M: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    return {
        [u.h7.AUDIO_INPUT]: {
            setDevice: o.Z.setInputDevice,
            getLabel: () => d.intl.string(d.t.ElbIXN),
            getLocation: (e) => "".concat(e, ".useInputDeviceMenuItems"),
        },
        [u.h7.AUDIO_OUTPUT]: {
            setDevice: o.Z.setOutputDevice,
            getLabel: () => d.intl.string(d.t["6Ww0iH"]),
            getLocation: (e) => "".concat(e, ".useOutputDeviceMenuItems"),
        },
        [u.h7.VIDEO_INPUT]: {
            setDevice: o.Z.setVideoDevice,
            getLabel: () => d.intl.string(d.t.F122Gz),
            getLocation: (e) => "".concat(e, ".useVideoDeviceMenuItems"),
        },
    }[e];
}
function g(e) {
    let {
            deviceType: t,
            analyticsLocations: n,
            asSubmenu: o = !1,
            onDeviceSelect: u,
            showAllDevices: f = !1,
            selectedDeviceId: _,
            menuGroupOverrideProps: g,
            menuItemOverrideProps: E,
            computeMenuRadioItemOverrideProps: b,
        } = e,
        { setDevice: y, getLabel: O, getLocation: v } = h(t),
        [S, I] = i.useState(f),
        T = v(n[n.length - 1]),
        [C, A] = (0, l.Ls)(t, { location: T }),
        N = S ? C.concat(A) : C,
        { id: P, name: R } = (0, l.p6)(t),
        w = null != _ ? _ : P,
        D = N.map((e) => {
            let i,
                { id: o, disabled: s, name: c } = e,
                d = c,
                f = (0, l.rX)(c);
            return (
                null != f && ((d = f.prefix), (i = f.subName)),
                (0, r.jsx)(
                    a.k5B,
                    p(
                        {
                            id: "".concat(t, "-").concat(o),
                            group: "".concat(t, "-devices"),
                            disabled: s,
                            label: d,
                            subtext:
                                null != i &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: i,
                                }),
                            checked: o === w,
                            action: () => {
                                var e;
                                (null == (e = null == u ? void 0 : u(o)) || e) && y(o, { analyticsLocations: n });
                            },
                        },
                        null == b ? void 0 : b(o),
                    ),
                    "".concat(t, "-").concat(o),
                )
            );
        }),
        x = (0, r.jsx)(a.sNh, {
            id: "SHOW_MORE",
            label: d.intl.string(d.t.E99UMh),
            dontCloseOnAction: !0,
            action: () => {
                I(!0),
                    s.default.track(c.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                        device_type: t,
                        location: T,
                        shown_device_count: C.length,
                        hidden_device_count: A.length,
                        location_stack: n,
                    });
            },
        }),
        L = !S && (null == A ? void 0 : A.length) > 0;
    return o
        ? (0, r.jsxs)(
              a.sNh,
              m(
                  p(
                      {
                          id: "".concat(t, "-devices"),
                          label: O(),
                          subtext: R,
                      },
                      E,
                  ),
                  {
                      children: [D, L && x],
                  },
              ),
          )
        : (0, r.jsxs)(
              a.kSQ,
              m(p({ label: O() }, g), {
                  children: [D, L && x],
              }),
          );
}
