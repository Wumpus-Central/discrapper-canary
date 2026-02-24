"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(735438),
    s = n(397927),
    a = n(969151),
    o = n(587895),
    l = n(652896),
    u = n(834757),
    c = n(869146),
    d = n(961350),
    _ = n(734057),
    f = n(290863),
    p = n(383501),
    h = n(162605),
    m = n(37962),
    E = n(670455),
    g = n(652215);
class A extends m.A {
    actions = {
        VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
        STREAM_CLOSE: (e) => this.handleStreamClose(e),
        VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
        EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
        IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
        BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback(),
        AGE_VERIFICATION_SHOW_FEEDBACK: (e) => this.handleAgeVerificationFeedback(e),
    };
    handleVoiceChannelFeedback = (e) => {
        let { analyticsData: t } = e;
        (0, i.sum)(t.duration_speaking_voice_filter_ms) >= 5e3 &&
            this.possiblyShowFeedbackModal(E.MW.VOICE_FILTER, () => {
                (0, s.mMO)(async () => {
                    let { VoiceFilterFeedbackModal: e } = await Promise.all([
                        n.e("16833"),
                        n.e("26484"),
                        n.e("21847"),
                    ]).then(n.bind(n, 455071));
                    return (n) => (0, r.jsx)(e, { ...n, analyticsData: t });
                });
            }),
            this.possiblyShowFeedbackModal(E.MW.VOICE, () => {
                (0, s.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("16833"), n.e("49911"), n.e("67612")]).then(
                        n.bind(n, 302252),
                    );
                    return (n) => (0, r.jsx)(e, { ...n, analyticsData: t });
                });
            });
    };
    handleStreamClose = (e) => {
        let { streamKey: t, canShowFeedback: i } = e,
            a = (0, l.Iy)(t),
            o = (0, u.Ee)(a, f.A),
            c = h.A.getVideoStats(t) ?? {},
            _ = {
                media_session_id: h.A.getMediaSessionId(t),
                rtc_connection_id: h.A.getRtcConnectionId(t),
                stream_region: h.A.getRegion(t),
                max_viewers: h.A.getMaxViewers(t),
                parent_media_session_id: h.A.getRTCConnection(t)?.parentMediaSessionId,
                ...c,
            };
        i &&
            this.possiblyShowFeedbackModal(E.MW.STREAM, () => {
                (0, s.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("16833"), n.e("49911"), n.e("1154")]).then(
                        n.bind(n, 218738),
                    );
                    return (t) =>
                        (0, r.jsx)(e, {
                            stream: a,
                            streamApplication: o,
                            isStreamer: a.ownerId === d.default.getId(),
                            ...t,
                            analyticsData: _,
                        });
                });
            });
    };
    handleVideoBackgroundShowFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(E.MW.VIDEO_BACKGROUND, () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("53536")]).then(
                    n.bind(n, 932140),
                );
                return (n) => (0, r.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleActivityClose = (e) => {
        let { applicationId: t, location: i, showFeedback: l } = e,
            u = o.A.getApplication(t),
            d = (0, a.H)(i),
            f = _.A.getChannel(d),
            h = { rtc_connection_id: p.A.getRTCConnectionId(), media_session_id: p.A.getMediaSessionId() },
            m = c.A.getWindowOpen(g.MLl.CHANNEL_CALL_POPOUT) ? s.KX8 : s.SYi;
        null != u &&
            l &&
            this.possiblyShowFeedbackModal(E.MW.ACTIVITY, () => {
                (0, s.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("14547")]).then(
                            n.bind(n, 969611),
                        );
                        return (t) =>
                            (0, r.jsx)(e, {
                                ...t,
                                activityApplication: u,
                                channel: f,
                                embeddedActivityLocation: i,
                                analyticsData: h,
                            });
                    },
                    { contextKey: m },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: i } = e;
        this.possiblyShowFeedbackModal(E.MW.IN_APP_REPORTS, () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("5205")]).then(
                    n.bind(n, 255189),
                );
                return (n) => (0, r.jsx)(e, { ...n, reportId: t, reportType: i });
            });
        });
    };
    handleBlockUserFeedback = () => {
        this.possiblyShowFeedbackModal(E.MW.BLOCK_USER, () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("8421")]).then(
                    n.bind(n, 307750),
                );
                return (t) => (0, r.jsx)(e, { ...t });
            });
        });
    };
    handleAgeVerificationFeedback = (e) => {
        let { dismissibleContent: t } = e;
        this.possiblyShowFeedbackModal(E.MW.AGE_VERIFICATION, () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("56160")]).then(
                    n.bind(n, 949004),
                );
                return (n) => (0, r.jsx)(e, { dismissibleContent: t, ...n });
            });
        });
    };
}
let I = new A();
