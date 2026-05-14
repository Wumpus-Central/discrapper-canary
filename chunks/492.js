i.d(t, { default: () => f });
var n = i(627968);
i(64700);
var a = i(562708),
    o = i(192308);
let l = (0, i(945810).mj)({
    name: "2026-02-mute-tutorial",
    kind: "user",
    defaultConfig: { muteTutorialEnabled: !1 },
    variations: { 1: { muteTutorialEnabled: !0 } },
});
var s = i(930932),
    r = i(878234),
    u = i(382935),
    d = i(559633),
    c = i(235058),
    _ = i(174459);
async function m(e, t) {
    let { rating: i, category: n, reasonCode: a, reasonDescription: o, variant: l, feedback: s, analyticsData: r } = t,
        u = c.Ay.getSettings(),
        m = c.Ay.getInputDeviceId(),
        p = c.Ay.getInputDevices()[m],
        g = c.Ay.getOutputDeviceId(),
        b = c.Ay.getOutputDevices()[g],
        v = c.Ay.getVideoDeviceId(),
        f = c.Ay.getVideoDevices()[v],
        y = c.Ay.getNoiseCancellation(),
        E = c.Ay.getMediaEngine().getAudioSubsystem(),
        O = c.Ay.getMediaEngine().getAudioLayer(),
        A = await d.A.getKrispModel(),
        { output_audio_route_type: F, ...C } = r ?? {};
    _.default.track(e, {
        rating: i ?? "no response",
        category: n,
        reason_code: a,
        reason_description: o,
        reason_variant: l,
        feedback: s,
        audio_input_mode: u.mode,
        automatic_audio_input_sensitivity_enabled: u.modeOptions.autoThreshold,
        audio_input_sensitivity: u.modeOptions.threshold,
        vad_use_advanced_voice_activity: u.modeOptions.vadUseKrisp,
        echo_cancellation_enabled: u.echoCancellation,
        noise_suppression_enabled: u.noiseSuppression,
        automatic_gain_control_enabled: u.automaticGainControl,
        voice_output_volume: u.outputVolume,
        noise_cancellation_enabled: y,
        input_device_name: p?.name,
        output_device_name: b?.name,
        video_device_name: f?.name,
        audio_subsystem: E,
        audio_layer: O,
        automatic_audio_subsystem: u.automaticAudioSubsystem,
        krisp_nc_model: A,
        audio_output_mode: F,
        ...C,
    });
}
var p = i(652215),
    g = i(670455),
    b = i(375708),
    v = i(564082);
function f(e) {
    let { onClose: t, transitionState: d, analyticsData: f } = e,
        y = b.intl.string(b.t.Ss6tlb),
        E = b.intl.string(b.t.tLi4cR),
        O = {
            impressionName: a.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: f.rtc_connection_id, media_session_id: f.media_session_id },
        },
        A = {
            value: g.Eq.CONNECTION,
            label: b.intl.string(v.default.FVhMw6),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, s.A_)(),
            freeformConfig: { value: g.bO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        F = {
            value: g.Eq.AUDIO,
            label: b.intl.string(v.default.PL2l6A),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, s.Op)({ isMobile: !1 }),
            freeformConfig: { value: g.X.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        C = {
            value: g.Eq.VIDEO,
            label: b.intl.string(v.default["0WFzPh"]),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, s.de)(),
            freeformConfig: { value: g.AO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        M = {
            value: g.Eq.PEOPLE,
            label: b.intl.string(v.default.Moa3W9),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, s.TK)(),
            freeformConfig: { value: g.CW.FREEFORM, label: b.intl.string(b.t.emlT91) },
        };
    return (0, n.jsx)(u.A, {
        onMount: () => {
            _.default.track(p.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: a, feedback: u, category: d, problem: _ } = e;
            if ((t && (0, s.n3)({ feedbackType: g.MW.VOICE, location: "VoiceCallFeedbackModal" }), null != a)) {
                if (
                    (m(p.HAw.CALL_REPORT_PROBLEM, {
                        rating: a,
                        category: d,
                        reasonDescription: _?.value ?? null,
                        variant: _?.variant ?? null,
                        feedback: u,
                        analyticsData: f,
                    }),
                    null != _)
                ) {
                    if (
                        _.value === g.X.NO_AUDIO &&
                        _.variant === g.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && c.Ay.isSelfMute();
                        })(f) &&
                        l.getConfig({ location: "VoiceCallFeedbackModal" }).muteTutorialEnabled
                    )
                        return void (0, o.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("73746"), i.e("21226"), i.e("41737")]).then(
                                i.bind(i, 36304),
                            );
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                    (0, r.r)(a, d, _)
                        ? (0, o.openModalLazy)(async () => {
                              let { default: e } = await i.e("69791").then(i.bind(i, 72514));
                              return (t) =>
                                  (0, n.jsx)(e, {
                                      ...t,
                                      mediaSessionId: f.media_session_id,
                                      rtcConnectionId: f.rtc_connection_id,
                                  });
                          })
                        : (0, o.openModalLazy)(async () => {
                              let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                              return (t) => (0, n.jsx)(e, { body: b.intl.string(b.t["d9+vQ8"]), ...t });
                          });
                }
            }
        },
        onClose: t,
        ratingHeader: y,
        ratingEmojiKind: "face",
        ratingBody: E,
        categoriesHeader: b.intl.string(v.default.tq8598),
        optionsTree: [A, F, C, M],
        impression: O,
        transitionState: d,
    });
}
