n.d(t, { Z: () => I }), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(16609),
    s = n(812206),
    o = n(569545),
    l = n(687516),
    u = n(981283),
    c = n(928518),
    d = n(314897),
    f = n(592125),
    _ = n(158776),
    p = n(19780),
    h = n(959457),
    m = n(178635),
    g = n(531578),
    E = n(981631);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class y extends m.Z {
    _initialize() {
        u.Z.init();
    }
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: (e) => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
                USER_DM_MUTE_SHOW_FEEDBACK: (e) => this.handleUserDmMuteFeedback(e),
                BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback()
            }),
            v(this, 'handleVoiceChannelFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(g.nw.VOICE, () => {
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e('96888').then(n.bind(n, 988645));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                analyticsData: t
                            });
                    });
                });
            }),
            v(this, 'handleStreamClose', (e) => {
                var t;
                let { streamKey: a, canShowFeedback: s } = e,
                    u = (0, o.my)(a),
                    c = (0, l.L2)(u, _.Z),
                    f = null !== (t = h.Z.getVideoStats(a)) && void 0 !== t ? t : {},
                    p = {
                        media_session_id: h.Z.getMediaSessionId(a),
                        rtc_connection_id: h.Z.getRtcConnectionId(a),
                        stream_region: h.Z.getRegion(a),
                        max_viewers: h.Z.getMaxViewers(a),
                        ...f
                    };
                s &&
                    this.possiblyShowFeedbackModal(g.nw.STREAM, () => {
                        (0, r.ZDy)(async () => {
                            let { default: e } = await n.e('23657').then(n.bind(n, 142402));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    stream: u,
                                    streamApplication: c,
                                    isStreamer: u.ownerId === d.default.getId(),
                                    ...t,
                                    analyticsData: p
                                });
                        });
                    });
            }),
            v(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(g.nw.VIDEO_BACKGROUND, () => {
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e('11495').then(n.bind(n, 801320));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                analyticsData: t
                            });
                    });
                });
            }),
            v(this, 'handleActivityClose', (e) => {
                let { applicationId: t, location: o, showFeedback: l } = e,
                    u = s.Z.getApplication(t),
                    d = (0, a.pY)(o),
                    _ = f.Z.getChannel(d),
                    h = {
                        rtc_connection_id: p.Z.getRTCConnectionId(),
                        media_session_id: p.Z.getMediaSessionId()
                    },
                    m = c.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT) ? r.u1M : r.z1l;
                null != u &&
                    null != _ &&
                    l &&
                    this.possiblyShowFeedbackModal(g.nw.ACTIVITY, () => {
                        (0, r.ZDy)(
                            async () => {
                                let { default: e } = await n.e('4413').then(n.bind(n, 450634));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        activityApplication: u,
                                        channel: _,
                                        analyticsData: h
                                    });
                            },
                            { contextKey: m }
                        );
                    });
            }),
            v(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: t, reportType: a } = e;
                this.possiblyShowFeedbackModal(g.nw.IN_APP_REPORTS, () => {
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e('72135').then(n.bind(n, 442173));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                reportId: t,
                                reportType: a
                            });
                    });
                });
            }),
            v(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: t } = e;
                this.possiblyShowFeedbackModal(g.nw.USER_DM_MUTE, () => {
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e('10620').then(n.bind(n, 408561));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            });
                    });
                });
            }),
            v(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(g.nw.BLOCK_USER, () => {
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                });
            });
    }
}
let I = new y();
