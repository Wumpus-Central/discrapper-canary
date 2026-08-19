"use strict";
n.d(t, { A: () => a });
var i = n(945810);
let r = { showPTTJoinTooltip: !1, showPTTIconIndicator: !1, showPTTNoKeybindWarning: !1, showPTTSpeakingIndicator: !1 },
    a = (0, i.mj)({
        name: "2025-12-09-ptt-education",
        kind: "user",
        defaultConfig: r,
        variations: {
            1: { ...r, showPTTJoinTooltip: !0, showPTTNoKeybindWarning: !0, showPTTSpeakingIndicator: !0 },
            2: { ...r, showPTTIconIndicator: !0 },
        },
    });
