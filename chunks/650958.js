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
    var t;
    let {
            deviceType: n,
            analyticsLocations: o,
            asSubmenu: u = !1,
            onDeviceSelect: f,
            showAllDevices: _ = !1,
            selectedDeviceId: g,
            menuGroupOverrideProps: E,
            menuItemOverrideProps: b,
            computeMenuRadioItemOverrideProps: y,
        } = e,
        { setDevice: O, getLabel: v, getLocation: S } = h(n),
        [I, T] = i.useState(_),
        C = S(o[o.length - 1]),
        [A, N] = (0, l.Ls)(n, { location: C }),
        P = I ? A.concat(N) : A,
        { id: R, name: w } = (0, l.p6)(n),
        D = null != g ? g : R,
        x = i.useMemo(
            () =>
                A.concat(N).find((e) => {
                    let { id: t } = e;
                    return t === D;
                }),
            [A, N, D],
        ),
        L = P.map((e) => {
            let t,
                { id: i, disabled: s, name: c } = e,
                u = c,
                d = (0, l.rX)(c);
            return (
                null != d && ((u = d.prefix), (t = d.subName)),
                (0, r.jsx)(
                    a.k5B,
                    p(
                        {
                            id: "".concat(n, "-").concat(i),
                            group: "".concat(n, "-devices"),
                            disabled: s,
                            label: u,
                            subtext:
                                null != t &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: t,
                                }),
                            checked: i === D,
                            action: () => {
                                var e;
                                (null == (e = null == f ? void 0 : f(i)) || e) && O(i, { analyticsLocations: o });
                            },
                        },
                        null == y ? void 0 : y(i),
                    ),
                    "".concat(n, "-").concat(i),
                )
            );
        }),
        j = (0, r.jsx)(a.sNh, {
            id: "SHOW_MORE",
            label: d.intl.string(d.t.E99UMh),
            dontCloseOnAction: !0,
            action: () => {
                T(!0),
                    s.default.track(c.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                        device_type: n,
                        location: C,
                        shown_device_count: A.length,
                        hidden_device_count: N.length,
                        location_stack: o,
                    });
            },
        }),
        M = !I && (null == N ? void 0 : N.length) > 0;
    return u
        ? (0, r.jsxs)(
              a.sNh,
              m(
                  p(
                      {
                          id: "".concat(n, "-devices"),
                          label: v(),
                          subtext: null != (t = null == x ? void 0 : x.name) ? t : w,
                      },
                      b,
                  ),
                  {
                      children: [L, M && j],
                  },
              ),
          )
        : (0, r.jsxs)(
              a.kSQ,
              m(p({ label: v() }, E), {
                  children: [L, M && j],
              }),
          );
}
