n.d(t, { VoiceFilterFeedbackModal: () => x });
var i = n(200651);
n(192379);
var o = n(990547),
    a = n(332664),
    l = n(142497),
    s = n(445102),
    c = n(981631),
    r = n(531578),
    u = n(190378),
    d = n(388032);
let _ = [r.aZ.BAD, r.aZ.GOOD],
    m = {
        [r.aZ.BAD]: d.intl.string(d.t.zGnUBQ),
        [r.aZ.GOOD]: d.intl.string(d.t.SqprKS)
    },
    b = ['other'],
    p = [
        {
            label: d.intl.string(d.t.DVEGuL),
            code: 1001,
            value: 'nobody_could_hear_me'
        },
        {
            label: d.intl.string(d.t.Q3e5wM),
            code: 1002,
            value: 'audio_not_understood'
        },
        {
            label: d.intl.string(d.t['D98z+/']),
            code: 1003,
            value: 'audio_cut'
        },
        {
            label: d.intl.string(d.t.lWtGvb),
            code: 1004,
            value: 'audio_robotic'
        },
        {
            label: d.intl.string(d.t.FARCFB),
            code: 1005,
            value: 'audio_delay'
        },
        {
            label: d.intl.string(d.t['4nEvAQ']),
            code: 1006,
            value: 'bad_volume'
        },
        {
            label: d.intl.string(d.t.xVRTjI),
            code: 1007,
            value: 'audio_echo'
        },
        {
            label: d.intl.string(d.t.qvP5v7),
            code: 1008,
            value: 'audio_unchanged'
        },
        {
            label: d.intl.string(d.t.fpevoa),
            code: 1099,
            value: 'other'
        }
    ];
function x(e) {
    let { onClose: t, transitionState: n, analyticsData: r } = e;
    return (0, i.jsx)(a.Z, {
        modalType: 'voice_filter',
        header: d.intl.string(d.t.zZAORE),
        impression: {
            impressionName: o.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: r.rtc_connection_id,
                media_session_id: r.media_session_id
            }
        },
        ratingOptions: _,
        ratingTextLabels: m,
        problemTitle: d.intl.string(d.t.FJmoxM),
        problems: p,
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t, n;
            let { rating: i, problem: o, dontShowAgain: a, feedback: d } = e;
            a && (0, l.Kw)(u.v.VOICE_FILTER_FEEDBACK),
                null != i &&
                    (0, s.Z)(c.rMx.VOICE_FILTER_FEEDBACK, {
                        rating: i,
                        reasonCode: null != (t = null == o ? void 0 : o.code) ? t : null,
                        reasonDescription: null != (n = null == o ? void 0 : o.value) ? n : null,
                        feedback: d,
                        analyticsData: r
                    });
        },
        onClose: t,
        transitionState: n,
        otherKey: 'other'
    });
}
