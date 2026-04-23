"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(231723),
    a = n(969151),
    o = n(587895),
    l = n(652896),
    d = n(834757),
    _ = n(869146),
    u = n(495544),
    c = n(734057),
    E = n(290863),
    h = n(763827),
    m = n(116956),
    f = n(37962),
    g = n(670455),
    p = n(652215);
class A extends f.A {
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
        this.possiblyShowFeedbackModal(g.MW.VOICE, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("78180"), n.e("90801")]).then(n.bind(n, 492));
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleStreamClose = (e) => {
        let { streamKey: t, canShowFeedback: s } = e,
            a = (0, l.Iy)(t),
            o = (0, d.Ee)(a, E.A),
            _ = m.A.getVideoStats(t) ?? {},
            c = {
                media_session_id: m.A.getMediaSessionId(t),
                rtc_connection_id: m.A.getRtcConnectionId(t),
                stream_region: m.A.getRegion(t),
                max_viewers: m.A.getMaxViewers(t),
                parent_media_session_id: m.A.getRTCConnection(t)?.parentMediaSessionId,
                ..._,
            };
        s &&
            this.possiblyShowFeedbackModal(g.MW.STREAM, () => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("16833"), n.e("78180"), n.e("93939")]).then(
                        n.bind(n, 218738),
                    );
                    return (t) =>
                        (0, i.jsx)(e, {
                            stream: a,
                            streamApplication: o,
                            isStreamer: a.ownerId === u.default.getId(),
                            ...t,
                            analyticsData: c,
                        });
                });
            });
    };
    handleVideoBackgroundShowFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(g.MW.VIDEO_BACKGROUND, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("51548")]).then(
                    n.bind(n, 932140),
                );
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleActivityClose = (e) => {
        let { applicationId: t, location: l, showFeedback: d } = e,
            u = o.A.getApplication(t),
            E = (0, a.H)(l),
            m = c.A.getChannel(E),
            f = { rtc_connection_id: h.A.getRTCConnectionId(), media_session_id: h.A.getMediaSessionId() },
            A = _.A.getWindowOpen(p.MLl.CHANNEL_CALL_POPOUT) ? s.KX : s.SY;
        null != u &&
            d &&
            this.possiblyShowFeedbackModal(g.MW.ACTIVITY, () => {
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("78137")]).then(
                            n.bind(n, 751901),
                        );
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                activityApplication: u,
                                channel: m,
                                embeddedActivityLocation: l,
                                analyticsData: f,
                            });
                    },
                    { contextKey: A },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: s } = e;
        this.possiblyShowFeedbackModal(g.MW.IN_APP_REPORTS, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("48682")]).then(
                    n.bind(n, 707688),
                );
                return (n) => (0, i.jsx)(e, { ...n, reportId: t, reportType: s });
            });
        });
    };
    handleBlockUserFeedback = () => {
        this.possiblyShowFeedbackModal(g.MW.BLOCK_USER, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("73602")]).then(
                    n.bind(n, 307750),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
        });
    };
    handleAgeVerificationFeedback = (e) => {
        let { dismissibleContent: t } = e;
        this.possiblyShowFeedbackModal(g.MW.AGE_VERIFICATION, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("48500")]).then(
                    n.bind(n, 949004),
                );
                return (n) => (0, i.jsx)(e, { dismissibleContent: t, ...n });
            });
        });
    };
}
let I = new A();
