n.d(t, {
    H: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(827343),
    o = n(954571),
    l = n(74848),
    c = n(652215),
    u = n(731854),
    d = n(985018);

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

function h(e, t) {
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

function m(e) {
    return {
        [u.oh.AUDIO_INPUT]: {
            setDevice: s.A.setInputDevice,
            getLabel: () => d.intl.string(d.t.ElbIXN),
            getLocation: (e) => "".concat(e, ".useInputDeviceMenuItems"),
        },
        [u.oh.AUDIO_OUTPUT]: {
            setDevice: s.A.setOutputDevice,
            getLabel: () => d.intl.string(d.t["6Ww0iH"]),
            getLocation: (e) => "".concat(e, ".useOutputDeviceMenuItems"),
        },
        [u.oh.VIDEO_INPUT]: {
            setDevice: s.A.setVideoDevice,
            getLabel: () => d.intl.string(d.t.F122Gz),
            getLocation: (e) => "".concat(e, ".useVideoDeviceMenuItems"),
        },
    }[e];
}

function g(e) {
    var t;
    let {
            deviceType: n,
            analyticsLocations: s,
            asSubmenu: u = !1,
            onDeviceSelect: f,
            showAllDevices: _ = !1,
            selectedDeviceId: g,
            menuGroupOverrideProps: E,
            menuItemOverrideProps: y,
            computeMenuRadioItemOverrideProps: b,
        } = e,
        { setDevice: O, getLabel: v, getLocation: A } = m(n),
        [I, S] = i.useState(_),
        T = A(s[s.length - 1]),
        [C, N] = (0, l.tR)(n, {
            location: T,
        }),
        w = I ? C.concat(N) : C,
        { id: R, name: P } = (0, l.x5)(n),
        D = null != g ? g : R,
        x = i.useMemo(
            () =>
                C.concat(N).find((e) => {
                    let { id: t } = e;
                    return t === D;
                }),
            [C, N, D],
        ),
        L = w.map((e) => {
            let t,
                { id: i, disabled: o, name: c } = e,
                u = c,
                d = (0, l.d)(c);
            return (
                null != d && ((u = d.prefix), (t = d.subName)),
                (0, r.jsx)(
                    a.iDA,
                    p(
                        {
                            id: "".concat(n, "-").concat(i),
                            group: "".concat(n, "-devices"),
                            disabled: o,
                            label: u,
                            subtext: t,
                            checked: i === D,
                            action: () => {
                                var e;
                                (null == (e = null == f ? void 0 : f(i)) || e) &&
                                    O(i, {
                                        analyticsLocations: s,
                                    });
                            },
                        },
                        null == b ? void 0 : b(i),
                    ),
                    "".concat(n, "-").concat(i),
                )
            );
        }),
        j = (0, r.jsx)(a.Drp, {
            id: "SHOW_MORE",
            label: d.intl.string(d.t.E99UMh),
            dontCloseOnAction: !0,
            action: () => {
                S(!0),
                    o.default.track(c.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
                        device_type: n,
                        location: T,
                        shown_device_count: C.length,
                        hidden_device_count: N.length,
                        location_stack: s,
                    });
            },
        }),
        M = !I && (null == N ? void 0 : N.length) > 0;
    return u
        ? (0, r.jsxs)(
              a.Drp,
              h(
                  p(
                      {
                          id: "".concat(n, "-devices"),
                          label: v(),
                          subtext: null != (t = null == x ? void 0 : x.name) ? t : P,
                      },
                      y,
                  ),
                  {
                      children: [L, M && j],
                  },
              ),
          )
        : (0, r.jsxs)(
              a.rXV,
              h(
                  p(
                      {
                          label: v(),
                      },
                      E,
                  ),
                  {
                      children: [L, M && j],
                  },
              ),
          );
}
