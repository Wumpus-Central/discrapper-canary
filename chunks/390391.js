"use strict";
n.d(t, { e: () => s });
var r = n(945810),
    i = n(713754);
let s = (0, r.mj)({
    name: "2026-02-process-boost-on-voice",
    kind: "user",
    defaultConfig: { processPriority: i.E6.HIGH, threadPriorityConfiguration: 0 },
    variations: {
        1: { processPriority: i.E6.NORMAL, threadPriorityConfiguration: 0 },
        2: { processPriority: i.E6.NORMAL, threadPriorityConfiguration: 1 },
        3: { processPriority: i.E6.NORMAL, threadPriorityConfiguration: 2 },
        4: { processPriority: i.E6.NORMAL, threadPriorityConfiguration: 3 },
    },
});
