"use strict";
n.d(t, { f: () => r });
let r = {
    WEB_AND_IOS: new Set(["canary", "ptb", "stable"]),
    ANDROID: new Set(["betaRelease", "canaryRelease", "googleRelease"]),
    QUEST_VR: new Set(["questBetaRelease", "questCanaryRelease", "questProductionRelease"]),
    OTHER: new Set(["N/A", "adhoc", "development", "staging"]),
    ALL: new Set([
        "N/A",
        "adhoc",
        "betaRelease",
        "canary",
        "canaryRelease",
        "development",
        "googleRelease",
        "ptb",
        "questBetaRelease",
        "questCanaryRelease",
        "questProductionRelease",
        "stable",
        "staging",
    ]),
};
