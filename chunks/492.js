i.d(t, { default: () => f });
var n = i(627968);
i(64700);
var o = i(110259),
    a = i(192308);
let l = (0, i(945810).mj)({
    name: "2026-02-mute-tutorial",
    kind: "user",
    defaultConfig: { muteTutorialEnabled: !1 },
    variations: { 1: { muteTutorialEnabled: !0 } },
});
var r = i(930932),
    _ = i(878234),
    s = i(382935),
    d = i(559633),
    u = i(969341),
    c = i(954571);
async function m(e, t) {
    let { rating: i, category: n, reasonCode: o, reasonDescription: a, variant: l, feedback: r, analyticsData: _ } = t,
        s = u.Ay.getSettings(),
        m = u.Ay.getInputDeviceId(),
        p = u.Ay.getInputDevices()[m],
        b = u.Ay.getOutputDeviceId(),
        g = u.Ay.getOutputDevices()[b],
        v = u.Ay.getVideoDeviceId(),
        f = u.Ay.getVideoDevices()[v],
        y = u.Ay.getNoiseCancellation(),
        O = u.Ay.getMediaEngine().getAudioSubsystem(),
        E = u.Ay.getMediaEngine().getAudioLayer(),
        A = await d.A.getKrispModel(),
        { output_audio_route_type: F, ...C } = _ ?? {};
    c.default.track(e, {
        rating: i ?? "no response",
        category: n,
        reason_code: o,
        reason_description: a,
        reason_variant: l,
        feedback: r,
        audio_input_mode: s.mode,
        automatic_audio_input_sensitivity_enabled: s.modeOptions.autoThreshold,
        audio_input_sensitivity: s.modeOptions.threshold,
        vad_use_advanced_voice_activity: s.modeOptions.vadUseKrisp,
        echo_cancellation_enabled: s.echoCancellation,
        noise_suppression_enabled: s.noiseSuppression,
        automatic_gain_control_enabled: s.automaticGainControl,
        voice_output_volume: s.outputVolume,
        noise_cancellation_enabled: y,
        input_device_name: p?.name,
        output_device_name: g?.name,
        video_device_name: f?.name,
        audio_subsystem: O,
        audio_layer: E,
        automatic_audio_subsystem: s.automaticAudioSubsystem,
        krisp_nc_model: A,
        audio_output_mode: F,
        ...C,
    });
}
var p = i(652215),
    b = i(670455),
    g = i(985018),
    v = i(564082);
function f(e) {
    let { onClose: t, transitionState: d, analyticsData: f } = e,
        y = g.intl.string(g.t.Ss6tlb),
        O = g.intl.string(g.t.tLi4cR),
        E = {
            impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: f.rtc_connection_id, media_session_id: f.media_session_id },
        },
        A = {
            value: b.Eq.CONNECTION,
            label: g.intl.string(v.default.FVhMw6),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, r.A_)(),
            freeformConfig: { value: b.bO.FREEFORM, label: g.intl.string(g.t.emlT91) },
        },
        F = {
            value: b.Eq.AUDIO,
            label: g.intl.string(v.default.PL2l6A),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, r.Op)({ isMobile: !1 }),
            freeformConfig: { value: b.X.FREEFORM, label: g.intl.string(g.t.emlT91) },
        },
        C = {
            value: b.Eq.VIDEO,
            label: g.intl.string(v.default["0WFzPh"]),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, r.de)(),
            freeformConfig: { value: b.AO.FREEFORM, label: g.intl.string(g.t.emlT91) },
        },
        M = {
            value: b.Eq.PEOPLE,
            label: g.intl.string(v.default.Moa3W9),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, r.TK)(),
            freeformConfig: { value: b.CW.FREEFORM, label: g.intl.string(g.t.emlT91) },
        };
    return (0, n.jsx)(s.A, {
        onMount: () => {
            c.default.track(p.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: o, feedback: s, category: d, problem: c } = e;
            if ((t && (0, r.n3)({ feedbackType: b.MW.VOICE, location: "VoiceCallFeedbackModal" }), null != o)) {
                if (
                    (m(p.HAw.CALL_REPORT_PROBLEM, {
                        rating: o,
                        category: d,
                        reasonDescription: c?.value ?? null,
                        variant: c?.variant ?? null,
                        feedback: s,
                        analyticsData: f,
                    }),
                    null != c)
                ) {
                    if (
                        c.value === b.X.NO_AUDIO &&
                        c.variant === b.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && u.Ay.isSelfMute();
                        })(f) &&
                        l.getConfig({ location: "VoiceCallFeedbackModal" }).muteTutorialEnabled
                    )
                        return void (0, a.openModalLazy)(async () => {
                            let { default: e } = await i.e("41737").then(i.bind(i, 36304));
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                    (0, _.r)(o, d, c)
                        ? (0, a.openModalLazy)(async () => {
                              let { default: e } = await i.e("69791").then(i.bind(i, 72514));
                              return (t) =>
                                  (0, n.jsx)(e, {
                                      ...t,
                                      mediaSessionId: f.media_session_id,
                                      rtcConnectionId: f.rtc_connection_id,
                                  });
                          })
                        : (0, a.openModalLazy)(async () => {
                              let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                              return (t) => (0, n.jsx)(e, { body: g.intl.string(g.t["d9+vQ8"]), ...t });
                          });
                }
            }
        },
        onClose: t,
        ratingHeader: y,
        ratingEmojiKind: "face",
        ratingBody: O,
        categoriesHeader: g.intl.string(v.default.tq8598),
        optionsTree: [A, F, C, M],
        impression: E,
        transitionState: d,
    });
}
