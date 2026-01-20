n.d(t, { j: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(199849),
    c = n(780384),
    u = n(481060),
    d = n(846027),
    f = n(906732),
    p = n(210887),
    _ = n(962100),
    h = n(463395),
    m = n(131951),
    g = n(626135),
    E = n(72897),
    b = n(981631),
    y = n(65154),
    O = n(388032),
    v = n(927431);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = "SHOW_MORE";
function w(e) {
    return {
        [y.h7.AUDIO_INPUT]: {
            setDevice: d.Z.setInputDevice,
            Icon: u.S6n,
            getCanSetDevice: (e) => e.supports(y.AN.AUDIO_INPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, _.y)("Help Text Input Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectInputDevices"),
        },
        [y.h7.AUDIO_OUTPUT]: {
            setDevice: d.Z.setOutputDevice,
            Icon: u.VWR,
            getCanSetDevice: (e) => e.supports(y.AN.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t.Ow0dbF, { onDownloadClick: () => (0, _.y)("Help Text Output Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectOutputDevices"),
        },
        [y.h7.VIDEO_INPUT]: {
            setDevice: d.Z.setVideoDevice,
            Icon: u.xmR,
            getCanSetDevice: (e) => e.isVideoAvailable(),
            getWarningMessage: () =>
                O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, _.y)("Help Text Video Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectVideoDevices"),
        },
    }[e];
}
function R(e) {
    var {
            deviceType: t,
            location: a,
            showAllDevices: d = !1,
            selectedDeviceId: _,
            onSelectDevice: y,
            hideDeviceTypeIcon: S = !1,
            label: T,
        } = e,
        N = A(e, [
            "deviceType",
            "location",
            "showAllDevices",
            "selectedDeviceId",
            "onSelectDevice",
            "hideDeviceTypeIcon",
            "label",
        ]);
    let { setDevice: R, Icon: D, getCanSetDevice: x, getWarningMessage: L, getLocation: j } = w(t),
        { analyticsLocations: M } = (0, f.ZP)(),
        k = (0, s.e7)([p.Z], () => p.Z.theme),
        [U, G] = i.useState(d),
        Z = j(a),
        [F, B] = (0, E.Ls)(t, { location: Z }),
        { id: V } = (0, E.p6)(t),
        H = null != _ ? _ : V,
        Y = (0, s.e7)([m.Z], () => x(m.Z)),
        W = (0, r.jsx)(u.Wn, {
            messageType: u.QYI.WARNING,
            children: L(),
        }),
        K = i.useCallback(
            (e) => {
                if (e === P)
                    G(!0),
                        g.default.track(b.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                            device_type: t,
                            location: Z,
                            location_stack: M,
                            shown_device_count: F.length,
                            hidden_device_count: B.length,
                        });
                else {
                    var n;
                    (null == (n = null == y ? void 0 : y(e)) || n) &&
                        R(e, {
                            location: Z,
                            analyticsLocations: M,
                        });
                }
            },
            [t, Z, F.length, B.length, M, y, R],
        );
    function z(e) {
        let t,
            i,
            { label: a, value: s } = e,
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = a,
            f = (0, E.rX)(a);
        null != f && ((d = f.prefix), (t = f.subName));
        let p = h.Z.getCertifiedDeviceName(s, d);
        if (h.Z.isCertified(s)) {
            let e = (0, c.ap)(k) ? n(561259) : n(887695);
            i = (0, r.jsx)("img", {
                src: e,
                alt: O.intl.string(O.t.smSKsj),
            });
        }
        return (0, r.jsxs)("div", {
            className: o()(v.deviceContainer, {
                [v.multiLine]: l && null != t,
                [v.withIcon]: !S,
            }),
            children: [
                !S &&
                    (0, r.jsx)("div", {
                        className: v.deviceIcon,
                        children: (0, r.jsx)(D, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.TVs.colors.ICON_MUTED,
                        }),
                    }),
                (0, r.jsx)(u.Text, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: l ? "text-subtle" : "text-default",
                    className: v.deviceLabel,
                    children: p,
                }),
                null != t &&
                    (0, r.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: l ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: v.deviceSubLabel,
                        children: t,
                    }),
                null != i &&
                    (0, r.jsx)("div", {
                        className: v.deviceCertifiedPill,
                        children: i,
                    }),
            ],
        });
    }
    function q() {
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
                value: P,
                label: O.intl.string(O.t.E99UMh),
                preventCloseOnSelect: !0,
            };
            return t.concat(e);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                l.y6,
                C(
                    I(
                        {
                            label: T,
                            value: H,
                            onChange: K,
                            options: q(),
                            isDisabled: !Y,
                            popoutPosition: "bottom",
                            renderOptionLabel: (e) => z(e, !0),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return z(t);
                            },
                            optionClassName: v.singleSelectOption,
                        },
                        N,
                    ),
                    { "data-migration-pending": !0 },
                ),
            ),
            !Y && W,
        ],
    });
}
