var r = n(990547),
    i = n(570833),
    a = n(570140),
    o = n(912471),
    s = n(314897),
    l = n(981631);
(0, r.analyticsTrackingStoreMaker)({
    dispatcher: a.Z,
    actionHandler: {
        CONNECTION_OPEN: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        OVERLAY_INITIALIZE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CURRENT_USER_UPDATE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CONNECTION_CLOSED: () => r.AnalyticsActionHandlers.handleConnectionClosed(),
        FINGERPRINT: () => r.AnalyticsActionHandlers.handleFingerprint(),
        TRACK: (e) => r.AnalyticsActionHandlers.handleTrack(e)
    },
    TRACKING_URL: l.ANM.TRACK,
    waitFor: [s.default],
    getFingerprint: s.default.getFingerprint,
    getSessionId: () => (0, o.Gg)().then((e) => ({ sessionId: null == e ? void 0 : e.uuid })),
    scheduleWhenIdle: i.f
});
