"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(969151),
    a = n(587895),
    o = n(652896),
    l = n(834757),
    u = n(869146),
    c = n(961350),
    d = n(734057),
    _ = n(290863),
    f = n(383501),
    p = n(162605),
    h = n(37962),
    m = n(670455),
    E = n(652215);
class g extends h.A {
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
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("78180"), n.e("64780")]).then(
                    n.bind(n, 302252),
                );
                return (n) => (0, r.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleStreamClose = (e) => {
        let { streamKey: t, canShowFeedback: s } = e,
            a = (0, o.Iy)(t),
            u = (0, l.Ee)(a, _.A),
            d = p.A.getVideoStats(t) ?? {},
            f = {
                media_session_id: p.A.getMediaSessionId(t),
                rtc_connection_id: p.A.getRtcConnectionId(t),
                stream_region: p.A.getRegion(t),
                max_viewers: p.A.getMaxViewers(t),
                parent_media_session_id: p.A.getRTCConnection(t)?.parentMediaSessionId,
                ...d,
            };
        s &&
            this.possiblyShowFeedbackModal(m.MW.STREAM, () => {
                (0, i.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("16833"), n.e("78180"), n.e("45326")]).then(
                        n.bind(n, 218738),
                    );
                    return (t) =>
                        (0, r.jsx)(e, {
                            stream: a,
                            streamApplication: u,
                            isStreamer: a.ownerId === c.default.getId(),
                            ...t,
                            analyticsData: f,
                        });
                });
            });
    };
    handleVideoBackgroundShowFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(m.MW.VIDEO_BACKGROUND, () => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("91784")]).then(
                    n.bind(n, 932140),
                );
                return (n) => (0, r.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleActivityClose = (e) => {
        let { applicationId: t, location: o, showFeedback: l } = e,
            c = a.A.getApplication(t),
            _ = (0, s.H)(o),
            p = d.A.getChannel(_),
            h = { rtc_connection_id: f.A.getRTCConnectionId(), media_session_id: f.A.getMediaSessionId() },
            g = u.A.getWindowOpen(E.MLl.CHANNEL_CALL_POPOUT) ? i.KX8 : i.SYi;
        null != c &&
            l &&
            this.possiblyShowFeedbackModal(m.MW.ACTIVITY, () => {
                (0, i.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("34311")]).then(
                            n.bind(n, 969611),
                        );
                        return (t) =>
                            (0, r.jsx)(e, {
                                ...t,
                                activityApplication: c,
                                channel: p,
                                embeddedActivityLocation: o,
                                analyticsData: h,
                            });
                    },
                    { contextKey: g },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: s } = e;
        this.possiblyShowFeedbackModal(m.MW.IN_APP_REPORTS, () => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("63845")]).then(
                    n.bind(n, 255189),
                );
                return (n) => (0, r.jsx)(e, { ...n, reportId: t, reportType: s });
            });
        });
    };
    handleBlockUserFeedback = () => {
        this.possiblyShowFeedbackModal(m.MW.BLOCK_USER, () => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("66641")]).then(
                    n.bind(n, 307750),
                );
                return (t) => (0, r.jsx)(e, { ...t });
            });
        });
    };
    handleAgeVerificationFeedback = (e) => {
        let { dismissibleContent: t } = e;
        this.possiblyShowFeedbackModal(m.MW.AGE_VERIFICATION, () => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("10824")]).then(
                    n.bind(n, 949004),
                );
                return (n) => (0, r.jsx)(e, { dismissibleContent: t, ...n });
            });
        });
    };
}
let A = new g();
