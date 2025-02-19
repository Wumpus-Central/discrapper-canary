n.d(t, { Z: () => l });
var o = n(131951),
    a = n(626135),
    i = n(981631);
function l(e, t, n, l, s) {
    let r = o.Z.getSettings(),
        c = o.Z.getInputDeviceId(),
        u = o.Z.getInputDevices()[c],
        d = o.Z.getOutputDeviceId(),
        b = o.Z.getOutputDevices()[d],
        _ = o.Z.getVideoDeviceId(),
        m = o.Z.getVideoDevices()[_],
        h = o.Z.getNoiseCancellation(),
        f = o.Z.getMediaEngine().getAudioSubsystem(),
        p = o.Z.getMediaEngine().getAudioLayer();
    a.default.track(
        i.rMx.CALL_REPORT_PROBLEM,
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
                rating: null != e ? e : 'no response',
                reason_code: t,
                reason_description: n,
                feedback: l,
                audio_input_mode: r.mode,
                automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
                audio_input_sensitivity: r.modeOptions.threshold,
                echo_cancellation_enabled: r.echoCancellation,
                noise_suppression_enabled: r.noiseSuppression,
                automatic_gain_control_enabled: r.automaticGainControl,
                voice_output_volume: r.outputVolume,
                noise_cancellation_enabled: h,
                input_device_name: null == u ? void 0 : u.name,
                output_device_name: null == b ? void 0 : b.name,
                video_device_name: null == m ? void 0 : m.name,
                audio_subsystem: f,
                audio_layer: p,
                automatic_audio_subsystem: r.automaticAudioSubsystem
            },
            s
        )
    );
}
