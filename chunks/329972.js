"use strict";
n.d(t, { v: () => r });
let i = (0, n(945810).mj)({
        name: "2025-09-server-nsfw-level",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    r = (e) => i.getConfig({ location: e }).enabled;
