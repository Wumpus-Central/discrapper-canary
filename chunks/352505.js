"use strict";
n.d(t, { o4: () => s, rY: () => r });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-05-game-mentions-v2",
        kind: "user",
        defaultConfig: { enabled: !1, showNewTag: !1, combineMentionAutocomplete: !1 },
        variations: {
            0: { enabled: !1, showNewTag: !1, combineMentionAutocomplete: !1 },
            1: { enabled: !0, showNewTag: !0, combineMentionAutocomplete: !1 },
            2: { enabled: !0, showNewTag: !1, combineMentionAutocomplete: !1 },
            3: { enabled: !0, showNewTag: !1, combineMentionAutocomplete: !0 },
        },
    }),
    a = (0, i.mj)({
        name: "2026-07-game-mentions-v2-mobile",
        kind: "user",
        defaultConfig: { enabled: !1, showNewTag: !1, combineMentionAutocomplete: !1 },
        variations: {
            0: { enabled: !1, showNewTag: !1, combineMentionAutocomplete: !1 },
            1: { enabled: !0, showNewTag: !0, combineMentionAutocomplete: !1 },
            2: { enabled: !0, showNewTag: !1, combineMentionAutocomplete: !1 },
            3: { enabled: !0, showNewTag: !1, combineMentionAutocomplete: !0 },
        },
    });
function s(e) {
    return a.useConfig({ location: e }), r.useConfig({ location: e }).enabled;
}
