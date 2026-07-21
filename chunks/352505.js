"use strict";
n.d(t, { o: () => r, r: () => i });
let i = (0, n(945810).mj)({
    name: "2026-05-game-mentions-v2",
    kind: "user",
    defaultConfig: { enabled: !1, showNewTag: !1, combineMentionAutocomplete: !1 },
    variations: {
        0: { enabled: !1, showNewTag: !1, combineMentionAutocomplete: !1 },
        1: { enabled: !0, showNewTag: !0, combineMentionAutocomplete: !1 },
        2: { enabled: !0, showNewTag: !1, combineMentionAutocomplete: !1 },
        3: { enabled: !0, showNewTag: !1, combineMentionAutocomplete: !0 },
    },
});
function r(e) {
    return i.useConfig({ location: e }).enabled;
}
