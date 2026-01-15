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
    m = n(463395),
    h = n(131951),
    g = n(626135),
    E = n(568001),
    b = n(72897),
    y = n(981631),
    O = n(65154),
    v = n(388032),
    S = n(927431);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = "SHOW_MORE";
function P(e) {
    return {
        [O.h7.AUDIO_INPUT]: {
            setDevice: d.Z.setInputDevice,
            Icon: u.S6n,
            getCanSetDevice: (e) => e.supports(O.AN.AUDIO_INPUT_DEVICE),
            getWarningMessage: () =>
                v.intl.format(v.t["1iK6UW"], { onDownloadClick: () => (0, _.y)("Help Text Input Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectInputDevices"),
        },
        [O.h7.AUDIO_OUTPUT]: {
            setDevice: d.Z.setOutputDevice,
            Icon: u.VWR,
            getCanSetDevice: (e) => e.supports(O.AN.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () =>
                v.intl.format(v.t.Ow0dbF, { onDownloadClick: () => (0, _.y)("Help Text Output Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectOutputDevices"),
        },
        [O.h7.VIDEO_INPUT]: {
            setDevice: d.Z.setVideoDevice,
            Icon: u.xmR,
            getCanSetDevice: (e) => e.isVideoAvailable(),
            getWarningMessage: () =>
                v.intl.format(v.t["1iK6UW"], { onDownloadClick: () => (0, _.y)("Help Text Video Devices") }),
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
            onSelectDevice: O,
            hideDeviceTypeIcon: I = !1,
            label: A,
        } = e,
        R = C(e, [
            "deviceType",
            "location",
            "showAllDevices",
            "selectedDeviceId",
            "onSelectDevice",
            "hideDeviceTypeIcon",
            "label",
        ]);
    let { setDevice: w, Icon: D, getCanSetDevice: x, getWarningMessage: L, getLocation: j } = P(t),
        { analyticsLocations: M } = (0, f.ZP)(),
        k = (0, s.e7)([p.Z], () => p.Z.theme),
        [U, G] = i.useState(d),
        Z = j(a),
        [F, B] = (0, b.Ls)(t, { location: Z }),
        { id: V } = (0, b.p6)(t),
        H = null != _ ? _ : V,
        Y = (0, s.e7)([h.Z], () => x(h.Z)),
        { showDeviceSelectionImprovements: W } = (0, E.V)({ location: "".concat(Z, "/SingleSelectDevices") }),
        K = (0, r.jsx)(u.Wn, {
            messageType: u.QYI.WARNING,
            children: L(),
        }),
        z = i.useCallback(
            (e) => {
                if (e === N)
                    G(!0),
                        g.default.track(y.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                            device_type: t,
                            location: Z,
                            location_stack: M,
                            shown_device_count: F.length,
                            hidden_device_count: B.length,
                        });
                else {
                    var n;
                    (null == (n = null == O ? void 0 : O(e)) || n) &&
                        w(e, {
                            location: Z,
                            analyticsLocations: M,
                        });
                }
            },
            [t, Z, F.length, B.length, M, O, w],
        );
    function q(e) {
        let t,
            i,
            { label: a, value: s } = e,
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = a,
            f = (0, b.rX)(a);
        null != f &&
            ((0, E.M)({ location: "".concat(Z, "/SingleSelectDevices.defaultRenderOptionLabel") }),
            (d = f.prefix),
            (t = f.subName));
        let p = m.Z.getCertifiedDeviceName(s, d);
        if (m.Z.isCertified(s)) {
            let e = (0, c.ap)(k) ? n(561259) : n(887695);
            i = (0, r.jsx)("img", {
                src: e,
                alt: v.intl.string(v.t.smSKsj),
            });
        }
        return (0, r.jsxs)("div", {
            className: o()(S.deviceContainer, {
                [S.multiLine]: l && null != t,
                [S.withIcon]: !I,
            }),
            children: [
                !I &&
                    (0, r.jsx)("div", {
                        className: S.deviceIcon,
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
                    className: S.deviceLabel,
                    children: p,
                }),
                null != t &&
                    (0, r.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: l ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: S.deviceSubLabel,
                        children: t,
                    }),
                null != i &&
                    (0, r.jsx)("div", {
                        className: S.deviceCertifiedPill,
                        children: i,
                    }),
            ],
        });
    }
    function Q() {
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
                value: N,
                label: v.intl.string(v.t.E99UMh),
                preventCloseOnSelect: !0,
            };
            return t.concat(e);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                l.y6,
                T(
                    {
                        label: A,
                        value: H,
                        onChange: z,
                        options: Q(),
                        isDisabled: !Y,
                        popoutPosition: "bottom",
                        renderOptionLabel: (e) => q(e, W),
                        renderOptionValue: (e) => {
                            let [t] = e;
                            return q(t);
                        },
                        optionClassName: S.singleSelectOption,
                    },
                    R,
                ),
            ),
            !Y && K,
        ],
    });
}
