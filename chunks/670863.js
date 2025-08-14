n.d(t, { j: () => T }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(846027),
    l = n(906732),
    c = n(962100),
    u = n(131951),
    d = n(626135),
    f = n(72897),
    _ = n(981631),
    p = n(65154),
    h = n(388032),
    m = n(118896),
    g = n(197571);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = "SHOW_MORE";
function I(e) {
    return {
        [p.h7.AUDIO_INPUT]: {
            setDevice: s.Z.setInputDevice,
            Icon: a.S6n,
            getCanSetDevice: (e) => e.supports(p.AN.AUDIO_INPUT_DEVICE),
            getWarningMessage: () =>
                h.intl.format(h.t["1iK6UV"], { onDownloadClick: () => (0, c.y)("Help Text Input Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectInputDevices"),
        },
        [p.h7.AUDIO_OUTPUT]: {
            setDevice: s.Z.setOutputDevice,
            Icon: a.VWR,
            getCanSetDevice: (e) => e.supports(p.AN.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () =>
                h.intl.format(h.t.Ow0dbG, { onDownloadClick: () => (0, c.y)("Help Text Output Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectOutputDevices"),
        },
        [p.h7.VIDEO_INPUT]: {
            setDevice: s.Z.setVideoDevice,
            Icon: a.xmR,
            getCanSetDevice: (e) => e.isVideoAvailable(),
            getWarningMessage: () =>
                h.intl.format(h.t["1iK6UV"], { onDownloadClick: () => (0, c.y)("Help Text Video Devices") }),
            getLocation: (e) => "".concat(e, ".SingleSelectVideoDevices"),
        },
    }[e];
}
function T(e) {
    var t,
        {
            deviceType: n,
            location: s,
            showAllDevices: c = !1,
            selectedDeviceId: p,
            onSelectDevice: E,
            hideDeviceTypeIcon: O = !1,
        } = e,
        T = y(e, [
            "deviceType",
            "location",
            "showAllDevices",
            "selectedDeviceId",
            "onSelectDevice",
            "hideDeviceTypeIcon",
        ]);
    let { setDevice: S, Icon: A, getCanSetDevice: N, getWarningMessage: C, getLocation: R } = I(n),
        { analyticsLocations: P } = (0, l.ZP)(),
        [w, D] = i.useState(c),
        L = R(s),
        [x, M] = (0, f.Ls)(n, { location: L }),
        { id: k } = (0, f.p6)(n),
        j = null != p ? p : k,
        U = (0, o.e7)([u.Z], () => N(u.Z)),
        G = (0, r.jsx)(a.R94, {
            type: a.R94.Types.DESCRIPTION,
            className: g.marginTop8,
            children: C(),
        }),
        B = i.useCallback(
            (e) => {
                if (e === v)
                    D(!0),
                        d.default.track(_.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                            device_type: n,
                            location: L,
                            location_stack: P,
                            shown_device_count: x.length,
                            hidden_device_count: M.length,
                        });
                else {
                    var t;
                    (null == (t = null == E ? void 0 : E(e)) || t) &&
                        S(e, {
                            location: L,
                            analyticsLocations: P,
                        });
                }
            },
            [n, L, x.length, M.length, P, E, S],
        );
    function Z(e) {
        let { label: t } = e;
        return (0, r.jsxs)("div", {
            className: m.selectedDevice,
            children: [
                !O &&
                    (0, r.jsx)(A, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.INTERACTIVE_MUTED,
                    }),
                (0, r.jsx)(a.Text, {
                    lineClamp: 1,
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: t,
                }),
            ],
        });
    }
    let F = null != (t = T.renderOptionLabel) ? t : Z;
    function V() {
        let e = (e) => {
                let { id: t, name: n } = e;
                return {
                    value: t,
                    label: n,
                };
            },
            t = x.map(e);
        if (w || 0 === M.length) {
            let n = M.map(e);
            return t.concat(n);
        }
        {
            let e = {
                value: v,
                label: h.intl.string(h.t.E99UMj),
                preventCloseOnSelect: !0,
            };
            return t.concat(e);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                a.q4e,
                b(
                    {
                        value: j,
                        onChange: B,
                        options: V(),
                        isDisabled: !U,
                        className: m.selector,
                        popoutPosition: "bottom",
                        renderOptionLabel: F,
                        renderOptionValue: (e) => {
                            let [t] = e;
                            return F(t);
                        },
                    },
                    T,
                ),
            ),
            !U && G,
        ],
    });
}
