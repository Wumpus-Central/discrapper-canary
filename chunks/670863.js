n.d(t, { j: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(846027),
    d = n(906732),
    f = n(210887),
    _ = n(962100),
    p = n(463395),
    h = n(131951),
    m = n(626135),
    g = n(568001),
    E = n(72897),
    b = n(981631),
    y = n(65154),
    O = n(388032),
    v = n(918165);
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
function S(e, t) {
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
let C = "SHOW_MORE";
function N(e) {
    return {
        [y.h7.AUDIO_INPUT]: {
            setDevice: u.Z.setInputDevice,
            Icon: c.S6n,
            getCanSetDevice: (e) => e.supports(y.AN.AUDIO_INPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, _.y)("Help Text Input Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectInputDevices"),
        },
        [y.h7.AUDIO_OUTPUT]: {
            setDevice: u.Z.setOutputDevice,
            Icon: c.VWR,
            getCanSetDevice: (e) => e.supports(y.AN.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t.Ow0dbF, { onDownloadClick: () => (0, _.y)("Help Text Output Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectOutputDevices"),
        },
        [y.h7.VIDEO_INPUT]: {
            setDevice: u.Z.setVideoDevice,
            Icon: c.xmR,
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
            showAllDevices: u = !1,
            selectedDeviceId: _,
            onSelectDevice: y,
            hideDeviceTypeIcon: I = !1,
            label: A,
        } = e,
        R = S(e, [
            "deviceType",
            "location",
            "showAllDevices",
            "selectedDeviceId",
            "onSelectDevice",
            "hideDeviceTypeIcon",
            "label",
        ]);
    let { setDevice: P, Icon: D, getCanSetDevice: w, getWarningMessage: L, getLocation: x } = N(t),
        { analyticsLocations: M } = (0, d.ZP)(),
        j = (0, s.e7)([f.Z], () => f.Z.theme),
        [k, U] = i.useState(u),
        G = x(a),
        [B, Z] = (0, E.Ls)(t, { location: G }),
        { id: F } = (0, E.p6)(t),
        V = null != _ ? _ : F,
        H = (0, s.e7)([h.Z], () => w(h.Z)),
        { showDeviceSelectionImprovements: Y } = (0, g.V)({ location: "".concat(G, "/SingleSelectDevices") }),
        W = (0, r.jsx)(c.Wn, {
            messageType: c.QYI.WARNING,
            children: L(),
        }),
        K = i.useCallback(
            (e) => {
                if (e === C)
                    U(!0),
                        m.default.track(b.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                            device_type: t,
                            location: G,
                            location_stack: M,
                            shown_device_count: B.length,
                            hidden_device_count: Z.length,
                        });
                else {
                    var n;
                    (null == (n = null == y ? void 0 : y(e)) || n) &&
                        P(e, {
                            location: G,
                            analyticsLocations: M,
                        });
                }
            },
            [t, G, B.length, Z.length, M, y, P],
        );
    function z(e) {
        let t,
            i,
            { label: a, value: s } = e,
            u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = a,
            f = (0, E.rX)(a);
        null != f &&
            ((0, g.M)({ location: "".concat(G, "/SingleSelectDevices.defaultRenderOptionLabel") }),
            (d = f.prefix),
            (t = f.subName));
        let _ = p.Z.getCertifiedDeviceName(s, d);
        if (p.Z.isCertified(s)) {
            let e = (0, l.ap)(j) ? n(561259) : n(887695);
            i = (0, r.jsx)("img", {
                src: e,
                alt: O.intl.string(O.t.smSKsj),
            });
        }
        return (0, r.jsxs)("div", {
            className: o()(v.deviceContainer, {
                [v.multiLine]: u && null != t,
                [v.withIcon]: !I,
            }),
            children: [
                !I &&
                    (0, r.jsx)("div", {
                        className: v.deviceIcon,
                        children: (0, r.jsx)(D, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.TVs.colors.INTERACTIVE_MUTED,
                        }),
                    }),
                (0, r.jsx)(c.Text, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: u ? "text-secondary" : "text-default",
                    className: v.deviceLabel,
                    children: _,
                }),
                null != t &&
                    (0, r.jsx)(c.Text, {
                        lineClamp: 2,
                        variant: u ? "text-xs/medium" : "text-md/medium",
                        color: "text-tertiary",
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
            t = B.map(e);
        if (k || 0 === Z.length) {
            let n = Z.map(e);
            return t.concat(n);
        }
        {
            let e = {
                value: C,
                label: O.intl.string(O.t.E99UMh),
                preventCloseOnSelect: !0,
            };
            return t.concat(e);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                c.q4e,
                T(
                    {
                        label: A,
                        value: V,
                        onChange: K,
                        options: q(),
                        isDisabled: !H,
                        popoutPosition: "bottom",
                        renderOptionLabel: (e) => z(e, Y),
                        renderOptionValue: (e) => {
                            let [t] = e;
                            return z(t);
                        },
                        optionClassName: v.singleSelectOption,
                    },
                    R,
                ),
            ),
            !H && W,
        ],
    });
}
