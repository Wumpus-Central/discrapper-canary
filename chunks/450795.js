var r = n(990547),
    i = n(570833),
    o = n(570140),
    a = n(912471),
    s = n(626135),
    l = n(314897),
    c = n(981631);
(0, r.analyticsTrackingStoreMaker)({
    dispatcher: o.Z,
    actionHandler: {
        CONNECTION_OPEN: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        OVERLAY_INITIALIZE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CURRENT_USER_UPDATE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CONNECTION_CLOSED: () => r.AnalyticsActionHandlers.handleConnectionClosed(),
        FINGERPRINT: () => r.AnalyticsActionHandlers.handleFingerprint(),
        TRACK: (e) => r.AnalyticsActionHandlers.handleTrack(e),
    },
    TRACKING_URL: c.ANM.TRACK,
    waitFor: [l.default],
    getFingerprint: l.default.getFingerprint,
    getSessionId: () => (0, a.Gg)().then((e) => ({ sessionId: null == e ? void 0 : e.uuid })),
    getLaunchSignature: () => s.launchSignature,
    scheduleWhenIdle: i.f,
});
