"use strict";
n.d(t, { A: () => r });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-07_cuda_cache_management",
    label: "CUDA cache management",
    defaultConfig: { prewarm: !1, clear: !1 },
    treatments: [
        { id: 1, label: "Prewarm + Clear", config: { prewarm: !0, clear: !0 } },
        { id: 2, label: "Prewarm only", config: { prewarm: !0, clear: !1 } },
        { id: 3, label: "Clear only", config: { prewarm: !1, clear: !0 } },
    ],
});
