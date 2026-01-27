n.d(t, {
    U: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(843282),
    c = n(582754),
    u = n(397927),
    d = n(827343),
    p = n(688810),
    f = n(544028),
    m = n(825468),
    g = n(347481),
    y = n(430452),
    _ = n(954571),
    b = n(74848),
    A = n(652215),
    h = n(731854),
    v = n(985018),
    O = n(534393);
let j = "SHOW_MORE";

function S(e) {
    var t, l;
    let {
            deviceType: S,
            location: I,
            showAllDevices: x = !1,
            selectedDeviceId: E,
            onSelectDevice: P,
            hideDeviceTypeIcon: T = !1,
            label: N,
        } = e,
        w = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, [
            "deviceType",
            "location",
            "showAllDevices",
            "selectedDeviceId",
            "onSelectDevice",
            "hideDeviceTypeIcon",
            "label",
        ]),
        {
            setDevice: C,
            Icon: D,
            getCanSetDevice: L,
            getWarningMessage: k,
            getLocation: G,
        } = {
            [h.oh.AUDIO_INPUT]: {
                setDevice: d.A.setInputDevice,
                Icon: u.cNw,
                getCanSetDevice: (e) => e.supports(h.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    v.intl.format(v.t["1iK6UW"], {
                        onDownloadClick: () => (0, m._)("Help Text Input Devices"),
                    }),
                getLocation: (e) => "".concat(e, ".SingleSelectInputDevices"),
            },
            [h.oh.AUDIO_OUTPUT]: {
                setDevice: d.A.setOutputDevice,
                Icon: u.LoC,
                getCanSetDevice: (e) => e.supports(h.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    v.intl.format(v.t.Ow0dbF, {
                        onDownloadClick: () => (0, m._)("Help Text Output Devices"),
                    }),
                getLocation: (e) => "".concat(e, ".SingleSelectOutputDevices"),
            },
            [h.oh.VIDEO_INPUT]: {
                setDevice: d.A.setVideoDevice,
                Icon: u.xpe,
                getCanSetDevice: (e) => e.isVideoAvailable(),
                getWarningMessage: () =>
                    v.intl.format(v.t["1iK6UW"], {
                        onDownloadClick: () => (0, m._)("Help Text Video Devices"),
                    }),
                getLocation: (e) => "".concat(e, ".SingleSelectVideoDevices"),
            },
        }[S],
        { analyticsLocations: R } = (0, p.Ay)(),
        M = (0, s.bG)([f.A], () => f.A.theme),
        [V, U] = i.useState(x),
        W = G(I),
        [F, K] = (0, b.tR)(S, {
            location: W,
        }),
        { id: z } = (0, b.x5)(S),
        H = (0, s.bG)([y.A], () => L(y.A)),
        Y = (0, r.jsx)(u.po8, {
            messageType: u.YCn.WARNING,
            children: k(),
        }),
        B = i.useCallback(
            (e) => {
                if (e === j)
                    U(!0),
                        _.default.track(A.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
                            device_type: S,
                            location: W,
                            location_stack: R,
                            shown_device_count: F.length,
                            hidden_device_count: K.length,
                        });
                else {
                    var t;
                    (null == (t = null == P ? void 0 : P(e)) || t) &&
                        C(e, {
                            location: W,
                            analyticsLocations: R,
                        });
                }
            },
            [S, W, F.length, K.length, R, P, C],
        );

    function J(e) {
        let t,
            i,
            { label: l, value: s } = e,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = l,
            p = (0, b.d)(l);
        null != p && ((d = p.prefix), (t = p.subName));
        let f = g.A.getCertifiedDeviceName(s, d);
        if (g.A.isCertified(s)) {
            let e = (0, c.qB)(M) ? n(961392) : n(848672);
            i = (0, r.jsx)("img", {
                src: e,
                alt: v.intl.string(v.t.smSKsj),
            });
        }
        return (0, r.jsxs)("div", {
            className: a()(O.Mg, {
                [O.S2]: o && null != t,
                [O.Sy]: !T,
            }),
            children: [
                !T &&
                    (0, r.jsx)("div", {
                        className: O.Kt,
                        children: (0, r.jsx)(D, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.LU0.colors.ICON_MUTED,
                        }),
                    }),
                (0, r.jsx)(u.Text, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: o ? "text-subtle" : "text-default",
                    className: O.hV,
                    children: f,
                }),
                null != t &&
                    (0, r.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: o ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: O.VT,
                        children: t,
                    }),
                null != i &&
                    (0, r.jsx)("div", {
                        className: O.pN,
                        children: i,
                    }),
            ],
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                o.Te,
                ((t = (function (e) {
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
                        label: N,
                        value: null != E ? E : z,
                        onChange: B,
                        options: (function () {
                            let e = (e) => {
                                    let { id: t, name: n } = e;
                                    return {
                                        value: t,
                                        label: n,
                                    };
                                },
                                t = F.map(e);
                            if (V || 0 === K.length) {
                                let n = K.map(e);
                                return t.concat(n);
                            }
                            {
                                let e = {
                                    value: j,
                                    label: v.intl.string(v.t.E99UMh),
                                    preventCloseOnSelect: !0,
                                };
                                return t.concat(e);
                            }
                        })(),
                        isDisabled: !H,
                        popoutPosition: "bottom",
                        renderOptionLabel: (e) => J(e, !0),
                        renderOptionValue: (e) => {
                            let [t] = e;
                            return J(t);
                        },
                        optionClassName: O.OS,
                    },
                    w,
                )),
                (l = l =
                    {
                        "data-migration-pending": !0,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                t),
            ),
            !H && Y,
        ],
    });
}
