o.d(t, { Z: () => l });
var n = o(311473),
    r = o(131951),
    i = o(626135);
async function l(e, t) {
    let { rating: o, category: l, reasonCode: a, reasonDescription: s, variant: c, feedback: u, analyticsData: d } = t,
        b = r.Z.getSettings(),
        p = r.Z.getInputDeviceId(),
        m = r.Z.getInputDevices()[p],
        _ = r.Z.getOutputDeviceId(),
        f = r.Z.getOutputDevices()[_],
        h = r.Z.getVideoDeviceId(),
        g = r.Z.getVideoDevices()[h],
        O = r.Z.getNoiseCancellation(),
        v = r.Z.getMediaEngine().getAudioSubsystem(),
        y = r.Z.getMediaEngine().getAudioLayer(),
        x = await n.Z.getKrispModel();
    i.default.track(
        e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(o);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(o).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(o, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = o[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                rating: null != o ? o : 'no response',
                category: l,
                reason_code: a,
                reason_description: s,
                reason_variant: c,
                feedback: u,
                audio_input_mode: b.mode,
                automatic_audio_input_sensitivity_enabled: b.modeOptions.autoThreshold,
                audio_input_sensitivity: b.modeOptions.threshold,
                vad_use_advanced_voice_activity: b.modeOptions.vadUseKrisp,
                echo_cancellation_enabled: b.echoCancellation,
                noise_suppression_enabled: b.noiseSuppression,
                automatic_gain_control_enabled: b.automaticGainControl,
                voice_output_volume: b.outputVolume,
                noise_cancellation_enabled: O,
                input_device_name: null == m ? void 0 : m.name,
                output_device_name: null == f ? void 0 : f.name,
                video_device_name: null == g ? void 0 : g.name,
                audio_subsystem: v,
                audio_layer: y,
                automatic_audio_subsystem: b.automaticAudioSubsystem,
                krisp_nc_model: x
            },
            d
        )
    );
}
