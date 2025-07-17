n.d(t, { Z: () => l });
var o = n(311473),
    i = n(131951),
    r = n(626135);
async function l(e, t) {
    let { rating: n, category: l, reasonCode: a, reasonDescription: s, variant: c, feedback: u, analyticsData: d } = t,
        m = i.Z.getSettings(),
        b = i.Z.getInputDeviceId(),
        p = i.Z.getInputDevices()[b],
        _ = i.Z.getOutputDeviceId(),
        f = i.Z.getOutputDevices()[_],
        g = i.Z.getVideoDeviceId(),
        h = i.Z.getVideoDevices()[g],
        v = i.Z.getNoiseCancellation(),
        O = i.Z.getMediaEngine().getAudioSubsystem(),
        y = i.Z.getMediaEngine().getAudioLayer(),
        j = await o.Z.getKrispModel();
    r.default.track(
        e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    o.forEach(function (t) {
                        var o;
                        ((o = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = o));
                    }));
            }
            return e;
        })(
            {
                rating: null != n ? n : 'no response',
                category: l,
                reason_code: a,
                reason_description: s,
                reason_variant: c,
                feedback: u,
                audio_input_mode: m.mode,
                automatic_audio_input_sensitivity_enabled: m.modeOptions.autoThreshold,
                audio_input_sensitivity: m.modeOptions.threshold,
                vad_use_advanced_voice_activity: m.modeOptions.vadUseKrisp,
                echo_cancellation_enabled: m.echoCancellation,
                noise_suppression_enabled: m.noiseSuppression,
                automatic_gain_control_enabled: m.automaticGainControl,
                voice_output_volume: m.outputVolume,
                noise_cancellation_enabled: v,
                input_device_name: null == p ? void 0 : p.name,
                output_device_name: null == f ? void 0 : f.name,
                video_device_name: null == h ? void 0 : h.name,
                audio_subsystem: O,
                audio_layer: y,
                automatic_audio_subsystem: m.automaticAudioSubsystem,
                krisp_nc_model: j
            },
            d
        )
    );
}
