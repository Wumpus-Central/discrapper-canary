"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(231723),
    a = n(969151),
    o = n(587895),
    l = n(652896),
    u = n(834757),
    d = n(869146),
    c = n(961350),
    _ = n(734057),
    f = n(290863),
    E = n(383501),
    h = n(162605),
    p = n(37962),
    m = n(670455),
    g = n(652215);
class A extends p.A {
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
        this.possiblyShowFeedbackModal(m.MW.VOICE, () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("78180"), n.e("59392")]).then(
                    n.bind(n, 302252),
                );
                return (n) => (0, r.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleStreamClose = (e) => {
        let { streamKey: t, canShowFeedback: s } = e,
            a = (0, l.Iy)(t),
            o = (0, u.Ee)(a, f.A),
            d = h.A.getVideoStats(t) ?? {},
            _ = {
                media_session_id: h.A.getMediaSessionId(t),
                rtc_connection_id: h.A.getRtcConnectionId(t),
                stream_region: h.A.getRegion(t),
                max_viewers: h.A.getMaxViewers(t),
                parent_media_session_id: h.A.getRTCConnection(t)?.parentMediaSessionId,
                ...d,
            };
        s &&
            this.possiblyShowFeedbackModal(m.MW.STREAM, () => {
                (0, i.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("16833"), n.e("78180"), n.e("33062")]).then(
                        n.bind(n, 218738),
                    );
                    return (t) =>
                        (0, r.jsx)(e, {
                            stream: a,
                            streamApplication: o,
                            isStreamer: a.ownerId === c.default.getId(),
                            ...t,
                            analyticsData: _,
                        });
                });
            });
    };
    handleVideoBackgroundShowFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(m.MW.VIDEO_BACKGROUND, () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("51548")]).then(
                    n.bind(n, 932140),
                );
                return (n) => (0, r.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleActivityClose = (e) => {
        let { applicationId: t, location: l, showFeedback: u } = e,
            c = o.A.getApplication(t),
            f = (0, a.H)(l),
            h = _.A.getChannel(f),
            p = { rtc_connection_id: E.A.getRTCConnectionId(), media_session_id: E.A.getMediaSessionId() },
            A = d.A.getWindowOpen(g.MLl.CHANNEL_CALL_POPOUT) ? s.KX : s.SY;
        null != c &&
            u &&
            this.possiblyShowFeedbackModal(m.MW.ACTIVITY, () => {
                (0, i.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("18225")]).then(
                            n.bind(n, 969611),
                        );
                        return (t) =>
                            (0, r.jsx)(e, {
                                ...t,
                                activityApplication: c,
                                channel: h,
                                embeddedActivityLocation: l,
                                analyticsData: p,
                            });
                    },
                    { contextKey: A },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: s } = e;
        this.possiblyShowFeedbackModal(m.MW.IN_APP_REPORTS, () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("26489")]).then(
                    n.bind(n, 255189),
                );
                return (n) => (0, r.jsx)(e, { ...n, reportId: t, reportType: s });
            });
        });
    };
    handleBlockUserFeedback = () => {
        this.possiblyShowFeedbackModal(m.MW.BLOCK_USER, () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("73602")]).then(
                    n.bind(n, 307750),
                );
                return (t) => (0, r.jsx)(e, { ...t });
            });
        });
    };
    handleAgeVerificationFeedback = (e) => {
        let { dismissibleContent: t } = e;
        this.possiblyShowFeedbackModal(m.MW.AGE_VERIFICATION, () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("48500")]).then(
                    n.bind(n, 949004),
                );
                return (n) => (0, r.jsx)(e, { dismissibleContent: t, ...n });
            });
        });
    };
}
let I = new A();
