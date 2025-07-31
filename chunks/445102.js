n.d(t, { Z: () => l });
var o = n(311473),
    r = n(131951),
    i = n(626135);
async function l(e, t) {
    let { rating: n, category: l, reasonCode: a, reasonDescription: s, variant: c, feedback: u, analyticsData: d } = t,
        b = r.Z.getSettings(),
        m = r.Z.getInputDeviceId(),
        p = r.Z.getInputDevices()[m],
        f = r.Z.getOutputDeviceId(),
        _ = r.Z.getOutputDevices()[f],
        O = r.Z.getVideoDeviceId(),
        g = r.Z.getVideoDevices()[O],
        h = r.Z.getNoiseCancellation(),
        v = r.Z.getMediaEngine().getAudioSubsystem(),
        y = r.Z.getMediaEngine().getAudioLayer(),
        j = await o.Z.getKrispModel();
    i.default.track(
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
                audio_input_mode: b.mode,
                automatic_audio_input_sensitivity_enabled: b.modeOptions.autoThreshold,
                audio_input_sensitivity: b.modeOptions.threshold,
                vad_use_advanced_voice_activity: b.modeOptions.vadUseKrisp,
                echo_cancellation_enabled: b.echoCancellation,
                noise_suppression_enabled: b.noiseSuppression,
                automatic_gain_control_enabled: b.automaticGainControl,
                voice_output_volume: b.outputVolume,
                noise_cancellation_enabled: h,
                input_device_name: null == p ? void 0 : p.name,
                output_device_name: null == _ ? void 0 : _.name,
                video_device_name: null == g ? void 0 : g.name,
                audio_subsystem: v,
                audio_layer: y,
                automatic_audio_subsystem: b.automaticAudioSubsystem,
                krisp_nc_model: j
            },
            d
        )
    );
}
