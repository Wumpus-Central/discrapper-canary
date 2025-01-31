n.d(t, { Z: () => a });
var i = n(131951),
    l = n(626135),
    o = n(981631);
function a(e, t, n, a, s) {
    let c = i.Z.getSettings(),
        r = i.Z.getInputDeviceId(),
        u = i.Z.getInputDevices()[r],
        d = i.Z.getOutputDeviceId(),
        m = i.Z.getOutputDevices()[d],
        _ = i.Z.getVideoDeviceId(),
        h = i.Z.getVideoDevices()[_],
        g = i.Z.getNoiseCancellation(),
        p = i.Z.getMediaEngine().getAudioSubsystem(),
        x = i.Z.getMediaEngine().getAudioLayer();
    l.default.track(o.rMx.CALL_REPORT_PROBLEM, {
        rating: null != e ? e : 'no response',
        reason_code: t,
        reason_description: n,
        feedback: a,
        audio_input_mode: c.mode,
        automatic_audio_input_sensitivity_enabled: c.modeOptions.autoThreshold,
        audio_input_sensitivity: c.modeOptions.threshold,
        echo_cancellation_enabled: c.echoCancellation,
        noise_suppression_enabled: c.noiseSuppression,
        automatic_gain_control_enabled: c.automaticGainControl,
        voice_output_volume: c.outputVolume,
        noise_cancellation_enabled: g,
        input_device_name: null == u ? void 0 : u.name,
        output_device_name: null == m ? void 0 : m.name,
        video_device_name: null == h ? void 0 : h.name,
        audio_subsystem: p,
        audio_layer: x,
        automatic_audio_subsystem: c.automaticAudioSubsystem,
        ...s
    });
}
