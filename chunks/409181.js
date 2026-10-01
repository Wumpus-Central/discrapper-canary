n.d(t, { u: () => o });
var i = n(450510),
    r = n(868974),
    a = n(763827),
    s = n(670455);
let l = { chance: 0.2, cooldown: 864e5 },
    o = {
        [s.MW.VOICE]: {
            ...l,
            group: s.h0.AV,
            hotspot: i._2.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: s.MW.VOICE,
            eligibilityChecks: [
                function (e) {
                    return !a.A.getWasEverRtcConnected() || a.A.getWasEverMultiParticipant();
                },
            ],
        },
        [s.MW.STREAM]: {
            ...l,
            group: s.h0.AV,
            hotspot: i._2.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: s.MW.STREAM,
        },
        [s.MW.VIDEO_BACKGROUND]: {
            ...l,
            group: s.h0.AV,
            hotspot: i._2.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: s.MW.VIDEO_BACKGROUND,
        },
        [s.MW.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: s.h0.AV,
            hotspot: i._2.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: s.MW.ACTIVITY,
        },
        [s.MW.IN_APP_REPORTS]: {
            cooldown: 1728e5,
            chance: 0.5,
            group: s.h0.SAFETY,
            hotspot: i._2.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: s.MW.IN_APP_REPORTS,
        },
        [s.MW.SEARCH_RESULTS]: {
            ...l,
            group: s.h0.SEARCH,
            hotspot: i._2.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: s.MW.SEARCH_RESULTS,
            eligibilityChecks: [
                function (e) {
                    return !!(0, r.s)({ location: "FeedbackManager" });
                },
            ],
        },
        [s.MW.VIBEGRATIONS]: {
            cooldown: 36e5,
            chance: 1,
            group: s.h0.BUILDER,
            hotspot: i._2.VIBEGRATIONS_FEEDBACK,
            storageKey: "lastVibegrationsFeedback",
            feedbackType: s.MW.VIBEGRATIONS,
        },
    };
