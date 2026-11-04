let i = ["frontId", "backId", "poa"];
d.d(
    t,
    {},
    {
        n: function (l) {
            let t = [];
            return (
                l.checkIdScan && (t.push("frontId"), t.push("backId")),
                l.checkDocumentScan && t.push("poa"),
                t.push("selfie"),
                l.checkVoiceConsent && ((l.voiceConsentQuestions ?? 0) > 0 && t.push("questions"), t.push("speech")),
                t
            );
        },
        r: function (l) {
            let t = ["videoSelfie"];
            return (l.checkIdScan && t.push("videoSelfieId"), t);
        },
        t: function (l) {
            return i.includes(l) ? "environment" : "user";
        },
    },
);
