n.d(t, { A: () => D });
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
    I = n(435558),
    f = n(506774),
    p = n(439372),
    T = n(891540),
    m = n(885386),
    g = n(409181),
    S = n(881520),
    N = n(670455);
function C(e) {
    let t = m.Yt.getSetting()[e.feedbackType]?.optOutExpiryTime,
        n = null != t && !Number.isNaN(t) && Date.now() < t,
        i = !T.A.hasHotspot(e.hotspot);
    return (
        i &&
            !n &&
            m.Yt.updateSetting((t) => ({ ...t, [e.feedbackType]: { ...t[e.feedbackType], optOutExpiryTime: N.fs } })),
        !n && !i
    );
}
function O(e) {
    return Math.random() < e.chance;
}
function R(e) {
    for (let t of Object.values(g.u).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (
            !(function (e, t) {
                let n,
                    i = m.Yt.getSetting()[t.feedbackType]?.lastImpressionTime;
                return (
                    (null == i || Number.isNaN(i)) &&
                        null != t.storageKey &&
                        (null == (n = f.w.get(t.storageKey) ?? void 0) ||
                            Number.isNaN(n) ||
                            m.Yt.updateSetting((e) => ({
                                ...e,
                                [t.feedbackType]: { ...e[t.feedbackType], lastImpressionTime: n },
                            }))),
                    ((0, I.max)([i, n]) ?? 0) + e.cooldown < Date.now()
                );
            })(e, t)
        )
            return !1;
    return !0;
}
class L extends p.A {
    feedbackTypeToShow = null;
    possiblyShowFeedbackModal(e, t, n) {
        !(function (e) {
            if (__OVERLAY__) return !1;
            let t = S.A.getFeedbackConfig(e) ?? g.u[e],
                n = t.eligibilityChecks ?? [];
            return [O, C, R].every((e) => e(t)) && n.every((e) => e(t));
        })(e) ||
        (null != this.feedbackTypeToShow && N.uf[this.feedbackTypeToShow] < N.uf[e])
            ? n?.()
            : ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n));
    }
    showFeedbackModalDebounced = (0, I.debounce)((e, t) => {
        if (null != this.feedbackTypeToShow) {
            var n;
            ((n = this.feedbackTypeToShow),
                m.Yt.updateSetting((e) => ({ ...e, [n]: { ...e[n], lastImpressionTime: Date.now() } })),
                (this.feedbackTypeToShow = null),
                e());
        } else t?.();
    }, 200);
}
var y = n(652215);
let D = new (class extends L {
    actions = {
        VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
        STREAM_CLOSE: (e) => this.handleStreamClose(e),
        VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
        EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
        IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
    };
    handleVoiceChannelFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(N.MW.VOICE, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("142753"),
                    n.e("415695"),
                    n.e("179652"),
                    n.e("36781"),
                    n.e("713710"),
                    n.e("161379"),
                    n.e("776750"),
                    n.e("268582"),
                    n.e("346102"),
                    n.e("36395"),
                    n.e("155925"),
                    n.e("218413"),
                    n.e("137381"),
                    n.e("259375"),
                    n.e("64054"),
                ]).then(n.bind(n, 47893));
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
            this.possiblyShowFeedbackModal(N.MW.STREAM, () => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("142753"),
                        n.e("415695"),
                        n.e("179652"),
                        n.e("36781"),
                        n.e("713710"),
                        n.e("161379"),
                        n.e("776750"),
                        n.e("268582"),
                        n.e("346102"),
                        n.e("36395"),
                        n.e("155925"),
                        n.e("218413"),
                        n.e("137381"),
                        n.e("259375"),
                        n.e("617171"),
                        n.e("862767"),
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
        this.possiblyShowFeedbackModal(N.MW.VIDEO_BACKGROUND, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("142753"),
                    n.e("415695"),
                    n.e("179652"),
                    n.e("36781"),
                    n.e("161379"),
                    n.e("776750"),
                    n.e("268582"),
                    n.e("346102"),
                    n.e("36395"),
                    n.e("155925"),
                    n.e("218413"),
                    n.e("137381"),
                    n.e("326484"),
                    n.e("319197"),
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
            f = c.A.getWindowOpen(y.MLl.CHANNEL_CALL_POPOUT) ? a.KX : a.SY;
        null != u &&
            d &&
            this.possiblyShowFeedbackModal(N.MW.ACTIVITY, () => {
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("142753"),
                            n.e("415695"),
                            n.e("179652"),
                            n.e("36781"),
                            n.e("161379"),
                            n.e("776750"),
                            n.e("268582"),
                            n.e("346102"),
                            n.e("36395"),
                            n.e("155925"),
                            n.e("218413"),
                            n.e("137381"),
                            n.e("326484"),
                            n.e("943822"),
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
                    { contextKey: f },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: a } = e;
        this.possiblyShowFeedbackModal(N.MW.IN_APP_REPORTS, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("142753"),
                    n.e("415695"),
                    n.e("179652"),
                    n.e("36781"),
                    n.e("161379"),
                    n.e("776750"),
                    n.e("268582"),
                    n.e("346102"),
                    n.e("36395"),
                    n.e("155925"),
                    n.e("218413"),
                    n.e("137381"),
                    n.e("326484"),
                    n.e("466897"),
                ]).then(n.bind(n, 707688));
                return (n) => (0, i.jsx)(e, { ...n, reportId: t, reportType: a });
            });
        });
    };
})();
