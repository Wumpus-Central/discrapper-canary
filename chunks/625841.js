n.d(t, { U: () => P }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(843282),
    c = n(582754),
    u = n(397927),
    d = n(827343),
    f = n(688810),
    p = n(544028),
    _ = n(825468),
    h = n(347481),
    m = n(430452),
    g = n(954571),
    E = n(74848),
    b = n(652215),
    y = n(731854),
    O = n(985018),
    A = n(534393);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = N(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let R = "SHOW_MORE";
function w(e) {
    return {
        [y.oh.AUDIO_INPUT]: {
            setDevice: d.A.setInputDevice,
            Icon: u.cNw,
            getCanSetDevice: (e) => e.supports(y.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, _._)("Help Text Input Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectInputDevices"),
        },
        [y.oh.AUDIO_OUTPUT]: {
            setDevice: d.A.setOutputDevice,
            Icon: u.LoC,
            getCanSetDevice: (e) => e.supports(y.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t.Ow0dbF, { onDownloadClick: () => (0, _._)("Help Text Output Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectOutputDevices"),
        },
        [y.oh.VIDEO_INPUT]: {
            setDevice: d.A.setVideoDevice,
            Icon: u.xpe,
            getCanSetDevice: (e) => e.isVideoAvailable(),
            getWarningMessage: () =>
                O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, _._)("Help Text Video Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectVideoDevices"),
        },
    }[e];
}
function P(e) {
    let {
            deviceType: t,
            location: a,
            showAllDevices: d = !1,
            selectedDeviceId: _,
            onSelectDevice: y,
            hideDeviceTypeIcon: v = !1,
            label: I,
        } = e,
        N = C(e, [
            "deviceType",
            "location",
            "showAllDevices",
            "selectedDeviceId",
            "onSelectDevice",
            "hideDeviceTypeIcon",
            "label",
        ]),
        { setDevice: P, Icon: D, getCanSetDevice: x, getWarningMessage: L, getLocation: j } = w(t),
        { analyticsLocations: M } = (0, f.Ay)(),
        k = (0, o.bG)([p.A], () => p.A.theme),
        [U, G] = i.useState(d),
        V = j(a),
        [F, B] = (0, E.tR)(t, { location: V }),
        { id: H } = (0, E.x5)(t),
        Y = null != _ ? _ : H,
        W = (0, o.bG)([m.A], () => x(m.A)),
        K = (0, r.jsx)(u.po8, {
            messageType: u.YCn.WARNING,
            children: L(),
        }),
        z = i.useCallback(
            (e) => {
                if (e === R)
                    G(!0),
                        g.default.track(b.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
                            device_type: t,
                            location: V,
                            location_stack: M,
                            shown_device_count: F.length,
                            hidden_device_count: B.length,
                        });
                else {
                    var n;
                    (null == (n = null == y ? void 0 : y(e)) || n) &&
                        P(e, {
                            location: V,
                            analyticsLocations: M,
                        });
                }
            },
            [t, V, F.length, B.length, M, y, P],
        );
    function q(e) {
        let t,
            i,
            { label: a, value: o } = e,
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = a,
            f = (0, E.d)(a);
        null != f && ((d = f.prefix), (t = f.subName));
        let p = h.A.getCertifiedDeviceName(o, d);
        if (h.A.isCertified(o)) {
            let e = (0, c.qB)(k) ? n(961392) : n(848672);
            i = (0, r.jsx)("img", {
                src: e,
                alt: O.intl.string(O.t.smSKsj),
            });
        }
        return (0, r.jsxs)("div", {
            className: s()(A.Mg, {
                [A.S2]: l && null != t,
                [A.Sy]: !v,
            }),
            children: [
                !v &&
                    (0, r.jsx)("div", {
                        className: A.Kt,
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
                    color: l ? "text-subtle" : "text-default",
                    className: A.hV,
                    children: p,
                }),
                null != t &&
                    (0, r.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: l ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: A.VT,
                        children: t,
                    }),
                null != i &&
                    (0, r.jsx)("div", {
                        className: A.pN,
                        children: i,
                    }),
            ],
        });
    }
    function X() {
        let e = (e) => {
                let { id: t, name: n } = e;
                return {
                    value: t,
                    label: n,
                };
            },
            t = F.map(e);
        if (U || 0 === B.length) {
            let n = B.map(e);
            return t.concat(n);
        }
        {
            let e = {
                value: R,
                label: O.intl.string(O.t.E99UMh),
                preventCloseOnSelect: !0,
            };
            return t.concat(e);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                l.Te,
                T(
                    S(
                        {
                            label: I,
                            value: Y,
                            onChange: z,
                            options: X(),
                            isDisabled: !W,
                            popoutPosition: "bottom",
                            renderOptionLabel: (e) => q(e, !0),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return q(t);
                            },
                            optionClassName: A.OS,
                        },
                        N,
                    ),
                    { "data-migration-pending": !0 },
                ),
            ),
            !W && K,
        ],
    });
}
