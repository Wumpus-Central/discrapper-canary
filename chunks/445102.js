n.d(t, { Z: () => i });
var o = n(131951),
    a = n(626135);
function i(e, t) {
    let { rating: n, reasonCode: i, reasonDescription: s, feedback: l, analyticsData: c } = t,
        r = o.Z.getSettings(),
        u = o.Z.getInputDeviceId(),
        d = o.Z.getInputDevices()[u],
        _ = o.Z.getOutputDeviceId(),
        m = o.Z.getOutputDevices()[_],
        b = o.Z.getVideoDeviceId(),
        p = o.Z.getVideoDevices()[b],
        x = o.Z.getNoiseCancellation(),
        h = o.Z.getMediaEngine().getAudioSubsystem(),
        v = o.Z.getMediaEngine().getAudioLayer();
    a.default.track(
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
                reason_code: i,
                reason_description: s,
                feedback: l,
                audio_input_mode: r.mode,
                automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
                audio_input_sensitivity: r.modeOptions.threshold,
                echo_cancellation_enabled: r.echoCancellation,
                noise_suppression_enabled: r.noiseSuppression,
                automatic_gain_control_enabled: r.automaticGainControl,
                voice_output_volume: r.outputVolume,
                noise_cancellation_enabled: x,
                input_device_name: null == d ? void 0 : d.name,
                output_device_name: null == m ? void 0 : m.name,
                video_device_name: null == p ? void 0 : p.name,
                audio_subsystem: h,
                audio_layer: v,
                automatic_audio_subsystem: r.automaticAudioSubsystem
            },
            c
        )
    );
}
