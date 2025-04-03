n.d(t, { VoiceFilterFeedbackModal: () => x });
var o = n(200651);
n(192379);
var a = n(990547),
    i = n(332664),
    s = n(142497),
    l = n(445102),
    c = n(981631),
    r = n(531578),
    u = n(190378),
    d = n(388032);
let _ = [r.aZ.BAD, r.aZ.GOOD],
    m = {
        [r.aZ.BAD]: d.NW.string(d.t.zGnUBQ),
        [r.aZ.GOOD]: d.NW.string(d.t.SqprKS)
    },
    b = ['other'],
    p = [
        {
            label: d.NW.string(d.t.DVEGuL),
            code: 1001,
            value: 'nobody_could_hear_me'
        },
        {
            label: d.NW.string(d.t.Q3e5wM),
            code: 1002,
            value: 'audio_not_understood'
        },
        {
            label: d.NW.string(d.t['D98z+/']),
            code: 1003,
            value: 'audio_cut'
        },
        {
            label: d.NW.string(d.t.lWtGvb),
            code: 1004,
            value: 'audio_robotic'
        },
        {
            label: d.NW.string(d.t.FARCFB),
            code: 1005,
            value: 'audio_delay'
        },
        {
            label: d.NW.string(d.t['4nEvAQ']),
            code: 1006,
            value: 'bad_volume'
        },
        {
            label: d.NW.string(d.t.xVRTjI),
            code: 1007,
            value: 'audio_echo'
        },
        {
            label: d.NW.string(d.t.qvP5v7),
            code: 1008,
            value: 'audio_unchanged'
        },
        {
            label: d.NW.string(d.t.fpevoa),
            code: 1099,
            value: 'other'
        }
    ];
function x(e) {
    let { onClose: t, transitionState: n, analyticsData: r } = e;
    return (0, o.jsx)(i.Z, {
        modalType: 'voice_filter',
        header: d.NW.string(d.t.zZAORE),
        impression: {
            impressionName: a.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: r.rtc_connection_id,
                media_session_id: r.media_session_id
            }
        },
        ratingOptions: _,
        ratingTextLabels: m,
        problemTitle: d.NW.string(d.t.FJmoxM),
        problems: p,
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t, n;
            let { rating: o, problem: a, dontShowAgain: i, feedback: d } = e;
            i && (0, s.Kw)(u.v.VOICE_FILTER_FEEDBACK),
                null != o &&
                    (0, l.Z)(c.rMx.VOICE_FILTER_FEEDBACK, {
                        rating: o,
                        reasonCode: null != (t = null == a ? void 0 : a.code) ? t : null,
                        reasonDescription: null != (n = null == a ? void 0 : a.value) ? n : null,
                        feedback: d,
                        analyticsData: r
                    });
        },
        onClose: t,
        transitionState: n,
        otherKey: 'other'
    });
}
