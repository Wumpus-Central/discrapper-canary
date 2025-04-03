n.d(t, { Z: () => a });
var o = n(131951),
    i = n(626135);
function a(e, t) {
    let { rating: n, reasonCode: a, reasonDescription: r, feedback: l, analyticsData: s } = t,
        c = o.Z.getSettings(),
        u = o.Z.getInputDeviceId(),
        d = o.Z.getInputDevices()[u],
        b = o.Z.getOutputDeviceId(),
        p = o.Z.getOutputDevices()[b],
        m = o.Z.getVideoDeviceId(),
        _ = o.Z.getVideoDevices()[m],
        h = o.Z.getNoiseCancellation(),
        f = o.Z.getMediaEngine().getAudioSubsystem(),
        v = o.Z.getMediaEngine().getAudioLayer();
    i.default.track(
        e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    o.forEach(function (t) {
                        var o;
                        (o = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = o);
                    });
            }
            return e;
        })(
            {
                rating: null != n ? n : 'no response',
                reason_code: a,
                reason_description: r,
                feedback: l,
                audio_input_mode: c.mode,
                automatic_audio_input_sensitivity_enabled: c.modeOptions.autoThreshold,
                audio_input_sensitivity: c.modeOptions.threshold,
                echo_cancellation_enabled: c.echoCancellation,
                noise_suppression_enabled: c.noiseSuppression,
                automatic_gain_control_enabled: c.automaticGainControl,
                voice_output_volume: c.outputVolume,
                noise_cancellation_enabled: h,
                input_device_name: null == d ? void 0 : d.name,
                output_device_name: null == p ? void 0 : p.name,
                video_device_name: null == _ ? void 0 : _.name,
                audio_subsystem: f,
                audio_layer: v,
                automatic_audio_subsystem: c.automaticAudioSubsystem
            },
            s
        )
    );
}
