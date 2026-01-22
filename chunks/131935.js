a.d(t, { A: () => d });
var i = a(559633),
    o = a(430452),
    n = a(954571);
async function d(e, t) {
    let { rating: a, category: d, reasonCode: l, reasonDescription: c, variant: r, feedback: s, analyticsData: u } = t,
        _ = o.A.getSettings(),
        b = o.A.getInputDeviceId(),
        f = o.A.getInputDevices()[b],
        p = o.A.getOutputDeviceId(),
        v = o.A.getOutputDevices()[p],
        m = o.A.getVideoDeviceId(),
        g = o.A.getVideoDevices()[m],
        A = o.A.getNoiseCancellation(),
        O = o.A.getMediaEngine().getAudioSubsystem(),
        y = o.A.getMediaEngine().getAudioLayer(),
        h = await i.A.getKrispModel();
    n.default.track(
        e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(a).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = a[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                rating: null != a ? a : "no response",
                category: d,
                reason_code: l,
                reason_description: c,
                reason_variant: r,
                feedback: s,
                audio_input_mode: _.mode,
                automatic_audio_input_sensitivity_enabled: _.modeOptions.autoThreshold,
                audio_input_sensitivity: _.modeOptions.threshold,
                vad_use_advanced_voice_activity: _.modeOptions.vadUseKrisp,
                echo_cancellation_enabled: _.echoCancellation,
                noise_suppression_enabled: _.noiseSuppression,
                automatic_gain_control_enabled: _.automaticGainControl,
                voice_output_volume: _.outputVolume,
                noise_cancellation_enabled: A,
                input_device_name: null == f ? void 0 : f.name,
                output_device_name: null == v ? void 0 : v.name,
                video_device_name: null == g ? void 0 : g.name,
                audio_subsystem: O,
                audio_layer: y,
                automatic_audio_subsystem: _.automaticAudioSubsystem,
                krisp_nc_model: h,
            },
            u,
        ),
    );
}
