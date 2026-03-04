"use strict";
n.d(t, { FS: () => a, K6: () => l, eP: () => r });
var i = n(600975),
    s = n(688151);
let l = (0, i.C)({
    kind: "guild",
    id: "2026-02_standard_sidebar_popover_gaps",
    label: "Standardize Guild Sidebar Popover Gaps",
    defaultConfig: { standardPopoverGap: null },
    commonTriggerPoint: s.$G.CONNECTION_OPEN,
    treatments: [
        { id: 1, label: "Standard Gap (0)", config: { standardPopoverGap: 0 } },
        { id: 2, label: "Standard Gap (4)", config: { standardPopoverGap: 4 } },
        { id: 3, label: "Standard Gap (8)", config: { standardPopoverGap: 8 } },
        { id: 4, label: "Standard Gap (12)", config: { standardPopoverGap: 12 } },
    ],
});
function a(e) {
    let { guildId: t, location: n } = e;
    return l.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !1 });
}
function r(e) {
    let { guildId: t, location: n } = e;
    return l.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !1 });
}
