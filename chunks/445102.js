n.d(t, {
    Z: function () {
        return l;
    }
});
var o = n(131951),
    i = n(626135),
    a = n(981631);
function l(e, t, n, l, s) {
    let r = o.Z.getSettings(),
        u = o.Z.getInputDeviceId(),
        c = o.Z.getInputDevices()[u],
        d = o.Z.getOutputDeviceId(),
        b = o.Z.getOutputDevices()[d],
        m = o.Z.getVideoDeviceId(),
        h = o.Z.getVideoDevices()[m],
        _ = o.Z.getNoiseCancellation(),
        g = o.Z.getMediaEngine().getAudioSubsystem(),
        p = o.Z.getMediaEngine().getAudioLayer();
    i.default.track(a.rMx.CALL_REPORT_PROBLEM, {
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
        noise_cancellation_enabled: _,
        input_device_name: null == c ? void 0 : c.name,
        output_device_name: null == b ? void 0 : b.name,
        video_device_name: null == h ? void 0 : h.name,
        audio_subsystem: g,
        audio_layer: p,
        automatic_audio_subsystem: r.automaticAudioSubsystem,
        ...s
    });
}
