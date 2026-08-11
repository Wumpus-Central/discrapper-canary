"use strict";
n.d(t, { A: () => m });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(231723),
    s = n(969151),
    l = n(587895),
    o = n(652896),
    d = n(834757),
    c = n(869146),
    u = n(280450),
    _ = n(734057),
    E = n(290863),
    A = n(763827),
    h = n(116956),
    I = n(37962),
    f = n(670455),
    p = n(652215);
class T extends I.A {
    actions = {
        VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
        STREAM_CLOSE: (e) => this.handleStreamClose(e),
        VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
        EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
        IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
    };
    handleVoiceChannelFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(f.MW.VOICE, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("98064"),
                    n.e("4079"),
                    n.e("8891"),
                    n.e("22255"),
                    n.e("55925"),
                    n.e("40794"),
                    n.e("37381"),
                    n.e("47004"),
                    n.e("13937"),
                    n.e("31389"),
                ]).then(n.bind(n, 492));
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleStreamClose = (e) => {
        let { streamKey: t, canShowFeedback: a } = e,
            s = (0, o.Iy)(t),
            l = (0, d.Ee)(s, E.A),
            c = h.A.getVideoStats(t) ?? {},
            _ = {
                media_session_id: h.A.getMediaSessionId(t),
                rtc_connection_id: h.A.getRtcConnectionId(t),
                stream_region: h.A.getRegion(t),
                max_viewers: h.A.getMaxViewers(t),
                parent_media_session_id: h.A.getRTCConnection(t)?.parentMediaSessionId,
                ...c,
            };
        a &&
            this.possiblyShowFeedbackModal(f.MW.STREAM, () => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("98064"),
                        n.e("4079"),
                        n.e("8891"),
                        n.e("22255"),
                        n.e("55925"),
                        n.e("40794"),
                        n.e("37381"),
                        n.e("47004"),
                        n.e("13937"),
                        n.e("17171"),
                        n.e("62767"),
                    ]).then(n.bind(n, 218738));
                    return (t) =>
                        (0, i.jsx)(e, {
                            stream: s,
                            streamApplication: l,
                            isStreamer: s.ownerId === u.default.getId(),
                            ...t,
                            analyticsData: _,
                        });
                });
            });
    };
    handleVideoBackgroundShowFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(f.MW.VIDEO_BACKGROUND, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("98064"),
                    n.e("4079"),
                    n.e("8891"),
                    n.e("22255"),
                    n.e("55925"),
                    n.e("40794"),
                    n.e("37381"),
                    n.e("26484"),
                    n.e("19197"),
                ]).then(n.bind(n, 932140));
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleActivityClose = (e) => {
        let { applicationId: t, location: o, showFeedback: d } = e,
            u = l.A.getApplication(t),
            E = (0, s.H)(o),
            h = _.A.getChannel(E),
            I = { rtc_connection_id: A.A.getRTCConnectionId(), media_session_id: A.A.getMediaSessionId() },
            T = c.A.getWindowOpen(p.MLl.CHANNEL_CALL_POPOUT) ? a.KX : a.SY;
        null != u &&
            d &&
            this.possiblyShowFeedbackModal(f.MW.ACTIVITY, () => {
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("98064"),
                            n.e("4079"),
                            n.e("8891"),
                            n.e("22255"),
                            n.e("55925"),
                            n.e("40794"),
                            n.e("37381"),
                            n.e("26484"),
                            n.e("43822"),
                        ]).then(n.bind(n, 751901));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                activityApplication: u,
                                channel: h,
                                embeddedActivityLocation: o,
                                analyticsData: I,
                            });
                    },
                    { contextKey: T },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: a } = e;
        this.possiblyShowFeedbackModal(f.MW.IN_APP_REPORTS, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("98064"),
                    n.e("4079"),
                    n.e("8891"),
                    n.e("22255"),
                    n.e("55925"),
                    n.e("40794"),
                    n.e("37381"),
                    n.e("26484"),
                    n.e("66897"),
                ]).then(n.bind(n, 707688));
                return (n) => (0, i.jsx)(e, { ...n, reportId: t, reportType: a });
            });
        });
    };
}
let m = new T();
