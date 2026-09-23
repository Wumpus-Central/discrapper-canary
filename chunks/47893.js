i.d(t, { default: () => y });
var n = i(477900);
i(582128);
var a = i(562708),
    o = i(192308),
    l = i(930932),
    s = i(878234),
    r = i(382935),
    d = i(21217),
    u = i(559633),
    c = i(25578),
    _ = i(174459);
async function m(e, t) {
    let { rating: i, category: n, reasonCode: a, reasonDescription: o, variant: l, feedback: s, analyticsData: r } = t,
        d = c.Ay.getSettings(),
        m = c.Ay.getInputDeviceId(),
        p = c.Ay.getInputDevices()[m],
        g = c.Ay.getOutputDeviceId(),
        b = c.Ay.getOutputDevices()[g],
        v = c.Ay.getVideoDeviceId(),
        y = c.Ay.getVideoDevices()[v],
        f = c.Ay.getNoiseCancellation(),
        O = c.Ay.getMediaEngine().getAudioSubsystem(),
        A = c.Ay.getMediaEngine().getAudioLayer(),
        E = await u.A.getKrispModel(),
        { output_audio_route_type: F, ...C } = r ?? {};
    _.default.track(e, {
        rating: i ?? "no response",
        category: n,
        reason_code: a,
        reason_description: o,
        reason_variant: l,
        feedback: s,
        audio_input_mode: d.mode,
        automatic_audio_input_sensitivity_enabled: d.modeOptions.autoThreshold,
        audio_input_sensitivity: d.modeOptions.threshold,
        vad_use_advanced_voice_activity: d.modeOptions.vadUseKrisp,
        echo_cancellation_enabled: d.echoCancellation,
        noise_suppression_enabled: d.noiseSuppression,
        automatic_gain_control_enabled: d.automaticGainControl,
        voice_output_volume: d.outputVolume,
        noise_cancellation_enabled: f,
        input_device_name: p?.name,
        output_device_name: b?.name,
        video_device_name: y?.name,
        audio_subsystem: O,
        audio_layer: A,
        automatic_audio_subsystem: d.automaticAudioSubsystem,
        krisp_nc_model: E,
        audio_output_mode: F,
        ...C,
    });
}
var p = i(652215),
    g = i(670455),
    b = i(375708),
    v = i(175398);
function y(e) {
    let { onClose: t, transitionState: u, analyticsData: y } = e,
        { surveyEmojiKind: f } = d.A.useConfig({ location: "VoiceCallFeedback" }),
        O = b.intl.string(b.t.Ss6tlb),
        A = b.intl.string(b.t.tLi4cR),
        E = {
            impressionName: a.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: y.rtc_connection_id, media_session_id: y.media_session_id },
        },
        F = {
            value: g.Eq.CONNECTION,
            label: b.intl.string(v.default.FVhMw6),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.A_)(),
            freeformConfig: { value: g.bO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        C = {
            value: g.Eq.AUDIO,
            label: b.intl.string(v.default.PL2l6A),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.Op)({ isMobile: !1 }),
            freeformConfig: { value: g.X.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        M = {
            value: g.Eq.VIDEO,
            label: b.intl.string(v.default["0WFzPh"]),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.de)(),
            freeformConfig: { value: g.AO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        h = {
            value: g.Eq.PEOPLE,
            label: b.intl.string(v.default.Moa3W9),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.TK)(),
            freeformConfig: { value: g.CW.FREEFORM, label: b.intl.string(b.t.emlT91) },
        };
    return (0, n.jsx)(r.A, {
        onMount: () => {
            _.default.track(p.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: a, feedback: r, category: d, problem: u } = e;
            (t && (0, l.n3)({ feedbackType: g.MW.VOICE, location: "VoiceCallFeedbackModal" }),
                null == a ||
                    (m(p.HAw.CALL_REPORT_PROBLEM, {
                        rating: a,
                        category: d,
                        reasonDescription: u?.value ?? null,
                        variant: u?.variant ?? null,
                        feedback: r,
                        analyticsData: y,
                    }),
                    null == u ||
                        (u.value === g.X.NO_AUDIO &&
                        u.variant === g.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && c.Ay.isSelfMute();
                        })(y)
                            ? (0, o.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      i.e("979102"),
                                      i.e("21226"),
                                      i.e("141737"),
                                  ]).then(i.bind(i, 36304));
                                  return (t) => (0, n.jsx)(e, { ...t });
                              })
                            : (0, s.r)(a, d, u)
                              ? (0, o.openModalLazy)(async () => {
                                    let { default: e } = await i.e("969791").then(i.bind(i, 72514));
                                    return (t) =>
                                        (0, n.jsx)(e, {
                                            ...t,
                                            mediaSessionId: y.media_session_id,
                                            rtcConnectionId: y.rtc_connection_id,
                                        });
                                })
                              : (0, o.openModalLazy)(async () => {
                                    let { default: e } = await i.e("137836").then(i.bind(i, 845671));
                                    return (t) => (0, n.jsx)(e, { body: b.intl.string(b.t["d9+vQ8"]), ...t });
                                }))));
        },
        onClose: t,
        ratingHeader: O,
        ratingEmojiKind: f,
        ratingBody: A,
        categoriesHeader: b.intl.string(v.default.tq8598),
        optionsTree: [F, C, M, h],
        impression: E,
        transitionState: u,
    });
}
