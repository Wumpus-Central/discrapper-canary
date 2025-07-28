(n.d(t, { j: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(906732),
    c = n(962100),
    u = n(131951),
    d = n(626135),
    f = n(72897),
    p = n(981631),
    m = n(65154),
    g = n(388032),
    h = n(583453),
    b = n(20493);
let _ = 'SHOW_MORE';
function v(e) {
    var t,
        { deviceType: n, location: v, showAllDevices: y = !1, selectedDeviceId: O, onSelectDevice: S, hideDeviceTypeIcon: I = !1 } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['deviceType', 'location', 'showAllDevices', 'selectedDeviceId', 'onSelectDevice', 'hideDeviceTypeIcon']);
    let {
            setDevice: x,
            Icon: E,
            getCanSetDevice: P,
            getWarningMessage: C,
            getLocation: T
        } = {
            [m.h7.AUDIO_INPUT]: {
                setDevice: o.Z.setInputDevice,
                Icon: a.S6n,
                getCanSetDevice: (e) => e.supports(m.AN.AUDIO_INPUT_DEVICE),
                getWarningMessage: () => g.intl.format(g.t['1iK6UV'], { onDownloadClick: () => (0, c.y)('Help Text Input Devices') }),
                getLocation: (e) => ''.concat(e, '.SingleSelectInputDevices')
            },
            [m.h7.AUDIO_OUTPUT]: {
                setDevice: o.Z.setOutputDevice,
                Icon: a.VWR,
                getCanSetDevice: (e) => e.supports(m.AN.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () => g.intl.format(g.t.Ow0dbG, { onDownloadClick: () => (0, c.y)('Help Text Output Devices') }),
                getLocation: (e) => ''.concat(e, '.SingleSelectOutputDevices')
            },
            [m.h7.VIDEO_INPUT]: {
                setDevice: o.Z.setVideoDevice,
                Icon: a.xmR,
                getCanSetDevice: (e) => e.isVideoAvailable(),
                getWarningMessage: () => g.intl.format(g.t['1iK6UV'], { onDownloadClick: () => (0, c.y)('Help Text Video Devices') }),
                getLocation: (e) => ''.concat(e, '.SingleSelectVideoDevices')
            }
        }[n],
        { analyticsLocations: N } = (0, s.ZP)(),
        [A, w] = i.useState(y),
        D = T(v),
        [Z, L] = (0, f.L)(n, { location: D }),
        { id: M } = (0, f.p)(n),
        k = (0, l.e7)([u.Z], () => P(u.Z)),
        U = (0, r.jsx)(a.R94, {
            type: a.R94.Types.DESCRIPTION,
            className: b.marginTop8,
            children: C()
        }),
        R = i.useCallback(
            (e) => {
                if (e === _)
                    (w(!0),
                        d.default.track(p.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
                            device_type: n,
                            location: D,
                            location_stack: N,
                            shown_device_count: Z.length,
                            hidden_device_count: L.length
                        }));
                else {
                    var t;
                    (null == (t = null == S ? void 0 : S(e)) || t) &&
                        x(e, {
                            location: D,
                            analyticsLocations: N
                        });
                }
            },
            [n, D, Z.length, L.length, N, S, x]
        ),
        V =
            null != (t = j.renderOptionLabel)
                ? t
                : function (e) {
                      let { label: t } = e;
                      return (0, r.jsxs)('div', {
                          className: h.selectedDevice,
                          children: [
                              !I &&
                                  (0, r.jsx)(E, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: a.TVs.colors.INTERACTIVE_MUTED
                                  }),
                              (0, r.jsx)(a.Text, {
                                  lineClamp: 1,
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: t
                              })
                          ]
                      });
                  };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                a.q4e,
                (function (e) {
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
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        value: null != O ? O : M,
                        onChange: R,
                        options: (function () {
                            let e = (e) => {
                                    let { id: t, name: n } = e;
                                    return {
                                        value: t,
                                        label: n
                                    };
                                },
                                t = Z.map(e);
                            if (A || 0 === L.length) {
                                let n = L.map(e);
                                return t.concat(n);
                            }
                            {
                                let e = {
                                    value: _,
                                    label: g.intl.string(g.t.E99UMj),
                                    preventCloseOnSelect: !0
                                };
                                return t.concat(e);
                            }
                        })(),
                        isDisabled: !k,
                        className: h.selector,
                        popoutPosition: 'bottom',
                        renderOptionLabel: V,
                        renderOptionValue: (e) => {
                            let [t] = e;
                            return V(t);
                        }
                    },
                    j
                )
            ),
            !k && U
        ]
    });
}
