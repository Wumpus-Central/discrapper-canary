o.d(t, { VoiceFilterFeedbackModal: () => p });
var i = o(627968);
o(64700);
var n = o(110259),
    a = o(930932),
    _ = o(612479),
    c = o(131935),
    s = o(652215),
    l = o(670455),
    d = o(985018);
let r = [l.P0.BAD, l.P0.GOOD],
    u = { [l.P0.BAD]: d.intl.string(d.t.zGnUBV), [l.P0.GOOD]: d.intl.string(d.t.SqprKf) },
    b = ["other"],
    m = [
        { label: d.intl.string(d.t.DVEGuL), code: 1001, value: "nobody_could_hear_me" },
        { label: d.intl.string(d.t.Q3e5wF), code: 1002, value: "audio_not_understood" },
        { label: d.intl.string(d.t["D98z+y"]), code: 1003, value: "audio_cut" },
        { label: d.intl.string(d.t.lWtGvX), code: 1004, value: "audio_robotic" },
        { label: d.intl.string(d.t.FARCFA), code: 1005, value: "audio_delay" },
        { label: d.intl.string(d.t["4nEvAa"]), code: 1006, value: "bad_volume" },
        { label: d.intl.string(d.t.xVRTjP), code: 1007, value: "audio_echo" },
        { label: d.intl.string(d.t.qvP5vz), code: 1008, value: "audio_unchanged" },
        { label: d.intl.string(d.t.fpevoR), code: 1099, value: "other" },
    ];
function p(e) {
    let { onClose: t, transitionState: o, analyticsData: p } = e;
    return (0, i.jsx)(_.A, {
        modalType: "voice_filter",
        header: d.intl.string(d.t.zZAORN),
        impression: {
            impressionName: n.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: p.rtc_connection_id, media_session_id: p.media_session_id },
        },
        ratingOptions: r,
        ratingTextLabels: u,
        problemTitle: d.intl.string(d.t.FJmoxF),
        problems: m,
        freeformNeededProblems: b,
        onSubmit: function (e) {
            let { rating: t, problem: o, dontShowAgain: i, feedback: n } = e;
            i && (0, a.n3)({ feedbackType: l.MW.VOICE_FILTER, location: "VoiceFilterFeedbackModal" }),
                null != t &&
                    (0, c.A)(s.HAw.VOICE_FILTER_FEEDBACK, {
                        rating: t,
                        reasonCode: o?.code ?? null,
                        reasonDescription: o?.value ?? null,
                        feedback: n,
                        analyticsData: p,
                    });
        },
        onClose: t,
        transitionState: o,
        otherKey: "other",
    });
}
