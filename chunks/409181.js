var i = n(450510),
    r = n(495867),
    a = n(670455);
let s = { chance: 0.2, cooldown: 864e5 },
    l = {
        [a.MW.VOICE]: {
            ...s,
            group: a.h0.AV,
            hotspot: i._2.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: a.MW.VOICE,
            eligibilityChecks: [
                function (e) {
                    return !r.A.getWasEverRtcConnected() || r.A.getWasEverMultiParticipant();
                },
            ],
        },
        [a.MW.STREAM]: {
            ...s,
            group: a.h0.AV,
            hotspot: i._2.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: a.MW.STREAM,
        },
        [a.MW.VIDEO_BACKGROUND]: {
            ...s,
            group: a.h0.AV,
            hotspot: i._2.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: a.MW.VIDEO_BACKGROUND,
        },
        [a.MW.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: a.h0.AV,
            hotspot: i._2.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: a.MW.ACTIVITY,
        },
        [a.MW.IN_APP_REPORTS]: {
            cooldown: 1728e5,
            chance: 0.5,
            group: a.h0.SAFETY,
            hotspot: i._2.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: a.MW.IN_APP_REPORTS,
        },
        [a.MW.SEARCH_RESULTS]: {
            ...s,
            group: a.h0.SEARCH,
            hotspot: i._2.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: a.MW.SEARCH_RESULTS,
        },
        [a.MW.CONJURE]: {
            cooldown: 36e5,
            chance: 1,
            group: a.h0.BUILDER,
            hotspot: i._2.CONJURE_FEEDBACK,
            storageKey: "lastConjureFeedback",
            feedbackType: a.MW.CONJURE,
        },
    };
n.d(t, {}, { u: l });
